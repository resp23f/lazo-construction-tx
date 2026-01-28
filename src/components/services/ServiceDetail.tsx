interface ServiceDetailProps {
  title: string;
  description: string;
  isAlternate?: boolean;
}

export default function ServiceDetail({
  title,
  description,
  isAlternate = false,
}: ServiceDetailProps) {
  return (
    <section className={`py-16 ${isAlternate ? "bg-surface" : "bg-background"}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className={isAlternate ? "lg:order-2" : ""}>
            <h2 className="font-heading text-2xl font-bold text-primary sm:text-3xl">
              {title}
            </h2>
            <p className="mt-4 text-text-muted leading-relaxed">{description}</p>
          </div>

          {/* Placeholder Image */}
          <div className={isAlternate ? "lg:order-1" : ""}>
            <div className="aspect-video bg-gray-200 flex items-center justify-center border border-gray-300">
              <span className="text-text-muted text-sm">{title}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
