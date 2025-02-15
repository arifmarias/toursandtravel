import React, { useState, useEffect } from 'react';
import { Palmtree as PalmTree, Phone, Mail, MapPin, Facebook, Instagram, Twitter, MapIcon as WhatsappIcon, Star, Users, Calendar, Clock, Check } from 'lucide-react';

function App() {
  const [showCookieConsent, setShowCookieConsent] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    travelDates: '',
    travelers: '',
    destination: '',
    budget: '',
    comments: ''
  });

  useEffect(() => {
    document.title = "MY BEST TOURS & TRAVEL";
    const link = document.createElement('link');
    link.rel = 'icon';
    link.href = 'https://cdn-icons-png.flaticon.com/512/5086/5086786.png';
    document.head.appendChild(link);
  }, []);

  const heroImages = [
    {
      url: "https://images.unsplash.com/photo-1438159510492-d44b489bd1b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      caption: "Discover Langkawi's Paradise"
    },
    {
      url: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
      caption: "Experience Kuala Lumpur"
    },
    {
      url: "https://images.unsplash.com/photo-1636979563673-559071c4691b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      caption: "Explore Malacca Heritage"
    },
    {
      url: "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
      caption: "Adventure in Borneo"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const localTours = [
    {
      title: "Kuala Lumpur City Explorer",
      image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      duration: "3 Days",
      highlights: ["Petronas Towers", "Batu Caves", "KL Tower", "Central Market"]
    },
    {
      title: "Langkawi Island Paradise",
      image: "https://images.unsplash.com/photo-1438159510492-d44b489bd1b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      duration: "4 Days",
      highlights: ["Sky Bridge", "Eagle Square", "Island Hopping", "Mangrove Tour"]
    },
    {
      title: "Penang Heritage Trail",
      image: "https://images.unsplash.com/photo-1585644198841-c350f0d9d05c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      duration: "3 Days",
      highlights: ["Georgetown Heritage", "Street Art", "Food Trail", "Penang Hill"]
    },
    {
      title: "Borneo Wildlife Adventure",
      image: "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      duration: "5 Days",
      highlights: ["Orangutan Sanctuary", "Rainforest Trek", "River Cruise", "Cultural Village"]
    },
    {
      title: "Malacca Historical Journey",
      image: "https://images.unsplash.com/photo-1562466181-68cb9ca707eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      duration: "2 Days",
      highlights: ["A'Famosa Fort", "Jonker Street", "River Cruise", "Historical Museums"]
    },
    {
      title: "Cameron Highlands Retreat",
      image: "https://images.unsplash.com/photo-1523920290228-4f321a939b4c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      duration: "3 Days",
      highlights: ["Tea Plantations", "Strawberry Farm", "Mossy Forest", "Local Markets"]
    }
  ];

  const internationalTours = [
    {
      title: "Bangkok City Adventure",
      image: "https://plus.unsplash.com/premium_photo-1664910039021-a1bfcc6574b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      duration: "5 Days",
      highlights: ["Grand Palace", "Wat Arun", "Floating Market", "Chatuchak Market"],
      services: ["Visa", "Flights", "Hotels"]
    },
    {
      title: "Bali Beach Getaway",
      image: "https://plus.unsplash.com/premium_photo-1682097623645-4fd444d9cecb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      duration: "6 Days",
      highlights: ["Kuta Beach", "Ubud", "Tanah Lot", "Mount Batur"],
      services: ["Visa", "Flights", "Hotels"]
    }, 
    {
      title: "Manila Cultural Experience",
      image: "https://images.unsplash.com/photo-1579957023433-7fad5b83efae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      duration: "4 Days",
      highlights: ["Intramuros", "Rizal Park", "Manila Bay", "National Museum"],
      services: ["Visa", "Flights", "Hotels"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center space-x-4">
              <img src="logo.png" alt="Logo" className="h-10 w-10" />
              <span className="text-2xl font-bold text-blue-600">MY BEST TOURS & TRAVEL</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600">Home</a>
              <a href="#tours" className="text-gray-700 hover:text-blue-600">Tours</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600">About</a>
              <a href="#transportation" className="text-gray-700 hover:text-blue-600">Transportation</a>
              <a href="#inquiry" className="text-gray-700 hover:text-blue-600">Contact</a>
            </div>
            <div className="flex md:hidden">
              <a href="#tours" className="text-gray-700 hover:text-blue-600">Tours</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600">About</a>
              <a href="#transportation" className="text-gray-700 hover:text-blue-600">Transportation</a>
              <a href="#inquiry" className="text-gray-700 hover:text-blue-600">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Carousel */}
      <section id="home" className="relative h-screen">
        <div className="absolute inset-0">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                currentImageIndex === index ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img 
                src={image.url}
                alt={image.caption}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40"></div>
            </div>
          ))}
        </div>
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              {heroImages[currentImageIndex].caption}
            </h1>
            <p className="text-xl mb-8">
              Experience breathtaking landscapes, rich culture, and unforgettable adventures
            </p>
            <a 
              href="#inquiry"
              className="bg-gradient-to-r from-blue-600 to-green-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-green-600 transition duration-300"
            >
              Plan Your Journey
            </a>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                currentImageIndex === index ? 'bg-white' : 'bg-white/50'
              }`}
              onClick={() => setCurrentImageIndex(index)}
            />
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">About Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1549154425-7b519f2b92d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="About Us" 
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Your Gateway to Malaysian Adventures</h3>
              <p className="text-gray-600 mb-6">
                Since our establishment, MY BEST TOURS AND TRAVEL has been dedicated to providing exceptional travel experiences across Malaysia. Our team of experienced travel professionals combines local expertise with international standards to create unforgettable journeys.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center space-x-2">
                  <Users className="h-6 w-6 text-blue-600" />
                  <span>Expert Guides</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-6 w-6 text-blue-600" />
                  <span>Flexible Tours</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-6 w-6 text-blue-600" />
                  <span>24/7 Support</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="h-6 w-6 text-blue-600" />
                  <span>Best Value</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Tours Section */}
      <section id="tours" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Popular Tour Packages</h2>
          
          <h3 className="text-2xl font-semibold mb-6">Local Tours</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {localTours.map((tour, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
                <img src={tour.image} alt={tour.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{tour.title}</h3>
                  <p className="text-gray-600 mb-4">{tour.duration}</p>
                  <div className="space-y-2 mb-4">
                    {tour.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <Star className="h-4 w-4 text-orange-500 mr-2" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                  <button className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>

          <h3 className="text-2xl font-semibold mb-6">International Tours</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {internationalTours.map((tour, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
                <img src={tour.image} alt={tour.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{tour.title}</h3>
                  <p className="text-gray-600 mb-4">{tour.duration}</p>
                  <div className="space-y-2 mb-4">
                    {tour.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <Star className="h-4 w-4 text-orange-500 mr-2" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-2 mb-4">
                    <h4 className="text-lg font-semibold">Included Services:</h4>
                    {tour.services.map((service, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <Check className="h-4 w-4 text-green-500 mr-2" />
                        <span>{service}</span>
                      </div>
                    ))}
                  </div>
                  <button className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transportation Section */}
      <section id="transportation" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Transportation</h2>
          <p className="text-center text-gray-600 mb-8">
            We offer a variety of transportation options to make your travel experience seamless and comfortable.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Airport Transfers</h3>
              <p className="text-gray-600">Convenient and reliable airport transfers to and from your destination.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Private Car Rentals</h3>
              <p className="text-gray-600">Explore at your own pace with our private car rental services.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Group Transportation</h3>
              <p className="text-gray-600">Comfortable and affordable transportation for groups of all sizes.</p>
            </div>
          </div>
          <div className="mt-12">
            <h3 className="text-2xl font-semibold mb-6">Our Fleet</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <img src="https://images.unsplash.com/photo-1616455579100-2ceaa4eb2d37?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Sedan" className="w-full h-48 object-cover mb-4 rounded-lg" />
                <h4 className="text-xl font-semibold mb-2">Sedan</h4>
                <p className="text-gray-600">Comfortable for up to 4 passengers.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <img src="https://images.unsplash.com/photo-1606611013016-969c19ba27bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="SUV" className="w-full h-48 object-cover mb-4 rounded-lg" />
                <h4 className="text-xl font-semibold mb-2">SUV</h4>
                <p className="text-gray-600">Spacious and comfortable for up to 6 passengers.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <img src="https://images.unsplash.com/photo-1535655685871-dc8158ff167e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Van" className="w-full h-48 object-cover mb-4 rounded-lg" />
                <h4 className="text-xl font-semibold mb-2">Van</h4>
                <p className="text-gray-600">Ideal for groups of up to 12 passengers.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Form Section */}
      <section id="inquiry" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Plan Your Trip</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Travel Dates
                </label>
                <input
                  type="date"
                  name="travelDates"
                  value={formData.travelDates}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Number of Travelers
                </label>
                <input
                  type="number"
                  name="travelers"
                  value={formData.travelers}
                  onChange={handleInputChange}
                  min="1"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Budget Range
                </label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                >
                  <option value="">Select Budget Range</option>
                  <option value="economy">Economy ($500-$1000)</option>
                  <option value="standard">Standard ($1000-$2000)</option>
                  <option value="luxury">Luxury ($2000+)</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Special Requirements/Comments
              </label>
              <textarea
                name="comments"
                value={formData.comments}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-green-500 text-white py-3 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-green-600 transition duration-300"
            >
              Submit Inquiry
            </button>
          </form>
        </div>
      </section>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/60169777761"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition duration-300 z-50"
      >
        <WhatsappIcon className="h-6 w-6" />
      </a>

      {/* Cookie Consent */}
      {showCookieConsent && (
        <div className="fixed bottom-0 w-full bg-gray-900 text-white py-4 px-4 z-50">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm mb-4 md:mb-0">
              We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.
            </p>
            <div className="flex space-x-4">
              <button
                onClick={() => setShowCookieConsent(false)}
                className="bg-blue-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-blue-700 transition duration-300"
              >
                Accept
              </button>
              <button
                onClick={() => setShowCookieConsent(false)}
                className="border border-white px-4 py-2 rounded text-sm font-medium hover:bg-gray-800 transition duration-300"
              >
                Decline
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <PalmTree className="h-8 w-8 text-blue-400" />
                <span className="ml-2 text-2xl font-bold">MY BEST TOURS AND TRAVEL</span>
              </div>
              <p className="text-gray-400">
                Your trusted partner for unforgettable Malaysian adventures since 2010.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <div className="space-y-2">
                <p className="flex items-center">
                  <Phone className="h-5 w-5 mr-2" />
                  +60169777761
                </p>
                <p className="flex items-center">
                  <Mail className="h-5 w-5 mr-2" />
                  admin@example.com
                </p>
                <p className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2" />
                  Kuala Lumpur, Malaysia
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#about" className="hover:text-blue-400">About Us</a></li>
                <li><a href="#tours" className="hover:text-blue-400">Tours</a></li>
                <li><a href="#inquiry" className="hover:text-blue-400">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-blue-400">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="hover:text-blue-400">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="#" className="hover:text-blue-400">
                  <Twitter className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 MY BEST TOURS AND TRAVEL. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
