const stats = [
  {
    value: "10K+",
    label: "Global Clients"
  },
  {
    value: "$5T+",
    label: "Assets Tracked"
  },
  {
    value: "180+",
    label: "Countries Served"
  },
  {
    value: "99.9%",
    label: "Uptime SLA"
  }
];

export default function StatsSection() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold mb-6">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg md:text-xl text-primary-100 max-w-3xl mx-auto leading-relaxed">
            Our platform powers financial decisions for thousands of organizations across the globe.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-6xl font-bold mb-2">
                {stat.value}
              </div>
              <div className="text-lg text-primary-100">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
