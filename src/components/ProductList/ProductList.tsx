import React, { useState } from "react";
import {
  useGetProductsQuery,
  useGetProductsByCategoryQuery,
} from "../../store/slices/productsApi";
import ProductCard from "../ProductCard/ProductCard";
import Filter from "../Filter/Filter";

const ProductList: React.FC = () => {
  const [page, setPage] = useState(1);
  const [category, setCategory] = useState("all");

  const limit = 9;
  const skip = (page - 1) * limit;

  const isAll = category === "all";

  const {
    data: allData,
    isLoading: allLoading,
    error: allError,
  } = useGetProductsQuery({ limit, skip });

  const {
    data: categoryData,
    isLoading: catLoading,
    error: catError,
  } = useGetProductsByCategoryQuery(
    { category, limit, skip },
    { skip: category === "all" } // ✅ conditionally skip based on category
  );

  const data = isAll ? allData : categoryData;
  const isLoading = isAll ? allLoading : catLoading;
  const error = isAll ? allError : catError;

  // Reset pagination when category changes
  React.useEffect(() => {
    setPage(1);
  }, [category]);

  if (isLoading) return <div className="text-center">Loading...</div>;
  if (error)
    return (
      <div className="text-center text-red-500">Failed to load products</div>
    );

  const totalProducts = data?.total ?? 0;
  const totalPages = Math.ceil(totalProducts / limit);

  return (
    <>
      <Filter selectedCategory={category} onCategoryChange={setCategory} />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-4 min-h-[500px]">
        {data?.products?.length ? (
          data.products.map((item) => <ProductCard key={item.id} item={item} />)
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No products found!!
          </p>
        )}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center mt-6 space-x-4">
        <button
          onClick={() => setPage((p) => Math.max(p - 1, 1))}
          disabled={page === 1}
          className="px-3 py-1 bg-gray-300 rounded disabled:opacity-50"
        >
          Prev
        </button>

        <span className="text-gray-700 font-medium">
          Page {page} of {totalPages}
        </span>

        <button
          onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
          disabled={page === totalPages}
          className="px-3 py-1 bg-gray-300 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </>
  );
};

export default ProductList;
