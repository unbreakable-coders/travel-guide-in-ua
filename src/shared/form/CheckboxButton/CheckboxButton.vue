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

<style scoped lang="scss">
  @use "sass:map";
  @use "@/styles/vars" as *;
  @use "@/styles/typography" as *;
  @use "@/styles/functions" as *;

  .checkbox {
    display: inline-flex;
    align-items: center;
    gap: map.get($spacing, "sm");
    cursor: pointer;
    user-select: none;

    &--disabled {
      cursor: not-allowed;

      .checkbox__ui {
        background-color: opacity(map.get($colors, "dark"), 10);
      }
    }

    &__input {
      position: absolute;
      width: 1px;
      height: 1px;
      opacity: 0;
      pointer-events: none;
    }

    &__ui {
      position: relative;
      flex: 0 0 auto;
      width: 44px;
      height: 24px;
      border-radius: 999px;
      background: opacity(map.get($colors, "dark"), 40);
      transition:
        background $base-transition ease,
        box-shadow $base-transition ease,
        filter $base-transition ease;

      &::after {
        content: "";
        position: absolute;
        top: 2px;
        left: 2px;
        width: 20px;
        height: 20px;
        border-radius: 999px;
        background: var(--color-surface);
        box-shadow: 0 6px 14px rgba(17, 24, 39, 0.18);
        transition: transform $base-transition ease;
      }
    }

    &__input:checked + &__ui {
      background: var(--color-blue);

      &::after {
        transform: translateX(20px);
      }
    }

    &:not(.checkbox--disabled):hover &__ui {
      filter: brightness(0.98);
    }

    &__input:focus-visible + &__ui {
      box-shadow: 0 0 0 3px rgba(var(--v-theme-primary), 0.25);
    }

    &__label {
      cursor: inherit;
      font-weight: 500;
      font-size: 14px;
      line-height: 1.2;
    }
  }
</style>
