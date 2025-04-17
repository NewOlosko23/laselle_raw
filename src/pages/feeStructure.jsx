import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase"; 

const feeStructure = () => {
  const [fees, setFees] = useState([]);

  useEffect(() => {
    const fetchFees = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "fees"));
        const feesData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setFees(feesData);
      } catch (error) {
        console.error("Error fetching fee structure:", error);
      }
    };

    fetchFees();
  }, []);

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
                    Term 1: <span className="font-semibold">{fee.terms.term1}</span>
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Term 2: <span className="font-semibold">{fee.terms.term2}</span>
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Term 3: <span className="font-semibold">{fee.terms.term3}</span>
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
