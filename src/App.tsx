import { useCallback, useEffect, useRef, useState } from 'react';

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Methodology from './components/Methodology';
import ResultsCarousel from './components/ResultsCarousel';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import useTheme from './hook/Theme';

function App() {
  const [theme, toggleTheme] = useTheme();
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [headerHeight, setHeaderHeight] = useState(0);
  const headerRef = useRef(null);

  useEffect(() => {
    if (headerRef.current) {
      const observer = new ResizeObserver(entries => {
        for (let entry of entries) {
          setHeaderHeight((entry.target as HTMLElement).offsetHeight);
        }
      });
      observer.observe(headerRef.current);
      return () => observer.disconnect();
    }
  }, []);

  const handleScroll = useCallback(() => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    setScrollPercentage(scrolled);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <div className="bg-gradient-to-br via-gray-300 to-gray-200 dark:from-gray-800 dark:via-gray-900 dark:to-black text-gray-800 dark:text-gray-200">
      <Header ref={headerRef} theme={theme} toggleTheme={toggleTheme} />
      
      <div 
        className="fixed left-0 w-full h-1 bg-gray-300 dark:bg-gray-700 z-40"
        style={{ top: `${headerHeight}px` }}
      >
        <div
          className="h-1 bg-blue-600 transition-all duration-150 ease-out"
          style={{ width: `${scrollPercentage}%` }}
        />
      </div>

      <main style={{ paddingTop: `${headerHeight}px` }}>
        <Hero />
        <About />
        <Methodology />
        <ResultsCarousel />
        <Testimonials />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
