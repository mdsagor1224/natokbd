<script setup>
import { computed, ref } from 'vue'
import { natoks, categories } from '../data/natoks.js'
import Hero from '../components/Hero.vue'
import FeaturedNatok from '../components/FeaturedNatok.vue'
import NatokCard from '../components/NatokCard.vue'
import CategoryFilter from '../components/CategoryFilter.vue'
import NatokGrid from '../components/NatokGrid.vue'

const sorted = [...natoks].sort((a, b) => new Date(b.date) - new Date(a.date))
const featured = sorted.find((n) => n.featured) || sorted[0]
const trending = sorted.filter((n) => n.trending).slice(0, 6)

const activeCategory = ref('All')

const filtered = computed(() => {
  if (activeCategory.value === 'All') return sorted
  return sorted.filter((n) => n.category === activeCategory.value)
})
</script>

<template>
  <div>
    <Hero />

    <section class="section">
      <div class="container">
        <div class="section-head">
          <div>
            <span class="section-eyebrow">Featured</span>
            <h2 class="section-title">This Week's Pick</h2>
          </div>
        </div>
        <FeaturedNatok :natok="featured" />
      </div>
    </section>

    <div class="container">
      <div class="reel-divider" aria-hidden="true"></div>
    </div>

    <section v-if="trending.length" class="section trending-section">
      <div class="container">
        <div class="section-head">
          <div>
            <span class="section-eyebrow">Trending</span>
            <h2 class="section-title">Popular Right Now</h2>
          </div>
        </div>
        <div class="trending-row">
          <NatokCard v-for="n in trending" :key="n.id" :natok="n" />
        </div>
      </div>
    </section>

    <section id="categories" class="section">
      <div class="container">
        <div class="section-head">
          <div>
            <span class="section-eyebrow">Browse</span>
            <h2 class="section-title">Categories</h2>
          </div>
        </div>
        <CategoryFilter :categories="categories" :active="activeCategory" @select="activeCategory = $event" />
      </div>
    </section>

    <section id="latest" class="section latest-section">
      <div class="container">
        <div class="section-head">
          <div>
            <span class="section-eyebrow">Fresh Uploads</span>
            <h2 class="section-title">Latest Natok</h2>
          </div>
        </div>
        <NatokGrid :natoks="filtered" empty-message="No Natok found in this category." />
      </div>
    </section>
  </div>
</template>

<style scoped>
.trending-row {
  display: flex;
  gap: 18px;
  overflow-x: auto;
  padding-bottom: 10px;
  scroll-snap-type: x mandatory;
}

.trending-row :deep(.natok-card) {
  flex: 0 0 260px;
  scroll-snap-align: start;
}

.latest-section {
  padding-top: 8px;
}
</style>
