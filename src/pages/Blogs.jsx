import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const Blogs = () => {
  const [articles, setArticles] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "articles"));
        const fetchedArticles = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setArticles(fetchedArticles);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    fetchArticles();
  }, []);

  const filteredArticles = articles.filter(
    (article) =>
      article.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.content?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="pt-24 px-4 md:px-16 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="mb-10 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-2">
          All News & Events
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          Browse through our latest news and upcoming events
        </p>
      </div>

      <div className="flex justify-center mb-8">
        <input
          type="text"
          placeholder="Search articles..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full max-w-md px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white dark:border-gray-700"
        />
      </div>

      {filteredArticles.length > 0 ? (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredArticles.map((article) => (
            <Link
              to={`/blogs/${article.id}`}
              key={article.id}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 block"
            >
              <img
                src={article.thumbnailUrl}
                alt={article.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg text-blue-800 dark:text-blue-400 mb-1">
                  {article.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">
                  {article.datePosted?.toDate().toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}{" "}
                  • By {article.postedBy}
                </p>

                <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
                  {article.content?.slice(0, 150)}...
                </p>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-600 dark:text-gray-400">
          No articles match your search.
        </p>
      )}
    </section>
  );
};

export default Blogs;
