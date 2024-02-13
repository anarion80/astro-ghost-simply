export default {
    siteUrl: `https://gatsby-ghost-simply.netlify.app`, // Site domain. Do not include a trailing slash!

    postsPerPage: 12, // Number of posts shown on paginated pages (changes this requires sometimes to delete the cache)

    siteTitleMeta: `Ghost Blog`, // This allows an alternative site title for meta data for pages.
    siteDescriptionMeta: `Thoughts, stories and ideas.`, // This allows an alternative site description for meta data for pages.

    shareImageWidth: 1000, // Change to the width of your default share image
    shareImageHeight: 523, // Change to the height of your default share image

    shortTitle: `Ghost Blog`, // Used for App manifest e.g. Mobile Home Screen
    siteIcon: `favicon.png`, // Logo in /static dir used for SEO, RSS, and App manifest
    backgroundColor: `#e9e9e9`, // Used for Offline Manifest
    themeColor: `#15171A`, // Used for Offline Manifest
    fontStrategy: `selfHosted`, // Used for specifying where fonts should come from ('selfHosted' || 'base64' || 'cdn')

    locale: `en`,

    menuDropdown: [
        {
            label: `About`,
            url: `/about`,
        },
        {
            label: `Documentation`,
            url: `/docs`,
        },
        {
            label: `Privacy`,
            url: `/privacy`,
        },
        {
            label: `Contact`,
            url: `/contact-us`,
        },
        {
            label: `Index Archive`,
            url: `/index-archive`,
        },
        {
            label: `Index Featured`,
            url: `/index-featured`,
        },
        {
            label: `Index Featured Slider`,
            url: `/index-featured-slider`,
        },
        {
            label: `Index Grid`,
            url: `/index-grid`,
        },
        {
            label: `Index Medium`,
            url: `/index-medium`,
        },
        {
            label: `Index Medium Sidebar`,
            url: `/index-medium-sidebar`,
        },
        {
            label: `Index Sidebar`,
            url: `/index-sidebar`,
        },
        {
            label: `Index Personal`,
            url: `/index-personal`,
        },
        {
            label: `Index Photographer`,
            url: `/index-photographer`,
        },
    ],
    followSocialMedia: [
        {
            service: `youtube`,
            title: `YOUR_TITLE`,
            url: `YOUR_URL`,
        },
        {
            service: `instagram`,
            title: `YOUR_TITLE`,
            url: `YOUR_URL`,
        },
        {
            service: `github`,
            title: `Ghost Github`,
            url: `https://github.com/tryghost/ghost`,
        },
        {
            service: `linkedin`,
            title: `YOUR_TITLE`,
            url: `YOUR_URL`,
        },
        {
            service: `rss`,
            title: `YOUR_TITLE`,
            url: `YOUR_URL`,
        },
        /*{
            service: `snapchat`,
            title: `YOUR_TITLE`,
            url: `YOUR_URL`,
        },
        {
            service: `dribbble`,
            title: `YOUR_TITLE`,
            url: `YOUR_URL`,
        },
        {
            service: `spotify`,
            title: `YOUR_TITLE`,
            url: `YOUR_URL`,
        },
        {
            service: `codepen`,
            title: `YOUR_TITLE`,
            url: `YOUR_URL`,
        },
        {
            service: `behance`,
            title: `YOUR_TITLE`,
            url: `YOUR_URL`,
        },
        {
            service: `flickr`,
            title: `YOUR_TITLE`,
            url: `YOUR_URL`,
        },
        {
            service: `telegram`,
            title: `YOUR_TITLE`,
            url: `YOUR_URL`,
        },
        {
            service: `vimeo`,
            title: `YOUR_TITLE`,
            url: `YOUR_URL`,
        },
        {
            service: `twitch`,
            title: `YOUR_TITLE`,
            url: `YOUR_URL`,
        },
        {
            service: `vk`,
            title: `YOUR_TITLE`,
            url: `YOUR_URL`,
        },
        {
            service: `slack`,
            title: `YOUR_TITLE`,
            url: `YOUR_URL`,
        },
        {
            service: `tumblr`,
            title: `YOUR_TITLE`,
            url: `YOUR_URL`,
        },
        {
            service: `discord`,
            title: `YOUR_TITLE`,
            url: `YOUR_URL`,
        },
        */
    ],
    searchSettings: {
        key: "b65148c547c7646037343029a1",
        url: "https://ghost.nas.anarion.pl",
        debug: false,
        searchOn: 'keyup',
        loadOn: 'focus',
        limit: 10,
        cacheMaxAge: 1800,
        version: 'v3',
        inputId: ['search-field'],
        outputId: ['search-results'],
        outputChildsType: false,
        // postsFields: ['title', 'slug', 'html'],
        postsFields: ['title', 'slug'],
        postsExtraFields: [],
        postsFormats: [],
        indexedFields: ['title', 'slug', 'html'],
        template: function (post) {
            return `<a href="/${post.slug}/" class="block py-2 pr-3 pl-10"><svg class="icon icon--search" style="margin-left:-28px"><use xlink:href="#icon-search"></use></svg> ${post.title}</a>`
        },
        emptyTemplate: function () { },
        customProcessing: function (post) { return post },
        indexOptions: {},
        searchOptions: {},

    },
}