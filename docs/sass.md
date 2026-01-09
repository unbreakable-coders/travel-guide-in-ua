# 🎨 SCSS документація: Variables, Maps, Maps + Mixins, Functions

Цей документ описує **як правильно працювати зі SCSS-змінними, map-ами, функціями та mixins** у проєкті, а також **чому в більшості випадків краще використовувати CSS variables (`var(--...)`) замість напряму Sass map**.

---

### 📦 Імпорт SCSS модулів

У SCSS **рекомендовано використовувати `@use`, а не `@import`**.

#### 🔹 Базові імпорти

```scss
@use "sass:map";
@use "@/styles/vars" as *;
@use "@/styles/mixins" as *;
@use "@/styles/functions" as *;
```

📌 `as *` дозволяє використовувати змінні та mixins без namespace.

---

### 🧱 SCSS Variables (змінні)

#### ✨ Приклад змінних

```scss
$base-transition: 300ms;
$base-radius: 12px;
$max-body-width: 1600px;
```

#### ✅ Використання

```scss
.card {
  border-radius: $base-radius;
  transition: all $base-transition ease;
  max-width: $max-body-width;
}
```

---

### 🗂 SCSS Maps (обʼєкти)

SCSS map — це аналог JS object.

```scss
$colors: (
  "primary": #1f3a5f,
  "secondary": #3a8b5c,
  "accent": #e2b04a,
  "background": #f7f8fa,
  "gray": #bfbfbfff,
  "surface": #ffffff,
);
```

```scss
$spacing: (
  "2xs": 0.25rem,
  "xs": 0.5rem,
  "sm": 0.75rem,
  "md": 1rem,
  "lg": 1.5rem,
  "xl": 2rem,
  "2xl": 3rem,
  "3xl": 4rem,
  "4xl": 6rem,
);
```

---

### 🔍 Як працювати з map

#### 1️⃣ Імпорт

```scss
@use "sass:map";
@use "@/styles/vars" as *;
```

#### 2️⃣ Отримання значення

```scss
.element {
  padding: map.get($spacing, "md");
  background-color: map.get($colors, "primary");
}
```

---

### 🎯 Breakpoints + Mixins

#### 📐 Breakpoints

```scss
$breakpoints: (
  "xs": 480px,
  "sm": 640px,
  "md": 768px,
  "lg": 1024px,
  "xl": 1280px,
);
```

---

#### 🧩 Mixins для адаптиву

```scss
@use "sass:map";
@use "./vars" as *;

@mixin screen-xs {
  @media (min-width: map.get($breakpoints, "xs")) {
    @content;
  }
}

@mixin screen-sm {
  @media (min-width: map.get($breakpoints, "sm")) {
    @content;
  }
}

@mixin screen-md {
  @media (min-width: map.get($breakpoints, "md")) {
    @content;
  }
}

@mixin screen-lg {
  @media (min-width: map.get($breakpoints, "lg")) {
    @content;
  }
}

@mixin screen-xl {
  @media (min-width: map.get($breakpoints, "xl")) {
    @content;
  }
}
```

---

#### 🧱 Grid приклад

```scss
@use "@/styles/mixins" as *;

.color-list {
  @include grid(2); // two columns on mobile

  @include screen-lg {
    @include grid(3); // three columns on desktop
  }
}
```

---

### 🎨 SCSS Function: opacity()

#### 📦 Імпорт

```scss
@use "@/styles/functions" as *;
```

#### ✅ Використання

```scss
@use "@/styles/functions" as *;

.button {
  background-color: opacity(map.get($colors, "primary"), 80);
}
```

---

### ⚠️ ВАЖЛИВО: CSS variables vs SCSS map

#### ❌ Проблема з Sass map

SCSS **компілюється під час білду**, тому:

- ❌ не реагує на зміну теми
- ❌ не можна змінити на runtime

---

### ✅ Рекомендований підхід — CSS variables

#### 🎯 Чому `var(--...)` краще

✔ підтримує theme switching
✔ змінюється без ребілду
✔ працює з JS / Vue / React

---

#### 🌗 Приклад теми

```scss
:root {
  --color-primary: #1f3a5f;
  --radius-base: 12px;
  --spacing-md: 1rem;
}

[data-theme="dark"] {
  --color-primary: #9bbcff;
}
```

#### ✅ Використання

```scss
.card {
  background: var(--color-primary);
  border-radius: var(--radius-base);
  padding: var(--spacing-md);
}
```

---

### 🧠 Коли використовувати SCSS map

✔ для **grid**, **breakpoints**, **utility mixins**, **змін**
✔ для генерації класів

❌ не для всіх кольорів

---

### 🏁 Висновок

- 🧱 **Layout / Grid / Breakpoints** → SCSS map + mixins
- 🎨 **Theme / colors / spacing** → CSS variables
- 🧠 **Logic** → SCSS functions

🚀 Такий підхід робить дизайн-систему гнучкою, масштабованою та ready for theming.
