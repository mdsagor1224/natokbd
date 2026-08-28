<script setup>
import NatokCard from './NatokCard.vue'

defineProps({
  natoks: {
    type: Array,
    required: true
  },
  emptyMessage: {
    type: String,
    default: 'No Natok found.'
  }
})
</script>

<template>
  <div v-if="natoks.length" class="natok-grid">
    <NatokCard v-for="natok in natoks" :key="natok.id" :natok="natok" />
  </div>
  <div v-else class="empty-state">
    <h3>{{ emptyMessage }}</h3>
    <p>Try a different keyword or explore another category.</p>
  </div>
</template>

<style scoped>
.natok-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
}

@media (min-width: 640px) {
  .natok-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .natok-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
  }
}
</style>
