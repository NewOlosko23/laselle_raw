import Hero from "./Home/Hero";
import Schools from "./Home/Schools";
import Overview from "./Home/Overview";
import Datagram from "./Home/Datagram";
import Footer from "./Home/Footer";
import CTA1 from "./Home/CTA1";
import Blog from "./Home/Blog";
import CTA2 from "./Home/CTA2";
import Quote from "./Home/Quote";

const Home = () => {
  return (
    <div className="pt-10">
      <Hero />
      <Overview />
      <Schools />
      <Datagram />
      <CTA1 />
      <Blog />
      <CTA2 />
      <Quote />
      <Footer />
    </div>
  );
};

export default Home;
