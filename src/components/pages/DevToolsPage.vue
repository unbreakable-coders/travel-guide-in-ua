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
  import type { SelectOption } from "@/shared/form/SelectField";
  import SelectField from "@/shared/form/SelectField/SelectField.vue";
  import SelectLanguage from "@/shared/widgets/SelectLanguage/SelectLanguage.vue";
  import LineChart from "@/shared/widgets/LineChart/LineChart.vue";
  import { LineChartLabelSet } from "@/shared/widgets/LineChart/types";
  import { Rating } from "@/shared/widgets/Rating";

  /*** TabButton and TabGroup ***/
  const options: TabOption[] = [
    { value: "overview", label: "Overview" },
    { value: "features", label: "Features" },
    { value: "disabled", label: "Disabled", disabled: true },
    { value: "settings", label: "Settings" },
  ];

  const active = ref<string | number>("overview");
  const onTabClick = () => console.log("TabButton click");
  const onUpdate = (value: string | number) => (active.value = value);

  /*** CheckboxButton and CheckboxGroup ***/
  const groupOptions: CheckboxOption[] = [
    { value: "wifi", label: "Wi-Fi" },
    { value: "parking", label: "Parking" },
    { value: "pet", label: "Pet friendly" },
    { value: "disabled", label: "Disabled", disabled: true },
  ];

  const selected = ref<Array<string | number>>(["wifi"]);
  const groupSelected = ref<Array<string | number>>(["wifi", "parking"]);

  /*** FormField and PasswordField ***/
  const name = ref("");
  const email = ref("");
  const password = ref("");
  const disabledField = ref("");

  /*** RadioButton and RadioGroup ***/
  const radioSelected = ref<string | number>("cultural");
  const radioGroupSelected = ref<string | number>("cultural");

  const radioGroupOptions: RadioOption[] = [
    { value: "cultural", label: "Cultural" },
    { value: "active", label: "Active" },
    { value: "gastronomic", label: "Gastronomic" },
    { value: "historical", label: "Historical" },
    { value: "natural", label: "Natural" },
  ];

  /*** SelectField and SelectLanguage ***/
  const selectedOption = ref<SelectOption["value"]>();
  const selectFieldOptions: SelectOption[] = [
    { label: "Option №1", value: "option-1" },
    { label: "Option №2", value: "option-2" },
    { label: "Option №3", value: "option-3" },
    { label: "Option №4", value: "option-4" },
  ];

  /*** LineChart ***/
  const monthlyData = [12, 19, 8, 14, 20, 25, 18, 22, 15, 10, 5, 7];
  const weeklyData = [5, 8, 12, 15, 9, 4, 6];
  const seasonalData = [50, 75, 60, 40];
</script>

<template>
  <section class="page">
    <header class="head">
      <h1 class="title">DevTools</h1>
      <p class="subtitle">UI playground</p>
    </header>

    <div class="card">
      <h2 class="cardTitle">TabButton</h2>

      <div class="stack">
        <TabButton @click="onTabClick">Static</TabButton>
        <TabButton :state="TabButtonState.Active" @click="onTabClick">Active</TabButton>
        <TabButton :state="TabButtonState.Disabled" @click="onTabClick">Disabled</TabButton>
      </div>
    </div>

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
      <h2 class="cardTitle">SelectField</h2>

      <div class="selectFieldDemo">
        <SelectField
          label="SelectField Label"
          :options="selectFieldOptions"
          v-model="selectedOption"
        />

        <SelectField
          label="SelectField Label"
          :options="selectFieldOptions"
          :isDisabled="true"
          v-model="selectedOption"
        />

        <div class="row">
          <span class="label">Selected:</span>
          <code class="code">{{ selectedOption }}</code>
        </div>
      </div>
    </div>

    <div class="card">
      <h2 class="cardTitle">Language Selection</h2>

      <SelectLanguage />
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
      <h2 class="cardTitle">Rating</h2>

      <div class="ratingDemo">
        <div class="stack">
          <Rating>4.666</Rating>
          <Rating>5</Rating>
          <Rating>2.01</Rating>
        </div>
      </div>
    </div>

    <div class="card">
      <h2 class="cardTitle">Line Chart</h2>

      <LineChart
        title="Monthly Revenue"
        height="250px"
        :tension="0"
        :labelSet="LineChartLabelSet.MONTHS"
        :data="monthlyData"
        :grid="{ x: false, y: true }"
      />

      <LineChart
        title="Weekly Visitors"
        color="#FA5C5C"
        height="300px"
        :thickness="2"
        :labelSet="LineChartLabelSet.WEEK_DAYS"
        :data="weeklyData"
        :grid="{ x: false, y: false }"
      />

      <LineChart
        title="Seasonal Performance"
        color="#00F7FF"
        height="300px"
        :thickness="3"
        :labelSet="LineChartLabelSet.SEASONS"
        :data="seasonalData"
      />
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
