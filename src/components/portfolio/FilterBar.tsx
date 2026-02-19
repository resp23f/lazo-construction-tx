"use client";

interface FilterBarProps {
  categories: string[];
  categoryLabels?: Record<string, string>;
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function FilterBar({
  categories,
  categoryLabels,
  activeCategory,
  onCategoryChange,
}: FilterBarProps) {
  return (
    <div className="mb-8 sm:mb-12">
      <div className="grid grid-cols-3 gap-2 sm:hidden">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`px-2 py-1.5 text-xs font-medium transition-colors text-center rounded-lg ${
              activeCategory === category
                ? "bg-primary text-white"
                : "bg-surface text-text border border-gray-200 hover:border-primary hover:text-primary"
            }`}
          >
            {categoryLabels?.[category] || category}
          </button>
        ))}
      </div>
      <div className="hidden sm:flex sm:flex-wrap sm:justify-center gap-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`px-4 py-2 text-sm font-medium transition-colors whitespace-nowrap min-w-[80px] text-center rounded-lg ${
              activeCategory === category
                ? "bg-primary text-white"
                : "bg-surface text-text border border-gray-200 hover:border-primary hover:text-primary"
            }`}
          >
            {categoryLabels?.[category] || category}
          </button>
        ))}
      </div>
    </div>
  );
}
