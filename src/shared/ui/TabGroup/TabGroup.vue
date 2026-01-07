<script setup lang="ts">
  import { ref, watch } from "vue";
  import { Button } from "@/shared/ui/Button";
  import type { TabOption } from "./types";

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
    <Button
      v-for="option in options"
      :key="option.value"
      variant="tab"
      :isActive="option.value === activeValue"
      :disabled="option.disabled"
      @click="setActive(option)"
    >
      {{ option.label }}
    </Button>
  </div>
</template>

<style scoped>
  .tab-group {
    display: inline-flex;
    gap: 8px;
    align-items: center;
  }
</style>
