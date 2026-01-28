"use client";

interface FilterBarProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function FilterBar({
  categories,
  activeCategory,
  onCategoryChange,
}: FilterBarProps) {
  return (
    <div className="flex flex-wrap justify-center gap-2 mb-12">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-4 py-2 text-sm font-medium transition-colors ${
            activeCategory === category
              ? "bg-primary text-white"
              : "bg-surface text-text border border-gray-200 hover:border-primary hover:text-primary"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
