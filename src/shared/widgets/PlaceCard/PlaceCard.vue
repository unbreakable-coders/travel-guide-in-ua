<script setup lang="ts">
  import type { Place } from "@/types/place";

  import Rating from "@/shared/widgets/Rating/Rating.vue";
  import Pillow from "@/shared/ui/Pillow/Pillow.vue";
  import { PillowColor } from "@/shared/ui/Pillow/types";

  interface Props {
    place: Place;
  }

  defineOptions({ name: "PlaceCard" });

  defineProps<Props>();

  const BADGE_CONFIG: Record<string, { label: string; color: PillowColor }> = {
    hot: { label: "Hot", color: PillowColor.Danger },
    recommended: { label: "Recommended", color: PillowColor.Success },
    top: { label: "Top", color: PillowColor.Warning },
  };

  const normalizeBadge = (badge: string) => badge.trim().toLowerCase();

  const getBadgeLabel = (badge: string) => {
    const key = normalizeBadge(badge);
    return BADGE_CONFIG[key]?.label ?? badge;
  };

  const getBadgeColor = (badge: string) => {
    const key = normalizeBadge(badge);
    return BADGE_CONFIG[key]?.color ?? PillowColor.Success;
  };
</script>

<template>
  <article class="placeCard">
    <div class="placeCard__poster">
      <img class="placeCard__img" :src="place.poster" :alt="place.title" />

      <div v-if="place.badges?.length" class="placeCard__badges">
        <Pillow v-for="badge in place.badges" :key="badge" :color="getBadgeColor(badge)">
          {{ getBadgeLabel(badge) }}
        </Pillow>
      </div>
    </div>

    <div class="placeCard__body">
      <div class="placeCard__info">
        <h3 class="placeCard__title">{{ place.title }}</h3>
        <p class="placeCard__city">{{ place.city }}</p>
      </div>

      <div class="placeCard__rating">
        <Rating>{{ place.rating }}</Rating>
      </div>
    </div>
  </article>
</template>

<style scoped lang="scss">
  @use "sass:map";
  @use "@/styles/vars" as *;

  .placeCard {
    width: 100%;
    max-width: 100%;
    min-width: 0;
    overflow: hidden;
    border-radius: 16px;
    background: #fff;
    display: flex;
    flex-direction: column;
    border: 1px solid var(--color-gray);
  }

  .placeCard__poster {
    position: relative;
    width: 100%;
    aspect-ratio: 4 / 3;
    flex: 0 0 auto;
    overflow: hidden;
    background: transparent;
  }

  .placeCard__img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    object-position: center;
  }

  .placeCard__badges {
    position: absolute;
    top: map.get($spacing, "md");
    left: map.get($spacing, "md");
    display: flex;
    flex-wrap: wrap;
    gap: map.get($spacing, "2xs");
    max-width: calc(100% - map.get($spacing, "md") * 2);
  }

  .placeCard__body {
    flex: 1 1 auto;
    min-width: 0;
    min-height: 84px;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    padding: map.get($spacing, "md");
    border-top: 1px solid rgba(0, 0, 0, 0.06);
  }

  .placeCard__info {
    min-width: 0;
  }

  .placeCard__title {
    margin: 0 0 map.get($spacing, "2xs") 0;
    font-size: 1rem;
    line-height: 1.25;
    font-weight: 600;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    overflow: hidden;
  }

  .placeCard__city {
    margin: 0;
    opacity: 0.7;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .placeCard__rating {
    margin-left: map.get($spacing, "md");
    white-space: nowrap;
    flex-shrink: 0;
    text-align: right;
  }
</style>
