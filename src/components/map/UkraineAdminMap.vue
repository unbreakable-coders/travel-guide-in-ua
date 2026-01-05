<script setup lang="ts">
import { computed, nextTick, onMounted, ref, watch } from 'vue'
import svgRaw from '@/assets/maps/ukraine-obl2.svg?raw'

type RegionId = string

const props = defineProps<{
  modelValue?: RegionId | null
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: RegionId | null): void
  (e: 'select', value: RegionId): void
  (e: 'hover', value: RegionId | null): void
}>()

const rootRef = ref<HTMLElement | null>(null)
const hovered = ref<RegionId | null>(null)
const selected = computed(() => props.modelValue ?? null)

const getRegionEl = (el: HTMLElement | null) =>
  (el?.closest?.('path[id$="_obl"], path#crimea, path#ivano-frankivsk') as SVGPathElement | null)

const queryAllRegions = () =>
  rootRef.value?.querySelectorAll<SVGPathElement>('path[id$="_obl"], path#crimea, path#ivano-frankivsk') ?? []

const applyClasses = () => {
  const paths = queryAllRegions()

  paths.forEach((p) => {
    const id = p.getAttribute('id')
    p.classList.toggle('is-active', !!id && id === selected.value)
    p.classList.toggle('is-hover', !!id && id === hovered.value)
    p.classList.toggle('is-dim', !!hovered.value && !!id && id !== hovered.value)
  })
}

const bringToFront = (path: SVGPathElement) => {
  const parent = path.parentNode
  if (parent) parent.appendChild(path)
}

const onClick = (e: MouseEvent) => {
  const el = e.target as HTMLElement | null
  const path = getRegionEl(el)
  const id = path?.getAttribute('id')
  if (!id) return

  emit('update:modelValue', id)
  emit('select', id)
}

const onOver = (e: MouseEvent) => {
  const el = e.target as HTMLElement | null
  const path = getRegionEl(el)
  if (!path) return

  const id = path.getAttribute('id') ?? null
  hovered.value = id
  emit('hover', id)

  bringToFront(path)
  applyClasses()
}

const onLeave = () => {
  hovered.value = null
  emit('hover', null)
}

const bindSvgListeners = async () => {
  await nextTick()

  const svg = rootRef.value?.querySelector('svg')
  if (!svg) return

  svg.classList.add('map__svg')
  svg.addEventListener('click', onClick)
  svg.addEventListener('mouseover', onOver)
  svg.addEventListener('mouseleave', onLeave)

  applyClasses()
}

onMounted(() => {
  void bindSvgListeners()
})

watch([selected, hovered], applyClasses)
</script>

<template>
  <div class="map" ref="rootRef" v-html="svgRaw" />
</template>

<style scoped>
.map {
  width: 100%;
  max-width: 980px;
  margin: 0 auto;
}

.map :deep(.map__svg) {
  width: 100%;
  height: auto;
  display: block;
}

.map :deep(path[id$="_obl"]),
.map :deep(path#crimea),
.map :deep(path#ivano-frankivsk) {
  fill: #eef2ff !important;
  fill-opacity: 1 !important;
  stroke: #1f2937;
  stroke-width: 1;
  vector-effect: non-scaling-stroke;

  cursor: pointer;
  transform-box: fill-box;
  transform-origin: center;
  transition: transform 160ms, fill 160ms, opacity 160ms, filter 160ms, stroke 160ms;
}

.map :deep(path[id$="_obl"].is-hover),
.map :deep(path[id$="_obl"]:hover),
.map :deep(path#crimea.is-hover),
.map :deep(path#crimea:hover),
.map :deep(path#ivano-frankivsk.is-hover),
.map :deep(path#ivano-frankivsk:hover) {
  fill: #e0f805 !important;
  fill-opacity: 1 !important;
  opacity: 1 !important;

  transform: scale(1.5);

  stroke: #ff0000 !important;
  stroke-width: 2 !important;

  filter: none;
}

.map :deep(path[id$="_obl"].is-active),
.map :deep(path#crimea.is-active),
.map :deep(path#ivano-frankivsk.is-active) {
  fill: #60a5fa !important;
  fill-opacity: 1 !important;
  transform: scale(1.04);
}

.map :deep(path[id$="_obl"].is-dim),
.map :deep(path#crimea.is-dim),
.map :deep(path#ivano-frankivsk.is-dim) {
  opacity: 0.6;
}
</style>
