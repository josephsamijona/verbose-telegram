import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles/index.css';

// Polyfills pour navigateurs plus anciens (si nécessaire)
import 'core-js/stable';
import 'regenerator-runtime/runtime';

// Importation des animations pour Framer Motion (si utilisées)
import { AnimatePresence } from 'framer-motion';

// Création de la racine React et rendu de l'application
const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <AnimatePresence mode="wait">
      <App />
    </AnimatePresence>
  </React.StrictMode>
);