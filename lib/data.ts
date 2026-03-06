export interface Property {
  id: string
  title: string
  price: number
  location: string
  area: string
  bedrooms: number
  bathrooms: number
  sqft: number
  type: string
  image: string
  images: string[]
  description: string
  features: string[]
  amenities: string[]
  agentId: string
  featured: boolean
  status: "For Sale" | "For Rent"
  yearBuilt: number
}

export interface Agent {
  id: string
  name: string
  role: string
  image: string
  phone: string
  email: string
  properties: number
  experience: string
  bio: string
}

export interface Testimonial {
  id: string
  name: string
  role: string
  text: string
  rating: number
}

export const agents: Agent[] = [
  {
    id: "agent-1",
    name: "Adaeze Okonkwo",
    role: "Senior Property Consultant",
    image: "/images/agent-1.jpg",
    phone: "+234 801 234 5678",
    email: "adaeze@lagoshomes.com",
    properties: 45,
    experience: "12 years",
    bio: "Adaeze specializes in luxury waterfront properties across Ikoyi and Victoria Island. With over a decade of experience, she has helped hundreds of clients find their dream homes in Lagos's most exclusive neighborhoods.",
  },
  {
    id: "agent-2",
    name: "Chukwuemeka Adeyemi",
    role: "Lead Sales Director",
    image: "/images/agent-2.jpg",
    phone: "+234 802 345 6789",
    email: "emeka@lagoshomes.com",
    properties: 62,
    experience: "15 years",
    bio: "Emeka is one of Lagos's most respected real estate professionals, known for closing premium deals in Lekki and Banana Island. His deep market knowledge and client-first approach set him apart.",
  },
  {
    id: "agent-3",
    name: "Funmilayo Bakare",
    role: "Luxury Home Specialist",
    image: "/images/agent-3.jpg",
    phone: "+234 803 456 7890",
    email: "funmi@lagoshomes.com",
    properties: 38,
    experience: "8 years",
    bio: "Funmilayo brings a fresh perspective to luxury real estate. She excels in finding unique properties that match her clients' lifestyles, specializing in modern penthouses and designer homes.",
  },
  {
    id: "agent-4",
    name: "Oluwaseun Afolabi",
    role: "Investment Advisor",
    image: "/images/agent-4.jpg",
    phone: "+234 804 567 8901",
    email: "seun@lagoshomes.com",
    properties: 51,
    experience: "10 years",
    bio: "Seun combines his background in finance with real estate expertise to guide investors toward high-value properties. He specializes in commercial and mixed-use developments across Lagos.",
  },
]

export const properties: Property[] = [
  {
    id: "prop-1",
    title: "Oceanview Penthouse Suite",
    price: 450000000,
    location: "Eko Atlantic, Victoria Island",
    area: "Victoria Island",
    bedrooms: 5,
    bathrooms: 6,
    sqft: 8500,
    type: "Penthouse",
    image: "/images/property-1.jpg",
    images: ["/images/property-1.jpg", "/images/property-2.jpg", "/images/property-3.jpg"],
    description: "Experience unparalleled luxury living in this stunning penthouse suite overlooking the Atlantic Ocean. This masterfully designed residence features floor-to-ceiling windows, imported Italian marble flooring, and a private rooftop terrace with infinity pool. The chef's kitchen boasts top-of-the-line appliances, while the master suite offers a spa-like bathroom and walk-in closet.",
    features: ["Smart Home System", "Private Elevator", "Infinity Pool", "Home Theater", "Wine Cellar", "Rooftop Terrace"],
    amenities: ["24/7 Security", "Concierge Service", "Fitness Center", "Spa & Sauna", "Underground Parking", "Children's Play Area"],
    agentId: "agent-1",
    featured: true,
    status: "For Sale",
    yearBuilt: 2023,
  },
  {
    id: "prop-2",
    title: "Banana Island Waterfront Villa",
    price: 850000000,
    location: "Banana Island, Ikoyi",
    area: "Ikoyi",
    bedrooms: 7,
    bathrooms: 8,
    sqft: 12000,
    type: "Villa",
    image: "/images/property-2.jpg",
    images: ["/images/property-2.jpg", "/images/property-1.jpg", "/images/property-4.jpg"],
    description: "This magnificent waterfront villa on Banana Island represents the pinnacle of luxury living in Lagos. Set on expansive grounds with breathtaking lagoon views, the property features a grand entrance hall, multiple living areas, and a master wing spanning the entire upper floor. The outdoor space includes an Olympic-size pool, landscaped gardens, and a private jetty.",
    features: ["Waterfront", "Private Jetty", "Olympic Pool", "Staff Quarters", "Generator House", "CCTV System"],
    amenities: ["Private Beach Access", "Tennis Court", "Guest House", "Landscaped Gardens", "Double Garage", "Backup Power"],
    agentId: "agent-2",
    featured: true,
    status: "For Sale",
    yearBuilt: 2022,
  },
  {
    id: "prop-3",
    title: "Contemporary Lekki Mansion",
    price: 320000000,
    location: "Lekki Phase 1",
    area: "Lekki",
    bedrooms: 6,
    bathrooms: 7,
    sqft: 9200,
    type: "Mansion",
    image: "/images/property-3.jpg",
    images: ["/images/property-3.jpg", "/images/property-5.jpg", "/images/property-6.jpg"],
    description: "A breathtaking contemporary mansion in the heart of Lekki Phase 1. This architectural masterpiece combines modern design with tropical elegance. Features include a double-height living room, gourmet kitchen, home cinema, and beautifully landscaped grounds with a heated swimming pool and outdoor entertainment area.",
    features: ["Double-Height Ceilings", "Home Cinema", "Heated Pool", "Smart Home", "Solar Panels", "Borehole"],
    amenities: ["Gym", "Garden Lounge", "BBQ Area", "Security Post", "Ample Parking", "Domestic Quarters"],
    agentId: "agent-3",
    featured: true,
    status: "For Sale",
    yearBuilt: 2024,
  },
  {
    id: "prop-4",
    title: "Executive Duplex with Pool",
    price: 180000000,
    location: "Chevron Drive, Lekki",
    area: "Lekki",
    bedrooms: 4,
    bathrooms: 5,
    sqft: 5500,
    type: "Duplex",
    image: "/images/property-4.jpg",
    images: ["/images/property-4.jpg", "/images/property-1.jpg", "/images/property-3.jpg"],
    description: "This stunning executive duplex offers modern living at its finest. Located on the prestigious Chevron Drive corridor, it features an open-plan living and dining area, a fully fitted kitchen with island, and generously sized bedrooms each with en-suite bathrooms. The property includes a private swimming pool and well-manicured compound.",
    features: ["Swimming Pool", "Fitted Kitchen", "All Rooms En-suite", "Interlocked Compound", "POP Ceiling", "Tiled Floors"],
    amenities: ["24hr Power Supply", "Water Treatment", "Security", "CCTV", "Electric Fence", "Gate Automation"],
    agentId: "agent-4",
    featured: true,
    status: "For Sale",
    yearBuilt: 2023,
  },
  {
    id: "prop-5",
    title: "Luxury Apartment in Ikoyi",
    price: 95000000,
    location: "Old Ikoyi",
    area: "Ikoyi",
    bedrooms: 3,
    bathrooms: 4,
    sqft: 3200,
    type: "Apartment",
    image: "/images/property-5.jpg",
    images: ["/images/property-5.jpg", "/images/property-2.jpg", "/images/property-6.jpg"],
    description: "A premium 3-bedroom apartment in the serene Old Ikoyi neighborhood. This tastefully finished unit offers modern open-plan living, a fully equipped kitchen, and a large private balcony with city views. Located in a secure estate with excellent facilities and close proximity to major landmarks.",
    features: ["Balcony with Views", "Open Plan Design", "Wardrobes", "Air Conditioning", "Modern Finishes", "Service Charge Inclusive"],
    amenities: ["Swimming Pool", "Gym", "Elevator", "Parking Space", "Power Backup", "Estate Security"],
    agentId: "agent-1",
    featured: false,
    status: "For Sale",
    yearBuilt: 2023,
  },
  {
    id: "prop-6",
    title: "Beachfront Estate Home",
    price: 550000000,
    location: "Ilashe Beach, Lagos",
    area: "Ajah",
    bedrooms: 5,
    bathrooms: 6,
    sqft: 7800,
    type: "Villa",
    image: "/images/property-6.jpg",
    images: ["/images/property-6.jpg", "/images/property-4.jpg", "/images/property-1.jpg"],
    description: "An extraordinary beachfront estate offering direct access to the pristine Ilashe Beach. This resort-style property features expansive living spaces, a chef's kitchen, and a master suite with ocean views. The grounds include tropical gardens, a beachside cabana, and a stunning infinity pool that seems to merge with the ocean.",
    features: ["Beach Access", "Infinity Pool", "Cabana", "Ocean Views", "Tropical Gardens", "Outdoor Kitchen"],
    amenities: ["Boat Dock", "Beach Volleyball", "Fire Pit", "Staff Accommodation", "Water Sports", "Solar Power"],
    agentId: "agent-2",
    featured: true,
    status: "For Sale",
    yearBuilt: 2024,
  },
  {
    id: "prop-7",
    title: "Modern Terrace in Ajah",
    price: 65000000,
    location: "Abraham Adesanya, Ajah",
    area: "Ajah",
    bedrooms: 3,
    bathrooms: 3,
    sqft: 2400,
    type: "Terrace",
    image: "/images/property-3.jpg",
    images: ["/images/property-3.jpg", "/images/property-5.jpg", "/images/property-1.jpg"],
    description: "A beautifully designed 3-bedroom terrace duplex in the fast-developing Ajah area. This smart investment offers modern architecture, an open-plan ground floor, and well-proportioned bedrooms. Located in a gated community with shared amenities and excellent road network access.",
    features: ["Gated Community", "Modern Design", "Open Plan", "Fitted Kitchen", "All En-suite", "Store Room"],
    amenities: ["Community Pool", "Playground", "Estate Road", "Drainage System", "Security Post", "Green Areas"],
    agentId: "agent-3",
    featured: false,
    status: "For Sale",
    yearBuilt: 2024,
  },
  {
    id: "prop-8",
    title: "Victoria Island Smart Home",
    price: 280000000,
    location: "Oniru Estate, Victoria Island",
    area: "Victoria Island",
    bedrooms: 5,
    bathrooms: 5,
    sqft: 6100,
    type: "Detached",
    image: "/images/property-4.jpg",
    images: ["/images/property-4.jpg", "/images/property-2.jpg", "/images/property-6.jpg"],
    description: "A cutting-edge smart home in the exclusive Oniru Estate. Every element of this property is controlled via a central home automation system. Features include motorized blinds, ambient lighting control, integrated sound system, and advanced security. The architectural design is a statement of modern luxury.",
    features: ["Full Home Automation", "Motorized Blinds", "Ambient Lighting", "Sound System", "Biometric Access", "EV Charging"],
    amenities: ["Private Gym", "Rooftop Lounge", "Wine Room", "Study", "Staff Quarters", "3-Car Garage"],
    agentId: "agent-4",
    featured: true,
    status: "For Sale",
    yearBuilt: 2025,
  },
]

export const testimonials: Testimonial[] = [
  {
    id: "test-1",
    name: "Dr. Ngozi Eze",
    role: "Medical Director",
    text: "LagosHomes made finding our dream home an absolute pleasure. Their team understood exactly what we wanted and delivered beyond our expectations. The Ikoyi villa they found us is simply perfect.",
    rating: 5,
  },
  {
    id: "test-2",
    name: "Alhaji Musa Ibrahim",
    role: "CEO, Ibrahim Holdings",
    text: "Professional, knowledgeable, and incredibly responsive. LagosHomes helped me secure a prime investment property in Lekki that has already appreciated significantly. I highly recommend their services.",
    rating: 5,
  },
  {
    id: "test-3",
    name: "Chidinma Obi",
    role: "Tech Entrepreneur",
    text: "As a busy professional, I needed a team that could handle everything seamlessly. LagosHomes exceeded every expectation. From property search to final documentation, the experience was world-class.",
    rating: 5,
  },
]

export const areas = [
  { name: "Lekki", image: "/images/lekki.jpg", properties: 156, description: "Modern luxury living with premium estates and waterfront properties" },
  { name: "Ikoyi", image: "/images/ikoyi.jpg", properties: 89, description: "Lagos's most prestigious neighborhood with exclusive waterfront villas" },
  { name: "Victoria Island", image: "/images/victoria-island.jpg", properties: 124, description: "The commercial heart of Lagos with high-rise luxury apartments" },
  { name: "Ajah", image: "/images/ajah.jpg", properties: 201, description: "Fast-growing area with affordable luxury and new developments" },
]

export function formatPrice(price: number): string {
  if (price >= 1000000000) {
    return `₦${(price / 1000000000).toFixed(1)}B`
  }
  if (price >= 1000000) {
    return `₦${(price / 1000000).toFixed(0)}M`
  }
  return `₦${price.toLocaleString()}`
}
