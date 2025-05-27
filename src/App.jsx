// src/App.jsx
import React, { useState } from 'react';
import { Home, PlusSquare, Bell, User, ArrowLeft } from 'lucide-react'; // Ícones base
import { colors, mockUser as baseMockUser, mockCampaigns, mockNotifications } from './config';

// Importe os seus ecrãs
import LoginScreen from './screens/LoginScreen';
import EventScheduleScreen from './screens/EventScheduleScreen';
import CreateCampaignScreen from './screens/CreateCampaignScreen';
import NotificationsScreen from './screens/NotificationsScreen';
import ProfileScreen from './screens/ProfileScreen';
import CampaignDetailScreen from './screens/CampaignDetailScreen';

const App = () => {
  const [currentPage, setCurrentPage] = useState('Login');
  const [currentUser, setCurrentUser] = useState(null);
  const [selectedCampaign, setSelectedCampaign] = useState(null);

  const handleLogin = (userData) => {
    const fullUserData = { 
      ...baseMockUser, 
      nome: userData.nome, 
      tipo: userData.tipo, 
      email: userData.email, 
      fotoPerfil: userData.fotoPerfil,
    };
    setCurrentUser(fullUserData);
    setCurrentPage('Feed');
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setSelectedCampaign(null);
    setCurrentPage('Login');
  };

  const handleViewCampaignDetail = (campaign) => {
    setSelectedCampaign(campaign);
    setCurrentPage('CampaignDetail');
  };

  const handleBack = () => {
    if (currentPage === 'CampaignDetail' || currentPage === 'CreateCampaign') {
      setCurrentPage('Feed');
    } else if (currentPage === 'Profile' || currentPage === 'Notifications') {
        setCurrentPage('Feed');
    }
  };

  const renderPage = () => {
    if (!currentUser && currentPage !== 'Login') {
        return <LoginScreen onLogin={handleLogin} />;
    }
    
    switch (currentPage) {
      case 'Login': 
        return <LoginScreen onLogin={handleLogin} />;
      case 'Feed': 
        return <EventScheduleScreen 
                    events={mockCampaigns} 
                    onViewDetail={handleViewCampaignDetail} 
                    setCurrentPage={setCurrentPage} 
                    setSelectedCampaign={setSelectedCampaign} 
                    currentUser={currentUser}
                />;
      case 'CreateCampaign': 
        return <CreateCampaignScreen 
                    onBack={handleBack} 
                    currentUser={currentUser} 
                    setCurrentPage={setCurrentPage} 
                />;
      case 'Notifications': 
        return <NotificationsScreen 
                    notifications={mockNotifications} 
                    currentUser={currentUser} 
                />;
      case 'Profile': 
        return <ProfileScreen 
                    user={currentUser} 
                    onLogout={handleLogout} 
                    onBack={handleBack} 
                />;
      case 'CampaignDetail':
        if (!selectedCampaign) {
          setCurrentPage('Feed');
          return null; 
        }
        return <CampaignDetailScreen 
                    campaign={selectedCampaign} 
                    onBack={handleBack} 
                    currentUser={currentUser} 
                />;
      default: 
        return <EventScheduleScreen 
                    events={mockCampaigns} 
                    onViewDetail={handleViewCampaignDetail} 
                    setCurrentPage={setCurrentPage}
                    setSelectedCampaign={setSelectedCampaign}
                    currentUser={currentUser}
                />;
    }
  };

  const navItems = [
    { name: 'Agenda', icon: Home, page: 'Feed' },
    ...(currentUser && (currentUser.tipo === 'Marca' || currentUser.tipo === 'Agencia')
      ? [{ name: 'Criar', icon: PlusSquare, page: 'CreateCampaign' }]
      : []),
    { name: 'Notificações', icon: Bell, page: 'Notifications' },
    { name: 'Perfil', icon: User, page: 'Profile' },
  ];
  
  return (
    <div className="flex flex-col min-h-screen" style={{ backgroundColor: colors.pageBg, color: colors.textMain }}>
      <main className="flex-grow pb-16"> {renderPage()} </main>
      {currentUser && currentPage !== 'Login' && (
        <nav className="fixed bottom-0 left-0 right-0 h-16 border-t z-50 flex items-center" style={{ backgroundColor: colors.cardBg, borderColor: colors.borderLight }}>
          <div className="flex justify-around items-center h-full w-full max-w-3xl mx-auto px-2">
            {navItems.map(item => (
              <button
                key={item.name} onClick={() => setCurrentPage(item.page)}
                className={'flex flex-col items-center justify-center p-2 rounded-md transition-colors flex-1 hover:opacity-80'}
                style={{ color: currentPage === item.page ? colors.accent : colors.textSecondary }}
              >
                <item.icon size={24} strokeWidth={currentPage === item.page ? 2.5 : 2} />
                <span className={`text-xs mt-1 uppercase ${currentPage === item.page ? 'font-semibold' : ''}`}>{item.name}</span>
              </button>
            ))}
          </div>
        </nav>
      )}
    </div>
  );
};

export default App;