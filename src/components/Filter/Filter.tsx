import React, { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface FilterProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const Filter: React.FC<FilterProps> = ({
  selectedCategory,
  onCategoryChange,
}) => {
  const categories = [
    { label: "All Products", value: "all" },
    { label: "Smartphones", value: "smartphones" },
    { label: "Laptops", value: "laptops" },
    { label: "Fragrances", value: "fragrances" },
    { label: "Furniture", value: "furniture" },
    { label: "Home Decoration", value: "home-decoration" },
    { label: "Groceries", value: "groceries" },
    { label: "Kitchen Accessories", value: "kitchen-accessories" },
    { label: "Mens Shirts", value: "mens-shirts" },
    { label: "Mens Shoes", value: "mens-shoes" },
    { label: "Mens Watches", value: "mens-watches" },
  ];

  const scrollRef = useRef<HTMLDivElement>(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(false);

  const checkScrollPosition = () => {
    const el = scrollRef.current;
    if (!el) return;

    const isAtStart = el.scrollLeft <= 0;
    const isAtEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 5;

    setShowLeft(!isAtStart);
    setShowRight(!isAtEnd);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    checkScrollPosition(); // Run on mount

    el.addEventListener("scroll", checkScrollPosition);
    window.addEventListener("resize", checkScrollPosition);

    return () => {
      el.removeEventListener("scroll", checkScrollPosition);
      window.removeEventListener("resize", checkScrollPosition);
    };
  }, []);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -200, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 200, behavior: "smooth" });
  };

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between py-4 gap-3 relative">
      {/* Left scroll button (only if overflow) */}
      {showLeft && (
        <button
          onClick={scrollLeft}
          className="absolute left-0 bg-white/80 p-2 rounded-full shadow hidden sm:block hover:bg-white transition"
        >
          <ChevronLeft size={18} />
        </button>
      )}

      {/* Scrollable category list */}
      <div
        ref={scrollRef}
        className="flex gap-6 text-sm text-[#333] overflow-x-auto hide-scrollbar scroll-smooth px-8"
      >
        {categories.map((cat) => (
          <button
            key={cat.value}
            onClick={() => onCategoryChange(cat.value)}
            className={`py-2 px-1 whitespace-nowrap hover:underline ${
              selectedCategory === cat.value ? "font-semibold underline" : ""
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Right scroll button (only if overflow) */}
      {showRight && (
        <button
          onClick={scrollRight}
          className="absolute right-0 bg-white/80 p-2 rounded-full shadow hidden sm:block hover:bg-white transition"
        >
          <ChevronRight size={18} />
        </button>
      )}
    </div>
  );
};

export default Filter;
