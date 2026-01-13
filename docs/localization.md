# 🌍 i18n у Vue — як користуватись (коротко і по суті)

Ми використовуємо **vue-i18n**, щоб зберігати всі тексти в одному місці та легко міняти мову.

---

### 📁 Структура локалей

Спочатку створюємо JSON-файли з перекладами.

```
src
└─ shared
   └─ i18n
      └─ locales
         ├─ en
         │  ├─ common.json
         │  ├─ navbar.json
         │  └─ profile.json
         └─ ua
            ├─ common.json
            ├─ navbar.json
            └─ profile.json
```

📌 **Нічого імпортувати з цих файлів не потрібно**
vue-i18n підхоплює їх автоматично.

---

### 🔑 Як звертатись до перекладів

Формат завжди такий:

```ts
t("filename.property");
t("filename.property.nestedProperty");
```

📄 `profile.json`

```json
{
  "title": "Профіль",
  "stats": {
    "followers": "Підписники"
  }
}
```

🧑‍💻 Використання:

```ts
t("profile.title");
t("profile.stats.followers");
```

---

### 🧠 Використання у `<script setup>`

```ts
import { useI18n } from "vue-i18n";

const { t } = useI18n();
```

Все, тепер можна користуватись `t()` 👌

---

### ⚙️ Коли використовувати `computed`

#### ✅ Приклад: меню, таби, селекти, списки

```ts
const { t } = useI18n();

const tabs = computed(() => [
  { id: "info", label: t("common.tabs.info") },
  { id: "settings", label: t("common.tabs.settings") },
]);
```

#### ❓ Чому це важливо?

- `t()` залежить від **поточної мови**
- при зміні locale переклади мають **оновитись**
- `computed` реагує на зміну мови автоматично 🔄

❌ **Не роби так**, якщо мова може змінюватись:

```ts
const tabs = [{ label: t("common.tabs.info") }];
```

🧠 **Правило:**

> Якщо переклад використовується в JS-логіці — завжди `computed`

---

### 🧩 Використання в `<template>`

#### Тексти

```vue
<h1>{{ t('common.title') }}</h1>
<p>{{ t('common.description') }}</p>
```

#### Атрибути

```vue
<input :placeholder="t('common.search')" />
```

#### Кнопки

```vue
<button>{{ t('actions.save') }}</button>
```

Vue сам перерендерить текст при зміні мови ✨

---

### 🔁 Інтерполяція (динамічні значення)

#### 📄 JSON

```json
{
  "greeting": "Привіт, {username}!"
}
```

#### 🧑‍💻 Використання

```ts
t("common.greeting", { username: "Анна" });
```

🖨️ Результат:

```
Привіт, Анна!
```

---

### 🔢 Плюрали

#### 📄 JSON

```json
{
  "notifications": "Немає сповіщень | {count} сповіщення | {count} сповіщень"
}
```

#### 🧑‍💻 Використання

```ts
t("common.notifications", 0);
t("common.notifications", 1);
t("common.notifications", 3);
```

vue-i18n сам обирає правильну форму 🧠✨

---

### 💡 Корисні поради

- ✅ Один файл — одна логічна зона (navbar, profile, auth)
- ✅ Не хардкодь текст у компонентах
- ✅ У JS — `computed`, у template — напряму
- ✅ Ключі називай семантично, не по тексту
