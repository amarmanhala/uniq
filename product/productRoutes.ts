import { Router } from 'express';
import { ProductRepository } from './productRepository';
import { ProductService } from './productService';
import { ProductController } from './productController';

const repository = new ProductRepository();
const service = new ProductService(repository);
const controller = new ProductController(service);

const router = Router();

router.get('/', controller.listProducts);

export default router;
