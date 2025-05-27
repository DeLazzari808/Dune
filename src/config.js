// src/config.js
// Definições de Cores (Tema Escuro baseado nas referências e adaptando a paleta do utilizador)
export const colors = {
    pageBg: '#121212', // Fundo de página bem escuro
    cardBg: '#1E1E1E', // Fundo do cartão do formulário
    textMain: '#E0E0E0', // Texto principal claro (branco suave)
    textSecondary: '#A0A0A0', // Texto secundário (cinza claro)
    borderLight: '#424242', // Borda mais sutil para elementos gerais
    inputBg: '#1A1A1A', // Um tom ligeiramente diferente ou igual ao pageBg para os inputs, para se misturarem
    inputBorderFocus: '#52525B', // Uma borda sutil para foco (pode ser o seu borderLight ou um pouco mais claro)
    buttonBg: '#1E1E1E', // Fundo do botão igual ao cardBg
    buttonBorder: '#FFFFFF', // Borda BRANCA e FINA para o botão principal
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
  
  // Dados Fictícios (simplificado para este exemplo)
  export const mockUser = {
    nome: 'Ana Beatriz',
    tipo: 'Modelo',
    fotoPerfil: `https://placehold.co/100x100/343A40/FFFFFF?text=AB`,
    fotoCapa: 'https://placehold.co/600x200/1E1E1E/E0E0E0?text=Capa+Perfil',
    bio: 'Modelo comercial & editorial | SP & RJ | Apaixonada por moda consciente.',
    portfolio: [ { id: 1, tipo: 'imagem', url: 'https://placehold.co/300x400/424242/E0E0E0?text=Portfólio+1', legenda: 'Editorial Vogue' } ],
    experiencias: [ { id: 1, nome: 'Campanha Outono/Inverno', cliente: 'Marca X', data: '2024', papel: 'Modelo Principal' } ],
    links: { instagram: '@anabeatrizmodelo', tiktok: '@anabeatriz', website: 'anabeatriz.com' },
  };
  
  export const mockCampaigns = [ { id: 1, nome: "CASTING CALL IN BELO HORIZONTE", organizador: "Agência Top Models BH", localizacao: "Belo Horizonte", data: "AGO 23", fullDate: "23 de Agosto, 2025", tipo: "Casting" } ];
  