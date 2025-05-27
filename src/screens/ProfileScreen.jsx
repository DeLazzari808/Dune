// src/screens/ProfileScreen.jsx
import React from 'react';
import { Camera, MapPin, Mail, Phone, Instagram, Linkedin, Globe } from 'lucide-react';
import { colors } from '../config';

function ProfileScreen({ user, onLogout }) {
  return (
    <div className="min-h-screen" style={{ backgroundColor: colors.pageBg }}>
      {/* Header com foto de capa e perfil */}
      <div className="relative">
        <div className="h-48 w-full" style={{ backgroundColor: colors.originalChumbo }}>
          <img 
            src={user.fotoCapa} 
            alt="Capa" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute -bottom-16 left-4">
          <div className="relative">
            <img 
              src={user.fotoPerfil} 
              alt="Perfil" 
              className="w-32 h-32 rounded-full border-4"
              style={{ borderColor: colors.cardBg }}
            />
            <button className="absolute bottom-0 right-0 p-2 rounded-full" style={{ backgroundColor: colors.accent }}>
              <Camera size={20} color={colors.buttonText} />
            </button>
          </div>
        </div>
      </div>

      {/* Informações do perfil */}
      <div className="pt-20 px-4">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h1 className="text-2xl font-bold" style={{ color: colors.textMain }}>{user.nome}</h1>
            <p className="text-sm" style={{ color: colors.textSecondary }}>{user.tipo}</p>
          </div>
          <button 
            onClick={onLogout}
            className="px-4 py-2 rounded-lg text-sm font-medium"
            style={{ backgroundColor: colors.buttonBg, color: colors.buttonText }}
          >
            Sair
          </button>
        </div>

        {/* Bio */}
        <p className="text-sm mb-6" style={{ color: colors.textMain }}>{user.bio}</p>

        {/* Informações de contato */}
        <div className="space-y-3 mb-6">
          {user.localizacao && (
            <div className="flex items-center text-sm" style={{ color: colors.textSecondary }}>
              <MapPin size={16} className="mr-2" />
              <span>{user.localizacao}</span>
            </div>
          )}
          {user.email && (
            <div className="flex items-center text-sm" style={{ color: colors.textSecondary }}>
              <Mail size={16} className="mr-2" />
              <span>{user.email}</span>
            </div>
          )}
          {user.telefone && (
            <div className="flex items-center text-sm" style={{ color: colors.textSecondary }}>
              <Phone size={16} className="mr-2" />
              <span>{user.telefone}</span>
            </div>
          )}
        </div>

        {/* Redes sociais */}
        <div className="flex space-x-4 mb-8">
          {user.instagram && (
            <a href={user.instagram} target="_blank" rel="noopener noreferrer" style={{ color: colors.accent }}>
              <Instagram size={24} />
            </a>
          )}
          {user.linkedin && (
            <a href={user.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: colors.accent }}>
              <Linkedin size={24} />
            </a>
          )}
          {user.website && (
            <a href={user.website} target="_blank" rel="noopener noreferrer" style={{ color: colors.accent }}>
              <Globe size={24} />
            </a>
          )}
        </div>

        {/* Portfólio */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-4" style={{ color: colors.textMain }}>Portfólio</h2>
          <div className="grid grid-cols-2 gap-4">
            {user.portfolio.map((item, index) => (
              <div key={index} className="relative aspect-[3/4] rounded-lg overflow-hidden">
                <img 
                  src={item.url} 
                  alt={item.titulo} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent">
                  <p className="text-sm font-medium text-white">{item.titulo}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Estatísticas */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="text-center p-4 rounded-lg" style={{ backgroundColor: colors.cardBg }}>
            <p className="text-2xl font-bold" style={{ color: colors.textMain }}>{user.campanhas}</p>
            <p className="text-sm" style={{ color: colors.textSecondary }}>Campanhas</p>
          </div>
          <div className="text-center p-4 rounded-lg" style={{ backgroundColor: colors.cardBg }}>
            <p className="text-2xl font-bold" style={{ color: colors.textMain }}>{user.seguidores}</p>
            <p className="text-sm" style={{ color: colors.textSecondary }}>Seguidores</p>
          </div>
          <div className="text-center p-4 rounded-lg" style={{ backgroundColor: colors.cardBg }}>
            <p className="text-2xl font-bold" style={{ color: colors.textMain }}>{user.avaliacao}</p>
            <p className="text-sm" style={{ color: colors.textSecondary }}>Avaliação</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;