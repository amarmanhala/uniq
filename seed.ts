import 'dotenv/config';
import { ObjectId } from 'mongodb';
import { connectDB, client } from './config/db';
import { User } from './user/userTypes';
import { Product } from './product/productTypes';
import { Wardrobe } from './wardrobe/wardrobeTypes';
import { Outfit } from './outfit/outfitTypes';

// Pre-define IDs so wardrobe and outfit can reference users and products
const ids = {
  users: {
    amar:  new ObjectId(),
    sara:  new ObjectId(),
    james: new ObjectId(),
  },
  products: {
    heattech: new ObjectId(),
    airism:   new ObjectId(),
    jacket:   new ObjectId(),
    jeans:    new ObjectId(),
    sweater:  new ObjectId(),
  },
};

const users: User[] = [
  {
    _id: ids.users.amar,
    name: 'Amar Preet',
    email: 'amar@example.com',
    phone: '+1-555-0101',
    password: '$2b$10$hashedpassword1',
    avatar: 'avatar-amar.jpg',
    gender: 'men',
    isActive: true,
    createdAt: new Date(),
    updatetAt: new Date(),
  },
  {
    _id: ids.users.sara,
    name: 'Sara Kim',
    email: 'sara@example.com',
    phone: '+1-555-0102',
    password: '$2b$10$hashedpassword2',
    avatar: 'avatar-sara.jpg',
    gender: 'women',
    isActive: true,
    createdAt: new Date(),
    updatetAt: new Date(),
  },
  {
    _id: ids.users.james,
    name: 'James Liu',
    email: 'james@example.com',
    phone: '+1-555-0103',
    password: '$2b$10$hashedpassword3',
    avatar: 'avatar-james.jpg',
    gender: 'men',
    isActive: true,
    createdAt: new Date(),
    updatetAt: new Date(),
  },
];

const products: Product[] = [
  {
    _id: ids.products.heattech,
    sku: 'UQ-HT-001',
    brand: 'Uniqlo',
    name: 'HEATTECH Extra Warm Crew Neck T-Shirt',
    description: 'Our warmest HEATTECH yet. Generates and retains heat from your body moisture, keeping you warm all day in extreme cold conditions.',
    price: 19.9,
    category: 'Tops',
    subCategory: 'T-Shirts',
    gender: 'unisex',
    material: '89% Polyester, 8% Rayon, 3% Spandex',
    collection: 'HEATTECH',
    colors: [
      { name: 'Black', hex: '#1a1a1a', images: ['heattech-crew-black-1.jpg', 'heattech-crew-black-2.jpg'] },
      { name: 'White', hex: '#ffffff', images: ['heattech-crew-white-1.jpg', 'heattech-crew-white-2.jpg'] },
      { name: 'Navy',  hex: '#1b2a4a', images: ['heattech-crew-navy-1.jpg',  'heattech-crew-navy-2.jpg']  },
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    tags: ['heattech', 'warm', 'innerwear', 'winter', 'thermal'],
    rating: 4.7,
    reviewCount: 3240,
    isActive: true,
    isFeatured: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    _id: ids.products.airism,
    sku: 'UQ-AIR-002',
    brand: 'Uniqlo',
    name: 'AIRism Cotton Relaxed Fit T-Shirt',
    description: 'Made with AIRism technology for superior moisture-wicking and quick-drying performance. Lightweight and breathable for all-day comfort.',
    price: 14.9,
    category: 'Tops',
    subCategory: 'T-Shirts',
    gender: 'men',
    material: '60% Cotton, 40% Polyester',
    collection: 'AIRism',
    colors: [
      { name: 'White',      hex: '#ffffff', images: ['airism-relaxed-white-1.jpg', 'airism-relaxed-white-2.jpg'] },
      { name: 'Light Gray', hex: '#d3d3d3', images: ['airism-relaxed-gray-1.jpg',  'airism-relaxed-gray-2.jpg']  },
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    tags: ['airism', 'breathable', 'summer', 'casual', 'moisture-wicking'],
    rating: 4.5,
    reviewCount: 2180,
    isActive: true,
    isFeatured: false,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    _id: ids.products.jacket,
    sku: 'UQ-ULD-003',
    brand: 'Uniqlo',
    name: 'Ultra Light Down Jacket',
    description: 'Incredibly lightweight yet warm down jacket that packs down into its own pocket. Perfect for layering or as an outer layer in mild cold.',
    price: 69.9,
    salePrice: 49.9,
    category: 'Outerwear',
    subCategory: 'Jackets',
    gender: 'women',
    material: '100% Nylon shell, 90/10 Down fill',
    collection: 'Ultra Light Down',
    colors: [
      { name: 'Black', hex: '#1a1a1a', images: ['uld-jacket-black-1.jpg', 'uld-jacket-black-2.jpg', 'uld-jacket-black-3.jpg'] },
      { name: 'Olive', hex: '#6b7c4d', images: ['uld-jacket-olive-1.jpg', 'uld-jacket-olive-2.jpg', 'uld-jacket-olive-3.jpg'] },
      { name: 'Red',   hex: '#c0392b', images: ['uld-jacket-red-1.jpg',   'uld-jacket-red-2.jpg']                              },
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    tags: ['down', 'lightweight', 'packable', 'winter', 'outerwear'],
    rating: 4.8,
    reviewCount: 5670,
    isActive: true,
    isFeatured: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    _id: ids.products.jeans,
    sku: 'UQ-DNM-004',
    brand: 'Uniqlo',
    name: 'Slim Fit Jeans',
    description: 'Classic slim fit jeans made with stretch denim for all-day comfort. A versatile wardrobe essential that pairs with everything.',
    price: 39.9,
    category: 'Bottoms',
    subCategory: 'Jeans',
    gender: 'men',
    material: '98% Cotton, 2% Elastane',
    colors: [
      { name: 'Indigo Blue', hex: '#3b5998', images: ['slim-jeans-indigo-1.jpg', 'slim-jeans-indigo-2.jpg'] },
      { name: 'Black',       hex: '#1a1a1a', images: ['slim-jeans-black-1.jpg',  'slim-jeans-black-2.jpg']  },
    ],
    sizes: ['28', '30', '32', '34', '36'],
    tags: ['jeans', 'denim', 'slim', 'casual', 'stretch'],
    rating: 4.4,
    reviewCount: 1890,
    isActive: true,
    isFeatured: false,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    _id: ids.products.sweater,
    sku: 'UQ-MRN-005',
    brand: 'Uniqlo',
    name: 'Merino Wool Crew Neck Sweater',
    description: 'Crafted from premium merino wool, this sweater is naturally soft, breathable, and temperature-regulating. A timeless classic for any wardrobe.',
    price: 59.9,
    category: 'Tops',
    subCategory: 'Knitwear',
    gender: 'women',
    material: '100% Merino Wool',
    colors: [
      { name: 'Camel',     hex: '#c19a6b', images: ['merino-crew-camel-1.jpg',    'merino-crew-camel-2.jpg']    },
      { name: 'Burgundy',  hex: '#800020', images: ['merino-crew-burgundy-1.jpg', 'merino-crew-burgundy-2.jpg'] },
      { name: 'Off White', hex: '#f5f0e8', images: ['merino-crew-offwhite-1.jpg', 'merino-crew-offwhite-2.jpg'] },
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    tags: ['merino', 'wool', 'knitwear', 'premium', 'winter'],
    rating: 4.9,
    reviewCount: 987,
    isActive: true,
    isFeatured: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

const wardrobeItems: Wardrobe[] = [
  {
    userId: ids.users.amar,
    product: { productId: ids.products.heattech, name: 'HEATTECH Extra Warm Crew Neck T-Shirt', brand: 'Uniqlo', image: 'heattech-crew-black-1.jpg' },
    createdAt: new Date(),
  },
  {
    userId: ids.users.amar,
    product: { productId: ids.products.jeans, name: 'Slim Fit Jeans', brand: 'Uniqlo', image: 'slim-jeans-indigo-1.jpg' },
    createdAt: new Date(),
  },
  {
    userId: ids.users.sara,
    product: { productId: ids.products.jacket, name: 'Ultra Light Down Jacket', brand: 'Uniqlo', image: 'uld-jacket-black-1.jpg' },
    createdAt: new Date(),
  },
  {
    userId: ids.users.sara,
    product: { productId: ids.products.sweater, name: 'Merino Wool Crew Neck Sweater', brand: 'Uniqlo', image: 'merino-crew-camel-1.jpg' },
    createdAt: new Date(),
  },
];

const outfits: Outfit[] = [
  {
    name: 'Winter Commute',
    userId: ids.users.amar,
    productIds: [ids.products.heattech, ids.products.jeans],
    tags: ['winter', 'casual', 'layered'],
    imageUrl: 'outfit-winter-commute.jpg',
    isPublic: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: 'Weekend Casual',
    userId: ids.users.amar,
    productIds: [ids.products.airism, ids.products.jeans],
    tags: ['weekend', 'casual', 'relaxed'],
    isPublic: false,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: 'Autumn Layers',
    userId: ids.users.sara,
    productIds: [ids.products.sweater, ids.products.jacket],
    tags: ['autumn', 'layered', 'cozy'],
    imageUrl: 'outfit-autumn-layers.jpg',
    isPublic: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: 'Office Minimal',
    userId: ids.users.sara,
    productIds: [ids.products.sweater, ids.products.jeans],
    tags: ['office', 'minimal', 'smart'],
    isPublic: false,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

const seed = async (): Promise<void> => {
  await connectDB();
  const db = client.db();

  await db.collection('users').deleteMany({});
  await db.collection('users').insertMany(users);
  console.log(`Seeded ${users.length} users`);

  await db.collection('products').deleteMany({});
  await db.collection('products').insertMany(products);
  console.log(`Seeded ${products.length} products`);

  await db.collection('wardrobe').deleteMany({});
  await db.collection('wardrobe').insertMany(wardrobeItems);
  console.log(`Seeded ${wardrobeItems.length} wardrobe items`);

  await db.collection('outfits').deleteMany({});
  await db.collection('outfits').insertMany(outfits);
  console.log(`Seeded ${outfits.length} outfits`);

  process.exit(0);
};

seed().catch((err) => {
  console.error('Seed failed:', err);
  process.exit(1);
});
