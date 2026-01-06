<script setup lang="ts">
import { ref } from 'vue'
import UkraineAdminMap from '@/components/map/UkraineAdminMap.vue'

const selectedRegion = ref<string | null>(null)
</script>

<template>
   <p v-if="selectedRegion">Selected: <b>{{ selectedRegion }}</b></p>
  <UkraineAdminMap v-model="selectedRegion" />
</template>
