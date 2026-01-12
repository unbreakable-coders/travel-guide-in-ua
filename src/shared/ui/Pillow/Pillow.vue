<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
  import { computed } from "vue";
  import { PillowColor, PillowColorMap } from "./types";

  interface Props {
    color: PillowColor;
  }

  const props = defineProps<Props>();

  const backgroundColor = computed(() => {
    const hexColor = PillowColorMap[props.color];
    const r = parseInt(hexColor.slice(1, 3), 16);
    const g = parseInt(hexColor.slice(3, 5), 16);
    const b = parseInt(hexColor.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, 0.1)`;
  });

  const textColor = computed(() => PillowColorMap[props.color]);
</script>

<template>
  <span
    class="pillow"
    :style="{
      backgroundColor: backgroundColor,
      color: textColor,
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
    border-radius: 999px;
  }
</style>
