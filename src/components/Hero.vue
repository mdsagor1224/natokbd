<script setup>
function scrollToLatest() {
  const el = document.getElementById('latest')
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <section class="hero">
    <div class="hero-glow" aria-hidden="true"></div>
    <div class="hero-reels" aria-hidden="true">
      <span v-for="n in 5" :key="n" class="reel-frame"></span>
    </div>

    <div class="container hero-inner">
      <span class="hero-badge">🎬 নতুন নাটক প্রতি সপ্তাহে</span>
      <h1 class="hero-title">
        <span class="gradient-text">সেরা বাংলা নাটক</span><br />
        এখন এক জায়গায়
      </h1>
      <p class="hero-desc">
        Discover the latest Bangla dramas, romantic stories, family entertainment
        and trending natok in one beautiful platform.
      </p>
      <button class="btn btn-primary hero-cta" type="button" @click="scrollToLatest">
        Explore Latest Natok
        <span aria-hidden="true">→</span>
      </button>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  padding: 76px 0 48px;
  overflow: hidden;
}

.hero-glow {
  position: absolute;
  top: -220px;
  left: 50%;
  width: 900px;
  height: 560px;
  transform: translateX(-50%);
  background: radial-gradient(closest-side, rgba(124, 58, 237, 0.35), rgba(236, 72, 153, 0.18) 45%, transparent 72%);
  filter: blur(10px);
  pointer-events: none;
}

.hero-reels {
  position: absolute;
  inset: 0;
  pointer-events: none;
  display: flex;
  justify-content: space-between;
  opacity: 0.5;
}

.reel-frame {
  width: 1px;
  height: 100%;
  background: linear-gradient(180deg, transparent, var(--border) 20%, var(--border) 80%, transparent);
}

.hero-inner {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 20px;
  max-width: 720px;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 16px;
  border-radius: 999px;
  background: var(--gradient-brand-soft);
  border: 1px solid rgba(236, 72, 153, 0.25);
  font-size: 13px;
  font-weight: 600;
  color: var(--text);
}

.hero-title {
  font-size: clamp(32px, 6vw, 54px);
  font-weight: 700;
}

.hero-desc {
  font-size: 16px;
  line-height: 1.7;
  color: var(--text-muted);
  max-width: 560px;
}

.hero-cta {
  margin-top: 8px;
}

@media (min-width: 768px) {
  .hero {
    padding: 108px 0 64px;
  }
}
</style>
