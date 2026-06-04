import {
  ClipboardCheck,
  Handshake,
  MapPin,
  PackageCheck,
  Phone,
  Search,
  ShieldCheck,
  Settings,
  Sparkles,
  Truck,
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

export const processSteps = [
  {
    title: 'Sourcing',
    description: 'Partner-approved chilli procurement.',
    icon: Search,
  },
  {
    title: 'Cleaning',
    description: 'Removal of impurities and careful sorting.',
    icon: Sparkles,
  },
  {
    title: 'Processing',
    description: 'Preparation according to business requirements.',
    icon: Settings,
  },
  {
    title: 'Quality Testing',
    description: 'Batch verification and inspection.',
    icon: ClipboardCheck,
  },
  {
    title: 'Packaging',
    description: 'Custom and bulk packaging options.',
    icon: PackageCheck,
  },
  {
    title: 'Dispatch',
    description: 'Reliable delivery planning.',
    icon: Truck,
  },
];

export const stats = [
  { value: 400, suffix: 'KG', label: 'Bulk Packaging' },
  { value: 3, suffix: '+', label: 'Core Product Lines' },
  { value: 24, suffix: 'hr', label: 'Inquiry Response Focus' },
];

export const supplyMarkers = [
  { city: 'Rajasthan', x: 36, y: 35, labelPosition: 'left' },
  { city: 'Delhi NCR', x: 45, y: 28, labelPosition: 'right' },
  { city: 'Gujarat', x: 29, y: 51, labelPosition: 'left' },
  { city: 'Madhya Pradesh', x: 47, y: 47, labelPosition: 'right' },
  { city: 'Maharashtra', x: 39, y: 62, labelPosition: 'left' },
  { city: 'Karnataka', x: 41, y: 77, labelPosition: 'right' },
];

export const supplyBenefits = [
  { label: '400KG Bulk Packaging', icon: PackageCheck },
  { label: 'Custom Packaging', icon: PackageCheck },
  { label: 'Pan India Delivery', icon: Truck },
  { label: 'Export Ready', icon: ShieldCheck },
];

export const contactDetails = [
  { label: 'Phone', value: phoneNumber, icon: Phone },
  { label: 'Email', value: 'info@shahspices.com', icon: Wheat },
  { label: 'Address', value: 'Placeholder', icon: MapPin },
];
