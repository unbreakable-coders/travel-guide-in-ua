<script lang="ts" setup>
  import SelectLanguage from "@/shared/widgets/SelectLanguage/SelectLanguage.vue";
  import type { User } from "@/types/user";
  import { onBeforeUnmount, onMounted, ref } from "vue";

  const emit = defineEmits<{
    (e: "close"): void;
  }>();

  const menuRef = ref<HTMLElement | null>(null);

  const closeMenu = () => emit("close");

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.value && !menuRef.value.contains(event.target as Node)) {
      closeMenu();
    }
  };

  onMounted(() => {
    // Wait until the next tick so the opening click finishes bubbling
    setTimeout(() => {
      document.addEventListener("click", handleClickOutside);
    }, 0);
  });

  onBeforeUnmount(() => {
    document.removeEventListener("click", handleClickOutside);
  });
  const mockUser: User = {
    id: 123,
    name: "Василь",
    country: "Україна",
    city: "Київ",
    avatar:
      "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExaWt0N2lkbTYxcW5yMmo3YnM0bGt4cWZycnhpdHg3OWU3NGprNXJvdSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/tHIRLHtNwxpjIFqPdV/giphy.gif",
  };
</script>

<template>
  <div class="app-menu" ref="menuRef">
    <div class="app-menu__section">
      <button class="app-menu__close-btn" type="button" @click="closeMenu">
        <span class="app-menu__close-btn-line"></span>
        <span class="app-menu__close-btn-line"></span>
      </button>
    </div>

    <div class="app-menu__section app-menu__section--profile">
      <img :src="mockUser.avatar" alt="Profile Avatar" class="app-menu__profile-avatar" />

      <h4 class="app-menu__profile-name">{{ mockUser.name }}</h4>

      <p class="app-menu__profile-location">
        {{ mockUser.country }} {{ mockUser.city ? ` / ${mockUser.city}` : "" }}
      </p>
    </div>

    <div class="app-menu__section app-menu__setting">
      <SelectLanguage />
    </div>

    <div class="app-menu__section"></div>
  </div>
</template>

<style lang="scss">
  @use "sass:map";
  @use "@/styles/vars" as *;
  @use "@/styles/mixins" as *;

  .app-menu {
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    min-width: 320px;
    width: 100%;

    @include screen-sm {
      width: unset;
      border-top-left-radius: $base-radius;
      border-bottom-left-radius: $base-radius;
    }

    display: flex;
    flex-direction: column;
    gap: map.get($spacing, "2xl");
    padding: map.get($spacing, "2xl") map.get($spacing, "xl");

    background-color: var(--color-surface);
    outline: 1px solid var(--color-border);

    &__section {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      gap: map.get($spacing, "md");

      &--setting {
        text-align: start;
      }
    }

    &__profile-avatar {
      width: 200px;
      height: 200px;
      border-radius: 50%;

      object-position: center;
      object-fit: cover;
    }

    &__close-btn {
      position: relative;

      width: 40px;
      height: 30px;

      transition:
        border-color $base-transition ease,
        background-color $base-transition ease;

      border-radius: $small-radius;
      transition: all $base-transition ease;
      border: 1px solid var(--color-text);
      cursor: pointer;

      &:hover {
        border-color: var(--color-text-hover);

        .app-menu__close-btn-line {
          background-color: var(--color-text-hover);
        }
      }
    }

    &__close-btn-line {
      position: absolute;
      left: 50%;
      top: 50%;

      transition: background-color $base-transition ease;
      background-color: var(--color-text);
      width: calc(100% - map.get($spacing, "xs") * 2);
      height: 2px;

      &:first-child {
        transform: translate(-50%, -50%) rotate(45deg);
      }

      &:last-child {
        transform: translate(-50%, -50%) rotate(-45deg);
      }
    }
  }
</style>
