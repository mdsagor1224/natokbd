<script setup></script>

<template>
  <div class="container not-found">
    <span class="not-found-code gradient-text">404</span>
    <h1>Page not found</h1>
    <p>The page you're looking for doesn't exist or has been moved.</p>
    <router-link :to="{ name: 'home' }" class="btn btn-primary">Go to Homepage</router-link>
  </div>
</template>

<style scoped>
.not-found {
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 14px;
  padding: 60px 20px;
}

.not-found-code {
  font-family: var(--font-display);
  font-size: clamp(64px, 12vw, 120px);
  font-weight: 700;
  line-height: 1;
}

.not-found h1 {
  font-size: 22px;
  font-weight: 700;
}

.not-found p {
  color: var(--text-muted);
  max-width: 380px;
  margin-bottom: 8px;
}
</style>
