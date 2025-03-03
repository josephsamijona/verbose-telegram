import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  BiArea, 
  BiHome, 
  BiBath, 
  BiBed, 
  BiMap, 
  BiCalendar, 
  BiCheck,
  BiChevronLeft,
  BiChevronRight,
  BiSolidHeart,
  BiEnvelope,
  BiPhone,
  BiStar
} from 'react-icons/bi';

import Button from '../components/ui/Button';
import PropertyCard from '../components/ui/PropertyCard';

// Données mockées pour la démo
const propertyData = {
  1: {
    id: 1,
    name: 'Villa Palmera',
    description: 'An exquisite oceanfront estate offering breathtaking Caribbean views and unparalleled luxury living. This masterpiece of Dominican architecture combines traditional elements with modern design to create a truly extraordinary residence.',
    longDescription: 'Nestled on the pristine shores of La Romana, Villa Palmera represents the pinnacle of luxury Caribbean living. This exceptional estate spans over 12 acres of meticulously landscaped grounds with direct access to a private beach cove.\n\nThe main residence features five luxurious bedroom suites, each offering panoramic ocean views and private terraces. The grand living spaces include a formal dining room, gourmet kitchen with premium appliances, and an expansive great room with soaring ceilings and walls of glass that frame the magnificent seascape.\n\nThe outdoor spaces are equally impressive, featuring an infinity-edge pool that appears to merge with the Caribbean Sea, multiple covered terraces for dining and entertaining, and lush tropical gardens designed by a renowned landscape architect.\n\nAdditional amenities include a private tennis court, fully equipped fitness center, wine cellar, and separate guest villa for visitors. The estate also includes staff quarters and a 4-car garage.',
    price: 3500000,
    status: 'For Sale',
    location: 'Oceanfront, La Romana, Dominican Republic',
    area: 12, // acres
    bedrooms: 5,
    bathrooms: 6,
    built: 2018,
    garage: 4,
    tags: ['Oceanfront', 'Private Beach', 'Infinity Pool', 'Tennis Court'],
    images: [
      'https://source.unsplash.com/random/1200x800/?luxury,villa,caribbean,1',
      'https://source.unsplash.com/random/1200x800/?luxury,villa,pool,2',
      'https://source.unsplash.com/random/1200x800/?luxury,bedroom,3',
      'https://source.unsplash.com/random/1200x800/?luxury,kitchen,4',
      'https://source.unsplash.com/random/1200x800/?luxury,bathroom,5',
      'https://source.unsplash.com/random/1200x800/?garden,tropical,6'
    ],
    features: [
      'Private beach access',
      'Infinity pool overlooking the Caribbean',
      'Outdoor entertaining areas',
      'Gourmet kitchen with premium appliances',
      'Primary suite with ocean view terrace',
      'Private tennis court',
      'Fitness center',
      'Wine cellar',
      'Separate guest villa',
      'Smart home technology',
      'Staff quarters',
      'Landscaped tropical gardens',
      '4-car garage'
    ],
    mapLocation: {
      lat: 18.4273,
      lng: -68.9732,
      address: 'La Romana, Dominican Republic',
      nearby: [
        { name: 'La Romana Airport', distance: '15 minutes' },
        { name: 'Casa de Campo', distance: '10 minutes' },
        { name: 'Altos de Chavón', distance: '20 minutes' },
        { name: 'Saona Island Boat Access', distance: '25 minutes' }
      ]
    },
    agent: {
      name: 'Isabella Rodríguez',
      title: 'Senior Estate Specialist',
      phone: '+1 (809) 555-7890',
      email: 'isabella@haciendacaribe.com',
      image: 'https://source.unsplash.com/random/300x300/?woman,professional,realtor'
    }
  },
  2: {
    id: 2,
    name: 'Hacienda del Mar',
    description: 'A magnificent beachfront estate in Punta Cana offering luxurious living spaces, direct beach access, and world-class amenities.',
    price: 4200000,
    location: 'Beachfront, Punta Cana, Dominican Republic',
    area: 20,
    bedrooms: 6,
    bathrooms: 7,
    images: ['https://source.unsplash.com/random/1200x800/?hacienda,luxury,beach']
  },
  3: {
    id: 3,
    name: 'Casa del Cielo',
    description: 'An elegant hillside retreat with stunning ocean views, lush gardens, and sophisticated living spaces.',
    price: 2800000,
    location: 'Hillside, La Romana, Dominican Republic',
    area: 8,
    bedrooms: 4,
    bathrooms: 4.5,
    images: ['https://source.unsplash.com/random/1200x800/?villa,pool,tropical']
  }
};

// Propriétés similaires
const similarProperties = [2, 3].map(id => ({
  id,
  name: propertyData[id].name,
  location: propertyData[id].location,
  price: propertyData[id].price,
  image: propertyData[id].images[0],
  bedrooms: propertyData[id].bedrooms,
  bathrooms: propertyData[id].bathrooms,
  area: propertyData[id].area,
  region: propertyData[id].location.split(',')[1].trim()
}));

const PropertyDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeImage, setActiveImage] = useState(0);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: 'I\'m interested in learning more about this property.'
  });
  
  // Simuler le chargement des données
  useEffect(() => {
    setLoading(true);
    
    // Simuler une requête API
    setTimeout(() => {
      const propertyId = parseInt(id);
      
      if (propertyData[propertyId]) {
        setProperty(propertyData[propertyId]);
        setLoading(false);
      } else {
        // Rediriger vers la page 404 si la propriété n'existe pas
        navigate('/not-found');
      }
    }, 500);
  }, [id, navigate]);
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContactForm(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Simuler l'envoi du formulaire
    alert('Thank you for your interest! An agent will contact you shortly.');
    
    // Réinitialiser le formulaire
    setContactForm({
      name: '',
      email: '',
      phone: '',
      message: 'I\'m interested in learning more about this property.'
    });
  };
  
  // Naviguer dans la galerie d'images
  const nextImage = () => {
    setActiveImage((prev) => (prev + 1) % property.images.length);
  };
  
  const prevImage = () => {
    setActiveImage((prev) => (prev - 1 + property.images.length) % property.images.length);
  };
  
  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-silver-50">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-ranch-300 border-t-ranch-500 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-silver-700">Loading property details...</p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="bg-silver-50 pb-20">
      {/* Back Button */}
      <div className="container mx-auto px-6 pt-28 pb-6">
        <Link 
          to="/properties" 
          className="inline-flex items-center text-ranch-600 hover:text-ranch-700 font-medium"
        >
          <BiChevronLeft className="text-xl mr-1" /> Back to Properties
        </Link>
      </div>
      
      {/* Property Gallery */}
      <section className="bg-luxury-black mb-10">
        <div className="container mx-auto px-6">
          <div className="relative h-[60vh] min-h-[500px]">
            <motion.img 
              key={activeImage}
              src={property.images[activeImage]} 
              alt={`${property.name} - Image ${activeImage + 1}`} 
              className="w-full h-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
            
            {/* Navigation arrows */}
            <button 
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white bg-opacity-80 rounded-full flex items-center justify-center focus:outline-none hover:bg-opacity-100 transition-all duration-300"
              aria-label="Previous image"
            >
              <BiChevronLeft className="text-2xl text-luxury-black" />
            </button>
            
            <button 
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white bg-opacity-80 rounded-full flex items-center justify-center focus:outline-none hover:bg-opacity-100 transition-all duration-300"
              aria-label="Next image"
            >
              <BiChevronRight className="text-2xl text-luxury-black" />
            </button>
            
            {/* Image counter */}
            <div className="absolute bottom-4 right-4 bg-luxury-black bg-opacity-70 text-white px-4 py-2 rounded-full text-sm">
              {activeImage + 1} / {property.images.length}
            </div>
            
            {/* Favorite button */}
            <button 
              className="absolute top-4 right-4 w-12 h-12 bg-white bg-opacity-80 rounded-full flex items-center justify-center focus:outline-none hover:bg-opacity-100 transition-all duration-300"
              aria-label="Add to favorites"
            >
              <BiSolidHeart className="text-2xl text-gold-500" />
            </button>
          </div>
          
          {/* Thumbnails */}
          <div className="flex overflow-x-auto py-4 gap-2 scrollbar-hide">
            {property.images.map((image, index) => (
              <button 
                key={index}
                onClick={() => setActiveImage(index)}
                className={`flex-shrink-0 w-24 h-16 rounded overflow-hidden ${index === activeImage ? 'ring-2 ring-gold-500' : 'opacity-70'}`}
              >
                <img 
                  src={image} 
                  alt={`Thumbnail ${index + 1}`} 
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </section>
      
      {/* Property Info */}
      <section className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-lg shadow-premium-soft p-8 mb-10">
              {/* Header */}
              <div className="mb-6 pb-6 border-b border-silver-200">
                <div className="flex flex-wrap justify-between items-start gap-4">
                  <div>
                    <h1 className="font-serif text-3xl md:text-4xl text-luxury-black mb-2">{property.name}</h1>
                    <div className="flex items-center text-silver-600 mb-4">
                      <BiMap className="mr-1" />
                      <span>{property.location}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {property.tags && property.tags.map((tag, index) => (
                        <span key={index} className="bg-ranch-50 text-ranch-600 px-3 py-1 rounded-full text-sm font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="text-lg font-medium text-luxury-black">
                      <span className="text-xl md:text-2xl font-serif">${property.price.toLocaleString()}</span>
                    </div>
                    <div className="text-silver-500 text-sm">{property.status || 'For Sale'}</div>
                  </div>
                </div>
              </div>
              
              {/* Key Details */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
                <div className="text-center">
                  <div className="flex justify-center text-ranch-400 mb-2">
                    <BiHome className="text-3xl" />
                  </div>
                  <div className="text-sm text-silver-500">Area</div>
                  <div className="font-medium text-luxury-black">{property.area} acres</div>
                </div>
                
                <div className="text-center">
                  <div className="flex justify-center text-ranch-400 mb-2">
                    <BiBed className="text-3xl" />
                  </div>
                  <div className="text-sm text-silver-500">Bedrooms</div>
                  <div className="font-medium text-luxury-black">{property.bedrooms}</div>
                </div>
                
                <div className="text-center">
                  <div className="flex justify-center text-ranch-400 mb-2">
                    <BiBath className="text-3xl" />
                  </div>
                  <div className="text-sm text-silver-500">Bathrooms</div>
                  <div className="font-medium text-luxury-black">{property.bathrooms}</div>
                </div>
                
                <div className="text-center">
                  <div className="flex justify-center text-ranch-400 mb-2">
                    <BiCalendar className="text-3xl" />
                  </div>
                  <div className="text-sm text-silver-500">Year Built</div>
                  <div className="font-medium text-luxury-black">{property.built}</div>
                </div>
              </div>
              
              {/* Description */}
              <div className="mb-10">
                <h2 className="text-2xl font-serif text-luxury-black mb-4">Description</h2>
                <p className="text-silver-700 mb-4">{property.description}</p>
                {property.longDescription && property.longDescription.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-silver-700 mb-4">{paragraph}</p>
                ))}
              </div>
              
              {/* Features List */}
              <div>
                <h2 className="text-2xl font-serif text-luxury-black mb-4">Property Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4">
                  {property.features && property.features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <div className="mt-1 mr-3 text-ranch-400">
                        <BiCheck className="text-xl" />
                      </div>
                      <span className="text-silver-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Location Section */}
            <div className="bg-white rounded-lg shadow-premium-soft p-8 mb-10">
              <h2 className="text-2xl font-serif text-luxury-black mb-4">Location</h2>
              
              {/* Map Placeholder (In a real app, replace with an actual map) */}
              <div className="w-full h-80 bg-silver-200 mb-8 rounded-lg overflow-hidden relative">
                <img 
                  src="https://source.unsplash.com/random/1200x800/?map,dominican" 
                  alt="Map location" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white p-4 rounded-lg shadow-lg">
                    <p className="font-serif text-luxury-black">{property.mapLocation?.address}</p>
                  </div>
                </div>
              </div>
              
              {/* Nearby Places */}
              {property.mapLocation?.nearby && (
                <div>
                  <h3 className="text-xl font-serif text-luxury-black mb-3">Nearby Landmarks</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {property.mapLocation.nearby.map((place, index) => (
                      <div key={index} className="flex items-start">
                        <div className="mt-1 mr-3 text-gold-500">
                          <BiMap className="text-xl" />
                        </div>
                        <div>
                          <span className="block text-luxury-black font-medium">{place.name}</span>
                          <span className="text-silver-600 text-sm">{place.distance}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="lg:w-1/3">
            {/* Agent Card */}
            <div className="bg-white rounded-lg shadow-premium-soft p-6 mb-8">
              <div className="flex items-center mb-4">
                <div className="w-20 h-20 rounded-full overflow-hidden mr-4">
                  <img 
                    src={property.agent?.image} 
                    alt={property.agent?.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-medium text-luxury-black text-lg">{property.agent?.name}</h3>
                  <p className="text-ranch-500">{property.agent?.title}</p>
                  <div className="flex text-gold-500 mt-1">
                    <BiStar />
                    <BiStar />
                    <BiStar />
                    <BiStar />
                    <BiStar />
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col space-y-3 mb-4">
                <a 
                  href={`tel:${property.agent?.phone}`} 
                  className="flex items-center text-silver-700 hover:text-ranch-500 transition-colors duration-300"
                >
                  <BiPhone className="mr-2 text-ranch-400" />
                  {property.agent?.phone}
                </a>
                <a 
                  href={`mailto:${property.agent?.email}`} 
                  className="flex items-center text-silver-700 hover:text-ranch-500 transition-colors duration-300"
                >
                  <BiEnvelope className="mr-2 text-ranch-400" />
                  {property.agent?.email}
                </a>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-premium-soft p-6 mb-8">
              <h3 className="text-xl font-serif text-luxury-black mb-4">Inquire About This Property</h3>
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-silver-700 mb-1 text-sm">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={contactForm.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-silver-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ranch-400 focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-silver-700 mb-1 text-sm">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={contactForm.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-silver-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ranch-400 focus:border-transparent"
                    placeholder="Your email"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-silver-700 mb-1 text-sm">Phone (optional)</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={contactForm.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-silver-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ranch-400 focus:border-transparent"
                    placeholder="Your phone number"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-silver-700 mb-1 text-sm">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={contactForm.message}
                    onChange={handleInputChange}
                    rows="4"
                    className="w-full px-4 py-2 border border-silver-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ranch-400 focus:border-transparent"
                    placeholder="Your message"
                  ></textarea>
                </div>
                
                <div>
                  <button
                    type="submit"
                    className="w-full py-3 bg-gradient-gold text-luxury-black rounded-md font-medium shadow-gold hover:opacity-90 transition-opacity duration-300"
                  >
                    Send Inquiry
                  </button>
                </div>
              </form>
            </div>
            
            {/* Schedule Visit */}
            <div className="bg-ranch-50 border border-ranch-100 rounded-lg p-6">
              <h3 className="text-xl font-serif text-luxury-black mb-2">Schedule a Visit</h3>
              <p className="text-silver-700 mb-4">Experience this magnificent property in person with a private tour.</p>
              <Link 
                to="/contact" 
                className="block w-full py-3 bg-ranch-400 text-white text-center rounded-md font-medium hover:bg-ranch-500 transition-colors duration-300"
              >
                Book a Viewing
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Similar Properties */}
      <section className="container mx-auto px-6 mt-16">
        <div className="mb-10">
          <h2 className="section-title">Similar Properties</h2>
          <p className="text-silver-700">
            Explore other exceptional estates that may interest you.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {similarProperties.map((property, index) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <PropertyCard property={property} />
            </motion.div>
          ))}
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex items-center justify-center h-full bg-white rounded-lg shadow-premium-soft p-8"
          >
            <div className="text-center">
              <h3 className="text-xl font-serif text-luxury-black mb-4">Looking for More Options?</h3>
              <p className="text-silver-600 mb-6">Discover our full collection of exclusive properties.</p>
              <Link 
                to="/properties" 
                className="inline-block px-6 py-3 bg-ranch-400 text-white rounded-md font-medium hover:bg-ranch-500 transition-colors duration-300"
              >
                View All Properties
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PropertyDetail;