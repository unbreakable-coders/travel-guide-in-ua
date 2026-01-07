<script setup lang="ts">
  import { computed } from "vue";

  interface Props {
    value: string | number;
    modelValue?: Array<string | number>;
    isDisabled?: boolean;
    label: string;
  }

  const props = defineProps<Props>();

  const emit = defineEmits<{
    (e: "update:modelValue", value: Array<string | number>): void;
  }>();

  const isChecked = computed(() => {
    const current = props.modelValue ?? [];
    return current.includes(props.value);
  });

  const handleToggle = () => {
    if (props.isDisabled) return;

    const current = props.modelValue ?? [];
    const newValue = current.includes(props.value)
      ? current.filter((v) => v !== props.value)
      : [...current, props.value];

    emit("update:modelValue", newValue);
  };
</script>

<template>
  <label class="checkbox" :class="{ 'checkbox--disabled': isDisabled }">
    <input
      class="checkbox__input"
      type="checkbox"
      :checked="isChecked"
      :disabled="isDisabled"
      @change="handleToggle"
    />

    <span v-if="label" class="checkbox__label">{{ label }}</span>
  </label>
</template>

<style scoped>
  .checkbox {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    user-select: none;
  }

  .checkbox--disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }

  .checkbox__input {
    cursor: inherit;
  }

  .checkbox__label {
    cursor: inherit;
  }
</style>
