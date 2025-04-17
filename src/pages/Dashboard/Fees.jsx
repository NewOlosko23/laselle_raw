import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase";

const Fees = () => {
  const [level, setLevel] = useState("");
  const [terms, setTerms] = useState({ term1: "", term2: "", term3: "" });
  const [includes, setIncludes] = useState("");

  const levels = [
    "Pre-School",
    "Primary (Grade1 to Grade 6)",
    "Junior Secondary (Grade 7 to Grade 9)",
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "fees"), {
        level,
        terms,
        includes: includes.split(",").map((item) => item.trim()),
      });
      alert("Fee structure added!");
      setLevel("");
      setTerms({ term1: "", term2: "", term3: "" });
      setIncludes("");
    } catch (err) {
      console.error("Error adding fee structure:", err);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white dark:bg-gray-900 rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center text-green-600">
        Update Fee Structure
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <select
          className="w-full border p-2 rounded"
          value={level}
          onChange={(e) => setLevel(e.target.value)}
          required
        >
          <option value="">-- Select Level --</option>
          {levels.map((lvl, idx) => (
            <option key={idx} value={lvl}>
              {lvl}
            </option>
          ))}
        </select>

        <input
          type="text"
          placeholder="Term 1 fee (e.g., KES 10,000)"
          className="w-full border p-2 rounded"
          value={terms.term1}
          onChange={(e) => setTerms({ ...terms, term1: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Term 2 fee (e.g., KES 9,000)"
          className="w-full border p-2 rounded"
          value={terms.term2}
          onChange={(e) => setTerms({ ...terms, term2: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Term 3 fee (e.g., KES 8,000)"
          className="w-full border p-2 rounded"
          value={terms.term3}
          onChange={(e) => setTerms({ ...terms, term3: e.target.value })}
          required
        />
        <textarea
          placeholder="Includes (comma separated, e.g. Tuition, Meals, Books)"
          className="w-full border p-2 rounded"
          value={includes}
          onChange={(e) => setIncludes(e.target.value)}
          required
        ></textarea>
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default Fees;
