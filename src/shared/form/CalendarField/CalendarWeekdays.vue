<script setup lang="ts">
  interface Props {
    days: string[];
  }

  const props = defineProps<Props>();
</script>

<template>
  <div class="calendar-weekdays">
    <div v-for="d in props.days" :key="d" class="calendar-weekdays__item">
      {{ d }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .calendar-weekdays {
    display: grid;
    grid-template-columns: repeat(7, minmax(0, 1fr));
    gap: 8px;

    &__item {
      text-align: center;
      font-weight: 600;
      color: var(--color-primary, #2f80ed);
    }
  }
</style>
