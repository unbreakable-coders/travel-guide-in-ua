<script setup lang="ts">
  interface Props {
    month: string;
    canGoPrev: boolean;
    canGoNext: boolean;
  }

  const props = defineProps<Props>();

  const emit = defineEmits<{
    (e: "prev"): void;
    (e: "next"): void;
  }>();
</script>

<template>
  <div class="calendar-header">
    <button
      class="calendar-header__nav"
      type="button"
      :disabled="!props.canGoPrev"
      @click="emit('prev')"
    >
      ‹
    </button>

    <div class="calendar-header__month">
      {{ props.month }}
    </div>

    <button
      class="calendar-header__nav"
      type="button"
      :disabled="!props.canGoNext"
      @click="emit('next')"
    >
      ›
    </button>
  </div>
</template>

<style lang="scss" scoped>
  .calendar-header {
    display: grid;
    grid-template-columns: 44px 1fr 44px;
    align-items: center;

    &__month {
      text-align: center;
      font-weight: 600;
    }

    &__nav {
      width: 44px;
      height: 36px;
      border: 1px solid var(--color-border, #d0d5dd);
      border-radius: 10px;
      background: var(--color-surface, #ffffff);
      cursor: pointer;

      &:disabled {
        background: var(--color-disabled-bg, #f2f4f7);
        color: var(--color-disabled-text, #98a2b3);
        cursor: not-allowed;
      }
    }
  }
</style>
