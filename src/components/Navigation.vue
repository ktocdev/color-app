<template>
  <nav class="navigation">
    <div class="navigation__container">
      <div class="navigation__left">
        <router-link to="/" class="navigation__logo">
          <span class="navigation__logo-icon">🎨</span>
          <span class="navigation__logo-text">Color App</span>
        </router-link>
      </div>
      
      <div class="navigation__center">
        <ul class="navigation__links">
          <li><router-link to="/" class="navigation__link" active-class="navigation__link--active">Home</router-link></li>
          <li><a href="#" class="navigation__link">Palettes</a></li>
          <li><a href="#" class="navigation__link">Generator</a></li>
          <li><a href="#" class="navigation__link">About</a></li>
        </ul>
      </div>
      
      <div class="navigation__right">
        <ThemeSwitcher />
      </div>
    </div>
  </nav>
</template>

<script>
import ThemeSwitcher from './ThemeSwitcher.vue'

export default {
  name: 'Navigation',
  components: {
    ThemeSwitcher
  }
}
</script>

<style>
.navigation {
  background: var(--background-primary);
  border-bottom: 1px solid var(--gray-200);
  box-shadow: var(--shadow-sm);
  position: sticky;
  top: 0;
  z-index: var(--z-sticky);
}

.navigation__container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-lg);
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
}

.navigation__left {
  display: flex;
  align-items: center;
}

.navigation__logo {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: var(--text-primary);
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-xl);
  transition: color var(--transition-fast);
}

.navigation__logo:hover {
  color: var(--primary-color);
}

.navigation__logo-icon {
  font-size: var(--font-size-2xl);
  margin-right: var(--spacing-sm);
}

.navigation__logo-text {
  font-family: var(--font-family-heading);
}

.navigation__center {
  display: flex;
  align-items: center;
}

.navigation__links {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: var(--spacing-lg);
}

.navigation__link {
  text-decoration: none;
  color: var(--text-secondary);
  font-weight: var(--font-weight-medium);
  font-size: var(--font-size-base);
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--border-radius-md);
  transition: color var(--transition-fast), background-color var(--transition-fast);
}

.navigation__link:hover {
  color: var(--primary-dark);
  background-color: var(--gray-50);
}

.navigation__link--active {
  color: var(--primary-dark);
  background-color: var(--gray-50);
}

.navigation__right {
  display: flex;
  align-items: center;
}

/* Mobile responsiveness */
@media (max-width: 768px) {
  .navigation__container {
    padding: 0 var(--spacing-md);
  }
  
  .navigation__center {
    display: none;
  }
  
  .navigation__links {
    gap: var(--spacing-md);
  }
  
  .navigation__logo-text {
    display: none;
  }
}

@media (max-width: 480px) {
  .navigation__container {
    padding: 0 var(--spacing-sm);
  }
}
</style>
