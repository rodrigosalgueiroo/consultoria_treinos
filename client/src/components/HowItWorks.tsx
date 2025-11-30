import { CheckCircle, Zap, TrendingUp, Award } from 'lucide-react';

/**
 * How It Works Section Component
 * 
 * Design Philosophy: Dark Theme (Preto, Dourado, Cinza)
 * - 4 passos simples e claros
 * - Ícones em Dourado para destaque
 * - Layout responsivo com Grid
 */

export default function HowItWorks() {
  const steps = [
    {
      icon: CheckCircle,
      title: 'Avaliação Inicial',
      description: 'Você deverá preencher o questionário de Anamnese detalhado sobre seu histórico, objetivos e disponibilidade para criar um perfil único.',
    },
    {
      icon: Zap,
      title: 'Plano Personalizado',
      description: 'Receba um plano de treino 100% customizado com exercícios, séries, repetições e progressão semanal.',
    },
    {
      icon: TrendingUp,
      title: 'Acompanhamento Contínuo',
      description: 'Chat ilimitado com nossos especialistas, ajustes semanais e suporte total para garantir seus resultados.',
    },
    {
      icon: Award,
      title: 'Resultados Comprovados',
      description: 'Acompanhe seu progresso com métricas, fotos e depoimentos de clientes que já transformaram seus corpos.',
    },
  ];

  return (
    <section id="como-funciona" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        {/* Seção Título */}
        <div className="text-center mb-16">
          <p className="text-accent text-sm md:text-base font-semibold mb-4 uppercase tracking-widest">
            Processo Simples e Eficaz
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6">
            Como Funciona?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Seguimos um processo comprovado que garante resultados já no primeiro mês.
          </p>
        </div>

        {/* Grid de Passos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="relative bg-background rounded-lg p-8 border border-border hover:border-accent transition-colors duration-300 group"
              >
                {/* Número do Passo */}
                <div className="absolute -top-4 -left-4 w-10 h-10 bg-accent text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg">
                  {index + 1}
                </div>

                {/* Ícone */}
                <div className="mb-6 inline-block p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors duration-300">
                  <Icon size={32} className="text-accent" />
                </div>

                {/* Título */}
                <h3 className="text-xl font-bold text-foreground mb-4">
                  {step.title}
                </h3>

                {/* Descrição */}
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>

                {/* Linha conectora (apenas para desktop) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-accent to-transparent"></div>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA Secundário */}
        <div className="mt-16 text-center">
          <button
            className="px-8 py-4 bg-accent text-primary-foreground font-bold text-lg rounded-lg hover:bg-accent/90 transition-all duration-300 transform hover:scale-105"
            onClick={() => {
              // Rolar suavemente para a seção de planos
              const plansSection = document.getElementById('assinaturas');
              if (plansSection) {
                plansSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Começar Meu Plano Agora
          </button>
        </div>
      </div>
    </section>
  );
}
