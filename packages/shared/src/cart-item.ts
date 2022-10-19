export interface CartItem {
  user: string;
  products: [{ productId: string, title: string, price: number, quantity: number }];
  price: number;
  bill: number;
  isCheckedOut: boolean;
}
