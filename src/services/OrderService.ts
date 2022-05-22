import OrderModel from '../models/OrderModel';
import ProductModel from '../models/ProductModel';

class OrderService {
  static async getAll() {
    const orders = await OrderModel.getAll();
    const products = await ProductModel.getAll();

    return orders.map((o) => {
      const productIds = products.filter((p) => p.id === o.id).map((p) => p.id);
      return {
        ...o,
        productIds,
      };
    });
  }
}

export default OrderService;
