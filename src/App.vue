<script setup lang="ts">
  import AppNavbar from "./layouts/AppNavbar/AppNavbar.vue";
</script>

<template>
  <div class="app">
    <AppNavbar />

    <main class="app__main">
      <router-view />
    </main>
  </div>
</template>

<style lang="scss">
  @use "sass:map";
  @use "@/styles/vars" as *;

  .app {
    &__main {
      margin-block: map.get($spacing, "xl");
    }
  }
</style>
