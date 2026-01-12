<script lang="ts" setup>
  import AppLogo from "@/shared/widgets/AppLogo/AppLogo.vue";
  import AppMenu from "../AppMenu/AppMenu.vue";
  import { computed, ref } from "vue";
  import { useI18n } from "vue-i18n";

  const { t } = useI18n();

  const links = computed(() => [
    { label: t("navbar.links.home"), pageName: "home" },
    { label: t("navbar.links.develop"), pageName: "develop" },
    { label: t("navbar.links.devtools"), pageName: "devtools" },
  ]);

  console.log("Rerendering...");

  const isMenuShown = ref(false);

  const openMenu = () => (isMenuShown.value = true);
  const closeMenu = () => (isMenuShown.value = false);
</script>

<template>
  <nav class="nav">
    <div class="nav__wrapper">
      <div class="nav__brand">
        <AppLogo />
      </div>

      <ul class="nav__list">
        <li v-for="link in links" :key="link.pageName" class="nav__item">
          <router-link
            :to="{ name: link.pageName }"
            class="nav__link"
            exact-active-class="nav__link--active"
          >
            {{ link.label }}
          </router-link>
        </li>
      </ul>

      <button class="nav__nav-btn" type="button" @click="openMenu">
        <span class="nav__nav-btn-line"></span>
        <span class="nav__nav-btn-line"></span>
        <span class="nav__nav-btn-line"></span>
      </button>
    </div>

    <AppMenu v-if="isMenuShown" @close="closeMenu" />
  </nav>
</template>

<style lang="scss">
  @use "sass:map";
  @use "@/styles/vars" as *;
  @use "@/styles/mixins" as *;

  .nav {
    position: sticky;
    top: 0;
    z-index: 5;

    background-color: var(--color-surface);
    outline: 1px solid var(--color-border);

    &__wrapper {
      @include container;

      display: flex;
      align-items: center;
      border-radius: $base-radius;

      @include screen-lg {
        gap: map.get($spacing, "2xl");
      }
    }

    &__list {
      display: flex;
      align-items: center;

      @include screen-sm {
        gap: map.get($spacing, "sm");
      }
    }

    &__link {
      padding: map.get($spacing, "xs") map.get($spacing, "sm");
      border-radius: $small-radius;
      transition: all $base-transition ease;

      &:not(&--active):hover {
        color: var(--color-text-hover);
      }

      &--active {
        background-color: var(--color-nav-link-active);
      }
    }

    &__nav-btn {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-left: auto;

      width: 40px;
      height: 30px;

      transition:
        border-color $base-transition ease,
        background-color $base-transition ease;

      padding: map.get($spacing, "xs");
      border-radius: $small-radius;
      border: 1px solid var(--color-text);
      cursor: pointer;

      &:hover {
        border-color: var(--color-text-hover);

        .nav__nav-btn-line {
          background-color: var(--color-text-hover);
        }
      }
    }

    &__nav-btn-line {
      transition: background-color $base-transition ease;
      background-color: var(--color-text);
      height: 2px;
    }

    .brand__title,
    .brand__slogan {
      display: none;

      @include screen-md {
        display: block;
      }
    }
  }
</style>
