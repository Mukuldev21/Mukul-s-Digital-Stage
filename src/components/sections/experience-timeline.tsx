import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, CalendarDays, CheckCircle } from "lucide-react";

interface Experience {
  role: string;
  company: string;
  duration: string;
  achievements: string[];
  logoUrl?: string;
}

const experiences: Experience[] = [
  {
    role: "Senior Test Automation Engineer",
    company: "Capgemini",
    duration: "July 2021 - Present",
    logoUrl: "https://placehold.co/100x100.png", // Replace with actual Capgemini logo URL if allowed
    achievements: [
      "Led the design and implementation of scalable test automation frameworks using Selenium, Cypress, and Playwright, resulting in a 50% reduction in manual testing effort.",
      "Developed and maintained CI/CD pipelines for automated testing, integrating with Jenkins and Azure DevOps, ensuring early bug detection and faster feedback loops.",
      "Pioneered API automation strategies using RestAssured and Postman, achieving 95% test coverage for critical microservices.",
      "Collaborated closely with development and product teams in an Agile environment to define testing requirements and ensure quality throughout the SDLC.",
      "Mentored and coached junior QA engineers on automation best practices, tools, and techniques."
    ],
  },
  {
    role: "Test Automation Engineer",
    company: "Cognizant",
    duration: "June 2018 - June 2021",
    logoUrl: "https://placehold.co/100x100.png", // Replace with actual Cognizant logo URL if allowed
    achievements: [
      "Developed and executed automated test scripts for web and mobile applications, improving regression testing efficiency by 30%.",
      "Participated in all phases of the STLC, including test planning, test case design, execution, and defect reporting.",
      "Gained experience in performance testing using JMeter and defect tracking using JIRA.",
      "Contributed to the continuous improvement of QA processes and methodologies."
    ],
  },
];

export function ExperienceTimeline() {
  return (
    <section id="experience" className="w-full">
      <Card className="shadow-lg transition-shadow hover:shadow-xl">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold text-primary flex items-center">
            <Briefcase className="mr-3 h-7 w-7" />
            Professional Experience
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 sm:pl-10 group">
              <span className="absolute left-0 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground group-hover:scale-110 transition-transform">
                <Briefcase className="h-3 w-3" />
              </span>
              <div className="absolute left-[11px] top-8 bottom-0 w-0.5 bg-border group-last:hidden"></div>
              
              <div className="flex flex-col sm:flex-row items-start sm:items-center mb-2">
                {exp.logoUrl && (
                  <img 
                    src={exp.logoUrl} 
                    alt={`${exp.company} logo`} 
                    className="w-12 h-12 rounded-full mr-4 mb-2 sm:mb-0 object-contain border bg-background p-1"
                    data-ai-hint="company logo"
                  />
                )}
                <div>
                  <h3 className="text-xl font-semibold text-foreground">{exp.role}</h3>
                  <p className="text-md text-muted-foreground">{exp.company}</p>
                </div>
              </div>
              <div className="flex items-center text-sm text-muted-foreground mb-3">
                <CalendarDays className="mr-2 h-4 w-4" />
                <span>{exp.duration}</span>
              </div>
              <ul className="space-y-2">
                {exp.achievements.map((achievement, achIndex) => (
                  <li key={achIndex} className="flex items-start">
                    <CheckCircle className="mr-2 mt-1 h-4 w-4 flex-shrink-0 text-accent" />
                    <span className="text-foreground/90">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </CardContent>
      </Card>
    </section>
  );
}
