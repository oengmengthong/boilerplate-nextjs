import { notFound } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Star, ShoppingCart, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { getMockProducts } from '@/lib/api/products';
import { generateMetadata } from '@/lib/meta';
import type { Metadata } from 'next';

interface Props {
  params: { id: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const products = await getMockProducts();
  const product = products.find(p => p.id === params.id);
  
  if (!product) {
    return generateMetadata({
      title: 'Product Not Found',
      description: 'The requested product could not be found.',
      noIndex: true,
    });
  }

  return generateMetadata({
    title: product.name,
    description: product.description,
  });
}

export default async function ProductPage({ params }: Props) {
  const products = await getMockProducts();
  const product = products.find(p => p.id === params.id);

  if (!product) {
    notFound();
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <Link href="/products" className="inline-flex items-center text-muted-foreground hover:text-primary mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Products
      </Link>
      
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <div className="flex justify-between items-start">
            <div>
              <CardTitle className="text-3xl font-bold mb-2">{product.name}</CardTitle>
              <div className="flex items-center gap-2">
                <Badge variant="secondary">${product.price}</Badge>
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                  <span className="ml-1 text-sm text-muted-foreground">{product.rating}</span>
                </div>
              </div>
            </div>
            <Button className="flex items-center gap-2">
              <ShoppingCart className="h-4 w-4" />
              Add to Cart
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-3">Description</h2>
            <p className="text-muted-foreground">{product.description}</p>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold mb-3">Features</h2>
            <ul className="grid md:grid-cols-2 gap-2">
              {product.features.map(feature => (
                <li key={feature} className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="flex items-center gap-2">
            <Badge variant={product.inStock ? "success" : "destructive"}>
              {product.inStock ? 'In Stock' : 'Out of Stock'}
            </Badge>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}