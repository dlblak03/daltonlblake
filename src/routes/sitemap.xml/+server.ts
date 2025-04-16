export async function GET() {
    let date: string = '2025-01-04'
    let body: string = `
    <?xml version="1.0" encoding="UTF-8" ?>
    <urlset
        xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="https://www.w3.org/1999/xhtml"
        xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
        xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
        xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
    >
        <url>
            <loc>https://daltonblake.de/</loc>
            <lastmod>` + date + `</lastmod>
            <changefreq>weekly</changefreq>
            <priority>1.0</priority>
        </url>

        <url>
            <loc>https://daltonblake.de/projects</loc>
            <lastmod>` + date + `</lastmod>
            <changefreq>weekly</changefreq>
            <priority>1.0</priority>
        </url>

        <url>
            <loc>https://daltonblake.de/blog</loc>
            <lastmod>` + date + `</lastmod>
            <changefreq>weekly</changefreq>
            <priority>1.0</priority>
        </url>

        <url>
            <loc>https://daltonblake.de/attributions</loc>
            <lastmod>` + date + `</lastmod>
            <changefreq>yearly</changefreq>
            <priority>1.0</priority>
        </url>

        <url>
            <loc>https://daltonblake.de/impressum</loc>
            <lastmod>` + date + `</lastmod>
            <changefreq>yearly</changefreq>
            <priority>1.0</priority>
        </url>

        <url>
            <loc>https://daltonblake.de/privacy-policy</loc>
            <lastmod>` + date + `</lastmod>
            <changefreq>yearly</changefreq>
            <priority>1.0</priority>
        </url>
    </urlset>`
	return new Response(
		body.trim(),
		{
			headers: {
				'Content-Type': 'application/xml'
			}
		}
	);
}