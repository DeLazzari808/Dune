import { useState } from 'react';
import { Home, Calendar, Bell, User, Plus } from 'lucide-react';
import LoginScreen from './screens/LoginScreen';
import { mockUser } from './config';

function App() {
  const [currentPage, setCurrentPage] = useState('login');
  const [currentUser, setCurrentUser] = useState(null);

  const handleLogin = (credentials) => {
    // TODO: Implement actual login logic
    setCurrentUser(mockUser);
    setCurrentPage('home');
  };

  const navItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'schedule', icon: Calendar, label: 'Schedule' },
    { id: 'notifications', icon: Bell, label: 'Notifications' },
    { id: 'profile', icon: User, label: 'Profile' },
  ];

  const renderPage = () => {
    switch (currentPage) {
      case 'login':
        return <LoginScreen onLogin={handleLogin} />;
      case 'home':
        return (
          <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Welcome, {currentUser?.name}</h1>
            {/* TODO: Add home screen content */}
          </div>
        );
      default:
        return <div>Page not found</div>;
    }
  };

  if (currentPage === 'login') {
    return renderPage();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="pb-16">
        {renderPage()}
      </main>
      
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
        <div className="flex justify-around items-center h-16">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setCurrentPage(item.id)}
              className={`flex flex-col items-center justify-center w-full h-full ${
                currentPage === item.id ? 'text-blue-600' : 'text-gray-600'
              }`}
            >
              <item.icon className="h-6 w-6" />
              <span className="text-xs mt-1">{item.label}</span>
            </button>
          ))}
          <button
            onClick={() => setCurrentPage('create')}
            className="flex flex-col items-center justify-center w-full h-full text-gray-600"
          >
            <Plus className="h-6 w-6" />
            <span className="text-xs mt-1">Create</span>
          </button>
        </div>
      </nav>
    </div>
  );
}

export default App;
