<script setup>
defineProps({
  natok: {
    type: Object,
    required: true
  }
})

function formatDate(dateStr) {
  const d = new Date(dateStr)
  return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
}
</script>

<template>
  <router-link
    :to="{ name: 'natok-details', params: { slug: natok.slug } }"
    class="natok-card"
    :aria-label="`Watch ${natok.title}`"
  >
    <span class="natok-thumb">
      <img :src="natok.thumbnail" :alt="natok.title" loading="lazy" width="640" height="360" />
      <span class="natok-play" aria-hidden="true">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none">
          <path d="M8 5.5V18.5L18.5 12L8 5.5Z" fill="#fff" />
        </svg>
      </span>
      <span class="natok-category-chip">{{ natok.category }}</span>
    </span>
    <span class="natok-body">
      <span class="natok-title">{{ natok.title }}</span>
      <span class="natok-meta">{{ natok.category }} • {{ formatDate(natok.date) }}</span>
    </span>
  </router-link>
</template>

<style scoped>
.natok-card {
  display: block;
  border-radius: var(--radius-md);
  overflow: hidden;
  background: var(--surface);
  border: 1px solid var(--border);
  transition: transform var(--transition), box-shadow var(--transition), border-color var(--transition);
}

.natok-card:hover,
.natok-card:focus-visible {
  transform: translateY(-5px);
  box-shadow: var(--shadow-glow);
  border-color: rgba(236, 72, 153, 0.35);
}

.natok-thumb {
  position: relative;
  display: block;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  background: var(--bg-elevated);
}

.natok-thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 420ms cubic-bezier(0.22, 1, 0.36, 1);
}

.natok-card:hover .natok-thumb img,
.natok-card:focus-visible .natok-thumb img {
  transform: scale(1.08);
}

.natok-thumb::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(8, 8, 18, 0) 55%, rgba(8, 8, 18, 0.65) 100%);
}

.natok-play {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0.94);
  width: 52px;
  height: 52px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--gradient-brand);
  box-shadow: 0 8px 24px rgba(124, 58, 237, 0.5);
  z-index: 2;
  transition: transform var(--transition), box-shadow var(--transition);
}

.natok-card:hover .natok-play,
.natok-card:focus-visible .natok-play {
  transform: translate(-50%, -50%) scale(1.08);
  box-shadow: 0 10px 30px rgba(236, 72, 153, 0.6);
}

.natok-category-chip {
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 2;
  font-size: 11.5px;
  font-weight: 600;
  padding: 5px 11px;
  border-radius: 999px;
  background: rgba(8, 8, 18, 0.65);
  backdrop-filter: blur(6px);
  border: 1px solid rgba(255, 255, 255, 0.14);
  color: var(--text);
}

.natok-body {
  display: block;
  padding: 16px;
}

.natok-title {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 16px;
  line-height: 1.4;
  color: var(--text);
  margin-bottom: 8px;
}

.natok-meta {
  font-size: 12.5px;
  color: var(--text-dim);
  font-weight: 500;
}
</style>
