
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, TestTubeDiagonal, Network, Smartphone, GitMerge, Cloud, Code, Briefcase } from "lucide-react";
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
    <section id="skills" className="w-full pt-8">
      <Card className="shadow-lg transition-shadow hover:shadow-xl bg-card/90 dark:bg-card/80 backdrop-blur-md">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold text-primary flex items-center">
            <Zap className="mr-3 h-7 w-7" />
            Skills & Technologies
          </CardTitle>
          <CardDescription>A comprehensive list of my technical proficiencies.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-8"> {/* Increased space between categories */}
          {skillCategories.map((category) => (
            <div key={category.name}>
              <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center"> {/* Increased font size and margin */}
                <category.icon className="mr-3 h-6 w-6 text-accent" /> {/* Slightly larger icon */}
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill}
                    className="px-4 py-2.5 rounded-lg shadow-md border border-border bg-background/80 hover:bg-accent hover:text-accent-foreground transition-all duration-200 cursor-default transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50" // Enhanced styling
                  >
                    <span className="text-sm font-medium text-foreground group-hover:text-accent-foreground"> {/* Ensure text color changes on hover via group */}
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </section>
  );
}
