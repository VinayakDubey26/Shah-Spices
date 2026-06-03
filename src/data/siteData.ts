import {
  Building2,
  Factory,
  Handshake,
  MapPin,
  PackageCheck,
  PackageOpen,
  Phone,
  ShieldCheck,
  ShoppingBag,
  Store,
  Truck,
  Utensils,
  Wheat,
} from 'lucide-react';

export const phoneNumber = '+91 99860 52994';
export const whatsappLink = `https://wa.me/919986052994?text=${encodeURIComponent(
  'Hello Shah Spices, I would like to request a quote for chilli products.',
)}`;

export const navLinks = ['Home', 'Products', 'Why Us', 'Process', 'Contact'];

export const trustBarItems = [
  'Export Quality',
  'Best Pricing',
  'Custom Packaging',
  '400KG Bulk Packaging',
  'Pan India Supply',
];

export const products = [
  {
    title: 'Whole Red Chillies',
    description: 'Selected whole red chillies supplied for businesses requiring consistent quality, rich color and reliable bulk availability.',
    tags: ['Spice Brands', 'Food Manufacturers', 'Distributors'],
    tone: 'whole',
  },
  {
    title: 'Chilli Powder',
    description: 'Finely processed chilli powder designed for manufacturers, wholesalers and retail chains with recurring quality requirements.',
    tags: ['Manufacturers', 'Retail Chains', 'Wholesalers'],
    tone: 'powder',
  },
  {
    title: 'Chilli Seeds',
    description: 'Cleaned chilli seeds supplied for industrial processing and bulk trading requirements.',
    tags: ['Processing Units', 'Traders', 'Bulk Buyers'],
    tone: 'seeds',
  },
];

export const whyUs = [
  {
    title: 'Best Pricing',
    description: 'Direct manufacturer advantage for stronger margins and transparent bulk quote discussions.',
    icon: Handshake,
  },
  {
    title: 'Export Quality',
    description: 'Consistent quality standards across sorting, processing, packaging and dispatch.',
    icon: ShieldCheck,
  },
  {
    title: 'Custom Packaging',
    description: 'Packaging tailored to business requirements, including large-format bulk movement.',
    icon: PackageCheck,
  },
  {
    title: 'Reliable Supply',
    description: 'Built for distributors and wholesalers who need dependable availability and timelines.',
    icon: Truck,
  },
];

export const industries = [
  { title: 'Food Manufacturers', icon: Factory, tone: 'manufacturers' },
  { title: 'Spice Brands', icon: ShoppingBag, tone: 'brands' },
  { title: 'Retail Chains', icon: Store, tone: 'retail' },
  { title: 'Distributors', icon: Building2, tone: 'distribution' },
  { title: 'Wholesalers', icon: PackageOpen, tone: 'wholesale' },
];

export const processSteps = ['Sourcing', 'Cleaning', 'Processing', 'Quality Testing', 'Packaging', 'Dispatch'];

export const stats = [
  { value: 400, suffix: 'KG', label: 'Bulk Packaging' },
  { value: 3, suffix: '+', label: 'Core Product Lines' },
  { value: 24, suffix: 'hr', label: 'Inquiry Response Focus' },
];

export const supplyMarkers = [
  { city: 'North', x: 48, y: 24 },
  { city: 'West', x: 32, y: 52 },
  { city: 'South', x: 45, y: 78 },
  { city: 'East', x: 66, y: 50 },
  { city: 'Central', x: 50, y: 52 },
];

export const contactDetails = [
  { label: 'Phone', value: phoneNumber, icon: Phone },
  { label: 'Email', value: 'info@shahspices.com', icon: Wheat },
  { label: 'Address', value: 'Placeholder', icon: MapPin },
];
