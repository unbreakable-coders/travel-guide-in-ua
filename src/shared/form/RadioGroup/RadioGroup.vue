<script setup lang="ts">
  import { computed, onMounted, ref, watch } from "vue";
  import RadioButton from "@/shared/form/RadioButton/RadioButton.vue";
  import type { RadioOption } from "./types";

  interface Props {
    options: RadioOption[];
    defaultValue?: string | number;
    label?: string;
    modelValue?: string | number;
  }

  const props = defineProps<Props>();

  const emit = defineEmits<{
    (e: "update:modelValue", value: string | number): void;
  }>();

  const localSelected = ref<string | number | undefined>(props.defaultValue);

  const selected = computed<string | number | undefined>(() => {
    return props.modelValue ?? localSelected.value;
  });

  const handleChange = (newSelected: string | number) => {
    if (props.modelValue === undefined) {
      localSelected.value = newSelected;
    }
    emit("update:modelValue", newSelected);
  };

  onMounted(() => {
    if (props.modelValue === undefined && props.defaultValue !== undefined) {
      const initial = props.defaultValue;
      localSelected.value = initial;
      emit("update:modelValue", initial);
    }
  });

  watch(
    () => props.modelValue,
    (val) => {
      if (val !== undefined) return;
      localSelected.value = props.defaultValue;
    }
  );
</script>

<template>
  <div class="radio-group">
    <div v-if="label" class="radio-group__label">
      {{ label }}
    </div>

    <div class="radio-group__list">
      <RadioButton
        v-for="option in options"
        :key="String(option.value)"
        :value="option.value"
        :label="option.label ?? String(option.value)"
        :is-disabled="option.disabled"
        :model-value="selected"
        @update:model-value="handleChange"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .radio-group {
    display: grid;
    gap: 8px;

    &__label {
      font-weight: 600;
    }

    &__list {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
    }
  }
</style>
