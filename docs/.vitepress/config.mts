import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Atelier 16',
  description: "Exercice 16 - Cet exercice consiste à créer la documentation d'une code review avec vitepress.",
  base: '/appweb-exer16/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [{ text: 'Home', link: '/' }]
  }
})
