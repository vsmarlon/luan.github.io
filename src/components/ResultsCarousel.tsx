import { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

const ResultsCarousel = () => {
  const results = [
    { name: 'João', before: 'https://placehold.co/400x400/cccccc/ffffff?text=Antes', after: 'https://placehold.co/400x400/77dd77/ffffff?text=Depois', summary: 'Perdeu 10kg em 3 meses' },
    { name: 'Maria', before: 'https://placehold.co/400x400/cccccc/ffffff?text=Antes', after: 'https://placehold.co/400x400/77dd77/ffffff?text=Depois', summary: 'Ganhou 5kg de massa muscular' },
    { name: 'Carlos', before: 'https://placehold.co/400x400/cccccc/ffffff?text=Antes', after: 'https://placehold.co/400x400/77dd77/ffffff?text=Depois', summary: 'Melhorou a postura e a flexibilidade' },
  ];
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section id="results" className="py-20 bg-transparent animate-fadeIn border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">Clientes Reais, Resultados Reais</h2>
        <div className="relative max-w-2xl mx-auto">
          <div className="overflow-hidden rounded-lg" ref={emblaRef}>
            <div className="flex">
              {results.map((result, index) => (
                <div className="flex-none w-full relative" key={index}>
                  <div className="overflow-hidden rounded-lg shadow-lg">
                    <div className="grid grid-cols-2">
                      <img src={result.before} alt={`Foto de ${result.name} antes`} className="object-cover w-full h-64 md:h-80" />
                      <img src={result.after} alt={`Foto de ${result.name} depois`} className="object-cover w-full h-64 md:h-80" />
                    </div>
                    <div className="p-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
                      <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">{result.name}</h3>
                      <p className="text-lg text-gray-700 dark:text-gray-300">{result.summary}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Previous Button - UPDATED */}
          <button 
            onClick={scrollPrev} 
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/50 hover:bg-white/75 text-gray-800 font-bold p-3 rounded-full shadow-md z-10"
            aria-label="Slide anterior"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
          </button>
          
          {/* Next Button - UPDATED */}
          <button 
            onClick={scrollNext} 
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/50 hover:bg-white/75 text-gray-800 font-bold p-3 rounded-full shadow-md z-10"
            aria-label="Próximo slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>
      </div>
    </section>
  );
}

export default ResultsCarousel;