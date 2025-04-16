import React from "react";

const feeStructure = () => {
  const fees = [
    {
      level: "Playgroup",
      terms: {
        term1: "KES 10,000",
        term2: "KES 9,000",
        term3: "KES 8,000",
      },
      includes: ["Tuition", "Meals", "Play Materials"],
    },
    {
      level: "Pre-School",
      terms: {
        term1: "KES 15,000",
        term2: "KES 13,500",
        term3: "KES 12,000",
      },
      includes: ["Tuition", "Meals", "Activities"],
    },
    {
      level: "Pre-Primary",
      terms: {
        term1: "KES 20,000",
        term2: "KES 18,000",
        term3: "KES 16,000",
      },
      includes: ["Tuition", "Meals", "Books"],
    },
    {
      level: "Primary",
      terms: {
        term1: "KES 25,000",
        term2: "KES 22,000",
        term3: "KES 20,000",
      },
      includes: ["Tuition", "Meals", "Books"],
    },
  ];

  return (
    <section className="py-20 px-6 md:px-12 bg-white dark:bg-gray-950">
      <h2 className="text-4xl font-bold text-center text-green-700 mb-12">
        💸 Fee Structure
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {fees.map((fee, index) => (
          <div
            key={index}
            className="bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1"
          >
            <div className="p-6 flex flex-col justify-between h-full">
              <div>
                <h3 className="text-xl font-bold text-center text-gray-800 dark:text-white mb-3">
                  {fee.level}
                </h3>
                <div className="text-center mb-4 space-y-1">
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Term 1:{" "}
                    <span className="font-semibold">{fee.terms.term1}</span>
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Term 2:{" "}
                    <span className="font-semibold">{fee.terms.term2}</span>
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Term 3:{" "}
                    <span className="font-semibold">{fee.terms.term3}</span>
                  </p>
                </div>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                  {fee.includes.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default feeStructure;
