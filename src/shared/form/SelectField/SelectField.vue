<script lang="ts" setup>
  import { ref, computed, onMounted, onBeforeUnmount, watch } from "vue";
  import type { SelectOption } from "./types";
  import ArrowIcon from "@/shared/icons/arrow.svg";
  import SelectedIcon from "@/shared/icons/tick-mark.svg";

  interface Props {
    options: SelectOption[];
    label?: string;
    isDisabled?: boolean;
    modelValue?: string | number;
  }

  const props = defineProps<Props>();
  const emit = defineEmits<{
    (e: "update:modelValue", value: string | number): void;
  }>();

  const isShown = ref(false);
  const toggleOptions = () => {
    if (props.isDisabled) return;

    isShown.value = !isShown.value;
  };

  const selectedOption = computed<SelectOption | null>({
    get() {
      return props.options.find((o) => o.value === props.modelValue) ?? props.options[0] ?? null;
    },

    set(option) {
      if (!option) return;

      emit("update:modelValue", option.value);
      isShown.value = false;
    },
  });

  const onSelect = (option: SelectOption) => {
    if (props.isDisabled) return;

    selectedOption.value = option;
  };

  watch(
    () => [props.modelValue, props.options],
    ([modelValue, options]) => {
      if (modelValue == null && Array.isArray(options) && options.length) {
        emit("update:modelValue", options[0]?.value ?? "");
      }
    },
    { immediate: true }
  );

  const optionsRef = ref<HTMLElement | null>(null);
  const optionsHeight = computed(() =>
    isShown.value && optionsRef.value ? `${optionsRef.value.scrollHeight}px` : "0px"
  );

  // Hide options when the user clicks outside this component
  const selectRef = ref<HTMLElement | null>(null);
  const onClickOutside = (event: MouseEvent) => {
    if (!isShown.value) return;

    const target = event.target as Node;

    if (selectRef.value && !selectRef.value.contains(target)) {
      isShown.value = false;
    }
  };

  onMounted(() => {
    document.addEventListener("click", onClickOutside);
  });

  onBeforeUnmount(() => {
    document.removeEventListener("click", onClickOutside);
  });
</script>

<template>
  <div class="select-field" :class="{ 'select-field--opened': isShown }" ref="selectRef">
    <p v-if="props.label" class="select-field__label">{{ props.label }}</p>

    <button
      type="button"
      class="select-field__btn"
      :class="{ 'select-field__btn--disabled': props.isDisabled }"
      :disabled="props.isDisabled"
      :aria-expanded="isShown"
      @click="toggleOptions"
    >
      <div class="select-field__btn-content">
        <Component
          v-if="selectedOption?.icon"
          :is="selectedOption.icon"
          class="select-field__btn-icon"
        />

        {{ selectedOption?.label }}
      </div>

      <Component :is="ArrowIcon" class="select-field__arrow" />
    </button>

    <div
      class="select-field__options"
      ref="optionsRef"
      :style="{ height: isShown ? optionsHeight : 0 }"
    >
      <ul class="select-field__option-list">
        <li
          v-for="option in props.options"
          :key="option.value"
          @click="onSelect(option)"
          class="select-field__option-item"
          :class="{ 'select-field__option-item--selected': option.value === selectedOption?.value }"
        >
          <div class="select-field__option-content">
            <Component v-if="option.icon" :is="option.icon" class="select-field__option-icon" />

            {{ option.label }}
          </div>

          <Component
            v-if="option.value === selectedOption?.value"
            :is="SelectedIcon"
            class="select-field__selected-icon"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @use "@/styles/vars" as *;

  .select-field {
    position: relative;

    &--opened {
      .select-field__arrow {
        transform: scaleY(-1);
      }
    }

    &__btn {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
      width: 100%;

      &--disabled {
        background: #f2f2f2;
        color: rgba(0, 0, 0, 0.5);
        cursor: not-allowed;

        &:focus,
        &:hover {
          border-color: transparent;
        }
      }
    }

    &__btn-content {
      display: flex;
      align-items: center;
      gap: 16px;
    }

    &__options {
      position: absolute;
      top: calc(100% + 8px);
      width: 100%;
      z-index: 2;

      overflow: hidden;
      border-radius: 8px;
      text-align: start;
      background-color: #f7f8fa;
      outline: 4px auto -webkit-focus-ring-color;
      transition: height $base-transition ease;
    }

    &__option-item {
      display: flex;
      align-items: center;
      justify-content: space-between;

      padding: 0.6rem 1.2rem;
      cursor: pointer;
      transition: background-color $base-transition ease;

      &:hover {
        background-color: #ececec;
      }
    }

    &__option-content {
      display: flex;
      gap: 16px;
      align-items: center;
    }

    &__option-icon,
    &__btn-icon {
      width: 25px;
    }

    &__arrow {
      transition: transform $base-transition ease;
      width: 15px;
    }

    &__selected-icon {
      width: 15px;
    }
  }
</style>
