<script setup lang="ts">
  const colors = [
    { name: "Primary", var: "--color-primary" },
    { name: "Secondary", var: "--color-secondary" },
    { name: "Accent", var: "--color-accent" },
    { name: "BG", var: "--color-bg" },
    { name: "Surface", var: "--color-surface" },
    { name: "Text Primary", var: "--color-text-primary" },
    { name: "Text Secondary", var: "--color-text-secondary" },
    { name: "Border", var: "--color-border" },
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
        <button class="btn btn--primary">Primary CTA</button>
        <button class="btn btn--ghost">Ghost</button>
      </div>
    </header>

    <section class="grid">
      <article class="card">
        <h2 class="h2">Typography</h2>

        <div class="stack">
          <div>
            <div class="label">H1 / Manrope 700</div>
            <div class="h1 demo">Discover Ukraine Deeper</div>
          </div>

          <div>
            <div class="label">H2 / Manrope 600</div>
            <div class="h2 demo">Featured Regions & Routes</div>
          </div>

          <div>
            <div class="label">H3 / Manrope 600</div>
            <div class="h3 demo">Kyiv • Lviv • Odesa</div>
          </div>

          <div>
            <div class="label">Body L / Inter 400</div>
            <p class="bodyL">Легкий атмосферний текст для опису місць, маршрутів і рекомендацій.</p>
          </div>

          <div>
            <div class="label">Body / Inter 400</div>
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
            <div class="chip" :style="{ background: `var(${c.var})` }" />
            <div class="swatchText">
              <div class="swatchName">{{ c.name }}</div>
              <div class="swatchVar">{{ c.var }}</div>
            </div>
          </div>
        </div>

        <div class="divider" />

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
              <button class="btn btn--primary btn--sm">Add to plan</button>
              <button class="btn btn--ghost btn--sm">Details</button>
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
  </main>
</template>

<style scoped>
  .wrap {
    min-height: 100vh;
    background: var(--color-bg);
    color: var(--color-text-primary);
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
    font: 600 var(--small)/1 var(--font-body);
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--color-text-secondary);
    margin: 0 0 10px;
  }

  .h1 {
    font: 700 var(--h1)/var(--lh-heading) var(--font-heading);
    margin: 0;
  }
  .h2 {
    font: 600 var(--h2)/var(--lh-heading) var(--font-heading);
    margin: 0 0 14px;
  }
  .h3 {
    font: 600 var(--h3)/var(--lh-heading) var(--font-heading);
    margin: 0;
  }
  .h4 {
    font: 600 var(--h4)/var(--lh-heading) var(--font-heading);
    margin: 0 0 12px;
  }

  .lead {
    max-width: 64ch;
    margin: 12px 0 0;
    font: 400 var(--body-l)/var(--lh-body) var(--font-body);
    color: var(--color-text-secondary);
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
    background: var(--color-surface);
    border: 1px solid var(--color-border);
    border-radius: var(--r-lg);
    box-shadow: var(--shadow);
    padding: 20px;
  }

  .stack {
    display: grid;
    gap: 18px;
  }

  .label {
    font: 600 var(--small)/1.2 var(--font-body);
    color: var(--color-text-secondary);
    margin-bottom: 6px;
  }

  .demo {
    padding: 6px 0;
  }

  .bodyL {
    font: 400 var(--body-l)/var(--lh-body) var(--font-body);
    margin: 0;
  }
  .body {
    font: 400 var(--body)/var(--lh-body) var(--font-body);
    margin: 0;
  }
  .muted {
    color: var(--color-text-secondary);
  }

  .meta {
    display: flex;
    gap: 10px;
    align-items: center;
  }

  .pill {
    font: 600 var(--small)/1 var(--font-body);
    padding: 6px 10px;
    border: 1px solid var(--color-border);
    border-radius: 999px;
    background: rgba(31, 58, 95, 0.06);
  }

  .btn {
    border-radius: 999px;
    border: 1px solid transparent;
    padding: 10px 14px;
    font: 600 var(--body)/1 var(--font-body);
    cursor: pointer;
    transition:
      transform 0.12s ease,
      opacity 0.12s ease,
      background 0.12s ease,
      border-color 0.12s ease;
  }

  .btn:hover {
    transform: translateY(-1px);
  }
  .btn:active {
    transform: translateY(0);
    opacity: 0.95;
  }

  .btn--sm {
    padding: 9px 12px;
    font-size: 14px;
  }

  .btn--primary {
    background: var(--color-primary);
    color: white;
  }

  .btn--ghost {
    background: transparent;
    border-color: var(--color-border);
    color: var(--color-text-primary);
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
    border: 1px solid var(--color-border);
    border-radius: var(--r-md);
    background: rgba(0, 0, 0, 0.01);
  }

  .chip {
    width: 44px;
    height: 44px;
    border-radius: 12px;
    border: 1px solid rgba(0, 0, 0, 0.08);
  }

  .swatchName {
    font: 600 14px/1.2 var(--font-body);
  }
  .swatchVar {
    font: 400 13px/1.2 var(--font-body);
    color: var(--color-text-secondary);
    margin-top: 2px;
  }

  .divider {
    height: 1px;
    background: var(--color-border);
    margin: 16px 0;
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
    font: 600 13px/1 var(--font-body);
    border: 1px solid transparent;
  }

  .badge--primary {
    background: rgba(31, 58, 95, 0.12);
    color: var(--color-primary);
    border-color: rgba(31, 58, 95, 0.18);
  }
  .badge--secondary {
    background: rgba(58, 139, 92, 0.12);
    color: var(--color-secondary);
    border-color: rgba(58, 139, 92, 0.18);
  }
  .badge--accent {
    background: rgba(226, 176, 74, 0.18);
    color: #8a5a00;
    border-color: rgba(226, 176, 74, 0.28);
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
    font: 400 14px/1.2 var(--font-body);
    color: var(--color-text-secondary);
  }
  .dot {
    width: 10px;
    height: 10px;
    border-radius: 999px;
    display: inline-block;
    border: 1px solid rgba(0, 0, 0, 0.12);
  }
  .dot--muted {
    background: #d7dde6;
  }
  .dot--accent {
    background: var(--color-accent);
  }
  .dot--primary {
    background: var(--color-primary);
  }
  .dot--secondary {
    background: var(--color-secondary);
  }

  .components {
    display: grid;
    gap: 16px;
  }

  .placeCard {
    border: 1px solid var(--color-border);
    border-radius: var(--r-lg);
    overflow: hidden;
    display: grid;
    grid-template-columns: 120px 1fr;
    background: var(--color-surface);
  }

  .thumb {
    background: linear-gradient(135deg, rgba(31, 58, 95, 0.18), rgba(58, 139, 92, 0.18));
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
    border-left: 4px solid var(--color-accent);
    padding: 12px 14px;
    background: rgba(226, 176, 74, 0.1);
    border-radius: var(--r-md);
  }
</style>
