import Header from '@/components/Header';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import Plans from '@/components/Plans';
import Support from '@/components/Support';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

/**
 * Home Page
 * 
 * Design Philosophy: Dark Theme (Preto, Dourado, Cinza)
 * - Estrutura responsiva mobile-first
 * - Tipografia Montserrat (títulos) e Poppins (corpo)
 * - Paleta: Preto (#0A0A0A), Dourado (#FFC300), Cinza (#CCCCCC, #888888, #333333)
 * 
 * Seções:
 * 1. Header - Navegação fixa com menu responsivo
 * 2. Hero - Seção de impacto com CTA principal
 * 3. Como Funciona - 4 passos do processo
 * 4. Planos - 3 opções de assinatura
 * 5. Footer - Navegação e contato
 */

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header Fixo */}
      <Header />

      {/* Conteúdo Principal */}
      <main>
        {/* Hero Section */}
        <Hero />

        {/* Como Funciona */}
        <HowItWorks />

        {/* Planos e Preços */}
        <Plans />

        {/* Suporte */}
        <Support />
      </main>

      {/* Footer */}
      <Footer />

      {/* Botão Flutuante WhatsApp */}
      <WhatsAppButton />
    </div>
  );
}
