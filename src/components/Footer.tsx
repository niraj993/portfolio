import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/50 py-8 mt-auto">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <p className="text-sm text-foreground/70 mb-4 md:mb-0">
          &copy; {currentYear} Niraj Kumar. All rights reserved.
        </p>
        <div className="flex space-x-4">
           <Link href="https://github.com/niraj993" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
             <Github className="h-5 w-5 text-foreground/70 hover:text-primary transition-colors" />
           </Link>
           <Link href="https://www.linkedin.com/in/niraj-kumar-879bb8250" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
             <Linkedin className="h-5 w-5 text-foreground/70 hover:text-primary transition-colors" />
           </Link>
           <Link href="mailto:niraj.email@example.com" aria-label="Email">
             <Mail className="h-5 w-5 text-foreground/70 hover:text-primary transition-colors" />
           </Link>
        </div>
      </div>
    </footer>
  );
}
