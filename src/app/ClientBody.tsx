"use client";

import { useEffect } from "react";

export function ClientBody({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Activar visibilidad cuando React se monta
    document.documentElement.classList.add("hydrated");
  }, []);

  return (
    <body
      className="antialiased min-h-screen bg-background overflow-x-hidden"
      suppressHydrationWarning
    >
      {children}
    </body>
  );
}
