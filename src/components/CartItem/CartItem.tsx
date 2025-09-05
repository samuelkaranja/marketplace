import React from "react";

type CartItemProps = {
  id: string;
  title: string;
  image: string;
  price: number;
  quantity: number;
  onRemove: (id: string) => void;
  onQuantityChange: (id: string, quantity: number) => void;
};

const CartItem: React.FC<CartItemProps> = ({
  id,
  title,
  image,
  price,
  quantity,
  onRemove,
  onQuantityChange,
}) => {
  return (
    <div className="flex items-center justify-between border-b border-gray-300 py-5">
      {/* Product Info */}
      <div className="flex items-center space-x-4">
        <img
          src={image}
          alt={title}
          className="w-16 h-16 object-cover rounded"
        />
        <div>
          <h3 className="font-sm">{title}</h3>
          <button
            onClick={() => onRemove(id)}
            className="text-sm text-red-500 hover:underline"
          >
            Remove
          </button>
        </div>
      </div>

      {/* Quantity */}
      <div className="flex items-center space-x-2">
        <button
          onClick={() => onQuantityChange(id, Math.max(1, quantity - 1))}
          className="px-2 py-1 border rounded"
        >
          -
        </button>
        <span>{quantity}</span>
        <button
          onClick={() => onQuantityChange(id, quantity + 1)}
          className="px-2 py-1 border rounded"
        >
          +
        </button>
      </div>

      {/* Price */}
      <div className="w-20 text-right">£{price.toFixed(2)}</div>

      {/* Total */}
      <div className="w-20 text-right font-semibold">
        £{(price * quantity).toFixed(2)}
      </div>
    </div>
  );
};

export default CartItem;
