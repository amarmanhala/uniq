import { ObjectId } from 'mongodb';
import { getDB } from '../config/db';
import { Product } from './productTypes';

export class ProductRepository {
  private collection = () => getDB().collection<Product>('products');

  async findAll(page: number, limit:
    number): Promise<{ data: Product[], total: number }> {
    const skip = (page - 1) * limit;
    const [data, total] = await
      Promise.all([
        this.collection().find().skip(skip).
          limit(limit).toArray(),
        this.collection().countDocuments(),
      ]);
    return { data, total };
  }

  async findById(id: ObjectId): Promise<Product | null> {
    return this.collection().findOne({ _id: id });
  }
  
}
