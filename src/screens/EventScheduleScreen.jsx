// src/screens/EventScheduleScreen.jsx
import React from 'react';
import { Search, Filter } from 'lucide-react'; // Removi MapPin e CalendarDays que não são usados diretamente aqui
import EventScheduleCard from '../components/EventScheduleCard';
import { colors, mockCampaigns } from '../config';

const EventScheduleScreen = ({ setCurrentPage, setSelectedCampaign }) => (
  <div className="p-4">
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-2xl font-bold uppercase" style={{ color: colors.accent }}>Agenda de Eventos</h2>
      <div className="flex space-x-3">
        <Filter size={20} style={{ color: colors.textSecondary }} className="cursor-pointer hover:text-accent"/>
        <Search size={20} style={{ color: colors.textSecondary }} className="cursor-pointer hover:text-accent"/>
      </div>
    </div>
    <div className="space-y-4">
      {mockCampaigns.map(campaign => (
        <EventScheduleCard
          key={campaign.id}
          campaign={campaign}
          onClick={() => {
            setSelectedCampaign(campaign);
            setCurrentPage('CampaignDetail');
          }}
        />
      ))}
       {mockCampaigns.length === 0 && <p className="text-center" style={{color: colors.textSecondary}}>Nenhum evento agendado no momento.</p>}
    </div>
  </div>
);

export default EventScheduleScreen;