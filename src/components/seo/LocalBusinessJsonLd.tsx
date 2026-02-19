export default function LocalBusinessJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    name: "LAZO Construction LLC",
    url: "https://www.lazoconstructiontx.com",
    logo: "https://www.lazoconstructiontx.com/logo.png",
    image: "https://www.lazoconstructiontx.com/og-image.png",
    description:
      "Professional residential and commercial construction services in Austin, Houston, and Central Texas. Kitchen remodels, bathroom renovations, commercial build outs. 20+ years experience.",
    telephone: ["+1-281-406-6787", "+1-832-858-3834"],
    email: "info@lazoconstructiontx.com",
    areaServed: [
      {
        "@type": "State",
        name: "Texas",
      },
      {
        "@type": "City",
        name: "Austin",
        containedInPlace: { "@type": "State", name: "Texas" },
      },
      {
        "@type": "City",
        name: "Houston",
        containedInPlace: { "@type": "State", name: "Texas" },
      },
      {
        "@type": "City",
        name: "Manor",
        containedInPlace: { "@type": "State", name: "Texas" },
      },
    ],
    serviceType: [
      "Kitchen Remodeling",
      "Bathroom Renovation",
      "Room Additions",
      "Interior & Exterior Painting",
      "Drywall Installation",
      "General Residential Remodeling",
      "Commercial Remodeling",
      "Commercial Build Outs",
      "Commercial Painting",
      "Commercial Drywall",
    ],
    knowsLanguage: ["English", "Spanish"],
    slogan: "Your Vision, Our Craft",
    priceRange: "$$",
    sameAs: ["https://www.facebook.com/JonnySCompany"],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
