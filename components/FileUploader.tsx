'use client';

import { useState, useRef } from 'react';
import { DesignReference } from '@/types';

interface FileUploaderProps {
  design: DesignReference;
  onChange: (design: DesignReference) => void;
}

export default function FileUploader({ design, onChange }: FileUploaderProps) {
  const [markdownContent, setMarkdownContent] = useState(design.markdown || '');
  const [urlInput, setUrlInput] = useState(design.url || '');
  const [activeTab, setActiveTab] = useState<'url' | 'markdown'>('url');
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleUrlSubmit = () => {
    if (urlInput.trim()) {
      onChange({ type: 'url', url: urlInput.trim() });
    }
  };

  const handleMarkdownChange = (content: string) => {
    setMarkdownContent(content);
    onChange({ type: 'markdown', markdown: content });
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    const files = e.dataTransfer.files;
    if (files && files[0]) {
      handleFile(files[0]);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files[0]) {
      handleFile(files[0]);
    }
  };

  const handleFile = (file: File) => {
    if (file.name.endsWith('.md') || file.name.endsWith('.markdown')) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const content = event.target?.result as string;
        handleMarkdownChange(content);
        setActiveTab('markdown');
      };
      reader.readAsText(file);
    } else {
      alert('Por favor, sube un archivo .md o .markdown');
    }
  };

  return (
    <div className="file-uploader">
      <div className="tabs">
        <button
          type="button"
          className={`tab ${activeTab === 'url' ? 'active' : ''}`}
          onClick={() => setActiveTab('url')}
        >
          Enlace de referencia
        </button>
        <button
          type="button"
          className={`tab ${activeTab === 'markdown' ? 'active' : ''}`}
          onClick={() => setActiveTab('markdown')}
        >
          Archivo Markdown
        </button>
      </div>

      {activeTab === 'url' ? (
        <div className="url-tab">
          <div className="form-group">
            <label>Pega un enlace de Pinterest, Dribbble, Behance, etc.</label>
            <div className="url-input-group">
              <input
                type="url"
                value={urlInput}
                onChange={(e) => setUrlInput(e.target.value)}
                placeholder="https://dribbble.com/shots/..."
              />
              <button type="button" className="btn btn-outline" onClick={handleUrlSubmit}>
                Guardar
              </button>
            </div>
            {design.url && (
              <div className="saved-reference">
                <span>✓ Referencia guardada: {design.url}</span>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="markdown-tab">
          <div 
            className={`drop-zone ${dragActive ? 'drag-active' : ''}`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            <input
              type="file"
              ref={fileInputRef}
              accept=".md,.markdown"
              onChange={handleFileSelect}
              style={{ display: 'none' }}
            />
            <div className="drop-zone-content">
              <span className="drop-icon">📄</span>
              <p>Arrastra un archivo .md aquí</p>
              <span className="or">o</span>
              <button 
                type="button" 
                className="btn btn-secondary"
                onClick={() => fileInputRef.current?.click()}
              >
                Seleccionar archivo
              </button>
            </div>
          </div>

          <div className="form-group">
            <label>O pega el contenido Markdown directamente:</label>
            <textarea
              value={markdownContent}
              onChange={(e) => handleMarkdownChange(e.target.value)}
              placeholder={`# Descripción del diseño\n\n- Header con navegación sticky\n- Colores: azul y blanco\n- Tipografía: Montserrat\n- Sección Hero con imagen de fondo\n- ...`}
              rows={10}
            />
          </div>

          {design.markdown && (
            <div className="saved-reference">
              <span>✓ Contenido Markdown guardado</span>
            </div>
          )}
        </div>
      )}

      <div className="help-text">
        <p>💡 Puedes usar este campo para describir elementos de diseño como:</p>
        <ul>
          <li>Colores preferidos</li>
          <li>Tipografías</li>
          <li>Estilo visual (minimalista, moderno, corporativo)</li>
          <li>Referencias de otras páginas</li>
        </ul>
      </div>
    </div>
  );
}