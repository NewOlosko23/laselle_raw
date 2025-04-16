import { useParams, Link } from "react-router-dom";
import Elections from "../assets/elections.jpg";
import Sports from "../assets/sports2.jpg";
import Bishop from "../assets/bishop.jpg";
import Students from "../assets/students1.jpg";

const articles = [
  {
    slug: "student-council-elections",
    title: "Student Council Elections",
    author: "Admin",
    date: "Jan 17, 2025",
    image: Elections,
    content:
      "We are excited to announce that our Student Council Elections will be held on 21st Jan, 2025 digitally. This move represents our continued efforts to embrace technology and enhance participation across all classes...",
  },
  {
    slug: "2025-elections-council",
    title: "CONGRATULATIONS TO 2025/26 ELECTIONS COUNCIL",
    author: "Admin",
    date: "Jan 22, 2025",
    image: Students,
    content:
      "We extend our heartfelt gratitude to everyone who contributed to the success of the recent elections. The leadership spirit shown by the students is commendable and reflects the CBC core competencies...",
  },
  {
    slug: "bishop-visits-to-school",
    title: "Courtesy Visit of His Grace Archbishop Maurice Mukhatia Makumba.",
    author: "Admin",
    date: "Feb 15, 2025",
    image: Bishop,
    content:
      "On 15th February 2025, we had the honor of hosting His Grace Bishop Maurice Mukhatia Makumba. He toured our school, engaged with students, and blessed our newly constructed learning blocks. It was a spiritual and developmental milestone...",
  },
  {
    slug: "preschool-sports-day",
    title: "Pre-School Sports Day",
    author: "Admin",
    date: "Feb 25, 2025",
    image: Sports,
    content:
      "Preschool Sports Day was filled with joy and energy. Little champions participated in various activities that encouraged physical growth and fun. Parents also joined in for the fun, making it a memorable day for everyone!",
  },
];

const ArticlePage = () => {
  const { slug } = useParams();
  const article = articles.find((a) => a.slug === slug);

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
    <section className="pt-24 px-4 mt-16 md:px-16 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="max-w-3xl mx-auto">
        <img
          src={article.image}
          alt={article.title}
          className="w-full rounded-lg shadow-md mb-6"
        />
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
          {article.title}
        </h1>
        <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">
          {article.date} • By {article.author}
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
