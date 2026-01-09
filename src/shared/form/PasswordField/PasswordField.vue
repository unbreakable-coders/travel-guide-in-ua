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
  @use "sass:map";
  @use "@/styles/vars" as *;
  @use "@/styles/typography" as *;
  @use "@/styles/functions" as *;

  .password-field {
    &__input-wrapper {
      display: flex;
      width: 100%;
      padding: map.get($spacing, "sm") map.get($spacing, "md");
      border: 1px solid var(--color-dark);
      border-radius: $small-radius;

      &:focus-within {
        outline: 1px solid var(--color-blue);
        border-color: transparent;
      }

      &:has(input:disabled) {
        border-color: var(--color-dark);
        color: var(--color-dark);
        background-color: opacity(map.get($colors, "dark"), 10);
        cursor: not-allowed;
        outline: unset;

        button,
        input {
          cursor: not-allowed;
        }
      }
    }

    &__label {
      @include label;

      display: block;
      cursor: pointer;
      user-select: none;
      margin-bottom: map.get($spacing, "md");
    }

    &__input {
      width: 100%;
      cursor: text;
    }

    &__toggle {
      display: flex;
      justify-content: center;
      align-items: center;

      background-color: unset;
      border-radius: unset;
      border-top-right-radius: $small-radius;
      border-bottom-right-radius: $small-radius;

      svg {
        width: 24px;
        height: 24px;
      }
    }
  }
</style>
