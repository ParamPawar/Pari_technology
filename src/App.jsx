import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ClientLogos from "./components/ClientLogos";
import FinTech from "./components/sections/FinTech";
import Services from "./components/sections/Services";
import Resources from "./components/sections/Resources";
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <Hero />
      <ClientLogos />
      <FinTech />
      <Services />
      <Resources />
      <About />
      <Contact />
    </div>
  );
}
