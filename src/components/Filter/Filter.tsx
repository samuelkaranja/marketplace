import React from "react";

const Filter: React.FC = () => {
  return (
    <div className="flex items-center justify-between py-4">
      <div className="flex gap-6 text-sm text-[#333]">
        <button className="py-2 px-0 hover:underline">All Products</button>
        <button className="py-2 px-0 hover:underline">Devices</button>
        <button className="py-2 px-0 hover:underline">Stationery</button>
        <button className="py-2 px-0 hover:underline">Plants</button>
      </div>

      <div className="flex items-center gap-3 text-sm text-[#333]">
        <select className="bg-transparent border-none outline-none">
          <option>Default sorting</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
