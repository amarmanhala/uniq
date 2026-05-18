import 'dotenv/config';
import express, { Request, Response, NextFunction } from 'express';
import { connectDB } from './config/db';
import productRoutes from './product/productRoutes';
import userRoutes from './user/userRoutes';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (_req: Request, res: Response) => {
  res.json({ success: true, message: 'API is running' });
});

app.use('/products', productRoutes);
app.use('/users', userRoutes);

// Global error handler
app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ success: false, message: 'Internal server error' });
});

const start = async (): Promise<void> => {
  await connectDB();
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
};

start().catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
