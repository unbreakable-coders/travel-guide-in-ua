<script setup lang="ts">
  const colors = [
    { name: "Primary", var: "--v-theme-primary" },
    { name: "Secondary", var: "--v-theme-secondary" },
    { name: "Accent", var: "--v-theme-accent" },
    { name: "BG", var: "--v-theme-background" },
    { name: "Surface", var: "--v-theme-surface" },
    { name: "On Surface", var: "--v-theme-on-surface" },
  ];
</script>

<template>
  <main class="wrap">
    <header class="top">
      <div>
        <p class="kicker">Dev • Brand</p>
        <h1 class="h1">Typography & Color Playground</h1>
        <p class="lead">
          Еталонні стилі для IN-UA (на основі логотипу). Ієрархію, контраст і компоненти.
        </p>
      </div>

      <div class="actions">
        <v-btn color="primary">Primary CTA</v-btn>
        <v-btn variant="outlined">Ghost</v-btn>
      </div>
    </header>

    <section class="grid">
      <article class="card">
        <h2 class="h2">Typography</h2>

        <v-card variant="tonal" color="secondary" class="mb-4">
          <v-card-text>
            <div class="h4">Vuetify Card</div>
            <p class="body">Перевірка підключення Vuetify (color + typography).</p>
          </v-card-text>
        </v-card>

        <div class="stack">
          <div>
            <div class="label">H1 / 700</div>
            <div class="h1 demo">Discover Ukraine Deeper</div>
          </div>

          <div>
            <div class="label">H2 / 600</div>
            <div class="h2 demo">Featured Regions & Routes</div>
          </div>

          <div>
            <div class="label">H3 / 600</div>
            <div class="h3 demo">Kyiv • Lviv • Odesa</div>
          </div>

          <div>
            <div class="label">Body L / 400</div>
            <p class="bodyL">Легкий атмосферний текст для опису місць, маршрутів і рекомендацій.</p>
          </div>

          <div>
            <div class="label">Body / 400</div>
            <p class="body">
              IN-UA — платформа для подорожей Україною: області, міста, каталоги місць,
              персоналізація, обране.
            </p>
          </div>

          <div class="meta">
            <span class="pill">Small / Meta</span>
            <span class="muted">Оновлено: сьогодні</span>
          </div>
        </div>
      </article>

      <article class="card">
        <h2 class="h2">Colors</h2>

        <div class="swatches">
          <div v-for="c in colors" :key="c.var" class="swatch">
            <div class="chip" :style="{ background: `rgb(var(${c.var}))` }" />
            <div class="swatchText">
              <div class="swatchName">{{ c.name }}</div>
              <div class="swatchVar">{{ c.var }}</div>
            </div>
          </div>
        </div>

        <v-divider class="my-4" />

        <h3 class="h4">Usage examples</h3>

        <div class="examples">
          <div class="badge badge--primary">Selected</div>
          <div class="badge badge--secondary">Visited</div>
          <div class="badge badge--accent">Recommended</div>
        </div>

        <div class="mapLegend">
          <div class="legendRow"><span class="dot dot--muted" /> Default region</div>
          <div class="legendRow"><span class="dot dot--accent" /> Hover</div>
          <div class="legendRow"><span class="dot dot--primary" /> Selected</div>
          <div class="legendRow"><span class="dot dot--secondary" /> Saved / Visited</div>
        </div>
      </article>
    </section>

    <section class="card">
      <h2 class="h2">Components preview</h2>

      <div class="components">
        <div class="placeCard">
          <div class="thumb" />
          <div class="placeBody">
            <div class="placeTop">
              <h3 class="h4">Carpathian Route</h3>
              <span class="badge badge--accent">Top</span>
            </div>
            <p class="body muted">
              Маршрут з точками, порадами та локаціями. Ідеально для тесту читабельності.
            </p>
            <div class="placeBottom">
              <v-btn size="small" color="primary">Add to plan</v-btn>
              <v-btn size="small" variant="outlined">Details</v-btn>
            </div>
          </div>
        </div>

        <div class="info">
          <p class="body">
            Правило: <strong>accent</strong> використовуємо дозовано (CTA, hover, “recommended”).
            Основний тон — <strong>primary</strong>.
          </p>
        </div>
      </div>
    </section>

    <section class="card">
      <h2 class="h2">Vuetify Integration Test</h2>

      <div class="components">
        <v-text-field label="Search location" variant="outlined" />
        <v-select label="Region" :items="['Kyiv', 'Lviv', 'Odesa']" variant="outlined" />
        <v-switch label="Visited" color="secondary" />
        <v-alert type="success" variant="tonal"> Vuetify підключений і працює коректно </v-alert>
      </div>
    </section>
  </main>
</template>

<style scoped>
  .wrap {
    min-height: 100vh;
    background: rgb(var(--v-theme-background));
    color: rgb(var(--v-theme-on-surface));
    padding: 32px 16px 64px;
  }

  .top {
    max-width: 1120px;
    margin: 0 auto 24px;
    display: flex;
    gap: 16px;
    align-items: flex-end;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .kicker {
    font-weight: 600;
    font-size: 14px;
    line-height: 1;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: rgba(var(--v-theme-on-surface), 0.72);
    margin: 0 0 10px;
  }

  .h1 {
    font-weight: 700;
    font-size: 56px;
    line-height: 1.2;
    margin: 0;
  }
  .h2 {
    font-weight: 600;
    font-size: 40px;
    line-height: 1.2;
    margin: 0 0 14px;
  }
  .h3 {
    font-weight: 600;
    font-size: 32px;
    line-height: 1.2;
    margin: 0;
  }
  .h4 {
    font-weight: 600;
    font-size: 24px;
    line-height: 1.2;
    margin: 0 0 12px;
  }

  .lead {
    max-width: 64ch;
    margin: 12px 0 0;
    font-weight: 400;
    font-size: 18px;
    line-height: 1.6;
    color: rgba(var(--v-theme-on-surface), 0.72);
  }

  .actions {
    display: flex;
    gap: 12px;
  }

  .grid {
    max-width: 1120px;
    margin: 0 auto 20px;
    display: grid;
    grid-template-columns: 1fr;
    gap: 16px;
  }

  @media (min-width: 900px) {
    .grid {
      grid-template-columns: 1.2fr 0.8fr;
    }
  }

  .card {
    background: rgb(var(--v-theme-surface));
    border: 1px solid rgba(var(--v-theme-on-surface), 0.12);
    border-radius: 16px;
    box-shadow: 0 10px 25px rgba(17, 24, 39, 0.08);
    padding: 20px;
  }

  .stack {
    display: grid;
    gap: 18px;
  }

  .label {
    font-weight: 600;
    font-size: 14px;
    line-height: 1.2;
    color: rgba(var(--v-theme-on-surface), 0.72);
    margin-bottom: 6px;
  }

  .demo {
    padding: 6px 0;
  }

  .bodyL {
    font-weight: 400;
    font-size: 18px;
    line-height: 1.6;
    margin: 0;
  }
  .body {
    font-weight: 400;
    font-size: 16px;
    line-height: 1.6;
    margin: 0;
  }
  .muted {
    color: rgba(var(--v-theme-on-surface), 0.72);
  }

  .meta {
    display: flex;
    gap: 10px;
    align-items: center;
  }

  .pill {
    font-weight: 600;
    font-size: 14px;
    line-height: 1;
    padding: 6px 10px;
    border: 1px solid rgba(var(--v-theme-on-surface), 0.12);
    border-radius: 999px;
    background: rgba(var(--v-theme-primary), 0.06);
  }

  .swatches {
    display: grid;
    grid-template-columns: 1fr;
    gap: 12px;
  }

  @media (min-width: 560px) {
    .swatches {
      grid-template-columns: 1fr 1fr;
    }
  }

  .swatch {
    display: flex;
    gap: 12px;
    align-items: center;
    padding: 10px 12px;
    border: 1px solid rgba(var(--v-theme-on-surface), 0.12);
    border-radius: 12px;
    background: rgba(var(--v-theme-on-surface), 0.02);
  }

  .chip {
    width: 44px;
    height: 44px;
    border-radius: 12px;
    border: 1px solid rgba(var(--v-theme-on-surface), 0.12);
  }

  .swatchName {
    font-weight: 600;
    font-size: 14px;
    line-height: 1.2;
  }
  .swatchVar {
    font-weight: 400;
    font-size: 13px;
    line-height: 1.2;
    color: rgba(var(--v-theme-on-surface), 0.72);
    margin-top: 2px;
  }

  .examples {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    margin-bottom: 14px;
  }

  .badge {
    padding: 6px 10px;
    border-radius: 999px;
    font-weight: 600;
    font-size: 13px;
    line-height: 1;
    border: 1px solid transparent;
  }

  .badge--primary {
    background: rgba(var(--v-theme-primary), 0.12);
    color: rgb(var(--v-theme-primary));
    border-color: rgba(var(--v-theme-primary), 0.18);
  }
  .badge--secondary {
    background: rgba(var(--v-theme-secondary), 0.12);
    color: rgb(var(--v-theme-secondary));
    border-color: rgba(var(--v-theme-secondary), 0.18);
  }
  .badge--accent {
    background: rgba(var(--v-theme-accent), 0.18);
    color: rgb(var(--v-theme-on-surface));
    border-color: rgba(var(--v-theme-accent), 0.28);
  }

  .mapLegend {
    display: grid;
    gap: 10px;
    margin-top: 10px;
  }
  .legendRow {
    display: flex;
    align-items: center;
    gap: 10px;
    font-weight: 400;
    font-size: 14px;
    line-height: 1.2;
    color: rgba(var(--v-theme-on-surface), 0.72);
  }
  .dot {
    width: 10px;
    height: 10px;
    border-radius: 999px;
    display: inline-block;
    border: 1px solid rgba(var(--v-theme-on-surface), 0.12);
  }
  .dot--muted {
    background: rgba(var(--v-theme-on-surface), 0.18);
  }
  .dot--accent {
    background: rgb(var(--v-theme-accent));
  }
  .dot--primary {
    background: rgb(var(--v-theme-primary));
  }
  .dot--secondary {
    background: rgb(var(--v-theme-secondary));
  }

  .components {
    display: grid;
    gap: 16px;
  }

  .placeCard {
    border: 1px solid rgba(var(--v-theme-on-surface), 0.12);
    border-radius: 16px;
    overflow: hidden;
    display: grid;
    grid-template-columns: 120px 1fr;
    background: rgb(var(--v-theme-surface));
  }

  .thumb {
    background: linear-gradient(
      135deg,
      rgba(var(--v-theme-primary), 0.18),
      rgba(var(--v-theme-secondary), 0.18)
    );
    min-height: 120px;
  }

  .placeBody {
    padding: 14px;
    display: grid;
    gap: 10px;
  }

  .placeTop {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
  }

  .placeBottom {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
  }

  .info {
    border-left: 4px solid rgb(var(--v-theme-accent));
    padding: 12px 14px;
    background: rgba(var(--v-theme-accent), 0.1);
    border-radius: 12px;
  }
</style>
