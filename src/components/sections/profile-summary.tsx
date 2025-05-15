import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Mail, MapPin, Briefcase, Linkedin, Github, FileText, Zap, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export function ProfileSummary() {
  const name = "Mukul Dev Mahato";
  const email = "mukul.com12@gmail.com";
  const phone = "+91 7033380645";
  const location = "Pune, Maharashtra, India";
  const professionalTitle = "Software Development Engineer in Test (SDET)";
  const summary = "Software Development Engineer in Test (SDET) with 3 years of experience in building scalable test automation frameworks, integrating tests into CI/CD pipelines, and enhancing software reliability through DevOps practices. Skilled in test automation, API testing, cloud technologies, and Agile methodologies.";
  const keySkills = ["Test Automation", "CI/CD", "API Testing", "Cloud", "Agile", "DevOps"];
  const linkedinUrl = "https://www.linkedin.com/in/mukulmahato/"; 
  const githubUrl = "https://github.com/mukuldm";
  const cvPath = "/Mukul_Dev_Mahato_CV.pdf"; // Ensure this PDF exists in your public folder

  return (
    <section id="profile" className="w-full pt-8"> {/* Added pt-8 for spacing from sticky header */}
      <Card className="overflow-hidden shadow-xl transition-shadow hover:shadow-2xl bg-card/60 dark:bg-card/50 backdrop-blur-xl border border-border/40 dark:border-border/30 rounded-2xl">
        <CardHeader className="p-6 sm:p-8">
          <div className="flex flex-col items-center gap-6 sm:flex-row">
            <Avatar className="h-40 w-40 sm:h-48 sm:w-48 border-4 border-primary shadow-lg">
              <AvatarImage src={`https://placehold.co/250x250.png`} alt={name} data-ai-hint="professional portrait" />
              <AvatarFallback>{name.substring(0, 2).toUpperCase()}</AvatarFallback>
            </Avatar>
            <div className="text-center sm:text-left">
              <p className="text-xl text-muted-foreground sm:text-2xl">Hi, I'm</p>
              <CardTitle className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-primary">
                {name}
              </CardTitle>
              <p className="mt-1 text-lg text-muted-foreground sm:text-xl">
                {professionalTitle}
              </p>
              <div className="mt-3 flex flex-wrap justify-center sm:justify-start gap-2">
                {keySkills.map(skill => (
                  <Badge key={skill} variant="secondary" className="text-xs sm:text-sm bg-primary/10 text-primary border-primary/30">
                     {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-6 sm:p-8 space-y-6">
          <p className="text-base leading-relaxed text-foreground/90">
            {summary}
          </p>
          <div className="grid grid-cols-1 gap-4 text-sm sm:grid-cols-2 sm:gap-6">
            <div className="flex items-center space-x-3">
              <Mail className="h-5 w-5 text-primary" />
              <a href={`mailto:${email}`} className="hover:underline text-foreground hover:text-primary">
                {email}
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="h-5 w-5 text-primary" />
              <a href={`tel:${phone}`} className="hover:underline text-foreground hover:text-primary">
                {phone}
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="h-5 w-5 text-primary" />
              <span className="text-foreground/90">{location}</span>
            </div>
             <div className="flex items-center space-x-3">
              <Briefcase className="h-5 w-5 text-primary" />
              <span className="text-foreground/90">Open to new opportunities</span>
            </div>
          </div>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
             <Button asChild className="transition-transform hover:scale-105">
                <Link href={linkedinUrl} target="_blank" rel="noopener noreferrer">
                    <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
                </Link>
             </Button>
             <Button variant="outline" asChild className="transition-transform hover:scale-105">
                <Link href={githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" /> GitHub
                </Link>
             </Button>
             <Button variant="outline" asChild className="transition-transform hover:scale-105">
                <Link href="#projects">
                    <Zap className="mr-2 h-4 w-4" /> View Projects
                </Link>
             </Button>
             <Button variant="outline" asChild className="transition-transform hover:scale-105">
                <Link href={cvPath} target="_blank" download="Mukul_Dev_Mahato_CV.pdf">
                    <FileText className="mr-2 h-4 w-4" /> Download CV
                </Link>
             </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
