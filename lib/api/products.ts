import { fetchApi } from '@/lib/api/client';
import type { ProductsResponse, ProductResponse, Product } from '@/types/api';

export async function getProducts(page = 1, limit = 10): Promise<ProductsResponse> {
  return fetchApi<ProductsResponse>(`/products?page=${page}&limit=${limit}`);
}

export async function getProduct(id: string): Promise<ProductResponse> {
  return fetchApi<ProductResponse>(`/products/${id}`);
}

// Mock API responses for development
export async function getMockProducts(): Promise<Product[]> {
  return [
    {
      id: '1',
      name: 'Premium Wireless Headphones',
      description: 'High-quality wireless headphones with noise cancellation.',
      price: 299.99,
      rating: 4.5,
      inStock: true,
      features: [
        'Active Noise Cancellation',
        '30-hour battery life',
        'Premium sound quality',
        'Comfortable fit',
      ],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: '2',
      name: 'Smart Watch Pro',
      description: 'Advanced smartwatch with health monitoring features.',
      price: 399.99,
      rating: 4.8,
      inStock: true,
      features: [
        'Heart rate monitoring',
        'Sleep tracking',
        'GPS navigation',
        'Water resistant',
      ],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
  ];
}