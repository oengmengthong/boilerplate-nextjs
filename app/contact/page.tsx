import { ContactForm } from '@/components/forms/contact-form';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, MessageSquare, Clock } from 'lucide-react';
import { generateMetadata } from '@/lib/meta';
import type { Metadata } from 'next';

export const metadata: Metadata = generateMetadata({
  title: 'Contact Us',
  description: 'Get in touch with our team. We\'re here to help with any questions or inquiries.',
});

export default function ContactPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Contact Us</CardTitle>
            <CardDescription>
              Fill out the form below and we'll get back to you as soon as possible.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ContactForm />
          </CardContent>
        </Card>
        
        <div className="space-y-4">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <div>
                  <h3 className="font-medium">Email Us</h3>
                  <p className="text-sm text-muted-foreground">support@example.com</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <MessageSquare className="h-5 w-5 text-primary" />
                <div>
                  <h3 className="font-medium">Live Chat</h3>
                  <p className="text-sm text-muted-foreground">Available 24/7</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-primary" />
                <div>
                  <h3 className="font-medium">Response Time</h3>
                  <p className="text-sm text-muted-foreground">Within 24 hours</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}