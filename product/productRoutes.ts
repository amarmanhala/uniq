import { Router } from 'express';
import { ProductRepository } from './productRepository';
import { ProductService } from './productService';
import { listProducts } from './productController';

const repository = new ProductRepository();
const service = new ProductService(repository);

const router = Router();

router.get('/', listProducts(service));

export default router;
