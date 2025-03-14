export interface ProductType {
  id: number;
  name: string;
  category: string;
  price: number;
  type: "high" | "medium" | "low";
  maxQuantity: number;
  image: string;
  currentQuantity: number;
  totalPrice: number;
}

export type ProductList = ProductType[];
