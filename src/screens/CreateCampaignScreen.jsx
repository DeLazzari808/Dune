// src/screens/CreateCampaignScreen.jsx
import React, { useState } from 'react';
import { ArrowLeft, Sparkles, Loader2, UploadCloud, Upload, X } from 'lucide-react';
import { colors } from '../config';

const CreateCampaignScreen = ({ setCurrentPage, currentUser }) => {
  const [formData, setFormData] = useState({
    titulo: '',
    descricao: '',
    data: '',
    local: '',
    vagas: '',
    valor: '',
    duracao: '',
    requisitos: [''],
    imagemCapa: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleRequisitoChange = (index, value) => {
    const newRequisitos = [...formData.requisitos];
    newRequisitos[index] = value;
    setFormData(prev => ({
      ...prev,
      requisitos: newRequisitos
    }));
  };

  const addRequisito = () => {
    setFormData(prev => ({
      ...prev,
      requisitos: [...prev.requisitos, '']
    }));
  };

  const removeRequisito = (index) => {
    const newRequisitos = formData.requisitos.filter((_, i) => i !== index);
    setFormData(prev => ({
      ...prev,
      requisitos: newRequisitos
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({
          ...prev,
          imagemCapa: reader.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Campanha "${formData.titulo}" criada (simulação)!`);
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
    <div className="min-h-screen" style={{ backgroundColor: colors.pageBg }}>
      {/* Header */}
      <div className="p-4 border-b" style={{ borderColor: colors.borderLight }}>
        <div className="flex items-center">
          <button 
            onClick={() => setCurrentPage('Feed')}
            className="p-2 rounded-full mr-4"
            style={{ backgroundColor: colors.cardBg }}
          >
            <ArrowLeft size={24} style={{ color: colors.textMain }} />
          </button>
          <h1 className="text-2xl font-bold" style={{ color: colors.textMain }}>Criar Campanha</h1>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="p-4 space-y-6">
        {/* Imagem de Capa */}
        <div>
          <label className="block text-sm font-medium mb-2" style={{ color: colors.textMain }}>
            Imagem de Capa
          </label>
          <div 
            className="relative h-48 rounded-lg border-2 border-dashed flex items-center justify-center cursor-pointer"
            style={{ borderColor: colors.borderLight }}
            onClick={() => document.getElementById('imageInput').click()}
          >
            {formData.imagemCapa ? (
              <>
                <img 
                  src={formData.imagemCapa} 
                  alt="Capa" 
                  className="w-full h-full object-cover rounded-lg"
                />
                <button
                  type="button"
                  className="absolute top-2 right-2 p-1 rounded-full"
                  style={{ backgroundColor: colors.cardBg }}
                  onClick={(e) => {
                    e.stopPropagation();
                    setFormData(prev => ({ ...prev, imagemCapa: null }));
                  }}
                >
                  <X size={20} style={{ color: colors.textMain }} />
                </button>
              </>
            ) : (
              <div className="text-center">
                <Upload size={32} className="mx-auto mb-2" style={{ color: colors.textSecondary }} />
                <p className="text-sm" style={{ color: colors.textSecondary }}>
                  Clique para fazer upload da imagem
                </p>
              </div>
            )}
            <input
              id="imageInput"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageChange}
            />
          </div>
        </div>

        {/* Título */}
        <div>
          <label htmlFor="titulo" className="block text-sm font-medium mb-2" style={{ color: colors.textMain }}>
            Título
          </label>
          <input
            type="text"
            id="titulo"
            name="titulo"
            value={formData.titulo}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg"
            style={{ 
              backgroundColor: colors.cardBg,
              borderColor: colors.borderLight,
              color: colors.textMain
            }}
            required
          />
        </div>

        {/* Descrição */}
        <div>
          <label htmlFor="descricao" className="block text-sm font-medium mb-2" style={{ color: colors.textMain }}>
            Descrição
          </label>
          <textarea
            id="descricao"
            name="descricao"
            value={formData.descricao}
            onChange={handleChange}
            rows="4"
            className="w-full px-4 py-2 rounded-lg"
            style={{ 
              backgroundColor: colors.cardBg,
              borderColor: colors.borderLight,
              color: colors.textMain
            }}
            required
          />
        </div>

        {/* Data e Local */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="data" className="block text-sm font-medium mb-2" style={{ color: colors.textMain }}>
              Data
            </label>
            <input
              type="date"
              id="data"
              name="data"
              value={formData.data}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg"
              style={{ 
                backgroundColor: colors.cardBg,
                borderColor: colors.borderLight,
                color: colors.textMain
              }}
              required
            />
          </div>
          <div>
            <label htmlFor="local" className="block text-sm font-medium mb-2" style={{ color: colors.textMain }}>
              Local
            </label>
            <input
              type="text"
              id="local"
              name="local"
              value={formData.local}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg"
              style={{ 
                backgroundColor: colors.cardBg,
                borderColor: colors.borderLight,
                color: colors.textMain
              }}
              required
            />
          </div>
        </div>

        {/* Vagas, Valor e Duração */}
        <div className="grid grid-cols-3 gap-4">
          <div>
            <label htmlFor="vagas" className="block text-sm font-medium mb-2" style={{ color: colors.textMain }}>
              Vagas
            </label>
            <input
              type="number"
              id="vagas"
              name="vagas"
              value={formData.vagas}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg"
              style={{ 
                backgroundColor: colors.cardBg,
                borderColor: colors.borderLight,
                color: colors.textMain
              }}
              required
            />
          </div>
          <div>
            <label htmlFor="valor" className="block text-sm font-medium mb-2" style={{ color: colors.textMain }}>
              Valor (R$)
            </label>
            <input
              type="number"
              id="valor"
              name="valor"
              value={formData.valor}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg"
              style={{ 
                backgroundColor: colors.cardBg,
                borderColor: colors.borderLight,
                color: colors.textMain
              }}
              required
            />
          </div>
          <div>
            <label htmlFor="duracao" className="block text-sm font-medium mb-2" style={{ color: colors.textMain }}>
              Duração
            </label>
            <input
              type="text"
              id="duracao"
              name="duracao"
              value={formData.duracao}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg"
              style={{ 
                backgroundColor: colors.cardBg,
                borderColor: colors.borderLight,
                color: colors.textMain
              }}
              placeholder="Ex: 4 horas"
              required
            />
          </div>
        </div>

        {/* Requisitos */}
        <div>
          <label className="block text-sm font-medium mb-2" style={{ color: colors.textMain }}>
            Requisitos
          </label>
          <div className="space-y-2">
            {formData.requisitos.map((requisito, index) => (
              <div key={index} className="flex gap-2">
                <input
                  type="text"
                  value={requisito}
                  onChange={(e) => handleRequisitoChange(index, e.target.value)}
                  className="flex-1 px-4 py-2 rounded-lg"
                  style={{ 
                    backgroundColor: colors.cardBg,
                    borderColor: colors.borderLight,
                    color: colors.textMain
                  }}
                  placeholder={`Requisito ${index + 1}`}
                  required
                />
                {index > 0 && (
                  <button
                    type="button"
                    onClick={() => removeRequisito(index)}
                    className="p-2 rounded-lg"
                    style={{ backgroundColor: colors.cardBg }}
                  >
                    <X size={20} style={{ color: colors.textMain }} />
                  </button>
                )}
              </div>
            ))}
            <button
              type="button"
              onClick={addRequisito}
              className="w-full py-2 rounded-lg text-sm font-medium"
              style={{ 
                backgroundColor: colors.cardBg,
                color: colors.accent,
                borderColor: colors.borderLight
              }}
            >
              + Adicionar Requisito
            </button>
          </div>
        </div>

        {/* Botão de Criar */}
        <button
          type="submit"
          className="w-full py-3 rounded-lg text-sm font-medium"
          style={{ backgroundColor: colors.accent, color: colors.buttonText }}
        >
          Criar Campanha
        </button>
      </form>
    </div>
  );
};

export default CreateCampaignScreen; 