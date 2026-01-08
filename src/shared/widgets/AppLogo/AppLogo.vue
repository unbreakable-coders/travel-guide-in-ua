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
      <h3 class="brand__title">Travel Guide In Ua</h3>
      <p class="brand__slogan">Discover Ukraine Deeper</p>
    </div>
  </RouterLink>
</template>

<style lang="scss" scoped>
  .brand {
    display: flex;
    align-items: center;
    text-align: start;
    gap: 16px;
    color: inherit;
    text-transform: uppercase;

    &--vertical {
      flex-direction: column;
      text-align: center;
      gap: 8px;
    }

    &__icon {
      width: 50px;
    }

    &__title {
      color: var(--v-theme-primary);
    }

    &__slogan {
      color: var(--v-theme-gray);
      font-size: 12px;
    }
  }
</style>
