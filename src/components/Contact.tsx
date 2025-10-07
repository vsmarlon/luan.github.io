
const Contact = () => (
    <section id="contact" className="py-20 bg-transparent animate-fadeIn border-t border-b border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">Comece Sua Jornada Hoje</h2>
        <div className="max-w-4xl mx-auto bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg shadow-lg p-8">
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 font-bold mb-2">Nome</label>
                    <input type="text" id="name" name="name" className="w-full px-4 py-3 border-transparent rounded-xl bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow duration-300" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 font-bold mb-2">Email</label>
                    <input type="email" id="email" name="email" className="w-full px-4 py-3 border-transparent rounded-xl bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow duration-300" />
                  </div>
              </div>
              <div className="mt-6">
                <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 font-bold mb-2">Mensagem</label>
                <textarea id="message" name="message" rows={4} className="w-full px-4 py-3 border-transparent rounded-xl bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow duration-300"></textarea>
              </div>
              <div className="text-center mt-6">
                <button type="submit"className="relative overflow-hidden bg-blue-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-all duration-300 group">
                          <span className="relative z-10">Enviar Mensagem</span>
                          <span className="absolute inset-0 bg-blue-700 scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
                </button>
              </div>
            </form>
        </div>
      </div>
    </section>
);

export default Contact;

