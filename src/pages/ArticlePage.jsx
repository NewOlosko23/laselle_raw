import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

const ArticlePage = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const docRef = doc(db, "articles", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setArticle({ id: docSnap.id, ...docSnap.data() });
        } else {
          setArticle(null);
        }
      } catch (error) {
        console.error("Error fetching article:", error);
        setArticle(null);
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [id]);

  if (loading) {
    return (
      <div className="pt-24 px-4 text-center text-gray-600 dark:text-gray-300">
        Loading article...
      </div>
    );
  }

  if (!article) {
    return (
      <div className="pt-24 px-4 text-center text-red-600">
        <h2>404 - Article Not Found</h2>
        <Link to="/blogs" className="text-blue-600 underline">
          Go back to News & Events
        </Link>
      </div>
    );
  }

  return (
    <section className="pt-24 pb-10 px-4 mt-16 md:px-16 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="max-w-3xl mx-auto">
        <img
          src={article.thumbnailUrl}
          alt={article.title}
          className="w-full rounded-lg shadow-md mb-6"
        />
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
          {article.title}
        </h1>
        <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">
          {article.datePosted?.toDate().toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}{" "}
          • By {article.postedBy}
        </p>
        <div className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
          {article.content}
        </div>
        <div className="mt-8">
          <Link
            to="/blogs"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            ← Back to all articles
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ArticlePage;
