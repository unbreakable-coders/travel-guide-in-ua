### 📂 Де зберігати стори?

Запам'ятай головне правило: у нашому проекті має бути папка **`src/stores/`**. Саме там ми тримаємо всю логіку. Кожен окремий файл у цій папці - це окремий стор (наприклад, `userStore.ts`, `cartStore.ts`).

### ✨ Головна фішка з назвами

У Pinia ми називаємо функції так само як **Custom Hooks у React**. Це такий стандарт: назва має починатися з `use...` (наприклад, `useAuthStore` або `useTaskStore`).

---

### 🍍 Приклад: Стор для завдань з Supabase

Ось як виглядає типовий стор у файлі `src/stores/todoStore.js`. Це максимально просто:

```javascript
import { defineStore } from "pinia";
import { supabase } from "@/lib/supabase"; // наш клієнт

// Назва все одно починається з "use", це золоте правило! 🎣
export const useTodoStore = defineStore("todos", {
  // 1. State: тут лежать наші дані (як data у Vue)
  state: () => ({
    items: [],
    loading: false,
  }),

  // 2. Actions: тут логіка та запити до бази (як methods у Vue)
  actions: {
    async loadMyData() {
      this.loading = true;

      const { data, error } = await supabase.from("tasks").select("*");

      if (error) {
        alert("Ой, щось пішло не так! 📋");
      } else {
        // В Options Store ми звертаємось до стейту через "this"
        this.items = data;
      }

      this.loading = false;
    },
  },
});
```

---

### 🚀 Як це використати у Vue (Composition API)

Тепер просто залітаємо в будь-який компонент і викликаємо наш стор. Це виглядає дуже схоже на React Hooks:

```vue
<script setup>
  import { onMounted } from "vue";

  // Імпортуємо наш "хук"
  import { useTodoStore } from "@/stores/todoStore";

  // Створюємо екземпляр (просто викликаємо функцію)
  const todoStore = useTodoStore();

  // Коли компонент з'явився на екрані — вантажимо дані
  onMounted(() => {
    todoStore.loadMyData();
  });
</script>

<template>
  <div class="p-4">
    <ul v-else>
      <li v-for="item in todoStore.items" :key="item.id">{{ item.title }} ✅</li>
    </ul>
  </div>
</template>
```

---

📺 Дивись туторіал по Pinia на [YouTube](https://www.youtube.com/watch?v=u0B9dysw29A&list=PL4cUxeGkcC9hp28dYyYBy3xoOdoeNw-hD)

📜 Офіційна [документація](https://pinia.vuejs.org/core-concepts/)
