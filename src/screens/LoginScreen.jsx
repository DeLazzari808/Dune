// src/screens/LoginScreen.jsx
import React, { useState } from 'react';
import { colors } from '../config'; // Importa as cores

const LoginScreen = ({ onLogin }) => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [tipoPerfil, setTipoPerfil] = useState('Modelo');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nome && email && tipoPerfil) {
      onLogin({ nome, email, tipo: tipoPerfil, fotoPerfil: `https://placehold.co/100x100/${colors.originalChumbo.substring(1)}/FFFFFF?text=${nome.substring(0,2).toUpperCase()}` });
    } else {
      alert("Por favor, preencha todos os campos.");
    }
  };

  const perfilOptions = ["Modelo", "Marca", "Agencia", "Designer"];

  const inputStyle = {
    backgroundColor: colors.inputBg,
    borderColor: colors.borderLight,
    color: colors.textMain,
    caretColor: colors.accent,
    borderWidth: '1px',
    borderStyle: 'solid',
    boxShadow: 'none',
  };
  
  const focusInputStyle = `focus:outline-none focus:border-[${colors.textSecondary}]`; 

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 overflow-x-hidden" style={{ backgroundColor: colors.pageBg }}>
      <div 
        // Mantendo suas classes e estilos que funcionaram para o tamanho e centralização
        className="w-full max-w-sm p-6 rounded-xl mx-auto relative" 
        style={{
          backgroundColor: colors.cardBg,
          // Sombra um pouco mais suave, similar à que tínhamos antes no Canvas
          boxShadow: '0 0 25px 5px rgba(0, 0, 0, 0.15), 0 0 10px 0 rgba(0, 0, 0, 0.1)', 
          // Garantindo que as propriedades de largura que você adicionou estejam aqui se você as quiser explicitamente
          // Embora max-w-sm e w-full com mx-auto devam ser suficientes
          // width: '100%', // Se você precisar forçar, mas max-w-sm deve limitar
          // maxWidth: '24rem', // Tailwind max-w-sm é 24rem
        }}
      >
        {/* Aumentando um pouco a margem inferior do título e do subtítulo */}
        <h1 className="text-3xl font-bold text-center mb-2" style={{ color: colors.accent }}> {/* Aumentado mb de 1 para 2 */}
          Fancy App
        </h1>
        <p className="text-center text-base mb-8" style={{ color: colors.textSecondary }}>Conectando talentos da moda.</p> {/* Aumentado mb de 6 para 8 */}
        
        {/* Aumentando um pouco o espaçamento entre os elementos do formulário */}
        <form onSubmit={handleSubmit} className="space-y-5"> {/* Aumentado space-y de 4 para 5 */}
          <div>
            {/* Aumentando um pouco a margem inferior da label */}
            <label htmlFor="nome" className="block text-xs font-medium mb-1.5" style={{ color: colors.textMain }}>Nome Completo</label> {/* Aumentado mb de 1 para 1.5 */}
            <input
              type="text" id="nome" value={nome} onChange={(e) => setNome(e.target.value)}
              // Mantendo py-2.5 para os inputs, parece bom
              className={`block w-full px-3 py-2.5 rounded-md shadow-sm sm:text-sm ${focusInputStyle}`}
              style={inputStyle}
              placeholder="Seu nome"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-xs font-medium mb-1.5" style={{ color: colors.textMain }}>E-mail</label>
            <input
              type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)}
              className={`block w-full px-3 py-2.5 rounded-md shadow-sm sm:text-sm ${focusInputStyle}`}
              style={inputStyle}
              placeholder="seu@email.com"
            />
          </div>
          <div>
            <label htmlFor="tipoPerfil" className="block text-xs font-medium mb-1.5" style={{ color: colors.textMain }}>Tipo de Perfil</label>
            <select
              id="tipoPerfil" value={tipoPerfil} onChange={(e) => setTipoPerfil(e.target.value)}
              className={`block w-full px-3 py-2.5 rounded-md shadow-sm sm:text-sm ${focusInputStyle}`}
              style={inputStyle}
            >
              {perfilOptions.map(option => (
                <option key={option} value={option} style={{backgroundColor: colors.cardBg, color: colors.textMain}}>{option}</option>
              ))}
            </select>
          </div>
          <button
            type="submit"
            // Podemos tentar um padding vertical um pouco maior no botão para dar mais destaque
            className="w-full flex justify-center py-3 px-4 rounded-lg shadow-sm text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 hover:opacity-90" // py-3 em vez de py-2.5
            style={{ 
              backgroundColor: colors.buttonBg,
              color: colors.buttonText,
              borderColor: colors.buttonBorder,
              borderWidth: '1px',
              borderStyle: 'solid',
              '--tw-ring-color': colors.buttonBorder,
              '--tw-ring-offset-color': colors.cardBg
            }}
          >
            Entrar no Fancy
          </button>
        </form>
        {/* Aumentando um pouco a margem superior do parágrafo final */}
        <p className="mt-6 text-xs text-center" style={{color: colors.link}}> {/* Aumentado mt de 4 para 6 */}
          Ao continuar, você concorda com nossos <a href="#" className="font-medium hover:underline" style={{color: colors.accent}}>Termos de Serviço</a> e <a href="#" className="font-medium hover:underline" style={{color: colors.accent}}>Política de Privacidade</a>.
        </p>
      </div>
    </div>
  );
};

export default LoginScreen;