/**
 * The Hero section, the main welcome area of the page.
 */
const Hero = () => (
  <section className="bg-gray-800 text-white py-20 animate-fadeIn overflow-hidden relative">
    {/* This is the patterned background element */}
    <div 
        className="absolute inset-0 bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed [--pattern-fg:var(--color-gray-950)]/5 [--pattern-fg:var(--color-white)]/10"
        style={{'--color-gray-950': '23 23 23'} as React.CSSProperties}
    ></div>
    <div className="container mx-auto text-center relative z-10">
      <h1 className="text-5xl font-bold mb-4">Transforme Seu Corpo, Transforme Sua Vida</h1>
      <p className="text-xl mb-8">Atingir seus objetivos de fitness nunca foi tão fácil. Comece hoje!</p>
      <a
  href="#contact"
  className="relative overflow-hidden bg-black text-white font-bold py-3 px-6 rounded-full shadow-lg transition-all duration-300 group inline-block isolate"
>
  <span className="relative z-20">Agende uma Consulta Gratuita</span>
  <span
    className="absolute inset-0 bg-white scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100 z-20"
  ></span>
</a>
    </div>
  </section>
);
export default Hero;
