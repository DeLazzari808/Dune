// src/screens/CampaignDetailScreen.jsx
import React from 'react';
import { ArrowLeft, MapPin, CalendarDays, CheckCircle, Bookmark } from 'lucide-react'; // Users, DollarSign, Clock podem ser adicionados se necessário
import { colors } from '../config';

const CampaignDetailScreen = ({ campaign, onBack, currentUser }) => { // currentUser adicionado se necessário
  if (!campaign) {
    return (
      <div className="p-4 text-center" style={{backgroundColor: colors.pageBg, color: colors.textMain, minHeight: 'calc(100vh - 4rem)'}}>
        <p style={{ color: colors.textSecondary }}>Campanha não encontrada.</p>
        <button onClick={onBack} className="mt-4 px-4 py-2 rounded-lg border" style={{backgroundColor: colors.buttonBg, color: colors.buttonText, borderColor: colors.buttonBorder}}>Voltar</button>
      </div>
    );
  }

  return (
    <div className="min-h-screen pb-16" style={{ backgroundColor: colors.pageBg }}>
      <div className="relative">
        <img
          src={campaign.imagemCapa || `https://placehold.co/800x320/1E1E1E/A0A0A0?text=${campaign.nome ? campaign.nome.substring(0,15) : 'Campanha'}`}
          alt={`Capa da ${campaign.nome}`}
          className="w-full h-64 md:h-80 object-cover opacity-80"
          onError={(e) => { e.target.style.visibility = 'hidden'; if(e.target.parentElement) e.target.parentElement.style.backgroundColor = colors.cardBg; }}
        />
        <button
          onClick={onBack}
          className="absolute top-4 left-4 bg-black bg-opacity-40 text-white p-2 rounded-full hover:bg-opacity-60 transition-colors z-20"
        >
          <ArrowLeft size={24} />
        </button>
      </div>
      <div className="p-4 md:p-8">
        <div className="p-6 rounded-lg shadow-xl -mt-16 md:-mt-24 relative z-10" style={{backgroundColor: colors.cardBg}}>
          <span className="text-xs font-semibold uppercase px-3 py-1.5 rounded-full mb-2 inline-block" style={{ backgroundColor: colors.originalBgHighlight, color: colors.originalTextHighlightInv }}>
            {campaign.tipo || "Detalhe"}
          </span>
          <h1 className="text-3xl md:text-4xl font-bold mb-2 uppercase" style={{ color: colors.accent }}>{campaign.nome}</h1>
          <p className="text-sm mb-1" style={{ color: colors.textSecondary }}>
            <MapPin size={16} className="inline mr-2" style={{color: colors.link}}/> {campaign.localizacao || "Não especificado"}
          </p>
          <p className="text-sm mb-4" style={{ color: colors.textSecondary }}>
            <CalendarDays size={16} className="inline mr-2" style={{color: colors.link}}/> {campaign.fullDate || campaign.data}
          </p>
          <p className="text-sm mb-6" style={{ color: colors.link }}>
            Organizado por: {campaign.organizador || "Não especificado"}
          </p>
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2 uppercase" style={{ color: colors.accent }}>Sobre a Campanha</h3>
            <p className="text-sm leading-relaxed" style={{ color: colors.textSecondary }}>
              {campaign.descricaoCompleta || "Descrição não disponível."}
            </p>
          </div>
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2 uppercase" style={{ color: colors.accent }}>Quem Estamos Procurando</h3>
            <ul className="list-disc list-inside space-y-1 text-sm" style={{ color: colors.textSecondary }}>
              {(campaign.requisitos && campaign.requisitos.length > 0) ? (
                campaign.requisitos.map((req, index) => <li key={index}>{req}</li>)
              ) : (
                <li>Requisitos não especificados.</li>
              )}
            </ul>
          </div>
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2 uppercase" style={{ color: colors.accent }}>Detalhes da Oportunidade</h3>
            <p className="text-sm" style={{ color: colors.textSecondary }}>
              <strong>Remuneração:</strong> {campaign.remuneracao || "A combinar"}
            </p>
            <p className="text-sm" style={{ color: colors.textSecondary }}>
              <strong>Prazo para Inscrição:</strong> {campaign.prazoInscricao || "Não especificado"}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 mt-8">
            <button className="w-full sm:w-auto flex-1 px-6 py-3 text-base font-medium rounded-lg border flex items-center justify-center hover:bg-opacity-70" style={{ backgroundColor: colors.buttonBg, color: colors.buttonText, borderColor: colors.buttonBorder }}>
              <CheckCircle size={20} className="mr-2"/> Candidatar-se Agora
            </button>
            <button className="w-full sm:w-auto px-6 py-3 text-base font-medium rounded-lg border flex items-center justify-center hover:bg-opacity-70" style={{ backgroundColor: colors.pageBg, color: colors.textSecondary, borderColor: colors.borderLight }}>
              <Bookmark size={20} className="mr-2" style={{color: colors.textSecondary}}/> Salvar Campanha
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignDetailScreen;