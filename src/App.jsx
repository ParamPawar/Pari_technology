import { useState } from "react";

export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navbar */}
      <header className="w-full border-b bg-white sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="font-extrabold text-2xl tracking-tight">Company</h1>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a className="relative pb-1 text-gray-900 after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-6 after:bg-orange-500">
              Home
            </a>
            <a>FinTech</a>
            <a>Services</a>
            <a>Resources</a>
            <a>About Us</a>
            <a>Contact Us</a>
          </nav>

          {/* Buttons (desktop) */}
          <div className="hidden md:block">
            <button className="rounded-xl px-5 py-2 bg-orange-500 text-white font-semibold shadow hover:bg-orange-600 transition">
              BOOK A CALL
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden border rounded-lg px-3 py-2"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden border-t px-6 py-4 space-y-3">
            <a className="block">Home</a>
            <a className="block">FinTech</a>
            <a className="block">Services</a>
            <a className="block">Resources</a>
            <a className="block">About Us</a>
            <a className="block">Contact Us</a>

            <button className="mt-4 w-full rounded-xl px-5 py-2 bg-orange-500 text-white font-semibold shadow">
              BOOK A CALL
            </button>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="flex items-start gap-3 mb-6">
            <div className="h-6 w-1 rounded-full bg-orange-500" />
            <div className="h-6 w-1 rounded-full border border-orange-400" />
          </div>

          <h2 className="text-4xl md:text-[56px] font-extrabold leading-[1.1]">
            We <span className="text-orange-500">Deliver</span>
            <br />
            Digital Strategy.
            <br />
            Precise!
          </h2>

          <p className="text-gray-600 mt-6 max-w-md">
            Our Subject Matter Experts will help you traverse the problem space
            with confidence.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <button className="rounded-xl px-6 py-3 bg-orange-500 text-white font-semibold shadow hover:bg-orange-600 transition">
              BOOK A CALL
            </button>

            <button className="rounded-xl px-6 py-3 border border-gray-300 hover:bg-gray-100 transition">
              LEARN MORE
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="rounded-3xl shadow-xl bg-gray-50 p-8 grid place-items-center">
          <img src="/src/assets/image.png" className="w-[380px] md:w-[420px]" />
        </div>
      </section>

      {/* Logos */}
      <section className="border-t py-6">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 opacity-80">
          <div className="text-center font-semibold">Converge</div>
          <div className="text-center font-semibold">Atheneum</div>
          <div className="text-center font-semibold">Coleman</div>
          <div className="text-center font-semibold">Capgemini</div>
          <div className="text-center font-semibold">GLG</div>
          <div className="text-center font-semibold">Third Bridge</div>
        </div>
      </section>
    </div>
  );
}
