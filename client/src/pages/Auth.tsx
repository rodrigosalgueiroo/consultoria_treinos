import { useState } from 'react';
import { Eye, EyeOff, Mail, Lock, User } from 'lucide-react';

/**
 * Auth Page (Login & Cadastro)
 * 
 * Design Philosophy: Dark Theme (Preto, Vermelho)
 * - Formulários responsivos e intuitivos
 * - Alternância entre Login e Cadastro
 * - Tipografia Montserrat (títulos) e Poppins (corpo)
 */

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isLogin) {
      console.log('Login:', { email: formData.email, password: formData.password });
    } else {
      console.log('Cadastro:', formData);
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 py-12">
      {/* Container Principal */}
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-accent mb-2">
            Consultoria<span className="text-foreground">Fit</span>
          </h1>
          <p className="text-muted-foreground text-sm">
            {isLogin ? 'Acesse sua conta' : 'Crie sua conta'}
          </p>
        </div>

        {/* Card de Formulário */}
        <div className="bg-card border border-border rounded-lg p-8 shadow-lg">
          {/* Tabs */}
          <div className="flex gap-4 mb-8">
            <button
              onClick={() => setIsLogin(true)}
              className={`flex-1 py-3 font-bold rounded-lg transition-all duration-300 ${
                isLogin
                  ? 'bg-accent text-primary-foreground'
                  : 'bg-background text-foreground border border-border hover:border-accent'
              }`}
            >
              Entrar
            </button>
            <button
              onClick={() => setIsLogin(false)}
              className={`flex-1 py-3 font-bold rounded-lg transition-all duration-300 ${
                !isLogin
                  ? 'bg-accent text-primary-foreground'
                  : 'bg-background text-foreground border border-border hover:border-accent'
              }`}
            >
              Cadastro
            </button>
          </div>

          {/* Formulário */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Campo Nome (apenas Cadastro) */}
            {!isLogin && (
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                  Nome Completo
                </label>
                <div className="relative">
                  <User size={20} className="absolute left-3 top-3 text-accent" />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Seu nome completo"
                    className="w-full pl-10 pr-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent transition-colors duration-300"
                    required={!isLogin}
                  />
                </div>
              </div>
            )}

            {/* Campo Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                Email
              </label>
              <div className="relative">
                <Mail size={20} className="absolute left-3 top-3 text-accent" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="seu@email.com"
                  className="w-full pl-10 pr-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent transition-colors duration-300"
                  required
                />
              </div>
            </div>

            {/* Campo Senha */}
            <div>
              <label htmlFor="password" className="block text-sm font-semibold text-foreground mb-2">
                Senha
              </label>
              <div className="relative">
                <Lock size={20} className="absolute left-3 top-3 text-accent" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-12 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent transition-colors duration-300"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-muted-foreground hover:text-accent transition-colors"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Campo Confirmar Senha (apenas Cadastro) */}
            {!isLogin && (
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-semibold text-foreground mb-2">
                  Confirmar Senha
                </label>
                <div className="relative">
                  <Lock size={20} className="absolute left-3 top-3 text-accent" />
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    placeholder="••••••••"
                    className="w-full pl-10 pr-12 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent transition-colors duration-300"
                    required={!isLogin}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-3 text-muted-foreground hover:text-accent transition-colors"
                  >
                    {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>
            )}

            {/* Link Esqueci Senha (apenas Login) */}
            {isLogin && (
              <div className="text-right">
                <a href="#" className="text-accent hover:text-accent/80 text-sm font-semibold transition-colors">
                  Esqueci minha senha
                </a>
              </div>
            )}

            {/* Botão Submit */}
            <button
              type="submit"
              className="w-full py-3 bg-accent text-primary-foreground font-bold text-lg rounded-lg hover:bg-accent/90 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              {isLogin ? 'Entrar' : 'Criar Conta'}
            </button>
          </form>

          {/* Divider */}
          <div className="my-6 flex items-center gap-4">
            <div className="flex-1 h-px bg-border"></div>
            <span className="text-muted-foreground text-sm">ou</span>
            <div className="flex-1 h-px bg-border"></div>
          </div>

          {/* Botões Sociais */}
          <div className="space-y-3">
            <button className="w-full py-3 bg-background border border-border text-foreground font-semibold rounded-lg hover:border-accent transition-all duration-300 flex items-center justify-center gap-2">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              Google
            </button>
            <button className="w-full py-3 bg-background border border-border text-foreground font-semibold rounded-lg hover:border-accent transition-all duration-300 flex items-center justify-center gap-2">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              Facebook
            </button>
          </div>

          {/* Link Alternativo */}
          <p className="text-center text-muted-foreground text-sm mt-6">
            {isLogin ? 'Não tem conta? ' : 'Já tem conta? '}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-accent hover:text-accent/80 font-semibold transition-colors"
            >
              {isLogin ? 'Cadastre-se' : 'Faça login'}
            </button>
          </p>
        </div>

        {/* Termos */}
        <p className="text-center text-muted-foreground text-xs mt-6">
          Ao {isLogin ? 'entrar' : 'se cadastrar'}, você concorda com nossos{' '}
          <a href="#" className="text-accent hover:text-accent/80 transition-colors">
            Termos de Serviço
          </a>{' '}
          e{' '}
          <a href="#" className="text-accent hover:text-accent/80 transition-colors">
            Política de Privacidade
          </a>
        </p>
      </div>
    </div>
  );
}
