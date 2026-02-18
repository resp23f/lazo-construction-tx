import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
  image: string;
  imageAlt: string;
}

export default function ServiceCard({
  title,
  description,
  href,
  image,
  imageAlt,
}: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="group block bg-surface border border-gray-100 hover:border-primary hover:shadow-lg transition-all rounded-xl overflow-hidden"
    >
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
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
