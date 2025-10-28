import React, { useState } from "react";
import { useGetProductsQuery } from "../../store/slices/productsApi";
import ProductCard from "../ProductCard/ProductCard";
import Filter from "../Filter/Filter";

const ProductList: React.FC = () => {
  // 🔎 Local state for search term
  const [searchQuery] = useState("");

  const { data: products = [], isLoading, error } = useGetProductsQuery();

  if (isLoading) return <div className="text-center">Loading...</div>;
  if (error)
    return (
      <div className="text-center text-red-500">Failed to load products</div>
    );

  const filteredProducts = products.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Filter />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 p-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No products found!!
          </p>
        )}
      </div>
    </>
  );
};

export default ProductList;
