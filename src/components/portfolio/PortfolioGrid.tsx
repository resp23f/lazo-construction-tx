"use client";

import { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import FilterBar from "./FilterBar";
import SkeletonImage from "@/components/ui/SkeletonImage";
import LightboxModal from "./LightboxModal";
import { useLanguage } from "@/context/LanguageContext";

interface PortfolioItem {
  id: string;
  title: string;
  titleEs: string;
  alt: string;
  category: string;
  image: string;
}

const portfolioItems: PortfolioItem[] = [
  // Kitchens (6)
  {
    id: "1",
    title: "White Shaker Kitchen",
    titleEs: "Cocina Shaker Blanca",
    alt: "Kitchen remodel with white shaker cabinets and dark countertops",
    category: "Kitchens",
    image: "/images/portfolio/kitchen-remodel-white-cabinets-dark-countertops.jpg",
  },
  {
    id: "2",
    title: "Two Tone Herringbone",
    titleEs: "Dos Tonos con Espiga",
    alt: "Kitchen remodel featuring two-tone cabinets and herringbone backsplash",
    category: "Kitchens",
    image: "/images/portfolio/kitchen-remodel-two-tone-green-herringbone-backsplash.jpg",
  },
  {
    id: "3",
    title: "Quartz Island Kitchen",
    titleEs: "Cocina con Isla de Cuarzo",
    alt: "Kitchen remodel with white cabinets and quartz island",
    category: "Kitchens",
    image: "/images/portfolio/kitchen-remodel-white-cabinets-quartz-island.jpg",
  },
  {
    id: "31",
    title: "Green & Marble Island",
    titleEs: "Isla Verde y Mármol",
    alt: "Kitchen remodel with green cabinets and marble island",
    category: "Kitchens",
    image: "/images/portfolio/kitchen-remodel-green-cabinets-marble-island.jpeg",
  },
  {
    id: "32",
    title: "Modern Gray Kitchen",
    titleEs: "Cocina Gris Moderna",
    alt: "Modern gray kitchen remodel with island and hood vent",
    category: "Kitchens",
    image: "/images/portfolio/kitchen-remodel-gray-cabinets-galley-layout.jpg",
  },
  {
    id: "33",
    title: "Compact Black & White",
    titleEs: "Cocina Compacta B&N",
    alt: "Compact kitchen remodel with white cabinets and black countertops",
    category: "Kitchens",
    image: "/images/portfolio/kitchen-remodel-white-cabinets-black-countertops-compact.jpeg",
  },
  // Bathrooms (6)
  {
    id: "5",
    title: "Geometric Tile Shower",
    titleEs: "Ducha con Azulejo Geométrico",
    alt: "Bathroom renovation with geometric tile and glass shower",
    category: "Bathrooms",
    image: "/images/portfolio/bathroom-renovation-geometric-tile-glass-shower.jpg",
  },
  {
    id: "6",
    title: "Freestanding Tub Suite",
    titleEs: "Bañera Independiente",
    alt: "Master bathroom with freestanding tub and glass enclosure",
    category: "Bathrooms",
    image: "/images/portfolio/master-bathroom-freestanding-tub-glass-enclosure.jpg",
  },
  {
    id: "7",
    title: "Hexagon Tile Walk In",
    titleEs: "Ducha con Azulejo Hexagonal",
    alt: "Bathroom remodel with walk-in shower and hexagon tile",
    category: "Bathrooms",
    image: "/images/portfolio/bathroom-remodel-walk-in-shower-hexagon-tile.jpg",
  },
  {
    id: "8",
    title: "Marble Shower Niche",
    titleEs: "Nicho de Ducha en Mármol",
    alt: "Marble tile walk-in shower with built-in niche",
    category: "Bathrooms",
    image: "/images/portfolio/bathroom-marble-tile-walk-in-shower-niche.jpeg",
  },
  {
    id: "9",
    title: "Marble Bench Detail",
    titleEs: "Detalle de Banca en Mármol",
    alt: "Marble tile shower bench detail with mosaic floor",
    category: "Bathrooms",
    image: "/images/portfolio/bathroom-marble-tile-shower-bench-detail.jpeg",
  },
  {
    id: "10",
    title: "Dark Vanity & Glass",
    titleEs: "Tocador Oscuro y Vidrio",
    alt: "Bathroom with dark vanity, glass shower, and white quartz",
    category: "Bathrooms",
    image: "/images/portfolio/bathroom-dark-vanity-glass-shower-white-quartz.jpeg",
  },
  {
    id: "34",
    title: "Gray Tile Walk-In",
    titleEs: "Ducha Gris con Panel de Vidrio",
    alt: "Walk-in shower with gray subway tile and glass panel",
    category: "Bathrooms",
    image: "/images/portfolio/bathroom-walk-in-shower-gray-tile-glass-panel.jpeg",
  },
  {
    id: "35",
    title: "Shower Tile Detail",
    titleEs: "Detalle de Azulejo de Ducha",
    alt: "Shower tile detail with matte black fixtures and hex floor",
    category: "Bathrooms",
    image: "/images/portfolio/bathroom-shower-tile-detail-black-fixtures.jpeg",
  },
  {
    id: "36",
    title: "Linear Tile & Penny Niche",
    titleEs: "Azulejo Lineal y Nicho Redondo",
    alt: "Walk-in shower with linear tile and penny round niche",
    category: "Bathrooms",
    image: "/images/portfolio/bathroom-walk-in-shower-linear-tile-penny-niche.jpeg",
  },
  // Residential (6)
  {
    id: "11",
    title: "Vaulted Entryway",
    titleEs: "Entrada con Techo Alto",
    alt: "Entryway renovation with vaulted ceiling and modern geometric light fixture",
    category: "Residential",
    image: "/images/portfolio/residential-entryway-vaulted-ceiling-modern-light.jpeg",
  },
  {
    id: "13",
    title: "Spiral Staircase Loft",
    titleEs: "Escalera de Caracol y Loft",
    alt: "Living room remodel with spiral staircase and open loft",
    category: "Residential",
    image: "/images/portfolio/residential-living-room-spiral-staircase-loft.jpeg",
  },
  {
    id: "14",
    title: "Iron Railing Foyer",
    titleEs: "Vestíbulo con Barandal de Hierro",
    alt: "Two-story foyer renovation with iron staircase railings",
    category: "Residential",
    image: "/images/portfolio/residential-two-story-foyer-iron-staircase-railing.jpg",
  },
  {
    id: "15",
    title: "French Door Living Room",
    titleEs: "Sala con Puertas Francesas",
    alt: "Open living room remodel with French doors and pendant lighting",
    category: "Residential",
    image: "/images/portfolio/residential-open-living-room-french-doors-pendant-light.jpeg",
  },
  {
    id: "16",
    title: "Modern Bedroom Refresh",
    titleEs: "Recámara Moderna Renovada",
    alt: "Bedroom renovation with modern ceiling fan and natural light",
    category: "Residential",
    image: "/images/portfolio/residential-bedroom-renovation-modern-ceiling-fan.jpeg",
  },
  {
    id: "17",
    title: "Open Concept Balcony",
    titleEs: "Balcón con Concepto Abierto",
    alt: "Two-story open foyer with balcony overlooking kitchen",
    category: "Residential",
    image: "/images/portfolio/residential-two-story-foyer-balcony-open-concept.jpeg",
  },
  // Exterior (6)
  {
    id: "19",
    title: "Stucco & Stone Painting",
    titleEs: "Pintura Estuco y Piedra",
    alt: "Whole-home exterior painting on stucco and stone residence",
    category: "Exterior",
    image: "/images/portfolio/residential-exterior-stucco-stone-painting-complete.jpeg",
  },
  {
    id: "20",
    title: "Crew In Action",
    titleEs: "Equipo en Acción",
    alt: "Exterior painting crew working on two-story stucco home",
    category: "Exterior",
    image: "/images/portfolio/residential-exterior-painting-crew-in-progress.jpeg",
  },
  {
    id: "21",
    title: "Iron Balcony Facade",
    titleEs: "Fachada con Balcón de Hierro",
    alt: "Stucco exterior with iron balcony and mosaic window accent",
    category: "Exterior",
    image: "/images/portfolio/exterior-stucco-iron-balcony-mosaic-window.jpeg",
  },
  {
    id: "22",
    title: "Custom Garage Doors",
    titleEs: "Puertas de Garaje a Medida",
    alt: "Custom wood garage doors with stone accent exterior",
    category: "Exterior",
    image: "/images/portfolio/exterior-custom-wood-garage-doors-stone-accent.jpeg",
  },
  {
    id: "23",
    title: "Craftsman Porch",
    titleEs: "Porche Estilo Craftsman",
    alt: "Craftsman home exterior with siding and front porch",
    category: "Exterior",
    image: "/images/portfolio/exterior-craftsman-home-siding-porch.jpeg",
  },
  {
    id: "24",
    title: "Tudor Siding Renovation",
    titleEs: "Renovación Estilo Tudor",
    alt: "Tudor-style home exterior with dark siding renovation",
    category: "Exterior",
    image: "/images/portfolio/exterior-tudor-home-dark-siding-renovation.jpeg",
  },
  {
    id: "37",
    title: "Carport & Breezeway",
    titleEs: "Cochera y Corredor",
    alt: "Carport breezeway with metal roof and brick accent exterior",
    category: "Exterior",
    image: "/images/portfolio/exterior-carport-breezeway-metal-roof-brick.jpeg",
  },
  // Commercial (6)
  {
    id: "25",
    title: "Treatment Center Build Out",
    titleEs: "Centro de Tratamiento",
    alt: "Medical facility treatment center build-out",
    category: "Commercial",
    image: "/images/portfolio/commercial-medical-facility-treatment-center-buildout.jpeg",
  },
  {
    id: "26",
    title: "Retail Storefront",
    titleEs: "Fachada Comercial",
    alt: "Retail storefront build-out with custom lighting",
    category: "Commercial",
    image: "/images/portfolio/commercial-retail-storefront-buildout-string-lights.jpeg",
  },
  {
    id: "27",
    title: "Medical Cabinetry Station",
    titleEs: "Estación Médica con Gabinetes",
    alt: "Medical facility cabinetry and sink station installation",
    category: "Commercial",
    image: "/images/portfolio/commercial-medical-facility-cabinetry-sink-station.jpeg",
  },
  {
    id: "28",
    title: "Clinic Waiting Area",
    titleEs: "Sala de Espera de Clínica",
    alt: "Medical clinic hallway and waiting area renovation",
    category: "Commercial",
    image: "/images/portfolio/commercial-medical-clinic-hallway-waiting-area.jpeg",
  },
  {
    id: "29",
    title: "Iron Security Gate",
    titleEs: "Puerta de Seguridad de Hierro",
    alt: "Commercial iron security gate installation",
    category: "Commercial",
    image: "/images/portfolio/commercial-iron-security-gate-installation.jpeg",
  },
  {
    id: "30",
    title: "Dialysis Center",
    titleEs: "Centro de Diálisis",
    alt: "Medical treatment room and dialysis center renovation",
    category: "Commercial",
    image: "/images/portfolio/commercial-medical-treatment-room-dialysis.jpeg",
  },
  // Behind the Scenes (15)
  {
    id: "bts-1",
    title: "Custom Closet Built-In",
    titleEs: "Clóset a Medida",
    alt: "Custom closet built-in shelving system under construction",
    category: "Behind the Scenes",
    image: "/images/portfolio/bts-custom-closet-built-in-shelving.jpeg",
  },
  {
    id: "bts-2",
    title: "Fireplace Wall Progress",
    titleEs: "Pared de Chimenea en Progreso",
    alt: "Shiplap fireplace wall with floating shelves in progress",
    category: "Behind the Scenes",
    image: "/images/portfolio/bts-fireplace-shiplap-floating-shelves-wide.jpeg",
  },
  {
    id: "bts-3",
    title: "Fireplace Alcove Work",
    titleEs: "Trabajo en Nicho de Chimenea",
    alt: "Fireplace alcove with shiplap and paper masking during painting",
    category: "Behind the Scenes",
    image: "/images/portfolio/bts-fireplace-alcove-shiplap-masking.jpeg",
  },
  {
    id: "bts-4",
    title: "Jobsite Ready",
    titleEs: "Sitio de Obra Listo",
    alt: "LAZO Construction jobsite with truck and equipment in Texas",
    category: "Behind the Scenes",
    image: "/images/portfolio/bts-jobsite-truck-equipment-texas.jpeg",
  },
  {
    id: "bts-5",
    title: "Full Room Framing",
    titleEs: "Estructura Completa de Cuarto",
    alt: "Full room framing for residential addition project",
    category: "Behind the Scenes",
    image: "/images/portfolio/bts-full-room-framing-addition.jpeg",
  },
  {
    id: "bts-6",
    title: "Framing Hallway",
    titleEs: "Estructura del Pasillo",
    alt: "Framing and materials staged in hallway during renovation",
    category: "Behind the Scenes",
    image: "/images/portfolio/bts-framing-hallway-materials.jpeg",
  },
  {
    id: "bts-7",
    title: "Crew at Work",
    titleEs: "Equipo Trabajando",
    alt: "Crew member working on framing from ladder",
    category: "Behind the Scenes",
    image: "/images/portfolio/bts-crew-member-framing-ladder.jpeg",
  },
  {
    id: "bts-8",
    title: "Gut Renovation",
    titleEs: "Renovación Total",
    alt: "Gut renovation with exposed wiring and insulation removal",
    category: "Behind the Scenes",
    image: "/images/portfolio/bts-gut-renovation-wiring-insulation.jpeg",
  },
  {
    id: "bts-9",
    title: "Range Hood Install",
    titleEs: "Instalación de Campana",
    alt: "Kitchen range hood and cabinet installation in progress",
    category: "Behind the Scenes",
    image: "/images/portfolio/bts-kitchen-range-hood-cabinet-install.jpeg",
  },
  {
    id: "bts-10",
    title: "Shower Tile & Fixtures",
    titleEs: "Azulejo y Accesorios de Ducha",
    alt: "Shower tile installation with niche and black fixtures",
    category: "Behind the Scenes",
    image: "/images/portfolio/bts-shower-tile-niche-black-fixtures.jpeg",
  },
  {
    id: "bts-11",
    title: "Foyer Painting",
    titleEs: "Pintura del Vestíbulo",
    alt: "Foyer painting in progress with chandelier installation",
    category: "Behind the Scenes",
    image: "/images/portfolio/bts-foyer-painting-chandelier.jpeg",
  },
  {
    id: "bts-12",
    title: "Upper Hallway Reno",
    titleEs: "Renovación del Pasillo Alto",
    alt: "Upper hallway renovation with drywall and painting",
    category: "Behind the Scenes",
    image: "/images/portfolio/bts-upper-hallway-renovation.jpeg",
  },
  {
    id: "bts-13",
    title: "Room Addition Sheathing",
    titleEs: "Revestimiento de Ampliación",
    alt: "Room addition with plywood sheathing and framing",
    category: "Behind the Scenes",
    image: "/images/portfolio/bts-room-addition-plywood-sheathing.jpeg",
  },
  {
    id: "bts-14",
    title: "Accent Wall Masking",
    titleEs: "Preparación de Pared de Acento",
    alt: "Accent wall with fireplace masking during paint prep",
    category: "Behind the Scenes",
    image: "/images/portfolio/bts-accent-wall-fireplace-masking-angle.jpeg",
  },
  {
    id: "bts-15",
    title: "Navy Accent Wall",
    titleEs: "Pared de Acento Azul Marino",
    alt: "Navy accent wall painting in progress near fireplace",
    category: "Behind the Scenes",
    image: "/images/portfolio/bts-navy-accent-wall-painting.jpeg",
  },
];

const categories = ["All", "Kitchens", "Bathrooms", "Residential", "Exterior", "Commercial", "Behind the Scenes"];

const categoryTranslationKeys: Record<string, string> = {
  All: "portfolioPage.filterAll",
  Kitchens: "portfolioPage.filterKitchens",
  Bathrooms: "portfolioPage.filterBathrooms",
  Residential: "portfolioPage.filterResidential",
  Exterior: "portfolioPage.filterExterior",
  Commercial: "portfolioPage.filterCommercial",
  "Behind the Scenes": "portfolioPage.filterBehindTheScenes",
};

export default function PortfolioGrid() {
  const { lang, t } = useLanguage();
  const searchParams = useSearchParams();
  const filterParam = searchParams.get("filter");

  const initialCategory = useMemo(() => {
    return filterParam && categories.includes(filterParam) ? filterParam : "All";
  }, [filterParam]);

  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
        categoryLabels={Object.fromEntries(categories.map(c => [c, t(categoryTranslationKeys[c])]))}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
        {filteredItems.map((item, index) => (
          <button
            key={item.id}
            onClick={() => openLightbox(index)}
            className="group w-full overflow-hidden rounded-xl border border-gray-200 hover:border-primary hover:shadow-lg transition-all cursor-pointer bg-white"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <SkeletonImage
                src={item.image}
                alt={item.alt}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover"
              />
            </div>
            <div className="p-2.5 sm:p-4 text-left">
              <p className="text-xs sm:text-sm font-medium text-text-muted uppercase tracking-wide">
                {t(categoryTranslationKeys[item.category]) || item.category}
              </p>
              <p className="mt-0.5 sm:mt-1 text-sm sm:text-base font-semibold text-primary">
                {lang === "es" ? item.titleEs : item.title}
              </p>
            </div>
          </button>
        ))}
      </div>

      <LightboxModal
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        currentIndex={currentImageIndex}
        totalImages={filteredItems.length}
        imageSrc={filteredItems[currentImageIndex]?.image || ""}
        imageAlt={filteredItems[currentImageIndex]?.alt || ""}
        imageTitle={lang === "es" ? filteredItems[currentImageIndex]?.titleEs : filteredItems[currentImageIndex]?.title}
        imageCategory={t(categoryTranslationKeys[filteredItems[currentImageIndex]?.category]) || filteredItems[currentImageIndex]?.category}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </>
  );
}
