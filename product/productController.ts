import { Request, Response } from 'express';
import { ObjectId } from 'mongodb';
import { ProductService } from './productService';
import { PAGINATION } from '../config/constants';

export const listProducts = (service: ProductService) => async (req: Request, res: Response) => {
  const page = parseInt(req.query.page as string) || PAGINATION.DEFAULT_PAGE;
  const limit =
    Math.min(parseInt(req.query['limit'] as string)
      || PAGINATION.DEFAULT_LIMIT,
      PAGINATION.MAX_LIMIT);

  const { data, total } = await service.getProducts(page, limit);
  res.json({
    success: true,
    data,
    meta: {
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    },
  });
};

export const getProductById = (service: ProductService) => async (req: Request, res: Response) => {
  if (!ObjectId.isValid(req.params.id as string)) {
    return res.status(400).json({ success: false, message: 'Please provide a valid product Id' });

  }
  const product = await service.getProductById(new ObjectId(req.params.id as string));
  if (!product) {
    res.status(404).json({ success: false, message: 'Product not found' });
    return;
  }
  res.json({ success: true, data: product });
};
