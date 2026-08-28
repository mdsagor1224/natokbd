<script setup>
defineProps({
  categories: {
    type: Array,
    required: true
  },
  active: {
    type: String,
    default: 'All'
  }
})

defineEmits(['select'])
</script>

<template>
  <div class="category-filter" role="tablist" aria-label="Filter by category">
    <button
      type="button"
      class="chip"
      :class="{ active: active === 'All' }"
      role="tab"
      :aria-selected="active === 'All'"
      @click="$emit('select', 'All')"
    >
      All
    </button>
    <button
      v-for="cat in categories"
      :key="cat"
      type="button"
      class="chip"
      :class="{ active: active === cat }"
      role="tab"
      :aria-selected="active === cat"
      @click="$emit('select', cat)"
    >
      {{ cat }}
    </button>
  </div>
</template>

<style scoped>
.category-filter {
  display: flex;
  gap: 10px;
  overflow-x: auto;
  padding-bottom: 4px;
  scrollbar-width: none;
}

.category-filter::-webkit-scrollbar {
  display: none;
}

.chip {
  flex-shrink: 0;
  padding: 9px 18px;
  border-radius: 999px;
  border: 1px solid var(--border);
  background: var(--surface);
  color: var(--text-muted);
  font-size: 13.5px;
  font-weight: 600;
  transition: all var(--transition);
}

.chip:hover {
  color: var(--text);
  border-color: rgba(255, 255, 255, 0.2);
}

.chip.active {
  background: var(--gradient-brand);
  color: #fff;
  border-color: transparent;
  box-shadow: 0 6px 18px rgba(124, 58, 237, 0.4);
}
</style>
