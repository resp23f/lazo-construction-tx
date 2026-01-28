import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
  imageAlt?: string;
}

export default function ServiceCard({
  title,
  description,
  href,
  imageAlt,
}: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="group block bg-surface border border-gray-100 hover:border-primary hover:shadow-lg transition-all"
    >
      {/* Placeholder Image */}
      <div className="aspect-video bg-gray-200 flex items-center justify-center">
        <span className="text-text-muted text-sm">{imageAlt || title}</span>
      </div>

      <div className="p-6">
        <h3 className="font-heading font-bold text-xl text-text group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="mt-2 text-text-muted">{description}</p>
        <div className="mt-4 flex items-center gap-2 text-primary font-medium text-sm">
          Learn More
          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" strokeWidth={2} />
        </div>
      </div>
    </Link>
  );
}
