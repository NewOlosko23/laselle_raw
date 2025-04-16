import { Link } from "react-router-dom";

const CTA2 = () => {
  return (
    <div className="py-12 px-6 md:px-16 text-center my-10 bg-white dark:bg-gray-900">
      <h2 className="text-3xl md:text-4xl font-bold text-blue-900 dark:text-blue-300 mb-4">
        Passionate About Teaching or School Leadership?
      </h2>
      <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
        We're always looking for dedicated individuals who are passionate about
        education, growth, and making a lasting impact. Whether you're a
        teacher, a mentor, or an experienced administrator — we offer a
        supportive and collaborative environment for you to thrive in.
      </p>
      <div className="flex flex-col md:flex-row gap-4 justify-center">
        <Link
          to="/careers"
          className="bg-blue-800 text-white font-semibold px-6 py-3 rounded-full hover:bg-blue-900 dark:hover:bg-blue-700 transition duration-300"
        >
          View Open Roles
        </Link>
        <Link
          to="/contact"
          className="bg-transparent border border-blue-800 text-blue-800 dark:text-blue-300 dark:border-blue-300 px-6 py-3 rounded-full hover:bg-blue-100 dark:hover:bg-blue-800 dark:hover:text-white transition duration-300"
        >
          Make an Inquiry
        </Link>
      </div>
    </div>
  );
};

export default CTA2;
