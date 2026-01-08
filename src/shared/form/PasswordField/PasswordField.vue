<script lang="ts" setup>
  import { ref } from "vue";
  import EyeOpenIcon from "@/shared/icons/eye-open.svg";
  import EyeCloseIcon from "@/shared/icons/eye-close.svg";

  interface Props {
    isDisabled?: boolean;
    label?: string;
    placeholder?: string;
    modelValue?: string;
  }

  const props = defineProps<Props>();

  const showPassword = ref(false);
  const togglePassword = () => {
    if (props.isDisabled) return;

    showPassword.value = !showPassword.value;
  };

  const inputRef = ref<HTMLInputElement | null>(null);
  const focusInput = () => inputRef.value?.focus();

  const emit = defineEmits<{
    (e: "update:modelValue", value: string): void;
  }>();

  const handleInput = (event: Event) => {
    const target = event.target as HTMLInputElement;
    const trimmedValue = target.value.trimStart();

    emit("update:modelValue", trimmedValue);
  };
</script>

<template>
  <div class="password-field">
    <label v-if="props.label" class="password-field__label" @click="focusInput">
      {{ props.label }}
    </label>

    <div class="password-field__input-wrapper">
      <input
        ref="inputRef"
        class="password-field__input"
        :class="{ 'password-field__input--disabled': props.isDisabled }"
        :type="showPassword ? 'text' : 'password'"
        :placeholder="props.placeholder"
        :disabled="props.isDisabled"
        :value="props.modelValue ?? ''"
        @input="handleInput"
      />

      <button type="button" class="password-field__toggle" @click="togglePassword">
        <component :is="showPassword ? EyeOpenIcon : EyeCloseIcon" />
      </button>
    </div>
  </div>
</template>

<style lang="scss">
  $field-radius: 18px;

  .password-field {
    display: grid;
    gap: 8px;

    &__input-wrapper {
      display: flex;
      border-radius: $field-radius;
      border: 1px solid #111;

      &:focus-within {
        outline: 1px solid blue;
      }

      &:has(input:disabled) {
        background: #f2f2f2;
        outline: unset;
        cursor: not-allowed;
        opacity: 0.6;

        button,
        input {
          cursor: not-allowed;
        }
      }
    }

    &__label {
      cursor: pointer;
      user-select: none;
    }

    &__input {
      width: 100%;
      box-sizing: border-box;
      padding: 16px 20px;
      border-top-left-radius: $field-radius;
      border-bottom-left-radius: $field-radius;
      cursor: text;
      outline: none;

      &:focus {
        border: unset;
      }
    }

    &__toggle {
      display: flex;
      justify-content: center;
      align-items: center;

      background-color: unset;
      border-radius: unset;
      border-top-right-radius: $field-radius;
      border-bottom-right-radius: $field-radius;

      &:hover {
        border-color: transparent;
        outline: unset;
      }

      &:focus-visible,
      &:focus {
        outline: unset;
      }

      svg {
        width: 24px;
        height: 24px;
      }
    }
  }
</style>
