#!/usr/bin/env node

import { createHash } from 'node:crypto';
import { readFileSync, writeFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const root = join(__dirname, '..');
const publicDir = join(root, 'public');
const skillsDir = join(publicDir, '.well-known', 'agent-skills');
const siteUrl = 'https://ilstudio.design';

const skillDescriptions = {
  'site-contact': 'Retrieve public contact information for IL Studio',
  'site-navigation': 'Navigate IL Studio website pages',
  'site-services': 'List interior design services offered by IL Studio',
};

function sha256File(filePath) {
  const content = readFileSync(filePath);
  return `sha256:${createHash('sha256').update(content).digest('hex')}`;
}

function discoverSkills() {
  const entries = readdirSync(skillsDir);
  const skills = [];

  for (const entry of entries) {
    const skillPath = join(skillsDir, entry, 'SKILL.md');
    try {
      if (statSync(skillPath).isFile()) {
        skills.push({
          name: entry,
          type: 'skill-md',
          description: skillDescriptions[entry] ?? `IL Studio ${entry} skill`,
          url: `${siteUrl}/.well-known/agent-skills/${entry}/SKILL.md`,
          digest: sha256File(skillPath),
        });
      }
    } catch {
      // skip non-skill directories like index output
    }
  }

  return skills.sort((a, b) => a.name.localeCompare(b.name));
}

function generateSitemap() {
  const pages = ['/', '/projects', '/about', '/services', '/contact'];
  const urls = pages
    .map(
      (path) => `  <url>
    <loc>${siteUrl}${path === '/' ? '/' : path}</loc>
    <changefreq>monthly</changefreq>
    <priority>${path === '/' ? '1.0' : '0.8'}</priority>
  </url>`,
    )
    .join('\n');

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

  writeFileSync(join(publicDir, 'sitemap.xml'), sitemap);
}

function generateAgentSkillsIndex() {
  const index = {
    $schema: 'https://schemas.agentskills.io/discovery/0.2.0/schema.json',
    skills: discoverSkills(),
  };

  writeFileSync(
    join(skillsDir, 'index.json'),
    `${JSON.stringify(index, null, 2)}\n`,
  );
}

generateSitemap();
generateAgentSkillsIndex();

console.log('Generated sitemap.xml and agent-skills/index.json');
