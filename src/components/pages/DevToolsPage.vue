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
  import AppLogo from "@/shared/widgets/AppLogo/AppLogo.vue";
  import AppCard from "@/shared/ui/AppCard/AppCard.vue";
  import { PlaceFeedback } from "@/shared/widgets/PlaceFeedback";
  import type { Feedback } from "@/types/feedback";
  import { BookingCard } from "@/shared/widgets/BookingCard";
  import type { Booking } from "@/types/booking";

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

  /*** PlaceFeedback ***/
  const feedbacks: Feedback[] = [
    {
      id: 1,
      text: "Amazing cultural experience! The guide was very knowledgeable and the tour was well-organized. Highly recommend for anyone interested in Ukrainian history.",
      rating: 4.8,
      user: {
        id: 101,
        name: "Anna Schmidt",
        country: "Germany",
        city: "Berlin",
        avatar:
          "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop&crop=face",
      },
    },
    {
      id: 2,
      text: "Great tour, but could be a bit shorter. The information was very detailed, which is good for history buffs, but might be too much for casual visitors.",
      rating: 3.5,
      user: {
        id: 102,
        name: "John Carter",
        country: "USA",
        city: "New York",
        avatar:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
      },
    },
    {
      id: 3,
      text: "Perfect for food lovers! Tried traditional dishes and learned about local culinary traditions. The guide was passionate and engaging.",
      rating: 5.0,
      user: {
        id: 103,
        name: "Maria Rodriguez",
        country: "Spain",
        city: "Madrid",
        avatar:
          "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=face",
      },
    },
  ];

  /*** LineChart ***/
  const monthlyData = [12, 19, 8, 14, 20, 25, 18, 22, 15, 10, 5, 7];
  const weeklyData = [5, 8, 12, 15, 9, 4, 6];
  const seasonalData = [50, 75, 60, 40];

  /*** BookingCard ***/
  const bookings: Booking[] = [
    {
      id: `bk_${Date.now()}`,
      time: Date.now() + 86400000,
      title: "Cultural Tour - Kyiv Historical Center",
    },
    {
      id: `bk_${Date.now() + 1}`,
      time: Date.now() + 172800000,
      title: "Gastronomic Experience - Lviv Old Town",
    },
    {
      id: `bk_${Date.now() + 2}`,
      time: Date.now() - 86400000,
      title: "Active Adventure - Carpathian Mountains",
    },
  ];
</script>

<template>
  <div class="page">
    <header class="page__header">
      <h1 class="page__page__header-title">DevTools</h1>
      <p class="page__page__header-subtitle">UI playground</p>
    </header>

    <section class="page__section page__section--two">
      <AppCard class="page__card">
        <h2 class="page__card-title">TabButton</h2>

        <TabButton @click="onTabClick">Static</TabButton>
        <TabButton :state="TabButtonState.Active" @click="onTabClick">Active</TabButton>
        <TabButton :state="TabButtonState.Disabled" @click="onTabClick">Disabled</TabButton>
      </AppCard>

      <AppCard class="page__card">
        <h2 class="page__card-title">TabGroup</h2>

        <TabGroup :options="options" :defaultOption="options[0]" @update="onUpdate" />

        <div class="page__card-row">
          <span class="page__card-label">Active:</span>
          <code class="page__card-code">{{ active }}</code>
        </div>
      </AppCard>
    </section>

    <section class="page__section page__section--two">
      <AppCard class="page__card page__card--vertical">
        <h2 class="page__card-title">FormField</h2>

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
      </AppCard>

      <AppCard class="page__card page__card--vertical">
        <h2 class="page__card-title">PasswordField</h2>

        <PasswordField v-model="password" label="Password" placeholder="Type your password" />

        <PasswordField v-model="password" label="Password" placeholder="Type your password" />

        <PasswordField
          v-model="password"
          label="Password"
          placeholder="Disabled field"
          :isDisabled="true"
        />
      </AppCard>
    </section>

    <section class="page__section page__section--two">
      <AppCard class="page__card page__card--vertical">
        <h2 class="page__card-title">SelectField</h2>

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

        <div class="page__card-row">
          <span class="page__card-label">Selected:</span>
          <code class="page__card-code">{{ selectedOption }}</code>
        </div>
      </AppCard>

      <AppCard class="page__card page__card--vertical">
        <h2 class="page__card-title">Language Selection</h2>

        <SelectLanguage />
      </AppCard>
    </section>

    <section class="page__section page__section--two">
      <AppCard class="page__card page__card--vertical">
        <h2 class="page__card-title">CheckboxButton</h2>

        <CheckboxButton v-model="selected" value="wifi" label="Wi-Fi" />
        <CheckboxButton v-model="selected" value="parking" label="Parking" />
        <CheckboxButton v-model="selected" value="pet" label="Pet friendly" />
        <CheckboxButton v-model="selected" value="disabled" label="Disabled" :isDisabled="true" />

        <div class="page__card-row">
          <span class="page__card-label">Selected:</span>
          <code class="page__card-code">{{ selected }}</code>
        </div>
      </AppCard>

      <AppCard class="page__card">
        <h2 class="page__card-title">CheckboxGroup</h2>

        <CheckboxGroup v-model="groupSelected" :options="groupOptions" label="Amenities" />

        <div class="page__card-row">
          <span class="page__card-label">Selected:</span>
          <code class="page__card-code">{{ groupSelected }}</code>
        </div>
      </AppCard>
    </section>

    <section class="page__section page__section--two">
      <AppCard class="page__card page__card--vertical">
        <h2 class="page__card-title">RadioButton</h2>

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

        <div class="page__card-row">
          <span class="page__card-label">Selected:</span>
          <code class="page__card-code">{{ radioSelected }}</code>
        </div>
      </AppCard>

      <AppCard class="page__card">
        <h2 class="page__card-title">RadioGroup</h2>

        <RadioGroup v-model="radioGroupSelected" :options="radioGroupOptions" label="Tour types" />

        <div class="page__card-row">
          <span class="page__card-label">Selected:</span>
          <code class="page__card-code">{{ radioGroupSelected }}</code>
        </div>
      </AppCard>
    </section>

    <section class="page__section page__section--two">
      <AppCard class="page__card page__card--vertical">
        <h2 class="page__card-title">Rating</h2>

        <Rating>4.666</Rating>
        <Rating>5</Rating>
        <Rating>2.01</Rating>
      </AppCard>

      <AppCard class="page__card page__card--vertical">
        <h2 class="page__card-title">AppLogo</h2>

        <AppLogo />
        <AppLogo :vertical="true" />
      </AppCard>
    </section>

    <section class="page__section page__section--two">
      <AppCard class="page__card">
        <h2 class="page__card-title">PlaceFeedback</h2>
      
        <div class="place-feedback-list">
          <PlaceFeedback v-for="feedback in feedbacks" :key="feedback.id" :feedback="feedback" />
        </div>
      </AppCard>
      
      <AppCard class="page__card page__card--vertical">
        <h2 class="page__card-title">BookingCard Widget</h2>

        <div class="booking-card-list">
          <BookingCard v-for="booking in bookings" :key="booking.id" :booking="booking" />
        </div>
      </AppCard>
    </section>

    <section class="page__section page__section--three">
      <AppCard class="page__card">
        <LineChart
          title="Monthly Revenue"
          :tension="0"
          :labelSet="LineChartLabelSet.MONTHS"
          :data="monthlyData"
          :grid="{ x: false, y: true }"
        />
      </AppCard>

      <AppCard class="page__card">
        <LineChart
          title="Weekly Visitors"
          color="#FA5C5C"
          :thickness="2"
          :labelSet="LineChartLabelSet.WEEK_DAYS"
          :data="weeklyData"
          :grid="{ x: false, y: false }"
        />
      </AppCard>

      <AppCard>
        <LineChart
          title="Seasonal Performance"
          color="#00F7FF"
          :thickness="3"
          :labelSet="LineChartLabelSet.SEASONS"
          :data="seasonalData"
        />
      </AppCard>
    </section>
  </div>
</template>

<style lang="scss" scoped>
  @use "sass:map";
  @use "@/styles/vars" as *;
  @use "@/styles/mixins" as *;

  .page {
    display: flex;
    flex-direction: column;
    gap: map.get($spacing, "md");

    @include container;

    &__section {
      @include grid(1);

      @include screen-xl {
        &--two {
          @include grid(2);
        }

        &--three {
          @include grid(3);
        }
      }
    }

    &__card {
      &--vertical {
        .page__card-title {
          margin-bottom: calc(map.get($spacing, "xl") - map.get($spacing, "lg"));
        }

        display: flex;
        flex-direction: column;
        gap: map.get($spacing, "lg");
      }
    }

    &__card-title {
      margin-bottom: map.get($spacing, "xl");
    }

    &__card-row {
      margin-top: map.get($spacing, "md");
    }

    &__card-label {
      margin-right: map.get($spacing, "md");
    }

    &__card-code {
      background-color: var(--color-gray);
      padding: map.get($spacing, "2xs") map.get($spacing, "sm");
      border-radius: $small-radius;
    }

    .place-feedback-list {
      display: flex;
      flex-direction: column;
      gap: map.get($spacing, "md");
    }
  }
</style>
