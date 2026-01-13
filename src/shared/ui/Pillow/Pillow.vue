<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
  import { computed } from "vue";
  import { PillowColor, PillowColorMap } from "./types";

  interface Props {
    color: PillowColor;
  }

  const props = defineProps<Props>();

  const backgroundColor = computed(() => PillowColorMap[props.color]);
</script>

<template>
  <span
    class="pillow"
    :style="{
      backgroundColor,
    }"
  >
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

    background-color: #eee;
    color: #fff;

    border-radius: 999px;

    font-weight: 500;
    line-height: 1;
  }
</style>
