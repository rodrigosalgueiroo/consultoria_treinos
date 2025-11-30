import { useState } from 'react';
import { ShoppingCart, Menu, X, User } from 'lucide-react';

/**
 * Header Component
 * 
 * Design Philosophy: Dark Theme (Preto, Vermelho)
 * - Menu fixo no topo com navegação clara
 * - Responsivo com menu mobile hamburger
 * - Ícone de carrinho à direita
 * - Tipografia Montserrat (títulos) e Poppins (corpo)
 */

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { label: 'Página Inicial', href: '/' },
    { label: 'Como Funciona?', href: '#como-funciona' },
    { label: 'Loja Online', href: '/loja' },
    { label: 'Assinaturas', href: '#assinaturas' },
    { label: 'Área do Aluno', href: '#aluno' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border">
      <nav className="w-full px-8 py-10 flex items-center justify-between">
        {/* Logo */}
        <div className="flex flex-col">
          <h1 className="text-xl font-bold text-accent">
            Consultoria<span className="text-foreground">Fit</span>
          </h1>
        </div>

        {/* Menu Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-foreground hover:text-accent transition-colors duration-200 font-bold text-lg"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Perfil, Entrar, Carrinho e Menu Mobile */}
        <div className="flex items-center gap-4">
          {/* Ícone Perfil e Botão Entrar (Desktop) */}
          <div className="hidden md:flex items-center gap-3">
            {/* Ícone Perfil */}
            <button
              className="p-2 rounded-lg transition-colors duration-200"
              aria-label="Meu perfil"
            >
              <User size={24} className="text-accent" />
            </button>

            {/* Botão Entrar */}
            <a
              href="/login"
              className="px-4 py-2 text-accent border-2 border-accent rounded-lg hover:bg-accent hover:text-primary-foreground transition-all duration-200 font-semibold text-base"
            >
              Entrar
            </a>
          </div>

          {/* Ícone Carrinho */}
          <button
            className="relative p-2 hover:bg-secondary rounded-lg transition-colors duration-200"
            aria-label="Carrinho de compras"
          >
            <ShoppingCart size={24} className="text-accent" />
            <span className="absolute top-1 right-1 bg-accent text-primary-foreground text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
              0
            </span>
          </button>

          {/* Menu Mobile Toggle */}
          <button
            className="md:hidden p-2 hover:bg-secondary rounded-lg transition-colors duration-200"
            onClick={toggleMenu}
            aria-label="Menu"
          >
            {isMenuOpen ? (
              <X size={24} className="text-accent" />
            ) : (
              <Menu size={24} className="text-accent" />
            )}
          </button>
        </div>
      </nav>

      {/* Menu Mobile */}
      {isMenuOpen && (
        <div className="md:hidden bg-card border-t border-border">
          <ul className="px-8 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-foreground hover:text-accent transition-colors duration-200 font-medium block py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
