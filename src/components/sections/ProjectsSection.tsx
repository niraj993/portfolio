import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Github, ExternalLink } from 'lucide-react';
import Image from 'next/image'; // Import next/image

const projects = [
 {
    title: 'NoSky Sense',
    description: 'A project developed during my time at Elcom Digital. NoSky Sense is a comprehensive financial planning tool offering real-time insights, powerful visualizations, and AI-driven recommendations for smarter financial decisions. With a conversational assistant, Nivi, it simplifies financial data management, providing personalized advice for budgeting, investments, and operations optimization. The platform is multilingual and offers interactive charts and analytics to enhance productivity and efficiency. You can explore more about NoSky Sense through the demo and start using it for advanced financial planning.',
    techStack: ['Python', 'React', 'AWS', 'Django', 'Generative AI', 'Git', 'AWS CodeCommit', 'Linux', 'S3', 'RDS', 'EC2', 'Secrets Manager', 'CloudWatch'],
    githubUrl: '', // Replace with actual link
    liveUrl: 'https://sense.nosky.ai/', // Replace with actual link or remove if none
    imageUrl: 'https://sense.nosky.ai/original.jpg',
  },
  {
    title: 'Task Manager',
    description: 'The Task Manager is a web application built with Python, Django and React.js deployed on AWS. It allows organizations to submit day-end reports and view their own work, helping teams stay organized and track progress. It streamlines task management and enhances productivity by providing real-time collaboration and workflow management.',
    techStack: [ "Django",'MySQL', "Python","React.Js","Git-Cmd","Code-Commit"], // Adjust tech stack
    githubUrl: '', // Replace with actual link
    liveUrl: 'https://elcom.nosky.io/task-manager/',  
    imageUrl: '/assets/task-manager-log.png',
  },
  {
    title: 'ETL Pipeline Integration',
    description: 'A robust data pipeline solution developed using Python and Django. This web application allows users to upload Excel and CSV files to Google Drive. The system then retrieves, transforms, and loads the data into AWS RDS, and establishes a connection with Zoho Analytics for further data analysis and reporting.',
    techStack: ['Python', 'Pandas', 'MySQL', 'RDS'],
    githubUrl: 'https://github.com/yourusername/project-alpha',
    liveUrl: 'https://project-alpha.example.com',
    imageUrl: '/assets/ETL_Pipeline.png',
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="w-full py-6 md:py-12 lg:py-16 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center mb-12 text-primary">
          Real-Time Project Experience
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.title} className="group flex flex-col overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 rounded-lg hover-scale"> {/* Added group and hover-scale */}
              <div className="relative w-full h-48 overflow-hidden"> {/* Added overflow-hidden */}
                 <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill // Use fill instead of layout
                    style={{ objectFit: 'cover' }} // Use style for objectFit
                    className="transition-transform duration-300 group-hover:scale-105" // Kept image scale effect
                  />
              </div>
              <CardHeader>
                <CardTitle className="text-xl md:text-2xl text-primary">{project.title}</CardTitle>
                <CardDescription className="text-foreground/80 min-h-[4.5rem]"> {/* Adjust min-height as needed */}
                   {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech) => (
                    <Badge key={tech} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-end gap-2 bg-card/50 p-4 mt-auto"> {/* Changed background and added mt-auto */}
                <Button asChild variant="ghost" size="sm">
                  <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" /> GitHub
                  </Link>
                </Button>
                {project.liveUrl && (
                  <Button asChild variant="outline" size="sm">
                    <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                    </Link>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
