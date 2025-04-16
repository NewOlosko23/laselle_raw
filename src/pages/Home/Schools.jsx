import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Playgroup from "../../assets/playgroup.jpeg";
import Preschool from "../../assets/preschool1.jpg";
import Preschool2 from "../../assets/preschool2.jpg";
import Primary from "../../assets/primary1.jpg";

const Schools = () => {
  const levels = [
    {
      title: "Playgroup",
      desc: "Our Playgroup offers a warm and nurturing environment designed to spark curiosity through sensory play, music, art, and interaction. It's the perfect foundation for your child’s first steps into learning.",
      image: Playgroup,
      route: "/admissions",
    },
    {
      title: "Pre-School",
      desc: "In Pre-School, children build confidence and social skills while exploring early literacy and numeracy through creative play and engaging themes. Our approach balances fun with foundational education.",
      image: Preschool2,
      route: "/admissions",
    },
    {
      title: "Pre-Primary",
      desc: "Our Pre-Primary level prepares learners for structured schooling. With a focus on communication, independence, and emotional development, students grow in a supportive and joyful space.",
      image: Preschool,
      route: "/admissions",
    },
    {
      title: "Primary",
      desc: "We deliver quality education in core subjects while fostering creativity, discipline, and leadership. Our Primary program develops well-rounded learners with strong academic and character foundations.",
      image: Primary,
      route: "/admissions",
    },
  ];

  return (
    <section className="py-20 px-6 md:px-12 bg-gradient-to-b from-slate-50 to-white dark:from-gray-900 dark:to-gray-950">
      <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-12">
        Our Programs
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {levels.map((level, index) => (
          <motion.div
            key={level.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1"
          >
            <Link to={level.route}>
              <img
                src={level.image}
                alt={level.title}
                className="h-48 w-full object-cover rounded-t-2xl"
              />
            </Link>
            <div className="p-6 flex flex-col justify-between h-[280px] cursor-pointer">
              <div>
                <h3 className="text-xl text-center font-bold text-gray-800 dark:text-white mb-3">
                  {level.title}
                </h3>
                <p className="text-gray-600 text-center dark:text-gray-300 text-sm leading-relaxed mb-4">
                  {level.desc}
                </p>
              </div>
              <Link
                to={level.route}
                className="mt-auto inline-block bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 px-4 rounded-lg transition duration-200 text-center"
              >
                Enroll Now
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Schools;
