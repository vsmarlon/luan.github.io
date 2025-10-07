const Methodology = () => {
    const methodologies = [
    {
      title: 'Personal Trainer',
      description: 'Treinos personalizados e acompanhamento individual para você atingir seus objetivos de forma segura e eficiente.',
      icon: (
        <svg className="w-16 h-16 mb-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.25278C12 6.25278 5.64583 3 3.5 3C1.35417 3 1.5 6.25278 1.5 6.25278C1.5 6.25278 1.5 17.7472 1.5 17.7472C1.5 17.7472 1.35417 21 3.5 21C5.64583 21 12 17.7472 12 17.7472M12 6.25278C12 6.25278 18.3542 3 20.5 3C22.6458 3 22.5 6.25278 22.5 6.25278C22.5 6.25278 22.5 17.7472 22.5 17.7472C22.5 17.7472 22.6458 21 20.5 21C18.3542 21 12 17.7472 12 17.7472M12 6.25278V17.7472"></path></svg>
      ),
    },
    {
      title: 'Atendimento Online',
      description: 'Acompanhamento à distância com a mesma qualidade e atenção do presencial, para você treinar onde e quando quiser.',
      icon: (
        <svg className="w-16 h-16 mb-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
      ),
    },
    {
      title: 'Plano Nutricional',
      description: 'Orientações e planos nutricionais personalizados para potencializar seus resultados e promover um estilo de vida saudável.',
      icon: (
        <svg className="w-16 h-16 mb-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path></svg>
      ),
    },
  ];

  return (
    <section id="methodology" className="py-20 bg-transparent animate-fadeIn border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">Minha Metodologia</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {methodologies.map((method, index) => (
            <div key={index} className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg shadow-lg p-8 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="flex justify-center">{method.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">{method.title}</h3>
              <p className="text-lg text-gray-700 dark:text-gray-300">{method.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Methodology;
