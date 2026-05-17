import { Request, Response } from 'express';
import { ProductService } from './productService';

export class ProductController {
  constructor(private service: ProductService) {}

  listProducts = async (_req: Request, res: Response) => {
    const products = await this.service.getProducts();
    res.json({ success: true, data: products });
  };
}
