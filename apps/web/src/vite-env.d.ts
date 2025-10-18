/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_STRAPI_API_URL: string;
  readonly VITE_STRAPI_API_TOKEN?: string;
  readonly VITE_PLAUSIBLE_DOMAIN: string;
  readonly VITE_SENTRY_DSN?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
