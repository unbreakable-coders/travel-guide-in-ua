<script setup lang="ts">
  import { computed } from "vue";
  import { TabButtonState } from "./types";

  interface Props {
    state?: TabButtonState;
  }

  const props = defineProps<Props>();

  const emit = defineEmits<{
    (e: "click"): void;
  }>();

  const currentState = computed(() => props.state ?? TabButtonState.Static);

  const isDisabled = computed(() => currentState.value === TabButtonState.Disabled);

  const handleClick = () => {
    if (!isDisabled.value) {
      emit("click");
    }
  };
</script>

<template>
  <button
    class="tabButton"
    :class="{
      'tabButton--active': currentState === TabButtonState.Active,
      'tabButton--disabled': currentState === TabButtonState.Disabled,
    }"
    type="button"
    :disabled="isDisabled"
    @click="handleClick"
  >
    <slot />
  </button>
</template>

<style scoped lang="scss">
  .tabButton {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 10px 16px;
    border-radius: 16px;
    border: 1px solid #111;
    background: var(--color-surface, #fff);
    cursor: pointer;
    user-select: none;
    outline: none;

    &:not(&--active):not(&--disabled):hover {
      background-color: var(--color-bg, #f9fafb);
    }

    &--active {
      border-color: var(--color-primary, #2563eb);
      background-color: #eff6ff;
      color: #1d4ed8;

      &:active {
        border-color: #3b82f6;
      }
    }

    &--disabled {
      background-color: var(--color-border, #f2f2f2);
      color: rgba(0, 0, 0, 0.4);
      cursor: not-allowed;
    }

    &:focus-visible {
      box-shadow: 0 0 0 1px var(--color-primary, #2563eb);
    }
  }
</style>
