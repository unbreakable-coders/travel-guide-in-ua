import { createI18n } from "vue-i18n";
import { DEFAULT_LANG } from "./types";

type Messages = Record<string, Record<string, Record<string, unknown>>>;

function loadLocaleMessages(): Messages {
  const modules = import.meta.glob("./locales/**/*.json", { eager: true }) as Record<
    string,
    { default: unknown }
  >;

  const messages: Messages = {};

  for (const path in modules) {
    const matched = path.match(/\.\/locales\/([^/]+)\/([^/]+)\.json$/);
    if (!matched) continue;

    const [, locale, namespace] = matched as [string, string, string];

    if (!messages[locale]) messages[locale] = {};
    messages[locale][namespace] = modules[path]!.default as Record<string, unknown>;
  }

  return messages;
}

export const messages = loadLocaleMessages();

const i18n = createI18n({
  legacy: false,
  locale: DEFAULT_LANG,
  fallbackLocale: DEFAULT_LANG,
  messages,
});

export default i18n;
