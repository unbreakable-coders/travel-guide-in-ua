<script setup lang="ts">
  import { computed, onMounted, ref, watch } from "vue";
  import CheckboxButton from "@/shared/form/CheckboxButton/CheckboxButton.vue";
  import type { CheckboxOption } from "./types";

  interface Props {
    options: CheckboxOption[];
    defaultSelected?: Array<string | number>;
    label?: string;
    modelValue?: Array<string | number>;
  }

  const props = defineProps<Props>();

  const emit = defineEmits<{
    (e: "update:modelValue", value: Array<string | number>): void;
  }>();

  const localSelected = ref<Array<string | number>>(
    props.defaultSelected ? [...props.defaultSelected] : []
  );

  const selected = computed<Array<string | number>>(() => {
    return props.modelValue ?? localSelected.value;
  });

  const handleChange = (newSelected: Array<string | number>) => {
    if (props.modelValue === undefined) {
      localSelected.value = newSelected;
    }
    emit("update:modelValue", newSelected);
  };

  onMounted(() => {
    if (props.modelValue === undefined && props.defaultSelected?.length) {
      const initial = [...props.defaultSelected];
      localSelected.value = initial;
      emit("update:modelValue", initial);
    }
  });

  watch(
    () => props.modelValue,
    (val) => {
      if (val !== undefined) return;
      localSelected.value = props.defaultSelected ? [...props.defaultSelected] : [];
    }
  );
</script>

<template>
  <div class="checkbox-group">
    <div v-if="label" class="checkbox-group__label">
      {{ label }}
    </div>

    <div class="checkbox-group__list">
      <CheckboxButton
        v-for="option in options"
        :key="String(option.value)"
        :value="option.value"
        :label="option.label ?? String(option.value)"
        :is-disabled="option.disabled"
        :model-value="selected"
        @update:model-value="handleChange"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
  @use "sass:map";
  @use "@/styles/vars" as *;
  @use "@/styles/typography" as *;

  .checkbox-group {
    display: grid;

    &__label {
      @include label;

      display: block;
      user-select: none;
      margin-bottom: map.get($spacing, "md");
    }

    &__list {
      display: flex;
      flex-wrap: wrap;
      gap: map.get($spacing, "md");
    }
  }
</style>
