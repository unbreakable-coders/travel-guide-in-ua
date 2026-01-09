<script setup lang="ts">
  import { ref, watch } from "vue";
  import type { TabOption } from "./types";
  import TabButton from "../TabButton/TabButton.vue";
  import { TabButtonState } from "../TabButton";

  interface Props {
    options: TabOption[];
    defaultOption?: TabOption;
  }

  const props = defineProps<Props>();

  const emit = defineEmits<{
    (e: "update", value: string | number): void;
  }>();

  const getInitialValue = () => {
    if (props.defaultOption) return props.defaultOption.value;
    return props.options[0]?.value;
  };

  const activeValue = ref<string | number | undefined>(getInitialValue());

  const setActive = (option: TabOption) => {
    if (option.disabled) return;

    if (activeValue.value !== option.value) {
      activeValue.value = option.value;
      emit("update", option.value);
    }
  };

  const getTabState = (option: TabOption) => {
    if (option.disabled) return TabButtonState.Disabled;
    if (option.value === activeValue.value) return TabButtonState.Active;

    return TabButtonState.Static;
  };

  watch(
    () => [props.options, props.defaultOption] as const,
    () => {
      const exists = props.options.some((o) => o.value === activeValue.value);

      if (!exists) {
        activeValue.value = getInitialValue();
      }

      if (props.defaultOption) {
        const inList = props.options.some((o) => o.value === props.defaultOption!.value);

        if (inList && activeValue.value !== props.defaultOption.value) {
          activeValue.value = props.defaultOption.value;
        }
      }
    },
    { deep: true }
  );
</script>

<template>
  <div class="tab-group" role="tablist">
    <TabButton
      v-for="option in options"
      :key="option.value"
      :state="getTabState(option)"
      @click="setActive(option)"
    >
      {{ option.label }}
    </TabButton>
  </div>
</template>

<style scoped lang="scss">
  @use "sass:map";
  @use "@/styles/vars" as *;

  .tab-group {
    display: inline-flex;
    align-items: center;
    gap: map.get($spacing, "xs");
  }
</style>
