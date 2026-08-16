import {
  Briefcase,
  Building2,
  CalendarCheck,
  ClipboardList,
  Handshake,
  Home,
  Hotel,
  ShieldCheck,
  Shirt,
  ShoppingBag,
  Sparkles,
  Wrench,
} from 'lucide-react';

export const company = {
  name: 'PEAK ELITE W.L.L',
  location: 'Bahrain',
  email: 'info@peakelitebh.com',
  phone: '+973 6500 1080',
  whatsapp: '+973 3883 6122',
  instagram: 'https://www.instagram.com/peakelitebh?utm_source=qr&igsh=c3JkNXllODg2bWpq',
};

export const navItems = [
  { label: 'Services', href: '#services' },
  { label: 'Approach', href: '#approach' },
  { label: 'Markets', href: '#markets' },
  { label: 'Contact', href: '#contact' },
];

export const stats = [
  { value: '6', label: 'Core Services' },
  { value: '100%', label: 'Satisfaction Guaranteed' },
  { value: 'Same Day', label: 'Response Time' },
  { value: '24/7', label: 'Support Available' },
];

export const services = [
  {
    title: 'Cabinet Decluttering',
    body: 'Our primary service — deep decluttering of cabinets, shelves, and storage spaces. We sort, remove, and organise everything to give you a truly fresh start.',
    icon: Sparkles,
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Wardrobe Organisation',
    body: 'Full wardrobe transformation — we sort, fold, hang, and arrange your clothes so every item has its place and your wardrobe works for you daily.',
    icon: Shirt,
    img: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Color-Coded Arrangement',
    body: 'Clothes and accessories arranged by colour for a visually stunning, easy-to-navigate wardrobe that makes getting dressed effortless.',
    icon: ShoppingBag,
    img: 'https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Closet Optimisation',
    body: 'Maximise every inch of your closet space with smart organisation systems, space-saving solutions, and a layout tailored to how you live.',
    icon: Home,
    img: '/assets/closet-optimization.jpg',
  },
  {
    title: 'Home Organisation',
    body: 'Full-home organisation for kitchens, living spaces, pantries, and utility areas — creating calm, functional environments throughout your home.',
    icon: ClipboardList,
    img: 'https://images.unsplash.com/photo-1484101403633-562f891dc89a?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Event Support',
    body: 'Pre-event setup and organisation, on-ground support, space arrangement, and post-event cleanup — so your event runs flawlessly.',
    icon: CalendarCheck,
    img: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=800&q=80',
  },
];

export const strengths = [
  {
    title: 'Bahrain-focused delivery',
    body: 'Built for local businesses, residences, hospitality venues, and event teams that need reliable, on-ground support.',
    icon: Building2,
  },
  {
    title: 'Elite presentation standards',
    body: 'Uniformed teams, professional conduct, and service standards that protect your environment and guest experience.',
    icon: ShieldCheck,
  },
  {
    title: 'Flexible coverage',
    body: 'Support structured around recurring schedules, seasonal needs, special events, or urgent requests — at any scale.',
    icon: Handshake,
  },
];

export const markets = [
  {
    label: 'Commercial Offices',
    icon: Building2,
    img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
  },
  {
    label: 'Hospitality Venues',
    icon: Hotel,
    img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
  },
  {
    label: 'Events & Exhibitions',
    icon: CalendarCheck,
    img: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=800&q=80',
  },
  {
    label: 'Residential Homes',
    icon: Home,
    img: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80',
  },
  {
    label: 'Retail Spaces',
    icon: ShoppingBag,
    img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80',
  },
  {
    label: 'Corporate Teams',
    icon: Briefcase,
    img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
  },
];

export const process = [
  'Requirement Review',
  'Service Plan',
  'Team Coordination',
  'On-Site Delivery',
  'Follow-Up',
];

export const socialGoals = [
  'Instagram',
  'TikTok',
  'Facebook',
  'WhatsApp Business',
];

export const trustPoints = [
  'Cleaning & facility support',
  'Hospitality & event staffing',
  'Bahrain market focus',
  'Professional uniforms',
];

export const pricingGroups = [
  {
    title: 'Wardrobe Management',
    note: 'Sorting, categorising, folding, arrangement, space optimisation, before & after documentation and a final double-check.',
    tiers: [
      { label: 'Small Wardrobe', price: 'From BHD 15' },
      { label: 'Medium Wardrobe', price: 'From BHD 20' },
      { label: 'Large Wardrobe', price: 'From BHD 25' },
      { label: 'Walk-in Wardrobe', price: 'After Inspection' },
      { label: '5+ Cabinets', price: 'After Inspection' },
    ],
  },
  {
    title: 'Home Cleaning',
    note: 'Regular home cleaning — dusting, vacuuming & mopping, kitchen and bathroom cleaning, general tidying. Minimum booking of 3 hours.',
    tiers: [
      { label: 'Per Hour', price: 'BHD 2.500' },
    ],
  },
  {
    title: 'Deep Cleaning',
    note: 'Final price depends on the size and condition of the property and the scope of work required.',
    tiers: [
      { label: 'Any Property', price: 'From BHD 35' },
    ],
  },
  {
    title: 'Moving, Labeling & Shifting Arrangement',
    note: 'For customers moving into, out of, or within a property — sorting, packing/unpacking assistance, room-by-room setup and final organisation. Moving, heavy lifting, transportation, packing materials and external movers are not included unless agreed and quoted separately. Final rate after inspection.',
    tiers: [
      { label: 'Any Property', price: 'From BHD 30' },
    ],
  },
  {
    title: 'Construction Cleaning',
    note: 'Priced per m² · a minimum project fee applies · heavy debris, cement, paint or adhesive removal is charged additionally · large commercial projects require an inspection and a customised quotation.',
    tiers: [
      { label: 'Pre-Construction Cleaning', price: 'From BHD 40' },
      { label: 'Post-Construction Cleaning', price: 'From BHD 60' },
      { label: 'Small Apartment / Studio', price: 'From BHD 40' },
      { label: '1–2 Bedroom Apartment', price: 'From BHD 60' },
      { label: '3+ Bedroom / Larger Property', price: 'After Inspection' },
      { label: 'Villa / Commercial Project', price: 'After Inspection' },
    ],
  },
  {
    title: 'Move-In / Move-Out Cleaning',
    note: 'Includes full dusting, floors & skirting, kitchen & cabinets, bathrooms & sanitary fittings, doors & handles, and interior-accessible windows, with a final detailed check before you move in. Extra charges apply for heavy dirt, excessive grease, exterior windows, high-level cleaning, heavy debris or additional organisation.',
    tiers: [
      { label: 'Studio / 1 Bedroom', price: 'From BHD 35' },
      { label: '2 Bedroom', price: 'From BHD 45' },
      { label: '3 Bedroom', price: 'From BHD 60' },
      { label: '4 Bedroom', price: 'From BHD 75' },
      { label: 'Villa / Large Property', price: 'After Inspection' },
    ],
  },
  {
    title: 'Add-On Services',
    tiers: [
      { label: 'Fridge Organisation', price: 'From BHD 15' },
      { label: 'Pantry Organisation', price: 'From BHD 15' },
      { label: 'Kitchen Cabinet Organisation', price: 'From BHD 20' },
      { label: 'Decluttering & Sorting', price: 'From BHD 20' },
      { label: 'Laundry / Linen Organisation', price: 'From BHD 15' },
      { label: 'Additional Cleaning Time', price: 'Quoted on Request' },
    ],
  },
];
