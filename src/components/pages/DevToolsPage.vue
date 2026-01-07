<script setup lang="ts">
  import { ref } from "vue";
  import { TabGroup } from "@/shared/ui/TabGroup";
  import type { TabOption } from "@/shared/ui/TabGroup";
  import { CheckboxButton } from "@/shared/form/CheckboxButton";
  import { CheckboxGroup } from "@/shared/form/CheckboxGroup";
  import type { CheckboxOption } from "@/shared/form/CheckboxGroup";

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

  const selected = ref<Array<string | number>>(["wifi"]);

  const groupOptions: CheckboxOption[] = [
    { value: "wifi", label: "Wi-Fi" },
    { value: "parking", label: "Parking" },
    { value: "pet", label: "Pet friendly" },
    { value: "disabled", label: "Disabled", disabled: true },
  ];

  const groupSelected = ref<Array<string | number>>(["wifi", "parking"]);
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

    <div class="card">
      <h2 class="cardTitle">CheckboxButton</h2>

      <div class="stack">
        <CheckboxButton v-model="selected" value="wifi" label="Wi-Fi" />
        <CheckboxButton v-model="selected" value="parking" label="Parking" />
        <CheckboxButton v-model="selected" value="pet" label="Pet friendly" />
        <CheckboxButton v-model="selected" value="disabled" label="Disabled" :isDisabled="true" />
      </div>

      <div class="row">
        <span class="label">Selected:</span>
        <code class="code">{{ selected }}</code>
      </div>
    </div>

    <div class="card">
      <h2 class="cardTitle">CheckboxGroup</h2>

      <CheckboxGroup v-model="groupSelected" :options="groupOptions" label="Amenities" />

      <div class="row">
        <span class="label">Selected:</span>
        <code class="code">{{ groupSelected }}</code>
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

  .stack {
    display: grid;
    gap: 10px;
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
