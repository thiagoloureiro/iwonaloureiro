# IL Studio Site API

Read-only HTTP API for agent discovery of studio information.

Base URL: `https://ilstudio.design/api/v1`

## Authentication

Public endpoints require no authentication. See [auth.md](/auth.md) for agent registration metadata.

## Endpoints

### GET /health

Returns API health status.

```json
{
  "status": "ok",
  "service": "IL Studio Site API",
  "version": "1.0.0"
}
```

### GET /contact

Returns public contact information.

```json
{
  "studio": "Iwona Loureiro Studio",
  "email": "il.studio@outlook.com",
  "linkedin": "https://www.linkedin.com/in/iwona-loureiro-b9ba4b3b/",
  "website": "https://ilstudio.design"
}
```

## OpenAPI specification

[openapi/site-api.yaml](/openapi/site-api.yaml)

## Browser tools

WebMCP tools are registered on the homepage for in-browser agent interaction.
