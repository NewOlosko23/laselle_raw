import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";
import Director from "../../assets/d.jpg";

const Quote = () => {
  return (
    <section className="bg-white dark:bg-gray-900 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          className="relative bg-blue-50 dark:bg-gray-800 p-8 rounded-2xl shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <FaQuoteLeft className="text-blue-500 text-4xl mb-4 mx-auto" />
          <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-200 leading-relaxed">
            “In an ever-evolving world driven by technology and innovation,
            education must adapt to equip learners with the skills necessary for
            success. La Salle School Homabay is proud to have STEM (Science,
            Technology, Engineering, and Mathematics) education as a core
            component of our curriculum. This initiative is aimed at fostering
            critical thinking, creativity, and problem-solving skills among our
            learners, preparing them to be future innovators and leaders.”
          </p>
          <div className="mt-6 flex items-center justify-center gap-4">
            <div className="w-14 h-14 rounded-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center text-white text-lg font-semibold">
              <img src={Director} alt="director" />
            </div>
            <div className="text-left">
              <p className="font-semibold text-gray-800 dark:text-white">
                Brother Anthony Oloo
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Director, La Salle School Homa Bay
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Quote;
