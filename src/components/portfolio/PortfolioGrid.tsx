"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import FilterBar from "./FilterBar";
import LightboxModal from "./LightboxModal";
import ScrollReveal from "@/components/ui/ScrollReveal";

interface PortfolioItem {
  id: string;
  title: string;
  alt: string;
  category: string;
  image: string;
}

const portfolioItems: PortfolioItem[] = [
  // Kitchens (6)
  {
    id: "1",
    title: "White Shaker Kitchen",
    alt: "Kitchen remodel with white shaker cabinets and dark countertops",
    category: "Kitchens",
    image: "/images/portfolio/kitchen-remodel-white-cabinets-dark-countertops.jpg",
  },
  {
    id: "2",
    title: "Two-Tone Herringbone",
    alt: "Kitchen remodel featuring two-tone cabinets and herringbone backsplash",
    category: "Kitchens",
    image: "/images/portfolio/kitchen-remodel-two-tone-cabinets-herringbone-backsplash.jpg",
  },
  {
    id: "3",
    title: "Quartz Island Kitchen",
    alt: "Kitchen remodel with white cabinets and quartz island",
    category: "Kitchens",
    image: "/images/portfolio/kitchen-remodel-white-cabinets-quartz-island.jpg",
  },
  {
    id: "31",
    title: "Green & Marble Island",
    alt: "Kitchen remodel with green cabinets and marble island",
    category: "Kitchens",
    image: "/images/portfolio/kitchen-remodel-green-cabinets-marble-island.jpeg",
  },
  {
    id: "32",
    title: "Modern Gray Kitchen",
    alt: "Modern gray kitchen remodel with island and hood vent",
    category: "Kitchens",
    image: "/images/portfolio/kitchen-remodel-gray-cabinets-galley-layout.jpg",
  },
  {
    id: "33",
    title: "Compact Black & White",
    alt: "Compact kitchen remodel with white cabinets and black countertops",
    category: "Kitchens",
    image: "/images/portfolio/kitchen-remodel-white-cabinets-black-countertops-compact.jpeg",
  },
  // Bathrooms (6)
  {
    id: "5",
    title: "Geometric Tile Shower",
    alt: "Bathroom renovation with geometric tile and glass shower",
    category: "Bathrooms",
    image: "/images/portfolio/bathroom-renovation-geometric-tile-glass-shower.jpg",
  },
  {
    id: "6",
    title: "Freestanding Tub Suite",
    alt: "Master bathroom with freestanding tub and glass enclosure",
    category: "Bathrooms",
    image: "/images/portfolio/master-bathroom-freestanding-tub-glass-enclosure.jpg",
  },
  {
    id: "7",
    title: "Hexagon Tile Walk-In",
    alt: "Bathroom remodel with walk-in shower and hexagon tile",
    category: "Bathrooms",
    image: "/images/portfolio/bathroom-remodel-walk-in-shower-hexagon-tile.jpg",
  },
  {
    id: "8",
    title: "Marble Shower Niche",
    alt: "Marble tile walk-in shower with built-in niche",
    category: "Bathrooms",
    image: "/images/portfolio/bathroom-marble-tile-walk-in-shower-niche.jpeg",
  },
  {
    id: "9",
    title: "Marble Bench Detail",
    alt: "Marble tile shower bench detail with mosaic floor",
    category: "Bathrooms",
    image: "/images/portfolio/bathroom-marble-tile-shower-bench-detail.jpeg",
  },
  {
    id: "10",
    title: "Dark Vanity & Glass",
    alt: "Bathroom with dark vanity, glass shower, and white quartz",
    category: "Bathrooms",
    image: "/images/portfolio/bathroom-dark-vanity-glass-shower-white-quartz.jpeg",
  },
  // Residential (6)
  {
    id: "11",
    title: "Vaulted Entryway",
    alt: "Entryway renovation with vaulted ceiling and modern geometric light fixture",
    category: "Residential",
    image: "/images/portfolio/residential-entryway-vaulted-ceiling-modern-light.jpeg",
  },
  {
    id: "13",
    title: "Spiral Staircase Loft",
    alt: "Living room remodel with spiral staircase and open loft",
    category: "Residential",
    image: "/images/portfolio/residential-living-room-spiral-staircase-loft.jpeg",
  },
  {
    id: "14",
    title: "Iron Railing Foyer",
    alt: "Two-story foyer renovation with iron staircase railings",
    category: "Residential",
    image: "/images/portfolio/residential-two-story-foyer-iron-staircase-railing.jpg",
  },
  {
    id: "15",
    title: "French Door Living Room",
    alt: "Open living room remodel with French doors and pendant lighting",
    category: "Residential",
    image: "/images/portfolio/residential-open-living-room-french-doors-pendant-light.jpeg",
  },
  {
    id: "16",
    title: "Modern Bedroom Refresh",
    alt: "Bedroom renovation with modern ceiling fan and natural light",
    category: "Residential",
    image: "/images/portfolio/residential-bedroom-renovation-modern-ceiling-fan.jpeg",
  },
  {
    id: "17",
    title: "Open Concept Balcony",
    alt: "Two-story open foyer with balcony overlooking kitchen",
    category: "Residential",
    image: "/images/portfolio/residential-two-story-foyer-balcony-open-concept.jpeg",
  },
  // Exterior (6)
  {
    id: "19",
    title: "Stucco & Stone Painting",
    alt: "Whole-home exterior painting on stucco and stone residence",
    category: "Exterior",
    image: "/images/portfolio/residential-exterior-stucco-stone-painting-complete.jpeg",
  },
  {
    id: "20",
    title: "Crew In Action",
    alt: "Exterior painting crew working on two-story stucco home",
    category: "Exterior",
    image: "/images/portfolio/residential-exterior-painting-crew-in-progress.jpeg",
  },
  {
    id: "21",
    title: "Iron Balcony Facade",
    alt: "Stucco exterior with iron balcony and mosaic window accent",
    category: "Exterior",
    image: "/images/portfolio/exterior-stucco-iron-balcony-mosaic-window.jpeg",
  },
  {
    id: "22",
    title: "Custom Garage Doors",
    alt: "Custom wood garage doors with stone accent exterior",
    category: "Exterior",
    image: "/images/portfolio/exterior-custom-wood-garage-doors-stone-accent.jpeg",
  },
  {
    id: "23",
    title: "Craftsman Porch",
    alt: "Craftsman home exterior with siding and front porch",
    category: "Exterior",
    image: "/images/portfolio/exterior-craftsman-home-siding-porch.jpeg",
  },
  {
    id: "24",
    title: "Tudor Siding Renovation",
    alt: "Tudor-style home exterior with dark siding renovation",
    category: "Exterior",
    image: "/images/portfolio/exterior-tudor-home-dark-siding-renovation.jpeg",
  },
  // Commercial (6)
  {
    id: "25",
    title: "Treatment Center Build-Out",
    alt: "Medical facility treatment center build-out",
    category: "Commercial",
    image: "/images/portfolio/commercial-medical-facility-treatment-center-buildout.jpeg",
  },
  {
    id: "26",
    title: "Retail Storefront",
    alt: "Retail storefront build-out with custom lighting",
    category: "Commercial",
    image: "/images/portfolio/commercial-retail-storefront-buildout-string-lights.jpeg",
  },
  {
    id: "27",
    title: "Medical Cabinetry Station",
    alt: "Medical facility cabinetry and sink station installation",
    category: "Commercial",
    image: "/images/portfolio/commercial-medical-facility-cabinetry-sink-station.jpeg",
  },
  {
    id: "28",
    title: "Clinic Waiting Area",
    alt: "Medical clinic hallway and waiting area renovation",
    category: "Commercial",
    image: "/images/portfolio/commercial-medical-clinic-hallway-waiting-area.jpeg",
  },
  {
    id: "29",
    title: "Iron Security Gate",
    alt: "Commercial iron security gate installation",
    category: "Commercial",
    image: "/images/portfolio/commercial-iron-security-gate-installation.jpeg",
  },
  {
    id: "30",
    title: "Dialysis Center",
    alt: "Medical treatment room and dialysis center renovation",
    category: "Commercial",
    image: "/images/portfolio/commercial-medical-treatment-room-dialysis.jpeg",
  },
];

const categories = ["All", "Kitchens", "Bathrooms", "Residential", "Exterior", "Commercial"];

export default function PortfolioGrid() {
  const searchParams = useSearchParams();
  const filterParam = searchParams.get("filter");

  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (filterParam && categories.includes(filterParam)) {
      setActiveCategory(filterParam);
    }
  }, [filterParam]);

  const filteredItems =
    activeCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const handlePrev = () => {
    setCurrentImageIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentImageIndex((prev) =>
      Math.min(filteredItems.length - 1, prev + 1)
    );
  };

  return (
    <>
      <FilterBar
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item, index) => (
          <ScrollReveal key={item.id} delay={index * 50}>
            <button
              onClick={() => openLightbox(index)}
              className="group w-full overflow-hidden rounded-xl border border-gray-200 hover:border-primary hover:shadow-lg transition-all cursor-pointer bg-white"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-4 text-left">
                <p className="text-sm font-medium text-text-muted uppercase tracking-wide">
                  {item.category}
                </p>
                <p className="mt-1 text-base font-semibold text-primary">
                  {item.title}
                </p>
              </div>
            </button>
          </ScrollReveal>
        ))}
      </div>

      <LightboxModal
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        currentIndex={currentImageIndex}
        totalImages={filteredItems.length}
        imageSrc={filteredItems[currentImageIndex]?.image || ""}
        imageAlt={filteredItems[currentImageIndex]?.alt || ""}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </>
  );
}
