export default function Resources() {
  const resources = [
    { title: "Case Studies", count: "25+" },
    { title: "Whitepapers", count: "40+" },
    { title: "Blog Articles", count: "100+" },
    { title: "Webinars", count: "15+" }
  ];

  return (
    <section id="resources" className="min-h-screen max-w-7xl mx-auto px-6 py-20">
      <h3 className="text-4xl font-bold mb-4">Resources</h3>
      <p className="text-gray-600 text-lg mb-12">
        Explore our knowledge base and stay updated with industry insights.
      </p>

      <div className="grid md:grid-cols-4 gap-6 mb-12">
        {resources.map((resource, index) => (
          <div
            key={index}
            className="text-center p-8 border border-gray-200 rounded-xl hover:border-orange-500 transition-colors"
          >
            <div className="text-4xl font-bold text-orange-500 mb-2">
              {resource.count}
            </div>
            <div className="text-gray-700 font-medium">{resource.title}</div>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-8 rounded-2xl">
        <h4 className="text-2xl font-bold mb-3">Subscribe to Our Newsletter</h4>
        <p className="text-gray-600 mb-6">
          Get the latest insights and updates delivered to your inbox.
        </p>
        <div className="flex gap-3 max-w-md">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <button className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
}
