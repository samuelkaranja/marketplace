import React from "react";
import { Link, useParams } from "react-router-dom";
import ReviewCard from "../../components/ReviewCard/ReviewCard";
import { useGetProductByIdQuery } from "../../store/slices/productsApi";

const Details: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const {
    data: selectedProduct,
    error,
    isLoading,
  } = useGetProductByIdQuery(id!);

  if (isLoading)
    return <p className="text-center text-3xl mt-30">Loading...</p>;
  if (error)
    return <p className="text-center text-red-500">Failed to fetch product</p>;
  if (!selectedProduct) return <p className="text-center">No product found</p>;

  return (
    <div className="container mx-auto px-8 py-8">
      {/* Main product layout */}
      <div className="flex flex-col md:flex-row gap-8 align-center">
        {/* Left: Product Images */}
        <div className="flex-1 justify-center">
          <img
            src={selectedProduct?.thumbnail}
            alt="Product"
            className="w-80 h-80 object-cover cursor-pointer mx-auto"
            loading="lazy"
          />
          {/* Thumbnails (grid) */}
          <div className="grid grid-cols-4 gap-2 mt-4 justify-center">
            {selectedProduct?.images.map((img, index) => (
              <img
                key={index}
                src={img}
                className="rounded-md shadow-md cursor-pointer"
                loading="lazy"
              />
            ))}
          </div>
        </div>

        {/* Right: Product Info */}
        <div className="flex-1 space-y-4">
          <h1 className="text-3xl font-bold">{selectedProduct?.title}</h1>
          <div className="flex flex-row gap-2 items-center">
            <span className="text-sm">
              Category: {selectedProduct?.category},
            </span>
            <span className="text-sm">
              Brand: {selectedProduct?.brand || "None"},
            </span>
            <span className="text-sm">
              Tags:{" "}
              {selectedProduct?.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-gray-200 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded"
                >
                  {tag}
                </span>
              ))}
            </span>
          </div>
          <p className="text-md text-emerald-600 font-semibold">
            Price: ${selectedProduct?.price}
          </p>
          <p className="text-gray-600">{selectedProduct?.description}</p>
          <Link
            to="/cart"
            className="bg-[#1a1a1a] w-full text-white text-sm px-6 py-3 mt-4 cursor-pointer hover:underline"
          >
            Add to Cart
          </Link>
        </div>
      </div>
      {/* Reviews Section */}
      <div className="mt-12">
        <h2 className="text-xl font-semibold mb-7 underline">
          Customer Reviews
        </h2>

        {selectedProduct?.reviews?.length ? (
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-gray-300">
            {selectedProduct.reviews.map((review, index) => (
              <div key={index} className="min-w-[300px] max-w-xs flex-shrink-0">
                <ReviewCard review={review} />
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No reviews yet.</p>
        )}
      </div>
    </div>
  );
};

export default Details;
