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
import Dashboard from "./pages/Dashboard";

import ProtectedRoute from "./components/ProtectedRoutes";
import Header from "./components/Header";
//import Footer from "./components/Footer";
import ScrollToTopButton from "./components/scrollToTop";

function App() {
  return (
    <>
      <Header />
      <ScrollToTopButton />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/blogs/:slug" element={<ArticlePage />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
