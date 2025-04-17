import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

const Blog = () => {
  const [articles, setArticles] = useState([]);

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

  const previewArticles = articles.slice(0, 4);

  return (
    <section className="py-12 px-4 md:px-16 bg-gray-50 dark:bg-gray-900">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-white mb-2">
          News & Events
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          Stay up to date with our latest updates and happenings
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {previewArticles.map((article) => (
          <div
            key={article.id}
            className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300"
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
                {article.content?.slice(0, 120)}...
              </p>
              <Link
                to={`/blogs/${article.id}`}
                className="text-blue-700 dark:text-blue-300 hover:underline text-sm font-medium"
              >
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <Link
          to="/blogs"
          className="inline-block bg-blue-800 text-white px-6 py-3 rounded-full hover:bg-blue-700 dark:hover:bg-blue-600 transition"
        >
          View All News & Events
        </Link>
      </div>
    </section>
  );
};

export default Blog;
