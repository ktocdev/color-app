class ThemeManager {
  constructor() {
    this.themes = {
      default: '/src/styles/themes/default.css',
      light: '/src/styles/themes/light.css',
      ocean: '/src/styles/themes/ocean.css'
    }
    this.currentTheme = 'default'
    this.loadTheme(this.getSavedTheme())
  }

  getSavedTheme() {
    return localStorage.getItem('color-app-theme') || 'default'
  }

  saveTheme(themeName) {
    localStorage.setItem('color-app-theme', themeName)
  }

  async loadTheme(themeName) {
    if (!this.themes[themeName]) {
      console.warn(`Theme "${themeName}" not found`)
      return
    }

    // Remove existing theme stylesheets
    const existingLinks = document.querySelectorAll('link[data-theme]')
    existingLinks.forEach(link => link.remove())

    // Load default theme first
    if (themeName !== 'default') {
      await this.loadStylesheet(this.themes.default, 'default')
    }

    // Load selected theme
    await this.loadStylesheet(this.themes[themeName], themeName)
    
    this.currentTheme = themeName
    this.saveTheme(themeName)
  }

  loadStylesheet(href, themeName) {
    return new Promise((resolve, reject) => {
      const link = document.createElement('link')
      link.rel = 'stylesheet'
      link.href = href
      link.setAttribute('data-theme', themeName)
      link.onload = resolve
      link.onerror = reject
      document.head.appendChild(link)
    })
  }

  switchTheme(themeName) {
    this.loadTheme(themeName)
  }

  getAvailableThemes() {
    return Object.keys(this.themes)
  }

  getCurrentTheme() {
    return this.currentTheme
  }
}

export default new ThemeManager()