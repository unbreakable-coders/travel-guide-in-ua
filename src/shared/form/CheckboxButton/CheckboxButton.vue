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

    <span class="checkbox__ui" aria-hidden="true"></span>

    <span v-if="label" class="checkbox__label">{{ label }}</span>
  </label>
</template>

<style scoped>
  .checkbox {
    display: inline-flex;
    align-items: center;
    cursor: pointer;
    user-select: none;
    gap: 10px;
  }

  .checkbox--disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }

  .checkbox__input {
    position: absolute;
    opacity: 0;
    width: 1px;
    height: 1px;
    pointer-events: none;
  }

  .checkbox__ui {
    position: relative;
    width: 44px;
    height: 24px;
    border-radius: 999px;
    background: rgba(var(--v-theme-on-surface), 0.28);
    transition:
      background 0.2s ease,
      box-shadow 0.2s ease,
      filter 0.2s ease;
    flex: 0 0 auto;
  }

  .checkbox__ui::after {
    content: "";
    position: absolute;
    top: 2px;
    left: 2px;
    width: 20px;
    height: 20px;
    border-radius: 999px;
    background: rgb(var(--v-theme-surface));
    box-shadow: 0 6px 14px rgba(17, 24, 39, 0.18);
    transition: transform 0.2s ease;
  }

  .checkbox__input:checked + .checkbox__ui {
    background: rgb(var(--v-theme-secondary));
  }

  .checkbox__input:checked + .checkbox__ui::after {
    transform: translateX(20px);
  }

  .checkbox:not(.checkbox--disabled):hover .checkbox__ui {
    filter: brightness(0.98);
  }

  .checkbox__input:focus-visible + .checkbox__ui {
    box-shadow: 0 0 0 3px rgba(var(--v-theme-primary), 0.25);
  }

  .checkbox__label {
    cursor: inherit;
    font-weight: 500;
    font-size: 14px;
    line-height: 1.2;
    color: rgba(var(--v-theme-on-surface), 0.88);
  }
</style>
