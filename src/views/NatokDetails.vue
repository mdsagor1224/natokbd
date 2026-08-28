<script setup>
import { computed, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { natoks } from '../data/natoks.js'
import NatokGrid from '../components/NatokGrid.vue'

const props = defineProps({
  slug: {
    type: String,
    required: true
  }
})

const route = useRoute()
const videoError = ref(false)
const copied = ref(false)

const natok = computed(() => natoks.find((n) => n.slug === props.slug))

const related = computed(() => {
  if (!natok.value) return []
  return natoks
    .filter((n) => n.slug !== natok.value.slug && n.category === natok.value.category)
    .slice(0, 3)
})

function formatDate(dateStr) {
  const d = new Date(dateStr)
  return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
}

function updateHead() {
  videoError.value = false
  if (natok.value) {
    document.title = `${natok.value.title} | Watch Bangla Natok`
    const metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc) metaDesc.setAttribute('content', natok.value.description)
  } else {
    document.title = 'Natok Not Found | NATOKBD'
  }
}

watch(() => route.fullPath, updateHead, { immediate: true })

const shareUrl = computed(() => (typeof window !== 'undefined' ? window.location.href : ''))

async function copyLink() {
  try {
    await navigator.clipboard.writeText(shareUrl.value)
    copied.value = true
    setTimeout(() => (copied.value = false), 1800)
  } catch (e) {
    copied.value = false
  }
}
</script>

<template>
  <div v-if="natok" class="details-page">
    <div class="container">
      <nav class="breadcrumb" aria-label="Breadcrumb">
        <router-link :to="{ name: 'home' }">Home</router-link>
        <span aria-hidden="true">/</span>
        <router-link :to="{ name: 'category', params: { category: natok.category.toLowerCase().replace(/\s+/g, '-') } }">
          {{ natok.category }}
        </router-link>
        <span aria-hidden="true">/</span>
        <span class="breadcrumb-current">{{ natok.title }}</span>
      </nav>

      <div class="player-wrap">
        <iframe
          v-if="natok.videoUrl && !videoError"
          :src="natok.videoUrl"
          :title="natok.title"
          loading="lazy"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          @error="videoError = true"
        ></iframe>
        <div v-else class="player-fallback">
          <p>This video is currently unavailable. Please check back soon.</p>
        </div>
      </div>

      <div class="details-header">
        <div>
          <span class="details-chip">{{ natok.category }}</span>
          <h1 class="details-title">{{ natok.title }}</h1>
          <p class="details-date">Published {{ formatDate(natok.date) }}</p>
        </div>
        <router-link :to="{ name: 'home' }" class="btn btn-ghost back-btn">
          <span aria-hidden="true">←</span> Back
        </router-link>
      </div>

      <p class="details-desc">{{ natok.description }}</p>

      <div class="share-row">
        <span class="share-label">Share:</span>
        <a
          class="share-btn"
          :href="`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on Facebook"
        >Facebook</a>
        <a
          class="share-btn"
          :href="`https://wa.me/?text=${encodeURIComponent(natok.title + ' ' + shareUrl)}`"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on WhatsApp"
        >WhatsApp</a>
        <button type="button" class="share-btn" @click="copyLink">
          {{ copied ? 'Copied!' : 'Copy Link' }}
        </button>
      </div>
    </div>

    <section v-if="related.length" class="section related-section">
      <div class="container">
        <div class="section-head">
          <div>
            <span class="section-eyebrow">Keep Watching</span>
            <h2 class="section-title">Related Natok</h2>
          </div>
        </div>
        <NatokGrid :natoks="related" />
      </div>
    </section>
  </div>

  <div v-else class="container empty-state">
    <h3>Natok not found.</h3>
    <p>The Natok you're looking for may have been removed or doesn't exist.</p>
    <router-link :to="{ name: 'home' }" class="btn btn-primary" style="margin-top: 18px;">
      Go to Homepage
    </router-link>
  </div>
</template>

<style scoped>
.details-page {
  padding: 28px 0 40px;
}

.breadcrumb {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
  font-size: 13px;
  color: var(--text-dim);
  margin-bottom: 20px;
}

.breadcrumb a {
  color: var(--text-muted);
  transition: color var(--transition);
}

.breadcrumb a:hover {
  color: var(--text);
}

.breadcrumb-current {
  color: var(--text);
  max-width: 220px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.player-wrap {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  border-radius: var(--radius-lg);
  overflow: hidden;
  background: var(--bg-elevated);
  border: 1px solid var(--border);
}

.player-wrap iframe {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border: none;
}

.player-fallback {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: var(--text-muted);
  padding: 24px;
}

.details-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  margin-top: 26px;
  flex-wrap: wrap;
}

.details-chip {
  display: inline-flex;
  padding: 5px 12px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 700;
  background: var(--gradient-brand-soft);
  border: 1px solid rgba(236, 72, 153, 0.3);
  margin-bottom: 12px;
}

.details-title {
  font-size: clamp(22px, 4vw, 32px);
  font-weight: 700;
  margin-bottom: 8px;
}

.details-date {
  font-size: 13.5px;
  color: var(--text-dim);
  font-weight: 500;
}

.back-btn {
  flex-shrink: 0;
}

.details-desc {
  margin-top: 20px;
  max-width: 760px;
  color: var(--text-muted);
  font-size: 15.5px;
  line-height: 1.85;
}

.share-row {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
  margin-top: 26px;
}

.share-label {
  font-size: 13.5px;
  font-weight: 600;
  color: var(--text-dim);
}

.share-btn {
  padding: 8px 16px;
  border-radius: 999px;
  border: 1px solid var(--border);
  background: var(--surface);
  font-size: 13px;
  font-weight: 600;
  color: var(--text-muted);
  transition: all var(--transition);
}

.share-btn:hover {
  color: var(--text);
  border-color: rgba(255, 255, 255, 0.2);
  background: var(--surface-hover);
}

.related-section {
  margin-top: 12px;
}
</style>
