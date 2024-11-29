import React, { useState } from "react";
import { TCategory } from "../../../data";
import { FaAlignLeft, FaAngleDown } from "react-icons/fa";

const Categoric = ({ categories }: { categories: TCategory[] }) => {
  const [hoveredMain, setHoveredMain] = useState(0);
  const [hoveredSub, setHoveredSub] = useState(0);

  return (
    <div className="relative">
      {/* Main Button */}
      <div className="bg-gray-100 px-5 rounded-t-md mt-[6px] group">
        <button className="w-full h-full">
          <div className="w-[220px] h-[53px] flex justify-between items-center">
            <div className="flex space-x-3 items-center">
              <span>
                <FaAlignLeft />
              </span>
              <span className="text-sm font-semibold">All Categories</span>
            </div>
            <div>
              <FaAngleDown />
            </div>
          </div>
        </button>

        {/* Full Screen Dropdown */}
        <div className={`!z-[999] hidden group-hover:flex absolute left-0 top-full ${hoveredMain > 0 ? 'w-[780px]' : 'w-[780px]' }  h-auto bg-white shadow-lg`}>
          {/* Main Categories */}
          <div className="w-[260px] h-[400px] bg-gray-100 border">
            {categories.map((mainCategory: TCategory) => (
              <div
                key={mainCategory.id}
                onMouseEnter={() => setHoveredMain(mainCategory.id)}
                className="py-1 px-4 hover:bg-gray-200 cursor-pointer"
              >
                {mainCategory.name}
              </div>
            ))}
          </div>

          {/* Sub Categories */}
          {hoveredMain > 0 && 
          <div className="!z-[998] w-[260px] h-[400px] bg-gray-100 border">
            {hoveredMain !== 0 &&
              categories
                .find((cat) => cat.id === hoveredMain)
                ?.subCategories.map((subCategory) => (
                  <div
                    key={subCategory.id}
                    onMouseEnter={() => setHoveredSub(subCategory.id)}
                    className="py-1 px-4 hover:bg-gray-200 cursor-pointer"
                  >
                    {subCategory.name}
                  </div>
                ))}
          </div>}

          {/* Sub-sub Categories */}
          <div className="w-[260px] h-[400px] bg-gray-100 border">
            {hoveredSub !== 0 &&
              categories
                .find((cat) => cat.id === hoveredMain)
                ?.subCategories.find((subCat) => subCat.id === hoveredSub)
                ?.categories.map((category, index) => (
                  <div
                    key={index}
                    className="py-1 px-4 hover:bg-gray-200 cursor-pointer"
                  >
                    {category}
                  </div>
                ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categoric;
