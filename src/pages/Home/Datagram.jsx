import { motion } from "framer-motion";
import BG from "../../assets/logolarge.jpg";

const stats = [
  {
    label: "Academic Excellence",
    value: "96%",
    description:
      "We provide an environment for quality teaching with competent team of educators.",
  },
  {
    label: "Spiritual Formation",
    value: "88%",
    description:
      "A Catholic School with a tradition of instilling moral values to incubate moral skills.",
  },
  {
    label: "Student Transition",
    value: "95%",
    description:
      "Our students are engaged to nature their potential skills and community service.",
  },
];

const Datagram = () => {
  return (
    <section
      className="relative py-20 px-6 md:px-12 text-gray-800 dark:text-white overflow-hidden"
      style={{
        backgroundImage: `url(${BG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-white/80 dark:bg-black/60 backdrop-blur-sm z-0" />

      {/* Content */}
      <div className="relative z-10 text-center">
        <h2 className="text-4xl font-bold mb-4">Our Impact</h2>
        <p className="text-lg max-w-2xl mx-auto mb-12 text-gray-700 dark:text-gray-200">
          We are committed to nurturing well-rounded individuals through
          academic rigor, spiritual development, and smooth student transition.
          Here’s a quick look at our core achievements.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center items-center">
          {stats.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white/80 dark:bg-white/10 dark:hover:bg-white/20 backdrop-blur-md dark:backdrop-blur-lg text-gray-900 dark:text-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer text-center transform hover:-translate-y-1"
            >
              <p className="text-5xl font-extrabold text-indigo-600 dark:text-indigo-300 mb-3">
                {item.value}
              </p>
              <p className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                {item.label}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Datagram;
