
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Mail, MapPin, Linkedin, Github, FileText, Briefcase, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function ProfileSummary() {
  const name = "Mukul Dev Mahato";
  const email = "mukul.com12@gmail.com";
  const phone = "+91 7033380645";
  const location = "Pune, Maharashtra, India";
  const professionalTitle = "Software Development Engineer in Test (SDET)";
  const summary = "Experienced SDET with 3+ years in building scalable test automation frameworks, CI/CD integration, and enhancing software reliability via DevOps. Proficient in API testing, cloud tech, and Agile.";
  const linkedinUrl = "https://www.linkedin.com/in/mukul-dev-a02108198/"; 
  const githubUrl = "https://github.com/Mukuldev21";

  return (
    <section id="profile" className="w-full py-20 md:py-28 lg:py-36 bg-gradient-to-br from-background to-muted/30 dark:to-muted/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-10 md:grid-cols-2 md:gap-16 items-center">
          <div className="flex justify-center md:order-last">
            <Avatar className="h-60 w-60 sm:h-72 sm:w-72 md:h-80 md:w-80 lg:h-96 lg:w-96 border-4 border-primary/50 shadow-2xl transition-transform hover:scale-105">
              <AvatarImage src="/images/myphoto.jpg" alt={name} data-ai-hint="professional portrait" />
              <AvatarFallback>{name.substring(0, 2).toUpperCase()}</AvatarFallback>
            </Avatar>
          </div>
          <div className="space-y-5 text-center md:text-left">
            <span className="text-lg font-medium text-primary tracking-wide">Hello, I'm</span>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary/60 py-1">
              {name}
            </h1>
            <p className="text-2xl font-semibold text-foreground md:text-3xl">
              A Creative <span className="text-primary">{professionalTitle}</span>
            </p>
            <p className="max-w-xl text-muted-foreground mx-auto md:mx-0 text-base sm:text-lg">
              {summary}
            </p>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
               <Button size="lg" asChild className="transition-transform hover:scale-105 shadow-md">
                  <a href={`mailto:${email}`}>
                      <Send className="mr-2 h-5 w-5" /> Hire Me
                  </a>
               </Button>
              
            </div>

            <div className="mt-8 space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center justify-center md:justify-start gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <a href={`mailto:${email}`} className="hover:underline hover:text-primary transition-colors">
                  {email}
                </a>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-3">
                <Phone className="h-5 w-5 text-primary" />
                <a href={`tel:${phone}`} className="hover:underline hover:text-primary transition-colors">
                  {phone}
                </a>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-3">
                <MapPin className="h-5 w-5 text-primary" />
                <span>{location}</span>
              </div>
            </div>
             <div className="mt-6 flex justify-center md:justify-start space-x-4">
                    <Button variant="outline" size="sm" asChild className="transition-transform hover:scale-105">
                       <Link href={linkedinUrl} target="_blank" rel="noopener noreferrer">
                          <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
                      </Link>
                    </Button>
                    <Button variant="outline" size="sm" asChild className="transition-transform hover:scale-105">
                       <Link href={githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" /> Github
                      </Link>
                    </Button>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
