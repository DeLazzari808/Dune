// src/screens/EventScheduleScreen.jsx
import React from 'react';
import { Calendar, MapPin, Clock } from 'lucide-react';
import { colors } from '../config';

function EventScheduleScreen({ events }) {
  return (
    <div className="min-h-screen p-4" style={{ backgroundColor: colors.pageBg }}>
      <h1 className="text-2xl font-bold mb-6" style={{ color: colors.textMain }}>Agenda de Eventos</h1>
      
      <div className="space-y-4">
        {events.map((event, index) => (
          <div 
            key={index}
            className="p-4 rounded-lg"
            style={{ backgroundColor: colors.cardBg }}
          >
            <h2 className="text-lg font-semibold mb-2" style={{ color: colors.textMain }}>{event.titulo}</h2>
            
            <div className="space-y-2">
              <div className="flex items-center">
                <Calendar size={16} className="mr-2" style={{ color: colors.accent }} />
                <p className="text-sm" style={{ color: colors.textSecondary }}>{event.data}</p>
              </div>
              
              <div className="flex items-center">
                <MapPin size={16} className="mr-2" style={{ color: colors.accent }} />
                <p className="text-sm" style={{ color: colors.textSecondary }}>{event.local}</p>
              </div>
              
              <div className="flex items-center">
                <Clock size={16} className="mr-2" style={{ color: colors.accent }} />
                <p className="text-sm" style={{ color: colors.textSecondary }}>{event.horario}</p>
              </div>
            </div>
            
            <p className="mt-3 text-sm" style={{ color: colors.textSecondary }}>{event.descricao}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EventScheduleScreen;