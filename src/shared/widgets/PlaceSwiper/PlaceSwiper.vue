<script setup lang="ts">
  import { computed, nextTick, onMounted, ref } from "vue";
  import type { Place } from "@/types/place";

  import { Swiper, SwiperSlide } from "swiper/vue";
  import type { Swiper as SwiperInstance } from "swiper/types";
  import "swiper/swiper-bundle.css";

  import ArrowIcon from "@/shared/icons/arrow.svg";
  import { IconButton } from "@/shared/ui/IconButton";
  import { PlaceCard } from "@/shared/widgets/PlaceCard";
  import { ButtonType } from "@/types/button";

  interface Props {
    places: Place[];
    label: string;
  }

  defineOptions({ name: "PlaceSwiper" });

  const props = defineProps<Props>();

  const swiperRef = ref<SwiperInstance | null>(null);

  const onSwiper = (swiper: SwiperInstance) => {
    swiperRef.value = swiper;
  };

  onMounted(async () => {
    await nextTick();
    swiperRef.value?.update();
  });

  const goPrev = () => swiperRef.value?.slidePrev();
  const goNext = () => swiperRef.value?.slideNext();

  const normalizedPlaces = computed<Place[]>(() => {
    return props.places.map((p) => ({
      ...p,
      badges: p.badges ?? [],
    }));
  });

  const breakpoints = {
    0: { slidesPerView: 1.2 },
    768: { slidesPerView: 3 },
    1024: { slidesPerView: 4 },
  } as const;
</script>

<template>
  <section class="place-swiper">
    <header class="place-swiper__header">
      <h3 class="place-swiper__label">{{ label }}</h3>

      <div class="place-swiper__controls">
        <IconButton
          class="place-swiper__control place-swiper__control--prev"
          :type="ButtonType.Button"
          :icon="ArrowIcon"
          ariaLabel="Previous"
          @click="goPrev"
        />

        <IconButton
          class="place-swiper__control place-swiper__control--next"
          :type="ButtonType.Button"
          :icon="ArrowIcon"
          ariaLabel="Next"
          @click="goNext"
        />
      </div>
    </header>

    <Swiper
      class="place-swiper__swiper"
      :space-between="16"
      :breakpoints="breakpoints"
      :grab-cursor="true"
      :watch-overflow="true"
      :observer="true"
      :observe-parents="true"
      :speed="800"
      :loop="true"
      @swiper="onSwiper"
    >
      <SwiperSlide v-for="place in normalizedPlaces" :key="place.id" class="place-swiper__slide">
        <PlaceCard class="place-swiper__card" :place="place" />
      </SwiperSlide>
    </Swiper>
  </section>
</template>

<style scoped lang="scss">
  @use "sass:map";
  @use "@/styles/vars" as *;

  .place-swiper {
    &__header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: map.get($spacing, "md");
      margin-bottom: map.get($spacing, "md");
    }

    &__controls {
      display: flex;
      align-items: center;
      gap: map.get($spacing, "sm");
      flex-shrink: 0;
    }

    &__control {
      :deep(svg) {
        transform: rotate(-90deg);
      }
    }

    &__control--prev {
      :deep(svg) {
        transform: rotate(90deg);
      }
    }

    &__swiper {
      width: 100%;
      max-width: 100%;
      overflow: hidden;
    }

    :deep(.swiper) {
      width: 100%;
      max-width: 100%;
      overflow: hidden;
    }

    :deep(.swiper-wrapper) {
      align-items: stretch;
    }

    &__slide {
      height: auto;
      min-width: 0;
      max-width: 100%;
      display: flex;
    }

    &__card {
      width: 100%;
      height: 100%;
      min-width: 0;
    }

    :deep(.placeCard__img) {
      width: 100%;
      height: 100%;
      display: block;
      object-fit: cover;
    }
  }
</style>
