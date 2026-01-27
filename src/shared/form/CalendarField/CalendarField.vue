<script setup lang="ts">
  import { computed, ref, watch } from "vue";
  import Pillow from "@/shared/ui/Pillow/Pillow.vue";
  import { PillowColor } from "@/shared/ui/Pillow/types";

  interface Props {
    calendar: {
      month: string;
      days: {
        day: number;
        availableTime: string[];
      }[];
    }[];
  }

  const props = defineProps<Props>();

  const emit = defineEmits<{
    (
      e: "change",
      value: {
        month: string;
        day: number;
        time?: string;
      }
    ): void;
  }>();

  const MONTH_INDEX: Record<string, number> = {
    january: 0,
    february: 1,
    march: 2,
    april: 3,
    may: 4,
    june: 5,
    july: 6,
    august: 7,
    september: 8,
    october: 9,
    november: 10,
    december: 11,

    січень: 0,
    лютий: 1,
    березень: 2,
    квітень: 3,
    травень: 4,
    червень: 5,
    липень: 6,
    серпень: 7,
    вересень: 8,
    жовтень: 9,
    листопад: 10,
    грудень: 11,
  };

  const WEEK_DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const todayStart = () => {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    return d.getTime();
  };

  const year = new Date().getFullYear();

  const getMonthIndex = (month: string) => {
    const key = month.trim().toLowerCase();
    return MONTH_INDEX[key] ?? new Date().getMonth();
  };

  const getDaysInMonth = (y: number, monthIndex: number) =>
    new Date(y, monthIndex + 1, 0).getDate();

  const isMonthFullyPast = (monthIndex: number) => {
    const lastDayTs = new Date(
      year,
      monthIndex,
      getDaysInMonth(year, monthIndex),
      23,
      59,
      59,
      999
    ).getTime();
    return lastDayTs < todayStart();
  };

  const firstAllowedMonthIndex = computed(() => {
    const idx = props.calendar.findIndex((m) => !isMonthFullyPast(getMonthIndex(m.month)));
    return idx === -1 ? 0 : idx;
  });

  const activeMonthIdx = ref(firstAllowedMonthIndex.value);

  watch(
    () => props.calendar,
    () => {
      activeMonthIdx.value = firstAllowedMonthIndex.value;
      selectedDay.value = null;
      selectedTime.value = null;
    },
    { deep: true }
  );

  const activeMonth = computed(() => props.calendar[activeMonthIdx.value] ?? null);

  type SelectedDay = { monthIdx: number; day: number } | null;

  const selectedDay = ref<SelectedDay>(null);
  const selectedTime = ref<string | null>(null);

  const monthIndex = computed(() => getMonthIndex(activeMonth.value?.month ?? ""));

  const availableDaysMap = computed(() => {
    const map = new Map<number, string[]>();
    const days = activeMonth.value?.days ?? [];
    for (const d of days) {
      map.set(d.day, d.availableTime);
    }
    return map;
  });

  const daysInMonth = computed(() => getDaysInMonth(year, monthIndex.value));
  const firstWeekday = computed(() => new Date(year, monthIndex.value, 1).getDay());

  const calendarCells = computed(() => {
    const blanks = Array.from({ length: firstWeekday.value }, () => null as number | null);
    const days = Array.from({ length: daysInMonth.value }, (_, i) => i + 1);
    return [...blanks, ...days];
  });

  const canGoPrev = computed(() => {
    const prevIdx = activeMonthIdx.value - 1;
    if (prevIdx < 0) return false;
    const prevMonthIndex = getMonthIndex(props.calendar[prevIdx]?.month ?? "");
    return !isMonthFullyPast(prevMonthIndex);
  });

  const canGoNext = computed(() => activeMonthIdx.value < props.calendar.length - 1);

  const goPrev = () => {
    if (!canGoPrev.value) return;
    activeMonthIdx.value -= 1;
    selectedDay.value = null;
    selectedTime.value = null;
  };

  const goNext = () => {
    if (!canGoNext.value) return;
    activeMonthIdx.value += 1;
    selectedDay.value = null;
    selectedTime.value = null;
  };

  const isPastDay = (day: number) => {
    const ts = new Date(year, monthIndex.value, day, 0, 0, 0, 0).getTime();
    return ts < todayStart();
  };

  const isClickableDay = (day: number) => availableDaysMap.value.has(day) && !isPastDay(day);

  const isSelectedDay = (day: number) =>
    selectedDay.value?.monthIdx === activeMonthIdx.value && selectedDay.value?.day === day;

  const onDayClick = (day: number) => {
    if (!activeMonth.value) return;
    if (!isClickableDay(day)) return;

    selectedDay.value = { monthIdx: activeMonthIdx.value, day };
    selectedTime.value = null;

    emit("change", { month: activeMonth.value.month, day });
  };

  const availableTime = computed(() => {
    if (!selectedDay.value) return [];
    if (selectedDay.value.monthIdx !== activeMonthIdx.value) return [];
    return availableDaysMap.value.get(selectedDay.value.day) ?? [];
  });

  const onTimeClick = (time: string) => {
    if (!activeMonth.value) return;
    if (!selectedDay.value) return;

    selectedTime.value = time;
    emit("change", { month: activeMonth.value.month, day: selectedDay.value.day, time });
  };
</script>

<template>
  <div class="calendar-field">
    <div class="calendar-field__header">
      <button class="calendar-field__nav" type="button" :disabled="!canGoPrev" @click="goPrev">
        ‹
      </button>

      <div class="calendar-field__month">
        {{ activeMonth?.month ?? "" }}
      </div>

      <button class="calendar-field__nav" type="button" :disabled="!canGoNext" @click="goNext">
        ›
      </button>
    </div>

    <div class="calendar-field__weekdays">
      <div v-for="d in WEEK_DAYS" :key="d" class="calendar-field__weekday">
        {{ d }}
      </div>
    </div>

    <div class="calendar-field__grid">
      <button
        v-for="(cell, idx) in calendarCells"
        :key="`${cell ?? 'x'}-${idx}`"
        class="calendar-field__day"
        type="button"
        :class="{
          'calendar-field__day--blank': cell === null,
          'calendar-field__day--disabled': cell !== null && !isClickableDay(cell),
          'calendar-field__day--active': cell !== null && isSelectedDay(cell),
        }"
        :disabled="cell === null || (cell !== null && !isClickableDay(cell))"
        @click="cell !== null && onDayClick(cell)"
      >
        <span v-if="cell !== null">{{ cell }}</span>
      </button>
    </div>

    <div v-if="selectedDay && availableTime.length" class="calendar-field__times">
      <button
        v-for="t in availableTime"
        :key="t"
        class="calendar-field__time"
        type="button"
        @click="onTimeClick(t)"
      >
        <Pillow :color="selectedTime === t ? PillowColor.Success : PillowColor.Warning">
          {{ t }}
        </Pillow>
      </button>
    </div>
  </div>
</template>

<style scoped>
  .calendar-field {
    width: 100%;
    display: grid;
    gap: 16px;
  }

  .calendar-field__header {
    display: grid;
    grid-template-columns: 44px 1fr 44px;
    align-items: center;
  }

  .calendar-field__month {
    text-align: center;
    font-weight: 600;
  }

  .calendar-field__nav {
    width: 44px;
    height: 36px;
    border: 1px solid var(--color-border, #d0d5dd);
    border-radius: 10px;
    background: var(--color-surface, #ffffff);
    cursor: pointer;
  }

  .calendar-field__nav:disabled {
    background: var(--color-disabled-bg, #f2f4f7);
    color: var(--color-disabled-text, #98a2b3);
    cursor: not-allowed;
  }

  .calendar-field__weekdays {
    display: grid;
    grid-template-columns: repeat(7, minmax(0, 1fr));
    gap: 8px;
  }

  .calendar-field__weekday {
    text-align: center;
    font-weight: 600;
    color: var(--color-primary, #2f80ed);
  }

  .calendar-field__grid {
    display: grid;
    grid-template-columns: repeat(7, minmax(0, 1fr));
    gap: 10px;
  }

  .calendar-field__day {
    height: 44px;
    border: none;
    background: transparent;
    border-radius: 999px;
    cursor: pointer;
    display: grid;
    place-items: center;
    font-weight: 600;
  }

  .calendar-field__day--blank {
    cursor: default;
  }

  .calendar-field__day--disabled {
    background: var(--color-disabled-bg, #f2f4f7);
    color: var(--color-disabled-text, #98a2b3);
    cursor: not-allowed;
  }

  .calendar-field__day--active {
    background: var(--color-primary, #2f80ed);
    color: #fff;
  }

  .calendar-field__times {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
  }

  .calendar-field__time {
    border: none;
    background: transparent;
    padding: 0;
    cursor: pointer;
  }
</style>
