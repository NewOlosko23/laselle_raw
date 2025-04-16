import { Link, useNavigate, Outlet, useLocation } from "react-router-dom";
import { auth } from "../../firebase";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const unsub = auth.onAuthStateChanged((firebaseUser) => {
      if (!firebaseUser) navigate("/");
      else setUser(firebaseUser);
    });
    return () => unsub();
  }, [navigate]);

  const handleLogout = () => {
    auth.signOut();
    navigate("/");
  };

  const isDashboardRoot = location.pathname === "/dashboard";

  return (
    <div className="px-4 sm:px-6 lg:px-10 mt-20 py-10">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <h1 className="text-xl font-bold">Admin Dashboard</h1>
        <button
          onClick={handleLogout}
          className="bg-red-600 text-white px-4 py-2 rounded cursor-pointer hover:bg-red-800 transition"
        >
          Logout
        </button>
      </div>

      {/* Navigation */}
      <div className="flex justify-center mt-10">
        <nav className="flex flex-col sm:flex-row gap-4 sm:gap-6 bg-gray-100 px-6 py-4 rounded-lg shadow-md w-full sm:w-auto text-center">
          <Link
            to="/dashboard"
            className="text-blue-600 hover:text-blue-800 font-medium transition"
          >
            Home
          </Link>
          <Link
            to="/dashboard/articles"
            className="text-blue-600 hover:text-blue-800 font-medium transition"
          >
            Articles
          </Link>
          <Link
            to="/dashboard/fees"
            className="text-blue-600 hover:text-blue-800 font-medium transition"
          >
            Fee Structure
          </Link>
          <Link
            to="/dashboard/calendar"
            className="text-blue-600 hover:text-blue-800 font-medium transition"
          >
            Calendar
          </Link>
        </nav>
      </div>

      {/* Overview Section (only on /dashboard) */}
      {isDashboardRoot && (
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Dashboard Overview
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {/* Card 1 */}
            <div className="bg-white border rounded-xl p-6 shadow hover:shadow-md transition">
              <h3 className="text-lg font-semibold mb-2">📝 Articles</h3>
              <p className="text-gray-600 text-sm">
                Manage blog posts, news, or announcements on your platform.
              </p>
              <Link
                to="/dashboard/articles"
                className="text-blue-600 hover:underline inline-block mt-3 text-sm font-medium"
              >
                Go to Articles →
              </Link>
            </div>

            {/* Card 2 */}
            <div className="bg-white border rounded-xl p-6 shadow hover:shadow-md transition">
              <h3 className="text-lg font-semibold mb-2">💰 Fee Structure</h3>
              <p className="text-gray-600 text-sm">
                View or update financial records and the institution’s payment
                details.
              </p>
              <Link
                to="/dashboard/fees"
                className="text-blue-600 hover:underline inline-block mt-3 text-sm font-medium"
              >
                Go to Fee Structure →
              </Link>
            </div>

            {/* Card 3 */}
            <div className="bg-white border rounded-xl p-6 shadow hover:shadow-md transition">
              <h3 className="text-lg font-semibold mb-2">📅 Calendar</h3>
              <p className="text-gray-600 text-sm">
                Keep track of upcoming events and academic schedules.
              </p>
              <Link
                to="/dashboard/calendar"
                className="text-blue-600 hover:underline inline-block mt-3 text-sm font-medium"
              >
                Go to Calendar →
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Nested Routes */}
      <div className="mt-12">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
