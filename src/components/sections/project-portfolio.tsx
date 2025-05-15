import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Lightbulb, Code2, FolderKanban, ShieldAlert } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import type { LucideIcon } from "lucide-react";

interface Project {
  name: string;
  description: string;
  imageUrl?: string;
  dataAiHint?: string;
  codeLink?: string;
  liveLink?: string;
  technologies: string[];
  icon: LucideIcon;
}

const projects: Project[] = [
  {
    name: "Personal Portfolio Website",
    description: "This dynamic portfolio, showcasing my skills and experience. Built with Next.js, Tailwind CSS, and ShadCN UI for a modern, responsive design.",
    imageUrl: "https://placehold.co/600x400.png",
    dataAiHint: "website design",
    codeLink: "https://github.com/mukuldm/portfolio-nextjs", // Example, replace with actual
    liveLink: "https://mukulmahato.dev", // Example, replace with actual
    technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript", "ShadCN UI"],
    icon: Code2,
  },
  {
    name: "E-commerce Test Automation Framework",
    description: "A comprehensive BDD framework using Cucumber and Selenium for an e-commerce platform, enhancing test coverage and reducing regression cycles.",
    imageUrl: "https://placehold.co/600x400.png",
    dataAiHint: "automation testing",
    codeLink: "https://github.com/mukuldm/ecommerce-bdd-framework", // Example
    technologies: ["Java", "Selenium", "Cucumber", "TestNG", "Maven"],
    icon: FolderKanban,
  },
  {
    name: "API Performance Test Suite",
    description: "Developed a performance test suite using JMeter and Groovy scripting for critical banking APIs, identifying bottlenecks and ensuring SLA compliance.",
    imageUrl: "https://placehold.co/600x400.png",
    dataAiHint: "api performance",
    technologies: ["JMeter", "Groovy", "InfluxDB", "Grafana", "Jenkins"],
    icon: ShieldAlert,
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
          A selection of projects I've worked on.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Card 
            key={index} 
            className="flex flex-col overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02] transform"
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
                  <Badge key={tech} variant="secondary" className="text-xs">
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
