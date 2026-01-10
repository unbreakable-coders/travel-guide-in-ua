<script setup lang="ts">
  import { ref } from "vue";
  import TrashIcon from "@/shared/icons/trash.svg";
  import type { Booking } from "@/types/booking";

  interface Props {
    booking: Booking;
  }

  const { booking } = defineProps<Props>();
  const isHovered = ref(false);

  const handleMouseEnter = () => {
    isHovered.value = true;
  };

  const handleMouseLeave = () => {
    isHovered.value = false;
  };

  const formatTime = (timestamp: number): string => {
    const date = new Date(timestamp);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");

    return `${day}.${month}.${year} ${hours}:${minutes}`;
  };
</script>

<template>
  <article class="booking-card" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
    <div class="booking-card__header">
      <h5 class="booking-card__title">{{ booking.title }}</h5>

      <time class="booking-card__time" :datetime="new Date(booking.time).toISOString()">
        {{ formatTime(booking.time) }}
      </time>
    </div>

    <button
      class="booking-card__delete-button"
      :class="{ 'booking-card__delete-button--visible': isHovered }"
      aria-label="Delete booking"
      type="button"
    >
      <component :is="TrashIcon" class="booking-card__delete-icon" />
    </button>
  </article>
</template>

<style lang="scss" scoped>
  @use "sass:map";
  @use "@/styles/vars" as *;

  .booking-card {
    position: relative;
    background: var(--color-surface);
    border: 1px solid var(--color-gray);
    border-radius: $small-radius;
    padding: map.get($spacing, "lg");
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    transition:
      border-color 0.2s ease,
      box-shadow 0.2s ease,
      transform 0.2s ease;
    cursor: pointer;
    margin-bottom: map.get($spacing, "md");

    &:last-child {
      margin-bottom: 0;
    }

    &:hover {
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
      transform: translateY(-3px);
    }

    &__header {
      display: flex;
      justify-content: space-between;
    }

    &__title {
      color: var(--color-text);
    }

    &__time {
      color: var(--color-text);
      text-align: right;
    }

    &__delete-button {
      position: absolute;
      top: 50%;
      right: -42px;
      transform: translateY(-50%) translateX(40px);
      width: 50px;
      height: 50px;
      background: transparent;
      border: none;
      padding: 0;
      opacity: 0;
      transition:
        opacity 0.3s ease,
        transform 0.3s ease;
      z-index: 10;
      cursor: pointer;

      &--visible {
        opacity: 1;
        transform: translateY(-50%) translateX(0);
      }

      &:hover {
        .booking-card__delete-icon {
          transform: scale(1.15);
        }
      }
    }

    &__delete-icon {
      width: 100%;
      height: 100%;
      transition: transform 0.2s ease;
      pointer-events: none;
    }
  }
</style>
