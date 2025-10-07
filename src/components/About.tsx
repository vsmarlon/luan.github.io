/**
 * The About Me section with a profile picture and description.
 */
const About = () => (
    <section id="about" className="py-20 bg-transparent animate-fadeIn border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4">
        <div className="lg:flex items-center">
          <div className="lg:w-1/3 flex justify-center mb-8 lg:mb-0">
             <img src="https://placehold.co/256x256/77dd77/ffffff?text=Trainer" alt="Foto do Personal Trainer" className="rounded-full w-64 h-64 object-cover shadow-lg" />
          </div>
          <div className="lg:w-2/3 lg:pl-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Sobre Mim</h2>
            <p className="text-lg text-neutral-700 dark:text-gray-300 mb-4">
              Minha filosofia de treino é baseada na crença de que o fitness deve ser acessível e agradável para todos. Eu me concentro em criar programas personalizados que não apenas desafiam você, mas também se encaixam no seu estilo de vida.
            </p>
            <p className="text-lg text-neutral-700 dark:text-gray-300 mb-4">
              Com certificações em Treinamento de Força, Nutrição e Fitness Funcional, tenho o conhecimento para ajudá-lo a alcançar seus objetivos de forma segura e eficaz. Minha paixão pelo fitness começou com minha própria jornada de transformação, e agora me dedico a ajudar os outros a encontrar sua própria força.
            </p>
          </div>
        </div>
      </div>
    </section>
);

export default About;
