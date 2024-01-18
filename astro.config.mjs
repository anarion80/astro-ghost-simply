import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import dynamicImport from 'astro-dynamic-import';

// https://astro.build/config
export default defineConfig({
	site: 'http://localhost/',
	integrations: [react(), sitemap(), dynamicImport()],
	image: {
		remotePatterns: [{ protocol: "https" }],
	}
});
