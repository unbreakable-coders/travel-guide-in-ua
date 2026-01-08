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
  } from "chart.js";
  import { LINE_CHART_LABELS, type LineChartLabelSet } from "./types";

  Chart.register(
    LineController,
    LineElement,
    PointElement,
    LinearScale,
    CategoryScale,
    Title,
    Tooltip
  );

  Chart.register({
    id: "lineShadow",
    beforeDatasetDraw(chart, args, options) {
      const { ctx } = chart;
      const datasetIndex = args.index;
      const meta = chart.getDatasetMeta(datasetIndex);

      if (!meta || !meta.dataset) return;

      ctx.save();
      ctx.shadowColor = options.color || "rgba(0,0,0,0.2)";
      ctx.shadowBlur = options.blur || 10;
      ctx.shadowOffsetX = options.offsetX || 0;
      ctx.shadowOffsetY = options.offsetY || 5;

      (meta.dataset as LineElement).draw(ctx);

      ctx.restore();
    },
  });

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
            fill: "start",
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          lineShadow: {
            color: props.color + "88",
            blur: 20,
            offsetX: 5,
            offsetY: 5,
          },
        } as never,
        scales: {
          x: { grid: { display: props.grid.x } },
          y: { grid: { display: props.grid.y } },
        },
      },
    };

    chart = new Chart(ctx, config);
  });

  onBeforeUnmount(() => {
    chart?.destroy();
  });
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
  @use "@/styles/vars" as *;

  .line-chart {
    text-align: start;
    border: 1px solid var(--color-border, #e5e7eb);
    background: var(--color-surface, #fff);
    border-radius: 16px;
    padding: 16px;

    &__chart {
      min-height: 200px;
    }

    &__title {
      margin-bottom: 16px;
    }
  }
</style>
