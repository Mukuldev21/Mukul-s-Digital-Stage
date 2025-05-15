import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Lightbulb, Code2, TestTubeDiagonal, Bot } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import type { LucideIcon } from "lucide-react";

interface Project {
  name: string;
  description: string;
  imageUrl?: string;
  dataAiHint?: string;
  codeLink: string;
  liveLink?: string;
  technologies: string[];
  icon: LucideIcon;
}

const projects: Project[] = [
  {
    name: "CURA Healthcare Services Solutions",
    description: "Built a Selenium-based framework with parallel execution, reducing test runtime by 40%. Enabled headless mode and cross-browser testing (Chrome, Firefox, Edge) for 100% compatibility. Integrated Extent Reports with detailed logs, cutting debugging time by 50%. Used JSON-based data management, improving scalability and maintainability by 60%.",
    imageUrl: "https://placehold.co/600x400.png",
    dataAiHint: "healthcare automation",
    codeLink: "https://github.com/mukuldm/cura-healthcare-selenium", // Replace with actual link
    technologies: ["Java 21", "Selenium WebDriver", "TestNG", "Maven", "JSON", "Extent Reports", "Git"],
    icon: TestTubeDiagonal,
  },
  {
    name: "SauceDemo Playwright TS Solution",
    description: "Developed a scalable end-to-end test automation framework using Playwright with TypeScript, achieving a 70% reduction in test execution time through parallel testing. Implemented the Page Object Model (POM) design pattern, enhancing code maintainability and reducing duplication by 60%. Integrated HTML reporting and trace viewer for comprehensive test result analysis, decreasing debugging time by 50%. Utilized JSON-based fixtures for dynamic test data management, improving test scalability and reusability. Configured the framework for cross-browser testing (Chrome, Edge, Webkit), ensuring 100% compatibility across major browsers.",
    imageUrl: "https://placehold.co/600x400.png",
    dataAiHint: "e-commerce testing",
    codeLink: "https://github.com/mukuldm/saucedemo-playwright-ts", // Replace with actual link
    technologies: ["Playwright", "TypeScript", "HTML Reporter", "JSON", "Git"],
    icon: Bot,
  },
];

export function ProjectPortfolio() {
  return (
    <section id="projects" className="w-full">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl flex items-center justify-center">
          <Lightbulb className="mr-3 h-8 w-8" />
          Project Portfolio
        </h2>
        <p className="mt-3 text-lg text-muted-foreground sm:text-xl">
          A selection of my key projects.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2"> {/* Adjusted to lg:grid-cols-2 for two projects */}
        {projects.map((project, index) => (
          <Card 
            key={index} 
            className="flex flex-col overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02] transform bg-card/90 dark:bg-card/80 backdrop-blur-md"
          >
            {project.imageUrl && (
              <div className="relative h-48 w-full">
                <Image
                  src={project.imageUrl}
                  alt={project.name}
                  layout="fill"
                  objectFit="cover"
                  data-ai-hint={project.dataAiHint || "project image"}
                />
              </div>
            )}
            <CardHeader>
              <CardTitle className="flex items-center text-xl font-semibold text-foreground">
                <project.icon className="mr-2 h-5 w-5 text-primary" />
                {project.name}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <CardDescription className="text-foreground/80">{project.description}</CardDescription>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-xs bg-primary/10 text-primary border-primary/30">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-start gap-3 border-t pt-4">
              {project.codeLink && (
                <Button variant="outline" size="sm" asChild className="transition-transform hover:scale-105">
                  <Link href={project.codeLink} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" /> View Code
                  </Link>
                </Button>
              )}
              {project.liveLink && (
                <Button variant="default" size="sm" asChild className="transition-transform hover:scale-105">
                  <Link href={project.liveLink} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                  </Link>
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
