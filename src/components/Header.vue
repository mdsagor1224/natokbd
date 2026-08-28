<script setup>
import { ref, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const menuOpen = ref(false)
const router = useRouter()
const route = useRoute()

const navLinks = [
  { label: 'Home', to: { name: 'home' } },
  { label: 'Latest Natok', to: { name: 'home', hash: '#latest' } },
  { label: 'Categories', to: { name: 'home', hash: '#categories' } }
]

function closeMenu() {
  menuOpen.value = false
}

watch(() => route.fullPath, closeMenu)

function goToSearch(e) {
  const value = e.target.value.trim()
  if (value) {
    router.push({ name: 'search', query: { q: value } })
    closeMenu()
  }
}
</script>

<template>
  <header class="site-header">
    <div class="container site-header-inner">
      <router-link :to="{ name: 'home' }" class="brand" @click="closeMenu">
        <span class="brand-mark">▶</span>
        <span class="brand-word">NATOK<span class="gradient-text">BD</span></span>
      </router-link>

      <nav class="nav-desktop" aria-label="Primary">
        <ul>
          <li v-for="link in navLinks" :key="link.label">
            <router-link :to="link.to">{{ link.label }}</router-link>
          </li>
        </ul>
      </nav>

      <div class="header-actions">
        <div class="search-desktop">
          <label class="visually-hidden" for="header-search">Search Natok</label>
          <input
            id="header-search"
            type="search"
            placeholder="Search natok..."
            @keydown.enter="goToSearch"
          />
        </div>
        <button
          class="menu-toggle"
          type="button"
          :aria-expanded="menuOpen"
          aria-controls="mobile-menu"
          aria-label="Toggle menu"
          @click="menuOpen = !menuOpen"
        >
          <span class="menu-toggle-bar" :class="{ open: menuOpen }"></span>
        </button>
      </div>
    </div>

    <transition name="menu-slide">
      <div v-if="menuOpen" id="mobile-menu" class="nav-mobile">
        <div class="container">
          <input
            type="search"
            placeholder="Search natok..."
            class="search-mobile"
            @keydown.enter="goToSearch"
          />
          <ul>
            <li v-for="link in navLinks" :key="link.label">
              <router-link :to="link.to" @click="closeMenu">{{ link.label }}</router-link>
            </li>
          </ul>
        </div>
      </div>
    </transition>
  </header>
</template>

<style scoped>
.site-header {
  position: sticky;
  top: 0;
  z-index: 100;
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  background: rgba(8, 8, 18, 0.72);
  border-bottom: 1px solid var(--border);
}

.site-header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 68px;
  gap: 16px;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 19px;
  letter-spacing: 0.01em;
}

.brand-mark {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 9px;
  background: var(--gradient-brand);
  color: #fff;
  font-size: 12px;
}

.nav-desktop {
  display: none;
}

.nav-desktop ul {
  display: flex;
  gap: 28px;
}

.nav-desktop a {
  font-size: 14.5px;
  font-weight: 500;
  color: var(--text-muted);
  transition: color var(--transition);
}

.nav-desktop a:hover,
.nav-desktop a.router-link-exact-active {
  color: var(--text);
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

.search-desktop {
  display: none;
}

.search-desktop input {
  width: 200px;
  padding: 9px 14px;
  border-radius: 999px;
  border: 1px solid var(--border);
  background: var(--surface);
  color: var(--text);
  font-size: 13.5px;
  transition: border-color var(--transition), width var(--transition);
}

.search-desktop input:focus {
  border-color: var(--pink);
  width: 230px;
  outline: none;
}

.menu-toggle {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  border: 1px solid var(--border);
  background: var(--surface);
}

.menu-toggle-bar {
  position: relative;
  width: 16px;
  height: 2px;
  background: var(--text);
  transition: background 150ms ease;
}

.menu-toggle-bar::before,
.menu-toggle-bar::after {
  content: '';
  position: absolute;
  left: 0;
  width: 16px;
  height: 2px;
  background: var(--text);
  transition: transform 220ms ease;
}

.menu-toggle-bar::before {
  transform: translateY(-6px);
}

.menu-toggle-bar::after {
  transform: translateY(6px);
}

.menu-toggle-bar.open {
  background: transparent;
}

.menu-toggle-bar.open::before {
  transform: rotate(45deg);
}

.menu-toggle-bar.open::after {
  transform: rotate(-45deg);
}

.nav-mobile {
  border-bottom: 1px solid var(--border);
  background: rgba(8, 8, 18, 0.96);
}

.nav-mobile .container {
  padding-top: 16px;
  padding-bottom: 20px;
}

.search-mobile {
  width: 100%;
  padding: 12px 16px;
  border-radius: 12px;
  border: 1px solid var(--border);
  background: var(--surface);
  color: var(--text);
  font-size: 15px;
  margin-bottom: 14px;
}

.nav-mobile ul {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.nav-mobile a {
  display: block;
  padding: 12px 8px;
  font-size: 16px;
  font-weight: 500;
  color: var(--text-muted);
  border-radius: 10px;
}

.nav-mobile a:hover {
  background: var(--surface);
  color: var(--text);
}

.menu-slide-enter-active,
.menu-slide-leave-active {
  transition: max-height 260ms ease, opacity 220ms ease;
  overflow: hidden;
}

.menu-slide-enter-from,
.menu-slide-leave-to {
  max-height: 0;
  opacity: 0;
}

.menu-slide-enter-to,
.menu-slide-leave-from {
  max-height: 320px;
  opacity: 1;
}

@media (min-width: 900px) {
  .nav-desktop {
    display: block;
  }
  .search-desktop {
    display: block;
  }
  .menu-toggle {
    display: none;
  }
}
</style>
