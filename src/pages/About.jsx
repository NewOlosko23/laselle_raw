import Baptiste from "../assets/baptiste.jpg";
import School from "../assets/primary1.jpg";

const About = () => {
  return (
    <div className="pt-18 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* Hero Section */}
      <section className="bg-sky-700 text-white py-16 dark:bg-sky-800">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-lg md:text-xl">
            Learn about La Salle School Homa Bay and the legacy of the De La
            Salle Brothers.
          </p>
        </div>
      </section>

      {/* School Overview */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-semibold text-sky-700 dark:text-sky-400 mb-4">
              La Salle School Homa Bay
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              La Salle School Homa Bay is a Catholic institution open to all,
              regardless of religious denomination. The school is owned and run
              by the Brothers of the Christian Schools (De La Salle Brothers).
              We offer a Competency-Based Curriculum (CBC) with an international
              touch, emphasizing the development of skills and knowledge. Our
              school is part of a global network of Lasallian institutions
              spanning over 80 countries worldwide.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Located opposite St. Paul’s Hospital in Homa Bay Town, we provide
              quality education through a competent team of educators,
              instilling moral values for spiritual formation, and engaging
              students in nurturing their potential skills and community
              service.
            </p>
          </div>
          <div>
            <img
              src={School}
              alt="La Salle School Homa Bay"
              className="rounded shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* De La Salle Brothers History */}
      <section className="py-16 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <img
              src={Baptiste}
              alt="St. John Baptist de La Salle"
              className="rounded shadow-lg h-fit"
            />
          </div>
          <div>
            <h2 className="text-3xl font-semibold text-rose-700 dark:text-rose-300 mb-4">
              The De La Salle Brothers
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The De La Salle Brothers, officially known as the Institute of the
              Brothers of the Christian Schools, are a Catholic lay religious
              congregation founded in 1679 by French priest and scholar John
              Baptist de La Salle in Reims, France. The Brothers are dedicated
              to providing quality education, especially to the poor, and have
              established educational institutions worldwide.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              St. John Baptist de La Salle was born on April 30, 1651, and died
              on April 7, 1719. He was canonized on May 24, 1900, by Pope Leo
              XIII and declared the Patron Saint of all school teachers by Pope
              Pius XII in 1950.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              As of 2023, the Institute has 2,883 Brothers operating 1,154
              educational centers in 78 countries, serving over 1.16 million
              students with the support of more than 107,000 teachers and lay
              associates.
            </p>
          </div>
        </div>
      </section>

      {/* Presence in Kenya */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-semibold text-sky-700 dark:text-sky-400 mb-4">
            De La Salle Brothers in Kenya
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            The De La Salle Brothers arrived in Kenya in the early 1960s,
            contributing to various educational initiatives across the country.
            Their presence includes:
          </p>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-4">
            <li>St. Paul’s Secondary School in Marsabit</li>
            <li>St. Mary’s Secondary School in Nyeri Town</li>
            <li>St. La Salle School in Karemeno, near Nairutia, Nyeri</li>
            <li>La Salle Catholic School in Karen, Nairobi</li>
            <li>School of Education in Tangaza University, Nairobi</li>
            <li>Child Discovery Centre in Lanet, Nakuru</li>
            <li>Mwangaza College in Nakuru Town</li>
            <li>Rongai Agri-tech Secondary School in Rongai, Nakuru</li>
            <li>La Salle School in Homa Bay (the latest mission)</li>
          </ul>
          <p className="text-gray-700 dark:text-gray-300">
            Kenya is part of the English-speaking Charles Lwanga District of
            Africa, which also includes Ethiopia, Eritrea, Nigeria, South
            Africa, and Mozambique.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold text-rose-700 dark:text-rose-300 mb-4">
            Our Mission & Vision
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Our mission is to provide quality education through a competent team
            of educators, instilling moral values for spiritual formation, and
            engaging students in nurturing their potential skills and community
            service.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            We envision a community where students are empowered to achieve
            their full potential and contribute positively to society.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
