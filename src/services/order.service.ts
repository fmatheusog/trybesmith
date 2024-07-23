import { PrismaClient } from '@prisma/client';
import CreateOrderDto from '../dtos/create-order.dto';
import NotFoundError from '../errors/not-found.error';

const prisma = new PrismaClient();

export async function createOrder(payload: CreateOrderDto) {
  const order = await prisma.$transaction(async (transaction) => {
    const user = await transaction.user.findFirst({
      where: {
        id: payload.userId,
      },
    });

    if (!user) {
      throw new NotFoundError('user does not exist');
    }

    const products = await transaction.product.findMany({
      where: {
        id: {
          in: payload.productsIds,
        },
      },
    });

    if (products.length !== payload.productsIds.length) {
      throw new NotFoundError('one or more products does not exist');
    }

    const order = await transaction.order.create({
      data: {
        userId: payload.userId,
      },
    });

    const orderProducts = await transaction.orderProduct.createMany({
      data: products.map((product) => ({
        orderId: order.id,
        productId: product.id,
        quantity: 1,
      })),
    });

    return order;
  });

  return order;
}
