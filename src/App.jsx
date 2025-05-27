// src/App.jsx
import React, { useState } from 'react';
import { Home, PlusSquare, Bell, User, ArrowLeft, Sparkles, Loader2, Briefcase, CheckCircle, MessageCircle, Bookmark, Flag, Share2, Edit3, LogOut, Search, Filter } from 'lucide-react'; // Adicionei ícones que podem ser usados nos ecrãs
import { colors, mockUser as baseMockUser, mockCampaigns } from './config'; // mockCampaigns é importado em EventScheduleScreen

// Importe os seus ecrãs
import LoginScreen from './screens/LoginScreen';
import EventScheduleScreen from './screens/EventScheduleScreen'; // Corrigido o nome do arquivo
import CreateCampaignScreen from './screens/CreateCampaignScreen';
import NotificationsScreen from './screens/NotificationsScreen';
import ProfileScreen from './screens/ProfileScreen';
import CampaignDetailScreen from './screens/CampaignDetailScreen';

const App = () => {
  const [currentPage, setCurrentPage] = useState('Login');
  const [currentUser, setCurrentUser] = useState(null);
  const [selectedCampaign, setSelectedCampaign] = useState(null);
  const [events, setEvents] = useState(mockCampaigns); // Usando mockCampaigns como mock de eventos
  const [notifications, setNotifications] = useState([]); // Mock de notificações

  const handleLogin = (userData) => {
    const fullUserData = { 
      ...baseMockUser, 
      nome: userData.nome, 
      tipo: userData.tipo, 
      email: userData.email, 
      fotoPerfil: userData.fotoPerfil, 
      // Adicionar outros campos do mockUser base se não vierem do formulário de login
      localizacao: baseMockUser.localizacao, 
      bio: baseMockUser.bio,
      portfolio: baseMockUser.portfolio,
      experiencias: baseMockUser.experiencias,
      links: baseMockUser.links,
      campanhas: baseMockUser.campanhas,
      seguidores: baseMockUser.seguidores,
      avaliacao: baseMockUser.avaliacao,
    };
    setCurrentUser(fullUserData);
    setCurrentPage('Feed'); // Redireciona para a tela Feed após o login
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setSelectedCampaign(null);
    setCurrentPage('Login'); // Redireciona para a tela de Login após o logout
  };

  const handleViewCampaignDetail = (campaign) => {
    setSelectedCampaign(campaign);
    setCurrentPage('CampaignDetail');
  };

  const handleBack = () => {
    // Lógica para voltar para a tela anterior, pode ser mais sofisticada se necessário
    if (currentPage === 'CampaignDetail') {
      setCurrentPage('Feed');
    } else if (currentPage !== 'Feed' && currentUser) {
       setCurrentPage('Feed'); // Volta para o feed se não for detail e estiver logado
    }
    // Adicionar lógica para outros retornos se necessário
  };

  const renderPage = () => {
    if (!currentUser) {
      return <LoginScreen onLogin={handleLogin} />;
    }

    switch (currentPage) {
      case 'Feed': 
        return <EventScheduleScreen events={events} onViewDetail={handleViewCampaignDetail} currentUser={currentUser} />; // Passando eventos e handler para ver detalhes
      case 'CreateCampaign': 
        return <CreateCampaignScreen onBack={handleBack} currentUser={currentUser} />; // Passando handler de voltar
      case 'Notifications': 
         return <NotificationsScreen notifications={notifications} currentUser={currentUser} />; // Passando mock de notificações
      case 'Profile': 
        return <ProfileScreen user={currentUser} onLogout={handleLogout} onBack={handleBack} />; // Passando usuário logado e handlers
      case 'CampaignDetail':
         if (!selectedCampaign) {
             // Tratar caso onde não há campanha selecionada, talvez redirecionar para o Feed
             setCurrentPage('Feed');
             return null; // Ou renderizar uma mensagem de erro
         }
        return <CampaignDetailScreen campaign={selectedCampaign} onBack={handleBack} currentUser={currentUser} />; // Passando campanha selecionada e handler de voltar
      default: 
        return <EventScheduleScreen events={events} onViewDetail={handleViewCampaignDetail} currentUser={currentUser} />;
    }
  };

  // Renderiza a tela de Login se não houver usuário logado
  // Se houver usuário logado, renderiza a estrutura principal com a navegação e a tela atual
  return (
    <div className="flex flex-col min-h-screen" style={{ backgroundColor: colors.pageBg, color: colors.textMain }}>
      <main className="flex-grow pb-16"> {renderPage()} </main>

      {/* Renderiza a barra de navegação apenas se o usuário estiver logado E não estiver na tela de Login ou Detalhe de Campanha */}
      {currentUser && currentPage !== 'Login' && currentPage !== 'CampaignDetail' && (
        <nav className="fixed bottom-0 left-0 right-0 h-16 border-t z-50 flex items-center" style={{ backgroundColor: colors.cardBg, borderColor: colors.borderLight }}>
          <div className="flex justify-around items-center h-full w-full max-w-3xl mx-auto px-2">
            {[ // Define os itens de navegação aqui
              { name: 'Agenda', icon: Home, page: 'Feed' },
              ...(currentUser && (currentUser.tipo === 'Marca' || currentUser.tipo === 'Agencia')
                ? [{ name: 'Criar', icon: PlusSquare, page: 'CreateCampaign' }]
                : []),
              { name: 'Notificações', icon: Bell, page: 'Notifications' },
              { name: 'Perfil', icon: User, page: 'Profile' },
            ].map(item => (
              <button
                key={item.name} onClick={() => setCurrentPage(item.page)}
                className={`flex flex-col items-center justify-center p-2 rounded-md transition-colors flex-1 hover:opacity-80`}
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