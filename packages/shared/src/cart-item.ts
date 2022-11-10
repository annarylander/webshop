export interface CartItem {
  user: string;
  products: [
    { productId: string; title: string; price: number; quantity: number }
  ];
  bill: number;
  isCheckedOut: boolean;
  status: string;
}
