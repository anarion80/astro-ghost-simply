import { getSettings } from "../lib/api"

const useLang = async() => {
    const settings = await getSettings()

    return settings.locale || `en`
}

const getTranslation = text => (name, fallback) => {
    if (text.content[name] === undefined && fallback === null) {
        console.log(`Cannot find ${name} in lang file.`)
    }

    if (text.content[name] === undefined || text.content[name] === null) {
        return fallback
    }

    return text.content[name]
}

export { useLang, getTranslation }