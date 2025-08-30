
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, CalendarDays, CheckCircle, Building } from "lucide-react";

interface Experience {
  role: string;
  company: string;
  location: string;
  duration: string;
  achievements: string[];
  logoUrl?: string;
  dataAiHint?: string;
}

const experiences: Experience[] = [
  {
    role: "Senior Software Engineer",
    company: "Capgemini",
    location: "Pune, Maharashtra",
    duration: "2022 – Present",
    //logoUrl: "https://www.clipartmax.com/png/small/215-2153170_capgemini-capgemini-icon.png", 
    logoUrl: "/images/capgemini-logo.png",
    dataAiHint: "company logo",
    achievements: [
      "Accelerated regression cycles by 40% by spearheading automation testing for Banking and Insurance clients (WTW) using Java, Selenium, TestNG, and Cucumber.",
      "Ensured data accuracy and integrity by performing comprehensive ETL testing for MUFG, identifying and resolving over 150 data discrepancies.",
      "Reduced deployment validation time by 30% through the integration of automated test suites into CI/CD pipelines (Jenkins, Azure DevOps).",
      "Enhanced API testing efficiency by creating and executing over 130 API test scripts in Postman and SOAP UI for BNPP, validating data accuracy and service reliability.",
      "Increased test coverage by 20% and reduced production defects by 15% by collaborating with cross-functional teams to define effective test strategies.",
      "Boosted code generation efficiency by 25% by leveraging GitHub Copilot and generative AI to develop a scalable test automation framework.",
      "Contributed to a 15% reduction in post-launch issues by executing thorough manual testing (functional, regression, UAT) across more than 20 new features.",
      "Improved bug resolution time by 15% by developing detailed test plans and over 500 test cases and effectively tracking defects to closure in Azure DevOps."
    ],
  },
];

export function ExperienceTimeline() {
  return (
    <section id="experience" className="w-full pt-8 pb-8 md:pb-12">
      <Card className="rounded-xl shadow-2xl bg-card/60 dark:bg-card/50 backdrop-blur-lg transition-transform duration-300 ease-in-out hover:-translate-y-1">
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
                <Building className="h-3 w-3" />
              </span>
              <div className="absolute left-[11px] top-8 bottom-0 w-0.5 bg-border group-last:hidden"></div>
              
              <div className="flex flex-col sm:flex-row items-start sm:items-center mb-2">
                {exp.logoUrl && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img 
                    src={exp.logoUrl} 
                    alt={`${exp.company} logo`} 
                    className="w-12 h-12 rounded-full mr-4 mb-2 sm:mb-0 object-contain border bg-background/30 p-1" 
                    data-ai-hint={exp.dataAiHint || "company logo"}
                  />
                )}
                <div>
                  <h3 className="text-xl font-semibold text-foreground">{exp.role}</h3>
                  <p className="text-md text-muted-foreground">{exp.company} - {exp.location}</p>
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
