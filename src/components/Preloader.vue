<script setup>
import { onMounted, ref } from 'vue'

const visible = ref(true)
const fading = ref(false)

onMounted(() => {
  // Keep it brief — just long enough to avoid a flash of unstyled content.
  const minTime = setTimeout(() => {
    fading.value = true
    setTimeout(() => {
      visible.value = false
    }, 260)
  }, 380)

  return () => clearTimeout(minTime)
})
</script>

<template>
  <div v-if="visible" class="preloader" :class="{ 'is-fading': fading }" role="status" aria-live="polite">
    <span class="preloader-mark">
      <span class="preloader-ring"></span>
      <span class="preloader-play">▶</span>
    </span>
    <span class="preloader-word">NATOK<span class="gradient-text">BD</span></span>
    <span class="visually-hidden">Loading NATOKBD</span>
  </div>
</template>

<style scoped>
.preloader {
  position: fixed;
  inset: 0;
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 14px;
  background: #080812;
  transition: opacity 260ms ease;
}

.preloader.is-fading {
  opacity: 0;
  pointer-events: none;
}

.preloader-mark {
  position: relative;
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.preloader-ring {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  border: 3px solid rgba(255, 255, 255, 0.08);
  border-top-color: #ec4899;
  border-right-color: #7c3aed;
  animation: spin 900ms linear infinite;
}

.preloader-play {
  font-size: 15px;
  color: #fff;
  transform: translateX(1px);
}

.preloader-word {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 15px;
  letter-spacing: 0.06em;
  color: var(--text-muted);
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
