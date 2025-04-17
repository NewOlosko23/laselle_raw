import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Academics from "./pages/Academics";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import Blogs from "./pages/Blogs";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Admissions from "./pages/Admissions";
import ArticlePage from "./pages/ArticlePage";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import Articles from "./pages/Dashboard/Articles";
import Fees from "./pages/Dashboard/Fees";
import Calendar from "./pages/Dashboard/Calendar";

import ProtectedRoute from "./components/ProtectedRoutes";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/scrollToTop";
import UpdateScroll from "./components/updateScroll";

function App() {
  return (
    <>
      <Header />
      <ScrollToTopButton />
      <UpdateScroll />
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Home />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/blogs/:id" element={<ArticlePage />} />
        <Route path="/login" element={<Login />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        >
          <Route path="articles" element={<Articles />} />
          <Route path="fees" element={<Fees />} />
          <Route path="calendar" element={<Calendar />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
