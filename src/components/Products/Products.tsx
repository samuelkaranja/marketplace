import React, { useState } from "react";
import white from "../../assets/white.png";
import { Link } from "react-router-dom";
import SearchProduct from "../../components/SearchProduct/SearchProduct";
import { useGetProductsQuery } from "../../store/slices/productsApi";

const Products: React.FC = () => {
  // 🔎 Local state for search term
  const [searchQuery, setSearchQuery] = useState("");

  const { data: products = [], isLoading, error } = useGetProductsQuery();

  if (isLoading) return <div className="text-center">Loading...</div>;
  if (error)
    return (
      <div className="text-center text-red-500">Failed to load products</div>
    );

  // 🔎 Filter products by title (case insensitive)
  const filteredProducts = products.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="px-4">
      {/* Search bar at the top */}
      <SearchProduct onSearch={setSearchQuery} />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 items-center justify-items-center">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((item) => (
            <div
              className="w-55 cursor-pointer shadow-lg rounded-lg overflow-hidden"
              key={item.id}
            >
              <img
                src={item.thumbnail || white}
                alt={item.title}
                className="p-4 rounded"
                style={{ backgroundColor: "hsl(120deg 6.67% 97.06%)" }}
                loading="lazy"
              />
              <div className="p-3 text-left">
                <Link
                  to={`/product-details/${item.id}`}
                  className="text-[15px] text-[#333] font-bold hover:underline pb-1"
                >
                  {item.title}
                </Link>
                <p className="text-gray-600 text-[14px]">
                  Price: ${item.price}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No products found!!
          </p>
        )}
      </div>
    </section>
  );
};

export default Products;
