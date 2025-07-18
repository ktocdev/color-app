# Theme System Documentation

## Overview
This color app uses a CSS custom property-based theme system that allows for easy theme switching between dark, light, and ocean themes.

## Theme Structure

### Default Theme (default.css)
- **Primary theme**: Dark theme with modern colors
- **Contains**: All base CSS variables including typography, spacing, layout, and colors
- **Purpose**: Provides complete variable set that other themes can override

### Light Theme (light.css)
- **Extends**: Default theme
- **Overrides**: Only color-related variables for light appearance
- **Purpose**: Light mode alternative

### Ocean Theme (ocean.css)
- **Extends**: Default theme (inherits dark/light based on current base)
- **Overrides**: Only brand colors and hero background
- **Purpose**: Blue/ocean color scheme variant

## CSS Variables Used

### Colors
- `--primary-color`, `--primary-dark`, `--secondary-color`, `--accent-color`
- `--success-color`, `--warning-color`, `--error-color`, `--info-color`
- `--gray-100` through `--gray-900`, `--white`

### Semantic Colors
- `--background-primary`, `--background-secondary`, `--background-hero`
- `--text-primary`, `--text-secondary`, `--text-muted`, `--text-inverse`

### Typography
- `--font-family-primary`, `--font-family-heading`
- `--font-weight-normal`, `--font-weight-medium`, `--font-weight-semibold`, `--font-weight-bold`
- `--font-size-sm` through `--font-size-5xl`
- `--line-height-normal`, `--line-height-relaxed`

### Layout
- `--spacing-sm` through `--spacing-4xl`
- `--border-radius-md`, `--border-radius-lg`, `--border-radius-xl`, `--border-radius-full`
- `--shadow-sm` through `--shadow-xl`
- `--transition-fast`, `--transition-normal`
- `--z-sticky`

## How Themes Work

1. **Base Theme**: `default.css` is always loaded first and contains all variables
2. **Theme Overrides**: Additional theme files only override specific variables
3. **Inheritance**: Themes inherit all non-overridden variables from the base
4. **Runtime Switching**: ThemeManager dynamically loads/unloads theme CSS files

## Adding New Themes

1. Create new CSS file in `src/styles/themes/`
2. Add theme to `themeManager.js` themes object
3. Include only the variables you want to override
4. Update ThemeSwitcher component if you want custom display names

## BEM CSS Classes

All components use BEM (Block Element Modifier) methodology:
- **Block**: Component name (e.g., `navigation`, `home`)
- **Element**: Component parts (e.g., `navigation__logo`, `home__title`)
- **Modifier**: Variations (e.g., `navigation__link--active`)

This ensures style encapsulation without Vue's scoped styles.
