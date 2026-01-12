<script setup lang="ts">
  import { Rating } from "@/shared/widgets/Rating";
  import type { Feedback } from "@/types/feedback";

  interface Props {
    feedback: Feedback;
  }

  defineProps<Props>();
</script>

<template>
  <article class="place-feedback">
    <div class="place-feedback__header">
      <img :src="feedback.user.avatar" :alt="feedback.user.name" class="place-feedback__avatar" />
      <div class="place-feedback__user-info">
        <div class="place-feedback__user-main">
          <h4 class="place-feedback__user-name">{{ feedback.user.name }}</h4>
          <div class="place-feedback__rating">
            <Rating>{{ feedback.rating }}</Rating>
          </div>
        </div>
        <p class="place-feedback__user-location">
          {{ feedback.user.city }}, {{ feedback.user.country }}
        </p>
      </div>
    </div>

    <p class="place-feedback__text">{{ feedback.text }}</p>
  </article>
</template>

<style scoped lang="scss">
  @use "sass:map";
  @use "@/styles/vars" as *;
  @use "@/styles/mixins" as *;

  .place-feedback {
    background-color: var(--color-surface);
    border-radius: $base-radius;
    padding: map.get($spacing, "lg");
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);

    &__header {
      display: flex;
      gap: map.get($spacing, "md");
      margin-bottom: map.get($spacing, "md");
    }

    &__avatar {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      object-fit: cover;
    }

    &__user-info {
      flex: 1;
    }

    &__user-main {
      display: flex;
      justify-content: space-between;
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

    &__text {
      color: var(--color-dark);
    }
  }
</style>
