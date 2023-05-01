import fuzzysort from "fuzzysort"
import fetch from 'node-fetch'

/**
 * Thanks => https://github.com/HauntedThemes/ghost-search
 */
export default class GhostSearch {
    constructor(args) {
        this.check = false

        const defaults = {
            url: window.location.origin,
            key: ``,
            version: `v4`,
            input: `#search-field`,
            results: `#search-results`,
            defaultValue: ``,
            template: result => `<a href="/${result.slug}/" class="block py-2 pr-3 pl-10"><svg class="icon icon--search" style="margin-left:-28px"><use xlink:href="#icon-search"></use></svg> ${result.title}</a>`,
            options: {
                keys: [
                    `title`,
                ],
                limit: 10,
                threshold: -3500,
                allowTypo: false,
            },
            api: {
                resource: `posts`,
                parameters: {
                    limit: `all`,
                    fields: [`title`, `slug`],
                    filter: ``,
                    include: ``,
                    order: ``,
                    formats: ``,
                    page: ``,
                },
            },
            on: {
                beforeDisplay: function () { },
                // eslint-disable-next-line no-unused-vars
                afterDisplay: function (results) { },
                beforeFetch: () => document.body.classList.add(`is-loading`),
                afterFetch: () => setTimeout(() => {
                    document.body.classList.remove(`is-loading`)
                }, 4000),
            },
        }

        const merged = this.mergeDeep(defaults, args)
        Object.assign(this, merged)
        this.init()
    }

    mergeDeep(target, source) {
        if ((target && typeof target === `object` && !Array.isArray(target) && target !== null) && (source && typeof source === `object` && !Array.isArray(source) && source !== null)) {
            Object.keys(source).forEach((key) => {
                if (source[key] && typeof source[key] === `object` && !Array.isArray(source[key]) && source[key] !== null) {
                    if (!target[key]) {
                        Object.assign(target, { [key]: {} })
                    }
                    this.mergeDeep(target[key], source[key])
                } else {
                    Object.assign(target, { [key]: source[key] })
                }
            })
        }
        return target
    }

    fetch() {
        this.on.beforeFetch()

        // const ghostAPI = new GhostContentAPI({
        //   url: this.url,
        //   key: this.key,
        //   version: this.version
        // })

        const browse = {}
        const parameters = this.api.parameters

        for (const key in parameters) {
            if (parameters[key] !== ``) {
                browse[key] = parameters[key]
            }
        }

        const encoded = Object.entries(browse).map(([k, v]) => `${k}=${encodeURIComponent(v)}`).join(`&`)
        const apiUrl = `${this.url}/ghost/api/${this.version}/content/${this.api.resource}/?key=${this.key}&${encoded}`

        const getApi = async (url) => {
            const response = await fetch(url)
            const data = await response.json()
            return data
        }

        getApi(apiUrl)
            .then(data => this.search(data[this.api.resource]))
            .catch(err => console.error(err))

        // ghostAPI[this.api.resource]
        //   .browse(browse)
        //   .then((data) => {
        //     console.log(data)
        //     this.search(data)
        //   })
        //   .catch((err) => {
        //     console.error(err)
        //   })
    }

    createElementFromHTML(htmlString) {
        const div = document.createElement(`div`)
        div.innerHTML = htmlString.trim()
        return div.firstChild
    }

    displayResults(data) {
        if (document.querySelectorAll(this.results)[0].firstChild !== null && document.querySelectorAll(this.results)[0].firstChild !== ``) {
            while (document.querySelectorAll(this.results)[0].firstChild) {
                document.querySelectorAll(this.results)[0].removeChild(document.querySelectorAll(this.results)[0].firstChild)
            }
        }

        let inputValue = document.querySelectorAll(this.input)[0].value
        if (this.defaultValue !== ``) {
            inputValue = this.defaultValue
        }
        const results = fuzzysort.go(inputValue, data, {
            keys: this.options.keys,
            limit: this.options.limit,
            allowTypo: this.options.allowTypo,
            threshold: this.options.threshold,
        })
        for (const key in results) {
            if (key < results.length) {
                document.querySelectorAll(this.results)[0].appendChild(this.createElementFromHTML(this.template(results[key].obj)))
            }
        }

        this.on.afterDisplay(results)
        this.defaultValue = ``
    }

    search(data) {
        this.on.afterFetch(data)
        this.check = true

        if (this.defaultValue !== ``) {
            this.on.beforeDisplay()
            this.displayResults(data)
        }

        document.querySelectorAll(this.input)[0].addEventListener(`keyup`, () => {
            this.on.beforeDisplay()
            this.displayResults(data)
        })
    }

    checkArgs() {
        if (!document.querySelectorAll(this.input).length) {
            console.log(`Input not found.`)
            return false
        }

        if (!document.querySelectorAll(this.results).length) {
            console.log(`Results not found.`)
            return false
        }

        if (this.url === ``) {
            console.log(`Content API Client Library host missing. Please set the host. Must not end in a trailing slash.`)
            return false
        }

        if (this.key === ``) {
            console.log(`Content API Client Library key missing. Please set the key. Hex string copied from the "Integrations" screen in Ghost Admin.`)
            return false
        }

        return true
    }

    validate() {
        if (!this.checkArgs()) {
            return false
        }

        return true
    }

    init() {
        if (!this.validate()) {
            return
        }

        if (this.defaultValue !== ``) {
            document.querySelectorAll(this.input)[0].value = this.defaultValue
            window.onload = () => {
                if (!this.check) {
                    this.fetch()
                }
            }
        }

        document.querySelectorAll(this.input)[0].addEventListener(`focus`, () => {
            if (!this.check) {
                this.fetch()
            }
        })
    }
}
