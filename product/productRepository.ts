import { getDB } from '../config/db';
import { Product } from './productTypes';

export class ProductRepository {
  private collection = () => getDB().collection<Product>('products');

  async findAll(): Promise<Product[]> {
    return this.collection().find().toArray();
  }
}
