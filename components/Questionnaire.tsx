'use client';

import { useState } from 'react';
import { FormState, WizardStep, Service, PricingPlan, Testimonial, DesignReference } from '@/types';
import { WIZARD_STEPS } from '@/lib/questions';
import FileUploader from './FileUploader';

interface QuestionnaireProps {
  formState: FormState;
  setFormState: React.Dispatch<React.SetStateAction<FormState>>;
  onComplete: () => void;
}

export default function Questionnaire({ formState, setFormState, onComplete }: QuestionnaireProps) {
  const currentStepIndex = WIZARD_STEPS.findIndex(s => s.id === formState.currentStep);
  const [tempService, setTempService] = useState<Partial<Service>>({});
  const [tempPricing, setTempPricing] = useState<Partial<PricingPlan>>({});
  const [tempTestimonial, setTempTestimonial] = useState<Partial<Testimonial>>({});
  const [serviceCount, setServiceCount] = useState(0);

  const updateCompanyField = (field: string, value: string) => {
    setFormState(prev => ({
      ...prev,
      company: { ...prev.company, [field]: value }
    }));
  };

  const addService = () => {
    if (tempService.title && tempService.description) {
      const newService: Service = {
        id: `service-${Date.now()}`,
        title: tempService.title,
        description: tempService.description,
      };
      setFormState(prev => ({
        ...prev,
        services: [...prev.services, newService]
      }));
      setTempService({});
      setServiceCount(prev => prev + 1);
    }
  };

  const removeService = (id: string) => {
    setFormState(prev => ({
      ...prev,
      services: prev.services.filter(s => s.id !== id)
    }));
  };

  const addPricing = () => {
    if (tempPricing.name && tempPricing.price) {
      const features = tempPricing.features 
        ? tempPricing.features.split(',').map(f => f.trim()).filter(f => f)
        : [];
      const newPlan: PricingPlan = {
        id: `plan-${Date.now()}`,
        name: tempPricing.name,
        price: tempPricing.price,
        features,
        highlighted: formState.pricing.length === 0,
      };
      setFormState(prev => ({
        ...prev,
        pricing: [...prev.pricing, newPlan]
      }));
      setTempPricing({});
    }
  };

  const removePricing = (id: string) => {
    setFormState(prev => ({
      ...prev,
      pricing: prev.pricing.filter(p => p.id !== id)
    }));
  };

  const addTestimonial = () => {
    if (tempTestimonial.name && tempTestimonial.content) {
      const newTestimonial: Testimonial = {
        id: `testimonial-${Date.now()}`,
        name: tempTestimonial.name,
        role: tempTestimonial.role || 'Cliente',
        content: tempTestimonial.content,
      };
      setFormState(prev => ({
        ...prev,
        testimonials: [...prev.testimonials, newTestimonial]
      }));
      setTempTestimonial({});
    }
  };

  const removeTestimonial = (id: string) => {
    setFormState(prev => ({
      ...prev,
      testimonials: prev.testimonials.filter(t => t.id !== id)
    }));
  };

  const updateDesign = (design: DesignReference) => {
    setFormState(prev => ({
      ...prev,
      design
    }));
  };

  const nextStep = () => {
    const nextIndex = currentStepIndex + 1;
    if (nextIndex < WIZARD_STEPS.length) {
      setFormState(prev => ({
        ...prev,
        currentStep: WIZARD_STEPS[nextIndex].id
      }));
    } else {
      onComplete();
    }
  };

  const prevStep = () => {
    const prevIndex = currentStepIndex - 1;
    if (prevIndex >= 0) {
      setFormState(prev => ({
        ...prev,
        currentStep: WIZARD_STEPS[prevIndex].id
      }));
    }
  };

  const renderStep = () => {
    switch (formState.currentStep) {
      case 'company':
        return (
          <div className="step-content">
            <h2>Información de tu Empresa</h2>
            <p className="step-description">Cuéntanos los datos básicos de tu negocio</p>
            
            <div className="form-group">
              <label htmlFor="name">Nombre de la empresa *</label>
              <input
                type="text"
                id="name"
                value={formState.company.name || ''}
                onChange={(e) => updateCompanyField('name', e.target.value)}
                placeholder="Mi Empresa S.A."
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="area">Área profesional *</label>
              <select
                id="area"
                value={formState.company.area || ''}
                onChange={(e) => updateCompanyField('area', e.target.value)}
                required
              >
                <option value="">Selecciona un área</option>
                <option value="Tecnología y Software">Tecnología y Software</option>
                <option value="Marketing y Publicidad">Marketing y Publicidad</option>
                <option value="Consultoría">Consultoría</option>
                <option value="Salud y Medicina">Salud y Medicina</option>
                <option value="Educación">Educación</option>
                <option value="Finanzas y Contabilidad">Finanzas y Contabilidad</option>
                <option value="Servicios Legales">Servicios Legales</option>
                <option value="Bienes Raíces">Bienes Raíces</option>
                <option value="Construcción">Construcción</option>
                <option value="Alimentación y Restaurantes">Alimentación y Restaurantes</option>
                <option value="Moda y Vestuario">Moda y Vestuario</option>
                <option value="Otro">Otro</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="description">Descripción breve *</label>
              <textarea
                id="description"
                value={formState.company.description || ''}
                onChange={(e) => updateCompanyField('description', e.target.value)}
                placeholder="Somos una empresa dedicada a..."
                rows={4}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Correo electrónico de contacto *</label>
              <input
                type="email"
                id="email"
                value={formState.company.email || ''}
                onChange={(e) => updateCompanyField('email', e.target.value)}
                placeholder="contacto@miempresa.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Teléfono de contacto</label>
              <input
                type="tel"
                id="phone"
                value={formState.company.phone || ''}
                onChange={(e) => updateCompanyField('phone', e.target.value)}
                placeholder="+52 55 1234 5678"
              />
            </div>

            <div className="form-group">
              <label htmlFor="website">Sitio web (opcional)</label>
              <input
                type="url"
                id="website"
                value={formState.company.website || ''}
                onChange={(e) => updateCompanyField('website', e.target.value)}
                placeholder="https://miempresa.com"
              />
            </div>
          </div>
        );

      case 'services':
        return (
          <div className="step-content">
            <h2>Tus Servicios</h2>
            <p className="step-description">Lista los servicios o productos que ofreces</p>

            <div className="add-item-form">
              <div className="form-group">
                <label>Nombre del servicio/producto</label>
                <input
                  type="text"
                  value={tempService.title || ''}
                  onChange={(e) => setTempService({ ...tempService, title: e.target.value })}
                  placeholder="Servicio de..."
                />
              </div>
              <div className="form-group">
                <label>Descripción</label>
                <textarea
                  value={tempService.description || ''}
                  onChange={(e) => setTempService({ ...tempService, description: e.target.value })}
                  placeholder="Este servicio incluye..."
                  rows={3}
                />
              </div>
              <button type="button" className="btn btn-secondary" onClick={addService}>
                + Agregar Servicio
              </button>
            </div>

            {formState.services.length > 0 && (
              <div className="items-list">
                <h3>Servicios agregados ({formState.services.length})</h3>
                {formState.services.map((service, index) => (
                  <div key={service.id} className="item-card">
                    <div className="item-info">
                      <span className="item-number">{index + 1}</span>
                      <div>
                        <strong>{service.title}</strong>
                        <p>{service.description}</p>
                      </div>
                    </div>
                    <button 
                      type="button" 
                      className="btn-remove"
                      onClick={() => removeService(service.id)}
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        );

      case 'pricing':
        return (
          <div className="step-content">
            <h2>Planes de Precios</h2>
            <p className="step-description">Configura tus planes de precios (opcional)</p>

            <div className="add-item-form">
              <div className="form-row">
                <div className="form-group">
                  <label>Nombre del plan</label>
                  <input
                    type="text"
                    value={tempPricing.name || ''}
                    onChange={(e) => setTempPricing({ ...tempPricing, name: e.target.value })}
                    placeholder="Plan Básico"
                  />
                </div>
                <div className="form-group">
                  <label>Precio</label>
                  <input
                    type="text"
                    value={tempPricing.price || ''}
                    onChange={(e) => setTempPricing({ ...tempPricing, price: e.target.value })}
                    placeholder="$299/mes"
                  />
                </div>
              </div>
              <div className="form-group">
                <label>Características (separadas por coma)</label>
                <input
                  type="text"
                  value={tempPricing.features || ''}
                  onChange={(e) => setTempPricing({ ...tempPricing, features: e.target.value })}
                  placeholder="Feature 1, Feature 2, Feature 3"
                />
              </div>
              <button type="button" className="btn btn-secondary" onClick={addPricing}>
                + Agregar Plan
              </button>
            </div>

            {formState.pricing.length > 0 && (
              <div className="items-list">
                <h3>Planes agregados ({formState.pricing.length})</h3>
                {formState.pricing.map((plan, index) => (
                  <div key={plan.id} className="item-card">
                    <div className="item-info">
                      <span className="item-number">{index + 1}</span>
                      <div>
                        <strong>{plan.name} - {plan.price}</strong>
                        <p>{plan.features.join(', ')}</p>
                      </div>
                    </div>
                    <button 
                      type="button" 
                      className="btn-remove"
                      onClick={() => removePricing(plan.id)}
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        );

      case 'testimonials':
        return (
          <div className="step-content">
            <h2>Testimonios</h2>
            <p className="step-description">Agrega testimonios de clientes (opcional)</p>

            <div className="add-item-form">
              <div className="form-group">
                <label>Nombre del cliente</label>
                <input
                  type="text"
                  value={tempTestimonial.name || ''}
                  onChange={(e) => setTempTestimonial({ ...tempTestimonial, name: e.target.value })}
                  placeholder="Juan Pérez"
                />
              </div>
              <div className="form-group">
                <label>Cargo/Rol</label>
                <input
                  type="text"
                  value={tempTestimonial.role || ''}
                  onChange={(e) => setTempTestimonial({ ...tempTestimonial, role: e.target.value })}
                  placeholder="CEO, Empresa XYZ"
                />
              </div>
              <div className="form-group">
                <label>Testimonio</label>
                <textarea
                  value={tempTestimonial.content || ''}
                  onChange={(e) => setTempTestimonial({ ...tempTestimonial, content: e.target.value })}
                  placeholder="Excelente servicio..."
                  rows={3}
                />
              </div>
              <button type="button" className="btn btn-secondary" onClick={addTestimonial}>
                + Agregar Testimonio
              </button>
            </div>

            {formState.testimonials.length > 0 && (
              <div className="items-list">
                <h3>Testimonios agregados ({formState.testimonials.length})</h3>
                {formState.testimonials.map((testimonial, index) => (
                  <div key={testimonial.id} className="item-card">
                    <div className="item-info">
                      <span className="item-number">{index + 1}</span>
                      <div>
                        <strong>{testimonial.name}</strong>
                        <p className="testimonial-preview">"{testimonial.content.substring(0, 80)}..."</p>
                      </div>
                    </div>
                    <button 
                      type="button" 
                      className="btn-remove"
                      onClick={() => removeTestimonial(testimonial.id)}
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        );

      case 'design':
        return (
          <div className="step-content">
            <h2>Referencias de Diseño</h2>
            <p className="step-description">Sube un archivo MD o pega un enlace para inspirarte</p>
            
            <FileUploader 
              design={formState.design} 
              onChange={updateDesign}
            />

            <div className="form-group color-picker-group">
              <label>Colores (opcional)</label>
              <div className="color-pickers">
                <div className="color-picker-item">
                  <input
                    type="color"
                    id="primaryColor"
                    value={formState.colors.primary}
                    onChange={(e) => setFormState(prev => ({
                      ...prev,
                      colors: { ...prev.colors, primary: e.target.value }
                    }))}
                  />
                  <span>Primario</span>
                </div>
                <div className="color-picker-item">
                  <input
                    type="color"
                    id="secondaryColor"
                    value={formState.colors.secondary}
                    onChange={(e) => setFormState(prev => ({
                      ...prev,
                      colors: { ...prev.colors, secondary: e.target.value }
                    }))}
                  />
                  <span>Secundario</span>
                </div>
                <div className="color-picker-item">
                  <input
                    type="color"
                    id="accentColor"
                    value={formState.colors.accent}
                    onChange={(e) => setFormState(prev => ({
                      ...prev,
                      colors: { ...prev.colors, accent: e.target.value }
                    }))}
                  />
                  <span>Acento</span>
                </div>
              </div>
            </div>
          </div>
        );

      case 'preview':
        return (
          <div className="step-content">
            <h2>Vista Previa</h2>
            <p className="step-description">Revisa tu información antes de generar la landing page</p>
            
            <div className="preview-summary">
              <div className="preview-section">
                <h3>🏢 Empresa</h3>
                <p><strong>Nombre:</strong> {formState.company.name}</p>
                <p><strong>Área:</strong> {formState.company.area}</p>
                <p><strong>Email:</strong> {formState.company.email}</p>
                {formState.company.phone && <p><strong>Teléfono:</strong> {formState.company.phone}</p>}
              </div>
              
              <div className="preview-section">
                <h3>⚡ Servicios ({formState.services.length})</h3>
                {formState.services.map(s => (
                  <p key={s.id}>• {s.title}</p>
                ))}
              </div>
              
              {formState.pricing.length > 0 && (
                <div className="preview-section">
                  <h3>💰 Planes ({formState.pricing.length})</h3>
                  {formState.pricing.map(p => (
                    <p key={p.id}>• {p.name} - {p.price}</p>
                  ))}
                </div>
              )}
              
              {formState.testimonials.length > 0 && (
                <div className="preview-section">
                  <h3>💬 Testimonios ({formState.testimonials.length})</h3>
                  {formState.testimonials.map(t => (
                    <p key={t.id}>• {t.name}</p>
                  ))}
                </div>
              )}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const isStepValid = () => {
    switch (formState.currentStep) {
      case 'company':
        return formState.company.name && formState.company.area && 
               formState.company.description && formState.company.email;
      case 'services':
        return formState.services.length > 0;
      case 'pricing':
      case 'testimonials':
      case 'design':
      case 'preview':
        return true;
      default:
        return false;
    }
  };

  return (
    <div className="questionnaire">
      <div className="wizard-steps">
        {WIZARD_STEPS.map((step, index) => (
          <div 
            key={step.id} 
            className={`wizard-step ${index <= currentStepIndex ? 'active' : ''} ${index < currentStepIndex ? 'completed' : ''}`}
          >
            <span className="step-icon">{step.icon}</span>
            <span className="step-label">{step.label}</span>
          </div>
        ))}
      </div>

      <div className="step-container">
        {renderStep()}
      </div>

      <div className="wizard-nav">
        <button 
          type="button"
          className="btn btn-outline" 
          onClick={prevStep}
          disabled={currentStepIndex === 0}
        >
          ← Anterior
        </button>
        <button 
          type="button"
          className="btn btn-primary" 
          onClick={nextStep}
          disabled={!isStepValid()}
        >
          {formState.currentStep === 'preview' ? 'Generar Landing' : 'Siguiente →'}
        </button>
      </div>
    </div>
  );
}