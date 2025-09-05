import React from "react";
import recipe from "../../assets/recipe.jpg";

const Recipe: React.FC = () => {
  return (
    <div
      className="h-auto py-10"
      style={{ backgroundColor: "hsl(21.82deg 34.74% 62.75%)" }}
    >
      <div className="bg-white w-[1000px] mx-auto p-13 rounded-3xl">
        <img
          src={recipe}
          alt=""
          className="w-full h-[50vh] object-cover rounded-2xl mb-8"
        />

        <h1 className="text-5xl font-bold mb-5">Simple Omelette Recipe</h1>

        <p className="text-gray-700">
          An easy and quick dish, perfect for any meal. This classic Omelette
          combines beaten eggs cooked to perfection, optionally filled with your
          choice of cheese, vegetales, or meats
        </p>

        <div className="bg-pink-50 my-9 p-5 rounded-2xl">
          <h2 className="text-pink-900 text-lg font-bold pb-3">
            Preparation time
          </h2>
          <div className="pl-4">
            <ul className="list-disc pl-3">
              <li className="text-[#333] mb-2">
                <span className="text-black font-bold pr-1">Total:</span>
                Approximately 10 minutes
              </li>
              <li className="text-[#333] mb-2">
                <span className="text-black font-bold pr-1">Preparation:</span>5
                minutes
              </li>
              <li className="text-[#333] mb-2">
                <span className="text-black font-bold pr-1">Cooking:</span>5
                minutes
              </li>
            </ul>
          </div>
        </div>

        <div className="border-b border-gray-300 pb-5">
          <h1 className="text-3xl text-amber-950 font-bold pb-4">
            Ingredients
          </h1>
          <div className="pl-4">
            <ul className="list-disc pl-3">
              <li className="pb-2 pl-3 text-[#333]">2-3 large eggs</li>
              <li className="pb-2 pl-3 text-[#333]">Salt, to taste</li>
              <li className="pb-2 pl-3 text-[#333]">Pepper, to taste</li>
              <li className="pb-2 pl-3 text-[#333]">
                1 tablespoon of butter or oil
              </li>
              <li className="pb-2 pl-3 text-[#333]">
                Optional fillings: cheese, diced vegetables, cooked meats, herbs
              </li>
            </ul>
          </div>
        </div>

        <div className="my-6">
          <h1 className="text-3xl text-amber-950 font-bold pb-4">
            Instructions
          </h1>
          <div className="pl-6">
            <ol className="list-decimal">
              <li className="pb-2 text-[#333]">
                <span className="pr-2 pl-3 text-black">Beat the eggs:</span>
                In a bowl, beat the eggs with a pinch of salt and pepper until
                they are well mixed. You can add a tablespoon of water or milk
                for a fluffer texture.
              </li>
              <li className="pb-2 text-[#333]">
                <span className="pr-1 pl-3 text-black">Heat the pan:</span>
                Place a non-stick frying pan over medium heat and add butter or
                oil.
              </li>
              <li className="pb-2 text-[#333]">
                <span className="pr-1 pl-3 text-black">Cook the omelette:</span>
                Once the butter is melted and bubbling, pour in the eggs. Tilt
                the pan to ensure the eggs evenly coat the surface.
              </li>
              <li className="pb-2 text-[#333]">
                <span className="pr-1 pl-3 text-black">
                  Add fillings (optional):
                </span>
                When the eggs begin to set at the edges but are still slightly
                runny in the middle, sprinkle your chosen fillings over one half
                of the omelette.
              </li>
              <li className="pb-2 text-[#333]">
                <span className="pr-1 pl-3 text-black">Fold and serve:</span>
                As the omelette continues to cook, carefully lift one edge and
                fold it over the fillings. Let it cook for another minute, then
                slide it onto a plate.
              </li>
              <li className="pb-2 text-[#333]">
                <span className="pr-1 pl-3 text-black">Enjoy:</span>
                Serve hot, with additional salt and pepper if needed.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
