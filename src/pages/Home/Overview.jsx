const Overview = () => {
  return (
    <section className="py-20 px-6 md:px-12 bg-gradient-to-b from-white via-slate-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-all duration-500">
      <div className="max-w-5xl mx-auto text-center space-y-8">
        <h2 className="text-4xl font-extrabold tracking-tight text-gray-800 dark:text-white">
          About La Salle School Homa Bay
        </h2>

        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
          La Salle School Homabay is a Catholic school open to all irrespective
          of religious denomination. The school is owned and run by Brothers of
          the Christian Schools (De La Salle Brothers). We offer Competency
          Based Curriculum (CBC) with International touch which is designed to
          emphasize the significance of developing skills and knowledge. La
          Salle School Homabay is networked with other Lasallian Institutions in
          over 80 countries worldwide.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 text-left text-gray-700 dark:text-gray-300">
          <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md">
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white text-center">
              Our Mission
            </h3>
            <p className="text-center">
              To offer high-quality, values-based academic preparation for life.
            </p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md">
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white text-center">
              Our Vision
            </h3>
            <p className="text-center">
              To be an Institution that promotes life long learning and produce
              responsible persons.
            </p>
          </div>
        </div>

        <p className="italic text-sm text-gray-600 dark:text-gray-400 pt-6">
          “Let us remember that we are in the holy presence of God.”
        </p>
      </div>
    </section>
  );
};

export default Overview;
