import React, { useState } from "react";

type OrderSummaryProps = {
  itemsTotal: number;
  shippingCost: number;
  onApplyPromo: (code: string) => void;
  onCheckout: () => void;
};

const OrderSummary: React.FC<OrderSummaryProps> = ({
  itemsTotal,
  shippingCost,
  onApplyPromo,
  onCheckout,
}) => {
  const [promoCode, setPromoCode] = useState("");

  const totalCost = itemsTotal + shippingCost;

  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-md w-full md:w-1/3">
      <h2 className="text-lg font-semibold mb-4">Order Summary</h2>

      <div className="flex justify-between mb-2">
        <span>Items</span>
        <span>£{itemsTotal.toFixed(2)}</span>
      </div>

      <div className="flex justify-between mb-2">
        <span>Shipping</span>
        <span>£{shippingCost.toFixed(2)}</span>
      </div>

      {/* Promo Code */}
      <div className="mt-4">
        <input
          type="text"
          placeholder="Enter promo code"
          value={promoCode}
          onChange={(e) => setPromoCode(e.target.value)}
          className="w-full border rounded px-3 py-2 mb-2"
        />
        <button
          onClick={() => onApplyPromo(promoCode)}
          className=" bg-[#fd7170] text-white text-sm py-2 px-4 hover:bg-red-600"
        >
          Apply
        </button>
      </div>

      {/* Total */}
      <div className="flex justify-between mt-4 font-semibold">
        <span>Total Cost</span>
        <span>${totalCost.toFixed(2)}</span>
      </div>

      <button
        onClick={onCheckout}
        className="w-full mt-6 bg-indigo-600 text-white text-sm py-2 hover:bg-indigo-700"
      >
        CHECKOUT
      </button>
    </div>
  );
};

export default OrderSummary;
