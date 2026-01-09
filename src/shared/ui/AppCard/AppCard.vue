<template>
  <div class="card">
    <slot />
  </div>
</template>

<style lang="scss">
  @use "sass:map";
  @use "@/styles/vars" as *;

  .card {
    background-color: var(--color-surface);
    outline: 2px solid var(--color-gray);
    padding: map.get($spacing, "md");
    border-radius: $base-radius;
  }
</style>
