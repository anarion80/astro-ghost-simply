import rss from '@astrojs/rss';
import { getSettings } from '@lib/api';
import siteConfig from '@utils/siteConfig';
import sanitizeHtml from 'sanitize-html';
import { getPosts } from '@lib/api';

const posts = await getPosts({ filter: 'visibility:public+tag:-hash-portfolio+tag:-hash-podcast+tag:-hash-custom-kusi-doc' });
const settings = await getSettings();

export function GET(context) {
    return rss({
        // `<title>` field in output xml
        title: siteConfig.siteTitleMeta || settings.title,
        // `<description>` field in output xml
        description: siteConfig.siteDescriptionMeta || settings.description,
        // Pull in your project "site" from the endpoint context
        // https://docs.astro.build/en/reference/api-reference/#contextsite
        site: context.site,
        // Array of `<item>`s in output xml
        // See "Generating items" section for examples using content collections and glob imports
        items: posts.map((post) => ({
            title: post.title,
            pubDate: post.published_at,
            description: post?.excerpt,
            link: `/${post.slug}/`,
            content: sanitizeHtml(post.html),
        })),
        // (optional) inject custom xml
        customData: `<language>${settings.lang}</language>`,
        // (optional) add arbitrary metadata to opening <rss> tag
        xmlns: { h: 'http://www.w3.org/TR/html4/' },
        // (optional) add trailing slashes to URLs (default: true)
        trailingSlash: false,
    });
}