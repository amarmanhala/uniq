import { ObjectId } from 'mongodb';
import { ProductRepository } from './productRepository';
import { Product } from './productTypes';

export class ProductService {
  constructor(private repository: ProductRepository) {}

  async getProducts(page: number, limit: number): Promise<{ data: Product[]; total: number }> {
    return this.repository.findAll(page, limit);
  }

  async getProductById(id: ObjectId): Promise<Product | null> {
    return this.repository.findById(id);
  }
}
