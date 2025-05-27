// src/screens/ProfileScreen.jsx
import React from 'react';
import { Edit3, Share2, LogOut, Camera, MapPin, Mail, Phone, Instagram, Linkedin, Globe } from 'lucide-react';
import { colors } from '../config'; // mockUser é passado como 'user' via props

const ProfileScreen = ({ user, onLogout, onBack }) => { // onBack adicionado como prop
  // Se user não for passado, usar um fallback, mas o ideal é que App.jsx sempre passe o currentUser
  const profileUser = user || { 
    nome: 'Usuário', tipo: 'Indefinido', fotoCapa: '', fotoPerfil: '', bio: '', 
    portfolio: [], experiencias: [], links: {}, localizacao: '', email: '', telefone: '',
    campanhas: 0, seguidores: 0, avaliacao: 0
  };


  return (
    <div style={{ backgroundColor: colors.pageBg, color: colors.textMain }} className="min-h-full pb-16">
      <div className="relative h-48 md:h-64">
        <img
          src={profileUser.fotoCapa || 'https://placehold.co/800x300/1E1E1E/E0E0E0?text=Capa'}
          alt="Foto de Capa"
          className="w-full h-full object-cover opacity-70"
          onError={(e) => { e.target.style.visibility = 'hidden'; if (e.target.parentElement) e.target.parentElement.style.backgroundColor = colors.cardBg; }}
        />
        {/* Botão de Voltar no Header do Perfil (opcional, mas pode ser útil) */}
        {onBack && (
            <button onClick={onBack} className="absolute top-4 left-4 bg-black bg-opacity-40 text-white p-2 rounded-full hover:bg-opacity-60 transition-colors z-20">
                 <ArrowLeft size={24} />
            </button>
        )}
        <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 md:left-8 md:translate-x-0 md:-bottom-16">
          <div className="relative">
            <img
              src={profileUser.fotoPerfil}
              alt="Foto de Perfil"
              className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 object-cover"
              style={{ borderColor: colors.pageBg, backgroundColor: colors.cardBg }}
              onError={(e) => e.target.src = `https://placehold.co/128x128/1E1E1E/E0E0E0?text=${profileUser.nome ? profileUser.nome.substring(0,1) : 'P'}`}
            />
             <button className="absolute bottom-1 right-1 p-1.5 rounded-full" style={{ backgroundColor: colors.accent, color: colors.originalChumbo }}>
                <Camera size={16} />
            </button>
          </div>
        </div>
      </div>
      <div className="pt-20 px-4 md:px-8 pb-8"> {/* Aumentado pt para compensar foto maior */}
        <div className="text-center md:text-left md:ml-0 lg:ml-40"> {/* Ajuste se necessário com base no tamanho da foto */}
          <h1 className="text-2xl font-bold uppercase" style={{ color: colors.accent }}>{profileUser.nome}</h1>
          <p className="text-sm" style={{ color: colors.textSecondary }}>{profileUser.tipo}</p>
        </div>

        {/* Botões Editar Perfil / Compartilhar */}
        <div className="mt-4 flex flex-col sm:flex-row justify-center md:justify-start md:ml-0 lg:ml-40 space-y-2 sm:space-y-0 sm:space-x-3 mb-6">
            <button className="px-4 py-2 text-sm font-medium rounded-lg flex items-center justify-center border hover:bg-opacity-70" style={{backgroundColor: colors.buttonBg, color: colors.buttonText, borderColor: colors.buttonBorder}}>
                <Edit3 size={16} className="mr-2"/> Editar Perfil
            </button>
            <button className="px-4 py-2 text-sm font-medium rounded-lg border flex items-center justify-center hover:bg-opacity-70" style={{backgroundColor: colors.buttonBg, color: colors.buttonText, borderColor: colors.buttonBorder}}>
                <Share2 size={16} className="mr-2" style={{color: colors.textSecondary}}/> Compartilhar
            </button>
        </div>
        
        {/* Bio */}
        {profileUser.bio && <p className="text-sm mb-6" style={{ color: colors.textMain }}>{profileUser.bio}</p>}


        {/* Informações de contato */}
        <div className="space-y-2 mb-6 border-t border-b py-4" style={{borderColor: colors.borderLight}}>
          {profileUser.localizacao && (
            <div className="flex items-center text-sm" style={{ color: colors.textSecondary }}> <MapPin size={16} className="mr-2 flex-shrink-0" /> <span>{profileUser.localizacao}</span> </div>
          )}
          {profileUser.email && (
            <div className="flex items-center text-sm" style={{ color: colors.textSecondary }}> <Mail size={16} className="mr-2 flex-shrink-0" /> <span>{profileUser.email}</span> </div>
          )}
          {profileUser.telefone && (
            <div className="flex items-center text-sm" style={{ color: colors.textSecondary }}> <Phone size={16} className="mr-2 flex-shrink-0" /> <span>{profileUser.telefone}</span> </div>
          )}
        </div>

        {/* Redes sociais */}
        {(profileUser.links?.instagram || profileUser.links?.linkedin || profileUser.links?.website) && (
            <div className="flex space-x-4 mb-8">
                {profileUser.links.instagram && ( <a href={profileUser.links.instagram.startsWith('http') ? profileUser.links.instagram : `https://instagram.com/${profileUser.links.instagram}`} target="_blank" rel="noopener noreferrer" style={{ color: colors.textSecondary }} className="hover:text-accent"> <Instagram size={24} /> </a> )}
                {profileUser.links.linkedin && ( <a href={profileUser.links.linkedin.startsWith('http') ? profileUser.links.linkedin : `https://linkedin.com/in/${profileUser.links.linkedin}`} target="_blank" rel="noopener noreferrer" style={{ color: colors.textSecondary }} className="hover:text-accent"> <Linkedin size={24} /> </a> )}
                {profileUser.links.website && ( <a href={profileUser.links.website.startsWith('http') ? profileUser.links.website : `https://${profileUser.links.website}`} target="_blank" rel="noopener noreferrer" style={{ color: colors.textSecondary }} className="hover:text-accent"> <Globe size={24} /> </a> )}
            </div>
        )}

        {/* Portfólio */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-4 uppercase" style={{ color: colors.accent }}>Portfólio</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-4">
            {(profileUser.portfolio || []).map((item) => (
              <div key={item.id} className="relative aspect-[3/4] rounded-lg overflow-hidden group" style={{backgroundColor: colors.cardBg}}>
                <img src={item.url} alt={item.legenda || "Item do Portfólio"} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"/>
                {item.legenda && <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/70 to-transparent"><p className="text-xs font-medium text-white truncate">{item.legenda}</p></div>}
              </div>
            ))}
            {(profileUser.portfolio || []).length === 0 && <p className="text-sm col-span-full" style={{color: colors.textSecondary}}>Nenhum item no portfólio.</p>}
          </div>
        </div>

        {/* Estatísticas (Exemplo) */}
        <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-8">
          <div className="text-center p-3 sm:p-4 rounded-lg" style={{ backgroundColor: colors.cardBg }}>
            <p className="text-xl sm:text-2xl font-bold" style={{ color: colors.textMain }}>{profileUser.campanhas || 0}</p>
            <p className="text-xs sm:text-sm" style={{ color: colors.textSecondary }}>Campanhas</p>
          </div>
          <div className="text-center p-3 sm:p-4 rounded-lg" style={{ backgroundColor: colors.cardBg }}>
            <p className="text-xl sm:text-2xl font-bold" style={{ color: colors.textMain }}>{profileUser.seguidores || 0}</p>
            <p className="text-xs sm:text-sm" style={{ color: colors.textSecondary }}>Seguidores</p>
          </div>
          <div className="text-center p-3 sm:p-4 rounded-lg" style={{ backgroundColor: colors.cardBg }}>
            <p className="text-xl sm:text-2xl font-bold" style={{ color: colors.textMain }}>{profileUser.avaliacao || 0}/5</p>
            <p className="text-xs sm:text-sm" style={{ color: colors.textSecondary }}>Avaliação</p>
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