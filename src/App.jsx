import { useState } from "react";
import heroImage from "./assets/image.png";

export default function App() {
  const [open, setOpen] = useState(false);

  const goTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
      `}</style>

      {/* NAVBAR */}
      <header className="w-full border-b bg-white sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">

          <h1 className="font-extrabold text-xl sm:text-2xl tracking-tight">Company</h1>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-2 lg:gap-4">
            <button onClick={() => goTo("home")} className="px-3 lg:px-4 py-2 rounded-lg hover:bg-gray-100 border-b-2 border-orange-500 text-sm lg:text-base">
              Home
            </button>
            <button onClick={() => goTo("fintech")} className="px-3 lg:px-4 py-2 rounded-lg hover:bg-gray-100 text-sm lg:text-base">
              FinTech
            </button>
            <button onClick={() => goTo("services")} className="px-3 lg:px-4 py-2 rounded-lg hover:bg-gray-100 flex items-center gap-1 text-sm lg:text-base">
              Services <span className="text-xs">▼</span>
            </button>
            <button onClick={() => goTo("resources")} className="px-3 lg:px-4 py-2 rounded-lg hover:bg-gray-100 flex items-center gap-1 text-sm lg:text-base">
              Resources <span className="text-xs">▼</span>
            </button>
            <button onClick={() => goTo("about")} className="px-3 lg:px-4 py-2 rounded-lg hover:bg-gray-100 text-sm lg:text-base">
              About Us
            </button>
            <button onClick={() => goTo("contact")} className="px-3 lg:px-4 py-2 rounded-lg hover:bg-gray-100 text-sm lg:text-base">
              Contact Us
            </button>
          </nav>

          {/* CTA */}
          <button className="hidden md:block rounded-xl px-4 lg:px-5 py-2 bg-orange-500 text-white font-semibold shadow text-sm lg:text-base">
            BOOK A CALL
          </button>

          {/* MOBILE TOGGLE */}
          <button className="md:hidden border rounded-lg px-3 py-2" onClick={() => setOpen(!open)}>
            ☰
          </button>
        </div>

        {/* MOBILE MENU */}
        {open && (
          <div className="md:hidden px-4 sm:px-6 py-4 space-y-3 border-t">
            <button onClick={() => { goTo("home"); setOpen(false); }} className="block w-full text-left py-2">
              Home
            </button>
            <button onClick={() => { goTo("fintech"); setOpen(false); }} className="block w-full text-left py-2">
              FinTech
            </button>
            <button onClick={() => { goTo("services"); setOpen(false); }} className="block w-full text-left py-2">
              Services
            </button>
            <button onClick={() => { goTo("resources"); setOpen(false); }} className="block w-full text-left py-2">
              Resources
            </button>
            <button onClick={() => { goTo("about"); setOpen(false); }} className="block w-full text-left py-2">
              About Us
            </button>
            <button onClick={() => { goTo("contact"); setOpen(false); }} className="block w-full text-left py-2">
              Contact Us
            </button>

            <button className="mt-3 w-full rounded-xl px-5 py-2.5 bg-orange-500 text-white shadow font-semibold">
              BOOK A CALL
            </button>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section id="home" className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4 sm:mb-6">
              We <span className="text-orange-500">Deliver</span> Digital Strategy. Precise!
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8">
              Our Subject Matter Experts will help you traverse the problem space with confidence.
            </p>
            <button className="rounded-xl px-6 sm:px-8 py-2.5 sm:py-3 bg-orange-500 text-white font-semibold shadow-lg hover:bg-orange-600 w-full sm:w-auto">
              BOOK A CALL
            </button>
          </div>
          <div className="flex justify-center mt-8 md:mt-0">
            <img 
              src={heroImage} 
              alt="Business Growth Analytics" 
              className="w-full max-w-xs sm:max-w-sm md:max-w-md rounded-lg"
            />
          </div>
        </div>

        {/* LOGO TICKER */}
        <div className="mt-12 sm:mt-16 md:mt-20 overflow-hidden">
          <div className="flex items-center gap-8 sm:gap-12 animate-scroll">
            <div className="flex items-center gap-8 sm:gap-12 min-w-max">
              <span className="text-lg sm:text-xl md:text-2xl font-bold text-gray-400">CONSVERGE</span>
              <span className="text-lg sm:text-xl md:text-2xl font-bold text-gray-400">Atheneum</span>
              <span className="text-lg sm:text-xl md:text-2xl font-bold text-gray-400">COLEMAN</span>
              <span className="text-lg sm:text-xl md:text-2xl font-bold text-gray-400">Capgemini</span>
              <span className="text-lg sm:text-xl md:text-2xl font-bold text-gray-400">GLG</span>
              <span className="text-lg sm:text-xl md:text-2xl font-bold text-gray-400">Third Bridge</span>
            </div>
            <div className="flex items-center gap-8 sm:gap-12 min-w-max">
              <span className="text-lg sm:text-xl md:text-2xl font-bold text-gray-400">CONSVERGE</span>
              <span className="text-lg sm:text-xl md:text-2xl font-bold text-gray-400">Atheneum</span>
              <span className="text-lg sm:text-xl md:text-2xl font-bold text-gray-400">COLEMAN</span>
              <span className="text-lg sm:text-xl md:text-2xl font-bold text-gray-400">Capgemini</span>
              <span className="text-lg sm:text-xl md:text-2xl font-bold text-gray-400">GLG</span>
              <span className="text-lg sm:text-xl md:text-2xl font-bold text-gray-400">Third Bridge</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}