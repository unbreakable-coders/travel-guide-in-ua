<script setup lang="ts">
  import { ref } from "vue";

  interface Props {
    isDisabled?: boolean;
    label?: string;
    placeholder?: string;
    modelValue?: string;
    height?: string;
  }

  const props = withDefaults(defineProps<Props>(), {
    height: "300px",
  });

  const emit = defineEmits<{
    (e: "update:modelValue", value: string): void;
  }>();

  const textareaRef = ref<HTMLTextAreaElement | null>(null);

  const handleInput = (event: Event) => {
    const target = event.target as HTMLTextAreaElement;
    const trimmedValue = target.value.trimStart();

    emit("update:modelValue", trimmedValue);
  };

  const focusTextarea = () => {
    if (!props.isDisabled) {
      textareaRef.value?.focus();
    }
  };
</script>

<template>
  <div class="text-area-field">
    <label v-if="props.label" class="text-area-field__label" @click="focusTextarea">
      {{ props.label }}
    </label>

    <textarea
      ref="textareaRef"
      class="text-area-field__textarea"
      :class="{ 'text-area-field__textarea--disabled': props.isDisabled }"
      :placeholder="props.placeholder"
      :disabled="props.isDisabled"
      :value="props.modelValue ?? ''"
      :style="{ height: props.height }"
      @input="handleInput"
    />
  </div>
</template>

<style lang="scss" scoped>
  .text-area-field {
    display: grid;
    gap: 8px;

    &__label {
      font-size: 14px;
      line-height: 20px;
      cursor: pointer;
      user-select: none;
    }

    &__textarea {
      width: 100%;
      resize: none;
      padding: 12px;
      border: 1px solid var(--color-border, #d0d5dd);
      border-radius: 12px;
      background: var(--color-surface, #ffffff);
      color: var(--color-text, #101828);
      font-size: 14px;
      line-height: 20px;
      cursor: text;
      outline: none;
      box-sizing: border-box;

      &:focus {
        border-color: var(--color-primary, #2f80ed);
        box-shadow: 0 0 0 3px rgba(47, 128, 237, 0.2);
      }

      &--disabled {
        background: var(--color-disabled-bg, #f2f4f7);
        color: var(--color-disabled-text, #98a2b3);
        cursor: not-allowed;
      }
    }
  }
</style>
