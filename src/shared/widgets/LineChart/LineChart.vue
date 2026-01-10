<script lang="ts" setup>
  import { ref, onMounted, onBeforeUnmount } from "vue";
  import {
    Chart,
    type ChartConfiguration,
    LineController,
    LineElement,
    PointElement,
    LinearScale,
    CategoryScale,
    Title,
    Tooltip,
    Filler,
  } from "chart.js";
  import { LINE_CHART_LABELS, type LineChartLabelSet } from "./types";

  Chart.register(
    LineController,
    LineElement,
    PointElement,
    LinearScale,
    CategoryScale,
    Title,
    Tooltip,
    Filler
  );

  interface Props {
    title: string;
    labelSet: LineChartLabelSet;
    data: number[];
    color?: string;
    height?: string;
    thickness?: number;
    tension?: number;
    grid?: {
      x?: boolean;
      y?: boolean;
    };
  }

  const props = withDefaults(defineProps<Props>(), {
    color: "#3BC1A8",
    height: "200px",
    tension: 0.4,
    thickness: 1,
    grid: () => ({ x: true, y: true }),
  });

  const canvasRef = ref<HTMLCanvasElement | null>(null);
  let chart: Chart<"line"> | null = null;

  onMounted(() => {
    if (!canvasRef.value) return;

    const ctx = canvasRef.value.getContext("2d");
    if (!ctx) return;

    const gradient = ctx.createLinearGradient(0, 0, 0, canvasRef.value.height);

    gradient.addColorStop(0, `${props.color}33`);
    gradient.addColorStop(1, `${props.color}05`);

    const config: ChartConfiguration<"line"> = {
      type: "line",
      data: {
        labels: LINE_CHART_LABELS[props.labelSet],
        datasets: [
          {
            label: props.title,
            data: props.data,
            borderColor: props.color,
            borderWidth: props.thickness,
            tension: props.tension,
            backgroundColor: gradient,
            fill: "origin",
          },
        ],
      },
    };

    chart = new Chart(ctx, config);
  });

  onBeforeUnmount(() => chart?.destroy());
</script>

<template>
  <div class="line-chart">
    <h4 class="line-chart__title">{{ props.title }}</h4>

    <div class="line-chart__chart">
      <canvas ref="canvasRef" :height="props.height"></canvas>
    </div>
  </div>
</template>

<style lang="scss">
  @use "sass:map";
  @use "@/styles/vars" as *;

  .line-chart {
    text-align: start;
    background: var(--color-surface);

    &__chart {
      min-height: 200px;
    }

    &__title {
      margin-bottom: map.get($spacing, "md");
    }
  }
</style>
