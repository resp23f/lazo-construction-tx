"use client";

import { useState } from "react";
import FilterBar from "./FilterBar";
import LightboxModal from "./LightboxModal";

interface PortfolioItem {
  id: string;
  alt: string;
  category: string;
}

const portfolioItems: PortfolioItem[] = [
  { id: "1", alt: "Kitchen remodel - Austin", category: "Kitchens" },
  { id: "2", alt: "Master bathroom renovation", category: "Bathrooms" },
  { id: "3", alt: "Office build-out - Houston", category: "Commercial" },
  { id: "4", alt: "Kitchen upgrade project", category: "Kitchens" },
  { id: "5", alt: "Guest bathroom remodel", category: "Bathrooms" },
  { id: "6", alt: "Living room addition", category: "Residential" },
  { id: "7", alt: "Retail space renovation", category: "Commercial" },
  { id: "8", alt: "Modern kitchen design", category: "Kitchens" },
  { id: "9", alt: "Home exterior painting", category: "Residential" },
  { id: "10", alt: "Restaurant remodel", category: "Commercial" },
  { id: "11", alt: "Spa bathroom transformation", category: "Bathrooms" },
  { id: "12", alt: "Home office addition", category: "Residential" },
];

const categories = ["All", "Residential", "Commercial", "Kitchens", "Bathrooms"];

export default function PortfolioGrid() {
  const [activeCategory, setActiveCategory] = useState("All");
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
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filteredItems.map((item, index) => (
          <button
            key={item.id}
            onClick={() => openLightbox(index)}
            className="aspect-square bg-gray-200 flex items-center justify-center border border-gray-300 hover:border-primary hover:shadow-md transition-all cursor-pointer"
          >
            <span className="text-text-muted text-sm text-center px-4">
              {item.alt}
            </span>
          </button>
        ))}
      </div>

      <LightboxModal
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        currentIndex={currentImageIndex}
        totalImages={filteredItems.length}
        imageAlt={filteredItems[currentImageIndex]?.alt || ""}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </>
  );
}
