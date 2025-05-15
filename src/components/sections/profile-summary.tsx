import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Mail, MapPin, UserCircle, Briefcase, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function ProfileSummary() {
  const name = "Mukul Dev Mahato";
  const email = "mukul.com12@gmail.com";
  const location = "Pune, Maharashtra, India";
  const professionalTitle = "Senior Test Automation Engineer";
  const summary = "Experienced Test Automation Engineer with a passion for quality assurance, CI/CD, and leveraging cloud technologies to build robust testing solutions. Proven ability in API testing, Agile methodologies, and DevOps practices.";

  return (
    <section id="profile" className="w-full">
      <Card className="overflow-hidden shadow-lg transition-shadow hover:shadow-xl">
        <CardHeader className="bg-muted/30 p-6 sm:p-8">
          <div className="flex flex-col items-center gap-6 sm:flex-row">
            <Avatar className="h-24 w-24 sm:h-32 sm:w-32 border-4 border-primary shadow-md">
              <AvatarImage src={`https://placehold.co/200x200.png`} alt={name} data-ai-hint="professional portrait" />
              <AvatarFallback>{name.substring(0, 2).toUpperCase()}</AvatarFallback>
            </Avatar>
            <div className="text-center sm:text-left">
              <CardTitle className="text-3xl font-bold tracking-tight sm:text-4xl text-primary">
                {name}
              </CardTitle>
              <p className="mt-1 text-lg text-muted-foreground sm:text-xl">
                {professionalTitle}
              </p>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-6 sm:p-8 space-y-6">
          <p className="text-base leading-relaxed text-foreground/90">
            {summary}
          </p>
          <div className="grid grid-cols-1 gap-4 text-sm sm:grid-cols-2 sm:gap-6">
            <div className="flex items-center space-x-3">
              <UserCircle className="h-5 w-5 text-primary" />
              <span>{name}</span>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="h-5 w-5 text-primary" />
              <a href={`mailto:${email}`} className="hover:underline text-primary">
                {email}
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="h-5 w-5 text-primary" />
              <span>{location}</span>
            </div>
             <div className="flex items-center space-x-3">
              <Briefcase className="h-5 w-5 text-primary" />
              <span>Open to new opportunities</span>
            </div>
          </div>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
             <Button asChild className="transition-transform hover:scale-105">
                <Link href="#projects">View Projects <ExternalLink className="ml-2 h-4 w-4" /></Link>
             </Button>
             <Button variant="outline" asChild className="transition-transform hover:scale-105">
                <Link href="https://www.linkedin.com/in/mukulmahato/" target="_blank" rel="noopener noreferrer">LinkedIn Profile <ExternalLink className="ml-2 h-4 w-4" /></Link>
             </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
