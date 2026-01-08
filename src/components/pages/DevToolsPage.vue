<script setup lang="ts">
  import { ref } from "vue";
  import { TabGroup } from "@/shared/ui/TabGroup";
  import type { TabOption } from "@/shared/ui/TabGroup";
  import { CheckboxButton } from "@/shared/form/CheckboxButton";
  import { FormField, InputType } from "@/shared/form/FormField";
  import { CheckboxGroup } from "@/shared/form/CheckboxGroup";
  import type { CheckboxOption } from "@/shared/form/CheckboxGroup";
  import PasswordField from "@/shared/form/PasswordField/PasswordField.vue";
  import { RadioButton } from "@/shared/form/RadioButton";
  import { RadioGroup } from "@/shared/form/RadioGroup";
  import type { RadioOption } from "@/shared/form/RadioGroup";
  import { TabButton, TabButtonState } from "@/shared/ui/TabButton";

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
  const name = ref("");
  const email = ref("");
  const password = ref("");
  const disabledField = ref("");

  const groupOptions: CheckboxOption[] = [
    { value: "wifi", label: "Wi-Fi" },
    { value: "parking", label: "Parking" },
    { value: "pet", label: "Pet friendly" },
    { value: "disabled", label: "Disabled", disabled: true },
  ];

  const groupSelected = ref<Array<string | number>>(["wifi", "parking"]);

  const radioSelected = ref<string | number>("cultural");

  const radioGroupOptions: RadioOption[] = [
    { value: "cultural", label: "Cultural" },
    { value: "active", label: "Active" },
    { value: "gastronomic", label: "Gastronomic" },
    { value: "historical", label: "Historical" },
    { value: "natural", label: "Natural" },
  ];

  const radioGroupSelected = ref<string | number>("cultural");

  const onTabClick = () => {
    console.log("TabButton click");
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
      <h2 class="cardTitle">FormField</h2>

      <div class="formFieldDemo">
        <div class="stack">
          <FormField
            v-model="name"
            :type="InputType.Text"
            label="Name"
            placeholder="Type your name"
          />

          <FormField
            v-model="email"
            :type="InputType.Email"
            label="Email"
            placeholder="Type your email"
          />

          <FormField
            v-model="disabledField"
            :type="InputType.Text"
            label="Disabled"
            placeholder="Disabled field"
            :isDisabled="true"
          />
        </div>
      </div>
    </div>

    <div class="card">
      <h2 class="cardTitle">PasswordField</h2>

      <div class="passwordFieldDemo">
        <PasswordField v-model="password" label="Password" placeholder="Type your password" />

        <PasswordField v-model="password" label="Password" placeholder="Type your password" />

        <PasswordField
          v-model="password"
          label="Password"
          placeholder="Disabled field"
          :isDisabled="true"
        />
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

    <div class="card">
      <h2 class="cardTitle">RadioButton</h2>

      <div class="stack">
        <RadioButton v-model="radioSelected" value="cultural" label="Cultural" />
        <RadioButton v-model="radioSelected" value="active" label="Active" />
        <RadioButton v-model="radioSelected" value="gastronomic" label="Gastronomic" />
        <RadioButton v-model="radioSelected" value="historical" label="Historical" />
        <RadioButton
          v-model="radioSelected"
          value="extreme"
          label="Extreme (requires preparation)"
          :isDisabled="true"
        />
      </div>

      <div class="row">
        <span class="label">Selected:</span>
        <code class="code">{{ radioSelected }}</code>
      </div>
    </div>

    <div class="card">
      <h2 class="cardTitle">RadioGroup</h2>

      <RadioGroup v-model="radioGroupSelected" :options="radioGroupOptions" label="Tour types" />

      <div class="row">
        <span class="label">Selected:</span>
        <code class="code">{{ radioGroupSelected }}</code>
      </div>
    </div>

    <div class="card">
      <h2 class="cardTitle">TabButton</h2>

      <div class="stack">
        <TabButton @click="onTabClick">Static</TabButton>
        <TabButton :state="TabButtonState.Active" @click="onTabClick">Active</TabButton>
        <TabButton :state="TabButtonState.Disabled" @click="onTabClick">Disabled</TabButton>
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

  .formFieldDemo,
  .passwordFieldDemo {
    width: 420px;
    max-width: 100%;
  }
</style>
