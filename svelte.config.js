import adapter from "@sveltejs/adapter-netlify";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			headers: {
				'/*': {
					'Content-Security-Policy': 
						`default-src 'self'; 
						script-src 'self' https://kit.fontawesome.com; 
						style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; 
						img-src 'self' data: blob:; 
						font-src 'self' https://fonts.gstatic.com; 
						connect-src 'self'; 
						frame-ancestors 'none'; 
						base-uri 'self'; 
						form-action 'self';`,
					'X-Frame-Options': 'DENY',
					'X-Content-Type-Options': 'nosniff',
					'Referrer-Policy': 'strict-origin-when-cross-origin',
					'Strict-Transport-Security': 'max-age=63072000; includeSubDomains; preload',
					'Permissions-Policy': 'geolocation=(), camera=(), microphone=()'
				}
			}
		})
	}
};

export default config;
