<script setup lang="ts">
  import { ref } from "vue";
  import { TabGroup } from "@/shared/ui/TabGroup";
  import type { TabOption } from "@/shared/ui/TabGroup";

  const options: TabOption[] = [
    { value: "overview", label: "Overview" },
    { value: "features", label: "Features" },
    { value: "disabled", label: "Disabled", disabled: true },
    { value: "settings", label: "Settings" },
  ];

  const active = ref<string | number>("overview");

  const onUpdate = (value: string | number) => {
    active.value = value;
  };
</script>

<template>
  <section class="page">
    <header class="head">
      <h1 class="title">DevTools</h1>
      <p class="subtitle">UI playground</p>
    </header>

    <div class="card">
      <h2 class="cardTitle">TabGroup</h2>

      <TabGroup :options="options" :defaultOption="options[0]" @update="onUpdate" />

      <div class="row">
        <span class="label">Active:</span>
        <code class="code">{{ active }}</code>
      </div>
    </div>
  </section>
</template>

<style scoped>
  .page {
    padding: 24px;
    display: grid;
    gap: 16px;
  }

  .head {
    display: grid;
    gap: 4px;
  }

  .title {
    margin: 0;
    font-size: 24px;
    font-weight: 700;
  }

  .subtitle {
    margin: 0;
    opacity: 0.7;
  }

  .card {
    border: 1px solid var(--color-border, #e5e7eb);
    background: var(--color-surface, #fff);
    border-radius: 16px;
    padding: 16px;
    display: grid;
    gap: 12px;
    max-width: 720px;
  }

  .cardTitle {
    margin: 0;
    font-size: 16px;
    font-weight: 700;
  }

  .row {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .label {
    opacity: 0.7;
  }

  .code {
    padding: 2px 8px;
    border-radius: 8px;
    border: 1px solid var(--color-border, #e5e7eb);
    background: var(--color-bg, #f9fafb);
  }
</style>
