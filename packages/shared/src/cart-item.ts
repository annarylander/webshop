export interface CartItem {
  userId: string;
  products: [{ productId: string; quantity: number }];
  price: number;
  bill: number;
  isCheckedOut: boolean;
}
