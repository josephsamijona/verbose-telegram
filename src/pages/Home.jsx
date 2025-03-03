import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BiChevronRight, BiCheck, BiStar, BiMapAlt } from 'react-icons/bi';

// Import des composants
import HeroSection from '../components/ui/HeroSection';
import PropertyCard from '../components/ui/PropertyCard';
import Button from '../components/ui/Button';

// Données mockées pour la démo
const featuredProperties = [
  {
    id: 1,
    name: 'Villa Palmera',
    location: 'Oceanfront, La Romana',
    price: 3500000,
    image: 'https://source.unsplash.com/random/600x400/?luxury,villa,caribbean',
    bedrooms: 5,
    bathrooms: 6,
    area: 12,
    region: 'La Romana'
  },
  {
    id: 2,
    name: 'Hacienda del Mar',
    location: 'Beachfront, Punta Cana',
    price: 4200000,
    image: 'https://source.unsplash.com/random/600x400/?hacienda,luxury,beach',
    bedrooms: 6,
    bathrooms: 7,
    area: 20,
    region: 'Punta Cana'
  },
  {
    id: 3,
    name: 'Casa del Cielo',
    location: 'Hillside, La Romana',
    price: 2800000,
    image: 'https://source.unsplash.com/random/600x400/?villa,pool,tropical',
    bedrooms: 4,
    bathrooms: 4.5,
    area: 8,
    region: 'La Romana'
  }
];

const regions = [
  {
    name: 'La Romana',
    image: 'https://source.unsplash.com/random/600x400/?dominican,beach,la-romana',
    properties: 12,
    description: 'Home to Hacienda Caribe and pristine beaches'
  },
  {
    name: 'Punta Cana',
    image: 'https://source.unsplash.com/random/600x400/?dominican,beach,punta-cana',
    properties: 8,
    description: 'World-famous beaches and luxury resorts'
  },
  {
    name: 'Saona Island',
    image: 'https://source.unsplash.com/random/600x400/?caribbean,island,beach',
    properties: 5,
    description: 'Secluded paradise accessible by boat'
  }
];

const testimonials = [
  {
    name: 'Alexandra Williams',
    location: 'New York, USA',
    image: 'https://source.unsplash.com/random/100x100/?woman,portrait',
    text: 'Our stay at Hacienda Caribe exceeded all expectations. The property was stunning, and the staffs attention to detail made our family vacation truly magical.',
    rating: 5
  },
  {
    name: 'James & Catherine Miller',
    location: 'London, UK',
    image: 'https://source.unsplash.com/random/100x100/?couple,portrait',
    text: 'A perfect blend of luxury and authentic Dominican culture. We ve traveled extensively throughout the Caribbean, and this estate stands in a class of its own.',
    rating: 5
  },
  {
    name: 'Philippe Laurent',
    location: 'Paris, France',
    image: 'https://source.unsplash.com/random/100x100/?man,portrait',
    text: 'The equestrian facilities are world-class, and the beachfront location is simply breathtaking. Already planning our return for next winter.',
    rating: 5
  }
];

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection />
      
      {/* Intro Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title">Dominican Republic's Premier Luxury Ranch Estate</h2>
              <p className="mb-6 text-silver-700">
                Hacienda Caribe represents the pinnacle of Caribbean luxury living, nestled between the azure waters of the Caribbean Sea and the lush landscapes of La Romana. Our exclusive estates combine traditional Dominican architecture with modern luxury amenities.
              </p>
              <p className="mb-8 text-silver-700">
                Whether you're seeking a permanent residence, a vacation property, or an exceptional investment opportunity, our collection of estates offers unparalleled quality, privacy, and natural beauty.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button to="/properties" variant="primary" size="lg">
                  View Properties
                </Button>
                <Button to="/about" variant="outline" size="lg">
                  Our Story
                </Button>
              </div>
            </motion.div>
            
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <img 
                  src="https://source.unsplash.com/random/800x600/?luxury,ranch,caribbean" 
                  alt="Hacienda Caribe" 
                  className="w-full h-auto rounded-lg shadow-premium"
                />
                <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-lg shadow-premium max-w-xs hidden md:block">
                  <div className="flex items-center text-gold-500 mb-2">
                    <BiStar />
                    <BiStar />
                    <BiStar />
                    <BiStar />
                    <BiStar />
                    <span className="ml-2 text-luxury-black font-medium">5.0/5 Rating</span>
                  </div>
                  <p className="italic text-silver-600">
                    "The most exclusive estate experience in the Caribbean"
                  </p>
                  <p className="text-right text-silver-500 text-sm mt-2">
                    — Luxury Travel Magazine
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Featured Properties */}
      <section className="py-20 bg-silver-50">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="section-title">Featured Properties</h2>
              <p className="text-silver-700 max-w-2xl">
                Discover our handpicked selection of the most extraordinary estates currently available in our exclusive portfolio.
              </p>
            </div>
            <Link 
              to="/properties" 
              className="hidden md:flex items-center text-ranch-500 hover:text-ranch-600 font-medium transition-colors duration-300"
            >
              View all properties <BiChevronRight className="ml-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map((property, index) => (
              <motion.div
                key={property.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <PropertyCard property={property} featured={index === 0} />
              </motion.div>
            ))}
          </div>
          
          <div className="mt-10 text-center md:hidden">
            <Button to="/properties" variant="secondary">
              View All Properties
            </Button>
          </div>
        </div>
      </section>
      
      {/* Luxury Services Section */}
      <section className="py-20 bg-luxury-black text-white">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-serif mb-6">Extraordinary Amenities</h2>
            <div className="h-1 w-24 bg-gold-500 mx-auto mb-6"></div>
            <p className="max-w-3xl mx-auto text-silver-300">
              Hacienda Caribe offers a comprehensive suite of world-class amenities and services designed to enhance your Caribbean lifestyle.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Private Beach Access',
                description: 'Exclusive access to pristine Caribbean beaches with dedicated service and amenities.',
                icon: '🏝️'
              },
              {
                title: 'Equestrian Center',
                description: 'State-of-the-art facilities with expert trainers and magnificent Paso Fino horses.',
                icon: '🐎'
              },
              {
                title: 'Infinity Pools',
                description: 'Stunning oceanfront pools designed to blend seamlessly with the Caribbean horizon.',
                icon: '🏊'
              },
              {
                title: 'Luxury Spa',
                description: 'World-class wellness treatments inspired by traditional Dominican healing practices.',
                icon: '💆'
              },
              {
                title: 'Fine Dining',
                description: 'Gourmet restaurant featuring farm-to-table Caribbean cuisine and international specialties.',
                icon: '🍽️'
              },
              {
                title: 'Concierge Service',
                description: '24/7 personalized service to fulfill any request, from yacht charters to private excursions.',
                icon: '👨‍💼'
              }
            ].map((amenity, index) => (
              <motion.div 
                key={index}
                className="bg-luxury-black-light border border-silver-800 p-8 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl mb-4">{amenity.icon}</div>
                <h3 className="text-xl font-serif mb-3">{amenity.title}</h3>
                <p className="text-silver-400">{amenity.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Explore Regions */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-luxury-black mb-6">Explore Our Regions</h2>
            <div className="h-1 w-24 bg-gold-500 mx-auto mb-6"></div>
            <p className="max-w-3xl mx-auto text-silver-700">
              Discover the diverse landscapes and unique character of the regions where our exclusive estates are located.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {regions.map((region, index) => (
              <motion.div 
                key={index}
                className="group relative h-80 overflow-hidden rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <img 
                  src={region.image} 
                  alt={region.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-black to-transparent opacity-70"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center">
                    <BiMapAlt className="text-gold-400 text-xl mr-2" />
                    <h3 className="text-white font-serif text-xl">{region.name}</h3>
                  </div>
                  <p className="text-silver-200 mt-1 mb-2">{region.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-gold-300 font-medium">{region.properties} Properties</span>
                    <Link 
                      to={`/explore`} 
                      className="text-white hover:text-gold-300 font-medium transition-colors duration-300"
                    >
                      Discover
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button to="/explore" variant="secondary" size="lg">
              Explore All Regions
            </Button>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us */}
      <section className="py-20 bg-silver-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title">Why Choose Hacienda Caribe</h2>
              <p className="mb-8 text-silver-700">
                We have established a reputation for excellence and exclusivity that sets us apart in the luxury real estate market. Our dedication to quality, authenticity, and personalized service ensures an unparalleled experience.
              </p>
              
              <div className="space-y-4">
                {[
                  'Exclusive Caribbean properties in prime locations',
                  'Architectural excellence blending tradition with modern luxury',
                  'Comprehensive property management and concierge services',
                  'Strong investment potential in a growing luxury market',
                  'Sustainable development practices preserving natural beauty'
                ].map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <div className="mt-1 mr-4 bg-ranch-400 text-white p-1 rounded-full">
                      <BiCheck className="text-lg" />
                    </div>
                    <p className="text-silver-700">{feature}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-white p-8 rounded-lg shadow-premium-soft">
                <h3 className="text-2xl font-serif text-luxury-black mb-6 text-center">Our Client Testimonials</h3>
                
                <div className="space-y-8">
                  {testimonials.map((testimonial, index) => (
                    <div key={index} className="border-b border-silver-200 last:border-0 pb-6 last:pb-0">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-medium text-luxury-black">{testimonial.name}</h4>
                          <p className="text-silver-500 text-sm">{testimonial.location}</p>
                        </div>
                        <div className="ml-auto flex text-gold-500">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <BiStar key={i} />
                          ))}
                        </div>
                      </div>
                      <p className="text-silver-600 italic">"{testimonial.text}"</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 w-full h-full z-0">
          <img 
            src="https://source.unsplash.com/random/1920x1080/?luxury,mansion,sunset,dominican" 
            alt="Luxury Estate" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-luxury-black bg-opacity-60"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-serif text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Begin Your Extraordinary Journey
          </motion.h2>
          
          <motion.p 
            className="text-silver-200 max-w-3xl mx-auto mb-10 text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Experience the epitome of luxury Caribbean living. Contact us today to arrange a private viewing of our exclusive properties.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button to="/properties" variant="gold" size="xl">
              Browse Properties
            </Button>
            <Button to="/contact" variant="outline" size="xl" className="text-white border-white hover:bg-white hover:text-luxury-black">
              Contact Us
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;