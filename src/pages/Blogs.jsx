import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link
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

const Blogs = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredArticles = articles.filter(
    (article) =>
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.description.toLowerCase().includes(searchTerm.toLowerCase())
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

      {/* Search Bar */}
      <div className="flex justify-center mb-8">
        <input
          type="text"
          placeholder="Search articles..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full max-w-md px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white dark:border-gray-700"
        />
      </div>

      {/* Articles Grid */}
      {filteredArticles.length > 0 ? (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredArticles.map((article) => (
            <Link
              to={`/blogs/${article.slug}`} // <- Link using slug
              key={article.slug}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 block"
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
