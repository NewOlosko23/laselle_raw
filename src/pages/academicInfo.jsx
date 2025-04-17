import React from "react";
const academicInfo = () => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md my-2 text-center">
      <h2 className="text-2xl font-semibold text-purple-700 mb-4 text-center">
        🏫 Academic Programs
      </h2>
      <p className="mb-3 text-gray-700">
        La Salle School Homa Bay offers a comprehensive curriculum that
        includes:
      </p>
      <div className="flex flex-wrap gap-4 text-center justify-center py-4">
        {[
          {
            name: "Early Childhood Education",
            tooltip: "Covers Playgroup to Pre-Primary 2 (PP2)",
          },
          {
            name: "Primary Education",
            tooltip: "Covers Grade 1 to Grade 6",
          },
          {
            name: "Junior Secondary Education",
            tooltip: "Covers Grade 7 to Grade 9",
          },
        ].map((item, idx) => (
          <div
            key={idx}
            className="relative group text-center bg-blue-500 text-white text-sm px-4 py-2 rounded-lg shadow hover:bg-blue-600 transition duration-300 cursor-pointer"
          >
            {item.name}
            <div className="absolute z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black text-white text-xs rounded px-3 py-1 -top-10 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
              {item.tooltip}
            </div>
          </div>
        ))}
      </div>

      <p className="text-gray-700">
        Our teaching approach emphasizes holistic development, critical
        thinking, and moral values, in line with the Lasallian educational
        philosophy.
      </p>
    </div>
  );
};

export default academicInfo;
