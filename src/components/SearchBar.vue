<script setup>
const model = defineModel({ type: String, default: '' })

defineProps({
  placeholder: {
    type: String,
    default: 'Search by title or category...'
  }
})

defineEmits(['submit'])
</script>

<template>
  <form class="search-bar" role="search" @submit.prevent="$emit('submit')">
    <svg class="search-icon" viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true">
      <circle cx="11" cy="11" r="7" stroke="currentColor" stroke-width="2" />
      <path d="M21 21L16.5 16.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
    </svg>
    <label class="visually-hidden" for="search-bar-input">Search Natok</label>
    <input id="search-bar-input" v-model="model" type="search" :placeholder="placeholder" />
    <button type="submit" class="btn btn-primary search-submit">Search</button>
  </form>
</template>

<style scoped>
.search-bar {
  display: flex;
  align-items: center;
  gap: 10px;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 999px;
  padding: 6px 6px 6px 20px;
}

.search-bar:focus-within {
  border-color: var(--pink);
}

.search-icon {
  color: var(--text-dim);
  flex-shrink: 0;
}

.search-bar input {
  flex: 1;
  min-width: 0;
  background: transparent;
  border: none;
  color: var(--text);
  font-size: 15px;
  padding: 10px 0;
}

.search-bar input:focus {
  outline: none;
}

.search-submit {
  flex-shrink: 0;
  padding: 10px 20px;
  font-size: 14px;
}
</style>
