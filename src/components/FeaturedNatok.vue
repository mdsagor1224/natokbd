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
    class="featured"
    :aria-label="`Watch featured natok ${natok.title}`"
  >
    <span class="featured-media">
      <img :src="natok.thumbnail" :alt="natok.title" loading="lazy" width="1200" height="675" />
      <span class="featured-play" aria-hidden="true">
        <svg viewBox="0 0 24 24" width="26" height="26" fill="none">
          <path d="M8 5.5V18.5L18.5 12L8 5.5Z" fill="#fff" />
        </svg>
      </span>
    </span>
    <span class="featured-body">
      <span class="featured-chip">★ Featured</span>
      <span class="featured-title">{{ natok.title }}</span>
      <span class="featured-desc">{{ natok.description }}</span>
      <span class="featured-meta">{{ natok.category }} • {{ formatDate(natok.date) }}</span>
    </span>
  </router-link>
</template>

<style scoped>
.featured {
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  border-radius: var(--radius-lg);
  overflow: hidden;
  background: var(--surface);
  border: 1px solid var(--border);
  transition: box-shadow var(--transition), transform var(--transition);
}

.featured:hover,
.featured:focus-visible {
  box-shadow: var(--shadow-glow);
}

.featured-media {
  position: relative;
  display: block;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  background: var(--bg-elevated);
}

.featured-media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 500ms cubic-bezier(0.22, 1, 0.36, 1);
}

.featured:hover .featured-media img,
.featured:focus-visible .featured-media img {
  transform: scale(1.05);
}

.featured-media::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(0deg, rgba(8, 8, 18, 0.85) 0%, rgba(8, 8, 18, 0.15) 45%, rgba(8, 8, 18, 0.35) 100%);
}

.featured-play {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 64px;
  height: 64px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--gradient-brand);
  box-shadow: 0 10px 30px rgba(124, 58, 237, 0.5);
  z-index: 2;
  transition: transform var(--transition);
}

.featured:hover .featured-play,
.featured:focus-visible .featured-play {
  transform: translate(-50%, -50%) scale(1.08);
}

.featured-body {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
}

.featured-chip {
  display: inline-flex;
  align-self: flex-start;
  padding: 5px 12px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 700;
  background: var(--gradient-brand-soft);
  border: 1px solid rgba(236, 72, 153, 0.3);
  color: var(--text);
}

.featured-title {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: clamp(20px, 3vw, 28px);
  color: var(--text);
  line-height: 1.3;
}

.featured-desc {
  color: var(--text-muted);
  font-size: 14.5px;
  line-height: 1.7;
  max-width: 640px;
}

.featured-meta {
  font-size: 12.5px;
  font-weight: 600;
  color: var(--text-dim);
}

@media (min-width: 900px) {
  .featured {
    grid-template-columns: 1.3fr 1fr;
    align-items: stretch;
  }

  .featured-media {
    aspect-ratio: auto;
  }

  .featured-body {
    justify-content: center;
    padding: 32px 36px;
  }

  .featured-media::after {
    background: linear-gradient(90deg, rgba(8, 8, 18, 0.15) 0%, rgba(8, 8, 18, 0.55) 100%);
  }
}
</style>
