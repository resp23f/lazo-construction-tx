"use client";

import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { Star, BadgeCheck } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const testimonials = [
  {
    quote: {
      en: "Hired Lazo for a kitchen remodel and new flooring in Austin. Jonny and his crew were easy to work with, showed up when they said they would, and did solid work. communication was painless. would definitely recommend them to anyone looking for a solid contractor.",
      es: "Contratamos a Lazo para una remodelación de cocina y pisos nuevos en Austin. Jonny y su equipo fueron fáciles de tratar, llegaron cuando dijeron que llegarían, e hicieron un trabajo sólido. La comunicación fue sin problemas. Definitivamente los recomendaría a cualquiera que busque un buen contratista.",
    },
    author: "Michael R.",
    initials: "MR",
    location: { en: "Austin", es: "Austin" },
    color: "bg-gray-400",
  },
  {
    quote: {
      en: "Great experience all around. fair price, showed up on time, and the quality was solid. our kitchen and bathroom look completely different now. would recommend to anyone in the area.",
      es: "Gran experiencia en todo sentido. Precio justo, llegaron a tiempo, y la calidad fue excelente. Nuestra cocina y baño se ven completamente diferentes ahora. Los recomendaría a cualquiera en el área.",
    },
    author: "David & Maria L.",
    initials: "DM",
    location: { en: "Austin", es: "Austin" },
    color: "bg-gray-400",
  },
  {
    quote: {
      en: "had Lazo renovate our office and they made it so easy. worked around our schedule so we stayed open the whole time. the space came out looking way better than we expected honestly. definitely calling them back for the next project.",
      es: "Lazo renovó nuestra oficina y lo hicieron muy fácil. Trabajaron alrededor de nuestro horario para que siguiéramos abiertos todo el tiempo. El espacio quedó mucho mejor de lo que esperábamos, honestamente. Definitivamente los llamaremos de nuevo para el próximo proyecto.",
    },
    author: "Sandra T.",
    initials: "ST",
    location: { en: "Houston", es: "Houston" },
    color: "bg-gray-400",
  },
];

function StarRating() {
  return (
    <div className="flex gap-0.5 mb-3 sm:mb-4">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className="h-4 w-4 sm:h-5 sm:w-5 text-amber-400 fill-amber-400"
          strokeWidth={1.5}
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const { lang, t } = useLanguage();

  return (
    <section className="py-12 bg-gray-50">
      <Container>
        <ScrollReveal>
          <SectionHeading title={t("testimonials.heading")} />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={index} delay={index * 150}>
              <div className="bg-surface p-4 sm:p-8 rounded-xl border border-gray-100 hover:shadow-lg translate-y-0 hover:-translate-y-1 transition-all duration-300 ease-out will-change-transform h-full flex flex-col">
                <StarRating />
                <blockquote className="text-text text-sm sm:text-base leading-relaxed flex-grow">
                  &ldquo;{testimonial.quote[lang]}&rdquo;
                </blockquote>
                <div className="mt-4 sm:mt-6 pt-4 border-t border-gray-100 flex items-center gap-3 sm:gap-4">
                  <div
                    className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full ${testimonial.color} flex items-center justify-center text-white font-bold text-xs sm:text-sm`}
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
                    <p className="text-text-muted text-sm">{testimonial.location[lang]}</p>
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
