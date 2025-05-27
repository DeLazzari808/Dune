// src/screens/CreateCampaignScreen.jsx
import React, { useState } from 'react';
import { ArrowLeft, Sparkles, Loader2, UploadCloud, X } from 'lucide-react'; // Adicionado X
import { colors } from '../config';

const CreateCampaignScreen = ({ onBack, currentUser, setCurrentPage }) => { // Adicionado setCurrentPage
  const [formData, setFormData] = useState({
    titulo: '',
    descricao: '',
    data: '',
    local: '',
    vagas: '',
    valor: '',
    duracao: '',
    requisitos: [''],
    imagemCapa: null,
    // Adicionando os campos que faltavam no estado inicial
    nomeCampanha: '', // Duplicado com titulo, remover ou unificar
    periodo: '',      // Duplicado com data, remover ou unificar
    localizacao: '',  // Duplicado com local, remover ou unificar
    tipoCampanha: 'Casting',
    perfilProcurado: '',
  });
  const [isGeneratingDesc, setIsGeneratingDesc] = useState(false);
  const [generatedDescError, setGeneratedDescError] = useState('');


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleRequisitoChange = (index, value) => {
    const newRequisitos = [...formData.requisitos];
    newRequisitos[index] = value;
    setFormData(prev => ({ ...prev, requisitos: newRequisitos }));
  };

  const addRequisito = () => {
    setFormData(prev => ({ ...prev, requisitos: [...prev.requisitos, ''] }));
  };

  const removeRequisito = (index) => {
    setFormData(prev => ({ ...prev, requisitos: formData.requisitos.filter((_, i) => i !== index) }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({ ...prev, imagemCapa: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleGenerateDescription = async () => {
    // Usando formData.titulo ou formData.nomeCampanha
    if (!formData.titulo && !formData.nomeCampanha || !formData.tipoCampanha) {
      setGeneratedDescError("Por favor, preencha o nome e o tipo da campanha primeiro.");
      return;
    }
    setIsGeneratingDesc(true);
    setGeneratedDescError('');
    // ... (lógica da API Gemini, por agora simulada) ...
    await new Promise(resolve => setTimeout(resolve, 1500));
    setFormData(prev => ({...prev, descricao: `Descrição gerada por IA para ${prev.titulo || prev.nomeCampanha}`}));
    setIsGeneratingDesc(false);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Campanha "${formData.titulo || formData.nomeCampanha}" criada (simulação)!`);
    if (setCurrentPage) setCurrentPage('Feed'); // Usa setCurrentPage passado por App.jsx
    else if (onBack) onBack(); // Fallback para onBack se setCurrentPage não estiver disponível
  };

  if (!currentUser || (currentUser.tipo !== 'Marca' && currentUser.tipo !== 'Agencia')) {
    return (
      <div className="p-4 text-center" style={{backgroundColor: colors.pageBg, color: colors.textMain, minHeight: 'calc(100vh - 4rem)'}}>
        <h2 className="text-2xl font-bold mb-4 uppercase" style={{color: colors.accent}}>Criar Campanha</h2>
        <p style={{ color: colors.textSecondary }}>Apenas para Marcas e Agências.</p>
        <button onClick={onBack} className="mt-6 px-6 py-2 rounded-lg border" style={{ backgroundColor: colors.buttonBg, color: colors.buttonText, borderColor: colors.buttonBorder }}>Voltar</button>
      </div>
    );
  }

  return (
    <div className="p-4 md:p-8" style={{backgroundColor: colors.pageBg, minHeight: 'calc(100vh - 4rem)'}}>
      <button onClick={onBack} className="mb-6 flex items-center text-sm hover:text-accent" style={{ color: colors.link }}>
        <ArrowLeft size={18} className="mr-2"/> Voltar
      </button>
      <h2 className="text-3xl font-bold mb-8 uppercase" style={{ color: colors.accent }}>Criar Nova Campanha</h2>
      {/* O formulário original do protótipo CreateCampaignScreen que você tinha no Canvas */}
      {/* Ajustei para usar formData e handleChange */}
      <form onSubmit={handleSubmit} className="space-y-6 p-6 md:p-8 rounded-lg shadow-lg" style={{backgroundColor: colors.cardBg}}>
        {/* Imagem de Capa */}
        <div>
          <label className="block text-sm font-medium mb-1" style={{ color: colors.textMain }}> Imagem de Capa </label>
          <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed rounded-md" style={{borderColor: colors.borderLight}} onClick={() => document.getElementById('imageUploadInput').click()}>
            <div className="space-y-1 text-center">
              {formData.imagemCapa ? (
                <img src={formData.imagemCapa} alt="Preview" className="mx-auto h-24 max-h-24 object-contain"/>
              ) : (
                <UploadCloud size={32} className="mx-auto" style={{color: colors.textSecondary}}/>
              )}
              <div className="flex text-sm" style={{color: colors.textSecondary}}>
                <span className="relative cursor-pointer rounded-md font-medium" style={{color: colors.accent, textDecoration: 'underline'}}>
                  <span>{formData.imagemCapa ? "Trocar imagem" : "Carregar um arquivo"}</span>
                  <input id="imageUploadInput" name="imagemCapa" type="file" className="sr-only" onChange={handleImageChange} accept="image/*"/>
                </span>
                {!formData.imagemCapa && <p className="pl-1">ou arraste e solte</p>}
              </div>
              <p className="text-xs" style={{color: colors.link}}>PNG, JPG, GIF até 10MB</p>
            </div>
          </div>
        </div>

        {/* Nome da Campanha */}
        <div>
          <label htmlFor="titulo" className="block text-sm font-medium mb-1" style={{ color: colors.textMain }}>Nome da Campanha</label>
          <input type="text" name="titulo" id="titulo" value={formData.titulo} onChange={handleChange}
                 className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none sm:text-sm"
                 style={{ backgroundColor: colors.pageBg, borderColor: colors.borderLight, color: colors.textMain, caretColor: colors.accent }}/>
        </div>

        {/* Tipo de Campanha */}
        <div>
          <label htmlFor="tipoCampanha" className="block text-sm font-medium mb-1" style={{ color: colors.textMain }}>Tipo de Campanha</label>
          <select name="tipoCampanha" id="tipoCampanha" value={formData.tipoCampanha} onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none sm:text-sm"
                  style={{ backgroundColor: colors.pageBg, borderColor: colors.borderLight, color: colors.textMain }}>
            {["Casting", "Colaboração", "Desfile", "Edital", "Evento", "Lookbook"].map(opt => <option key={opt} style={{backgroundColor: colors.cardBg, color: colors.textMain}}>{opt}</option>)}
          </select>
        </div>
        
        {/* Período e Localização */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="data" className="block text-sm font-medium mb-1" style={{ color: colors.textMain }}>Período / Data</label>
            <input type="text" name="data" id="data" value={formData.data} onChange={handleChange} placeholder="Ex: 10-12 AGO ou 20/10/2025"
                  className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none sm:text-sm"
                  style={{ backgroundColor: colors.pageBg, borderColor: colors.borderLight, color: colors.textMain, caretColor: colors.accent }}/>
          </div>
          <div>
            <label htmlFor="local" className="block text-sm font-medium mb-1" style={{ color: colors.textMain }}>Localização</label>
            <input type="text" name="local" id="local" value={formData.local} onChange={handleChange} placeholder="Ex: São Paulo, SP ou Remoto"
                  className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none sm:text-sm"
                  style={{ backgroundColor: colors.pageBg, borderColor: colors.borderLight, color: colors.textMain, caretColor: colors.accent }}/>
          </div>
        </div>

        {/* Perfil Procurado */}
        <div>
          <label htmlFor="perfilProcurado" className="block text-sm font-medium mb-1" style={{ color: colors.textMain }}>Perfil Procurado</label>
          <input type="text" name="perfilProcurado" id="perfilProcurado" value={formData.perfilProcurado} onChange={handleChange}
                 className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none sm:text-sm"
                 style={{ backgroundColor: colors.pageBg, borderColor: colors.borderLight, color: colors.textMain, caretColor: colors.accent }}/>
        </div>

        {/* Descrição Detalhada */}
        <div>
          <div className="flex justify-between items-center">
            <label htmlFor="descricao" className="block text-sm font-medium mb-1" style={{ color: colors.textMain }}>Descrição Detalhada</label>
            <button type="button" onClick={handleGenerateDescription} disabled={isGeneratingDesc}
              className="flex items-center text-xs px-3 py-1 rounded border hover:bg-opacity-70"
              style={{ backgroundColor: colors.buttonBg, color: colors.buttonText, borderColor: colors.buttonBorder, cursor: isGeneratingDesc ? 'not-allowed' : 'pointer' }}>
              {isGeneratingDesc ? <Loader2 size={14} className="animate-spin mr-1.5" /> : <Sparkles size={14} className="mr-1.5" />}
              {isGeneratingDesc ? "Gerando..." : "Gerar com IA"}
            </button>
          </div>
          <textarea name="descricao" id="descricao" value={formData.descricao} onChange={handleChange} rows="6"
            className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none sm:text-sm"
            style={{ backgroundColor: colors.pageBg, borderColor: colors.borderLight, color: colors.textMain, caretColor: colors.accent }}/>
          {generatedDescError && <p className="mt-1 text-xs" style={{color: colors.error}}>{generatedDescError}</p>}
        </div>

        {/* Requisitos (Dinâmico) */}
        <div>
            <label className="block text-sm font-medium mb-1" style={{ color: colors.textMain }}>Requisitos</label>
            {formData.requisitos.map((requisito, index) => (
                <div key={index} className="flex items-center space-x-2 mb-2">
                    <input
                        type="text"
                        value={requisito}
                        onChange={(e) => handleRequisitoChange(index, e.target.value)}
                        placeholder={`Requisito ${index + 1}`}
                        className="flex-grow px-3 py-2 border rounded-md shadow-sm sm:text-sm"
                        style={{ backgroundColor: colors.pageBg, borderColor: colors.borderLight, color: colors.textMain }}
                    />
                    {formData.requisitos.length > 1 && (
                        <button type="button" onClick={() => removeRequisito(index)} className="p-2 rounded-md" style={{backgroundColor: colors.buttonBg, color: colors.textMain}}>
                            <X size={16} />
                        </button>
                    )}
                </div>
            ))}
            <button type="button" onClick={addRequisito} className="mt-2 text-sm py-2 px-3 rounded-md border" style={{color: colors.accent, borderColor: colors.borderLight, backgroundColor: colors.buttonBg}}>
                + Adicionar Requisito
            </button>
        </div>
        
        <div className="pt-5 flex justify-end space-x-3">
          <button type="button" onClick={onBack}
            className="px-4 py-2 border rounded-md shadow-sm text-sm font-medium hover:bg-opacity-70"
            style={{borderColor: colors.buttonBorder, color: colors.buttonText, backgroundColor: colors.buttonBg}}>Cancelar</button>
          <button type="submit"
            className="px-4 py-2 border rounded-md shadow-sm text-sm font-medium hover:bg-opacity-90"
            style={{ backgroundColor: colors.originalChumbo, color: colors.originalTextHighlightInv, borderColor: colors.originalChumbo }}>Publicar Campanha</button>
        </div>
      </form>
    </div>
  );
};

export default CreateCampaignScreen;