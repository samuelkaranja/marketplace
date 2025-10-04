import React from "react";
import ProductList from "../../components/ProductList/ProductList";

const Home: React.FC = () => {
  return (
    <div>
      <div className="bg-[#eeefe9] lg:px-40 py-8 text-center">
        <ProductList />
      </div>
    </div>
  );
};

export default Home;
