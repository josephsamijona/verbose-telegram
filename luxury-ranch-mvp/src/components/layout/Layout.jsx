import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

// Import des composants de layout
import Header from './Header';
import Footer from './Footer';

const Layout = () => {
  const { pathname } = useLocation();
  
  // Remonter en haut de la page lors des changements de routes
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [pathname]);
  
  // Animations de transition entre les pages
  const pageVariants = {
    initial: {
      opacity: 0,
      y: 10
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.1, 0.25, 1.0] // Courbe d'accélération élégante
      }
    },
    exit: {
      opacity: 0,
      y: -10,
      transition: {
        duration: 0.2
      }
    }
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header fixe */}
      <Header />
      
      {/* Contenu principal */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={pathname}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageVariants}
          >
            {/* Espace pour le header fixe */}
            <div className="pt-24">
              {/* Outlet injecte le contenu de la page actuelle */}
              <Outlet />
            </div>
          </motion.div>
        </AnimatePresence>
      </main>
      
      {/* Bouton "Retour en haut" conditionnel */}
      <ScrollToTop />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

// Composant de bouton "Retour en haut"
const ScrollToTop = () => {
  const [isVisible, setIsVisible] = React.useState(false);
  
  // Détecter le défilement pour afficher/masquer le bouton
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);
  
  // Fonction pour remonter en haut
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 bg-ranch-400 hover:bg-ranch-500 text-white rounded-full shadow-lg z-40"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Scroll to top"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M5 10l7-7m0 0l7 7m-7-7v18" 
            />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default Layout;