import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  BiWater, 
  BiSpa, 
  BiDrink, 
  BiSun, 
  BiCloud, 
  BiWind, 
  BiDroplet 
} from 'react-icons/bi';
import { FaGolfBall, FaHorse } from 'react-icons/fa'; // Notez bien 'react-icons/fa' pas 'react-icons/gi'

const Explore = () => {
  const [activeRegion, setActiveRegion] = useState('la-romana');
  
  const regions = {
    'la-romana': {
      name: 'La Romana',
      description: 'Home to Hacienda Caribe, La Romana offers pristine beaches, world-class golf courses, and the charming Altos de Chavón – a recreated 16th-century Mediterranean village perched above the Chavón River.',
      image: 'https://source.unsplash.com/random/1200x800/?dominican,la-romana,beach'
    },
    'punta-cana': {
      name: 'Punta Cana',
      description: 'Just a short drive from our estate, Punta Cana boasts 32 kilometers of white-sand beaches, luxurious resorts, and championship golf courses along the easternmost tip of the Dominican Republic.',
      image: 'https://source.unsplash.com/random/1200x800/?dominican,punta-cana,resort'
    },
    'saona': {
      name: 'Saona Island',
      description: 'This tropical paradise is part of the East National Park and can be reached by boat from Bayahibe. Saona Island features stunning beaches, natural pools, and is perfect for a day excursion from Hacienda Caribe.',
      image: 'https://source.unsplash.com/random/1200x800/?caribbean,island,beach'
    },
    'santo-domingo': {
      name: 'Santo Domingo',
      description: 'The capital city and cultural heart of the Dominican Republic, Santo Domingo\'s Colonial Zone is a UNESCO World Heritage site with historic architecture dating back to the 1500s.',
      image: 'https://source.unsplash.com/random/1200x800/?dominican,santo-domingo,colonial'
    }
  };
  
  return (
    <div className="bg-silver-50">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <img 
            src="https://source.unsplash.com/random/1920x1080/?dominican,tropical,landscape" 
            alt="Dominican Republic Landscape" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-luxury-black bg-opacity-40"></div>
        </div>
        
        <div className="relative h-full container mx-auto px-6 flex flex-col justify-center items-center text-center">
          <motion.h1 
            className="text-white font-serif text-4xl md:text-5xl lg:text-6xl mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Explore the Caribbean Paradise
          </motion.h1>
          <motion.div
            className="h-1 w-24 bg-gold-500 mb-6"
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: 96 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          ></motion.div>
          <motion.p 
            className="text-silver-100 text-lg md:text-xl max-w-3xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Discover the natural beauty and cultural richness of the Dominican Republic from our exclusive location in La Romana
          </motion.p>
        </div>
      </section>

      {/* Destination Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title">Welcome to Paradise</h2>
              <p className="mb-6 text-silver-700">
                Nestled on the southeastern coast of the Dominican Republic, Hacienda Caribe offers an ideal vantage point from which to explore the enchanting Caribbean. Our luxury ranch estate in La Romana provides the perfect balance of seclusion and accessibility to the island's most spectacular destinations.
              </p>
              <p className="mb-6 text-silver-700">
                From pristine beaches and crystal-clear waters to lush tropical forests and historic colonial architecture, the Dominican Republic offers a diverse landscape rich with natural beauty and cultural heritage. Our concierge team can arrange personalized excursions to help you discover the region's hidden gems.
              </p>
              <p className="text-silver-700">
                Whether you seek adventure, relaxation, or cultural immersion, the surrounding areas of Hacienda Caribe provide endless opportunities to create unforgettable memories in one of the Caribbean's most beautiful settings.
              </p>
            </motion.div>
            
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="relative h-[400px] overflow-hidden rounded-lg shadow-premium">
                <img 
                  src="https://source.unsplash.com/random/1000x800/?dominican,beach,aerial" 
                  alt="Dominican Republic Aerial View" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-black to-transparent opacity-60"></div>
                <div className="absolute bottom-0 left-0 p-8">
                  <span className="bg-ranch-400 text-white px-4 py-1 rounded-full text-sm font-medium">7.9 Million Visitors in 2023</span>
                  <h3 className="text-white font-serif text-2xl mt-3">The Dominican Republic</h3>
                  <p className="text-silver-200">Caribbean's most visited destination</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="py-20 bg-silver-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-luxury-black mb-6">Discover Our Region</h2>
            <div className="h-1 w-24 bg-gold-500 mx-auto mb-6"></div>
            <p className="max-w-3xl mx-auto text-silver-700 mb-12">
              Explore the incredible destinations surrounding Hacienda Caribe, each offering unique experiences and natural beauty.
            </p>
            
            {/* Region Selection Buttons */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {Object.keys(regions).map((regionKey) => (
                <button
                  key={regionKey}
                  onClick={() => setActiveRegion(regionKey)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    activeRegion === regionKey
                      ? 'bg-ranch-400 text-white shadow-md'
                      : 'bg-white text-silver-700 hover:bg-silver-100'
                  }`}
                >
                  {regions[regionKey].name}
                </button>
              ))}
            </div>
          </div>
          
          {/* Region Display */}
          <motion.div
            key={activeRegion}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-premium-soft overflow-hidden"
          >
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2">
                <img 
                  src={regions[activeRegion].image} 
                  alt={regions[activeRegion].name} 
                  className="w-full h-full object-cover min-h-[300px]"
                />
              </div>
              <div className="md:w-1/2 p-8 md:p-12">
                <h3 className="text-2xl font-serif text-luxury-black mb-4">{regions[activeRegion].name}</h3>
                <p className="text-silver-700 mb-6">{regions[activeRegion].description}</p>
                
                <div className="mt-8">
                  <Link 
                    to="/contact" 
                    className="inline-block px-6 py-3 bg-gold-500 text-luxury-black rounded-md font-medium hover:bg-gold-600 transition-colors duration-300"
                  >
                    Plan a Visit
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Climate Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-luxury-black mb-6">Caribbean Climate</h2>
            <div className="h-1 w-24 bg-gold-500 mx-auto mb-6"></div>
            <p className="max-w-3xl mx-auto text-silver-700">
              The Dominican Republic enjoys a tropical climate with plenty of sunshine year-round, making it a perfect destination any time of the year.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                season: "Winter (Dec-Feb)",
                temp: "75-85°F / 24-29°C",
                icon: <BiSun className="text-5xl text-gold-500" />,
                description: "Peak tourist season with gorgeous sunny days, low humidity, and minimal rainfall. Perfect for beach activities and outdoor exploration."
              },
              {
                season: "Spring (Mar-May)",
                temp: "77-87°F / 25-31°C",
                icon: <BiCloud className="text-5xl text-ranch-400" />,
                description: "Temperatures begin to rise with occasional afternoon showers. An excellent time to visit with fewer crowds and lush greenery."
              },
              {
                season: "Summer (Jun-Aug)",
                temp: "80-90°F / 27-32°C",
                icon: <BiDroplet className="text-5xl text-ranch-400" />,
                description: "Warmer with higher humidity and brief afternoon showers. Ideal for water activities and enjoying our luxurious pool facilities."
              },
              {
                season: "Fall (Sep-Nov)",
                temp: "78-88°F / 26-31°C",
                icon: <BiWind className="text-5xl text-gold-500" />,
                description: "Hurricane season, though La Romana is often less affected than other regions. Fewer tourists and special seasonal rates available."
              }
            ].map((season, index) => (
              <motion.div 
                key={index}
                className="bg-silver-50 rounded-lg p-8 shadow-premium-soft"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-center mb-6">{season.icon}</div>
                <h3 className="text-xl font-serif text-luxury-black text-center mb-2">{season.season}</h3>
                <p className="text-ranch-500 font-medium text-center mb-4">{season.temp}</p>
                <p className="text-silver-600 text-center">{season.description}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 p-6 bg-gold-50 border border-gold-200 rounded-lg">
            <p className="text-center text-luxury-black">
              <span className="font-medium">Traveler's Tip:</span> For the perfect balance of ideal weather and value, consider visiting in May or November, during our "shoulder seasons."
            </p>
          </div>
        </div>
      </section>

      {/* Experiences Section */}
      <section className="py-20 bg-luxury-black text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif mb-6">Unforgettable Experiences</h2>
            <div className="h-1 w-24 bg-gold-500 mx-auto mb-6"></div>
            <p className="max-w-3xl mx-auto text-silver-300">
              Discover the extraordinary activities and adventures awaiting you at Hacienda Caribe and the surrounding area.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Ocean Adventures",
                icon: <BiWater className="text-4xl text-ranch-400" />,
                description: "Explore vibrant coral reefs, go deep-sea fishing, or enjoy a sunset catamaran cruise along the pristine Caribbean coastline.",
                image: "https://source.unsplash.com/random/600x400/?caribbean,diving,boat"
              },
              {
                title: "Wellness Retreat",
                icon: <BiSpa className="text-4xl text-ranch-400" />,
                description: "Indulge in our luxury spa treatments, beachfront yoga sessions, and meditation experiences designed to rejuvenate body and mind.",
                image: "https://source.unsplash.com/random/600x400/?spa,wellness,massage"
              },
              {
                title: "Golf Paradise",
                icon: <FaGolfBall className="text-4xl text-ranch-400" />,
                description: "Tee off at world-renowned courses including Teeth of the Dog, with breathtaking ocean views and challenging fairways.",
                image: "https://source.unsplash.com/random/600x400/?golf,caribbean,course"
              },
              {
                title: "Equestrian Experiences",
                icon: <FaHorse className="text-4xl text-ranch-400" />,
                description: "Enjoy guided horseback rides along the beach at sunset or through lush tropical forests with our expert equestrian team.",
                image: "https://source.unsplash.com/random/600x400/?horse,beach,riding"
              },
              {
                title: "Culinary Journeys",
                icon: <BiDrink className="text-4xl text-ranch-400" />,
                description: "Savor authentic Dominican cuisine, take part in cooking classes, or embark on a rum tasting tour showcasing local flavors.",
                image: "https://source.unsplash.com/random/600x400/?caribbean,food,dining"
              },
              {
                title: "Cultural Excursions",
                icon: <BiSun className="text-4xl text-ranch-400" />,
                description: "Visit Altos de Chavón, explore colonial Santo Domingo, or immerse yourself in local music and art through curated experiences.",
                image: "https://source.unsplash.com/random/600x400/?dominican,culture,colonial"
              }
            ].map((experience, index) => (
              <motion.div 
                key={index}
                className="group relative overflow-hidden rounded-lg h-[350px]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <img 
                  src={experience.image} 
                  alt={experience.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-black to-transparent opacity-90"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center mb-3">
                    {experience.icon}
                    <h3 className="ml-3 text-xl font-medium">{experience.title}</h3>
                  </div>
                  <p className="text-silver-300 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {experience.description}
                  </p>
                  <a 
                    href="#" 
                    className="inline-block text-gold-400 font-medium hover:text-gold-300 transition-colors duration-300"
                  >
                    Learn more
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 w-full h-full z-0">
          <img 
            src="https://source.unsplash.com/random/1920x1080/?dominican,sunset,beach" 
            alt="Dominican Republic Sunset" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-luxury-black bg-opacity-50"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white bg-opacity-10 backdrop-blur-md p-10 rounded-lg max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">Ready to Explore Paradise?</h2>
            <p className="text-silver-200 mb-8">
              Let us customize the perfect Dominican experience for you at Hacienda Caribe. Our concierge team will tailor every detail to your preferences.
            </p>
            <Link 
              to="/contact" 
              className="bg-gradient-gold text-luxury-black px-8 py-4 rounded-md font-medium text-lg inline-block shadow-gold hover:opacity-90 transition-opacity duration-300"
            >
              Plan Your Adventure
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Explore;