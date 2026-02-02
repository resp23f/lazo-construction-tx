"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  className?: string;
  disabled?: boolean;
}

export default function Button({
  children,
  variant = "primary",
  href,
  onClick,
  type = "button",
  className,
  disabled = false,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-heading font-bold text-sm uppercase tracking-wide transition-colors";

  const variants = {
    primary: "bg-primary text-white hover:bg-primary-light border-2 border-primary",
    secondary: "bg-primary-dark text-white hover:bg-primary border-2 border-primary-dark",
    outline:
      "border-2 border-primary text-primary hover:bg-primary hover:text-white",
  };

  const styles = cn(baseStyles, variants[variant], className);

  if (href) {
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={styles}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
