
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
    logoUrl: "https://placehold.co/100x100.png", 
    dataAiHint: "company logo",
    achievements: [
      "Designed scalable test automation frameworks achieving 80%+ test coverage.",
      "Automated 95% of regression testing, reducing manual effort and boosting efficiency.",
      "Built Java-based automation for webApp and API.",
      "Integrated tests into CI/CD pipelines (Jenkins, Azure DevOps), cutting deployment validation time by 30%.",
      "Developed REST API automation for 500+ backend services, ensuring stability and security.",
      "Improved flaky test reliability by 40% through enhanced automation practices.",
      "Applied system design principles to create secure, scalable, and maintainable frameworks.",
      "Executed Agile-aligned test strategies, managing defects and execution via JIRA and Azure DevOps, reducing post-release defects by 30%.",
      "Contributed to sprint planning, test execution, and process refinement in Agile teams."
    ],
  },
];

export function ExperienceTimeline() {
  return (
    <section id="experience" className="w-full pt-8 pb-8 md:pb-12">
      <Card className="rounded-xl shadow-2xl bg-card/60 dark:bg-card/50 backdrop-blur-lg transition-shadow hover:shadow-xl">
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
                    className="w-12 h-12 rounded-full mr-4 mb-2 sm:mb-0 object-contain border bg-background/30 p-1" // Adjusted background for visibility on glass
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
