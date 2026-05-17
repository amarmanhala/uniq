import { ProductRepository } from './productRepository';
import { Product } from './productTypes';

export class ProductService {
  constructor(private repository: ProductRepository) {}

  async getProducts(): Promise<Product[]> {
    return this.repository.findAll();
  }
}
