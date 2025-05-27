// src/screens/NotificationsScreen.jsx
import React from 'react';
import { Briefcase, CheckCircle, MessageCircle } from 'lucide-react';
import { colors, mockCampaigns } from '../config'; // Importa mockCampaigns para o exemplo

const NotificationsScreen = () => (
  <div className="p-4" style={{backgroundColor: colors.pageBg, minHeight: 'calc(100vh - 4rem)'}}>
    <h2 className="text-2xl font-bold mb-6 uppercase" style={{ color: colors.accent }}>Notificações</h2>
    <div className="space-y-4">
      {[
        { id: 1, icon: <Briefcase size={20} style={{color: colors.textMain}}/>, text: "Nova oportunidade de casting para modelos em SP.", time: "2h atrás" },
        { id: 2, icon: <CheckCircle size={20} style={{color: colors.success}}/>, text: "Sua candidatura para 'Desfile FW25' foi visualizada.", time: "Ontem" },
        { id: 3, icon: <MessageCircle size={20} style={{color: colors.textMain}}/>, text: "Nova mensagem de 'Marca Alpha'.", time: "3 dias atrás" },
      ].map(notif => (
        <div key={notif.id} className="p-4 rounded-lg shadow flex items-start space-x-3" style={{backgroundColor: colors.cardBg}}>
          <div className="flex-shrink-0 mt-1">{notif.icon}</div>
          <div>
            <p className="text-sm" style={{ color: colors.textMain }}>{notif.text}</p>
            <p className="text-xs" style={{ color: colors.textSecondary }}>{notif.time}</p>
          </div>
        </div>
      ))
      /* Exemplo de condição para quando não há notificações ou poucas */}
      {mockCampaigns.length === 0 && <p className="text-center py-4" style={{color: colors.textSecondary}}>Nenhuma notificação.</p>}
    </div>
  </div>
);

export default NotificationsScreen; 