import fs from 'fs';

const toPascalCase = (text) => text ? text.replace(/(^\w|-\w)/g, clearAndUpper) : ``

const clearAndUpper = (text) => text.replace(/-/, "").toUpperCase()

const typeDefault = (type) => type === `post` ? `Post` : type === `page` ? `Page` : `Post`

export const getCustomTemplate = function getCustomTemplate(post) {
    if (post.tags.length === 0) {
        return typeDefault(post.type)
    } else {
        const template = post.tags.filter(tag => tag.name.includes(`#custom-`)).length > 0 && post.tags.filter(tag => tag.name.includes(`#custom-`))[0].name.slice(1)
        if (template === null || template === undefined || !fs.existsSync(`./src/components/custom/${toPascalCase(template)}.astro`)) {
            return typeDefault(post.type)
        } else {
            return `custom/` + toPascalCase(template)
        }
    }
}
