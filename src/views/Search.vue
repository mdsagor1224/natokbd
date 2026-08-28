<script setup>
import { computed, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { natoks } from '../data/natoks.js'
import SearchBar from '../components/SearchBar.vue'
import NatokGrid from '../components/NatokGrid.vue'

const route = useRoute()
const router = useRouter()

const query = ref(typeof route.query.q === 'string' ? route.query.q : '')

watch(
  () => route.query.q,
  (q) => {
    query.value = typeof q === 'string' ? q : ''
  }
)

function runSearch() {
  router.push({ name: 'search', query: query.value ? { q: query.value } : {} })
}

const results = computed(() => {
  const term = query.value.trim().toLowerCase()
  if (!term) return []
  return natoks.filter(
    (n) => n.title.toLowerCase().includes(term) || n.category.toLowerCase().includes(term)
  )
})
</script>

<template>
  <div class="section search-page">
    <div class="container">
      <div class="section-head">
        <div>
          <span class="section-eyebrow">Search</span>
          <h2 class="section-title">Find Your Next Natok</h2>
        </div>
      </div>

      <SearchBar v-model="query" @submit="runSearch" />

      <div class="results-wrap">
        <p v-if="query.trim()" class="results-label">
          Search results for: <strong>"{{ query }}"</strong>
        </p>
        <NatokGrid v-if="query.trim()" :natoks="results" />
        <div v-else class="empty-state">
          <h3>Start typing to search</h3>
          <p>Search by Natok title or category.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.search-page {
  padding-top: 40px;
  min-height: 60vh;
}

.results-wrap {
  margin-top: 32px;
}

.results-label {
  font-size: 14px;
  color: var(--text-muted);
  margin-bottom: 20px;
}

.results-label strong {
  color: var(--text);
}
</style>
