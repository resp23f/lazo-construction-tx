"use client";

import { LanguageProvider } from "@/context/LanguageContext";
import { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SkeletonTheme baseColor="#e5e7eb" highlightColor="#f3f4f6">
      <LanguageProvider>{children}</LanguageProvider>
    </SkeletonTheme>
  );
}
