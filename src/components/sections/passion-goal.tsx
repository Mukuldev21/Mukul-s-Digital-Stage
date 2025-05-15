import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Flame, Lightbulb } from "lucide-react";

export function PassionGoal() {
  const passionGoalText = "Dedicated to continuous learning and innovation in test automation, DevOps, and cloud-based solutions. Focused on scaling frameworks and optimizing strategies for high-quality software delivery.";

  return (
    <section id="passion-goal" className="w-full">
      <Card className="shadow-lg transition-shadow hover:shadow-xl bg-card/90 dark:bg-card/80 backdrop-blur-md">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold text-primary flex items-center">
            <Flame className="mr-3 h-7 w-7" /> {/* Or Target / Lightbulb */}
            Passion & Goal
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg leading-relaxed text-foreground/90">
            {passionGoalText}
          </p>
        </CardContent>
      </Card>
    </section>
  );
}
