export default function ClientLogos() {
  const clients = [
    { name: "CONSVIERGE" },
    { name: "Atheneum" },
    { name: "COLEMAN" },
    { name: "Capgemini", hasIcon: true },
    { name: "GLG" },
    { name: "Third Bridge" }
  ];

  return (
    <section className="border-t border-gray-200 py-8 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 items-center justify-items-center">
          {clients.map((client) => (
            <div
              key={client.name}
              className="text-lg font-bold text-gray-700 hover:text-gray-900 transition-colors cursor-pointer flex items-center gap-2"
            >
              <span className={client.hasIcon ? "text-blue-600" : ""}>
                {client.name}
              </span>
              {client.hasIcon && (
                <span className="w-2 h-2 rounded-full bg-blue-600"></span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
