export default function Services() {
  const services = [
    {
      title: "Strategy Consulting",
      description: "Expert guidance for digital transformation and business strategy.",
      icon: "📊"
    },
    {
      title: "Technology Implementation",
      description: "End-to-end implementation of enterprise solutions.",
      icon: "⚙️"
    },
    {
      title: "Data Analytics",
      description: "Transform data into actionable business insights.",
      icon: "📈"
    },
    {
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services.",
      icon: "☁️"
    }
  ];

  return (
    <section id="services" className="min-h-screen max-w-7xl mx-auto px-6 py-20 bg-gray-50">
      <h3 className="text-4xl font-bold mb-4">Our Services</h3>
      <p className="text-gray-600 text-lg mb-12">
        Comprehensive solutions tailored to your business needs.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow"
          >
            <div className="text-4xl mb-4">{service.icon}</div>
            <h4 className="text-2xl font-bold mb-3">{service.title}</h4>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
