import { Room, Amenity, Attraction, FAQItem, GalleryImage } from "./types";

export const hotelInfo = {
  name: "Hotel Mittal Paradise",
  headline: "Your Sacred & Comfortable Abode in the Divine City of Ujjain",
  tagline: "Hotels in Ujjain Near Mahakaleshwar Temple",
  location: "Near Mahakaleshwar Temple, Jaisinghpura, Mahakal Lok Road, Ujjain, Madhya Pradesh - 456001",
  whatsappNumber: "+91 84098 04535",
  whatsappLink: "https://wa.me/918409804535",
  defaultMsg: "Hello Hotel Mittal Paradise, I want to book a room. Please share room availability and tariff.",
  phoneFormatted: "+91 84098 04535",
  email: "info@hotelmittalparadiseujjain.com",
  seoShortDesc: "Affordable luxury, family-friendly atmosphere, and unmatched convenience. Located just 5-10 minutes walking distance from the sacred Mahakaleshwar Jyotirlinga and the majestic Mahakal Lok Corridor.",
};

export const roomsData: Room[] = [
  {
    id: "2bed-ac",
    name: "Executive 2 Bed Room (AC)",
    type: "AC",
    beds: 2,
    occupancy: "Ideal for Couples & Solitary Travelers (2 Adults + 1 Child)",
    image: new URL("./assets/images/regenerated_image_1783415561998.jpg", import.meta.url).href,
    features: [
      "Premium Air Conditioning (AC)",
      "High-speed Free Wi-Fi",
      "Attached Bathroom with Geyser",
      "Smart LED TV",
      "Intercom Facility",
      "Hygienic Linens & Pillows",
      "Complimentary Bottled Water",
      "24x7 Prompt Room Service"
    ]
  },
  {
    id: "2bed-nonac",
    name: "Standard 2 Bed Room (Non-AC)",
    type: "Non AC",
    beds: 2,
    occupancy: "Budget option for Couples & Backpackers (2 Adults + 1 Child)",
    image: new URL("./assets/images/regenerated_image_1783415566985.jpg", import.meta.url).href,
    features: [
      "Energy-Efficient Ceiling Fan",
      "High-speed Free Wi-Fi",
      "Attached Bathroom with Geyser",
      "LED TV",
      "Intercom Facility",
      "Fresh Bed Linens",
      "Comfortable Seating Area",
      "24x7 Room Service"
    ]
  },
  {
    id: "3bed-ac",
    name: "Deluxe Family 3 Bed Room (AC)",
    type: "AC",
    beds: 3,
    occupancy: "Perfect for Small Families & Small Groups (3 Adults + 1 Child)",
    image: new URL("./assets/images/regenerated_image_1783415570275.webp", import.meta.url).href,
    features: [
      "Premium Air Conditioning (AC)",
      "Extra Spacious Layout",
      "High-speed Free Wi-Fi",
      "Attached Bathroom with 24x7 Geyser",
      "Smart LED TV",
      "Comfortable Wardrobe & Table",
      "Fresh & Sanitized Linens",
      "Complimentary Toiletries"
    ]
  },
  {
    id: "3bed-nonac",
    name: "Standard Family 3 Bed Room (Non-AC)",
    type: "Non AC",
    beds: 3,
    occupancy: "Budget Choice for Small Families (3 Adults + 1 Child)",
    image: new URL("./assets/images/regenerated_image_1783415571606.webp", import.meta.url).href,
    features: [
      "Dual High-speed Ceiling Fans",
      "Spacious Layout",
      "High-speed Free Wi-Fi",
      "Attached Bathroom with Geyser",
      "LED TV with Cable Channels",
      "Pure Drinking Water",
      "Clean Bedcovers & Pillows",
      "24x7 Front Desk Support"
    ]
  },
  {
    id: "4bed-ac",
    name: "Premium Quad Family 4 Bed Room (AC)",
    type: "AC",
    beds: 4,
    occupancy: "Luxury Suite for Large Families & Pilgrim Groups (4-5 Adults)",
    image: new URL("./assets/images/regenerated_image_1783415572824.jpg", import.meta.url).href,
    features: [
      "Premium Air Conditioning (AC)",
      "2 Queen-Sized Beds side-by-side",
      "Complimentary High-speed Wi-Fi",
      "Spacious Ensuite Bathroom with Geyser",
      "Large Smart LED TV",
      "Seating Sofas & Tea Table",
      "Daily Deep Housekeeping",
      "Complimentary Toiletries & Water"
    ]
  },
  {
    id: "4bed-nonac",
    name: "Standard Quad Family 4 Bed Room (Non-AC)",
    type: "Non AC",
    beds: 4,
    occupancy: "Affordable Group Lodging for Pilgrims (4-5 Adults)",
    image: new URL("./assets/images/regenerated_image_1783415573872.jpg", import.meta.url).href,
    features: [
      "Dual Ceiling Fans & Great Ventilation",
      "2 Double Beds",
      "Complimentary High-speed Wi-Fi",
      "Attached Bathroom with Geyser",
      "LED TV",
      "Durable Wardrobe",
      "Hygienic Clean Rooms",
      "Prompt Call Bell Room Service"
    ]
  }
];

export const amenitiesData: Amenity[] = [
  {
    id: "wifi",
    name: "Free Wi-Fi",
    description: "Stay connected with your family and book online darshan slots with our high-speed complimentary Wi-Fi across the property.",
    iconName: "Wifi"
  },
  {
    id: "family",
    name: "Family Rooms",
    description: "Spacious multi-bed rooms (2, 3, and 4 bed options) designed perfectly for families and pilgrim groups visiting Ujjain.",
    iconName: "Users"
  },
  {
    id: "ac",
    name: "AC & Non AC Rooms",
    description: "Fully customized stays tailored to your budget. Choose between premium Air-Conditioned comfort and cozy, ventilation-optimized non-AC rooms.",
    iconName: "Wind"
  },
  {
    id: "reception",
    name: "24×7 Reception",
    description: "Our dedicated and local reception desk is active 24 hours a day to assist you with quick check-in, taxi bookings, and local guidance.",
    iconName: "Clock"
  },
  {
    id: "parking",
    name: "Parking",
    description: "Safe, secure, and hassle-free vehicle parking for guest cars, tourist travelers, and private family vehicles.",
    iconName: "Car"
  },
  {
    id: "hotwater",
    name: "Hot Water",
    description: "Running hot water facilitated by premium quality heavy-duty electric geysers in all rooms for a refreshing bath.",
    iconName: "Flame"
  },
  {
    id: "tv",
    name: "Smart TV",
    description: "Stay entertained with multi-channel LED Smart TVs inside each room for catching up on news, series, or devotional channels.",
    iconName: "Tv"
  },
  {
    id: "roomservice",
    name: "Room Service",
    description: "Enjoy hot tea, pure vegetarian meals, and essential room services delivered directly to your bed with just a single call.",
    iconName: "Coffee"
  },
  {
    id: "security",
    name: "CCTV Security",
    description: "Your safety is our priority. Continuous digital video surveillance in all common corridors, lobby areas, and entrance gates.",
    iconName: "ShieldCheck"
  },
  {
    id: "backup",
    name: "Power Backup",
    description: "Uninterrupted lighting and power with our robust, automated secondary generator systems to handle power outages.",
    iconName: "Zap"
  },
  {
    id: "clean",
    name: "Clean & Hygienic Rooms",
    description: "Deep sanitization protocols, sparkling clean toilets, and fresh linens changed daily to ensure a healthy stay.",
    iconName: "Sparkles"
  }
];

export const attractionsData: Attraction[] = [
  {
    name: "Mahakaleshwar Jyotirlinga Temple",
    distance: "450 meters (5 Mins Walk)",
    description: "One of the most famous Hindu temples dedicated to Lord Shiva and one of the twelve sacred Jyotirlingas. Famous for its majestic architecture, holy water tank, and the divine daily Bhasma Aarti.",
    image: new URL("./assets/images/regenerated_image_1783417209499.jpg", import.meta.url).href,
    timeToVisit: "Open 4:00 AM - 11:00 PM. Best to visit during early morning Bhasma Aarti or late evening Shringar Aarti."
  },
  {
    name: "Shree Mahakal Lok Corridor",
    distance: "400 meters (5 Mins Walk)",
    description: "A monumental world-class corridor stretching around the old Rudrasagar Lake. It features over 108 majestic sandstone pillars, high-tech light displays, and sculptures depicting Lord Shiva's lifeworld.",
    image: new URL("./assets/images/regenerated_image_1783417211136.jpg", import.meta.url).href,
    timeToVisit: "Looks breathtaking in the evening (6:00 PM - 10:00 PM) when all the lights, murals, and musical fountains are active."
  },
  {
    name: "Ram Ghat (Shipra River Banks)",
    distance: "1.2 km (4 Mins Drive / 12 Mins Walk)",
    description: "The oldest and most iconic bathing ghat in Ujjain where millions of devotees take a holy dip during the legendary Simhastha Kumbh Mela. Hosted daily with magnificent, soul-stirring Shipra River evening Aarti.",
    image: new URL("./assets/images/regenerated_image_1783417213295.jpg", import.meta.url).href,
    timeToVisit: "Perfect for a serene evening walk around sunset (5:30 PM - 7:00 PM) to experience the peaceful floating oil lamps and chants."
  },
  {
    name: "Harsiddhi Mata Shaktipeeth Temple",
    distance: "800 meters (8 Mins Walk)",
    description: "One of the 51 holy Shaktipeeths of India, holding the elbow of Goddess Sati. It features two grand, unique 15-meter tall iron deepmalas (lamp pillars) containing 1,000+ oil lamps which are lit by hand daily.",
    image: new URL("./assets/images/regenerated_image_1783417215422.webp", import.meta.url).href,
    timeToVisit: "Visit at 6:30 PM to witness the spectacular, rhythmic lighting of the massive lamp towers during evening prayers."
  },
  {
    name: "Kaal Bhairav Temple",
    distance: "4.5 km (12 Mins Drive)",
    description: "A powerful, historic temple dedicated to Kaal Bhairav, the fierce guardian deity of Ujjain. Uniquely, the deity is offered liquid alcohol as a daily dynamic prasad, which is miraculously consumed before your eyes.",
    image: new URL("./assets/images/regenerated_image_1783417218256.jpg", import.meta.url).href,
    timeToVisit: "Open 6:00 AM - 10:00 PM. Highly energetic and busy on Sundays and festival days like Bhairav Ashtami."
  },
  {
    name: "Maharishi Sandipani Ashram",
    distance: "4.0 km (10 Mins Drive)",
    description: "An ancient learning hermitage mentioned in the Puranas. This is the sacred spot where Lord Krishna, his brother Balarama, and his companion Sudama studied 64 arts and sciences under Guru Sandipani.",
    image: new URL("./assets/images/regenerated_image_1783417219637.webp", import.meta.url).href,
    timeToVisit: "9:00 AM - 6:00 PM. Includes the historic Gomti Kund, and a massive monolithic standing stone with inscriptions."
  }
];

export const faqData: FAQItem[] = [
  {
    id: "faq-dist",
    question: "What is the distance between Hotel Mittal Paradise and the Mahakaleshwar Jyotirlinga Temple?",
    answer: "Hotel Mittal Paradise is located extremely close (just 450 meters) to the Mahakaleshwar Temple and 400 meters to the newly opened Shree Mahakal Lok Corridor. You can walk to the temple gates in less than 5 to 10 minutes, completely avoiding traffic and auto transport worries.",
    category: "hotel"
  },
  {
    id: "faq-book",
    question: "How can I make an online room booking at Hotel Mittal Paradise?",
    answer: "To keep our tariffs affordable and avoid third-party agency markups, we handle bookings exclusively on WhatsApp. Simply click any 'Book Now' button on this website, or send a direct text to +91 84098 04535. Our customer desk will immediately share live availability, photos, and UPI payment details to lock your booking.",
    category: "booking"
  },
  {
    id: "faq-rooms",
    question: "Do you offer both Air-Conditioned (AC) and Non-AC family rooms?",
    answer: "Yes, we offer multiple room configurations to fit every pilgrim's budget and comfort level. We have 2 Bed Rooms, 3 Bed Rooms, and 4 Bed Rooms, all available in both AC and Non-AC categories. Each is equipped with private clean bathrooms, hot water geysers, smart TVs, and premium Wi-Fi.",
    category: "hotel"
  },
  {
    id: "faq-parking",
    question: "Is car parking available for guests driving to Ujjain?",
    answer: "Yes, we offer safe, continuous on-site car parking for our guests. You can park your private cars, SUVs, or family traveler buses securely. CCTV cameras monitor the parking areas 24x7.",
    category: "hotel"
  },
  {
    id: "faq-bhasma",
    question: "Can Hotel Mittal Paradise help with Bhasma Aarti bookings or VIP Darshan?",
    answer: "Bhasma Aarti tickets are strictly regulated by the Shree Mahakaleshwar Temple Trust and should be booked in advance via their official website. However, our reception staff is 100% local and provides free personal guidance, step-by-step instructions, and tips on how to obtain quick darshan passes and avoid local tourist scams.",
    category: "temple"
  },
  {
    id: "faq-checkin",
    question: "What are the check-in and check-out timings of the hotel?",
    answer: "Our standard check-in time is 12:00 PM (Noon) and check-out is 11:00 AM. If you are arriving early in the morning by train or bus, please notify us on WhatsApp. We accommodate early check-in requests whenever rooms are available from the previous night.",
    category: "hotel"
  },
  {
    id: "faq-dharamshala",
    question: "Is Hotel Mittal Paradise a hotel or a dharamshala in Ujjain?",
    answer: "Hotel Mittal Paradise offers the premium, clean, and professional service of a modern hotel (with AC rooms, smart TVs, geysers, room service, and secure parking) at extremely affordable prices that compete with local dharamshalas in Ujjain near temple gates. It is the best of both worlds for families seeking comfort and affordability.",
    category: "hotel"
  },
  {
    id: "faq-food",
    question: "Do you serve food or tea at the hotel?",
    answer: "We have an active in-room dining service. Guests can order refreshing tea, coffee, milk, and delicious local pure-vegetarian breakfast/meals (like Indori Poha, Sabudana Khichdi, and full Thalis) which are delivered hot and fresh directly to their rooms.",
    category: "hotel"
  }
];

export const galleryData: GalleryImage[] = [
  {
    id: "g1",
    url: new URL("./assets/images/regenerated_image_1783417195894.webp", import.meta.url).href,
    category: "exterior",
    alt: "Hotel Mittal Paradise Ujjain exterior rendering and front facade - Best hotel in Ujjain near Mahakaleshwar Temple",
    title: "Hotel Facade"
  },
  {
    id: "g2",
    url: new URL("./assets/images/regenerated_image_1783415561998.jpg", import.meta.url).href,
    category: "rooms",
    alt: "Executive 2 Bed Room AC - Clean beds and elegant interiors at Hotel Mittal Paradise Ujjain",
    title: "Executive 2 Bed AC"
  },
  {
    id: "g3",
    url: new URL("./assets/images/regenerated_image_1783415570275.webp", import.meta.url).href,
    category: "rooms",
    alt: "Deluxe Family 3 Bed Room AC - Spacious lodging for pilgrim families visiting Mahakaleshwar Temple",
    title: "Deluxe Family 3 Bed AC"
  },
  {
    id: "g4",
    url: new URL("./assets/images/regenerated_image_1783415572824.jpg", import.meta.url).href,
    category: "rooms",
    alt: "Premium Quad Family 4 Bed Room AC - Spacious luxury suite with double beds for groups at Hotel Mittal Paradise",
    title: "Premium Quad AC"
  },
  {
    id: "g5",
    url: new URL("./assets/images/regenerated_image_1783415566985.jpg", import.meta.url).href,
    category: "rooms",
    alt: "Standard 2 Bed Room Non-AC - Budget accommodation near Mahakal temple Ujjain",
    title: "Standard 2 Bed Non-AC"
  },
  {
    id: "g6",
    url: new URL("./assets/images/regenerated_image_1783417199043.webp", import.meta.url).href,
    category: "temple",
    alt: "Shree Mahakaleshwar Jyotirlinga Temple Ujjain - Pilgrimage near Hotel Mittal Paradise",
    title: "Shree Mahakaleshwar Jyotirlinga"
  },
  {
    id: "g7",
    url: new URL("./assets/images/regenerated_image_1783417202113.jpg", import.meta.url).href,
    category: "temple",
    alt: "Shree Mahakal Lok Corridor Ujjain - 400 meters walking distance from Hotel Mittal Paradise",
    title: "Mahakal Lok Corridor"
  },
  {
    id: "g8",
    url: new URL("./assets/images/regenerated_image_1783417204987.jpg", import.meta.url).href,
    category: "amenities",
    alt: "High-speed free Wi-Fi and smart led TV in rooms for convenient online darshan booking in Ujjain",
    title: "Complimentary Free Wi-Fi"
  },
  {
    id: "g9",
    url: new URL("./assets/images/regenerated_image_1783415573872.jpg", import.meta.url).href,
    category: "rooms",
    alt: "Spacious group lodging at Hotel Mittal Paradise - budget dharamshala in Ujjain near temple gates",
    title: "Spacious Multi-Bed Layout"
  }
];
