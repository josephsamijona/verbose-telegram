import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'url'
import process from 'node:process';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Charger les variables d'environnement
  const env = loadEnv(mode, process.cwd(), '')
  
  return {
    plugins: [react()],
    build: {
      outDir: 'dist',
    },
    css: {
      postcss: './postcss.config.js', // Configuration explicite de PostCSS
    },
    preview: {
      host: '0.0.0.0',
      port: process.env.PORT || 3000,
      strictPort: true,
      allowedHosts: ['all', 'protypewebsite.up.railway.app'] // Ajout explicite du domaine
    },
    server: {
      port: env.PORT || 3000,
      host: true, // Needed for docker
      strictPort: true,
      allowedHosts: ['all', 'protypewebsite.up.railway.app'] // Ajout explicite du domaine également ici
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      },
    },
    define: {
      // Définir process.env pour que les bibliothèques qui en dépendent fonctionnent
      'process.env': JSON.stringify(env)
    }
  }
})