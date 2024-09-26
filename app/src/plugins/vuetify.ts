/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { md3 } from 'vuetify/blueprints'

// Composables
import { createVuetify, type ThemeDefinition } from 'vuetify'

// Themes
const routineLightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    primary: '#3E5F90',
    'surface-tint': '#3E5F90',
    'on-primary': '#FFFFFF',
    'primary-container': '#D5E3FF',
    'on-primary-container': '#001B3C',
    secondary: '#34618E',
    'on-secondary': '#FFFFFF',
    'secondary-container': '#D1E4FF',
    'on-secondary-container': '#001D35',
    tertiary: '#2D628B',
    'on-tertiary': '#FFFFFF',
    'tertiary-container': '#CDE5FF',
    'on-tertiary-container': '#001D32',
    error: '#BA1A1A',
    'on-error': '#FFFFFF',
    'error-container': '#FFDAD6',
    'on-error-container': '#410002',
    background: '#F9F9FF',
    'on-background': '#191C20',
    surface: '#F9F9FF',
    'on-surface': '#191C20',
    'surface-variant': '#E0E2EC',
    'on-surface-variant': '#43474E',
    outline: '#74777F',
    'outline-variant': '#C4C6CF',
    shadow: '#000000',
    scrim: '#000000',
    'inverse-surface': '#2E3035',
    'inverse-on-surface': '#F0F0F7',
    'inverse-primary': '#A8C8FF',
    'primary-fixed': '#D5E3FF',
    'on-primary-fixed': '#001B3C',
    'primary-fixed-dim': '#A8C8FF',
    'on-primary-fixed-variant': '#254777',
    'secondary-fixed': '#D1E4FF',
    'on-secondary-fixed': '#001D35',
    'secondary-fixed-dim': '#9FCAFC',
    'on-secondary-fixed-variant': '#174974',
    'tertiary-fixed': '#CDE5FF',
    'on-tertiary-fixed': '#001D32',
    'tertiary-fixed-dim': '#9ACBFA',
    'on-tertiary-fixed-variant': '#0A4A72',
    'surface-dim': '#D9D9E0',
    'surface-bright': '#F9F9FF',
    'surface-container-lowest': '#FFFFFF',
    'surface-container-low': '#F3F3FA',
    'surface-container': '#EDEDF4',
    'surface-container-high': '#E7E8EE',
    'surface-container-highest': '#E1E2E9',
  },
}

const routineDarkTheme: ThemeDefinition = {
  dark: true,
  colors: {
    primary: '#A8C8FF',
    'surface-tint': '#A8C8FF',
    'on-primary': '#05305F',
    'primary-container': '#254777',
    'on-primary-container': '#D5E3FF',
    secondary: '#9FCAFC',
    'on-secondary': '#003257',
    'secondary-container': '#174974',
    'on-secondary-container': '#D1E4FF',
    tertiary: '#9ACBFA',
    'on-tertiary': '#003352',
    'tertiary-container': '#0A4A72',
    'on-tertiary-container': '#CDE5FF',
    error: '#FFB4AB',
    'on-error': '#690005',
    'error-container': '#93000A',
    'on-error-container': '#FFDAD6',
    background: '#111318',
    'on-background': '#E1E2E9',
    surface: '#111318',
    'on-surface': '#E1E2E9',
    'surface-variant': '#43474E',
    'on-surface-variant': '#C4C6CF',
    outline: '#8E9199',
    'outline-variant': '#43474E',
    shadow: '#000000',
    scrim: '#000000',
    'inverse-surface': '#E1E2E9',
    'inverse-on-surface': '#2E3035',
    'inverse-primary': '#3E5F90',
    'primary-fixed': '#D5E3FF',
    'on-primary-fixed': '#001B3C',
    'primary-fixed-dim': '#A8C8FF',
    'on-primary-fixed-variant': '#254777',
    'secondary-fixed': '#D1E4FF',
    'on-secondary-fixed': '#001D35',
    'secondary-fixed-dim': '#9FCAFC',
    'on-secondary-fixed-variant': '#174974',
    'tertiary-fixed': '#CDE5FF',
    'on-tertiary-fixed': '#001D32',
    'tertiary-fixed-dim': '#9ACBFA',
    'on-tertiary-fixed-variant': '#0A4A72',
    'surface-dim': '#111318',
    'surface-bright': '#37393E',
    'surface-container-lowest': '#0C0E13',
    'surface-container-low': '#191C20',
    'surface-container': '#1D2024',
    'surface-container-high': '#282A2F',
    'surface-container-highest': '#33353A',
  },
}

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  blueprint: md3,
  theme: {
    themes: { routineLightTheme, routineDarkTheme },
    defaultTheme: 'routineDarkTheme',
  },
})
