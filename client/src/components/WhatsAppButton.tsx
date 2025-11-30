// SVG do logo WhatsApp oficial - Balão de conversa com telefone
const WhatsAppIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="white"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M20.52 3.48C18.25 1.23 15.3 0 12.15 0c-6.67 0-12.1 5.43-12.1 12.1 0 2.13.55 4.2 1.6 6.04L0 24l6.35-1.67c1.76.96 3.77 1.46 5.8 1.46 6.67 0 12.1-5.43 12.1-12.1 0-3.23-1.23-6.27-3.48-8.55zM12.15 21.77c-1.81 0-3.57-.48-5.12-1.4l-.37-.22-3.8 1 1.02-3.72-.24-.38c-1.03-1.63-1.57-3.5-1.57-5.43 0-5.54 4.51-10.05 10.05-10.05 2.68 0 5.2 1.04 7.1 2.94 1.9 1.9 2.95 4.42 2.95 7.1 0 5.54-4.51 10.05-10.05 10.05zm5.5-7.52c-.3-.15-1.77-.87-2.05-.97-.28-.1-.48-.15-.68.15-.2.3-.77.97-.95 1.17-.18.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.49-.9-.8-1.5-1.78-1.68-2.08-.18-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.025-.52-.075-.15-.68-1.63-.93-2.23-.24-.58-.49-.5-.68-.51-.17-.01-.37-.01-.57-.01-.2 0-.52.075-.8.375-.28.3-1.05 1.02-1.05 2.5 0 1.48 1.08 2.9 1.23 3.1.15.2 2.1 3.2 5.1 4.5.71.3 1.27.48 1.71.63.72.23 1.38.2 1.9.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.175-1.42-.075-.12-.275-.2-.575-.35z" />
  </svg>
);

/**
 * WhatsApp Floating Button Component
 * 
 * Design Philosophy: Verde WhatsApp Oficial
 * - Botão flutuante fixo no canto inferior direito
 * - Link direto para conversa no WhatsApp
 * - Número: 82991735070
 * - Cor: Verde oficial WhatsApp (#25D366)
 * - Ícone: Símbolo padrão do WhatsApp
 */

export default function WhatsAppButton() {
  const whatsappNumber = '82991735070';
  const whatsappMessage = 'Olá! Gostaria de tirar algumas dúvidas sobre os planos de consultoria de treino.';
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-40 flex items-center justify-center w-16 h-16 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 group"
      style={{
        backgroundColor: '#25D366',
      }}
      aria-label="Conversar no WhatsApp"
    >
      <WhatsAppIcon />
      
      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-3 bg-white text-gray-800 px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-lg">
        Tire suas dúvidas
      </div>
    </a>
  );
}
