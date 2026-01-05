<script setup lang="ts">
import { ref } from 'vue'
import UkraineAdminMap from '@/components/map/UkraineAdminMap.vue'

const selectedRegion = ref<string | null>(null)
</script>

<template>
  <h1>Develop</h1>
  <UkraineAdminMap v-model="selectedRegion" />
  <p v-if="selectedRegion">Selected: <b>{{ selectedRegion }}</b></p>
</template>
