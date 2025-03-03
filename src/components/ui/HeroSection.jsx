import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BiSearch, BiCalendar, BiUser } from 'react-icons/bi';

const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [guests, setGuests] = useState(2);
  
  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden">
      {/* Image d'arrière-plan */}
      <div className="absolute inset-0 w-full h-full z-0">
        <img 
          src="https://source.unsplash.com/random/1920x1080/?dominican,ranch,luxury,tropical" 
          alt="Luxury Dominican Ranch" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-luxury-black bg-opacity-40 z-10"></div>
      </div>
      
      {/* Contenu */}
      <div className="relative z-20 container mx-auto px-6 h-full flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl"
        >
          <h1 className="text-white font-serif text-4xl md:text-5xl lg:text-6xl leading-tight mb-4">
            Experience Extraordinary Living in the Caribbean Paradise
          </h1>
          
          <p className="text-silver-100 text-lg md:text-xl mb-8 max-w-2xl">
            Discover our exclusive luxury ranch in the pristine landscapes of the Dominican Republic, where Caribbean elegance meets unparalleled natural beauty.
          </p>
          
          {/* Barre de recherche */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-white rounded-lg shadow-premium p-2 md:p-4 mt-8 w-full max-w-3xl"
          >
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="flex items-center border-b border-silver-200 pb-2">
                  <BiSearch className="text-ranch-400 text-xl mr-2" />
                  <input
                    type="text"
                    placeholder="Search for villas, experiences, or amenities..."
                    className="w-full focus:outline-none text-luxury-black placeholder-silver-400"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
              
              <div className="flex md:w-auto gap-4">
                <div className="flex items-center border-b border-silver-200 pb-2">
                  <BiCalendar className="text-ranch-400 text-xl mr-2" />
                  <select className="bg-transparent focus:outline-none text-luxury-black">
                    <option value="">Any dates</option>
                    <option value="april">April 2025</option>
                    <option value="may">May 2025</option>
                    <option value="june">June 2025</option>
                  </select>
                </div>
                
                <div className="flex items-center border-b border-silver-200 pb-2">
                  <BiUser className="text-ranch-400 text-xl mr-2" />
                  <select 
                    className="bg-transparent focus:outline-none text-luxury-black"
                    value={guests}
                    onChange={(e) => setGuests(Number(e.target.value))}
                  >
                    <option value="1">1 Guest</option>
                    <option value="2">2 Guests</option>
                    <option value="3">3 Guests</option>
                    <option value="4">4 Guests</option>
                    <option value="5">5+ Guests</option>
                  </select>
                </div>
                
                <button className="bg-ranch-400 hover:bg-ranch-500 text-white py-2 px-6 rounded-md transition-colors duration-300 whitespace-nowrap font-medium">
                  Search
                </button>
              </div>
            </div>
          </motion.div>
          
          {/* Tags premium */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-wrap gap-3 mt-6"
          >
            <span className="bg-white bg-opacity-20 backdrop-blur-sm text-white text-sm py-1 px-4 rounded-full">
              Oceanfront Villas
            </span>
            <span className="bg-white bg-opacity-20 backdrop-blur-sm text-white text-sm py-1 px-4 rounded-full">
              Equestrian Facilities
            </span>
            <span className="bg-white bg-opacity-20 backdrop-blur-sm text-white text-sm py-1 px-4 rounded-full">
              Private Beaches
            </span>
            <span className="bg-gold-500 bg-opacity-90 text-luxury-black text-sm py-1 px-4 rounded-full font-medium">
              Exclusive Offers
            </span>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Défilement indicateur */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2, repeat: Infinity, repeatType: "reverse" }}
      >
        <div className="flex flex-col items-center">
          <span className="text-white text-sm mb-2">Explore More</span>
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <motion.div 
              className="w-1.5 h-3 bg-white rounded-full mt-2"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;