// src/screens/CampaignDetailScreen.jsx
import React from 'react';
import { Calendar, MapPin, Users, DollarSign, Clock, ArrowLeft } from 'lucide-react';
import { colors } from '../config';

function CampaignDetailScreen({ campaign, onBack }) {
  return (
    <div className="min-h-screen" style={{ backgroundColor: colors.pageBg }}>
      {/* Header com imagem de capa */}
      <div className="relative h-64">
        <img 
          src={campaign.imagemCapa} 
          alt={campaign.titulo} 
          className="w-full h-full object-cover"
        />
        <button 
          onClick={onBack}
          className="absolute top-4 left-4 p-2 rounded-full"
          style={{ backgroundColor: colors.cardBg }}
        >
          <ArrowLeft size={24} style={{ color: colors.textMain }} />
        </button>
      </div>

      {/* Conteúdo principal */}
      <div className="px-4 py-6">
        <h1 className="text-2xl font-bold mb-2" style={{ color: colors.textMain }}>{campaign.titulo}</h1>
        <p className="text-sm mb-6" style={{ color: colors.textSecondary }}>{campaign.descricao}</p>

        {/* Informações principais */}
        <div className="space-y-4 mb-8">
          <div className="flex items-center">
            <Calendar size={20} className="mr-3" style={{ color: colors.accent }} />
            <div>
              <p className="text-sm font-medium" style={{ color: colors.textMain }}>Data</p>
              <p className="text-sm" style={{ color: colors.textSecondary }}>{campaign.data}</p>
            </div>
          </div>
          <div className="flex items-center">
            <MapPin size={20} className="mr-3" style={{ color: colors.accent }} />
            <div>
              <p className="text-sm font-medium" style={{ color: colors.textMain }}>Local</p>
              <p className="text-sm" style={{ color: colors.textSecondary }}>{campaign.local}</p>
            </div>
          </div>
          <div className="flex items-center">
            <Users size={20} className="mr-3" style={{ color: colors.accent }} />
            <div>
              <p className="text-sm font-medium" style={{ color: colors.textMain }}>Vagas</p>
              <p className="text-sm" style={{ color: colors.textSecondary }}>{campaign.vagas} vagas disponíveis</p>
            </div>
          </div>
          <div className="flex items-center">
            <DollarSign size={20} className="mr-3" style={{ color: colors.accent }} />
            <div>
              <p className="text-sm font-medium" style={{ color: colors.textMain }}>Valor</p>
              <p className="text-sm" style={{ color: colors.textSecondary }}>R$ {campaign.valor}</p>
            </div>
          </div>
          <div className="flex items-center">
            <Clock size={20} className="mr-3" style={{ color: colors.accent }} />
            <div>
              <p className="text-sm font-medium" style={{ color: colors.textMain }}>Duração</p>
              <p className="text-sm" style={{ color: colors.textSecondary }}>{campaign.duracao}</p>
            </div>
          </div>
        </div>

        {/* Requisitos */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-4" style={{ color: colors.textMain }}>Requisitos</h2>
          <ul className="list-disc list-inside space-y-2">
            {campaign.requisitos.map((req, index) => (
              <li key={index} className="text-sm" style={{ color: colors.textSecondary }}>{req}</li>
            ))}
          </ul>
        </div>

        {/* Botão de inscrição */}
        <button 
          className="w-full py-3 px-4 rounded-lg text-sm font-medium"
          style={{ backgroundColor: colors.accent, color: colors.buttonText }}
        >
          Inscrever-se
        </button>
      </div>
    </div>
  );
}

export default CampaignDetailScreen;