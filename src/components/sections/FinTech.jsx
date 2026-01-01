export default function FinTech() {
  return (
    <section id="fintech" className="min-h-screen max-w-7xl mx-auto px-6 py-20">
      <h3 className="text-4xl font-bold mb-6">FinTech Solutions</h3>
      <p className="text-gray-600 text-lg mb-8">
        Transforming financial services with cutting-edge technology solutions.
      </p>
      
      <div className="grid md:grid-cols-3 gap-6">
        <div className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
          <h4 className="text-xl font-semibold mb-3">Payment Systems</h4>
          <p className="text-gray-600">Secure and scalable payment processing solutions.</p>
        </div>
        <div className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
          <h4 className="text-xl font-semibold mb-3">Digital Banking</h4>
          <p className="text-gray-600">Modern banking platforms for the digital age.</p>
        </div>
        <div className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
          <h4 className="text-xl font-semibold mb-3">Blockchain</h4>
          <p className="text-gray-600">Decentralized solutions for transparent transactions.</p>
        </div>
      </div>
    </section>
  );
}
