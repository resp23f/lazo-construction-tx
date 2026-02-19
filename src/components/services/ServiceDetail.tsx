"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import SkeletonImage from "@/components/ui/SkeletonImage";

interface ServiceDetailProps {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  isAlternate?: boolean;
  imagePosition?: string;
}

export default function ServiceDetail({
  title,
  description,
  image,
  imageAlt,
  isAlternate = false,
  imagePosition = "center",
}: ServiceDetailProps) {
  return (
    <section className="py-16 bg-surface border-t border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Content */}
            <div className={isAlternate ? "lg:order-2" : ""}>
              <h2 className="font-heading text-xl font-bold text-primary sm:text-2xl lg:text-3xl">
                {title}
              </h2>
              <p className="mt-4 text-text-muted leading-relaxed">{description}</p>
            </div>

            {/* Image */}
            <div className={isAlternate ? "lg:order-1" : ""}>
              <div className="relative aspect-video rounded-xl overflow-hidden shadow-md">
                <SkeletonImage
                  src={image}
                  alt={imageAlt}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  style={{ objectPosition: imagePosition }}
                />
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
