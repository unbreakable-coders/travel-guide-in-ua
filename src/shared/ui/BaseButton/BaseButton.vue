<script setup lang="ts">
  import type { ButtonType } from "@/types/button";

  interface Props {
    type: ButtonType;
    disabled?: boolean;
  }

  const props = withDefaults(defineProps<Props>(), {
    disabled: false,
  });

  const emit = defineEmits<{
    (e: "click", event: MouseEvent): void;
  }>();

  const handleClick = (event: MouseEvent) => emit("click", event);
</script>

<template>
  <button class="base-button" :type="props.type" :disabled="props.disabled" @click="handleClick">
    <slot />
  </button>
</template>

<style lang="scss" scoped>
  @use "sass:map";
  @use "@/styles/vars" as *;
  @use "@/styles/mixins" as *;
  @use "@/styles/functions" as *;

  .base-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: map.get($spacing, "sm") map.get($spacing, "md");
    font-size: 1rem;
    font-weight: 500;
    border: none;
    border-radius: $base-radius;
    background-color: map.get($colors, "primary");
    color: map.get($colors, "surface");
    cursor: pointer;
    transition: all $base-transition ease;

    &:hover:not(:disabled) {
      background-color: opacity(map.get($colors, "primary"), 85);
    }

    &:active:not(:disabled) {
      background-color: opacity(map.get($colors, "primary"), 70);
    }

    &:disabled {
      cursor: not-allowed;
      opacity: 0.5;
    }

    @include screen-sm {
      font-size: 1.125rem;
      padding: map.get($spacing, "md") map.get($spacing, "lg");
    }

    @include screen-lg {
      font-size: 1.25rem;
    }
  }
</style>
