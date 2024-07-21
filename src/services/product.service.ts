import { PrismaClient } from '@prisma/client';

import CreateProductDto from '../dtos/create-product.dto';
import UpdateProductDto from '../dtos/update-product.dto';
import NotFoundError from '../errors/not-found.error';

const prisma = new PrismaClient();

export async function getAllProducts() {
  return prisma.product.findMany();
}

export async function getProductById(productid: string) {
  const product = await prisma.product.findFirst({
    where: {
      id: productid,
    },
  });

  if (!product) throw new NotFoundError('product not found');

  return product;
}

export async function createProduct(payload: CreateProductDto) {
  const product = await prisma.$transaction(async (transaction) =>
    transaction.product.create({
      data: {
        name: payload.name,
        description: payload.description,
        price: payload.price,
        imageUrl: payload.imageUrl,
      },
    }),
  );

  return product;
}

export async function updateProduct(
  productId: string,
  payload: UpdateProductDto,
) {
  const product = await prisma.product.findUnique({
    where: {
      id: productId,
    },
  });

  if (!product) throw new NotFoundError('product not found');

  return prisma.product.update({
    where: {
      id: productId,
    },
    data: {
      ...payload,
    },
  });
}

export async function deleteProduct(productId: string) {
  const product = await prisma.product.findUnique({
    where: {
      id: productId,
    },
  });

  if (!product) throw new NotFoundError('product not found');

  await prisma.product.delete({
    where: {
      id: productId,
    },
  });
}
