// src/components/EventScheduleCard.jsx
import React from 'react';
import { Calendar, MapPin, Clock } from 'lucide-react';
import { colors } from '../config';

function EventScheduleCard({ event, onClick }) {
  return (
    <div 
      className="p-4 rounded-lg cursor-pointer transition-transform hover:scale-[1.02]"
      style={{ backgroundColor: colors.cardBg }}
      onClick={onClick}
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
      
      <p className="mt-3 text-sm line-clamp-2" style={{ color: colors.textSecondary }}>{event.descricao}</p>
    </div>
  );
}

export default EventScheduleCard;