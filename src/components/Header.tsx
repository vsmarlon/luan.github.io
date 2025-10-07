import { forwardRef, useState } from 'react';

interface HeaderProps {
  theme: string;
  toggleTheme: () => void | string;
}

const Header = forwardRef<HTMLElement, HeaderProps>(({ theme, toggleTheme }, ref) => {

  const [isOpen, setIsOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header ref={ref} className="bg-gray-900/80 backdrop-blur-md text-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="w-full max-w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="#" className="text-xl sm:text-2xl font-bold whitespace-nowrap">
              Personal Trainer
            </a>
          </div>
          <nav className="hidden md:flex items-center space-x-2 lg:space-x-4">
            <a href="#about" className="px-2 py-1 hover:text-gray-400 transition duration-300 text-sm lg:text-base">Sobre</a>
            <a href="#methodology" className="px-2 py-1 hover:text-gray-400 transition duration-300 text-sm lg:text-base">Metodologia</a>
            <a href="#results" className="px-2 py-1 hover:text-gray-400 transition duration-300 text-sm lg:text-base">Resultados</a>
            <a href="#testimonials" className="px-2 py-1 hover:text-gray-400 transition duration-300 text-sm lg:text-base">Depoimentos</a>
            <a href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-3 lg:px-4 rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 text-sm lg:text-base whitespace-nowrap">
              Contato
            </a>
            {/* Dark Mode Toggle */}
            <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-700 transition-colors" aria-label="Toggle dark mode">
              {theme === 'light' ? (
                <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>
              ) : (
                <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
              )}
            </button>
          </nav>
          <div className="md:hidden flex items-center">
             <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-700 transition-colors mr-2" aria-label="Toggle dark mode">
               {theme === 'light' ? <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg> : <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>}
            </button>
            <button onClick={toggleMenu} className="text-white focus:outline-none p-1" aria-label="Toggle menu">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <nav className="bg-gray-900 border-t border-gray-700">
          <div className="px-4 py-2 space-y-1">
            <a href="#about" className="block py-3 px-2 text-sm hover:bg-gray-700 rounded transition duration-300" onClick={toggleMenu}>Sobre</a>
            <a href="#methodology" className="block py-3 px-2 text-sm hover:bg-gray-700 rounded transition duration-300" onClick={toggleMenu}>Metodologia</a>
            <a href="#results" className="block py-3 px-2 text-sm hover:bg-gray-700 rounded transition duration-300" onClick={toggleMenu}>Resultados</a>
            <a href="#testimonials" className="block py-3 px-2 text-sm hover:bg-gray-700 rounded transition duration-300" onClick={toggleMenu}>Depoimentos</a>
            <a href="#contact" className="block py-3 px-2 text-sm bg-blue-600 hover:bg-blue-700 text-white rounded-md text-center mt-2 font-medium" onClick={toggleMenu}>Contato</a>
          </div>
        </nav>
      </div>
    </header>
  );
});

export default Header;

