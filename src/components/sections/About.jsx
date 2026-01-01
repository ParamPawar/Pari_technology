export default function About() {
  const stats = [
    { value: "15+", label: "Years Experience" },
    { value: "200+", label: "Projects Completed" },
    { value: "50+", label: "Team Members" },
    { value: "98%", label: "Client Satisfaction" }
  ];

  return (
    <section id="about" className="min-h-screen max-w-7xl mx-auto px-6 py-20 bg-gray-50">
      <h3 className="text-4xl font-bold mb-4">About Us</h3>
      <p className="text-gray-600 text-lg mb-12 max-w-3xl">
        We are a team of passionate experts dedicated to delivering innovative digital solutions
        that transform businesses and drive growth.
      </p>

      <div className="grid md:grid-cols-4 gap-8 mb-12">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <div className="text-5xl font-bold text-orange-500 mb-2">
              {stat.value}
            </div>
            <div className="text-gray-700 font-medium">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="bg-white p-10 rounded-2xl shadow-lg">
        <h4 className="text-2xl font-bold mb-4">Our Mission</h4>
        <p className="text-gray-600 text-lg leading-relaxed">
          To empower businesses with cutting-edge digital strategies and technology solutions
          that enable them to thrive in an ever-evolving digital landscape. We believe in
          precision, innovation, and delivering measurable results.
        </p>
      </div>
    </section>
  );
}
