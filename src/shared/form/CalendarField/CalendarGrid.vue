<script setup lang="ts">
  interface Props {
    cells: Array<number | null>;
    isClickableDay: (day: number) => boolean;
    isSelectedDay: (day: number) => boolean;
  }

  const props = defineProps<Props>();

  const emit = defineEmits<{
    (e: "select-day", day: number): void;
  }>();

  const onClick = (day: number | null) => {
    if (day === null) return;
    if (!props.isClickableDay(day)) return;

    emit("select-day", day);
  };
</script>

<template>
  <div class="calendar-grid">
    <button
      v-for="(cell, idx) in props.cells"
      :key="`${cell ?? 'x'}-${idx}`"
      class="calendar-grid__day"
      type="button"
      :class="{
        'calendar-grid__day--blank': cell === null,
        'calendar-grid__day--disabled': cell !== null && !props.isClickableDay(cell),
        'calendar-grid__day--active': cell !== null && props.isSelectedDay(cell),
      }"
      :disabled="cell === null || (cell !== null && !props.isClickableDay(cell))"
      @click="onClick(cell)"
    >
      <span v-if="cell !== null">{{ cell }}</span>
    </button>
  </div>
</template>

<style lang="scss" scoped>
  .calendar-grid {
    display: grid;
    grid-template-columns: repeat(7, minmax(0, 1fr));
    gap: 10px;

    &__day {
      height: 44px;
      border: none;
      background: transparent;
      border-radius: 999px;
      cursor: pointer;
      display: grid;
      place-items: center;
      font-weight: 600;

      &--blank {
        cursor: default;
      }

      &--disabled {
        background: var(--color-disabled-bg, #f2f4f7);
        color: var(--color-disabled-text, #98a2b3);
        cursor: not-allowed;
      }

      &--active {
        background: var(--color-primary, #2f80ed);
        color: #fff;
      }
    }
  }
</style>
