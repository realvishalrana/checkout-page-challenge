import React from "react";

interface FilterTypeProps {
  filter: { type: string; category: string };
  setFileter: React.Dispatch<
    React.SetStateAction<{ type: string; category: string }>
  >;
}

const FilterProduct = ({ filter, setFileter }: FilterTypeProps) => {
  const types = ["high", "medium", "low"];
  const categories = ["Electronics", "Wearables", "Cameras"];

  return (
    <div className="flex flex-col md:flex-row items-center gap-4 p-4 bg-white rounded shadow">
      <div className="flex items-center gap-2">
        <label className="font-medium text-gray-700">Types:</label>
        <select
          className="border border-gray-300 rounded p-2"
          value={filter.type}
          onChange={(e) =>
            setFileter((prev) => ({ ...prev, type: e.target.value }))
          }
        >
          <option value="">Select Type</option>
          {types.map((type) => (
            <option key={type} value={type}>
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </option>
          ))}
        </select>
      </div>
      <div className="flex items-center gap-2">
        <label className="font-medium text-gray-700">Categories:</label>
        <select
          className="border border-gray-300 rounded p-2"
          value={filter.category}
          onChange={(e) =>
            setFileter((prev) => ({ ...prev, category: e.target.value }))
          }
        >
          <option value="">Select Categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default FilterProduct;
