import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 pt-16 pb-10 px-6 transition-colors duration-300">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* About Us */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
            About Us
          </h3>
          <p className="text-sm leading-relaxed">
            La Salle School Homa Bay is a Catholic-based institution under the
            De La Salle Brothers, offering holistic education with a focus on
            academic excellence, spiritual formation, and student leadership.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
            Contact Information
          </h3>
          <div className="text-sm space-y-2">
            <p>
              <strong>Address:</strong> La Salle School Homa Bay, Opposite St.
              Paul’s Catholic Church, Homa Bay
            </p>
            <p>
              <strong>Phone:</strong> +254 115 814 852
            </p>
            <p>
              <strong>Email:</strong> info@lasallehomabay.sc.ke
            </p>
          </div>
        </div>

        {/* Recent Posts */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
            Recent Posts
          </h3>
          <ul className="space-y-3 text-sm">
            <li className="hover:text-blue-600 dark:hover:text-white transition">
              <a href="#">Pre-School Sports Day</a>
            </li>
            <li className="hover:text-blue-600 dark:hover:text-white transition">
              <a href="#">Archbishop Mukhatia's Visit</a>
            </li>
            <li className="hover:text-blue-600 dark:hover:text-white transition">
              <a href="#">2025/26 Student Council Results</a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
            Connect With Us
          </h3>
          <p className="text-sm mb-4">
            Follow us on social media to stay updated with our latest news and
            events.
          </p>
          <div className="flex gap-4 mt-2">
            <a
              href="#"
              className="text-blue-600 hover:text-blue-800 dark:hover:text-white transition text-lg"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="text-sky-500 hover:text-sky-700 dark:hover:text-white transition text-lg"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="text-pink-500 hover:text-pink-700 dark:hover:text-white transition text-lg"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="text-red-600 hover:text-red-800 dark:hover:text-white transition text-lg"
              aria-label="YouTube"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center text-sm text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700 pt-6">
        © {new Date().getFullYear()} La Salle School Homa Bay. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
