<script setup lang="ts">
  import Pillow from "@/shared/ui/Pillow/Pillow.vue";
  import { PillowColor } from "@/shared/ui/Pillow/types";

  interface Props {
    times: string[];
    activeTime: string | null;
  }

  const props = defineProps<Props>();

  const emit = defineEmits<{
    (e: "select-time", time: string): void;
  }>();
</script>

<template>
  <div class="calendar-time">
    <button
      v-for="t in props.times"
      :key="t"
      class="calendar-time__item"
      type="button"
      @click="emit('select-time', t)"
    >
      <Pillow :color="props.activeTime === t ? PillowColor.Success : PillowColor.Warning">
        {{ t }}
      </Pillow>
    </button>
  </div>
</template>

<style lang="scss" scoped>
  .calendar-time {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;

    &__item {
      border: none;
      background: transparent;
      padding: 0;
      cursor: pointer;
    }
  }
</style>
