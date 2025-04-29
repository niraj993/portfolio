import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="-full py-8 md:py-14 lg:py-20 bg-gradient-to-b from-background to-secondary/50"
    >
      <div className="container mx-auto px-4 md:px-6 text-center">
        <div className="flex flex-col items-center space-y-6">
          <Avatar className="w-32 h-32 md:w-40 md:h-40 border-4 border-primary shadow-lg">
            <AvatarImage
              src="/assets/niraj's.jfif" 
              alt="Niraj Kumar"
            />
            <AvatarFallback>NK</AvatarFallback> {/* Updated fallback */}
          </Avatar>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-primary">
            Niraj Kumar
          </h1>
          <p className="max-w-[700px] text-lg md:text-xl text-foreground/80">
          I'm a Data Scientist and Software Developer with 2 years of hands-on experience, specializing in Python (OOP), SQL, and AWS. I have successfully designed, developed, and deployed scalable web applications using Django, React, Node.js, and Express, with robust deployment pipelines powered by Nginx and Gunicorn. My expertise also spans machine learning, data analysis, and API development. In addition, I am skilled in DevOps practices, leveraging Linux, Git, Docker, and AWS services to streamline development workflows and drive operational efficiency.
         </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
             <Button asChild variant="default" size="lg" className="hover-scale">
               <Link href="#contact">Get in Touch</Link>
             </Button>
             <Button asChild variant="outline" size="lg" className="hover-scale">
               <Link href="#projects">View Projects</Link>
             </Button>
             <Button asChild variant="outline" size="lg" className="hover-scale">
               {/* Link points to the resume in the /public/assets folder */}
               <Link href="/assets/Niraj-resume-1.pdf" target="_blank" rel="noopener noreferrer">
                 <Download className="mr-2 h-5 w-5" />
                 Download Resume
               </Link>
             </Button>
          </div>
           <div className="flex justify-center space-x-6 pt-6">
             <Link href="https://github.com/niraj993" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" className="hover-scale">
               <Github className="h-8 w-8 text-foreground/70 hover:text-primary transition-colors" />
             </Link>
             <Link href="https://www.linkedin.com/in/niraj-kumar-879bb8250/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" className="hover-scale">
               <Linkedin className="h-8 w-8 text-foreground/70 hover:text-primary transition-colors" />
             </Link>
           </div>
        </div>
      </div>
    </section>
  );
}


