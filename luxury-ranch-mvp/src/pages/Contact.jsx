import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BiEnvelope, BiPhone, BiMap, BiCheckCircle, BiTime } from 'react-icons/bi';
import { FaFacebookF, FaInstagram, FaTripadvisor } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: '',
    preferredContact: 'email'
  });
  
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simuler un envoi pour le MVP
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      
      // Réinitialiser après 5 secondes
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: 'General Inquiry',
          message: '',
          preferredContact: 'email'
        });
      }, 5000);
    }, 1500);
  };
  
  return (
    <div className="bg-silver-50">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <img 
            src="https://source.unsplash.com/random/1920x1080/?dominican,reception,luxury" 
            alt="Contact Hacienda Caribe" 
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
            Contact Us
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
            Reach out to our dedicated team to begin planning your extraordinary Caribbean experience
          </motion.p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16">
            {/* Form Side */}
            <motion.div 
              className="lg:w-7/12"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title">Get in Touch</h2>
              <p className="mb-8 text-silver-700">
                We're here to answer any questions you may have about our properties, services, or experiences. Please fill out the form below and our team will respond promptly.
              </p>
              
              {submitted ? (
                <motion.div
                  className="bg-ranch-50 border border-ranch-200 rounded-lg p-8 text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-ranch-500 text-5xl mb-4 flex justify-center">
                    <BiCheckCircle />
                  </div>
                  <h3 className="text-2xl font-serif text-luxury-black mb-3">Thank You!</h3>
                  <p className="text-silver-700 mb-4">
                    Your message has been sent successfully. A member of our team will contact you shortly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-silver-700 mb-2 font-medium">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-silver-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ranch-400 focus:border-transparent"
                        placeholder="John Smith"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-silver-700 mb-2 font-medium">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-silver-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ranch-400 focus:border-transparent"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-silver-700 mb-2 font-medium">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-silver-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ranch-400 focus:border-transparent"
                        placeholder="+1 (123) 456-7890"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-silver-700 mb-2 font-medium">Subject</label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-silver-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ranch-400 focus:border-transparent"
                      >
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Reservation Request">Reservation Request</option>
                        <option value="Property Information">Property Information</option>
                        <option value="Special Event">Special Event</option>
                        <option value="Feedback">Feedback</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-silver-700 mb-2 font-medium">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-silver-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ranch-400 focus:border-transparent"
                      placeholder="Please provide details about your inquiry..."
                    ></textarea>
                  </div>
                  
                  <div>
                    <p className="block text-silver-700 mb-2 font-medium">Preferred Contact Method</p>
                    <div className="flex space-x-6">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="preferredContact"
                          value="email"
                          checked={formData.preferredContact === 'email'}
                          onChange={handleChange}
                          className="mr-2 text-ranch-400 focus:ring-ranch-400"
                        />
                        <span>Email</span>
                      </label>
                      
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="preferredContact"
                          value="phone"
                          checked={formData.preferredContact === 'phone'}
                          onChange={handleChange}
                          className="mr-2 text-ranch-400 focus:ring-ranch-400"
                        />
                        <span>Phone</span>
                      </label>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <button
                      type="submit"
                      disabled={loading}
                      className={`w-full md:w-auto px-8 py-4 bg-gradient-gold text-luxury-black rounded-md font-medium text-lg shadow-gold transition-all duration-300 ${loading ? 'opacity-70 cursor-not-allowed' : 'hover:opacity-90'}`}
                    >
                      {loading ? 'Sending...' : 'Send Message'}
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
            
            {/* Contact Info Side */}
            <motion.div 
              className="lg:w-5/12"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="bg-luxury-black text-white rounded-lg overflow-hidden shadow-premium">
                {/* Map */}
                <div className="h-64 relative">
                  <img 
                    src="https://source.unsplash.com/random/800x600/?dominican,map,aerial" 
                    alt="Map of Hacienda Caribe" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-luxury-black bg-opacity-30 flex items-center justify-center">
                    <div className="bg-white bg-opacity-90 px-4 py-2 rounded-lg">
                      <h3 className="font-serif text-luxury-black">Hacienda Caribe</h3>
                    </div>
                  </div>
                </div>
                
                {/* Contact Information */}
                <div className="p-8">
                  <h3 className="font-serif text-2xl mb-6 text-gold-400">Contact Information</h3>
                  
                  <ul className="space-y-6">
                    <li className="flex">
                      <div className="text-gold-500 text-xl mr-4 mt-1">
                        <BiMap />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Location</h4>
                        <p className="text-silver-300">
                          Carretera La Romana-Higuey Km 10<br />
                          La Romana, Dominican Republic
                        </p>
                      </div>
                    </li>
                    
                    <li className="flex">
                      <div className="text-gold-500 text-xl mr-4 mt-1">
                        <BiPhone />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Phone</h4>
                        <p className="text-silver-300">
                          <a href="tel:+18095555555" className="hover:text-white transition-colors">
                            +1 (809) 555-5555
                          </a> (Reservations)<br />
                          <a href="tel:+18095556666" className="hover:text-white transition-colors">
                            +1 (809) 555-6666
                          </a> (General Inquiries)
                        </p>
                      </div>
                    </li>
                    
                    <li className="flex">
                      <div className="text-gold-500 text-xl mr-4 mt-1">
                        <BiEnvelope />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Email</h4>
                        <p className="text-silver-300">
                          <a href="mailto:reservations@haciendacaribe.com" className="hover:text-white transition-colors">
                            reservations@haciendacaribe.com
                          </a><br />
                          <a href="mailto:info@haciendacaribe.com" className="hover:text-white transition-colors">
                            info@haciendacaribe.com
                          </a>
                        </p>
                      </div>
                    </li>
                    
                    <li className="flex">
                      <div className="text-gold-500 text-xl mr-4 mt-1">
                        <BiTime />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Office Hours</h4>
                        <p className="text-silver-300">
                          Monday - Sunday: 8:00 AM - 8:00 PM AST
                        </p>
                      </div>
                    </li>
                  </ul>
                  
                  {/* Social Media */}
                  <div className="mt-8 pt-6 border-t border-luxury-black-light">
                    <h4 className="font-medium mb-4">Connect With Us</h4>
                    <div className="flex space-x-4">
                      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
                        className="w-10 h-10 rounded-full bg-luxury-black-light flex items-center justify-center text-silver-300 hover:text-white hover:bg-ranch-500 transition-colors duration-300">
                        <FaFacebookF />
                      </a>
                      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" 
                        className="w-10 h-10 rounded-full bg-luxury-black-light flex items-center justify-center text-silver-300 hover:text-white hover:bg-ranch-500 transition-colors duration-300">
                        <FaInstagram />
                      </a>
                      <a href="https://tripadvisor.com" target="_blank" rel="noopener noreferrer" 
                        className="w-10 h-10 rounded-full bg-luxury-black-light flex items-center justify-center text-silver-300 hover:text-white hover:bg-ranch-500 transition-colors duration-300">
                        <FaTripadvisor />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-silver-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-luxury-black mb-6">Frequently Asked Questions</h2>
            <div className="h-1 w-24 bg-gold-500 mx-auto mb-6"></div>
            <p className="max-w-3xl mx-auto text-silver-700">
              Find answers to common questions about Hacienda Caribe. If your question isn't addressed here, please don't hesitate to contact us directly.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                question: "How do I make a reservation?",
                answer: "Reservations can be made through our website, by email at reservations@haciendacaribe.com, or by phone at +1 (809) 555-5555. We recommend booking at least 3 months in advance for peak season (December-April)."
              },
              {
                question: "What is your cancellation policy?",
                answer: "Our standard cancellation policy allows for a full refund if cancelled 30 days prior to arrival. Cancellations within 30 days of arrival are subject to a 50% fee. Cancellations within 7 days of arrival are non-refundable."
              },
              {
                question: "Do you offer airport transfers?",
                answer: "Yes, we provide luxury airport transfers from both La Romana Airport (LRM) and Punta Cana International Airport (PUJ) for an additional fee. Please provide your flight details at least 72 hours before arrival."
              },
              {
                question: "What amenities are included in my stay?",
                answer: "All stays include daily housekeeping, concierge service, Wi-Fi, access to our main pool and beach areas, and continental breakfast. Additional services such as private chef, spa treatments, and excursions are available for an extra charge."
              },
              {
                question: "Is Hacienda Caribe family-friendly?",
                answer: "Yes, we welcome families and offer various accommodations suitable for guests of all ages. We provide special amenities for children and can arrange babysitting services with advance notice."
              },
              {
                question: "What is the best time of year to visit?",
                answer: "The Dominican Republic enjoys a tropical climate year-round. The peak season runs from December to April with the most pleasant temperatures. May through November offers lower rates and fewer crowds, though there is a slightly higher chance of rainfall."
              }
            ].map((faq, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-lg shadow-premium-soft p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-serif text-luxury-black mb-3">{faq.question}</h3>
                <p className="text-silver-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;