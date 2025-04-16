import { Link } from "react-router-dom";
import Elections from "../../assets/elections.jpg";
import Sports from "../../assets/sports2.jpg";
import Bishop from "../../assets/bishop.jpg";
import Students from "../../assets/students1.jpg";

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

const Blog = () => {
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
        {articles.map((article) => (
          <div
            key={article.id}
            className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300"
          >
            <img
              src={article.image}
              alt={article.title}
              className="h-48 w-full object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg text-blue-800 dark:text-blue-400 mb-1">
                {article.title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                {article.date} • By {article.author}
              </p>
              <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
                {article.description}
              </p>
              <Link
                to={`/blogs/${article.slug}`}
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
