export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  rating: number;
  inStock: boolean;
  features: string[];
  createdAt: string;
  updatedAt: string;
}

export interface ProductsResponse {
  products: Product[];
  total: number;
  page: number;
  limit: number;
}

export interface ProductResponse {
  product: Product;
}