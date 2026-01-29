<script setup lang="ts">
  import { computed, ref, watch } from "vue";

  import CalendarHeader from "@/shared/form/CalendarField/CalendarHeader.vue";
  import CalendarWeekdays from "@/shared/form/CalendarField/CalendarWeekdays.vue";
  import CalendarGrid from "@/shared/form/CalendarField/CalendarGrid.vue";
  import CalendarTime from "@/shared/form/CalendarField/CalendarTime.vue";

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

  type SelectedDay = { monthIdx: number; day: number } | null;

  const selectedDay = ref<SelectedDay>(null);
  const selectedTime = ref<string | null>(null);

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

  const onDaySelect = (day: number) => {
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

  const onTimeSelect = (time: string) => {
    if (!activeMonth.value) return;
    if (!selectedDay.value) return;

    selectedTime.value = time;
    emit("change", { month: activeMonth.value.month, day: selectedDay.value.day, time });
  };
</script>

<template>
  <div class="calendar-field">
    <CalendarHeader
      :month="activeMonth?.month ?? ''"
      :canGoPrev="canGoPrev"
      :canGoNext="canGoNext"
      @prev="goPrev"
      @next="goNext"
    />

    <CalendarWeekdays :days="WEEK_DAYS" />

    <CalendarGrid
      :cells="calendarCells"
      :isClickableDay="isClickableDay"
      :isSelectedDay="isSelectedDay"
      @select-day="onDaySelect"
    />

    <CalendarTime
      v-if="selectedDay && availableTime.length"
      :times="availableTime"
      :activeTime="selectedTime"
      @select-time="onTimeSelect"
    />
  </div>
</template>

<style lang="scss" scoped>
  .calendar-field {
    width: 100%;
    display: grid;
    gap: 16px;
  }
</style>
