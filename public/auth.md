# IL Studio auth.md

Agent authentication and registration for **Iwona Loureiro Studio** (`https://ilstudio.design`).

## Audience

This document is for AI agents that need to discover how to access IL Studio APIs and browser tools.

## Protected resources

| Resource | Identifier |
| -------- | ---------- |
| Site API | `https://ilstudio.design/api/v1` |

OAuth Protected Resource Metadata: [/.well-known/oauth-protected-resource](https://ilstudio.design/.well-known/oauth-protected-resource)

## Authorization server

Issuer: `https://ilstudio.design`

Discovery document: [/.well-known/oauth-authorization-server](https://ilstudio.design/.well-known/oauth-authorization-server)

## Registration

Anonymous agent access is supported for read-only public endpoints.

- **Method:** anonymous
- **Register URI:** `https://ilstudio.design/.well-known/oauth-authorization-server`
- **Credential use:** No bearer token required for public read endpoints (`/api/v1/health`, `/api/v1/contact`).

For browser-based tools, use WebMCP on the homepage (`navigator.modelContext.registerTool`).

## API catalog

Machine-readable API discovery: [/.well-known/api-catalog](https://ilstudio.design/.well-known/api-catalog)

## Contact

- Email: il.studio@outlook.com
- Human documentation: [docs/api.md](https://ilstudio.design/docs/api.md)
