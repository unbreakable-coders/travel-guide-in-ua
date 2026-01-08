<script setup lang="ts">
  import { ref } from "vue";
  import type { Booking } from "./types";
  import TrashIcon from "@/shared/icons/trash.svg";

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
  <div class="booking-card" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
    <div class="booking-card__header">
      <h3 class="booking-card__title">{{ booking.title }}</h3>
      <div class="booking-card__time">
        {{ formatTime(booking.time) }}
      </div>
    </div>

    <component
      :is="TrashIcon"
      class="booking-card__delete-icon"
      :class="{ 'booking-card__delete-icon--visible': isHovered }"
    />
  </div>
</template>

<style lang="scss" scoped>
  .booking-card {
    position: relative;
    background: rgb(var(--v-theme-surface));
    border: 1px solid rgb(var(--v-theme-gray));
    border-radius: 12px;
    padding: 24px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    transition:
      border-color 0.2s ease,
      box-shadow 0.2s ease,
      transform 0.2s ease;
    cursor: pointer;
    margin-bottom: 24px;

    &:last-child {
      margin-bottom: 0;
    }

    &:hover {
      border-color: rgb(var(--v-theme-primary));
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
      transform: translateY(-3px);
    }

    &__header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: 24px;
    }

    &__title {
      margin: 0;
      font-size: 18px;
      font-weight: 600;
      color: rgb(var(--v-theme-primary));
      line-height: 1.4;
      flex: 1;
    }

    &__time {
      font-size: 15px;
      color: rgb(var(--v-theme-gray));
      white-space: nowrap;
      font-weight: 500;
      min-width: 150px;
      text-align: right;
    }

    &__delete-icon {
      position: absolute;
      top: 50%;
      right: -42px;
      transform: translateY(-50%) translateX(40px);
      width: 50px;
      height: 50px;
      color: rgb(var(--v-theme-accent));
      opacity: 0;
      transition:
        opacity 0.3s ease,
        transform 0.3s ease,
        color 0.2s ease;
      z-index: 10;
      filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));

      &--visible {
        opacity: 1;
        transform: translateY(-50%) translateX(0);
        pointer-events: auto;
      }

      &:hover {
        color: rgb(var(--v-theme-secondary));
        transform: translateY(-50%) scale(1.15);
        filter: drop-shadow(0 3px 6px rgba(0, 0, 0, 0.2));
      }
    }
  }
</style>
