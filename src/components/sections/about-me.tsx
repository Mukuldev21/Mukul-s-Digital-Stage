
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, FolderKanban, Building, Download, UserCircle } from "lucide-react";
import Image from "next/image";

interface InfoCardProps {
  icon: React.ElementType;
  value: string;
  label: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ icon: Icon, value, label }) => (
  <Card className="text-center rounded-xl shadow-lg bg-card/70 dark:bg-card/60 backdrop-blur-md p-4 transition-transform duration-300 ease-in-out hover:-translate-y-1">
    <CardHeader className="pb-2">
      <Icon className="mx-auto h-8 w-8 text-primary mb-2" />
      <CardTitle className="text-2xl font-bold text-foreground">{value}</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-sm text-muted-foreground">{label}</p>
    </CardContent>
  </Card>
);

export function AboutMe() {
  const cvPath = "/Mukul_Dev_Mahato_CV.pdf"; 

  return (
    <section id="about-me" className="w-full py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto p-6 sm:p-8 rounded-xl shadow-2xl bg-card/60 dark:bg-card/50 backdrop-blur-lg transition-all duration-300 ease-in-out hover:-translate-y-1">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl flex items-center justify-center">
              <UserCircle className="mr-3 h-8 w-8" />
              About Me
            </h2>
            <p className="mt-2 text-lg text-muted-foreground">My Introduction</p>
          </div>

          <div className="space-y-8"> {/* Changed from grid to space-y for single column */}
            {/* Text Content */}
            <div className="space-y-6 text-left">
              <p className="text-lg leading-relaxed text-foreground/90">
                I'm an experienced Software Development Engineer in Test (SDET) with 3 years of hands-on experience in building scalable test automation frameworks, integrating tests into CI/CD pipelines, and enhancing software reliability through DevOps practices.
              </p>
              <p className="text-lg leading-relaxed text-foreground/90">
                My passion lies in creating efficient, robust automated testing solutions that improve software quality while reducing manual effort. I'm committed to continuous learning, innovation, and excellence in test automation, DevOps, and cloud-based automation.
              </p>
              <p className="text-lg leading-relaxed text-foreground/90">
                Currently working at Capgemini in Pune, Maharashtra, I focus on scaling test automation frameworks and optimizing testing strategies for high-quality software delivery.
              </p>
            </div>

            {/* Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6"> {/* Kept info cards in a row for better space utilization */}
              <InfoCard icon={Briefcase} value="03+" label="Years Experience" />
              <InfoCard icon={FolderKanban} value="05+" label="Projects Completed" />
              <InfoCard icon={Building} value="01" label="Company Worked" />
            </div>
            
            {/* CV Button */}
            <div className="pt-4 text-center"> {/* Centered button */}
                <Button size="lg" asChild className="transition-transform hover:scale-105 shadow-md">
                  <Link href={cvPath} target="_blank" download="Mukul_Dev_Mahato_CV.pdf">
                    <Download className="mr-2 h-5 w-5" />
                    Download CV
                  </Link>
                </Button>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
}
