import React from "react";
import SchoolCalendar from "./schoolCalender";
import FeeStructure from "./feeStructure";
import AcademicInfo from "./academicInfo";

const Academics = () => {
  return (
    <div className="pt-18 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center pt-8">Academics</h1>
      <p className="mb-8 text-center">
        Welcome to the academic section of our school. Here, you can find all
        important information about our academic calendar, fee structure, and
        more.
      </p>

      <SchoolCalendar />s
      <FeeStructure />
      <AcademicInfo />
    </div>
  );
};

export default Academics;
