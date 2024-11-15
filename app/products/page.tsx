import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star } from 'lucide-react';
import { getMockProducts } from '@/lib/api/products';
import { generateMetadata } from '@/lib/meta';
import type { Metadata } from 'next';

export const metadata: Metadata = generateMetadata({
  title: 'Products',
  description: 'Browse our collection of premium products.',
});

export default async function ProductsPage() {
  const products = await getMockProducts();

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Our Products</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map(product => (
          <Link key={product.id} href={`/products/${product.id}`}>
            <Card className="h-full hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl font-semibold">{product.name}</CardTitle>
                <div className="flex items-center justify-between mt-2">
                  <Badge variant="secondary">${product.price}</Badge>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                    <span className="ml-1 text-sm text-muted-foreground">{product.rating}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{product.description}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </main>
  );
}