<template>
  <div class="home">
    <header class="home__hero">
      <div class="home__hero-content">
        <h1 class="home__title">🎨 Color App</h1>
        <p class="home__subtitle">Explore beautiful color palettes and create stunning combinations</p>
        <div class="home__color-preview">
          <div class="home__color-dot" style="background: var(--error-color);"></div>
          <div class="home__color-dot" style="background: var(--secondary-color);"></div>
          <div class="home__color-dot" style="background: var(--info-color);"></div>
          <div class="home__color-dot" style="background: var(--success-color);"></div>
          <div class="home__color-dot" style="background: var(--accent-color);"></div>
        </div>
      </div>
    </header>

    <main class="home__main-content">
      <section class="home__features">
        <h2 class="home__features-title">Features</h2>
        <div class="home__feature-grid">
          <div class="home__feature-card">
            <div class="home__feature-icon">🎨</div>
            <h3 class="home__feature-title">Color Palettes</h3>
            <p class="home__feature-description">Discover curated color palettes for your next project</p>
          </div>
          <div class="home__feature-card">
            <div class="home__feature-icon">🌈</div>
            <h3 class="home__feature-title">Color Generator</h3>
            <p class="home__feature-description">Generate random color combinations with ease</p>
          </div>
          <div class="home__feature-card">
            <div class="home__feature-icon">🎯</div>
            <h3 class="home__feature-title">Color Picker</h3>
            <p class="home__feature-description">Pick colors from images and create custom palettes</p>
          </div>
        </div>
      </section>

      <section class="home__getting-started">
        <h2 class="home__getting-started-title">Getting Started</h2>
        <p class="home__getting-started-description">Welcome to Color App! Start exploring beautiful color combinations and create your own unique palettes.</p>
        <button class="home__cta-button" @click="exploreColors">Explore Colors</button>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    exploreColors() {
      alert('Color exploration feature coming soon!')
    }
  }
}
</script>

<style>
.home {
  min-height: 100vh;
  background: var(--background-hero);
  font-family: var(--font-family-primary);
}

.home__hero {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  text-align: center;
  color: var(--text-primary);
}

.home__hero-content {
  max-width: 600px;
  padding: var(--spacing-xl);
}

.home__title {
  font-size: var(--font-size-5xl);
  font-weight: var(--font-weight-bold);
  font-family: var(--font-family-heading);
  margin-bottom: var(--spacing-md);
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.home__subtitle {
  font-size: var(--font-size-xl);
  margin-bottom: var(--spacing-xl);
  opacity: 0.9;
  line-height: var(--line-height-relaxed);
}

.home__color-preview {
  display: flex;
  justify-content: center;
  gap: var(--spacing-md);
  margin-top: var(--spacing-xl);
}

.home__color-dot {
  width: 60px;
  height: 60px;
  border-radius: var(--border-radius-full);
  box-shadow: var(--shadow-lg);
  transition: transform var(--transition-normal);
}

.home__color-dot:hover {
  transform: scale(1.1);
}

.home__main-content {
  background: var(--background-primary);
  padding: var(--spacing-4xl) var(--spacing-xl);
  color: var(--text-primary);
}

.home__features {
  max-width: 1200px;
  margin: 0 auto var(--spacing-4xl);
  text-align: center;
}

.home__features-title {
  font-size: var(--font-size-4xl);
  color: var(--text-primary);
  margin-bottom: var(--spacing-3xl);
  font-weight: var(--font-weight-bold);
}

.home__feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-xl);
  margin-top: var(--spacing-xl);
}

.home__feature-card {
  background: var(--background-secondary);
  padding: var(--spacing-xl);
  border-radius: var(--border-radius-xl);
  box-shadow: var(--shadow-md);
  transition: transform var(--transition-normal), box-shadow var(--transition-normal);
}

.home__feature-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-xl);
}

.home__feature-icon {
  font-size: var(--font-size-5xl);
  margin-bottom: var(--spacing-md);
}

.home__feature-title {
  font-size: var(--font-size-2xl);
  color: var(--text-primary);
  margin-bottom: var(--spacing-md);
  font-weight: var(--font-weight-semibold);
}

.home__feature-description {
  color: var(--text-secondary);
  line-height: var(--line-height-relaxed);
}

.home__getting-started {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.home__getting-started-title {
  font-size: var(--font-size-4xl);
  color: var(--text-primary);
  margin-bottom: var(--spacing-lg);
  font-weight: var(--font-weight-bold);
}

.home__getting-started-description {
  font-size: var(--font-size-lg);
  color: var(--text-secondary);
  line-height: var(--line-height-relaxed);
  margin-bottom: var(--spacing-xl);
}

.home__cta-button {
  background: var(--background-hero);
  color: var(--text-primary);
  padding: var(--spacing-md) var(--spacing-xl);
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-medium);
  border: none;
  border-radius: var(--border-radius-lg);
  cursor: pointer;
  transition: transform var(--transition-normal), box-shadow var(--transition-normal);
  font-family: var(--font-family-primary);
}

.home__cta-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(102, 126, 234, 0.4);
}

/* Mobile responsiveness */
@media (max-width: 768px) {
  .home__title {
    font-size: var(--font-size-4xl);
  }
  
  .home__subtitle {
    font-size: var(--font-size-base);
  }
  
  .home__color-dot {
    width: 45px;
    height: 45px;
  }
  
  .home__features-title,
  .home__getting-started-title {
    font-size: var(--font-size-3xl);
  }
  
  .home__main-content {
    padding: var(--spacing-xl) var(--spacing-md);
  }
}
</style>