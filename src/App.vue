<script setup lang="ts">
  import AppHeader from "./components/AppHeader.vue";
  import AppFooter from "./components/AppFooter.vue";
</script>

<template>
  <div class="app">
    <AppHeader />
    <main class="app__main">
      <router-view />
    </main>
    <AppFooter />
  </div>
</template>

<style scoped>
  .app {
    min-height: 100vh;
    display: grid;
    grid-template-rows: auto 1fr auto;
  }

  .app__main {
    width: min(1200px, 100%);
    margin: 0 auto;
    padding: 24px 16px;
  }
</style>
