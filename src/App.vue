<script setup lang="ts">
  import AppHeader from "./components/AppHeader.vue";
</script>

<template>
  <div class="app">
    <AppHeader />

    <main class="app__main">
      <router-view />
    </main>
  </div>
</template>

<style lang="scss">
  @use "sass:map";
  @use "@/styles/vars" as *;
  @use "@/styles/mixins" as *;

  .app {
    &__main {
      max-width: $max-body-width;
      margin-inline: auto;
      margin-block: map.get($spacing, "xl");
      padding-inline: map.get($spacing, "sm");

      @include screen-md {
        padding-inline: map.get($spacing, "xl");
      }
    }
  }
</style>
