import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Database, Cloud, Settings, BrainCircuit, BarChart, Server, GitBranch, Ship, GitPullRequest, Clock } from 'lucide-react';




const skills = [
  { name: 'Python', icon: Code, category: 'Languages/Frameworks' },
  { name: 'Django', icon: Code, category: 'Languages/Frameworks' },
  { name: 'LangChain', icon: Code, category: 'Languages/Frameworks' },
  { name: 'Pandas', icon: Code, category: 'Languages/Frameworks' },
  { name: 'Numpy', icon: Code, category: 'Languages/Frameworks' },
  { name: 'Scikit-learn', icon: Code, category: 'Languages/Frameworks' },
  { name: 'JavaScript', icon: Code, category: 'Languages/Frameworks' },
  { name: 'Node.js', icon: Code, category: 'Languages/Frameworks' },
  { name: 'React', icon: Code, category: 'Languages/Frameworks' },
  { name: 'MySQL', icon: Database, category: 'Databases' },
  { name: 'PostgreSQL', icon: Database, category: 'Databases' },
  { name: 'Ec2', icon: Cloud, category: 'AWS-Cloud/Infrastructure' },
  { name: 'S3', icon: Cloud, category: 'AWS-Cloud/Infrastructure' },
  { name: 'Secret-Manager', icon: Cloud, category: 'AWS-Cloud/Infrastructure' },
  { name: 'RDS', icon: Cloud, category: 'AWS-Cloud/Infrastructure' },
  { name: 'VPC', icon: Cloud, category: 'AWS-Cloud/Infrastructure' },
  { name: 'Route-53', icon: Cloud, category: 'AWS-Cloud/Infrastructure' },
  { name: 'Cloudflare', icon: Cloud, category: 'AWS-Cloud/Infrastructure' },
  { name: 'CloudWatch', icon: Cloud, category: 'AWS-Cloud/Infrastructure' },
  { name: "I'AM'", icon: Cloud, category: 'AWS-Cloud/Infrastructure' },
  { name: 'Linux', icon: Server, category: 'DevOps' },
  { name: 'Docker', icon: Ship, category: 'DevOps' },
  { name: 'Nginx', icon: Server, category: 'DevOps' },
  { name: 'Git', icon: GitBranch, category: 'DevOps' },
  { name: 'Apache2', icon: Server, category: 'DevOps' },
  { name: 'CI/CD', icon: GitPullRequest, category: 'DevOps' },
  { name: 'CronJobs', icon: Clock, category: 'DevOps' },
  { name: 'Data Warehousing', icon: Database, category: 'Core-Concept' },
  { name: 'ETL', icon: Database, category: 'Core-Concept' },
  { name: 'OLTP', icon: Database, category: 'Core-Concept' },
  { name: 'OLAP', icon: Database, category: 'Core-Concept' },
  { name: 'Data Analysis', icon: Database, category: 'Core-Concept' },
  { name: 'Applied Statistics', icon: BarChart, category: 'Core-Concept' },
  { name: 'API Development', icon: Code, category: 'Core-Concept' },
  { name: 'Microservices Architecture', icon: Server, category: 'Core-Concept' },
  { name: 'Solid-Princeple', icon: Server, category: 'Core-Concept' },
  { name: 'Linear Regression', icon: BarChart, category: 'ML-Models/Concepts' },
{ name: 'Logistic Regression', icon: BarChart, category: 'ML-Models/Concepts' },
{ name: 'Decision Trees', icon: BarChart, category: 'ML-Models/Concepts' },
{ name: 'Random Forest', icon: BarChart, category: 'ML-Models/Concepts' },
{ name: 'KNN', icon: BarChart, category: 'ML-Models/Concepts' },
{ name: 'SVM', icon: BarChart, category: 'ML-Models/Concepts' },
{ name: 'Clustering', icon: BarChart, category: 'ML-Models/Concepts' },
{ name: 'NLP Concepts', icon: BarChart, category: 'ML-Models/Concepts' },
{ name: 'Deep Learning Basics', icon: BarChart, category: 'ML-Models/Concepts' },
];

// Ensure unique categories and maintain a desired order if necessary
const skillCategories = [
    'Languages/Frameworks',
    'Databases',
    'AWS-Cloud/Infrastructure',
    'DevOps',
    'Core-Concept',
    'ML-Models/Concepts',
];


export default function SkillsSection() {
  return (
    <section id="skills" className="w-full py-6 md:py-12 lg:py-16 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center mb-12 text-primary">
          My Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"> {/* Adjusted grid for potentially 4 categories */}
          {skillCategories.map((category) => (
             <Card key={category} className="shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-accent hover-scale"> {/* Added hover-scale */}
               <CardHeader>
                 <CardTitle className="text-xl md:text-2xl flex items-center gap-2 text-primary">
                   {/* Assign icons based on category name */}
                   {category === 'Languages/Frameworks' && <Code className="h-6 w-6 text-accent" />}
                   {category === 'Databases' && <Database className="h-6 w-6 text-accent" />}
                   {category === 'Cloud/Infrastructure' && <Cloud className="h-6 w-6 text-accent" />}
                   {category === 'DevOps' && <Settings className="h-6 w-6 text-accent" />}
                   {category}
                 </CardTitle>
               </CardHeader>
               <CardContent>
                 <div className="flex flex-wrap gap-2">
                   {skills
                     .filter((skill) => skill.category === category)
                     .map((skill) => (
                       <Badge key={skill.name} variant="secondary" className="text-sm py-1 px-3 flex items-center gap-1">
                         <skill.icon className="h-4 w-4" />
                         {skill.name}
                       </Badge>
                     ))}
                 </div>
               </CardContent>
             </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
