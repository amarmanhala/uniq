import { Request, Response } from 'express';
import { ProductService } from './productService';

export const listProducts = (service: ProductService) => async (_req: Request, res: Response) => {
  const products = await service.getProducts();
  res.json({ success: true, data: products });
};
