import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Menu, X, Clock, MapPin, Star, AlertCircle, ChevronRight, Phone } from 'lucide-react';
import { tourData } from '../data/tourData';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center space-x-4">
            <Link to="/" className="flex items-center space-x-2">
              <img 
                src="/assets/logo.png"
                alt="Logo" 
                className="h-8 w-8 md:h-10 md:w-10 rounded-full" 
              />
              <span className="text-lg md:text-2xl font-bold text-blue-600 truncate">
                MY BEST TOURS & TRAVEL
              </span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
            <Link to="/#tours" className="text-gray-700 hover:text-blue-600">Tours</Link>
            <Link to="/#about" className="text-gray-700 hover:text-blue-600">About</Link>
            <Link to="/#transportation" className="text-gray-700 hover:text-blue-600">Transportation</Link>
            <Link to="/#inquiry" className="text-gray-700 hover:text-blue-600">Contact</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              <Link
                to="/"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/#tours"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Tours
              </Link>
              <Link
                to="/#about"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/#transportation"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Transportation
              </Link>
              <Link
                to="/#inquiry"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

const TourDetailPage = () => {
  const { id } = useParams();
  const tour = id ? tourData[id] : null;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!tour) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Tour Not Found</h2>
          <Link to="/" className="text-blue-600 hover:text-blue-800">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  const handleBookNow = () => {
    window.open('https://wa.me/60169777761', '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <div className="relative h-[70vh]">
        <img
          src={tour.image}
          alt={tour.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30"></div>
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">{tour.title}</h1>
            <div className="flex flex-wrap gap-4">
              <span className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                {tour.duration}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Button */}
      <div className="sticky top-20 z-40 bg-white shadow-md p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h2 className="text-xl font-semibold">{tour.title}</h2>
          <button
            onClick={handleBookNow}
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg flex items-center space-x-2 transition duration-300"
          >
            <Phone className="w-5 h-5" />
            <span>Book Now via WhatsApp</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview */}
            <section className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-[1.02] transition-transform duration-300">
              <h2 className="text-2xl font-bold mb-4">Overview</h2>
              <p className="text-gray-600 leading-relaxed">{tour.description}</p>
            </section>

            {/* Highlights */}
            <section className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-6">Highlights</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {tour.highlights.map((highlight, index) => (
                  <div 
                    key={index} 
                    className="flex items-start p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300"
                  >
                    <Star className="w-5 h-5 text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{highlight}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Attractions */}
            <section className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-6">Key Attractions</h2>
              <div className="space-y-6">
                {tour.attractions.map((attraction, index) => (
                  <div 
                    key={index} 
                    className="border-b last:border-b-0 pb-6 last:pb-0 hover:bg-gray-50 p-4 rounded-lg transition-colors duration-300"
                  >
                    <h3 className="text-xl font-semibold mb-2">{attraction.name}</h3>
                    <p className="text-gray-600 mb-3">{attraction.description}</p>
                    <div className="flex flex-wrap gap-4 text-sm">
                      <span className="flex items-center text-gray-500">
                        <Clock className="w-4 h-4 mr-1" />
                        {attraction.timing}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column - Travel Tips & Info */}
          <div className="space-y-8">
            {/* Travel Tips */}
            <section className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-4">Travel Tips</h2>
              <div className="space-y-4">
                {tour.travelTips.map((tip, index) => (
                  <div 
                    key={index} 
                    className="flex items-start p-3 hover:bg-gray-50 rounded-lg transition-colors duration-300"
                  >
                    <AlertCircle className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-600">{tip}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Best Time to Visit */}
            <section className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-4">Best Time to Visit</h2>
              <p className="text-gray-600 bg-blue-50 p-4 rounded-lg">{tour.bestTimeToVisit}</p>
            </section>

            {/* Getting Around */}
            <section className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-4">Getting Around</h2>
              <div className="space-y-3">
                {tour.gettingAround.map((item, index) => (
                  <div 
                    key={index} 
                    className="flex items-start p-3 hover:bg-gray-50 rounded-lg transition-colors duration-300"
                  >
                    <MapPin className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-600">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Accommodation */}
            <section className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-4">Accommodation</h2>
              <div className="space-y-4">
                {tour.accommodation.map((acc, index) => (
                  <div 
                    key={index} 
                    className="p-4 border rounded-lg hover:shadow-md transition-shadow duration-300"
                  >
                    <h3 className="font-semibold text-lg mb-2">{acc.type}</h3>
                    <p className="text-gray-600 mb-2">
                      {acc.suggestions.join(", ")}
                    </p>
                    <p className="text-gray-500 text-sm">
                      Price Range: {acc.priceRange}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourDetailPage;