import { Check } from 'lucide-react';

/**
 * Plans Section Component
 * 
 * Design Philosophy: Dark Theme (Preto, Dourado, Cinza)
 * - 3 planos com destaque para o plano premium
 * - Benefícios listados com ícones de check
 * - CTAs claros para conversão
 */

export default function Plans() {
  const plans = [
    {
      name: '1 Mês',
      price: 'R$ 79,90',
      period: '/mês',
      description: 'Consultoria de treino por 1 mês',
      features: [
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
      name: '3 Meses',
      price: 'R$ 199,90',
      period: '/período',
      description: 'Consultoria de treino por 3 meses - Melhor custo-benefício',
      features: [
        'Tudo do plano 1 mês',
        'Chat ilimitado com especialista',
        'Plano nutricional personalizado',
        'Vídeos de técnica exclusivos',
        'Análise de progresso mensal',
      ],
      cta: 'Comprar Agora',
      highlighted: true,
    },
    {
      name: '6 Meses',
      price: 'R$ 299,90',
      period: '/período',
      description: 'Consultoria de treino por 6 meses - Máximo desconto',
      features: [
        'Tudo do plano 3 meses',
        'Programa de suplementação',
        'Avaliação postural com técnicas para melhorar sua postura',
      ],
      cta: 'Comprar Agora',
      highlighted: false,
    },
  ];

  return (
    <section id="assinaturas" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Seção Título */}
        <div className="text-center mb-16">
          <p className="text-accent text-sm md:text-base font-semibold mb-4 uppercase tracking-widest">
            Planos Flexíveis
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6">
            Escolha Seu Plano
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Todos os planos incluem garantia de satisfação de 7 dias. Cancele a qualquer momento.
          </p>
        </div>

        {/* Grid de Planos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-lg overflow-hidden transition-all duration-300 ${
                plan.highlighted
                  ? 'md:scale-105 bg-card border-2 border-accent shadow-2xl'
                  : 'bg-card border border-border hover:border-accent'
              }`}
            >
              {/* Badge para plano destacado */}
              {plan.highlighted && (
                <div className="absolute top-0 left-0 right-0 bg-accent text-primary-foreground text-center py-2 font-bold text-sm">
                  MAIS POPULAR
                </div>
              )}

              {/* Conteúdo do Plano */}
              <div className={`p-8 ${plan.highlighted ? 'pt-16' : ''}`}>
                {/* Nome do Plano */}
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {plan.name}
                </h3>

                {/* Descrição */}
                <p className="text-muted-foreground text-sm mb-6">
                  {plan.description}
                </p>

                {/* Preço */}
                <div className="mb-8">
                  <span className="text-5xl font-black text-accent">
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground ml-2">
                    {plan.period}
                  </span>
                </div>

                {/* CTA Button */}
                <button
                  className={`w-full py-3 rounded-lg font-bold text-lg transition-all duration-300 mb-8 ${
                    plan.highlighted
                      ? 'bg-accent text-primary-foreground hover:bg-accent/90'
                      : 'border-2 border-accent text-accent hover:bg-accent/10'
                  }`}
                  onClick={() => {
                    alert(`Você selecionou o plano ${plan.name}!\n\nEm breve, você será redirecionado para o checkout.`);
                  }}
                >
                  {plan.cta}
                </button>

                {/* Divider */}
                <div className="border-t border-border mb-8"></div>

                {/* Features List */}
                <ul className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check size={20} className="text-accent flex-shrink-0 mt-1" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Link */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">
            Tem dúvidas? Veja nossas perguntas frequentes ou entre em contato.
          </p>
          <button
            className="text-accent font-bold hover:text-accent/80 transition-colors duration-200"
            onClick={() => {
              alert('Abrindo FAQ...');
            }}
          >
            Ver Perguntas Frequentes →
          </button>
        </div>
      </div>
    </section>
  );
}
