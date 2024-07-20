import express from 'express';

import errorHandler from './middlewares/error-handler.middleware';
import ProductRoutes from './routes/product.routes';
import OrderRoutes from './routes/order.routes';
import UserRoutes from './routes/user.routes';

const app = express();

app.use(express.json());

app.use('/products', ProductRoutes);
app.use('/orders', OrderRoutes);
app.use('/users', UserRoutes);

app.use(errorHandler);

export default app;
