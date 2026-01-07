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
</script>

<template>
  <div class="formField">
    <label v-if="props.label" class="formField__label" @click="inputRef?.focus()">
      {{ props.label }}
    </label>

    <input
      ref="inputRef"
      class="formField__input"
      :class="{ 'formField__input--disabled': props.isDisabled }"
      :type="props.type"
      :placeholder="props.placeholder"
      :disabled="props.isDisabled"
      :value="props.modelValue ?? ''"
      @input="handleInput"
    />
  </div>
</template>

<style scoped>
  .formField {
    display: grid;
    gap: 8px;
  }

  .formField__label {
    cursor: pointer;
    user-select: none;
  }

  .formField__input {
    width: 100%;
    box-sizing: border-box;
    padding: 16px 20px;
    border: 1px solid #111;
    border-radius: 18px;
    cursor: text;
    outline: none;
  }

  .formField__input:focus {
    outline: 1px solid blue;
  }

  .formField__input--disabled {
    background: #f2f2f2;
    cursor: not-allowed;
    color: rgba(0, 0, 0, 0.5);
  }
</style>
