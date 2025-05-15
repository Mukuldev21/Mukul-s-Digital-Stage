import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cog, Network, GitMerge, CloudIcon as Cloud, Users, Repeat, Zap, TestTubeDiagonal, ShieldCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Skill {
  name: string;
  icon: LucideIcon;
}

const skills: Skill[] = [
  { name: "Test Automation", icon: Cog },
  { name: "API Testing", icon: Network },
  { name: "CI/CD", icon: GitMerge },
  { name: "Cloud (AWS, Azure)", icon: Cloud },
  { name: "Agile Methodologies", icon: Users },
  { name: "DevOps Practices", icon: Repeat },
  { name: "Performance Testing", icon: Zap },
  { name: "Selenium & Cypress", icon: TestTubeDiagonal },
  { name: "Security Testing Basics", icon: ShieldCheck },
];

export function SkillsShowcase() {
  return (
    <section id="skills" className="w-full">
      <Card className="shadow-lg transition-shadow hover:shadow-xl">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold text-primary flex items-center">
            <Cog className="mr-3 h-7 w-7" />
            Skills & Technologies
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <Badge
                key={skill.name}
                variant="secondary"
                className="px-4 py-2 text-sm rounded-full shadow-sm border-primary/50 hover:bg-primary/10 transition-all duration-200 cursor-default"
              >
                <skill.icon className="mr-2 h-4 w-4 text-primary" />
                {skill.name}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
