<template>
  <header class="header">
    <div class="header__inner">
      <router-link class="header__logo" to="/">IN-UA</router-link>

      <nav class="header__nav">
        <router-link class="header__link" to="/">Головна</router-link>
        <router-link class="header__link" to="/develop">Develop</router-link>
      </nav>
    </div>
  </header>
</template>

<style scoped>
  .header {
    position: sticky;
    top: 0;
    z-index: 10;
    background: #fff;
    border-bottom: 1px solid #e5e7eb;
  }

  .header__inner {
    width: min(1200px, 100%);
    margin: 0 auto;
    padding: 14px 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .header__logo {
    font-weight: 700;
    text-decoration: none;
    color: #111827;
    letter-spacing: 0.5px;
  }

  .header__nav {
    display: flex;
    gap: 16px;
  }

  .header__link {
    text-decoration: none;
    color: #111827;
    opacity: 0.8;
  }

  .header__link.router-link-active {
    opacity: 1;
    font-weight: 600;
    border-bottom: 2px solid #2563eb;
    padding-bottom: 2px;
  }
</style>
