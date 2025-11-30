import { Check, ShoppingCart } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

/**
 * Shop Page
 * 
 * Design Philosophy: Dark Theme (Preto, Vermelho)
 * - Página de loja com opções de consultoria online
 * - 3 planos: 1 mês, 3 meses e 6 meses
 * - Destaque para o melhor custo-benefício
 */

export default function Shop() {
  const products = [
    {
      duration: '1 Mês',
      price: 'R$ 79,90',
      period: '/mês',
      description: 'Consultoria de treino por 1 mês',
      benefits: [
        'Plano de treino personalizado',
        'Avaliação inicial detalhada',
        'Ajustes semanais',
        'Suporte via WhatsApp',
        'Acesso ao app mobile',
      ],
      cta: 'Comprar Agora',
      highlighted: false,
    },
    {
      duration: '3 Meses',
      price: 'R$ 199,90',
      period: '/período',
      description: 'Consultoria de treino por 3 meses - Melhor custo-benefício',
      benefits: [
        'Tudo do plano 1 mês',
        'Chat ilimitado com especialista',
        'Plano nutricional personalizado',
        'Vídeos de técnica exclusivos',
        'Análise de progresso mensal',
      ],
      cta: 'Comprar Agora',
      highlighted: true,
      badge: 'MAIS POPULAR',
    },
    {
      duration: '6 Meses',
      price: 'R$ 299,90',
      period: '/período',
      description: 'Consultoria de treino por 6 meses - Máximo desconto',
      benefits: [
        'Tudo do plano 3 meses',
        'Programa de suplementação',
        'Avaliação postural com técnicas para melhorar sua postura',
      ],
      cta: 'Comprar Agora',
      highlighted: false,
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header Fixo */}
      <Header />

      {/* Main Content */}
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-background to-card/50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-black text-foreground mb-6">
                Loja Online
              </h1>
              <p className="text-xl text-muted-foreground mb-4">
                Escolha o plano de consultoria que melhor se adequa aos seus objetivos
              </p>
              <p className="text-lg text-accent font-semibold">
                Comece sua transformação hoje mesmo! 💪
              </p>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            {/* Grid de Produtos */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {products.map((product, index) => (
                <div
                  key={index}
                  className={`relative rounded-lg overflow-hidden transition-all duration-300 transform hover:scale-105 ${
                    product.highlighted
                      ? 'border-2 border-accent shadow-2xl md:scale-105'
                      : 'border border-border bg-card'
                  }`}
                  style={
                    product.highlighted
                      ? {
                          backgroundColor: 'rgba(37, 211, 102, 0.05)',
                        }
                      : {}
                  }
                >
                  {/* Badge */}
                  {product.badge && (
                    <div className="absolute top-0 right-0 bg-accent text-primary-foreground px-4 py-2 text-sm font-bold">
                      {product.badge}
                    </div>
                  )}

                  {/* Content */}
                  <div className="p-8">
                    {/* Duração */}
                    <h3 className="text-3xl font-black text-foreground mb-2">
                      {product.duration}
                    </h3>

                    {/* Descrição */}
                    <p className="text-muted-foreground text-sm mb-6">
                      {product.description}
                    </p>

                    {/* Preço */}
                    <div className="mb-8">
                      <span className="text-5xl font-black text-accent">
                        {product.price}
                      </span>
                      <span className="text-muted-foreground ml-2">
                        {product.period}
                      </span>
                    </div>

                    {/* CTA Button */}
                    <button
                      className={`w-full py-3 rounded-lg font-bold text-lg transition-all duration-300 mb-8 flex items-center justify-center gap-2 ${
                        product.highlighted
                          ? 'bg-accent text-primary-foreground hover:bg-accent/90'
                          : 'border-2 border-accent text-accent hover:bg-accent/10'
                      }`}
                      onClick={() => {
                        alert(
                          `Plano ${product.duration} selecionado!\n\nEm breve, você será redirecionado para o checkout.`
                        );
                      }}
                    >
                      <ShoppingCart size={20} />
                      {product.cta}
                    </button>

                    {/* Divider */}
                    <div className="border-t border-border mb-8"></div>

                    {/* Benefits List */}
                    <ul className="space-y-4">
                      {product.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-start gap-3">
                          <Check
                            size={20}
                            className="text-accent flex-shrink-0 mt-1"
                          />
                          <span className="text-foreground">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            {/* Informações Adicionais */}
            <div className="bg-card border border-border rounded-lg p-8 text-center max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Dúvidas sobre os planos?
              </h3>
              <p className="text-muted-foreground mb-6">
                Nossa equipe está pronta para ajudar você a escolher o melhor plano e responder todas as suas dúvidas.
              </p>
              <button
                className="inline-block px-8 py-3 bg-accent text-primary-foreground rounded-lg font-bold hover:bg-accent/90 transition-all duration-300"
                onClick={() => {
                  const whatsappNumber = '82991735070';
                  const whatsappMessage =
                    'Olá! Gostaria de tirar algumas dúvidas sobre os planos de consultoria de treino.';
                  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                    whatsappMessage
                  )}`;
                  window.open(whatsappLink, '_blank');
                }}
              >
                Conversar no WhatsApp
              </button>
            </div>
          </div>
        </section>

        {/* Garantia Section */}
        <section className="py-16 bg-card/50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Garantia de Satisfação
              </h2>
              <p className="text-lg text-muted-foreground">
                Todos os planos incluem garantia de satisfação de 7 dias. Se não ficar satisfeito, devolvemos 100% do seu dinheiro. Sem perguntas.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />

      {/* Botão Flutuante WhatsApp */}
      <WhatsAppButton />
    </div>
  );
}
