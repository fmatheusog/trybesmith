import express from 'express';
import ProductRoutes from './routes/ProductRoutes';
import OrderRoutes from './routes/OrderRoutes';
import UserRoutes from './routes/UserRoutes';

const app = express();

app.use(express.json());

app.use('/products', ProductRoutes);
app.use('/orders', OrderRoutes);
app.use('/users', UserRoutes);

export default app;
