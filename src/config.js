// src/config.js
// Definições de Cores (Tema Escuro baseado nas referências e adaptando a paleta do utilizador)
export const colors = {
    pageBg: '#121212', // Fundo de página bem escuro
    cardBg: '#1E1E1E', // Fundo de cartão/elementos um pouco mais claro
    textMain: '#E0E0E0', // Texto principal claro (branco suave)
    textSecondary: '#A0A0A0', // Texto secundário (cinza claro)
    borderLight: '#424242', // Borda sutil para elementos
    buttonBg: '#1E1E1E', // Fundo de botão (pode ser o mesmo do cardBg)
    buttonBorder: '#E0E0E0', // Borda clara para botões (estilo referência)
    buttonText: '#E0E0E0', // Texto claro para botões
    accent: '#FFFFFF', // Branco como destaque principal (ex: títulos ativos, ícones ativos)
    link: '#A0A0A0', // Cor para links no tema escuro
  
    // Cores originais da paleta do utilizador para usos específicos (se necessário)
    originalBgHighlight: '#2C2C2E', // Para badges/tags como na referência
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
    fotoPerfil: `https://placehold.co/100x100/343A40/FFFFFF?text=AB`, // Usando chumbo para o placeholder
    fotoCapa: 'https://placehold.co/600x200/1E1E1E/E0E0E0?text=Capa+Perfil',
    bio: 'Modelo comercial & editorial | SP & RJ | Apaixonada por moda consciente.',
    portfolio: [
      { id: 1, tipo: 'imagem', url: 'https://placehold.co/300x400/424242/E0E0E0?text=Portfólio+1', legenda: 'Editorial Vogue' },
      { id: 2, tipo: 'imagem', url: 'https://placehold.co/300x400/2C2C2E/E0E0E0?text=Portfólio+2', legenda: 'Campanha Verão' },
    ],
    experiencias: [
      { id: 1, nome: 'Campanha Outono/Inverno', cliente: 'Marca X', data: '2024', papel: 'Modelo Principal' },
    ],
    links: { instagram: '@anabeatrizmodelo', tiktok: '@anabeatriz', website: 'anabeatriz.com' },
  };
  
  export const mockCampaigns = [
    {
      id: 1,
      nome: "CASTING CALL IN BELO HORIZONTE",
      organizador: "Agência Top Models BH",
      localizacao: "Belo Horizonte",
      data: "AGO 23", // Formato para destaque
      fullDate: "23 de Agosto, 2025", // Data completa para detalhes
      perfilProcurado: "Modelos Andróginos, Altura 1.75m+",
      imagemCapa: "https://placehold.co/400x250/1E1E1E/A0A0A0?text=Evento+BH", // Placeholder para tema escuro
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
      imagemCapa: "https://placehold.co/400x250/1E1E1E/A0A0A0?text=SPFW+Casting", // Placeholder para tema escuro
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
      imagemCapa: "https://placehold.co/400x250/1E1E1E/A0A0A0?text=Rio+Casting", // Placeholder para tema escuro
      tipo: "Editorial",
      descricaoCompleta: "Sessão de casting no Rio de Janeiro para editoriais de moda e campanhas de verão. Buscamos diversidade e autenticidade.",
      requisitos: ["Todos os gêneros e etnias", "Atitude e fotogenia", "Disponibilidade para shootings externos"],
      remuneracao: "R$ 1.500 - R$ 3.000",
      prazoInscricao: "10/11/2025",
    },
  ];
  