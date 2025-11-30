/**
 * Hero Section Component
 * 
 * Design Philosophy: Dark Theme (Preto, Dourado, Cinza)
 * - Seção de impacto visual com headline persuasiva
 * - Placeholder para imagem de fundo
 * - Botão CTA centralizado
 * - Tipografia Montserrat para títulos
 */

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&h=800&fit=crop")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay escuro para melhorar legibilidade */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>

      {/* Conteúdo Hero */}
      <div className="relative z-20 w-full flex items-center justify-center px-4">
        <div className="max-w-3xl mx-auto text-center">
        {/* Subtitle */}
        <p className="text-accent text-sm md:text-base font-semibold mb-4 uppercase tracking-widest">
          Transformação Garantida ou Seu Dinheiro de Volta!
        </p>

        {/* Headline Principal */}
        <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
          Transforme Seu Corpo na Sua Melhor Versão
        </h1>

        {/* Descrição */}
        <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
          A consultoria de treino da elite. Planos 100% personalizados com acompanhamento especializado. 
          Chega de treinar errado. Comece seus resultados agora.
        </p>

        {/* CTA Button */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className="px-8 py-4 bg-accent text-primary-foreground font-bold text-lg rounded-lg hover:bg-accent/90 transition-all duration-300 transform hover:scale-105 shadow-lg"
              onClick={() => {
                // Rolar suavemente para a seção de planos
                const plansSection = document.getElementById('assinaturas');
                if (plansSection) {
                  plansSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Assine Agora
            </button>
            <button
              className="px-8 py-4 border-2 border-accent text-accent font-bold text-lg rounded-lg hover:bg-accent/10 transition-all duration-300"
              onClick={() => {
                // Rolar suavemente para a seção Como Funciona
                const howItWorksSection = document.getElementById('como-funciona');
                if (howItWorksSection) {
                  howItWorksSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Saiba Como Funciona
            </button>
          </div>

        {/* Trust Indicators */}
        <div className="mt-12 pt-8 border-t border-white/20 flex flex-col md:flex-row justify-center items-center gap-8">
            <div className="text-center">
              <p className="text-3xl font-bold text-accent">100+</p>
              <p className="text-gray-300 text-sm">Clientes Satisfeitos</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-accent">95%</p>
              <p className="text-gray-300 text-sm">Taxa de Sucesso</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-accent">10+</p>
              <p className="text-gray-300 text-sm">Anos de Experiência</p>
          </div>
        </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <svg
          className="w-6 h-6 text-accent"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
