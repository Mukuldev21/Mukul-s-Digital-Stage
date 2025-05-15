
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Award, CalendarDays, CheckCircle, Star } from "lucide-react";
import type { LucideIcon } from "lucide-react";


interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  location: string;
  duration: string;
}

interface CertificationItem {
  name: string;
  issuer?: string;
  date?: string;
  icon: LucideIcon;
}

const education: EducationItem = {
  degree: "Bachelor of Technology (B.Tech)",
  field: "Mechanical Engineering",
  institution: "Techno India College of Technology",
  location: "Kolkata, West Bengal",
  duration: "2017 – 2021",
};

const certifications: CertificationItem[] = [
  { 
    name: "GEM Award Winner – Recognized for E2E Certificates (WTW)", 
    issuer: "Capgemini", 
    date: "Oct 2024",
    icon: Award 
  },
  { name: "QAT - Grade A", issuer: "Capgemini", icon: Star },
  { name: "Agile Software Development Certification", icon: CheckCircle },
  { name: "Global Banking Level 2 Certification", icon: CheckCircle },
];

export function EducationCertifications() {
  return (
    <section id="education-certifications" className="w-full pt-8 pb-8 md:pb-12">
      <div className="grid gap-8 md:grid-cols-2">
        {/* Education Card */}
        <Card className="rounded-xl shadow-2xl bg-card/60 dark:bg-card/50 backdrop-blur-lg transition-transform duration-300 ease-in-out hover:-translate-y-1">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-primary flex items-center">
              <GraduationCap className="mr-3 h-7 w-7" />
              Education
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <h3 className="text-xl font-semibold text-foreground">{education.degree}</h3>
            <p className="text-md text-muted-foreground">{education.field}</p>
            <p className="text-md text-foreground/90">{education.institution}, {education.location}</p>
            <div className="flex items-center text-sm text-muted-foreground">
              <CalendarDays className="mr-2 h-4 w-4" />
              <span>{education.duration}</span>
            </div>
          </CardContent>
        </Card>

        {/* Certifications & Achievements Card */}
        <Card className="rounded-xl shadow-2xl bg-card/60 dark:bg-card/50 backdrop-blur-lg transition-transform duration-300 ease-in-out hover:-translate-y-1">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-primary flex items-center">
              <Award className="mr-3 h-7 w-7" />
              Certifications & Achievements
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {certifications.map((cert, index) => (
                <li key={index} className="flex items-start">
                  <cert.icon className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-accent" />
                  <div>
                    <span className="font-medium text-foreground/90">{cert.name}</span>
                    {cert.issuer && <span className="text-sm text-muted-foreground block">{cert.issuer}{cert.date ? ` - ${cert.date}` : ''}</span>}
                  </div>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
