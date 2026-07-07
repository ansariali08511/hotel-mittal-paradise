export interface Room {
  id: string;
  name: string;
  type: "AC" | "Non AC";
  beds: 2 | 3 | 4;
  occupancy: string;
  priceEstimate?: string;
  image: string;
  features: string[];
}

export interface Amenity {
  id: string;
  name: string;
  description: string;
  iconName: string; // Map to Lucide icon dynamically
}

export interface Attraction {
  name: string;
  distance: string;
  description: string;
  image: string;
  timeToVisit: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "hotel" | "temple" | "booking";
}

export interface GalleryImage {
  id: string;
  url: string;
  category: "all" | "rooms" | "exterior" | "temple" | "amenities";
  alt: string;
  title: string;
}
