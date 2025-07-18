<template>
  <div class="home">
    <header class="hero">
      <div class="hero-content">
        <h1 class="title">🎨 Color App</h1>
        <p class="subtitle">Explore beautiful color palettes and create stunning combinations</p>
        <div class="color-preview">
          <div class="color-dot" style="background: #ff6b6b;"></div>
          <div class="color-dot" style="background: #4ecdc4;"></div>
          <div class="color-dot" style="background: #45b7d1;"></div>
          <div class="color-dot" style="background: #96ceb4;"></div>
          <div class="color-dot" style="background: #feca57;"></div>
        </div>
      </div>
    </header>

    <main class="main-content">
      <section class="features">
        <h2>Features</h2>
        <div class="feature-grid">
          <div class="feature-card">
            <div class="feature-icon">🎨</div>
            <h3>Color Palettes</h3>
            <p>Discover curated color palettes for your next project</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🌈</div>
            <h3>Color Generator</h3>
            <p>Generate random color combinations with ease</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🎯</div>
            <h3>Color Picker</h3>
            <p>Pick colors from images and create custom palettes</p>
          </div>
        </div>
      </section>

      <section class="getting-started">
        <h2>Getting Started</h2>
        <p>Welcome to Color App! Start exploring beautiful color combinations and create your own unique palettes.</p>
        <button class="cta-button" @click="exploreColors">Explore Colors</button>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    exploreColors() {
      // For now, just show an alert. Later you can navigate to other pages
      alert('Color exploration feature coming soon!')
    }
  }
}
</script>

<style scoped>
.home {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.hero {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  text-align: center;
  color: white;
}

.hero-content {
  max-width: 600px;
  padding: 2rem;
}

.title {
  font-size: 3.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.subtitle {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  opacity: 0.9;
}

.color-preview {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
}

.color-dot {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;
}

.color-dot:hover {
  transform: scale(1.1);
}

.main-content {
  background: white;
  padding: 4rem 2rem;
}

.features {
  max-width: 1200px;
  margin: 0 auto 4rem;
  text-align: center;
}

.features h2 {
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 3rem;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.feature-card {
  background: #f8f9fa;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.feature-card h3 {
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 1rem;
}

.feature-card p {
  color: #666;
  line-height: 1.6;
}

.getting-started {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.getting-started h2 {
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 1.5rem;
}

.getting-started p {
  font-size: 1.1rem;
  color: #666;
  line-height: 1.6;
  margin-bottom: 2rem;
}

.cta-button {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.cta-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(102, 126, 234, 0.4);
}

@media (max-width: 768px) {
  .title {
    font-size: 2.5rem;
  }
  
  .subtitle {
    font-size: 1rem;
  }
  
  .color-dot {
    width: 45px;
    height: 45px;
  }
  
  .features h2,
  .getting-started h2 {
    font-size: 2rem;
  }
  
  .main-content {
    padding: 2rem 1rem;
  }
}
</style>