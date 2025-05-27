// src/screens/NotificationsScreen.jsx
import React from 'react';
import { Bell, CheckCircle, AlertCircle, Info, Briefcase, MessageCircle } from 'lucide-react'; // Adicionei os ícones que estavam no código original
import { colors, mockNotifications } from '../config'; // Usando mockNotifications do config

const NotificationsScreen = ({ currentUser }) => { // currentUser é passado de App.jsx
  const getIcon = (type) => {
    switch (type) {
      case 'success':
        return <CheckCircle size={20} style={{ color: colors.success }} />;
      case 'warning':
        return <AlertCircle size={20} style={{ color: colors.warning }} />;
      case 'info':
        return <Info size={20} style={{ color: colors.link }} />; // Usando link para info
      case 'casting': // Exemplo, pode ser adaptado
        return <Briefcase size={20} style={{color: colors.textMain}}/>;
      case 'message': // Exemplo
        return <MessageCircle size={20} style={{color: colors.textMain}}/>;
      default:
        return <Bell size={20} style={{ color: colors.textSecondary }} />;
    }
  };

  // Usando mockNotifications importado do config.js
  const notificationsToDisplay = mockNotifications || [];

  return (
    <div className="p-4" style={{backgroundColor: colors.pageBg, minHeight: 'calc(100vh - 4rem)'}}>
      <h2 className="text-2xl font-bold mb-6 uppercase" style={{ color: colors.accent }}>Notificações</h2>
      <div className="space-y-4">
        {notificationsToDisplay.map((notification) => (
          <div 
            key={notification.id} // Usar notification.id como key
            className="p-4 rounded-lg shadow flex items-start space-x-3" 
            style={{backgroundColor: colors.cardBg}}
          >
            <div className="flex-shrink-0 mt-1">
              {getIcon(notification.type)}
            </div>
            <div>
              <p className="text-sm font-semibold" style={{ color: colors.textMain }}>{notification.titulo || "Notificação"}</p>
              <p className="text-sm" style={{ color: colors.textSecondary }}>{notification.mensagem}</p>
              <p className="text-xs mt-1" style={{ color: colors.link }}>{notification.data}</p>
            </div>
          </div>
        ))}
        {notificationsToDisplay.length === 0 && (
          <div className="text-center py-8">
            <Bell size={48} className="mx-auto mb-4" style={{ color: colors.textSecondary }} />
            <p style={{ color: colors.textSecondary }}>Nenhuma notificação no momento.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default NotificationsScreen;