import type { Router } from "vue-router";
import i18n from "@/shared/i18n";
import { DEFAULT_LANG, Language, SUPPORTED_LANGS } from "@/shared/i18n/types";

export function setupLanguageGuard(router: Router) {
  router.beforeEach((to) => {
    const lang = to.params.lang as string | undefined;

    if (!lang) {
      return {
        ...to,
        params: { ...to.params, lang: DEFAULT_LANG },
      };
    }

    if (!SUPPORTED_LANGS.includes(lang as Language)) {
      return {
        ...to,
        params: { ...to.params, lang: DEFAULT_LANG },
      };
    }

    if (i18n.global.locale.value !== lang) {
      i18n.global.locale.value = lang;
    }
  });
}
