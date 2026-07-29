type ModelContextTool = {
  name: string;
  description: string;
  inputSchema: Record<string, unknown>;
  execute: (input: Record<string, unknown>) => Promise<unknown>;
};

type ModelContext = {
  registerTool: (tool: ModelContextTool) => AbortController;
};

declare global {
  interface Navigator {
    modelContext?: ModelContext;
  }
}

const SERVICES = [
  {
    name: 'Consultation',
    description:
      'Initial meeting to discuss expectations, vision, needs, inspirations, and lifestyle.',
  },
  {
    name: 'Concept Design',
    description:
      'Functional 2D layouts divided into zones, plus interior visualizations.',
  },
  {
    name: 'Detailed Design',
    description:
      'Execution-ready package with plans, lighting layouts, elevations, and specifications.',
  },
  {
    name: 'Author Supervision',
    description:
      'On-site support during construction and material selection assistance.',
  },
];

const NAV_PATHS = ['/', '/projects', '/about', '/services', '/contact'] as const;

export function registerWebMcpTools(): void {
  if (!navigator.modelContext?.registerTool) {
    return;
  }

  navigator.modelContext.registerTool({
    name: 'get_contact_info',
    description: 'Get IL Studio contact email and LinkedIn profile',
    inputSchema: {
      type: 'object',
      properties: {},
    },
    execute: async () => ({
      studio: 'Iwona Loureiro Studio',
      email: 'il.studio@outlook.com',
      linkedin: 'https://www.linkedin.com/in/iwona-loureiro-b9ba4b3b/',
      website: 'https://ilstudio.design',
    }),
  });

  navigator.modelContext.registerTool({
    name: 'list_services',
    description: 'List interior design services offered by IL Studio',
    inputSchema: {
      type: 'object',
      properties: {},
    },
    execute: async () => ({ services: SERVICES }),
  });

  navigator.modelContext.registerTool({
    name: 'navigate_to',
    description: 'Navigate to a page on the IL Studio website',
    inputSchema: {
      type: 'object',
      properties: {
        path: {
          type: 'string',
          enum: [...NAV_PATHS],
          description: 'Page path to navigate to',
        },
      },
      required: ['path'],
    },
    execute: async (input) => {
      const path = String(input.path ?? '/');
      if (!NAV_PATHS.includes(path as (typeof NAV_PATHS)[number])) {
        throw new Error(`Invalid path. Allowed: ${NAV_PATHS.join(', ')}`);
      }
      window.location.assign(path);
      return { navigated: path };
    },
  });
}
