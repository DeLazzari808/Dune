// src/screens/ProfileScreen.jsx
import React from 'react';
import { Edit3, Share2, LogOut } from 'lucide-react';
import { colors, mockUser as defaultMockUser } from '../config'; // Renomeado para evitar conflito

const ProfileScreen = ({ currentUser, onLogout }) => {
  const user = currentUser || defaultMockUser;

  return (
    <div style={{ backgroundColor: colors.pageBg, color: colors.textMain }} className="min-h-full pb-16"> {/* Adicionado pb-16 */}
      <div className="relative h-48 md:h-64">
        <img
          src={user.fotoCapa || 'https://placehold.co/800x300/1E1E1E/E0E0E0?text=Capa'}
          alt="Foto de Capa"
          className="w-full h-full object-cover opacity-70"
          onError={(e) => { e.target.style.visibility = 'hidden'; e.target.parentElement.style.backgroundColor = colors.cardBg; }}
        />
        <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 md:left-8 md:translate-x-0 md:-bottom-16">
          <img
            src={user.fotoPerfil}
            alt="Foto de Perfil"
            className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 object-cover"
            style={{ borderColor: colors.pageBg, backgroundColor: colors.cardBg }}
            onError={(e) => e.target.src = `https://placehold.co/128x128/1E1E1E/E0E0E0?text=${user.nome ? user.nome.substring(0,1) : 'P'}`}
          />
        </div>
      </div>
      <div className="pt-16 md:pt-20 px-4 md:px-8 pb-8">
        <div className="text-center md:text-left md:ml-0 lg:ml-40">
          <h2 className="text-2xl md:text-3xl font-bold uppercase" style={{ color: colors.accent }}>{user.nome}</h2>
          <p className="text-sm font-semibold" style={{ color: colors.textSecondary }}>{user.tipo}</p>
          <p className="mt-2 text-sm max-w-xl mx-auto md:mx-0" style={{ color: colors.textSecondary }}>
            {user.bio || "Bio não informada."}
          </p>
        </div>
        <div className="mt-8 flex flex-col sm:flex-row justify-center md:justify-start space-y-2 sm:space-y-0 sm:space-x-3">
            <button className="px-4 py-2 text-sm font-medium rounded-lg flex items-center justify-center border hover:bg-opacity-70" style={{backgroundColor: colors.buttonBg, color: colors.buttonText, borderColor: colors.buttonBorder}}>
                <Edit3 size={16} className="mr-2"/> Editar Perfil
            </button>
            <button className="px-4 py-2 text-sm font-medium rounded-lg border flex items-center justify-center hover:bg-opacity-70" style={{backgroundColor: colors.buttonBg, color: colors.buttonText, borderColor: colors.buttonBorder}}>
                <Share2 size={16} className="mr-2" style={{color: colors.textSecondary}}/> Compartilhar
            </button>
        </div>
        <div className="mt-10">
          <h3 className="text-xl font-semibold mb-4 uppercase" style={{ color: colors.accent }}>Portfólio</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {(user.portfolio || []).map(item => (
              <div key={item.id} className="rounded-lg overflow-hidden shadow aspect-w-3 aspect-h-4" style={{backgroundColor: colors.cardBg}}>
                <img src={item.url} alt={item.legenda} className="w-full h-full object-cover" onError={(e) => e.target.src = 'https://placehold.co/300x400/1E1E1E/E0E0E0?text=Erro'}/>
              </div>
            ))}
            {(user.portfolio || []).length === 0 && <p className="text-sm col-span-full" style={{color: colors.textSecondary}}>Nenhum item no portfólio.</p>}
          </div>
        </div>
        <div className="mt-10">
          <h3 className="text-xl font-semibold mb-4 uppercase" style={{ color: colors.accent }}>Experiência</h3>
          <div className="space-y-4">
            {(user.experiencias || []).map(exp => (
              <div key={exp.id} className="p-4 rounded-lg shadow" style={{backgroundColor: colors.cardBg}}>
                <h4 className="font-semibold" style={{color: colors.textMain}}>{exp.nome} <span className="text-xs font-normal" style={{color: colors.textSecondary}}>({exp.data})</span></h4>
                <p className="text-sm" style={{color: colors.textSecondary}}>{exp.cliente} - {exp.papel}</p>
              </div>
            ))}
            {(user.experiencias || []).length === 0 && <p className="text-sm" style={{color: colors.textSecondary}}>Nenhuma experiência listada.</p>}
          </div>
        </div>
        <div className="mt-10">
            <button onClick={onLogout} className="w-full md:w-auto flex items-center justify-center px-6 py-3 border rounded-lg shadow-sm text-sm font-medium hover:bg-opacity-90" style={{ backgroundColor: colors.originalChumbo, color: colors.originalTextHighlightInv, borderColor: colors.originalChumbo }}>
                <LogOut size={18} className="mr-2"/> Sair
            </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen; 