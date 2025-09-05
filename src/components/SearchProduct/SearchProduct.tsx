import React, { useState, useEffect } from "react";

interface SearchProductProps {
  onSearch: (query: string) => void;
  placeholder?: string;
  debounceTime?: number;
}

const SearchProduct: React.FC<SearchProductProps> = ({
  onSearch,
  placeholder = "Search for products...",
  debounceTime = 300,
}) => {
  const [searchTerm, setSearchTerm] = useState("");

  // Debounce effect to limit calls
  useEffect(() => {
    const handler = setTimeout(() => {
      onSearch(searchTerm.trim());
    }, debounceTime);

    return () => clearTimeout(handler);
  }, [searchTerm, onSearch, debounceTime]);

  return (
    <div className="w-1/2 mx-auto mb-10">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder={placeholder}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg
                   focus:outline-none"
      />
    </div>
  );
};

export default SearchProduct;
