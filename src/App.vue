<script setup>
import Preloader from './components/Preloader.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import BackToTop from './components/BackToTop.vue'
</script>

<template>
  <Preloader />
  <Header />
  <main>
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </main>
  <Footer />
  <BackToTop />
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 180ms ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
