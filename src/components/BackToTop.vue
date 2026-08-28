<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

const visible = ref(false)

function handleScroll() {
  visible.value = window.scrollY > 480
}

function scrollTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => window.addEventListener('scroll', handleScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<template>
  <transition name="pop">
    <button
      v-if="visible"
      type="button"
      class="back-to-top"
      aria-label="Back to top"
      @click="scrollTop"
    >
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true">
        <path d="M12 19V5M12 5L5 12M12 5L19 12" stroke="#fff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </button>
  </transition>
</template>

<style scoped>
.back-to-top {
  position: fixed;
  right: 18px;
  bottom: 18px;
  z-index: 80;
  width: 46px;
  height: 46px;
  border-radius: 50%;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--gradient-brand);
  box-shadow: 0 10px 26px rgba(124, 58, 237, 0.45);
  transition: transform var(--transition), box-shadow var(--transition);
}

.back-to-top:hover {
  transform: translateY(-3px);
  box-shadow: 0 14px 34px rgba(236, 72, 153, 0.5);
}

.pop-enter-active,
.pop-leave-active {
  transition: opacity 200ms ease, transform 200ms ease;
}

.pop-enter-from,
.pop-leave-to {
  opacity: 0;
  transform: translateY(10px) scale(0.9);
}

@media (min-width: 768px) {
  .back-to-top {
    right: 28px;
    bottom: 28px;
  }
}
</style>
