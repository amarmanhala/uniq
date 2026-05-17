import { ObjectId } from 'mongodb';

export interface ProductColor {
  name: string;
  hex: string;
  images: string[];
}

export interface Product {
  _id?: ObjectId;
  sku: string;
  brand: string;
  name: string;
  description: string;
  price: number;
  salePrice?: number;
  category: string;
  subCategory: string;
  gender: 'men' | 'women' | 'unisex' | 'kids';
  material: string;
  collection?: string;
  colors: ProductColor[];
  sizes: string[];
  tags: string[];
  rating: number;
  reviewCount: number;
  isActive: boolean;
  isFeatured: boolean;
  createdAt: Date;
  updatedAt: Date;
}
