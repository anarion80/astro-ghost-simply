import { getSettings } from "../lib/api";
const settings = await getSettings();
const modules = import.meta.glob("../i18n/*.js", {
    eager: true,
    import: "default",
});

const languages = {};

for (const [path, lang] of Object.entries(modules)) {
    const name = path
        .split("/")
        .pop()
        .replace(/\.\w+$/, "");
    languages[name] = lang;
}

const useLang = () => {
    return languages[settings.locale.replace(/-/g, "_")];
};

const t = (name, fallback) => {
    const lang = useLang();
    if (lang[name] === undefined && fallback === null) {
        console.log(`Cannot find ${name} in lang file.`);
    }

    if (lang[name] === undefined || lang[name] === null) {
        return fallback;
    }

    return lang[name];
};

export { useLang, t };
