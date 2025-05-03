import adapter from "@sveltejs/adapter-netlify";
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({}),
		csp: {
			mode: 'hash',
			directives: {
				'default-src': ["'none'"],
				'script-src': ["'self'", "https://kit.fontawesome.com/aabe3eec3e.js"],
				'style-src': ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
				'img-src': ["'self'", "data:", "blob:", "https://www.netlify.com"],
				'font-src': ["'self'", "https://fonts.gstatic.com", "https://ka-f.fontawesome.com"],
				'connect-src': ["'self'", "https://kit.fontawesome.com", "https://ka-f.fontawesome.com"],
				'frame-ancestors': ["'none'"],
				'base-uri': ["'self'"],
				'form-action': ["'self'"]
			}
		}
	}
};

export default config;
