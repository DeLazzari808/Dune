import React, { useState } from 'react';
import { Mail, Lock } from 'lucide-react';
import { colors } from '../config';

function LoginScreen({ onLogin }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [tipoPerfil, setTipoPerfil] = useState('Modelo');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nome && email && tipoPerfil) {
      onLogin({ 
        nome, 
        email, 
        tipo: tipoPerfil, 
        fotoPerfil: `https://placehold.co/100x100/${colors.originalChumbo.substring(1)}/FFFFFF?text=${nome.substring(0,2).toUpperCase()}` 
      });
    } else {
      alert("Por favor, preencha todos os campos.");
    }
  };

  const perfilOptions = ["Modelo", "Marca", "Agencia", "Designer"];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4" style={{ backgroundColor: colors.pageBg }}>
      <div className="w-full max-w-md p-8 rounded-xl shadow-2xl" style={{backgroundColor: colors.cardBg}}>
        <h1 className="text-4xl font-bold text-center mb-2" style={{ color: colors.accent }}>
          Fancy App
        </h1>
        <p className="text-center text-lg mb-8" style={{ color: colors.textSecondary }}>Conectando talentos da moda.</p>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="nome" className="block text-sm font-medium" style={{ color: colors.textMain }}>Nome Completo</label>
            <input
              type="text" id="nome" value={nome} onChange={(e) => setNome(e.target.value)}
              className="mt-1 block w-full px-4 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-1 sm:text-sm"
              style={{ backgroundColor: colors.cardBg, borderColor: colors.borderLight, color: colors.textMain, caretColor: colors.accent, '--tw-ring-color': colors.accent }}
              placeholder="Seu nome"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium" style={{ color: colors.textMain }}>E-mail</label>
            <input
              type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-4 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-1 sm:text-sm"
              style={{ backgroundColor: colors.cardBg, borderColor: colors.borderLight, color: colors.textMain, caretColor: colors.accent, '--tw-ring-color': colors.accent }}
              placeholder="seu@email.com"
            />
          </div>
          <div>
            <label htmlFor="tipoPerfil" className="block text-sm font-medium" style={{ color: colors.textMain }}>Tipo de Perfil</label>
            <select
              id="tipoPerfil" value={tipoPerfil} onChange={(e) => setTipoPerfil(e.target.value)}
              className="mt-1 block w-full px-4 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-1 sm:text-sm"
              style={{ backgroundColor: colors.cardBg, borderColor: colors.borderLight, color: colors.textMain, '--tw-ring-color': colors.accent }}
            >
              {perfilOptions.map(option => (
                <option key={option} value={option} style={{backgroundColor: colors.cardBg, color: colors.textMain}}>{option}</option>
              ))}
            </select>
          </div>
          <button
            type="submit"
            className="w-full flex justify-center py-3 px-4 rounded-lg shadow-sm text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 hover:bg-opacity-80"
            style={{ backgroundColor: colors.buttonBg, color: colors.buttonText, '--tw-ring-color': colors.accent }}
          >
            Entrar no Fancy
          </button>
        </form>
        <p className="mt-6 text-xs text-center" style={{color: colors.link}}>
          Ao continuar, você concorda com nossos <a href="#" className="font-medium hover:underline" style={{color: colors.accent}}>Termos de Serviço</a> e <a href="#" className="font-medium hover:underline" style={{color: colors.accent}}>Política de Privacidade</a>.
        </p>
      </div>
    </div>
  );
}

export default LoginScreen; 