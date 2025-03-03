import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BiBed, BiBath, BiArea, BiMap } from 'react-icons/bi';

const PropertyCard = ({ property, featured = false }) => {
  const { 
    id, 
    name, 
    location, 
    price, 
    image, 
    bedrooms, 
    bathrooms, 
    area, 
    region 
  } = property;

  return (
    <motion.div
      className="property-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      {/* Image avec badge "Featured" si applicable */}
      <div className="relative overflow-hidden h-64">
        <img 
          src={image || `https://source.unsplash.com/random/600x400/?ranch,estate,${region}`} 
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
        />
        
        {featured && (
          <div className="absolute top-4 right-4 z-20">
            <div className="bg-gradient-gold px-4 py-1 rounded-full shadow-gold text-luxury-black font-semibold text-sm flex items-center">
              <span className="animate-pulse-subtle">Featured</span>
            </div>
          </div>
        )}
        
        {/* Prix overlay */}
        <div className="absolute bottom-4 left-4 z-20">
          <div className="bg-white bg-opacity-90 backdrop-blur-sm px-4 py-2 rounded-md shadow-md">
            <span className="font-serif text-luxury-black font-medium text-xl">${price.toLocaleString()}</span>
            {price >= 1000000 && <span className="text-silver-600 ml-1 text-sm">/estate</span>}
            {price < 1000000 && price >= 100000 && <span className="text-silver-600 ml-1 text-sm">/month</span>}
            {price < 100000 && <span className="text-silver-600 ml-1 text-sm">/week</span>}
          </div>
        </div>
      </div>

      {/* Contenu de la carte */}
      <div className="p-6">
        <h3 className="font-serif text-xl text-luxury-black font-medium mb-2 line-clamp-1">{name}</h3>
        
        <div className="flex items-center text-silver-600 mb-4">
          <BiMap className="mr-1" />
          <span className="text-sm">{location}</span>
        </div>

        {/* Caractéristiques */}
        <div className="flex justify-between items-center border-t border-silver-200 pt-4 mt-4">
          <div className="flex items-center text-silver-700">
            <BiBed className="text-lg mr-1" />
            <span className="text-sm">{bedrooms}</span>
          </div>
          
          <div className="flex items-center text-silver-700">
            <BiBath className="text-lg mr-1" />
            <span className="text-sm">{bathrooms}</span>
          </div>
          
          <div className="flex items-center text-silver-700">
            <BiArea className="text-lg mr-1" />
            <span className="text-sm">{area} <span className="text-xs">acres</span></span>
          </div>
        </div>
        
        {/* Bouton de détails */}
        <Link 
          to={`/properties/${id}`}
          className="block w-full text-center mt-6 py-3 px-6 bg-ranch-50 hover:bg-ranch-100 text-ranch-600 transition-colors duration-300 rounded-md font-medium"
        >
          View Details
        </Link>
      </div>
    </motion.div>
  );
};

export default PropertyCard;