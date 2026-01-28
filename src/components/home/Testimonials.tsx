import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "They transformed our outdated kitchen into exactly what we envisioned. Professional crew, clean worksite, finished ahead of schedule.",
    author: "Michael R.",
    location: "Austin",
  },
  {
    quote:
      "LAZO handled our office renovation with zero disruption to our business. Communicated every step of the way.",
    author: "Sandra T.",
    location: "Houston",
  },
  {
    quote:
      "Best contractor experience we've had. Fair pricing, no surprises, and the quality speaks for itself.",
    author: "David & Maria L.",
    location: "Manor",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-background">
      <Container>
        <SectionHeading title="What Our Clients Say" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-surface p-8 border border-gray-100"
            >
              <Quote
                className="h-8 w-8 text-primary mb-4"
                strokeWidth={1.5}
              />
              <blockquote className="text-text leading-relaxed">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <div className="mt-6 pt-4 border-t border-gray-100">
                <p className="font-heading font-bold text-text">
                  {testimonial.author}
                </p>
                <p className="text-text-muted text-sm">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
