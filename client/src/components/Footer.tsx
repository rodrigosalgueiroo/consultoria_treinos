import { Facebook, Instagram, Twitter, Mail, Phone } from 'lucide-react';

/**
 * Footer Component
 * 
 * Design Philosophy: Dark Theme (Preto, Dourado, Cinza)
 * - Navegação útil e informações de contato
 * - Redes sociais com ícones
 * - Responsivo e bem organizado
 */

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-16">
        {/* Grid Principal */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Coluna 1: Sobre */}
          <div>
            <h4 className="text-lg font-bold text-accent mb-4">ConsultoriaFit</h4>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Transformando corpos e vidas através de consultoria de treino personalizada e acompanhamento especializado.
            </p>
          </div>

          {/* Coluna 2: Links Rápidos */}
          <div>
            <h5 className="font-bold text-foreground mb-4">Links Rápidos</h5>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-muted-foreground hover:text-accent transition-colors text-sm">
                  Página Inicial
                </a>
              </li>
              <li>
                <a href="#como-funciona" className="text-muted-foreground hover:text-accent transition-colors text-sm">
                  Como Funciona
                </a>
              </li>
              <li>
                <a href="#assinaturas" className="text-muted-foreground hover:text-accent transition-colors text-sm">
                  Assinaturas
                </a>
              </li>
              <li>
                <a href="#loja" className="text-muted-foreground hover:text-accent transition-colors text-sm">
                  Loja Online
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Suporte */}
          <div>
            <h5 className="font-bold text-foreground mb-4">Suporte</h5>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-accent transition-colors text-sm">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-accent transition-colors text-sm">
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-accent transition-colors text-sm">
                  Termos de Serviço
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 4: Contato */}
          <div>
            <h5 className="font-bold text-foreground mb-4">Entre em Contato</h5>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-accent" />
                <a href="mailto:contato@consultoriafit.com" className="text-muted-foreground hover:text-accent transition-colors text-sm">
                  rodrigosalgueiroconsultoriafit@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-accent" />
                <a href="tel:+5511999999999" className="text-muted-foreground hover:text-accent transition-colors text-sm">
                  +55 (82) 99173-5070
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Copyright */}
          <p className="text-muted-foreground text-sm">
            &copy; {currentYear} ConsultoriaFit. Todos os direitos reservados.
          </p>

          {/* Redes Sociais */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.facebook.com/rodrigo.salgueiro.963/"
              className="p-2 bg-secondary hover:bg-accent hover:text-primary-foreground rounded-lg transition-all duration-300"
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </a>
            <a
              href="https://www.instagram.com/rodrigosalgueiro.0/"
              className="p-2 bg-secondary hover:bg-accent hover:text-primary-foreground rounded-lg transition-all duration-300"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              href="#"
              className="p-2 bg-secondary hover:bg-accent hover:text-primary-foreground rounded-lg transition-all duration-300"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
