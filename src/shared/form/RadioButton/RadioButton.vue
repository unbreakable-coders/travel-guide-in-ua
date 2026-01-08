<script setup lang="ts">
  import { computed } from "vue";

  interface Props {
    value: string | number;
    modelValue?: string | number;
    isDisabled?: boolean;
    label: string;
  }

  const props = defineProps<Props>();

  const emit = defineEmits<{
    (e: "update:modelValue", value: string | number): void;
  }>();

  const isChecked = computed(() => {
    return props.modelValue === props.value;
  });

  const handleSelect = () => {
    if (props.isDisabled) return;

    emit("update:modelValue", props.value);
  };
</script>

<template>
  <label class="radio" :class="{ 'radio--disabled': isDisabled }">
    <input
      class="radio__input"
      type="radio"
      :checked="isChecked"
      :disabled="isDisabled"
      @change="handleSelect"
    />

    <span class="radio__ui" aria-hidden="true"></span>

    <span v-if="label" class="radio__label">{{ label }}</span>
  </label>
</template>

<style lang="scss" scoped>
  .radio {
    display: inline-flex;
    align-items: center;
    cursor: pointer;
    user-select: none;
    gap: 10px;

    &--disabled {
      cursor: not-allowed;
      opacity: 0.6;
    }

    &__input {
      position: absolute;
      opacity: 0;
      width: 1px;
      height: 1px;
      pointer-events: none;
    }

    &__ui {
      position: relative;
      width: 20px;
      height: 20px;
      border-radius: 999px;
      border: 2px solid rgba(var(--v-theme-on-surface), 0.4);
      background: transparent;
      transition:
        border-color 0.2s ease,
        background-color 0.2s ease,
        box-shadow 0.2s ease;
      flex: 0 0 auto;

      &::after {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(0);
        width: 10px;
        height: 10px;
        border-radius: 999px;
        background: rgb(var(--v-theme-surface));
        transition: transform 0.2s ease;
      }
    }

    &__input:checked + &__ui {
      border-color: rgb(var(--v-theme-secondary));
      background: rgb(var(--v-theme-secondary));

      &::after {
        transform: translate(-50%, -50%) scale(1);
      }
    }

    &:not(.radio--disabled):hover &__ui {
      border-color: rgba(var(--v-theme-on-surface), 0.6);
    }

    &__input:focus-visible + &__ui {
      box-shadow: 0 0 0 3px rgba(var(--v-theme-primary), 0.25);
    }

    &__label {
      cursor: inherit;
      font-weight: 500;
      font-size: 14px;
      line-height: 1.2;
      color: rgba(var(--v-theme-on-surface), 0.88);
    }
  }
</style>
