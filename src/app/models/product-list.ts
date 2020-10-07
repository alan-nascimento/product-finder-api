export type Author = {
  name: string;
  lastname: string;
};

export type Price = {
  currency: string;
  amount: number;
  decimals: number;
};

export type Product = {
  id: string;
  title: string;
  price: Price;
  picture: string;
  city?: string;
  condition: string;
  free_shipping: boolean;
  description?: string;
  sold_quantity?: number;
};

export type ProductList = {
  author: Author;
  categories: string[];
  items: Product[];
};