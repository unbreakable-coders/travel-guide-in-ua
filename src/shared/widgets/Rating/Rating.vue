<script setup lang="ts">
  import { computed, useSlots } from "vue";
  import StarIcon from "@/shared/icons/star.svg";

  defineOptions({ name: "UiRating" });

  const slots = useSlots();

  const formattedRating = computed(() => {
    const raw = slots.default?.()?.[0]?.children ?? "";
    const value = Number(String(raw).trim());
    return Number.isFinite(value) ? value.toFixed(1) : "0.0";
  });
</script>

<template>
  <div class="rating">
    <component :is="StarIcon" class="rating__icon" />
    <span class="rating__value">{{ formattedRating }}</span>
  </div>
</template>

<style scoped lang="scss">
  @use "sass:map";
  @use "@/styles/vars" as *;

  .rating {
    display: inline-flex;
    align-items: center;
    gap: map.get($spacing, "xs");
    line-height: 1;

    &__icon {
      width: 18px;
      height: 18px;
      color: #ffdb6d;
      display: block;
      flex-shrink: 0;
    }

    &__value {
      font-weight: 600;
    }
  }
</style>
