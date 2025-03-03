import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BiHomeAlt, BiMap, BiBuildings, BiInfoCircle, BiEnvelope } from 'react-icons/bi';

const NotFound = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };
  
  // Liste des pages principales pour redirection
  const mainPages = [
    { path: '/', label: 'Home', icon: <BiHomeAlt className="text-2xl" /> },
    { path: '/properties', label: 'Properties', icon: <BiBuildings className="text-2xl" /> },
    { path: '/explore', label: 'Explore', icon: <BiMap className="text-2xl" /> },
    { path: '/about', label: 'About Us', icon: <BiInfoCircle className="text-2xl" /> },
    { path: '/contact', label: 'Contact', icon: <BiEnvelope className="text-2xl" /> }
  ];
  
  return (
    <motion.div 
      className="min-h-screen bg-silver-50 flex items-center justify-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container mx-auto px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
              className="inline-block"
              variants={itemVariants}
            >
              <span className="text-9xl font-serif text-ranch-400 opacity-30">404</span>
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-5xl font-serif text-luxury-black mb-6"
              variants={itemVariants}
            >
              Destination Not Found
            </motion.h1>
            
            <motion.div
              className="h-1 w-24 bg-gold-500 mx-auto mb-8"
              variants={itemVariants}
            ></motion.div>
            
            <motion.p 
              className="text-lg text-silver-600 max-w-2xl mx-auto mb-12"
              variants={itemVariants}
            >
              It seems you've ventured off the trail. The page you're looking for might have been relocated or may no longer be available in our exclusive collection.
            </motion.p>
          </div>
          
          <motion.div
            className="bg-white rounded-xl shadow-premium p-8 md:p-12"
            variants={itemVariants}
          >
            <h2 className="text-2xl font-serif text-luxury-black mb-6 text-center">
              Allow us to guide you to your desired destination
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {mainPages.map((page, index) => (
                <Link 
                  key={index}
                  to={page.path}
                  className="flex flex-col items-center justify-center p-6 rounded-lg bg-silver-50 hover:bg-ranch-50 transition-colors duration-300 group"
                >
                  <div className="text-ranch-400 group-hover:text-ranch-500 transition-colors duration-300 mb-3">
                    {page.icon}
                  </div>
                  <span className="font-medium text-luxury-black">{page.label}</span>
                </Link>
              ))}
            </div>
            
            <div className="mt-10 text-center">
              <span className="block text-gold-500 mb-3">Need assistance?</span>
              <Link 
                to="/contact" 
                className="inline-block px-8 py-3 bg-gradient-gold text-luxury-black rounded-md font-medium shadow-gold hover:opacity-90 transition-opacity duration-300"
              >
                Contact Our Concierge
              </Link>
            </div>
          </motion.div>
          
          <motion.div 
            className="mt-12 text-center"
            variants={itemVariants}
          >
            <p className="text-silver-600">
              Return to the <Link to="/" className="text-ranch-500 hover:text-ranch-600 font-medium">homepage</Link> or explore our <Link to="/properties" className="text-ranch-500 hover:text-ranch-600 font-medium">luxury properties</Link>.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default NotFound;