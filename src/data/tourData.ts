export interface Attraction {
    name: string;
    description: string;
    timing: string;
    ticketPrice: string;
  }
  
  export interface Accommodation {
    type: string;
    suggestions: string[];
    priceRange: string;
  }
  
  export interface TourDetails {
    title: string;
    image: string;
    duration: string;
    price: string;
    description: string;
    highlights: string[];
    attractions: Attraction[];
    travelTips: string[];
    bestTimeToVisit: string;
    gettingAround: string[];
    accommodation: Accommodation[];
  }
  
  export const tourData: Record<string, TourDetails> = {
    "kuala-lumpur-city-explorer": {
      title: "Kuala Lumpur City Explorer",
      image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      duration: "3 Days",
      price: "From $500",
      description: "Discover the vibrant heart of Malaysia in this comprehensive tour of Kuala Lumpur. Experience the perfect blend of modern architecture, cultural heritage, and local lifestyle.",
      highlights: [
        "Petronas Towers - World's tallest twin towers with skybridge access",
        "Batu Caves - Ancient limestone caves with Hindu temples",
        "KL Tower - Panoramic city views from observation deck",
        "Central Market - Historic market with local arts and crafts"
      ],
      attractions: [
        {
          name: "Petronas Towers",
          description: "The iconic 88-story twin towers offer breathtaking views from the Skybridge and Observation Deck. Visit early morning to avoid crowds.",
          timing: "9:00 AM - 9:00 PM",
          ticketPrice: "$25"
        },
        {
          name: "Batu Caves",
          description: "Ancient limestone caves featuring Hindu temples and a giant Lord Murugan statue. Climb 272 steps to reach the main cave.",
          timing: "6:00 AM - 9:00 PM",
          ticketPrice: "Free"
        },
        {
          name: "KL Tower",
          description: "The 7th tallest telecommunications tower in the world with a revolving restaurant and observation deck.",
          timing: "9:00 AM - 10:00 PM",
          ticketPrice: "$20"
        },
        {
          name: "Islamic Arts Museum",
          description: "The largest Islamic arts museum in Southeast Asia, featuring stunning architecture and over 7000 artifacts.",
          timing: "10:00 AM - 6:00 PM",
          ticketPrice: "$15"
        },
        {
          name: "Merdeka Square",
          description: "Historic square where Malaysian independence was declared, surrounded by colonial architecture and the Sultan Abdul Samad Building.",
          timing: "Open 24 hours",
          ticketPrice: "Free"
        }
      ],
      travelTips: [
        "Best time to visit is during morning hours to avoid crowds and heat",
        "Use the efficient MRT system to travel between attractions",
        "Carry an umbrella as weather can be unpredictable",
        "Dress modestly when visiting religious sites",
        "Try local street food at Jalan Alor in the evening"
      ],
      bestTimeToVisit: "November to February (Dry Season)",
      gettingAround: [
        "MRT and LRT trains cover major attractions",
        "Grab or Taxi for convenient travel",
        "Walking is possible in the city center",
        "Free GoKL buses connect major tourist spots"
      ],
      accommodation: [
        {
          type: "Luxury",
          suggestions: ["Mandarin Oriental", "Four Seasons", "Ritz-Carlton"],
          priceRange: "$200-$500/night"
        },
        {
          type: "Mid-range",
          suggestions: ["Traders Hotel", "Renaissance", "Hilton"],
          priceRange: "$100-$200/night"
        },
        {
          type: "Budget",
          suggestions: ["Tian Jing Hotel", "Hotel Capitol", "Swiss Inn"],
          priceRange: "$30-$100/night"
        }
      ]
    },
    "langkawi-island-paradise": {
    title: "Langkawi Island Paradise",
    image: "https://images.unsplash.com/photo-1438159510492-d44b489bd1b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    duration: "4 Days",
    price: "From $600",
    description: "Experience the magical blend of pristine beaches, lush rainforests, and spectacular landscapes in Langkawi, the Jewel of Kedah. This tour combines relaxation with adventure, offering you the perfect island getaway.",
    highlights: [
      "Langkawi Sky Bridge - World's longest curved suspension bridge",
      "Kilim Geoforest Park - Unique mangrove and eagle watching experience",
      "Cenang Beach - Pristine white sand beach with water sports",
      "Duty-Free Shopping - Extensive shopping opportunities"
    ],
    attractions: [
        {
          name: "Langkawi Sky Bridge & Cable Car",
          description: "Take a breathtaking ride on the Langkawi Cable Car to the peak of Gunung Machinchang, where the spectacular Sky Bridge offers panoramic views of the entire island and beyond to Thailand.",
          timing: "9:30 AM - 7:00 PM",
          ticketPrice: "$15"
        },
        {
          name: "Kilim Karst Geoforest Park",
          description: "Explore stunning limestone formations, mangrove forests, and wildlife. Watch eagles soaring, visit fish farms, and discover hidden caves in this UNESCO Global Geopark.",
          timing: "8:00 AM - 5:00 PM",
          ticketPrice: "$40 for boat tour"
        },
        {
          name: "Underwater World Langkawi",
          description: "One of the largest marine and freshwater aquaria in Southeast Asia, featuring over 500 species of marine and freshwater creatures.",
          timing: "10:00 AM - 6:00 PM",
          ticketPrice: "$20"
        },
        {
          name: "Tanjung Rhu Beach",
          description: "One of Langkawi's most exclusive beaches with pristine white sand, crystal clear waters, and limestone caves. Perfect for swimming and sunbathing.",
          timing: "Open 24 hours",
          ticketPrice: "Free"
        },
        {
          name: "Dataran Lang (Eagle Square)",
          description: "Iconic 12-meter eagle statue at the harbor, symbolizing Langkawi. Beautiful spot for photos, especially during sunset.",
          timing: "Open 24 hours",
          ticketPrice: "Free"
        }
      ],
    travelTips: [
      "Book island hopping tours early in the morning for calmer seas",
      "Rent a car to explore the island at your own pace",
      "Bring reef-safe sunscreen for water activities",
      "Visit during weekdays to avoid local tourist crowds",
      "Carry cash as some local vendors don't accept cards"
    ],
    bestTimeToVisit: "December to April (Dry Season)",
    gettingAround: [
      "Rental car is the most convenient option",
      "Grab services are available",
      "Tour packages with transportation",
      "Taxi services at major attractions"
    ],
    accommodation: [
      {
        type: "Luxury",
        suggestions: ["The Datai", "Four Seasons", "The Ritz-Carlton"],
        priceRange: "$300-$800/night"
      },
      {
        type: "Mid-range",
        suggestions: ["Meritus Pelangi Beach Resort", "Berjaya Langkawi", "The Andaman"],
        priceRange: "$150-$300/night"
      },
      {
        type: "Budget",
        suggestions: ["Cenang Plaza Beach Hotel", "Shell Out Resort", "Gecko Guesthouse"],
        priceRange: "$40-$150/night"
      }
    ]
  },

  "penang-heritage-trail": {
    title: "Penang Heritage Trail",
    image: "https://images.unsplash.com/photo-1585644198841-c350f0d9d05c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    duration: "3 Days",
    price: "From $450",
    description: "Immerse yourself in the rich cultural tapestry of Georgetown, a UNESCO World Heritage site. Experience the unique blend of colonial architecture, street art, traditional crafts, and world-renowned street food.",
    highlights: [
      "Georgetown Heritage Buildings - Colonial architectural marvels",
      "Street Art Trail - Famous murals and iron sculptures",
      "Penang Hill - Historic funicular railway and views",
      "Local Food Trail - World-famous street food experience"
    ],
    attractions: [
        {
          name: "Georgetown Heritage Walk",
          description: "Explore the historic streets of Georgetown, featuring well-preserved colonial buildings, traditional shophouses, and famous street art installations.",
          timing: "Best explored early morning or late afternoon",
          ticketPrice: "Free (guided tours available)"
        },
        {
          name: "Penang Hill",
          description: "Take the funicular railway to the hill station for panoramic views of the island. Visit colonial bungalows and enjoy the cool highland atmosphere.",
          timing: "6:30 AM - 11:00 PM",
          ticketPrice: "$12 for funicular"
        },
        {
          name: "Kek Lok Si Temple",
          description: "The largest Buddhist temple in Malaysia, featuring beautiful architecture, gardens, and a towering statue of Guanyin.",
          timing: "7:00 AM - 5:30 PM",
          ticketPrice: "Free (donations welcome)"
        },
        {
          name: "Cheong Fatt Tze Mansion",
          description: "Known as the Blue Mansion, this UNESCO award-winning heritage building showcases traditional Chinese architecture and craftsmanship.",
          timing: "11:00 AM - 3:00 PM (Guided tours only)",
          ticketPrice: "$15"
        },
        {
          name: "Clan Jetties",
          description: "Historic Chinese waterfront settlements built on stilts, offering a glimpse into Penang's maritime heritage and community life.",
          timing: "Open 24 hours",
          ticketPrice: "Free"
        }
      ],
    travelTips: [
      "Start heritage walks early to avoid the heat",
      "Use the free CAT bus service in Georgetown",
      "Try local dishes at hawker centers",
      "Get a heritage map from tourist information centers",
      "Book heritage hotels in advance during peak seasons"
    ],
    bestTimeToVisit: "November to January (Less rainfall)",
    gettingAround: [
      "Free CAT bus service in heritage area",
      "Grab and local bus services",
      "Walking tours in Georgetown",
      "Rental bikes available"
    ],
    accommodation: [
      {
        type: "Heritage",
        suggestions: ["Eastern & Oriental Hotel", "Cheong Fatt Tze Mansion", "Seven Terraces"],
        priceRange: "$200-$400/night"
      },
      {
        type: "Mid-range",
        suggestions: ["Museum Hotel", "Armenian Street Heritage Hotel", "23 Love Lane"],
        priceRange: "$100-$200/night"
      },
      {
        type: "Budget",
        suggestions: ["Armenian Street House", "Old Penang Guesthouse", "Coffee Atelier"],
        priceRange: "$30-$100/night"
      }
    ]
  },

  "borneo-wildlife-adventure": {
    title: "Borneo Wildlife Adventure",
    image: "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    duration: "5 Days",
    price: "From $800",
    description: "Discover the incredible biodiversity of Borneo's rainforest. Encounter endangered orangutans, proboscis monkeys, and exotic birds in their natural habitat while experiencing the unique culture of Sabah.",
    highlights: [
      "Sepilok Orangutan Rehabilitation Centre - See orangutans up close",
      "Kinabatangan River Cruise - Wildlife spotting along the river",
      "Danum Valley - Primary rainforest experience",
      "Cultural Village Visit - Traditional lifestyle experience"
    ],
    attractions: [
        {
          name: "Sepilok Orangutan Sanctuary",
          description: "World-famous rehabilitation center where you can observe orangutans during feeding times and learn about conservation efforts.",
          timing: "9:00 AM - 4:00 PM, Feeding at 10AM and 3PM",
          ticketPrice: "$30"
        },
        {
          name: "Kinabatangan River Safari",
          description: "Take river cruises to spot wildlife including proboscis monkeys, pygmy elephants, and numerous bird species in their natural habitat.",
          timing: "Dawn and dusk cruises",
          ticketPrice: "Included in lodge packages"
        },
        {
          name: "Danum Valley Conservation Area",
          description: "Experience one of the world's oldest rainforests with guided nature walks, canopy walks, and night safaris.",
          timing: "Activities throughout the day",
          ticketPrice: "Package dependent"
        },
        {
          name: "Bornean Sun Bear Conservation Centre",
          description: "Learn about and observe the world's smallest bear species in their natural habitat while supporting conservation efforts.",
          timing: "9:00 AM - 3:30 PM",
          ticketPrice: "$25"
        },
        {
          name: "Gomantong Caves",
          description: "Explore massive limestone caves home to millions of swiftlets and bats, famous for their edible nests and ecological importance.",
          timing: "8:00 AM - 5:00 PM",
          ticketPrice: "$15"
        }
      ],
    travelTips: [
      "Pack lightweight, quick-dry clothing",
      "Bring good walking shoes and leech socks",
      "Use natural insect repellent",
      "Book wildlife lodges well in advance",
      "Keep cameras in waterproof bags"
    ],
    bestTimeToVisit: "March to October (Drier Season)",
    gettingAround: [
      "Guided tours with transportation",
      "River boats in Kinabatangan",
      "4x4 vehicles in forest areas",
      "Domestic flights between locations"
    ],
    accommodation: [
      {
        type: "Luxury Lodges",
        suggestions: ["Borneo Rainforest Lodge", "Sukau Rainforest Lodge", "Kinabatangan Riverside Lodge"],
        priceRange: "$300-$600/night"
      },
      {
        type: "Mid-range",
        suggestions: ["Sepilok Nature Resort", "Bilit Adventure Lodge", "Kinabatangan Wetlands Resort"],
        priceRange: "$150-$300/night"
      },
      {
        type: "Basic",
        suggestions: ["Nature Lodge Kinabatangan", "Sepilok B&B", "Wildlife Lodge"],
        priceRange: "$50-$150/night"
      }
    ]
  },

  "malacca-historical-journey": {
    title: "Malacca Historical Journey",
    image: "https://images.unsplash.com/photo-1562466181-68cb9ca707eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    duration: "2 Days",
    price: "From $300",
    description: "Step back in time in Malacca, where Portuguese, Dutch, and British colonial influences blend with local Malay culture. Explore UNESCO World Heritage sites, taste unique Nyonya cuisine, and discover the rich trading history of this historic port city.",
    highlights: [
      "A'Famosa Fort - Portuguese colonial fortress",
      "Jonker Street - Historic street with antique shops",
      "Stadthuys - Dutch colonial architecture",
      "Baba & Nyonya Heritage Museum"
    ],
    attractions: [
        {
          name: "Dutch Square & Christ Church",
          description: "Iconic red buildings showcasing Dutch colonial architecture, including the oldest functioning Protestant church in Malaysia.",
          timing: "9:00 AM - 5:00 PM",
          ticketPrice: "Free (Church entry)"
        },
        {
          name: "Maritime Museum",
          description: "Housed in a replica of a Portuguese ship, showcasing Malacca's maritime history and trade importance.",
          timing: "9:00 AM - 5:30 PM",
          ticketPrice: "$5"
        },
        {
          name: "Jonker Street Night Market",
          description: "Famous weekend night market featuring local crafts, antiques, and street food.",
          timing: "Friday-Sunday, 6:00 PM - 12:00 AM",
          ticketPrice: "Free"
        },
        {
          name: "Baba & Nyonya Heritage Museum",
          description: "Beautifully preserved Peranakan townhouse showcasing the unique culture and lifestyle of Straits Chinese settlers.",
          timing: "10:00 AM - 4:30 PM (Closed Tuesdays)",
          ticketPrice: "$10"
        },
        {
          name: "Melaka River Cruise",
          description: "Scenic boat ride along the historic Melaka River, passing by street art, traditional houses, and colonial buildings.",
          timing: "9:00 AM - 11:30 PM",
          ticketPrice: "$8"
        }
      ],
    travelTips: [
      "Visit during weekdays to avoid crowds",
      "Try Nyonya cuisine at local restaurants",
      "Take evening river cruises",
      "Stay in heritage hotels for authentic experience",
      "Use trishaw rides for short distances"
    ],
    bestTimeToVisit: "June to September (Less rainfall)",
    gettingAround: [
      "Walking in heritage area",
      "Traditional trishaws",
      "Local buses",
      "Grab services"
    ],
    accommodation: [
      {
        type: "Heritage",
        suggestions: ["The Majestic Malacca", "Courtyard @ Heeren", "Liu Men Melaka"],
        priceRange: "$150-$300/night"
      },
      {
        type: "Mid-range",
        suggestions: ["Jonker Boutique Hotel", "Casa del Rio", "Heeren Palm Suites"],
        priceRange: "$80-$150/night"
      },
      {
        type: "Budget",
        suggestions: ["Wayfarer Guest House", "Ringo's Foyer Guest House", "Olive Homestay"],
        priceRange: "$20-$80/night"
      }
    ]
  },

  "cameron-highlands-retreat": {
    title: "Cameron Highlands Retreat",
    image: "https://images.unsplash.com/photo-1523920290228-4f321a939b4c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    duration: "3 Days",
    price: "From $400",
    description: "Escape to Malaysia's largest hill station, where cool climate, tea plantations, and strawberry farms create a perfect retreat. Experience British colonial heritage, nature trails, and agricultural tourism in this highland paradise.",
    highlights: [
      "BOH Tea Plantation - Scenic tea fields and factory tour",
      "Mossy Forest - Ancient forest ecosystem",
      "Strawberry Farms - Pick-your-own experience",
      "Local Markets - Fresh produce and flowers"
    ],
    attractions: [
        {
          name: "BOH Tea Plantation",
          description: "Visit Malaysia's largest tea plantation, learn about tea processing, and enjoy spectacular views with fresh tea at the cafe.",
          timing: "9:00 AM - 4:30 PM (Closed Mondays)",
          ticketPrice: "Free (Tours available)"
        },
        {
          name: "Mossy Forest Boardwalk",
          description: "Explore a unique high-altitude environment with guided tours explaining the diverse ecosystem and plant life.",
          timing: "7:00 AM - 6:00 PM",
          ticketPrice: "$10 with guide"
        },
        {
          name: "Butterfly Garden",
          description: "Interactive garden featuring local butterfly species, insects, and various highland flowers.",
          timing: "9:00 AM - 6:00 PM",
          ticketPrice: "$5"
        },
        {
          name: "Raaju's Hill Strawberry Farm",
          description: "Popular strawberry farm offering pick-your-own experience and fresh strawberry products in a scenic highland setting.",
          timing: "8:00 AM - 6:00 PM",
          ticketPrice: "Free entry, pay for picked strawberries"
        },
        {
          name: "Time Tunnel Museum",
          description: "Unique museum showcasing the history and development of Cameron Highlands through memorabilia and historical artifacts.",
          timing: "9:00 AM - 5:30 PM",
          ticketPrice: "$5"
        }
      ],
    travelTips: [
      "Bring warm clothing for cool evenings",
      "Visit tea plantations early morning",
      "Book guided forest walks in advance",
      "Try local steamboat dining",
      "Weekend markets are busiest"
    ],
    bestTimeToVisit: "February to April (Drier months)",
    gettingAround: [
      "Join organized tours",
      "Rental cars recommended",
      "Local taxis available",
      "Some attractions within walking distance"
    ],
    accommodation: [
      {
        type: "Luxury",
        suggestions: ["Cameron Highlands Resort", "The Lakehouse", "Copthorne Hotel"],
        priceRange: "$150-$300/night"
      },
      {
        type: "Mid-range",
        suggestions: ["Strawberry Park Resort", "Nova Highlands Resort", "Century Pines Resort"],
        priceRange: "$80-$150/night"
      },
      {
        type: "Budget",
        suggestions: ["Cameronian Inn", "Twin Pines", "Kea Garden"],
        priceRange: "$30-$80/night"
      }
    ]
  },
  "bangkok-city-adventure": {
    title: "Bangkok City Adventure",
    image: "https://plus.unsplash.com/premium_photo-1664910039021-a1bfcc6574b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    duration: "5 Days",
    price: "From $700",
    description: "Immerse yourself in the vibrant culture of Thailand's capital city. From ornate temples to bustling markets, modern shopping centers to authentic street food, experience the perfect blend of traditional and contemporary Thai lifestyle.",
    highlights: [
      "Grand Palace - Former residence of Thai royalty",
      "Wat Arun - Iconic temple of dawn",
      "Floating Markets - Traditional water-based commerce",
      "Chatuchak Market - World's largest weekend market"
    ],
    attractions: [
      {
        name: "Grand Palace & Wat Phra Kaew",
        description: "The former residence of Thai kings and home to the revered Emerald Buddha. Marvel at the intricate architecture and sacred buildings within this vast complex.",
        timing: "8:30 AM - 3:30 PM",
        ticketPrice: "$15"
      },
      {
        name: "Wat Arun (Temple of Dawn)",
        description: "Stunning riverside temple known for its intricate porcelain decoration and spectacular sunset views. Climb the steep steps for panoramic river views.",
        timing: "8:00 AM - 6:00 PM",
        ticketPrice: "$3"
      },
      {
        name: "Damnoen Saduak Floating Market",
        description: "Experience traditional Thai water market where local vendors sell fresh produce, cooked food, and souvenirs from their boats.",
        timing: "7:00 AM - 2:00 PM",
        ticketPrice: "Free (boat ride extra)"
      },
      {
        name: "Chatuchak Weekend Market",
        description: "Explore over 15,000 stalls selling everything from antiques to street food. One of the world's largest outdoor markets.",
        timing: "Saturday-Sunday, 6:00 AM - 6:00 PM",
        ticketPrice: "Free"
      },
      {
        name: "Asiatique The Riverfront",
        description: "Modern night market and mall along the Chao Phraya River, featuring shopping, dining, and entertainment options.",
        timing: "4:00 PM - 12:00 AM",
        ticketPrice: "Free"
      }
    ],
    travelTips: [
      "Dress respectfully when visiting temples (cover shoulders and knees)",
      "Use BTS Skytrain and MRT for convenient travel",
      "Carry cash for street food and markets",
      "Stay hydrated in the tropical climate",
      "Learn basic Thai greetings"
    ],
    bestTimeToVisit: "November to February (Cool Season)",
    gettingAround: [
      "BTS Skytrain for city center",
      "MRT underground system",
      "Tuk-tuks for short distances",
      "River boats on Chao Phraya",
      "Grab taxi service"
    ],
    accommodation: [
      {
        type: "Luxury",
        suggestions: ["Mandarin Oriental", "The Peninsula", "Shangri-La"],
        priceRange: "$300-$600/night"
      },
      {
        type: "Mid-range",
        suggestions: ["Anantara Riverside", "Amari Watergate", "Eastin Grand"],
        priceRange: "$100-$300/night"
      },
      {
        type: "Budget",
        suggestions: ["Lub d Bangkok", "Once Again Hostel", "Here Hostel"],
        priceRange: "$20-$100/night"
      }
    ]
  },

  "bali-beach-getaway": {
    title: "Bali Beach Getaway",
    image: "https://plus.unsplash.com/premium_photo-1682097623645-4fd444d9cecb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    duration: "6 Days",
    price: "From $800",
    description: "Discover the paradise island of Bali, where pristine beaches meet ancient temples, and lush rice terraces complement luxury resorts. Experience the perfect blend of relaxation, culture, and adventure in this tropical haven.",
    highlights: [
      "Tanah Lot - Iconic ocean temple",
      "Ubud - Cultural heart of Bali",
      "Nusa Dua - Pristine beaches",
      "Sacred Monkey Forest - Nature and temples"
    ],
    attractions: [
      {
        name: "Tanah Lot Temple",
        description: "Ancient Hindu shrine perched on a rocky outcrop in the sea. Famous for its unique location and spectacular sunset views.",
        timing: "7:00 AM - 7:00 PM",
        ticketPrice: "$10"
      },
      {
        name: "Ubud Monkey Forest",
        description: "Natural forest sanctuary home to over 700 monkeys and ancient temples. Experience Balinese spiritual and natural heritage.",
        timing: "8:30 AM - 6:00 PM",
        ticketPrice: "$8"
      },
      {
        name: "Tegalalang Rice Terraces",
        description: "Stunning terraced rice paddies showcasing traditional Balinese irrigation system. Perfect for photography and scenic walks.",
        timing: "8:00 AM - 6:00 PM",
        ticketPrice: "Free (small donation expected)"
      },
      {
        name: "Uluwatu Temple",
        description: "Ancient sea temple perched on cliffs with traditional Kecak fire dance performances at sunset.",
        timing: "7:00 AM - 7:00 PM",
        ticketPrice: "$10"
      },
      {
        name: "Waterbom Bali",
        description: "Asia's #1 waterpark featuring world-class slides and attractions in a tropical setting.",
        timing: "9:00 AM - 6:00 PM",
        ticketPrice: "$45"
      }
    ],
    travelTips: [
      "Respect temple dress codes and customs",
      "Book private driver for day trips",
      "Stay alert for wild monkeys",
      "Carry cash for local markets",
      "Use reputable spa services"
    ],
    bestTimeToVisit: "April to October (Dry Season)",
    gettingAround: [
      "Private car with driver",
      "Scooter rental",
      "Grab/Gojek services",
      "Hotel shuttle services",
      "Local taxis"
    ],
    accommodation: [
      {
        type: "Luxury",
        suggestions: ["Four Seasons Jimbaran", "The St. Regis Bali", "Bulgari Resort"],
        priceRange: "$500-$1000/night"
      },
      {
        type: "Mid-range",
        suggestions: ["Alila Ubud", "Maya Sanur", "The Anvaya Beach Resort"],
        priceRange: "$150-$500/night"
      },
      {
        type: "Budget",
        suggestions: ["Ubud Tropical Garden", "Kuta EcoStay", "The Island Hotel"],
        priceRange: "$30-$150/night"
      }
    ]
  },

  "manila-cultural-experience": {
    title: "Manila Cultural Experience",
    image: "https://images.unsplash.com/photo-1579957023433-7fad5b83efae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    duration: "4 Days",
    price: "From $500",
    description: "Explore the vibrant capital of the Philippines, where Spanish colonial history meets modern Filipino culture. Experience historic walled cities, bustling markets, and the famous Filipino hospitality.",
    highlights: [
      "Intramuros - Historic walled city",
      "Rizal Park - Urban cultural park",
      "San Agustin Church - UNESCO World Heritage site",
      "Binondo - World's oldest Chinatown"
    ],
    attractions: [
      {
        name: "Intramuros Walking Tour",
        description: "Explore the historic walled city featuring Spanish colonial architecture, churches, and Fort Santiago. Learn about Philippine history through guided tours.",
        timing: "8:00 AM - 6:00 PM",
        ticketPrice: "$20 with guide"
      },
      {
        name: "San Agustin Church & Museum",
        description: "UNESCO World Heritage site and oldest stone church in the Philippines. Features baroque architecture and historical artifacts.",
        timing: "8:00 AM - 12:00 PM, 1:00 PM - 6:00 PM",
        ticketPrice: "$3"
      },
      {
        name: "National Museum Complex",
        description: "Collection of museums showcasing Filipino heritage, art, and natural history. Includes the National Museum of Fine Arts and Natural History.",
        timing: "Tuesday-Sunday, 10:00 AM - 5:00 PM",
        ticketPrice: "Free"
      },
      {
        name: "Binondo Food Walk",
        description: "Culinary tour through the world's oldest Chinatown, sampling authentic Chinese-Filipino cuisine and local delicacies.",
        timing: "10:00 AM - 8:00 PM",
        ticketPrice: "Food costs vary"
      },
      {
        name: "Manila Ocean Park",
        description: "Modern oceanarium complex featuring marine life exhibits, shows, and interactive experiences.",
        timing: "10:00 AM - 8:00 PM",
        ticketPrice: "$25"
      }
    ],
    travelTips: [
      "Stay hydrated in tropical weather",
      "Use Grab for reliable transportation",
      "Be cautious with belongings in crowded areas",
      "Try local street food at established locations",
      "Learn basic Filipino phrases"
    ],
    bestTimeToVisit: "December to February (Cool and Dry)",
    gettingAround: [
      "Grab taxi service",
      "Light Rail Transit (LRT)",
      "Metro Rail Transit (MRT)",
      "Traditional jeepneys",
      "Hotel car service"
    ],
    accommodation: [
      {
        type: "Luxury",
        suggestions: ["Sofitel Philippine Plaza", "Manila Peninsula", "Shangri-La at the Fort"],
        priceRange: "$200-$400/night"
      },
      {
        type: "Mid-range",
        suggestions: ["Diamond Hotel", "Manila Marriott Hotel", "New World Manila Bay"],
        priceRange: "$100-$200/night"
      },
      {
        type: "Budget",
        suggestions: ["Red Planet Manila", "ZEN Rooms", "Citystate Hotel"],
        priceRange: "$30-$100/night"
      }
    ]
  }
};