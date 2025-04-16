import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";
import Student from "../assets/sports2.jpg";

const galleryItems = [
  {
    image: Student,
    title: "Sports Day",
    description: "Fun and games during our pre-school sports day.",
    category: "Events",
  },
  {
    image: Student,
    title: "Archbishop's Visit",
    description: "A spiritual and inspiring visit by Archbishop Mukhatia.",
    category: "Spiritual",
  },
  {
    image: Student,
    title: "Student Council",
    description: "New student leaders take their oath for 2025/26.",
    category: "Leadership",
  },
  {
    video: "https://www.youtube.com/embed/ZDQ-MKWrn-c",
    title: "Swearing In Ceremony",
    description:
      "Watch the full ceremony of the newly elected student leaders.",
    category: "Leadership",
  },
  {
    video: "https://www.youtube.com/embed/hz-064Y_x-o",
    title: "Multilingual Festival",
    description:
      "La Salle School shines at Jomo Kenyatta International Stadium, Kisumu.",
    category: "Events",
  },
  {
    video: "https://www.youtube.com/embed/woRQi_gnXYc",
    title: "Graduation Ceremony 2024",
    description:
      "Memorable moments from the 2024 graduation ceremony at La Salle School Homa Bay.",
    category: "Events",
  },
  {
    video: "https://www.youtube.com/embed/u84vU4hTwCE",
    title: "Future Innovators",
    description: "Shaping the innovators and problem solvers of tomorrow.",
    category: "Academics",
  },
  {
    image: Student,
    title: "Council Swearing",
    description: "Another proud leadership moment captured.",
    category: "Leadership",
  },
  {
    image: Student,
    title: "Mass in Progress",
    description: "Weekly mass held at the school chapel.",
    category: "Spiritual",
  },
  {
    image: Student,
    title: "Prize Giving",
    description: "Top achievers awarded for their excellence.",
    category: "Academics",
  },
  {
    image: Student,
    title: "Culture Day",
    description: "Students showcase their diverse cultures and traditions.",
    category: "Events",
  },
  {
    image: Student,
    title: "Staff Meeting",
    description: "Teachers planning for the next academic term.",
    category: "Leadership",
  },
];

const categories = ["All", "Events", "Spiritual", "Leadership", "Academics"];

const getYouTubeThumbnail = (url) => {
  const match = url.match(/embed\/([a-zA-Z0-9_-]+)/);
  return match ? `https://img.youtube.com/vi/${match[1]}/hqdefault.jpg` : "";
};

const useItemsPerPage = () => {
  const [itemsPerPage, setItemsPerPage] = useState(9); 

  useEffect(() => {
    const updateItems = () => {
      const width = window.innerWidth;
      setItemsPerPage(width < 768 ? 6 : 9); 
    };

    updateItems();
    window.addEventListener("resize", updateItems);
    return () => window.removeEventListener("resize", updateItems);
  }, []);

  return itemsPerPage;
};

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [lightboxItem, setLightboxItem] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = useItemsPerPage();

  const filteredItems =
    selectedCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const currentItems = filteredItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleCategoryChange = (cat) => {
    setSelectedCategory(cat);
    setCurrentPage(1);
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900 py-20 mt-18 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
          School Gallery
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          Explore moments captured at La Salle School Homa Bay
        </p>

        <div className="mt-6 flex justify-center gap-4 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={`px-4 py-2 rounded-full border text-sm font-medium transition duration-200 ${
                selectedCategory === cat
                  ? "bg-blue-600 text-white"
                  : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-300"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
      >
        <AnimatePresence>
          {currentItems.map((item, index) => (
            <motion.div
              key={index}
              className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 bg-white dark:bg-gray-800 cursor-pointer"
              onClick={() => setLightboxItem(item)}
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4 }}
            >
              {item.video ? (
                <img
                  src={getYouTubeThumbnail(item.video)}
                  alt={item.title}
                  className="w-full h-60 object-cover"
                />
              ) : (
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-60 object-cover"
                />
              )}
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Pagination */}
      <div className="mt-10 flex justify-center items-center gap-4">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
        >
          Previous
        </button>
        <span className="text-gray-700 dark:text-gray-200">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(totalPages, prev + 1))
          }
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>

      {/* Lightbox */}
      {lightboxItem && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center px-4">
          <div className="relative max-w-4xl w-full bg-black rounded-lg overflow-hidden">
            <button
              onClick={() => setLightboxItem(null)}
              className="absolute top-4 right-4 text-white text-2xl z-50"
            >
              <FaTimes />
            </button>
            {lightboxItem.video ? (
              <iframe
                src={lightboxItem.video}
                className="w-full h-[75vh] rounded-lg"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title={lightboxItem.title}
              ></iframe>
            ) : (
              <img
                src={lightboxItem.image}
                alt={lightboxItem.title}
                className="w-full h-[75vh] object-contain"
              />
            )}
            <div className="p-4 text-white text-center">
              <h3 className="text-xl font-bold">{lightboxItem.title}</h3>
              <p className="text-sm mt-1">{lightboxItem.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
