<script lang="ts" setup>
  import type { SelectOption } from "@/shared/form/SelectField";
  import SelectField from "@/shared/form/SelectField/SelectField.vue";
  import { Language, LANGUAGE_ICON } from "./types";
  import { ref } from "vue";

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

  const selectedLanguage = ref(Language.English);
</script>

<template>
  <div class="select-lng">
    <SelectField :options="options" v-model="selectedLanguage" />
  </div>
</template>

<style lang="scss"></style>
