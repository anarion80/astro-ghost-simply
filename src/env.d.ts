/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
/// <reference types="astro-dynamic-import/client" />

interface ImportMetaEnv {
    readonly GHOST_API_KEY: string;
    readonly GHOST_API_URL: string;
}
