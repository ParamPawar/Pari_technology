import Button from "./ui/Button";

export default function Hero() {
  return (
    <section id="home" className="max-w-7xl mx-auto px-6 py-20 md:py-28 grid md:grid-cols-2 gap-16 items-center">
      <div className="space-y-6">
        {/* Decorative bullets */}
        <div className="flex items-start gap-2">
          <div className="h-8 w-1.5 rounded-full bg-orange-500 mt-1" />
          <div className="h-8 w-1.5 rounded-full border-2 border-orange-400 mt-1" />
        </div>

        {/* Heading */}
        <h2 className="text-5xl md:text-6xl lg:text-[64px] font-extrabold leading-[1.1] tracking-tight">
          We <span className="text-orange-500">Deliver</span>
          <br />
          Digital Strategy.
          <br />
          Precise!
        </h2>

        {/* Description */}
        <p className="text-gray-600 text-lg leading-relaxed max-w-lg">
          Our Subject Matter Experts will help you traverse the problem space
          with confidence.
        </p>

        {/* CTA Button */}
        <Button variant="secondary">
          BOOK A CALL
        </Button>
      </div>

      {/* Image/Illustration */}
      <div className="relative">
        <div className="rounded-3xl shadow-2xl bg-gradient-to-br from-gray-50 to-gray-100 p-12 grid place-items-center border border-gray-200">
          <img 
            src="/src/assets/image.png" 
            alt="Digital Strategy Illustration" 
            className="w-full max-w-[450px] drop-shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
