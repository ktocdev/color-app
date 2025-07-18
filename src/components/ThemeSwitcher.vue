<template>
  <div class="theme-switcher">
    <select v-model="currentTheme" @change="switchTheme" class="theme-switcher__select">
      <option v-for="theme in themes" :key="theme" :value="theme" class="theme-switcher__option">
        {{ formatThemeName(theme) }}
      </option>
    </select>
  </div>
</template>

<script>
import themeManager from '../utils/themeManager.js'

export default {
  name: 'ThemeSwitcher',
  data() {
    return {
      currentTheme: themeManager.getCurrentTheme(),
      themes: themeManager.getAvailableThemes()
    }
  },
  methods: {
    switchTheme() {
      themeManager.switchTheme(this.currentTheme)
    },
    formatThemeName(theme) {
      const themeNames = {
        'default': 'Dark',
        'light': 'Light',
        'ocean': 'Ocean'
      }
      return themeNames[theme] || theme.charAt(0).toUpperCase() + theme.slice(1)
    }
  }
}
</script>

<style>
.theme-switcher {
  display: flex;
  align-items: center;
}

.theme-switcher__select {
  padding: var(--spacing-sm) var(--spacing-md);
  border: 1px solid var(--gray-300);
  border-radius: var(--border-radius-md);
  background: var(--background-primary);
  color: var(--text-primary);
  font-family: var(--font-family-primary);
  font-size: var(--font-size-sm);
  cursor: pointer;
  transition: border-color var(--transition-fast), box-shadow var(--transition-fast);
}

.theme-switcher__select:hover {
  border-color: var(--primary-color);
}

.theme-switcher__select:focus {
  outline: none;
  border-color: var(--primary-color);
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

.theme-switcher__option {
  padding: var(--spacing-sm);
}
</style>