import React, { useState } from "react";
import { db } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";

const CalendarAdmin = () => {
  const [title, setTitle] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [isSingleDay, setIsSingleDay] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !start || (!isSingleDay && !end)) {
      return alert("Please fill all required fields.");
    }

    const startDate = new Date(start);
    const endDate = isSingleDay ? startDate : new Date(end);

    try {
      await addDoc(collection(db, "schoolEvents"), {
        title,
        start: startDate.toISOString(),
        end: endDate.toISOString(),
      });

      alert("✅ Event added successfully!");
      setTitle("");
      setStart("");
      setEnd("");
      setIsSingleDay(false);
    } catch (error) {
      console.error("❌ Error adding event:", error);
      alert("Failed to add event");
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md mt-10">
      <h2 className="text-2xl font-semibold mb-4 text-blue-700">
        📅 Add Calendar Event
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Event Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-4 py-2 border rounded-md"
        />

        <label className="block">
          <span className="text-sm">Start Date & Time:</span>
          <input
            type="datetime-local"
            value={start}
            onChange={(e) => setStart(e.target.value)}
            className="w-full px-4 py-2 border rounded-md"
          />
        </label>

        {!isSingleDay && (
          <label className="block">
            <span className="text-sm">End Date & Time:</span>
            <input
              type="datetime-local"
              value={end}
              onChange={(e) => setEnd(e.target.value)}
              className="w-full px-4 py-2 border rounded-md"
            />
          </label>
        )}

        <label className="flex items-center space-x-2 text-sm">
          <input
            type="checkbox"
            checked={isSingleDay}
            onChange={(e) => setIsSingleDay(e.target.checked)}
          />
          <span>This is a single-day event</span>
        </label>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
        >
          ➕ Add Event
        </button>
      </form>
    </div>
  );
};

export default CalendarAdmin;
