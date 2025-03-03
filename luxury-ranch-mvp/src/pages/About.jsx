import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BiTrophy, BiLeaf, BiHeart, BiWorld } from 'react-icons/bi';

const About = () => {
  return (
    <div className="bg-silver-50">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <img 
            src="https://source.unsplash.com/random/1920x1080/?dominican,ranch,luxury,estate" 
            alt="Hacienda Caribe" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-luxury-black bg-opacity-50"></div>
        </div>
        
        <div className="relative h-full container mx-auto px-6 flex flex-col justify-center items-center text-center">
          <motion.h1 
            className="text-white font-serif text-4xl md:text-5xl lg:text-6xl mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our Story
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
            Discover the vision and passion behind the Caribbean's most exclusive luxury ranch estate
          </motion.p>
        </div>
      </section>

      {/* Our History Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div 
              className="md:w-1/2"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title">Our Legacy of Luxury</h2>
              <p className="mb-6 text-silver-700">
                Founded in 2012 by the Montero family, Hacienda Caribe represents the culmination of a lifelong dream to create an unparalleled luxury destination in the heart of the Dominican Republic. What began as a private family estate has evolved into an exclusive retreat that celebrates the extraordinary natural beauty of the Caribbean.
              </p>
              <p className="mb-6 text-silver-700">
                Our 350-acre property combines traditional Dominican architecture with contemporary luxury, creating a harmonious blend that respects local heritage while offering world-class amenities. From our humble beginnings as a single villa, we have grown to become the premier luxury ranch estate in the region.
              </p>
              <p className="text-silver-700">
                Today, Hacienda Caribe stands as a testament to exceptional craftsmanship, meticulous attention to detail, and our unwavering commitment to providing an unforgettable experience for our distinguished guests.
              </p>
            </motion.div>
            
            <motion.div 
              className="md:w-1/2 h-full"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-2 gap-4 h-full">
                <div className="space-y-4">
                  <div className="overflow-hidden rounded-lg h-64">
                    <img 
                      src="https://source.unsplash.com/random/600x800/?dominican,hacienda,luxury" 
                      alt="Hacienda History" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="overflow-hidden rounded-lg h-40">
                    <img 
                      src="https://source.unsplash.com/random/600x400/?dominican,architecture,colonial" 
                      alt="Dominican Architecture" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="overflow-hidden rounded-lg h-40">
                    <img 
                      src="https://source.unsplash.com/random/600x400/?caribbean,estate,tropical" 
                      alt="Caribbean Estate" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="overflow-hidden rounded-lg h-64">
                    <img 
                      src="https://source.unsplash.com/random/600x800/?luxury,villa,pool" 
                      alt="Luxury Villa" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-silver-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-luxury-black mb-6">Our Core Values</h2>
            <div className="h-1 w-24 bg-gold-500 mx-auto mb-6"></div>
            <p className="max-w-3xl mx-auto text-silver-700">
              At Hacienda Caribe, our commitment to excellence is guided by a set of core values that inform every aspect of our service and experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <BiTrophy className="text-5xl text-ranch-400" />,
                title: "Excellence",
                description: "We are committed to providing exceptional service and experiences that exceed expectations in every detail."
              },
              {
                icon: <BiLeaf className="text-5xl text-ranch-400" />,
                title: "Sustainability",
                description: "We honor and protect the natural beauty of our Dominican landscape through sustainable practices."
              },
              {
                icon: <BiHeart className="text-5xl text-ranch-400" />,
                title: "Authenticity",
                description: "We celebrate and share the rich cultural heritage and traditions of the Dominican Republic."
              },
              {
                icon: <BiWorld className="text-5xl text-ranch-400" />,
                title: "Exclusivity",
                description: "We create private, personalized experiences tailored to the unique preferences of our guests."
              }
            ].map((value, index) => (
              <motion.div 
                key={index}
                className="bg-white p-8 rounded-lg shadow-premium-soft text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="mb-4 flex justify-center">{value.icon}</div>
                <h3 className="text-xl font-serif text-luxury-black mb-3">{value.title}</h3>
                <p className="text-silver-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-luxury-black mb-6">Meet Our Team</h2>
            <div className="h-1 w-24 bg-gold-500 mx-auto mb-6"></div>
            <p className="max-w-3xl mx-auto text-silver-700">
              The exceptional individuals behind Hacienda Caribe bring decades of experience in luxury hospitality to create unforgettable experiences.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                name: "Miguel Montero",
                title: "Founder & CEO",
                image: "https://source.unsplash.com/random/300x300/?executive,man,formal",
                bio: "With over 30 years in luxury hospitality, Miguel founded Hacienda Caribe to showcase the natural beauty of his homeland combined with world-class luxury."
              },
              {
                name: "Isabella Rodriguez",
                title: "Director of Guest Experiences",
                image: "https://source.unsplash.com/random/300x300/?executive,woman,formal",
                bio: "Isabella brings her impeccable taste and attention to detail to create bespoke experiences that highlight the finest aspects of Dominican culture and luxury."
              },
              {
                name: "Rafael Torres",
                title: "Estate Manager",
                image: "https://source.unsplash.com/random/300x300/?manager,man,caribbean",
                bio: "A native of La Romana, Rafael oversees all aspects of the property, ensuring that each villa and amenity meets our exacting standards of excellence."
              }
            ].map((member, index) => (
              <motion.div 
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative mb-6 mx-auto w-56 h-56 rounded-full overflow-hidden shadow-lg">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-serif text-luxury-black mb-1">{member.name}</h3>
                <p className="text-gold-500 font-medium mb-4">{member.title}</p>
                <p className="text-silver-600 max-w-sm mx-auto">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Recognition Section */}
      <section className="py-20 bg-luxury-black text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif mb-6">Recognition & Awards</h2>
            <div className="h-1 w-24 bg-gold-500 mx-auto mb-6"></div>
            <p className="max-w-3xl mx-auto text-silver-300">
              Our commitment to excellence has been recognized by the most prestigious organizations in luxury travel and hospitality.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                year: "2024",
                award: "Caribbean's Leading Luxury Villa",
                organization: "World Travel Awards"
              },
              {
                year: "2023",
                award: "Five-Star Property",
                organization: "Forbes Travel Guide"
              },
              {
                year: "2022",
                award: "Best of the Best",
                organization: "Condé Nast Traveler"
              },
              {
                year: "2021",
                award: "Ultra-Luxury Property",
                organization: "Luxury Travel Intelligence"
              }
            ].map((award, index) => (
              <motion.div 
                key={index}
                className="bg-luxury-black-light p-8 rounded-lg border border-silver-800"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-gold-400 text-2xl font-serif mb-2">{award.year}</div>
                <h3 className="text-xl font-medium mb-2">{award.award}</h3>
                <p className="text-silver-400">{award.organization}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 w-full h-full z-0">
          <img 
            src="https://source.unsplash.com/random/1920x1080/?luxury,pool,sunset,caribbean" 
            alt="Luxury Experience" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-luxury-black bg-opacity-60"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-serif text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Experience the Extraordinary
          </motion.h2>
          
          <motion.p 
            className="text-silver-200 max-w-2xl mx-auto mb-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Join us at Hacienda Caribe and discover why we are the premier luxury destination in the Dominican Republic. Your extraordinary experience awaits.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link 
              to="/contact" 
              className="bg-gradient-gold text-luxury-black px-8 py-4 rounded-md font-medium text-lg inline-block shadow-gold hover:opacity-90 transition-opacity duration-300"
            >
              Plan Your Visit
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;