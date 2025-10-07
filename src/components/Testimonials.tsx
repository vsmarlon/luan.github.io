import { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

/**
 * A carousel component for displaying client testimonials.
 */
const Testimonials = () => {
    const testimonials = [
        { quote: "Trabalhar com este personal trainer foi um divisor de águas para mim. Eu não apenas alcancei meus objetivos de perda de peso, mas também ganhei uma nova perspectiva sobre saúde e bem-estar.", name: 'Ana Souza', rating: 5, avatar: 'https://placehold.co/64x64/FFC0CB/000000?text=A' },
        { quote: "O melhor investimento que fiz na minha saúde. O programa foi adaptado às minhas necessidades e o apoio foi constante. Recomendo fortemente!", name: 'Ricardo Oliveira', rating: 5, avatar: 'https://placehold.co/64x64/ADD8E6/000000?text=R' },
        { quote: "Eu nunca pensei que gostaria de me exercitar, mas as sessões são tão dinâmicas e divertidas que mal posso esperar pela próxima. Me sinto mais forte e com mais energia do que nunca.", name: 'Juliana Lima', rating: 5, avatar: 'https://placehold.co/64x64/90EE90/000000?text=J' },
    ];
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
    const scrollPrev = useCallback(() => { if (emblaApi) emblaApi.scrollPrev(); }, [emblaApi]);
    const scrollNext = useCallback(() => { if (emblaApi) emblaApi.scrollNext(); }, [emblaApi]);
    const renderStars = (rating: number) => Array.from({ length: 5 }, (_, i) => (
        <svg key={i} className={`w-6 h-6 ${i < rating ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-600'}`} fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.368 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.539 1.118l-3.368-2.448a1 1 0 00-1.175 0l-3.368 2.448c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.05 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69L9.049 2.927z" /></svg>
    ));

    return (
        <section id="testimonials" className="py-20 bg-transparent animate-fadeIn border-t border-gray-200 dark:border-gray-700">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">O Que Meus Clientes Dizem</h2>
                <div className="relative max-w-2xl mx-auto">
                    <div className="overflow-hidden" ref={emblaRef}>
                        <div className="flex">
                            {testimonials.map((testimonial, index) => (
                                <div className="flex-none w-full p-2" key={index}> {/* Added padding to slide */}
                                    <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg shadow-lg p-8 h-full">
                                        <div className="flex items-center mb-4">
                                            <img src={testimonial.avatar} alt={`Avatar de ${testimonial.name}`} className="w-16 h-16 rounded-full mr-4" />
                                            <div>
                                                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{testimonial.name}</h3>
                                                <div className="flex">{renderStars(testimonial.rating)}</div>
                                            </div>
                                        </div>
                                        <p className="text-gray-700 dark:text-gray-300 italic">"{testimonial.quote}"</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <button 
                        onClick={scrollPrev} 
                        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/50 hover:bg-white/75 text-gray-800 font-bold p-3 rounded-full shadow-md z-10"
                        aria-label="Depoimento anterior"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
                    </button>
                    <button 
                        onClick={scrollNext} 
                        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/50 hover:bg-white/75 text-gray-800 font-bold p-3 rounded-full shadow-md z-10"
                        aria-label="Próximo depoimento"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;