
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Zap, TestTubeDiagonal, Network, Smartphone, GitMerge, Cloud, Code, Briefcase, CheckCircle } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface SkillCategory {
  name: string;
  icon: LucideIcon;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  { 
    name: "Test Automation", 
    icon: TestTubeDiagonal, 
    skills: ["Selenium", "Playwright", "Cucumber", "TestNG"] 
  },
  { 
    name: "API Testing", 
    icon: Network, 
    skills: ["REST Assured", "Postman", "REST API", "API Mocking"] 
  },
  { 
    name: "Mobile Testing", 
    icon: Smartphone, 
    skills: ["Appium"] 
  },
  { 
    name: "CI/CD & DevOps", 
    icon: GitMerge, 
    skills: ["Jenkins", "Docker", "Git", "Azure DevOps"] 
  },
  { 
    name: "Cloud & Cross-Browser Testing", 
    icon: Cloud, 
    skills: ["Microsoft Azure", "LambdaTest", "SauceLabs"] 
  },
  { 
    name: "Programming Languages", 
    icon: Code, 
    skills: ["Java", "Python", "JavaScript", "SQL"] 
  },
  { 
    name: "Agile & Project Management", 
    icon: Briefcase, 
    skills: ["Scrum", "Kanban", "JIRA"] 
  },
];

export function SkillsShowcase() {
  return (
    <section id="skills" className="w-full pt-8 pb-8 md:pb-12">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl flex items-center justify-center">
          <Zap className="mr-3 h-8 w-8" />
          Skills & Technologies
        </h2>
        <p className="mt-3 text-lg text-muted-foreground sm:text-xl">
          A comprehensive list of my technical proficiencies.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category) => (
          <Card 
            key={category.name} 
            className="rounded-xl shadow-2xl bg-card/60 dark:bg-card/50 backdrop-blur-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02] transform flex flex-col"
          >
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-primary flex items-center">
                <category.icon className="mr-3 h-6 w-6" />
                {category.name}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow pt-2">
              <ul className="space-y-3"> {/* Increased spacing */}
                {category.skills.map((skill) => (
                  <li key={skill} className="flex items-center text-foreground/90 p-2 rounded-md hover:bg-primary/10 transition-colors">
                    <CheckCircle className="mr-2.5 h-5 w-5 text-accent flex-shrink-0" /> {/* Slightly larger icon & margin */}
                    <span className="font-medium">{skill}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
