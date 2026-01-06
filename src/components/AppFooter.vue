<template>
  <footer class="footer">
    <div class="footer__inner">
      <span>© {{ new Date().getFullYear() }} IN-UA</span>
      <span class="footer__dot">•</span>
      <span>Discover Ukraine</span>
    </div>
  </footer>
</template>

<style scoped>
  .footer {
    border-top: 1px solid #e5e7eb;
    background: #fff;
  }

  .footer__inner {
    width: min(1200px, 100%);
    margin: 0 auto;
    padding: 16px;
    display: flex;
    gap: 10px;
    align-items: center;
    color: #111827;
    opacity: 0.8;
  }

  .footer__dot {
    opacity: 0.6;
  }
</style>
