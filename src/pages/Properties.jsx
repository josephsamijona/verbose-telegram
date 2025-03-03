import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  BiSearch, 
  BiFilter, 
  BiSortAlt2, 
  BiChevronDown, 
  BiGrid, 
  BiListUl,
  BiX,
  BiCheck 
} from 'react-icons/bi';

import PropertyCard from '../components/ui/PropertyCard';
import Button from '../components/ui/Button';

// Données mockées pour la démo
const allProperties = [
  {
    id: 1,
    name: 'Villa Palmera',
    location: 'Oceanfront, La Romana',
    price: 3500000,
    image: 'https://source.unsplash.com/random/600x400/?luxury,villa,caribbean',
    bedrooms: 5,
    bathrooms: 6,
    area: 12,
    region: 'La Romana',
    featured: true,
    status: 'For Sale',
    tags: ['Oceanfront', 'Private Beach']
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
    region: 'Punta Cana',
    featured: true,
    status: 'For Sale',
    tags: ['Beachfront', 'Golf Access']
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
    region: 'La Romana',
    featured: false,
    status: 'For Sale',
    tags: ['Mountain View', 'Private Pool']
  },
  {
    id: 4,
    name: 'Paraiso Estate',
    location: 'Beachfront, Saona Island',
    price: 5100000,
    image: 'https://source.unsplash.com/random/600x400/?island,luxury,estate',
    bedrooms: 7,
    bathrooms: 8,
    area: 25,
    region: 'Saona Island',
    featured: false,
    status: 'For Sale',
    tags: ['Private Island', 'Helipad']
  },
  {
    id: 5,
    name: 'Villa Serena',
    location: 'Oceanview, La Romana',
    price: 3200000,
    image: 'https://source.unsplash.com/random/600x400/?luxury,home,dominican',
    bedrooms: 5,
    bathrooms: 5,
    area: 10,
    region: 'La Romana',
    featured: false,
    status: 'For Sale',
    tags: ['Ocean View', 'Tennis Court']
  },
  {
    id: 6,
    name: 'Caribbean Retreat',
    location: 'Coastal, Punta Cana',
    price: 2950000,
    image: 'https://source.unsplash.com/random/600x400/?caribbean,villa,retreat',
    bedrooms: 4,
    bathrooms: 4,
    area: 6,
    region: 'Punta Cana',
    featured: false,
    status: 'For Sale',
    tags: ['Golf Course', 'Spa']
  },
  {
    id: 7,
    name: 'Luxury Ranch Estate',
    location: 'Countryside, La Romana',
    price: 3800000,
    image: 'https://source.unsplash.com/random/600x400/?ranch,luxury,estate',
    bedrooms: 6,
    bathrooms: 5,
    area: 50,
    region: 'La Romana',
    featured: true,
    status: 'For Sale',
    tags: ['Equestrian', 'Large Estate']
  },
  {
    id: 8,
    name: 'Sunset Bay Villa',
    location: 'Bayfront, Saona Island',
    price: 4500000,
    image: 'https://source.unsplash.com/random/600x400/?sunset,bay,villa',
    bedrooms: 5,
    bathrooms: 6,
    area: 15,
    region: 'Saona Island',
    featured: false,
    status: 'For Sale',
    tags: ['Bay View', 'Marina Access']
  },
  {
    id: 9,
    name: 'Colonial Mansion',
    location: 'Historic District, Santo Domingo',
    price: 2400000,
    image: 'https://source.unsplash.com/random/600x400/?colonial,mansion,dominican',
    bedrooms: 5,
    bathrooms: 4,
    area: 4,
    region: 'Santo Domingo',
    featured: false,
    status: 'For Sale',
    tags: ['Historic', 'Urban']
  }
];

const regions = ['All Regions', 'La Romana', 'Punta Cana', 'Saona Island', 'Santo Domingo'];
const propertyTypes = ['All Types', 'Beachfront', 'Oceanview', 'Estate', 'Villa', 'Ranch'];
const priceRanges = [
  { label: 'Any Price', min: 0, max: Infinity },
  { label: 'Under $3M', min: 0, max: 3000000 },
  { label: '$3M - $4M', min: 3000000, max: 4000000 },
  { label: '$4M - $5M', min: 4000000, max: 5000000 },
  { label: 'Over $5M', min: 5000000, max: Infinity }
];
const bedroomOptions = ['Any', '3+', '4+', '5+', '6+'];
const sortOptions = ['Price (High to Low)', 'Price (Low to High)', 'Newest First', 'Bedrooms (Most)'];

const Properties = () => {
  // États pour les filtres et le tri
  const [filters, setFilters] = useState({
    region: 'All Regions',
    type: 'All Types',
    priceRange: priceRanges[0],
    bedrooms: 'Any',
    search: ''
  });
  
  const [sortBy, setSortBy] = useState(sortOptions[0]);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
  const [showFilters, setShowFilters] = useState(false);
  const [loading, setLoading] = useState(true);
  const [properties, setProperties] = useState([]);
  const [page, setPage] = useState(1);
  const itemsPerPage = 6;
  
  // Filtrer et trier les propriétés
  useEffect(() => {
    setLoading(true);
    
    // Simuler une requête API
    setTimeout(() => {
      let filtered = [...allProperties];
      
      // Appliquer les filtres
      if (filters.region !== 'All Regions') {
        filtered = filtered.filter(property => property.region === filters.region);
      }
      
      if (filters.type !== 'All Types') {
        filtered = filtered.filter(property => 
          property.tags && property.tags.some(tag => 
            tag.toLowerCase().includes(filters.type.toLowerCase())
          )
        );
      }
      
      // Filtrer par prix
      filtered = filtered.filter(property => 
        property.price >= filters.priceRange.min && property.price <= filters.priceRange.max
      );
      
      // Filtrer par nombre de chambres
      if (filters.bedrooms !== 'Any') {
        const minBedrooms = parseInt(filters.bedrooms);
        filtered = filtered.filter(property => property.bedrooms >= minBedrooms);
      }
      
      // Filtrer par recherche
      if (filters.search) {
        const searchTerm = filters.search.toLowerCase();
        filtered = filtered.filter(property => 
          property.name.toLowerCase().includes(searchTerm) || 
          property.location.toLowerCase().includes(searchTerm) ||
          (property.tags && property.tags.some(tag => tag.toLowerCase().includes(searchTerm)))
        );
      }
      
      // Appliquer le tri
      switch(sortBy) {
        case 'Price (High to Low)':
          filtered.sort((a, b) => b.price - a.price);
          break;
        case 'Price (Low to High)':
          filtered.sort((a, b) => a.price - b.price);
          break;
        case 'Newest First':
          // Dans une vraie application, vous utiliseriez une date de publication
          // Pour cette démo, on utilise simplement l'ID (supposant que les IDs plus élevés sont plus récents)
          filtered.sort((a, b) => b.id - a.id);
          break;
        case 'Bedrooms (Most)':
          filtered.sort((a, b) => b.bedrooms - a.bedrooms);
          break;
        default:
          filtered.sort((a, b) => b.price - a.price);
      }
      
      setProperties(filtered);
      setPage(1); // Réinitialiser à la première page lors du changement de filtres
      setLoading(false);
    }, 500);
  }, [filters, sortBy]);
  
  // Gérer les changements de filtres
  const handleFilterChange = (filterName, value) => {
    setFilters(prev => ({
      ...prev,
      [filterName]: value
    }));
  };
  
  const resetFilters = () => {
    setFilters({
      region: 'All Regions',
      type: 'All Types',
      priceRange: priceRanges[0],
      bedrooms: 'Any',
      search: ''
    });
    setSortBy(sortOptions[0]);
  };
  
  // Paginer les propriétés
  const paginatedProperties = properties.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );
  
  const totalPages = Math.ceil(properties.length / itemsPerPage);
  
  return (
    <div className="bg-silver-50 pb-20">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <img 
            src="https://source.unsplash.com/random/1920x1080/?luxury,properties,dominican" 
            alt="Luxury Properties" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-luxury-black bg-opacity-50"></div>
        </div>
        
        <div className="relative h-full container mx-auto px-6 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <h1 className="text-white font-serif text-4xl md:text-5xl mb-4">
              Exclusive Dominican Properties
            </h1>
            <p className="text-silver-100 text-lg md:text-xl mb-8">
              Discover our handpicked collection of luxury estates in the Caribbean's most desirable locations.
            </p>
            
            {/* Search Bar */}
            <div className="relative">
              <input
                type="text"
                value={filters.search}
                onChange={(e) => handleFilterChange('search', e.target.value)}
                placeholder="Search by property name, location, or features..."
                className="w-full px-5 py-4 pr-12 rounded-lg focus:outline-none focus:ring-2 focus:ring-ranch-400 shadow-lg"
              />
              <BiSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-2xl text-silver-400" />
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Filter Section */}
      <section className="sticky top-24 z-30 bg-white shadow-md py-4 border-b border-silver-200">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            {/* Filter Toggle Button (Mobile) */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="md:hidden flex items-center space-x-2 px-4 py-2 bg-silver-100 hover:bg-silver-200 rounded-md text-luxury-black"
            >
              <BiFilter className="text-xl" />
              <span>Filters</span>
              <BiChevronDown className={`transform transition-transform ${showFilters ? 'rotate-180' : ''}`} />
            </button>
            
            {/* Filter Options (Desktop) */}
            <div className="hidden md:flex items-center space-x-2">
              {/* Region Filter */}
              <div className="relative">
                <select
                  value={filters.region}
                  onChange={(e) => handleFilterChange('region', e.target.value)}
                  className="appearance-none px-4 py-2 bg-white border border-silver-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ranch-400 cursor-pointer pr-10"
                >
                  {regions.map((region) => (
                    <option key={region} value={region}>{region}</option>
                  ))}
                </select>
                <BiChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-silver-500" />
              </div>
              
              {/* Property Type Filter */}
              <div className="relative">
                <select
                  value={filters.type}
                  onChange={(e) => handleFilterChange('type', e.target.value)}
                  className="appearance-none px-4 py-2 bg-white border border-silver-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ranch-400 cursor-pointer pr-10"
                >
                  {propertyTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
                <BiChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-silver-500" />
              </div>
              
              {/* Price Range Filter */}
              <div className="relative">
                <select
                  value={filters.priceRange.label}
                  onChange={(e) => {
                    const selected = priceRanges.find(range => range.label === e.target.value);
                    handleFilterChange('priceRange', selected);
                  }}
                  className="appearance-none px-4 py-2 bg-white border border-silver-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ranch-400 cursor-pointer pr-10"
                >
                  {priceRanges.map((range) => (
                    <option key={range.label} value={range.label}>{range.label}</option>
                  ))}
                </select>
                <BiChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-silver-500" />
              </div>
              
              {/* Bedrooms Filter */}
              <div className="relative">
                <select
                  value={filters.bedrooms}
                  onChange={(e) => handleFilterChange('bedrooms', e.target.value)}
                  className="appearance-none px-4 py-2 bg-white border border-silver-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ranch-400 cursor-pointer pr-10"
                >
                  {bedroomOptions.map((option) => (
                    <option key={option} value={option}>{option} Bedrooms</option>
                  ))}
                </select>
                <BiChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-silver-500" />
              </div>
              
              {/* Reset Filters Button */}
              <button
                onClick={resetFilters}
                className="px-4 py-2 text-ranch-500 hover:text-ranch-600 font-medium"
              >
                Reset
              </button>
            </div>
            
            {/* Sort and View Options */}
            <div className="flex items-center space-x-4">
              {/* Sort Dropdown */}
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none px-4 py-2 bg-white border border-silver-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ranch-400 cursor-pointer pr-10"
                >
                  {sortOptions.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
                <BiSortAlt2 className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-silver-500" />
              </div>
              
              {/* View Toggle Buttons */}
              <div className="hidden md:flex border border-silver-300 rounded-md overflow-hidden">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`px-3 py-2 flex items-center ${viewMode === 'grid' ? 'bg-ranch-400 text-white' : 'bg-white text-silver-700'}`}
                >
                  <BiGrid className="text-xl" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`px-3 py-2 flex items-center ${viewMode === 'list' ? 'bg-ranch-400 text-white' : 'bg-white text-silver-700'}`}
                >
                  <BiListUl className="text-xl" />
                </button>
              </div>
            </div>
          </div>
          
          {/* Mobile Filters Panel */}
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-4 p-4 bg-silver-50 rounded-lg"
            >
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-silver-700 mb-1">Region</label>
                  <select
                    value={filters.region}
                    onChange={(e) => handleFilterChange('region', e.target.value)}
                    className="w-full appearance-none px-4 py-2 bg-white border border-silver-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ranch-400"
                  >
                    {regions.map((region) => (
                      <option key={region} value={region}>{region}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-silver-700 mb-1">Property Type</label>
                  <select
                    value={filters.type}
                    onChange={(e) => handleFilterChange('type', e.target.value)}
                    className="w-full appearance-none px-4 py-2 bg-white border border-silver-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ranch-400"
                  >
                    {propertyTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-silver-700 mb-1">Price Range</label>
                  <select
                    value={filters.priceRange.label}
                    onChange={(e) => {
                      const selected = priceRanges.find(range => range.label === e.target.value);
                      handleFilterChange('priceRange', selected);
                    }}
                    className="w-full appearance-none px-4 py-2 bg-white border border-silver-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ranch-400"
                  >
                    {priceRanges.map((range) => (
                      <option key={range.label} value={range.label}>{range.label}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-silver-700 mb-1">Bedrooms</label>
                  <select
                    value={filters.bedrooms}
                    onChange={(e) => handleFilterChange('bedrooms', e.target.value)}
                    className="w-full appearance-none px-4 py-2 bg-white border border-silver-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ranch-400"
                  >
                    {bedroomOptions.map((option) => (
                      <option key={option} value={option}>{option} Bedrooms</option>
                    ))}
                  </select>
                </div>
                
                <div className="flex justify-between">
                  <button
                    onClick={resetFilters}
                    className="px-4 py-2 text-ranch-500 hover:text-ranch-600 font-medium"
                  >
                    Reset Filters
                  </button>
                  
                  <button
                    onClick={() => setShowFilters(false)}
                    className="px-4 py-2 bg-ranch-400 text-white rounded-md hover:bg-ranch-500"
                  >
                    Apply Filters
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>
      
      {/* Properties Grid */}
      <section className="container mx-auto px-6 py-12">
        {/* Results Summary */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-serif text-luxury-black">
            {loading ? (
              <span>Searching properties...</span>
            ) : (
              <span>{properties.length} Properties Found</span>
            )}
          </h2>
          
          {/* Active Filters */}
          {(filters.region !== 'All Regions' || 
            filters.type !== 'All Types' || 
            filters.priceRange.label !== 'Any Price' || 
            filters.bedrooms !== 'Any' ||
            filters.search) && (
            <div className="hidden md:flex items-center space-x-2">
              <span className="text-silver-600">Active filters:</span>
              
              {filters.region !== 'All Regions' && (
                <div className="px-3 py-1 bg-ranch-50 text-ranch-600 rounded-full text-sm flex items-center">
                  {filters.region}
                  <button onClick={() => handleFilterChange('region', 'All Regions')} className="ml-2 text-ranch-400 hover:text-ranch-600">
                    <BiX />
                  </button>
                </div>
              )}
              
              {filters.type !== 'All Types' && (
                <div className="px-3 py-1 bg-ranch-50 text-ranch-600 rounded-full text-sm flex items-center">
                  {filters.type}
                  <button onClick={() => handleFilterChange('type', 'All Types')} className="ml-2 text-ranch-400 hover:text-ranch-600">
                    <BiX />
                  </button>
                </div>
              )}
              
              {filters.priceRange.label !== 'Any Price' && (
                <div className="px-3 py-1 bg-ranch-50 text-ranch-600 rounded-full text-sm flex items-center">
                  {filters.priceRange.label}
                  <button onClick={() => handleFilterChange('priceRange', priceRanges[0])} className="ml-2 text-ranch-400 hover:text-ranch-600">
                    <BiX />
                  </button>
                </div>
              )}
              
              {filters.bedrooms !== 'Any' && (
                <div className="px-3 py-1 bg-ranch-50 text-ranch-600 rounded-full text-sm flex items-center">
                  {filters.bedrooms}+ Bedrooms
                  <button onClick={() => handleFilterChange('bedrooms', 'Any')} className="ml-2 text-ranch-400 hover:text-ranch-600">
                    <BiX />
                  </button>
                </div>
              )}
              
              {filters.search && (
                <div className="px-3 py-1 bg-ranch-50 text-ranch-600 rounded-full text-sm flex items-center">
                  "{filters.search}"
                  <button onClick={() => handleFilterChange('search', '')} className="ml-2 text-ranch-400 hover:text-ranch-600">
                    <BiX />
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
        
        {loading ? (
          // Loading Skeleton
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden animate-pulse">
                <div className="h-64 bg-silver-200"></div>
                <div className="p-6 space-y-4">
                  <div className="h-6 bg-silver-200 rounded w-3/4"></div>
                  <div className="h-4 bg-silver-200 rounded w-1/2"></div>
                  <div className="flex justify-between">
                    <div className="h-5 bg-silver-200 rounded w-1/4"></div>
                    <div className="h-5 bg-silver-200 rounded w-1/4"></div>
                    <div className="h-5 bg-silver-200 rounded w-1/4"></div>
                  </div>
                  <div className="h-10 bg-silver-200 rounded w-full"></div>
                </div>
              </div>
            ))}
          </div>
        ) : properties.length === 0 ? (
          // No Results
          <div className="bg-white rounded-lg shadow-premium-soft p-10 text-center">
            <h3 className="text-2xl font-serif text-luxury-black mb-4">No Properties Found</h3>
            <p className="text-silver-600 mb-6">
              No properties match your current search criteria. Try adjusting your filters or browse our featured properties.
            </p>
            <Button onClick={resetFilters} variant="primary">
              Reset All Filters
            </Button>
          </div>
        ) : (
          // Property Grid/List
          <>
            {viewMode === 'grid' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {paginatedProperties.map((property) => (
                  <motion.div
                    key={property.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <PropertyCard property={property} featured={property.featured} />
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="space-y-6">
                {paginatedProperties.map((property) => (
                  <motion.div
                    key={property.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white rounded-lg shadow-premium-soft overflow-hidden"
                  >
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-1/3 h-64 md:h-auto">
                        <img 
                          src={property.image} 
                          alt={property.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="md:w-2/3 p-6">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="font-serif text-xl text-luxury-black font-medium mb-2">{property.name}</h3>
                            <div className="flex items-center text-silver-600 mb-2">
                              <span>{property.location}</span>
                            </div>
                            <div className="flex flex-wrap gap-2 mb-4">
                              {property.tags && property.tags.map((tag, index) => (
                                <span key={index} className="bg-ranch-50 text-ranch-600 px-2 py-0.5 rounded-full text-xs font-medium">
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-xl font-serif text-luxury-black">${property.price.toLocaleString()}</div>
                            <div className="text-silver-500 text-sm">{property.status}</div>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between mb-6">
                          <div className="flex space-x-6">
                            <div className="flex items-center text-silver-700">
                              <BiBed className="text-lg mr-1" />
                              <span>{property.bedrooms} Beds</span>
                            </div>
                            <div className="flex items-center text-silver-700">
                              <BiCheckCircle className="text-lg mr-1" />
                              <span>{property.bathrooms} Baths</span>
                            </div>
                            <div className="flex items-center text-silver-700">
                              <BiArea className="text-lg mr-1" />
                              <span>{property.area} acres</span>
                            </div>
                          </div>
                        </div>
                        
                        <Link 
                          to={`/properties/${property.id}`}
                          className="inline-block px-6 py-2 bg-ranch-400 text-white rounded-md font-medium hover:bg-ranch-500 transition-colors duration-300"
                        >
                          View Details
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
            
            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-12 flex justify-center">
                <div className="flex space-x-2">
                  <button
                    onClick={() => setPage(p => Math.max(1, p - 1))}
                    disabled={page === 1}
                    className={`px-4 py-2 rounded-md ${
                      page === 1 
                        ? 'bg-silver-200 text-silver-500 cursor-not-allowed' 
                        : 'bg-white text-luxury-black hover:bg-silver-100 border border-silver-300'
                    }`}
                  >
                    Previous
                  </button>
                  
                  {[...Array(totalPages)].map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setPage(index + 1)}
                      className={`w-10 h-10 rounded-md flex items-center justify-center ${
                        page === index + 1
                          ? 'bg-ranch-400 text-white'
                          : 'bg-white text-luxury-black hover:bg-silver-100 border border-silver-300'
                      }`}
                    >
                      {index + 1}
                    </button>
                  ))}
                  
                  <button
                    onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                    disabled={page === totalPages}
                    className={`px-4 py-2 rounded-md ${
                      page === totalPages 
                        ? 'bg-silver-200 text-silver-500 cursor-not-allowed' 
                        : 'bg-white text-luxury-black hover:bg-silver-100 border border-silver-300'
                    }`}
                  >
                    Next
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </section>
      
      {/* CTA Section */}
      <section className="container mx-auto px-6 py-12">
        <div className="bg-gradient-to-r from-luxury-black to-luxury-black-light rounded-lg overflow-hidden relative">
          <div className="absolute inset-0 opacity-20">
            <img 
              src="https://source.unsplash.com/random/1200x800/?luxury,dominican,estate" 
              alt="Luxury Estate" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="relative p-10 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">
              Can't Find Your Dream Property?
            </h2>
            <p className="text-silver-300 max-w-3xl mx-auto mb-8">
              Our exclusive portfolio includes off-market properties not listed publicly. Contact our team to discuss your specific requirements and let us find your perfect Caribbean estate.
            </p>
            <Button to="/contact" variant="gold" size="lg">
              Contact Our Specialists
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Properties;