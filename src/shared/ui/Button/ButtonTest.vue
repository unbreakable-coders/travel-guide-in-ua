<script setup lang="ts">
  interface Props {
    disabled?: boolean;
    variant?: "default" | "tab";
    isActive?: boolean;
  }

  withDefaults(defineProps<Props>(), {
    disabled: false,
    variant: "default",
    isActive: false,
  });
</script>

<template>
  <button
    type="button"
    class="btn"
    :class="[variant === 'tab' && 'btn--tab', variant === 'tab' && isActive && 'btn--tab-active']"
    :disabled="disabled"
  >
    <slot />
  </button>
</template>

<style scoped>
  .btn {
    padding: 8px 12px;
    border-radius: 10px;
    border: 1px solid var(--color-border, #e5e7eb);
    background: var(--color-surface, #fff);
    cursor: pointer;
  }

  .btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .btn--tab {
    border-radius: 999px;
  }

  .btn--tab-active {
    border-color: var(--color-primary, #2563eb);
  }
</style>
