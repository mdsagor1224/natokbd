<script setup>
import { categories } from '../data/natoks.js'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="site-footer">
    <div class="container footer-inner">
      <div class="footer-brand">
        <router-link :to="{ name: 'home' }" class="brand">
          <span class="brand-mark">▶</span>
          <span class="brand-word">NATOK<span class="gradient-text">BD</span></span>
        </router-link>
        <p class="footer-desc">
          A modern home for Bangla drama — romantic stories, family entertainment
          and trending natok, all in one fast, beautifully simple platform.
        </p>
      </div>

      <div class="footer-links">
        <h4>Quick Links</h4>
        <ul>
          <li><router-link :to="{ name: 'home' }">Home</router-link></li>
          <li><router-link :to="{ name: 'home', hash: '#latest' }">Latest Natok</router-link></li>
          <li><router-link :to="{ name: 'search' }">Search</router-link></li>
        </ul>
      </div>

      <div class="footer-links">
        <h4>Categories</h4>
        <ul>
          <li v-for="cat in categories" :key="cat">
            <router-link :to="{ name: 'category', params: { category: cat.toLowerCase().replace(/\s+/g, '-') } }">
              {{ cat }}
            </router-link>
          </li>
        </ul>
      </div>
    </div>

    <div class="footer-bottom">
      <div class="container">
        <p>© {{ year }} NATOKBD. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  border-top: 1px solid var(--border);
  background: var(--bg-elevated);
  margin-top: 40px;
}

.footer-inner {
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;
  padding: 48px 0 32px;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 18px;
}

.brand-mark {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 8px;
  background: var(--gradient-brand);
  color: #fff;
  font-size: 11px;
}

.footer-desc {
  margin-top: 12px;
  color: var(--text-muted);
  font-size: 14px;
  line-height: 1.7;
  max-width: 340px;
}

.footer-links h4 {
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--text-dim);
  margin-bottom: 14px;
}

.footer-links ul {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.footer-links a {
  font-size: 14px;
  color: var(--text-muted);
  transition: color var(--transition);
}

.footer-links a:hover {
  color: var(--text);
}

.footer-bottom {
  border-top: 1px solid var(--border);
  padding: 18px 0;
}

.footer-bottom p {
  font-size: 13px;
  color: var(--text-dim);
  text-align: center;
}

@media (min-width: 768px) {
  .footer-inner {
    grid-template-columns: 1.4fr 1fr 1fr;
  }
}
</style>
