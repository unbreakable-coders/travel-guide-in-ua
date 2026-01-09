<script setup lang="ts">
  import { ref } from "vue";
  import { InputType } from "./types";

  interface Props {
    type: InputType;
    isDisabled?: boolean;
    label?: string;
    placeholder?: string;
    modelValue?: string;
  }

  const props = defineProps<Props>();

  const emit = defineEmits<{
    (e: "update:modelValue", value: string): void;
  }>();

  const inputRef = ref<HTMLInputElement | null>(null);

  const handleInput = (event: Event) => {
    const target = event.target as HTMLInputElement;
    const trimmedValue = target.value.trimStart();
    emit("update:modelValue", trimmedValue);
  };

  const focusInput = () => {
    inputRef.value?.focus();
  };
</script>

<template>
  <div class="form-field">
    <label v-if="props.label" class="form-field__label" @click="focusInput">
      {{ props.label }}
    </label>

    <input
      ref="inputRef"
      class="form-field__input"
      :class="{ 'form-field__input--disabled': props.isDisabled }"
      :type="props.type"
      :placeholder="props.placeholder"
      :disabled="props.isDisabled"
      :value="props.modelValue ?? ''"
      @input="handleInput"
    />
  </div>
</template>

<style lang="scss">
  @use "sass:map";
  @use "@/styles/vars" as *;
  @use "@/styles/typography" as *;
  @use "@/styles/functions" as *;

  .form-field {
    &__label {
      @include label;

      display: block;
      cursor: pointer;
      user-select: none;
      margin-bottom: map.get($spacing, "md");
    }

    &__input {
      width: 100%;
      padding: map.get($spacing, "sm") map.get($spacing, "md");
      border: 1px solid var(--color-dark);
      border-radius: $small-radius;
      cursor: text;

      &:focus {
        outline: 1px solid var(--color-blue);
        border-color: transparent;
      }

      &--disabled {
        border-color: var(--color-dark);
        color: var(--color-dark);
        background-color: opacity(map.get($colors, "dark"), 10);
        cursor: not-allowed;
      }
    }
  }
</style>
