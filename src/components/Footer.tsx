import { SiInstagram, SiFacebook, SiWhatsapp } from "react-icons/si";

/**
 * The Footer component for the bottom of the page.
 */
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-10 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
          {/* Left: Copyright */}
          <p className="text-gray-400 text-sm text-center md:text-left">
            &copy; {currentYear}{" "}
            <span className="font-semibold text-white">Personal Trainer</span>.{" "}
            Todos os direitos reservados.
          </p>

          {/* Middle: Navigation */}
          <nav>
            <ul className="flex flex-wrap justify-center md:justify-start gap-6 text-sm">
              <li><a href="#about" className="hover:text-gray-400 transition-all duration-300">Sobre</a></li>
              <li><a href="#results" className="hover:text-gray-400 transition-all duration-300">Resultados</a></li>
              <li><a href="#testimonials" className="hover:text-gray-400 transition-all duration-300">Depoimentos</a></li>
              <li><a href="#contact" className="hover:text-gray-400 transition-all duration-300">Contato</a></li>
            </ul>
          </nav>

          {/* Right: Social Media Icons */}
          <div className="flex justify-center md:justify-end space-x-6 text-2xl">
            <a
              href="#"
              aria-label="Instagram"
              className="text-gray-300 hover:text-pink-500 transform hover:scale-110 transition-all duration-300"
            >
              <SiInstagram />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="text-gray-300 hover:text-blue-500 transform hover:scale-110 transition-all duration-300"
            >
              <SiFacebook />
            </a>
            <a
              href="#"
              aria-label="WhatsApp"
              className="text-gray-300 hover:text-green-500 transform hover:scale-110 transition-all duration-300"
            >
              <SiWhatsapp />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
