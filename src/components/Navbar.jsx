import Button from "./ui/Button";

export default function Navbar() {
  const navLinks = [
    { href: "#home", label: "Home", active: true },
    { href: "#fintech", label: "FinTech" },
    { href: "#services", label: "Services" },
    { href: "#resources", label: "Resources" },
    { href: "#about", label: "About Us" },
    { href: "#contact", label: "Contact Us" }
  ];

  return (
    <header className="w-full border-b bg-white sticky top-0 z-50 backdrop-blur-sm bg-white/95">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="font-extrabold text-2xl tracking-tight">Company</h1>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`${
                link.active
                  ? "relative pb-1 text-gray-900 hover:text-orange-500 transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-full after:bg-orange-500"
                  : "text-gray-700 hover:text-orange-500 transition-colors"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <Button variant="primary">
          BOOK A CALL
        </Button>
      </div>
    </header>
  );
}
