import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import { CodeXml, Home, User, Zap, Briefcase, FolderKanban, GraduationCap, Target } from "lucide-react"; // Added icons

const navItems = [
  { href: "/#profile", label: "Profile", icon: User },
  { href: "/#skills", label: "Skills", icon: Zap },
  { href: "/#experience", label: "Experience", icon: Briefcase },
  { href: "/#projects", label: "Projects", icon: FolderKanban },
  { href: "/#education-certifications", label: "Education", icon: GraduationCap },
  { href: "/#passion-goal", label: "Passion", icon: Target },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
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
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              <item.icon className="mr-1.5 inline h-4 w-4" />
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
