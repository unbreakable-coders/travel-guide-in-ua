import { ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import i18n from "./index";
import { DEFAULT_LANG, Language } from "./types";

export function useLanguage() {
  const router = useRouter();
  const route = useRoute();

  const language = ref<Language>((route.params.lang as Language) || DEFAULT_LANG);

  watch(language, (lang) => {
    i18n.global.locale.value = lang;

    router.push({
      name: route.name!,
      params: {
        ...route.params,
        lang,
      },
      query: route.query,
    });
  });

  watch(
    () => route.params.lang,
    (lang) => {
      if (lang && lang !== language.value) {
        language.value = lang as Language;
      }
    }
  );

  return {
    language,
    setLanguage: (lang: Language) => (language.value = lang),
  };
}
