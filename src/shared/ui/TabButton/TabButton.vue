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
    class="tab-button"
    :class="{
      'tab-button--active': currentState === TabButtonState.Active,
      'tab-button--disabled': currentState === TabButtonState.Disabled,
    }"
    type="button"
    :disabled="isDisabled"
    @click="handleClick"
  >
    <slot />
  </button>
</template>

<style scoped lang="scss">
  @use "sass:map";
  @use "@/styles/vars" as *;
  @use "@/styles/functions" as *;

  .tab-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;

    padding: map.get($spacing, "sm") map.get($spacing, "md");
    border-radius: $small-radius;
    border: 1px solid var(--color-dark);

    cursor: pointer;
    user-select: none;
    outline: none;

    transition: all $base-transition ease;

    &:hover:not(&--active):not(&--disabled) {
      border-color: var(--color-text-hover);
      color: var(--color-text-hover);
    }

    &--active {
      border-color: var(--color-blue);
      color: var(--color-blue);
      background-color: opacity(map.get($colors, "blue"), 10);

      &:active {
        border-color: opacity(map.get($colors, "blue"), 40);
      }
    }

    &--disabled {
      border-color: var(--color-dark);
      color: var(--color-dark);
      background-color: opacity(map.get($colors, "dark"), 10);
      cursor: not-allowed;
    }
  }
</style>
