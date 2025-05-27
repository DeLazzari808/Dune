// src/config.js
// Definições de Cores (Tema Escuro baseado nas referências e adaptando a paleta do utilizador)
export const colors = {
  pageBg: '#121212',
  cardBg: '#1E1E1E',
  textMain: '#E0E0E0',
  textSecondary: '#A0A0A0',
  borderLight: '#424242',
  inputBg: '#1A1A1A',
  inputBorderFocus: '#52525B',
  buttonBg: '#1E1E1E',
  buttonBorder: '#FFFFFF',
  buttonText: '#E0E0E0',
  accent: '#FFFFFF',
  link: '#A0A0A0',
  originalBgHighlight: '#2C2C2E',
  originalTextHighlightInv: '#FFFFFF',
  originalChumbo: '#343A40',
  originalBrancoGelo: '#EDEDED',
  success: '#10B981',
  warning: '#F59E0B',
  error: '#EF4444',
};

// Dados Fictícios
export const mockUser = {
  nome: 'Ana Beatriz',
  tipo: 'Modelo',
  fotoPerfil: `https://placehold.co/100x100/343A40/FFFFFF?text=AB`,
  fotoCapa: 'https://placehold.co/800x300/1E1E1E/A0A0A0?text=Capa+Perfil',
  bio: 'Modelo comercial & editorial | SP & RJ | Apaixonada por moda consciente.',
  portfolio: [
    { id: 1, tipo: 'imagem', url: 'https://placehold.co/300x400/424242/E0E0E0?text=Portfólio+1', legenda: 'Editorial Vogue' },
    { id: 2, tipo: 'imagem', url: 'https://placehold.co/300x400/2C2C2E/E0E0E0?text=Portfólio+2', legenda: 'Campanha Verão' },
    { id: 3, tipo: 'imagem', url: 'https://placehold.co/300x400/1E1E1E/E0E0E0?text=Portfólio+3', legenda: 'Outro Trabalho' },
  ],
  experiencias: [
    { id: 1, nome: 'Campanha Outono/Inverno', cliente: 'Marca X', data: '2024', papel: 'Modelo Principal' },
    { id: 2, nome: 'Desfile SPFW', cliente: 'Designer Y', data: '2023', papel: 'Modelo Passarela' },
  ],
  links: { instagram: '@anabeatrizmodelo', tiktok: '@anabeatriz', website: 'anabeatriz.com' },
  // Adicionando campos que estavam no seu App.jsx (do GitHub) para o mockUser base
  localizacao: "São Paulo, SP", 
  email: "anabeatriz@example.com", // Adicionado para consistência
  telefone: "(11) 99999-8888", 
  campanhas: 12, 
  seguidores: "15k", 
  avaliacao: 4.8, 
};

export const mockCampaigns = [
  {
    id: 1,
    nome: "CASTING CALL IN BELO HORIZONTE",
    organizador: "Agência Top Models BH",
    localizacao: "Belo Horizonte",
    data: "AGO 23", 
    fullDate: "23 de Agosto, 2025", 
    perfilProcurado: "Modelos Andróginos, Altura 1.75m+",
    imagemCapa: "https://placehold.co/400x250/1E1E1E/A0A0A0?text=Evento+BH",
    tipo: "Casting",
    descricaoCompleta: "Grande oportunidade para modelos em Belo Horizonte. Procuramos novos talentos para campanhas e desfiles. Presença marcante e atitude são essenciais.",
    requisitos: ["Gênero: Todos", "Altura mínima: 1.75m", "Disponibilidade imediata"],
    remuneracao: "A combinar",
    prazoInscricao: "20/08/2025",
  },
  {
    id: 2,
    nome: "MODEL CASTING AT SÃO PAULO FASHION WEEK",
    organizador: "SPFW Oficial",
    localizacao: "São Paulo",
    data: "OUT 05",
    fullDate: "05 de Outubro, 2025",
    perfilProcurado: "Modelos com experiência em passarela",
    imagemCapa: "https://placehold.co/400x250/1E1E1E/A0A0A0?text=SPFW+Casting",
    tipo: "Desfile",
    descricaoCompleta: "Participe da seleção de modelos para a próxima edição do São Paulo Fashion Week. Uma chance única de desfilar para grandes marcas.",
    requisitos: ["Experiência comprovada em passarela", "Portfólio atualizado", "Medidas padrão SPFW"],
    remuneracao: "Cachê padrão SPFW",
    prazoInscricao: "25/09/2025",
  },
   {
    id: 3,
    nome: "RIO DE JANEIRO CASTING SESSION",
    organizador: "Moda Rio Inc.",
    localizacao: "Rio de Janeiro",
    data: "NOV 18",
    fullDate: "18 de Novembro, 2025",
    perfilProcurado: "Modelos para moda praia e editorial",
    imagemCapa: "https://placehold.co/400x250/1E1E1E/A0A0A0?text=Rio+Casting",
    tipo: "Editorial",
    descricaoCompleta: "Sessão de casting no Rio de Janeiro para editoriais de moda e campanhas de verão. Buscamos diversidade e autenticidade.",
    requisitos: ["Todos os gêneros e etnias", "Atitude e fotogenia", "Disponibilidade para shootings externos"],
    remuneracao: "R$ 1.500 - R$ 3.000",
    prazoInscricao: "10/11/2025",
  },
];

// Adicionando mock de notificações
export const mockNotifications = [
    { id: 1, titulo: "Novo Casting", mensagem: "Nova oportunidade de casting para modelos em SP.", data: "2h" },
    { id: 2, titulo: "Desfile SPFW", mensagem: "Participe da seleção de modelos para a próxima edição do São Paulo Fashion Week.", data: "1h" },
    { id: 3, titulo: "Campanha de Verão", mensagem: "Nova oportunidade de casting para modelos em SP.", data: "2h" },
];

