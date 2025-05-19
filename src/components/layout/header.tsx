
import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import { CodeXml, User, Zap, Briefcase, FolderKanban, GraduationCap, Info, HomeIcon } from "lucide-react";

const navItems = [
  { href: "/", label: "Home", icon: HomeIcon, sectionId: "profile" }, // Assuming home links to profile summary
  { href: "/#about-me", label: "About", icon: Info, sectionId: "about-me" },
  { href: "/#skills", label: "Skills", icon: Zap, sectionId: "skills" },
  { href: "/#experience", label: "Experience", icon: Briefcase, sectionId: "experience" },
  { href: "/#projects", label: "Projects", icon: FolderKanban, sectionId: "projects" },
  { href: "/#education-certifications", label: "Education", icon: GraduationCap, sectionId: "education-certifications" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all duration-300 ease-in-out hover:shadow-md">
      <div className="container flex h-16 max-w-screen-2xl items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <CodeXml className="h-6 w-6 text-primary" />
          <span className="font-bold sm:inline-block">
            Mukul's Digital Stage
          </span>
        </Link>
        <nav className="hidden flex-1 items-center space-x-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="group inline-flex items-center rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              <item.icon className="mr-1.5 h-4 w-4 transition-transform group-hover:scale-110" />
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <ThemeToggle />
          {/* Mobile Menu Trigger can be added here if needed */}
        </div>
      </div>
    </header>
  );
}
