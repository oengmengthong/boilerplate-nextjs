import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Briefcase, MapPin, Users2 } from 'lucide-react';
import { generateMetadata } from '@/lib/meta';
import type { Metadata } from 'next';

export const metadata: Metadata = generateMetadata({
  title: 'About Us',
  description: 'Learn more about our company, mission, and values.',
});

export default function AboutPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <div className="flex items-center gap-6">
            <Avatar className="h-24 w-24">
              <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop" />
              <AvatarFallback>TC</AvatarFallback>
            </Avatar>
            <div>
              <CardTitle className="text-3xl font-bold mb-2">About Our Company</CardTitle>
              <div className="flex gap-4 text-muted-foreground">
                <span className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" /> San Francisco, CA
                </span>
                <span className="flex items-center gap-1">
                  <Users2 className="h-4 w-4" /> 150+ Employees
                </span>
                <span className="flex items-center gap-1">
                  <Briefcase className="h-4 w-4" /> Since 2015
                </span>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-3">Our Mission</h2>
            <p className="text-muted-foreground">
              We're dedicated to creating innovative solutions that empower businesses and individuals
              to achieve their full potential in the digital age.
            </p>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold mb-3">Technologies</h2>
            <div className="flex flex-wrap gap-2">
              {['Next.js', 'React', 'TypeScript', 'Node.js', 'Python', 'AWS', 'Docker'].map(tech => (
                <Badge key={tech} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold mb-3">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                {
                  title: 'Innovation',
                  description: 'Pushing boundaries and exploring new possibilities',
                },
                {
                  title: 'Collaboration',
                  description: 'Working together to achieve common goals',
                },
                {
                  title: 'Excellence',
                  description: 'Striving for the highest quality in everything we do',
                },
              ].map(value => (
                <div key={value.title} className="p-4 rounded-lg bg-muted">
                  <h3 className="font-semibold mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}