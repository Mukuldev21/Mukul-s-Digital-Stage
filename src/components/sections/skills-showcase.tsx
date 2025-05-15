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
        <CardContent className="space-y-6">
          {skillCategories.map((category) => (
            <div key={category.name}>
              <h3 className="text-lg font-medium text-foreground mb-3 flex items-center">
                <category.icon className="mr-2 h-5 w-5 text-accent" />
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill}
                    className="px-4 py-2 rounded-md shadow-sm border border-border bg-background/70 hover:bg-accent hover:text-accent-foreground transition-colors duration-200 cursor-default transform hover:scale-[1.03]"
                  >
                    <span className="text-sm font-medium text-foreground group-hover:text-accent-foreground">
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
