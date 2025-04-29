'use client';

import { useState, type FormEvent } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Send,Phone } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import Link from 'next/link';

export default function ContactSection() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);

    // Replace with your actual form submission logic (e.g., API call)
    // For demonstration, we'll simulate a delay and show a toast
    await new Promise(resolve => setTimeout(resolve, 1500));

    console.log('Form submitted with:', {
      name: (event.currentTarget.elements.namedItem('name') as HTMLInputElement)?.value,
      email: (event.currentTarget.elements.namedItem('email') as HTMLInputElement)?.value,
      message: (event.currentTarget.elements.namedItem('message') as HTMLTextAreaElement)?.value,
    });

    setIsLoading(false);
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
      variant: "default", // Use 'default' which maps to accent color
    });
    // Optionally reset the form
     (event.target as HTMLFormElement).reset();
  }

  return (
    <section id="contact" className="w-full py-6 md:py-12 lg:py-16 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center mb-12 text-primary">
          Get In Touch
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <Card className="shadow-md border-t-4 border-accent hover-scale">
            <CardHeader>
              <CardTitle className="text-2xl">Send me a message</CardTitle>
              <CardDescription>
                Have a question or want to collaborate? Fill out the form below.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" name="name" placeholder="Your Name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" type="email" placeholder="your.email@example.com" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" name="message" placeholder="Your message here..." required rows={5} />
                </div>
                <Button type="submit" className="w-full md:w-auto" disabled={isLoading}>
                  {isLoading ? 'Sending...' : <><Send className="mr-2 h-4 w-4" /> Send Message</>}
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-6 pt-4 lg:pt-0">
             <h3 className="text-2xl font-semibold text-primary">Contact Information</h3>
             <p className="text-foreground/80">
             I'm available for inquiries, collaborations, and project discussions. Feel free to reach out via email or connect with me on social media.
             </p>
             <div className="space-y-3">
                <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-accent" />
                    <Link href="mailto:nk4305572@gmail.com" className="hover:underline text-foreground">
                      nk4305572@gmail.com
                    </Link>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-accent" />
                  <Link href="tel:+91XXXXXXXXXX" className="hover:underline text-foreground">
                    +91-7209106589
                  </Link>
                </div>

                 <div className="flex items-center gap-3">
                    <Linkedin className="h-5 w-5 text-accent" />
                    <Link href="https://www.linkedin.com/in/niraj-kumar-879bb8250/" target="_blank" rel="noopener noreferrer" className="hover:underline text-foreground">
                    https://www.linkedin.com/in/niraj-kumar-879bb8250
                    </Link>
                 </div>
                 <div className="flex items-center gap-3">
                    <Github className="h-5 w-5 text-accent" />
                    <Link href="https://github.com/niraj993" target="_blank" rel="noopener noreferrer" className="hover:underline text-foreground">
                    https://github.com/niraj993
                    </Link>
                 </div>
             </div>
             <p className="text-sm text-muted-foreground italic">
              Based in India, I am open to remote opportunities and eager to collaborate on innovative projects across the globe, leveraging my skills and experience to drive impactful solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
