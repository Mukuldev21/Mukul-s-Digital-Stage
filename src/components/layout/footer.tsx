"use client";
import React, { useEffect, useState } from 'react';

export function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="border-t border-border/40 py-6 md:py-8">
      <div className="container flex flex-col items-center justify-center text-center text-sm text-muted-foreground">
        <p>&copy; {currentYear} Mukul Dev Mahato. All rights reserved.</p>
        <p>Built with Next.js and Tailwind CSS.</p>
      </div>
    </footer>
  );
}
