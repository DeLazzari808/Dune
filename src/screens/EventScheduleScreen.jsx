// src/screens/EventScheduleScreen.jsx
import React from 'react';
import EventScheduleCard from '../components/EventScheduleCard';
import { colors, mockCampaigns } from '../config';
import { Search, Filter } from 'lucide-react';

// Removi as props não utilizadas currentUser, setCurrentPage, setSelectedCampaign
// A prop 'events' será mockCampaigns, e onViewDetail vem de App.jsx
const EventScheduleScreen = ({ events, onViewDetail }) => {
  const campaignsToDisplay = events && events.length > 0 ? events : mockCampaigns;

  return (
    <div className="p-4" style={{backgroundColor: colors.pageBg, minHeight: 'calc(100vh - 4rem)'}}>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold uppercase" style={{ color: colors.accent }}>Agenda de Eventos</h2>
        <div className="flex space-x-3">
          <Filter size={20} style={{ color: colors.textSecondary }} className="cursor-pointer hover:text-accent"/>
          <Search size={20} style={{ color: colors.textSecondary }} className="cursor-pointer hover:text-accent"/>
        </div>
      </div>
      
      <div className="space-y-4">
        {campaignsToDisplay.map(campaign => (
          <EventScheduleCard
            key={campaign.id}
            campaign={campaign}
            onClick={() => onViewDetail(campaign)}
          />
        ))}
        
        {campaignsToDisplay.length === 0 && (
          <div className="text-center py-4" style={{color: colors.textSecondary}}>
            Nenhum evento agendado no momento.
          </div>
        )}
      </div>
    </div>
  );
}

export default EventScheduleScreen;