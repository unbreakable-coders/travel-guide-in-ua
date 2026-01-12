<script lang="ts" setup>
  import type { SelectOption } from "@/shared/form/SelectField";
  import SelectField from "@/shared/form/SelectField/SelectField.vue";
  import { LANGUAGE_ICON } from "./types";
  import { Language } from "@/shared/i18n/types";
  import { useLanguage } from "@/shared/i18n/useLanguage";

  const { language } = useLanguage();

  const options: SelectOption[] = [
    {
      label: "English",
      value: Language.English,
      icon: LANGUAGE_ICON[Language.English],
    },
    {
      label: "Українська",
      value: Language.Ukrainian,
      icon: LANGUAGE_ICON[Language.Ukrainian],
    },
  ];
</script>

<template>
  <div class="select-lng">
    <SelectField :options="options" v-model="language" />
  </div>
</template>

<style lang="scss"></style>
