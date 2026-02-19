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
    <div className="flex overflow-x-auto sm:flex-wrap sm:justify-center gap-2 mb-12 pb-2 sm:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-hide">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-4 py-2 text-sm font-medium transition-colors whitespace-nowrap flex-shrink-0 min-w-[80px] text-center ${
            activeCategory === category
              ? "bg-primary text-white"
              : "bg-surface text-text border border-gray-200 hover:border-primary hover:text-primary"
          }`}
        >
          {categoryLabels?.[category] || category}
        </button>
      ))}
    </div>
  );
}
