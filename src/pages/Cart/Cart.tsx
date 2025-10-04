import React, { useState } from "react";
import CartItem from "../../components/CartItem/CartItem";
import OrderSummary from "../../components/OrderSummary/OrderSummary";
import work from "../../assets/work.jpg";
import { Link } from "react-router-dom";

type CartProduct = {
  id: string;
  title: string;
  image: string;
  price: number;
  quantity: number;
};

const Cart: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartProduct[]>([
    {
      id: "1",
      title: "Fifa 19",
      image: work,
      price: 44.0,
      quantity: 2,
    },
    {
      id: "2",
      title: "Glacier White 500GB",
      image: work,
      price: 249.99,
      quantity: 1,
    },
    {
      id: "3",
      title: "Platinum Headset",
      image: work,
      price: 119.99,
      quantity: 1,
    },
  ]);

  const handleRemove = (id: string) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const handleQuantityChange = (id: string, quantity: number) => {
    setCartItems(
      cartItems.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const itemsTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleApplyPromo = (code: string) => {
    alert(`Promo code applied: ${code}`);
  };

  const handleCheckout = () => {
    alert("Proceeding to checkout...");
  };

  return (
    <div className="min-h-screen bg-[#eeefe9]">
      <div className="flex flex-col md:flex-row gap-8 p-6">
        {/* Cart Items Section */}
        <div className="flex-1 bg-white p-6 rounded-lg shadow-md">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold mb-4">Shopping Cart</h2>
            <h2 className="text-xl font-semibold mb-4">
              ({cartItems.length}) Items
            </h2>
          </div>

          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              {...item}
              onRemove={handleRemove}
              onQuantityChange={handleQuantityChange}
            />
          ))}
          <Link to="/" className="text-indigo-600 hover:underline mt-4 block">
            ← Continue Shopping
          </Link>
        </div>

        {/* Order Summary */}
        <OrderSummary
          itemsTotal={itemsTotal}
          shippingCost={5.0}
          onApplyPromo={handleApplyPromo}
          onCheckout={handleCheckout}
        />
      </div>
    </div>
  );
};

export default Cart;
