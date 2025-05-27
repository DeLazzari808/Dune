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
    <div className="min-h-screen flex flex-col items-center justify-center p-4 overflow-x-hidden" style={{ backgroundColor: colors.pageBg }}> {/* Adicionado overflow-x-hidden */}
      <div 
        // AJUSTES PRINCIPAIS AQUI:
        // Removido w-full para não tentar ocupar toda a largura do contêiner flex
        // Mantido max-w-sm para um tamanho mais compacto
        // Adicionado mx-auto para centralizar o card horizontalmente se o contêiner pai for flex
        className="max-w-sm w-11/12 p-6 rounded-xl" // Experimente w-11/12 ou w-10/12 para um pouco de responsividade
        style={{
          backgroundColor: colors.cardBg,
          boxShadow: '0 0 25px 5px rgba(255, 255, 255, 0.05), 0 0 10px 0 rgba(255, 255, 255, 0.03)' // Sombra um pouco mais pronunciada
        }}
      >
        <h1 className="text-3xl font-bold text-center mb-1" style={{ color: colors.accent }}>
          Fancy App
        </h1>
        <p className="text-center text-base mb-6" style={{ color: colors.textSecondary }}>Conectando talentos da moda.</p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="nome" className="block text-xs font-medium mb-1" style={{ color: colors.textMain }}>Nome Completo</label>
            <input
              type="text" id="nome" value={nome} onChange={(e) => setNome(e.target.value)}
              className={`block w-full px-3 py-2.5 rounded-md shadow-sm sm:text-sm ${focusInputStyle}`}
              style={inputStyle}
              placeholder="Seu nome"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-xs font-medium mb-1" style={{ color: colors.textMain }}>E-mail</label>
            <input
              type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)}
              className={`block w-full px-3 py-2.5 rounded-md shadow-sm sm:text-sm ${focusInputStyle}`}
              style={inputStyle}
              placeholder="seu@email.com"
            />
          </div>
          <div>
            <label htmlFor="tipoPerfil" className="block text-xs font-medium mb-1" style={{ color: colors.textMain }}>Tipo de Perfil</label>
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
            className="w-full flex justify-center py-2.5 px-4 rounded-lg shadow-sm text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 hover:opacity-90"
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
        <p className="mt-4 text-xs text-center" style={{color: colors.link}}>
          Ao continuar, você concorda com nossos <a href="#" className="font-medium hover:underline" style={{color: colors.accent}}>Termos de Serviço</a> e <a href="#" className="font-medium hover:underline" style={{color: colors.accent}}>Política de Privacidade</a>.
        </p>
      </div>
    </div>
  );
};

export default LoginScreen;