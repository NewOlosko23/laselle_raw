import { Link } from "react-router-dom";

const CTA1 = () => {
  return (
    <div className="bg-gradient-to-r from-blue-700 to-blue-900 dark:from-gray-800 dark:to-gray-900 text-white py-12 px-6 md:px-16 text-center rounded-xl shadow-lg">
      <h2 className="text-3xl md:text-4xl font-semibold mb-4">
        Looking for the Right Institution for Your Child?
      </h2>
      <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
        Whether you're considering enrollment, seeking more information about
        our programs, or simply making an inquiry — we’re here to support you in
        making the best choice for your child's education.
      </p>
      <div className="flex flex-col md:flex-row gap-4 justify-center">
        <Link
          to="/admissions"
          className="bg-white text-blue-800 font-semibold px-6 py-3 rounded-full hover:bg-gray-100 dark:hover:bg-gray-200 transition duration-300"
        >
          Enroll a Student
        </Link>
        <Link
          to="/contact"
          className="bg-transparent border border-white px-6 py-3 rounded-full hover:bg-white hover:text-blue-800 transition duration-300 dark:hover:bg-gray-200 dark:hover:text-blue-900"
        >
          Make an Inquiry
        </Link>
      </div>
    </div>
  );
};

export default CTA1;
