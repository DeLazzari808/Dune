export const colors = {
  primary: '#3B82F6',
  secondary: '#6B7280',
  success: '#10B981',
  danger: '#EF4444',
  warning: '#F59E0B',
  info: '#3B82F6',
  light: '#F3F4F6',
  dark: '#1F2937',
};

export const mockUser = {
  id: 1,
  name: 'John Doe',
  email: 'john@example.com',
  avatar: 'https://i.pravatar.cc/150?img=1',
  role: 'Fashion Designer',
  company: 'Fashion House Inc.',
  bio: 'Passionate about sustainable fashion and innovative designs.',
  followers: 1234,
  following: 567,
};

export const mockCampaigns = [
  {
    id: 1,
    title: 'Summer Collection 2024',
    description: 'Launching our new sustainable summer collection',
    startDate: '2024-06-01',
    endDate: '2024-08-31',
    status: 'active',
    budget: 50000,
    targetAudience: 'Fashion enthusiasts, 18-35',
    metrics: {
      reach: 15000,
      engagement: 2500,
      conversions: 500,
    },
  },
  {
    id: 2,
    title: 'Eco-Friendly Fashion Week',
    description: 'Promoting sustainable fashion practices',
    startDate: '2024-09-15',
    endDate: '2024-09-22',
    status: 'planned',
    budget: 75000,
    targetAudience: 'Industry professionals, media',
    metrics: {
      reach: 0,
      engagement: 0,
      conversions: 0,
    },
  },
];

export const mockEvents = [
  {
    id: 1,
    title: 'Fashion Week Opening',
    date: '2024-03-15',
    time: '19:00',
    location: 'Grand Fashion Hall',
    description: 'Opening ceremony of the Spring Fashion Week',
  },
  {
    id: 2,
    title: 'Sustainable Fashion Workshop',
    date: '2024-03-16',
    time: '14:00',
    location: 'Innovation Center',
    description: 'Learn about sustainable practices in fashion design',
  },
]; 