<script setup lang="ts">
  import AppCard from "@/shared/ui/AppCard/AppCard.vue";
  import { CalendarField } from "@/shared/form/CalendarField";

  const colors = [
    { name: "Primary", var: "--color-primary" },
    { name: "Secondary", var: "--color-secondary" },
    { name: "Accent", var: "--color-accent" },
    { name: "Blue", var: "--color-blue" },
    { name: "Black", var: "--color-text" },
    { name: "Dark", var: "--color-dark" },
    { name: "Gray", var: "--color-gray" },
    { name: "Background", var: "--color-bg" },
    { name: "Surface", var: "--color-surface" },
  ];

  const calendarData = [
    {
      month: "September",
      days: [
        { day: 10, availableTime: ["12:30", "13:30", "14:30"] },
        { day: 17, availableTime: ["13:30", "15:30"] },
        { day: 26, availableTime: ["16:30", "17:30"] },
      ],
    },
    {
      month: "October",
      days: [
        { day: 3, availableTime: ["11:00", "12:00"] },
        { day: 8, availableTime: ["14:00", "15:00"] },
        { day: 21, availableTime: ["10:00", "11:30"] },
      ],
    },
  ];
</script>

<template>
  <div class="develop-page">
    <AppCard>
      <h2 class="develop-page__title">Typography:</h2>

      <div class="develop-page__typography">
        <h1>h1 tag</h1>
        <h2>h2 tag</h2>
        <h3>h3 tag</h3>
        <h3>h4 tag</h3>
        <p>p tag</p>
        <label>label tag</label>
        <button>button tag</button>
        <a href="#">a tag</a>
      </div>
    </AppCard>

    <AppCard>
      <h2 class="develop-page__title">Colors:</h2>

      <ul class="develop-page__color-list">
        <li v-for="color in colors" :key="color.var" class="develop-page__color-item">
          <span
            class="develop-page__color-block"
            :style="{ backgroundColor: `var(${color.var})` }"
          ></span>

          <p class="develop-page__color-label">{{ color.name }}</p>
        </li>
      </ul>
    </AppCard>

    <AppCard>
      <h2 class="develop-page__title">Recommendations:</h2>

      <div class="develop-page__badges">
        <span class="develop-page__badge-item develop-page__badge-item--primary">Selected</span>
        <span class="develop-page__badge-item develop-page__badge-item--secondary">Visited</span>
        <span class="develop-page__badge-item develop-page__badge-item--accent">Recommended</span>
      </div>
    </AppCard>

    <AppCard>
      <h2 class="develop-page__title">CalendarField:</h2>

      <CalendarField :calendar="calendarData" />
    </AppCard>
  </div>
</template>

<style lang="scss">
  @use "sass:map";
  @use "@/styles/vars" as *;
  @use "@/styles/mixins" as *;
  @use "@/styles/functions" as *;

  .develop-page {
    @include container;
    @include grid(1);

    @include screen-lg {
      @include grid(3);
    }

    &__title {
      margin-bottom: map.get($spacing, "2xl");
    }

    &__typography {
      display: inline-flex;
      flex-direction: column;
      text-align: start;
      gap: map.get($spacing, "xl");
    }

    &__color-list {
      @include grid(3);
    }

    &__color-item {
      display: flex;
      align-items: center;
      flex-direction: column;
      gap: map.get($spacing, "2xs");
    }

    &__color-block {
      outline: 1px solid var(--color-gray);
      border-radius: $base-radius;
      width: 64px;
      height: 64px;
    }

    &__badge-item {
      padding: map.get($spacing, "2xs") map.get($spacing, "md");
      margin: map.get($spacing, "sm");
      border-radius: 999px;

      &--primary {
        color: var(--color-blue);
        outline: 1px solid var(--color-blue);
        background-color: opacity(map.get($colors, "blue"), 10);
      }

      &--secondary {
        color: var(--color-secondary);
        outline: 1px solid var(--color-secondary);
        background-color: opacity(map.get($colors, "secondary"), 10);
      }

      &--accent {
        color: var(--color-accent);
        outline: 1px solid var(--color-accent);
        background-color: opacity(map.get($colors, "accent"), 10);
      }
    }
  }
</style>
