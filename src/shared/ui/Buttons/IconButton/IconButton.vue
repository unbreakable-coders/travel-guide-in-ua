<script setup lang="ts">
  import type { Component } from "vue";
  import { ButtonType } from "../types";

  type IconSource = Component | string;

  interface Props {
    type?: ButtonType;
    icon: IconSource;
    ariaLabel: string;
    disabled?: boolean;
  }

  const props = withDefaults(defineProps<Props>(), {
    disabled: false,
    type: ButtonType.Button,
  });

  const emit = defineEmits<{
    (e: "click", event: MouseEvent): void;
  }>();

  const handleClick = (event: MouseEvent) => emit("click", event);
</script>

<template>
  <button
    class="icon-button"
    :type="props.type"
    :disabled="props.disabled"
    :aria-label="props.ariaLabel"
    @click="handleClick"
  >
    <component :is="props.icon" />
  </button>
</template>

<style lang="scss" scoped>
  @use "sass:map";
  @use "@/styles/vars" as *;
  @use "@/styles/mixins" as *;
  @use "@/styles/functions" as *;

  .icon-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: $base-radius;
    border: 2px solid map.get($colors, "primary");
    background-color: transparent;
    color: map.get($colors, "primary");
    cursor: pointer;
    transition: all $base-transition ease;

    svg {
      width: 1.25rem;
      height: 1.25rem;
      display: block;
    }

    &:hover:not(:disabled) {
      background-color: opacity(map.get($colors, "primary"), 10);
    }

    &:active:not(:disabled) {
      background-color: opacity(map.get($colors, "primary"), 20);
    }

    &:disabled {
      cursor: not-allowed;
      opacity: 0.4;
      border-color: opacity(map.get($colors, "primary"), 40);
      color: opacity(map.get($colors, "primary"), 40);
    }
  }
</style>
