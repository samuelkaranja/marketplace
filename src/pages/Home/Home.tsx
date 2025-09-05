import React from "react";
//import Hero from "../../components/Hero/Hero";
import Products from "../../components/Products/Products";

const Home: React.FC = () => {
  return (
    <div>
      {/* <Hero /> */}
      <div
        className="lg:px-40 py-8 text-center"
        style={{ backgroundColor: "hsl(0deg 0% 100%)" }}
      >
        <h1 className="text-3xl font-bold mb-12 underline">
          Available Products
        </h1>
        <Products />
      </div>
    </div>
  );
};

export default Home;
