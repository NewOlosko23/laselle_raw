import heroImage from "../../assets/class1.jpg";

const Hero = () => {
  return (
    <section
      className="relative h-[60vh] md:h-[90vh] w-full bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40 z-0" />

      {/* Glass Content Box */}
      <div className="relative z-10 max-w-3xl px-6 py-10 rounded-2xl backdrop-blur-md bg-black/40 border border-white/10 shadow-lg text-center animate-fade-in">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 text-white">
          Welcome to <span className="text-indigo-400">La Salle</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
          Discover your best with us — a place of growth, excellence, and faith.
        </p>

        {/* CTA Buttons */}
        <div className="flex justify-center gap-4 mt-4 flex-wrap">
          <a
            href="/admissions" // update this to your real route
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-full font-semibold transition duration-300"
          >
            Enroll Now
          </a>
          <a
            href="/contact" // update this to your real route
            className="bg-white text-gray-900 hover:bg-gray-200 px-6 py-3 rounded-full font-semibold transition duration-300"
          >
            Make a Call
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
