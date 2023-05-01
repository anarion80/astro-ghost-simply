import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import image from "@astrojs/image";
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'http://localhost/',
	integrations: [react(), sitemap(), image({
		serviceEntryPoint: '@astrojs/image/sharp'
	})],
});
