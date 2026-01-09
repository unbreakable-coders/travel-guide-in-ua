<script setup lang="ts">
  import LogoIcon from "@/shared/icons/logo.svg";
  import { RouterLink } from "vue-router";

  type Props = {
    vertical?: boolean;
  };

  withDefaults(defineProps<Props>(), { vertical: false });
</script>

<template>
  <RouterLink :to="{ name: 'home' }" class="brand" :class="{ 'brand--vertical': vertical }">
    <component :is="LogoIcon" class="brand__icon" aria-hidden="true" />

    <div class="brand__text">
      <h4 class="brand__title">Travel Guide In Ua</h4>
      <p class="brand__slogan">Discover Ukraine Deeper</p>
    </div>
  </RouterLink>
</template>

<style lang="scss" scoped>
  @use "sass:map";
  @use "@/styles/vars" as *;

  .brand {
    display: flex;
    align-items: center;
    text-align: start;
    gap: map.get($spacing, "md");
    color: inherit;
    text-transform: uppercase;

    &--vertical {
      flex-direction: column;
      text-align: center;
      gap: map.get($spacing, "xs");
    }

    &__icon {
      width: 50px;
    }

    &__title {
      color: var(--color-primary);
    }

    &__slogan {
      color: var(--color-dark);
      font-size: 12px;
    }
  }
</style>
