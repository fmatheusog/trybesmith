interface IOrder {
  id?: number,
  userId: number,
  productIds?: Array<number>
}

export default IOrder;
