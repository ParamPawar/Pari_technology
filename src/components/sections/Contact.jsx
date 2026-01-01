export default function Contact() {
  return (
    <section id="contact" className="min-h-screen max-w-7xl mx-auto px-6 py-20">
      <h3 className="text-4xl font-bold mb-4">Contact Us</h3>
      <p className="text-gray-600 text-lg mb-12">
        Ready to start your digital transformation journey? Get in touch with us today.
      </p>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                rows="5"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Tell us about your project..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-gradient-to-r from-orange-400 to-orange-500 text-white font-semibold rounded-lg shadow-md hover:shadow-lg hover:from-orange-500 hover:to-orange-600 transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="space-y-8">
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl">
            <h4 className="text-xl font-bold mb-4">Office Location</h4>
            <p className="text-gray-700">
              123 Business Street<br />
              Tech District<br />
              Chennai, Tamil Nadu 600001<br />
              India
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl">
            <h4 className="text-xl font-bold mb-4">Contact Information</h4>
            <p className="text-gray-700 mb-2">
              <strong>Email:</strong> info@company.com
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Phone:</strong> +91 123 456 7890
            </p>
            <p className="text-gray-700">
              <strong>Hours:</strong> Mon-Fri, 9AM-6PM IST
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl">
            <h4 className="text-xl font-bold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-orange-500 hover:text-white transition-colors">
                L
              </a>
              <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-orange-500 hover:text-white transition-colors">
                T
              </a>
              <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-orange-500 hover:text-white transition-colors">
                F
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
