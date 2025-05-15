
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Lightbulb, Bot, TestTubeDiagonal } from "lucide-react";
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
    description: "Selenium framework with parallel execution reducing test runtime by 40%. Features cross-browser support, Extent Reports, and JSON data management for scalability.",
    imageUrl: "https://placehold.co/600x400.png",
    dataAiHint: "healthcare automation",
    codeLink: "https://github.com/mukuldm/cura-healthcare-selenium",
    technologies: ["Java 21", "Selenium WebDriver", "TestNG", "Maven", "JSON", "Extent Reports", "Git"],
    icon: TestTubeDiagonal,
  },
  {
    name: "SauceDemo Playwright TS Solution",
    description: "Playwright/TypeScript E2E framework cutting test time by 70% with parallel tests. Implements POM for 60% better maintainability, HTML reports, and JSON fixtures.",
    imageUrl: "https://placehold.co/600x400.png",
    dataAiHint: "ecommerce testing",
    codeLink: "https://github.com/mukuldm/saucedemo-playwright-ts",
    technologies: ["Playwright", "TypeScript", "HTML Reporter", "JSON", "Git"],
    icon: Bot,
  },
];

export function ProjectPortfolio() {
  return (
    <section id="projects" className="w-full pt-8 pb-8 md:pb-12">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl flex items-center justify-center">
          <Lightbulb className="mr-3 h-8 w-8" />
          Project Portfolio
        </h2>
        <p className="mt-3 text-lg text-muted-foreground sm:text-xl">
          A selection of my key projects.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
        {projects.map((project, index) => (
          <Card
            key={index}
            className="group flex flex-col overflow-hidden rounded-xl shadow-2xl bg-card/60 dark:bg-card/50 backdrop-blur-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02] transform hover:-translate-y-1"
          >
            {project.imageUrl && (
              <div className="relative h-48 w-full overflow-hidden rounded-t-xl flex-shrink-0">
                <Image
                  src={project.imageUrl}
                  alt={project.name}
                  layout="fill"
                  objectFit="cover"
                  className="w-full h-full transition-transform duration-300 group-hover:scale-110"
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
                  <Badge key={tech} variant="secondary" className="text-xs bg-primary/10 text-primary border-primary/30 hover:bg-primary/20">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-start gap-3 border-t pt-4 border-border/50">
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
