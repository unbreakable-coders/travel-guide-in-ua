<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
  import { PillowColor } from "./types";

  interface Props {
    color: PillowColor;
  }

  defineProps<Props>();
</script>

<template>
  <span class="pillow" style="">
    <slot />
  </span>
</template>

<style lang="scss" scoped>
  @use "sass:map";
  @use "@/styles/vars" as *;

  .pillow {
    display: inline-flex;
    align-items: center;

    padding: map.get($spacing, "2xs") map.get($spacing, "md");
    white-space: nowrap;

    background-color: var(--color-primary);
    color: var(--color-bg);

    border-radius: 999px;

    font-weight: 500;
    line-height: 1;

    position: relative;
  }
</style>
