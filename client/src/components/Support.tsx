import { MessageCircle, Mail, Phone } from 'lucide-react';

/**
 * Support Section Component
 * 
 * Design Philosophy: Dark Theme (Preto, Vermelho)
 * - Seção dedicada para suporte e dúvidas
 * - Links para WhatsApp, Email e Telefone
 * - Layout responsivo
 */

export default function Support() {
  const whatsappNumber = '82991735070';
  const whatsappMessage = 'Olá! Gostaria de tirar algumas dúvidas sobre os planos de consultoria de treino.';
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section id="suporte" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Seção Título */}
        <div className="text-center mb-16">
          <p className="text-accent text-sm md:text-base font-semibold mb-4 uppercase tracking-widest">
            Suporte e Dúvidas
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6">
            Tire Suas Dúvidas
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Nossa equipe está pronta para ajudar você a escolher o melhor plano e responder todas as suas dúvidas.
          </p>
        </div>

        {/* Grid de Contato */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* WhatsApp */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-card border border-border rounded-lg p-8 text-center hover:border-accent transition-all duration-300 group cursor-pointer"
          >
            <div className="inline-block p-4 bg-accent/10 rounded-lg mb-6 group-hover:bg-accent/20 transition-colors duration-300">
              <MessageCircle size={40} className="text-accent" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">WhatsApp</h3>
            <p className="text-muted-foreground mb-4">
              Converse conosco em tempo real
            </p>
            <div className="mt-4 inline-block px-6 py-2 bg-accent text-primary-foreground rounded-lg font-semibold text-sm group-hover:bg-accent/90 transition-colors duration-300">
              Iniciar Conversa
            </div>
          </a>

          {/* Email */}
          <a
            href="mailto:contato@consultoriafit.com"
            className="bg-card border border-border rounded-lg p-8 text-center hover:border-accent transition-all duration-300 group cursor-pointer"
          >
            <div className="inline-block p-4 bg-accent/10 rounded-lg mb-6 group-hover:bg-accent/20 transition-colors duration-300">
              <Mail size={40} className="text-accent" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">Email</h3>
            <p className="text-muted-foreground mb-4">
              Envie sua dúvida por email
            </p>
            <p className="text-accent font-bold text-lg break-all">
              rodrigosalgueiroconsultoriafit@gmail.com
            </p>
            <div className="mt-4 inline-block px-6 py-2 bg-accent text-primary-foreground rounded-lg font-semibold text-sm group-hover:bg-accent/90 transition-colors duration-300">
              Enviar Email
            </div>
          </a>

          {/* Telefone */}
          <a
            href="tel:+5582991735070"
            className="bg-card border border-border rounded-lg p-8 text-center hover:border-accent transition-all duration-300 group cursor-pointer"
          >
            <div className="inline-block p-4 bg-accent/10 rounded-lg mb-6 group-hover:bg-accent/20 transition-colors duration-300">
              <Phone size={40} className="text-accent" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">Telefone</h3>
            <p className="text-muted-foreground mb-4">
              Ligue para falar conosco
            </p>
            <div className="mt-4 inline-block px-6 py-2 bg-accent text-primary-foreground rounded-lg font-semibold text-sm group-hover:bg-accent/90 transition-colors duration-300">
              Ligar Agora
            </div>
          </a>
        </div>

        {/* Informações Adicionais */}
        <div className="mt-16 bg-card border border-border rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Horário de Atendimento
          </h3>
          <p className="text-muted-foreground text-lg mb-2">
            Segunda a Sexta: 09:00 - 18:00
          </p>
          <p className="text-muted-foreground text-lg">
            Sábado: 10:00 - 14:00
          </p>
          <p className="text-accent font-semibold mt-4">
            Respondemos em até 2 horas!
          </p>
        </div>
      </div>
    </section>
  );
}
