import React from "react";
import white from "../../assets/white.png";
import { Link } from "react-router-dom";
import type { Product } from "../../store/types";

type ProductProps = {
  item: Product;
};

const ProductCard: React.FC<ProductProps> = ({ item }) => {
  return (
    <section className="px-3 py-2">
      <div className="w-auto cursor-pointer bg-transparent" key={item.id}>
        <div className="border border-transparent">
          <img
            src={item.thumbnail || white}
            alt={item.title}
            className="w-full h-60 bg-[#e1e1d7] object-contain p-4 rounded"
            loading="lazy"
          />
        </div>

        <div className="mt-2 text-sm text-gray-700 text-left">
          <Link
            to={`/product-details/${item.id}`}
            className="mt-4 text-[16px] tracking-wide text-gray-800 font-semibold hover:underline"
          >
            {item.title}
          </Link>
          <p className="text-[#333] text-[15px] mt-1">Price: ${item.price}</p>
        </div>
      </div>
    </section>
  );
};

export default ProductCard;
