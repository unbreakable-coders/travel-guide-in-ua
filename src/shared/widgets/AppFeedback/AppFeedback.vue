<script setup lang="ts">
  import StarIcon from "@/shared/icons/star.svg";
  import type { Feedback } from "@/types/feedback";

  interface Props {
    feedback: Feedback;
  }

  defineProps<Props>();

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push("full");
    }

    return stars;
  };
</script>

<template>
  <article class="app-feedback">
    <div class="app-feedback__stars">
      <StarIcon
        v-for="index in renderStars(feedback.rating)"
        :key="index"
        class="app-feedback__star"
      />
    </div>

    <p class="app-feedback__text">{{ feedback.text }}</p>

    <div class="app-feedback__user">
      <img :src="feedback.user.avatar" :alt="feedback.user.name" class="app-feedback__avatar" />
      <div class="app-feedback__user-info">
        <h4 class="app-feedback__user-name">{{ feedback.user.name }}</h4>
        <p class="app-feedback__user-location">
          {{ feedback.user.country }} / {{ feedback.user.city }}
        </p>
      </div>
    </div>
  </article>
</template>

<style scoped lang="scss">
  @use "sass:map";
  @use "@/styles/vars" as *;
  @use "@/styles/mixins" as *;

  .app-feedback {
    background-color: var(--color-surface);
    border-radius: $base-radius;
    padding: map.get($spacing, "md");
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
    height: 100%;
    display: flex;
    flex-direction: column;

    &__stars {
      display: flex;
      gap: 4px;
      margin-bottom: map.get($spacing, "sm");
    }

    &__star {
      width: 18px;
      height: 18px;

      :deep(path) {
        fill: var(--color-stars);
      }
    }

    &__text {
      color: var(--color-dark);
      margin: 0 0 map.get($spacing, "md") 0;
    }

    &__user {
      display: flex;
      gap: map.get($spacing, "sm");
    }

    &__avatar {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      object-fit: cover;
    }

    &__user-name {
      font-size: 1.125rem;
      color: var(--color-dark);
    }

    &__user-location {
      font-size: 0.875rem;
      color: var(--color-dark);
      opacity: 0.7;
    }
  }
</style>
