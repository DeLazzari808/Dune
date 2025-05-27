// src/screens/NotificationsScreen.jsx
import React from 'react';
import { Bell, CheckCircle, AlertCircle, Info } from 'lucide-react';
import { colors } from '../config';

function NotificationsScreen({ notifications }) {
  const getIcon = (type) => {
    switch (type) {
      case 'success':
        return <CheckCircle size={20} style={{ color: colors.success }} />;
      case 'warning':
        return <AlertCircle size={20} style={{ color: colors.warning }} />;
      case 'info':
        return <Info size={20} style={{ color: colors.info }} />;
      default:
        return <Bell size={20} style={{ color: colors.accent }} />;
    }
  };

  return (
    <div className="min-h-screen p-4" style={{ backgroundColor: colors.pageBg }}>
      <h1 className="text-2xl font-bold mb-6" style={{ color: colors.textMain }}>Notificações</h1>
      
      <div className="space-y-4">
        {notifications.map((notification, index) => (
          <div 
            key={index}
            className="p-4 rounded-lg flex items-start"
            style={{ backgroundColor: colors.cardBg }}
          >
            <div className="mr-3">
              {getIcon(notification.type)}
            </div>
            
            <div className="flex-1">
              <h2 className="text-sm font-medium mb-1" style={{ color: colors.textMain }}>
                {notification.titulo}
              </h2>
              <p className="text-sm" style={{ color: colors.textSecondary }}>
                {notification.mensagem}
              </p>
              <p className="text-xs mt-2" style={{ color: colors.textSecondary }}>
                {notification.data}
              </p>
            </div>
          </div>
        ))}
        
        {notifications.length === 0 && (
          <div className="text-center py-8">
            <Bell size={48} className="mx-auto mb-4" style={{ color: colors.textSecondary }} />
            <p style={{ color: colors.textSecondary }}>Nenhuma notificação no momento.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default NotificationsScreen;