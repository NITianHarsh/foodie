import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const FoodItem = ({itemName}) => {
  const [count, setCount] = useState(0);
  const [size, setSize] = useState("half");

  return (
    <div className="w-70 h-fit bg-[#1F1F1F] border-2 border-gray-500 pb-3 shrink-0">
      <img src="../images/food1.jpg" alt="" />
      <h1 className="text-lg font-semibold px-3">{itemName}</h1>
      <div className="flex gap-2 justify-between items-center p-1 px-3">
        <div className="flex items-center gap-2">
          <button
            className="bg-teal-600 cursor-pointer p-1.5 text-white rounded"
            onClick={() => setCount((prev) => prev + 1)}
          >
            <Plus size={15} />
          </button>

          <p className="text-md font-semibold">{count}</p>

          <button
            className="bg-teal-600 cursor-pointer p-1.5 text-white rounded"
            onClick={() => setCount((prev) => Math.max(prev - 1, 0))} // Prevent negative numbers
          >
            <Minus size={15} />
          </button>
        </div>
        <select
          className="p-1 bg-teal-600 rounded-md focus:outline-none cursor-pointer"
          value={size}
          onChange={(e) => setSize(e.target.value)}
        >
          <option value="half">Half</option>
          <option value="full">Full</option>
        </select>
        <h2 className="text-lg font-semibold text-white">
          ₹ {size === "half" ? 150 * count : 300 * count}
        </h2>
      </div>
      <hr className="w-[90%] mx-auto border-t-2 border-gray-500 my-2" />
      <button
        type="submit"
        className="w-fit mx-3 px-4 py-1 bg-teal-600 rounded-md font-semibold active:scale-95"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default FoodItem;
