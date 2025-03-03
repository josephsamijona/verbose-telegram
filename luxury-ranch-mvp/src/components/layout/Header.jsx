import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { BiMenuAltRight, BiX, BiPhoneCall } from 'react-icons/bi';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  // Détecte le défilement pour changer l'apparence du header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Ferme le menu mobile lors du changement de page
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);
  
  // Configuration des liens de navigation
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Properties', path: '/properties' },
    { name: 'Explore', path: '/explore' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];
  
  // Classes pour le header selon le défilement
  const headerClasses = isScrolled
    ? "bg-luxury-black-light bg-opacity-95 backdrop-blur-md shadow-lg py-3"
    : "bg-transparent py-6";
    
  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${headerClasses}`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="flex flex-col">
              <h1 className="text-gold-400 font-serif text-2xl md:text-3xl">Hacienda Caribe</h1>
              <span className="text-silver-300 text-xs tracking-wider">LUXURY RANCH ESTATE</span>
            </div>
          </Link>
          
          {/* Navigation Desktop */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-medium text-sm uppercase tracking-wider ${
                  location.pathname === link.path
                  ? "text-white border-b-2 border-gold-400 pb-1"
                  : "text-silver-200 hover:text-white"
                } transition-colors duration-300`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          
          {/* Bouton de réservation (Desktop) */}
          <div className="hidden lg:flex items-center space-x-6">
            <a
              href="tel:+18095555555"
              className="flex items-center text-silver-200 hover:text-white transition-colors duration-300"
            >
              <BiPhoneCall className="mr-2 text-gold-400" />
              <span>+1 (809) 555-5555</span>
            </a>
            
            <Link
              to="/contact"
              className="bg-gradient-gold hover:opacity-90 text-luxury-black px-6 py-2.5 rounded-md font-medium transition-all duration-300 shadow-gold"
            >
              Book Now
            </Link>
          </div>
          
          {/* Bouton menu hamburger (Mobile) */}
          <button
            className="lg:hidden text-silver-100 p-1"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <BiX className="text-3xl" />
            ) : (
              <BiMenuAltRight className="text-3xl" />
            )}
          </button>
        </div>
      </div>
      
      {/* Menu Mobile */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-luxury-black-dark border-t border-silver-800 mt-2"
          >
            <div className="container mx-auto px-6 py-6">
              <nav className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`font-medium text-base py-2 px-4 rounded-md ${
                      location.pathname === link.path
                      ? "bg-ranch-900 text-white"
                      : "text-silver-200 hover:bg-luxury-black-light hover:text-white"
                    } transition-colors duration-300`}
                  >
                    {link.name}
                  </Link>
                ))}
                
                <div className="pt-4 border-t border-silver-800 mt-2 flex flex-col space-y-4">
                  <a
                    href="tel:+18095555555"
                    className="flex items-center text-silver-200 hover:text-white transition-colors duration-300 py-2"
                  >
                    <BiPhoneCall className="mr-2 text-gold-400" />
                    <span>+1 (809) 555-5555</span>
                  </a>
                  
                  <Link
                    to="/contact"
                    className="bg-gradient-gold hover:opacity-90 text-luxury-black px-6 py-3 rounded-md font-medium transition-all duration-300 text-center shadow-gold"
                  >
                    Book Now
                  </Link>
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;