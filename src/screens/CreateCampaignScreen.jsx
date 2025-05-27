// src/screens/CreateCampaignScreen.jsx
import React, { useState } from 'react';
import { ArrowLeft, Sparkles, Loader2, UploadCloud } from 'lucide-react'; // Adicione UploadCloud aqui
import { colors } from '../config';

const CreateCampaignScreen = ({ setCurrentPage, currentUser }) => {
  const [nomeCampanha, setNomeCampanha] = useState('');
  const [periodo, setPeriodo] = useState('');
  const [localizacao, setLocalizacao] = useState('');
  const [tipoCampanha, setTipoCampanha] = useState('Casting');
  const [descricao, setDescricao] = useState('');
  const [perfilProcurado, setPerfilProcurado] = useState('');
  const [isGeneratingDesc, setIsGeneratingDesc] = useState(false);
  const [generatedDescError, setGeneratedDescError] = useState('');

  const handleGenerateDescription = async () => {
    if (!nomeCampanha || !tipoCampanha) {
      setGeneratedDescError("Por favor, preencha o nome e o tipo da campanha primeiro.");
      return;
    }
    setIsGeneratingDesc(true);
    setGeneratedDescError('');
    let prompt = `Crie uma descrição detalhada e atraente para uma campanha de moda. Nome da Campanha: "${nomeCampanha}". Tipo de Campanha: "${tipoCampanha}".`;
    if (localizacao) prompt += ` Localização: "${localizacao}".`;
    if (perfilProcurado) prompt += ` Perfil Procurado: "${perfilProcurado}".`;
    prompt += ` A descrição deve ser profissional, convidativa e destacar os pontos chave. Use um tom elegante. Formate em parágrafos curtos.`;

    try {
      // ... (código da chamada à API Gemini, como no protótipo anterior) ...
      // SIMULAÇÃO DA RESPOSTA DA API POR AGORA:
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simula delay
      setDescricao(`Esta é uma descrição gerada pela IA para a campanha "${nomeCampanha}", do tipo "${tipoCampanha}". Detalhes adicionais como localização "${localizacao}" e perfil "${perfilProcurado}" foram considerados para criar um texto envolvente e profissional, perfeito para atrair os talentos certos para o seu projeto de moda.`);
      // Em um caso real, você usaria o fetch para a API Gemini
    } catch (error) { console.error("Erro ao gerar descrição:", error); setGeneratedDescError(`Erro: ${error.message}`); } finally { setIsGeneratingDesc(false); }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Campanha "${nomeCampanha}" criada (simulação)!`);
    setCurrentPage('Feed');
  };

  if (!currentUser || (currentUser.tipo !== 'Marca' && currentUser.tipo !== 'Agencia')) {
    return (
      <div className="p-4 text-center" style={{backgroundColor: colors.pageBg, color: colors.textMain, minHeight: 'calc(100vh - 4rem)'}}>
        <h2 className="text-2xl font-bold mb-4 uppercase" style={{color: colors.accent}}>Criar Campanha</h2>
        <p style={{ color: colors.textSecondary }}>Apenas para Marcas e Agências.</p>
        <button onClick={() => setCurrentPage('Feed')} className="mt-6 px-6 py-2 rounded-lg border" style={{ backgroundColor: colors.buttonBg, color: colors.buttonText, borderColor: colors.buttonBorder }}>Voltar</button>
      </div>
    );
  }

  return (
    <div className="p-4 md:p-8" style={{backgroundColor: colors.pageBg}}>
      <button onClick={() => setCurrentPage('Feed')} className="mb-6 flex items-center text-sm hover:text-accent" style={{ color: colors.link }}>
        <ArrowLeft size={18} className="mr-2"/> Voltar
      </button>
      <h2 className="text-3xl font-bold mb-8 uppercase" style={{ color: colors.accent }}>Criar Nova Campanha</h2>
      <form onSubmit={handleSubmit} className="space-y-6 p-6 md:p-8 rounded-lg shadow-lg" style={{backgroundColor: colors.cardBg}}>
        <div>
          <label htmlFor="nomeCampanha" className="block text-sm font-medium" style={{ color: colors.textMain }}>Nome da Campanha</label>
          <input type="text" id="nomeCampanha" value={nomeCampanha} onChange={e => setNomeCampanha(e.target.value)}
                 className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none sm:text-sm"
                 style={{ backgroundColor: colors.pageBg, borderColor: colors.borderLight, color: colors.textMain, caretColor: colors.accent }}/>
        </div>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="periodo" className="block text-sm font-medium" style={{ color: colors.textMain }}>Período</label>
            <input type="text" id="periodo" value={periodo} onChange={e => setPeriodo(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none sm:text-sm"
                  style={{ backgroundColor: colors.pageBg, borderColor: colors.borderLight, color: colors.textMain, caretColor: colors.accent }}/>
          </div>
          <div>
            <label htmlFor="localizacao" className="block text-sm font-medium" style={{ color: colors.textMain }}>Localização</label>
            <input type="text" id="localizacao" value={localizacao} onChange={e => setLocalizacao(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none sm:text-sm"
                  style={{ backgroundColor: colors.pageBg, borderColor: colors.borderLight, color: colors.textMain, caretColor: colors.accent }}/>
          </div>
        </div>
        <div>
          <label htmlFor="tipoCampanha" className="block text-sm font-medium" style={{ color: colors.textMain }}>Tipo de Campanha</label>
          <select id="tipoCampanha" value={tipoCampanha} onChange={e => setTipoCampanha(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none sm:text-sm"
                  style={{ backgroundColor: colors.pageBg, borderColor: colors.borderLight, color: colors.textMain }}>
            {["Casting", "Colaboração", "Desfile", "Edital", "Evento", "Lookbook"].map(opt => <option key={opt} style={{backgroundColor: colors.cardBg, color: colors.textMain}}>{opt}</option>)}
          </select>
        </div>
        <div>
          <label htmlFor="perfilProcurado" className="block text-sm font-medium" style={{ color: colors.textMain }}>Perfil Procurado</label>
          <input type="text" id="perfilProcurado" value={perfilProcurado} onChange={e => setPerfilProcurado(e.target.value)}
                 className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none sm:text-sm"
                 style={{ backgroundColor: colors.pageBg, borderColor: colors.borderLight, color: colors.textMain, caretColor: colors.accent }}/>
        </div>
        <div>
          <div className="flex justify-between items-center">
            <label htmlFor="descricao" className="block text-sm font-medium" style={{ color: colors.textMain }}>Descrição Detalhada</label>
            <button type="button" onClick={handleGenerateDescription} disabled={isGeneratingDesc}
              className="flex items-center text-xs px-3 py-1 rounded border hover:bg-opacity-70"
              style={{ backgroundColor: colors.buttonBg, color: colors.buttonText, borderColor: colors.buttonBorder, cursor: isGeneratingDesc ? 'not-allowed' : 'pointer' }}>
              {isGeneratingDesc ? <Loader2 size={14} className="animate-spin mr-1.5" /> : <Sparkles size={14} className="mr-1.5" />}
              {isGeneratingDesc ? "Gerando..." : "Gerar com IA"}
            </button>
          </div>
          <textarea id="descricao" value={descricao} onChange={e => setDescricao(e.target.value)} rows="6"
            className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none sm:text-sm"
            style={{ backgroundColor: colors.pageBg, borderColor: colors.borderLight, color: colors.textMain, caretColor: colors.accent }}/>
          {generatedDescError && <p className="mt-1 text-xs" style={{color: colors.error}}>{generatedDescError}</p>}
        </div>
        <div>
            <label className="block text-sm font-medium" style={{ color: colors.textMain }}>Materiais Anexos (opcional)</label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed rounded-md" style={{borderColor: colors.borderLight}}>
                <div className="space-y-1 text-center">
                    <UploadCloud size={32} className="mx-auto" style={{color: colors.textSecondary}}/>
                    <div className="flex text-sm" style={{color: colors.textSecondary}}>
                        <label htmlFor="file-upload" className="relative cursor-pointer rounded-md font-medium focus-within:outline-none" style={{color: colors.accent, textDecoration: 'underline'}}>
                            <span>Carregar um arquivo</span>
                            <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                        </label>
                        <p className="pl-1">ou arraste e solte</p>
                    </div>
                    <p className="text-xs" style={{color: colors.link}}>PDF, PNG, JPG até 10MB</p>
                </div>
            </div>
        </div>
        <div className="pt-5 flex justify-end space-x-3">
          <button type="button" onClick={() => setCurrentPage('Feed')}
            className="px-4 py-2 border rounded-md shadow-sm text-sm font-medium hover:bg-opacity-70"
            style={{borderColor: colors.buttonBorder, color: colors.buttonText, backgroundColor: colors.buttonBg}}>Cancelar</button>
          <button type="submit"
            className="px-4 py-2 border rounded-md shadow-sm text-sm font-medium hover:bg-opacity-90"
            style={{ backgroundColor: colors.originalChumbo, color: colors.originalTextHighlightInv, borderColor: colors.originalChumbo }}>Publicar</button>
        </div>
      </form>
    </div>
  );
};

export default CreateCampaignScreen; 