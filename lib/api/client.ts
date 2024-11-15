import { ApiError } from '@/lib/api/errors';

interface FetchOptions extends RequestInit {
  baseUrl?: string;
}

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://api.example.com';

export async function fetchApi<T>(endpoint: string, options: FetchOptions = {}): Promise<T> {
  const { baseUrl = BASE_URL, headers = {}, ...rest } = options;
  
  try {
    const response = await fetch(`${baseUrl}${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
      ...rest,
    });

    const data = await response.json();

    if (!response.ok) {
      throw new ApiError({
        message: data.message || 'An error occurred',
        status: response.status,
        data,
      });
    }

    return data as T;
  } catch (error) {
    if (error instanceof ApiError) {
      throw error;
    }
    
    throw new ApiError({
      message: 'Network error',
      status: 500,
      data: null,
    });
  }
}