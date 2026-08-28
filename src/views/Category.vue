<script setup>
import { computed } from 'vue'
import { natoks, categories } from '../data/natoks.js'
import NatokGrid from '../components/NatokGrid.vue'
import CategoryFilter from '../components/CategoryFilter.vue'
import { useRouter } from 'vue-router'

const props = defineProps({
  category: {
    type: String,
    required: true
  }
})

const router = useRouter()

function slugify(str) {
  return str.toLowerCase().replace(/\s+/g, '-')
}

const matchedCategory = computed(() => categories.find((c) => slugify(c) === props.category))

const results = computed(() => {
  if (!matchedCategory.value) return []
  return [...natoks]
    .filter((n) => n.category === matchedCategory.value)
    .sort((a, b) => new Date(b.date) - new Date(a.date))
})

function onSelect(cat) {
  if (cat === 'All') {
    router.push({ name: 'home', hash: '#latest' })
  } else {
    router.push({ name: 'category', params: { category: slugify(cat) } })
  }
}
</script>

<template>
  <div class="section category-page">
    <div class="container">
      <div class="section-head">
        <div>
          <span class="section-eyebrow">Category</span>
          <h2 class="section-title">{{ matchedCategory || 'Unknown Category' }}</h2>
        </div>
      </div>

      <CategoryFilter :categories="categories" :active="matchedCategory || ''" @select="onSelect" />

      <div class="results-wrap">
        <NatokGrid
          :natoks="results"
          :empty-message="matchedCategory ? 'No Natok found in this category.' : 'This category does not exist.'"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.category-page {
  padding-top: 40px;
  min-height: 60vh;
}

.results-wrap {
  margin-top: 28px;
}
</style>
