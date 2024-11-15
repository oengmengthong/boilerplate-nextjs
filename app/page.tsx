import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">Welcome to Your Next.js Application</CardTitle>
          <CardDescription>
            A modern, production-ready template with TypeScript and Tailwind CSS
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p className="text-muted-foreground">
              This template includes everything you need to build amazing applications:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Next.js 13 with App Router</li>
              <li>TypeScript for type safety</li>
              <li>Tailwind CSS for styling</li>
              <li>shadcn/ui components</li>
              <li>ESLint and Prettier for code quality</li>
            </ul>
            <div className="flex gap-4 pt-4">
              <Button>Get Started</Button>
              <Button variant="outline">Documentation</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}