'use client';

import { useState } from 'react';
import { FormState, LandingData } from '@/types';
import { DEFAULT_COLORS } from '@/lib/questions';
import { generateAndDownloadZip } from '@/lib/zipGenerator';
import Questionnaire from '@/components/Questionnaire';

const initialFormState: FormState = {
  currentStep: 'company',
  company: {},
  services: [],
  pricing: [],
  testimonials: [],
  design: { type: 'url' },
  colors: DEFAULT_COLORS,
};

export default function Home() {
  const [formState, setFormState] = useState<FormState>(initialFormState);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generated, setGenerated] = useState(false);

  const handleComplete = async () => {
    setIsGenerating(true);
    
    const landingData: LandingData = {
      company: {
        name: formState.company.name || '',
        area: formState.company.area || '',
        description: formState.company.description || '',
        email: formState.company.email || '',
        phone: formState.company.phone,
        website: formState.company.website,
      },
      services: formState.services,
      pricing: formState.pricing,
      testimonials: formState.testimonials,
      design: formState.design,
      colors: formState.colors,
    };

    try {
      await generateAndDownloadZip(landingData);
      setGenerated(true);
    } catch (error) {
      console.error('Error generating landing:', error);
      alert('Hubo un error al generar la landing page. Por favor, intenta de nuevo.');
    } finally {
      setIsGenerating(false);
    }
  };

  const handleReset = () => {
    setFormState(initialFormState);
    setGenerated(false);
  };

  if (generated) {
    return (
      <main className="success-page">
        <div className="success-container">
          <div className="success-icon">🎉</div>
          <h1>¡Tu Landing Page está lista!</h1>
          <p>Se ha descargado un archivo ZIP con:</p>
          <ul className="files-list">
            <li>📄 <strong>index.html</strong> - La estructura de tu página</li>
            <li>🎨 <strong>styles.css</strong> - Los estilos visuales</li>
            <li>⚡ <strong>script.js</strong> - Las interacciones</li>
          </ul>
          <div className="success-actions">
            <button onClick={handleReset} className="btn btn-primary">
              Crear otra landing page
            </button>
          </div>
          <p className="next-steps">
            <strong>Próximos pasos:</strong> Descomprime el archivo ZIP y abre index.html 
            en tu navegador para ver la preview. Para publicarla, sube los archivos 
            a cualquier hosting como Netlify, Vercel o GitHub Pages.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="app">
      <header className="app-header">
        <div className="container">
          <h1 className="logo">🚀 Generador de Landing Pages</h1>
          <p className="tagline">Crea landing pages profesionales en minutos</p>
        </div>
      </header>

      <div className="container">
        <Questionnaire 
          formState={formState}
          setFormState={setFormState}
          onComplete={handleComplete}
        />
        
        {isGenerating && (
          <div className="generating-overlay">
            <div className="generating-content">
              <div className="spinner"></div>
              <p>Generando tu landing page...</p>
            </div>
          </div>
        )}
      </div>

      <footer className="app-footer">
        <div className="container">
          <p>Generador de Landing Pages © {new Date().getFullYear()}</p>
        </div>
      </footer>
    </main>
  );
}