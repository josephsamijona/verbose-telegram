import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FaFacebookF, 
  FaInstagram, 
  FaPinterestP, 
  FaTripadvisor 
} from 'react-icons/fa';
import { BiEnvelope, BiPhone, BiMap } from 'react-icons/bi';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  
  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      // Simulation d'une soumission réussie pour le MVP
      setSubscribed(true);
      setEmail('');
      
      // Réinitialiser l'état après 5 secondes
      setTimeout(() => setSubscribed(false), 5000);
    }
  };
  
  return (
    <footer className="bg-luxury-black text-silver-100">
      {/* Section principale du footer */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Colonne 1: Logo et description */}
          <div className="lg:col-span-1">
            <Link to="/" className="block mb-6">
              <h2 className="text-gold-400 font-serif text-3xl">Hacienda Caribe</h2>
              <span className="text-silver-300 text-sm font-medium tracking-wider">LUXURY RANCH ESTATE</span>
            </Link>
            
            <p className="text-silver-300 mb-6">
              Experience unparalleled luxury in the heart of the Dominican Republic. Our exclusive ranch combines Caribbean elegance with world-class amenities.
            </p>
            
            {/* Réseaux sociaux */}
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-ranch-900 bg-opacity-50 flex items-center justify-center text-silver-200 hover:bg-ranch-500 hover:text-white transition-colors duration-300">
                <FaFacebookF />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-ranch-900 bg-opacity-50 flex items-center justify-center text-silver-200 hover:bg-ranch-500 hover:text-white transition-colors duration-300">
                <FaInstagram />
              </a>
              <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-ranch-900 bg-opacity-50 flex items-center justify-center text-silver-200 hover:bg-ranch-500 hover:text-white transition-colors duration-300">
                <FaPinterestP />
              </a>
              <a href="https://tripadvisor.com" target="_blank" rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-ranch-900 bg-opacity-50 flex items-center justify-center text-silver-200 hover:bg-ranch-500 hover:text-white transition-colors duration-300">
                <FaTripadvisor />
              </a>
            </div>
          </div>
          
          {/* Colonne 2: Navigation */}
          <div className="lg:col-span-1">
            <h3 className="text-white font-serif text-xl mb-6 pb-2 border-b border-ranch-400 inline-block">
              Explore
            </h3>
            
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-silver-300 hover:text-gold-300 transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/properties" className="text-silver-300 hover:text-gold-300 transition-colors duration-300">
                  Properties
                </Link>
              </li>
              <li>
                <Link to="/explore" className="text-silver-300 hover:text-gold-300 transition-colors duration-300">
                  Our Location
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-silver-300 hover:text-gold-300 transition-colors duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-silver-300 hover:text-gold-300 transition-colors duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Colonne 3: Contact */}
          <div className="lg:col-span-1">
            <h3 className="text-white font-serif text-xl mb-6 pb-2 border-b border-ranch-400 inline-block">
              Contact Us
            </h3>
            
            <ul className="space-y-4">
              <li className="flex items-start">
                <BiMap className="text-gold-400 text-xl mt-1 mr-3" />
                <span className="text-silver-300">
                  Carretera La Romana-Higuey Km 10<br />
                  La Romana, Dominican Republic
                </span>
              </li>
              <li className="flex items-center">
                <BiPhone className="text-gold-400 text-xl mr-3" />
                <a href="tel:+18095555555" className="text-silver-300 hover:text-white transition-colors duration-300">
                  +1 (809) 555-5555
                </a>
              </li>
              <li className="flex items-center">
                <BiEnvelope className="text-gold-400 text-xl mr-3" />
                <a href="mailto:info@haciendacaribe.com" className="text-silver-300 hover:text-white transition-colors duration-300">
                  info@haciendacaribe.com
                </a>
              </li>
            </ul>
          </div>
          
          {/* Colonne 4: Newsletter */}
          <div className="lg:col-span-1">
            <h3 className="text-white font-serif text-xl mb-6 pb-2 border-b border-ranch-400 inline-block">
              Newsletter
            </h3>
            
            <p className="text-silver-300 mb-4">
              Subscribe to receive exclusive offers and updates from our luxury ranch.
            </p>
            
            {!subscribed ? (
              <form onSubmit={handleSubscribe} className="space-y-3">
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-4 py-3 bg-luxury-black-light border border-silver-700 rounded-md focus:outline-none focus:border-ranch-400 text-white"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <motion.button
                  type="submit"
                  className="w-full px-4 py-3 bg-gradient-gold text-luxury-black font-medium rounded-md hover:opacity-90 transition-opacity duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Subscribe
                </motion.button>
              </form>
            ) : (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-ranch-900 border border-ranch-400 text-white p-4 rounded-md"
              >
                <p className="font-medium">Thank you for subscribing!</p>
                <p className="text-sm text-silver-300 mt-1">You'll receive our exclusive offers soon.</p>
              </motion.div>
            )}
          </div>
        </div>
      </div>
      
      {/* Section de copyright */}
      <div className="bg-luxury-black-dark border-t border-silver-800">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-silver-400 text-sm text-center md:text-left">
              &copy; {new Date().getFullYear()} Hacienda Caribe. All rights reserved.
            </p>
            
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-silver-400 hover:text-silver-300 text-sm transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-silver-400 hover:text-silver-300 text-sm transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-silver-400 hover:text-silver-300 text-sm transition-colors duration-300">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;