import { Link } from "react-router-dom";
import { HiOutlineMenu, HiX } from "react-icons/hi";
import Logo from "../assets/logo.jpg";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, loading } = useAuth();

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-white dark:bg-gray-900 shadow-md fixed top-0 left-0 w-full z-50">
      <div className="flex items-center justify-between p-4 max-w-7xl mx-auto">
        {/* Logo */}
        <Link to="/">
          <img src={Logo} alt="logo" className="h-10 w-auto" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-gray-700 dark:text-gray-200 font-medium">
          <Link
            className="hover:text-blue-700 dark:hover:text-blue-400"
            to="/academics"
          >
            Academics
          </Link>
          <Link
            className="hover:text-blue-700 dark:hover:text-blue-400"
            to="/about"
          >
            About
          </Link>
          <Link
            className="hover:text-blue-700 dark:hover:text-blue-400"
            to="/admissions"
          >
            Admissions
          </Link>
          <Link
            className="hover:text-blue-700 dark:hover:text-blue-400"
            to="/blogs"
          >
            News and Events
          </Link>
          <Link
            className="hover:text-blue-700 dark:hover:text-blue-400"
            to="/gallery"
          >
            Gallery
          </Link>
          {!loading && user && (
            <Link
              className="text-blue-600 dark:text-blue-400 font-semibold"
              to="/dashboard"
            >
              Dashboard
            </Link>
          )}
        </nav>

        {/* Mobile Toggle */}
        <div className="md:hidden text-gray-700 dark:text-gray-200">
          <button onClick={toggleMenu}>
            {isOpen ? <HiX size={28} /> : <HiOutlineMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 px-4 pb-4 pt-2 space-y-2 shadow-md">
          {[
            { label: "Home", to: "/" },
            { label: "Academics", to: "/academics" },
            { label: "About", to: "/about" },
            { label: "Admissions", to: "/admissions" },
            { label: "News and Events", to: "/blogs" },
            { label: "Gallery", to: "/gallery" },
            ...(loading
              ? []
              : user
              ? [{ label: "Dashboard", to: "/dashboard" }]
              : []),
          ].map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={toggleMenu}
              className="block py-2 px-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
