import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Building, BrainCircuit } from 'lucide-react'; // Icons for companies

const experiences = [
  {
    company: 'Elcom Digital',
    title: 'Software Developer',
    duration: 'Present',
    description: 'Contributing to the development and maintenance of various software solutions, including projects like Sense and Task Manager.', // Updated description
    icon: Building,
  },
  {
    company: 'Automaton AI',
    title: 'Machine Learning Eng Intern',
    duration: 'Previous Role', // Adjust duration as needed
    description: 'Gained hands-on experience in Machine Learning development methodologies and AI concepts.',
    icon: BrainCircuit, // Icon representing AI/Automation
  },
  // Add more experiences as needed
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="w-full py-6 md:py-12 lg:py-16 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center mb-12 text-primary">
          Work Experience
        </h2>
        <div className="relative pl-6 after:absolute after:inset-y-0 after:w-px after:bg-muted after:left-0"> {/* Timeline effect */}
          {experiences.map((exp, index) => (
            <div key={exp.company} className={`mb-10 ml-8 hover-scale transition-transform duration-300 ease-in-out`}> {/* Added hover effect */}
              <span className="absolute flex items-center justify-center w-8 h-8 bg-accent rounded-full -left-4 ring-4 ring-background text-accent-foreground">
                <exp.icon className="w-5 h-5" />
              </span>
              <Card className="shadow-md border-l-4 border-primary/50">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl md:text-2xl text-primary">{exp.title}</CardTitle>
                    <span className="text-sm text-muted-foreground">{exp.duration}</span>
                  </div>
                  <CardDescription className="text-base font-semibold text-foreground/90">{exp.company}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80">{exp.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
