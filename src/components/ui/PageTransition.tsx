"use client";

import { usePathname } from "next/navigation";
import { useRef, useEffect } from "react";

export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const containerRef = useRef<HTMLDivElement>(null);
  const prevPathRef = useRef(pathname);

  useEffect(() => {
    if (pathname !== prevPathRef.current) {
      prevPathRef.current = pathname;
      const el = containerRef.current;
      if (el) {
        el.style.opacity = "0";
        requestAnimationFrame(() => {
          el.style.opacity = "1";
        });
      }
    }
  }, [pathname]);

  return (
    <div
      ref={containerRef}
      className="transition-opacity duration-200 ease-out"
    >
      {children}
    </div>
  );
}
