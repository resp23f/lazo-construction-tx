import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { Star, BadgeCheck } from "lucide-react";

const testimonials = [
  {
    quote:
      "We hired Lazo construction for a remodel in austin tx that included kitchen work and new flooring. Jonny and his crew were easy to work with, showed up when they said they would and did solid work. communication was painless and really happy with how it turned out and would recommend Lazo construction to anyone looking for a solid contractor in Austin.",
    author: "Michael R.",
    initials: "MR",
    location: "Austin",
    color: "bg-blue-500",
  },
  {
    quote:
      "LAZO handled our office renovation with zero disruption to our business. Communicated every step of the way.",
    author: "Sandra T.",
    initials: "ST",
    location: "Houston",
    color: "bg-emerald-500",
  },
  {
    quote:
      "Best contractor experience we've had. Fair pricing, no surprises, and the quality speaks for itself.",
    author: "David & Maria L.",
    initials: "DM",
    location: "Manor",
    color: "bg-amber-500",
  },
];

function StarRating() {
  return (
    <div className="flex gap-0.5 mb-4">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className="h-5 w-5 text-amber-400 fill-amber-400"
          strokeWidth={1.5}
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-100/50 via-indigo-50/30 to-slate-200/60">
      <Container>
        <ScrollReveal>
          <SectionHeading title="What Our Clients Say" />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={index} delay={index * 150}>
              <div className="bg-surface p-8 rounded-xl border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                <StarRating />
                <blockquote className="text-text leading-relaxed flex-grow">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-4">
                  <div
                    className={`w-12 h-12 rounded-full ${testimonial.color} flex items-center justify-center text-white font-bold text-sm`}
                  >
                    {testimonial.initials}
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <p className="font-heading font-bold text-text">
                        {testimonial.author}
                      </p>
                      <BadgeCheck className="h-4 w-4 text-primary" strokeWidth={2} />
                    </div>
                    <p className="text-text-muted text-sm">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
