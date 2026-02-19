"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(true);
  const [currentPath, setCurrentPath] = useState(pathname);

  // Derive state from pathname change — no setState in effect
  if (pathname !== currentPath) {
    setCurrentPath(pathname);
    setIsVisible(false);
  }

  // Fade in after reset
  useEffect(() => {
    if (!isVisible) {
      const frame = requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsVisible(true);
        });
      });
      return () => cancelAnimationFrame(frame);
    }
  }, [isVisible]);

  return (
    <div
      className={`transition-opacity duration-300 ease-out ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      {children}
    </div>
  );
}
