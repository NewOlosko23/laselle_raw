import React from "react";
const academicInfo = () => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md">
      <h2 className="text-2xl font-semibold text-purple-700 mb-4 text-center">
        🏫 Academic Programs
      </h2>
      <p className="mb-3 text-gray-700">
        La Salle School Homa Bay offers a comprehensive curriculum that
        includes:
      </p>
      <ul className="list-disc list-inside mb-4 text-gray-700">
        <li>Early Childhood Education</li>
        <li>Primary Education</li>
      </ul>
      <p className="text-gray-700">
        Our teaching approach emphasizes holistic development, critical
        thinking, and moral values, in line with the Lasallian educational
        philosophy.
      </p>
    </div>
  );
};

export default academicInfo;
