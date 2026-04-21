import { QuestionStep, WizardStep } from '@/types';

export const PROFESSIONAL_AREAS = [
  { value: 'technology', label: 'Tecnología y Software' },
  { value: 'marketing', label: 'Marketing y Publicidad' },
  { value: 'consulting', label: 'Consultoría' },
  { value: 'health', label: 'Salud y Medicina' },
  { value: 'education', label: 'Educación' },
  { value: 'finance', label: 'Finanzas y Contabilidad' },
  { value: 'legal', label: 'Servicios Legales' },
  { value: 'real_estate', label: 'Bienes Raíces' },
  { value: 'construction', label: 'Construcción' },
  { value: 'food', label: 'Alimentación y Restaurantes' },
  { value: 'fashion', label: 'Moda y Vestuario' },
  { value: 'entertainment', label: 'Entretenimiento' },
  { value: 'transport', label: 'Transporte y Logística' },
  { value: 'agriculture', label: 'Agricultura' },
  { value: 'manufacturing', label: 'Manufactura' },
  { value: 'other', label: 'Otro' },
];

export const WIZARD_STEPS: { id: WizardStep; label: string; icon: string }[] = [
  { id: 'company', label: 'Empresa', icon: '🏢' },
  { id: 'services', label: 'Servicios', icon: '⚡' },
  { id: 'pricing', label: 'Precios', icon: '💰' },
  { id: 'testimonials', label: 'Testimonios', icon: '💬' },
  { id: 'design', label: 'Diseño', icon: '🎨' },
  { id: 'preview', label: 'Vista Previa', icon: '👁️' },
];

export const COMPANY_FIELDS: QuestionStep = {
  id: 'company',
  title: 'Información de tu Empresa',
  description: 'Cuéntanos los datos básicos de tu negocio',
  fields: [
    {
      id: 'name',
      label: 'Nombre de la empresa',
      type: 'text',
      placeholder: 'Mi Empresa S.A.',
      required: true,
    },
    {
      id: 'area',
      label: 'Área profesional',
      type: 'select',
      required: true,
      options: PROFESSIONAL_AREAS,
    },
    {
      id: 'description',
      label: 'Descripción breve',
      type: 'textarea',
      placeholder: 'Somos una empresa dedicada a...',
      required: true,
    },
    {
      id: 'email',
      label: 'Correo electrónico de contacto',
      type: 'email',
      placeholder: 'contacto@miempresa.com',
      required: true,
    },
    {
      id: 'phone',
      label: 'Teléfono de contacto',
      type: 'tel',
      placeholder: '+52 55 1234 5678',
    },
    {
      id: 'website',
      label: 'Sitio web (opcional)',
      type: 'url',
      placeholder: 'https://miempresa.com',
    },
  ],
};

export const SERVICES_FIELDS: QuestionStep = {
  id: 'services',
  title: 'Tus Servicios',
  description: 'Lista los servicios o productos que ofreces',
  fields: [
    {
      id: 'service_title',
      label: 'Nombre del servicio/producto',
      type: 'text',
      placeholder: 'Servicio de...',
    },
    {
      id: 'service_description',
      label: 'Descripción',
      type: 'textarea',
      placeholder: 'Este servicio incluye...',
    },
  ],
};

export const PRICING_FIELDS: QuestionStep = {
  id: 'pricing',
  title: 'Planes de Precios',
  description: 'Configura tus planes de precios (opcional)',
  fields: [
    {
      id: 'plan_name',
      label: 'Nombre del plan',
      type: 'text',
      placeholder: 'Plan Básico',
    },
    {
      id: 'plan_price',
      label: 'Precio',
      type: 'text',
      placeholder: '$299/mes',
    },
    {
      id: 'plan_features',
      label: 'Características (separadas por coma)',
      type: 'text',
      placeholder: 'Feature 1, Feature 2, Feature 3',
    },
  ],
};

export const TESTIMONIALS_FIELDS: QuestionStep = {
  id: 'testimonials',
  title: 'Testimonios',
  description: 'Agrega testimonios de clientes (opcional)',
  fields: [
    {
      id: 'testimonial_name',
      label: 'Nombre del cliente',
      type: 'text',
      placeholder: 'Juan Pérez',
    },
    {
      id: 'testimonial_role',
      label: 'Cargo/Rol',
      type: 'text',
      placeholder: 'CEO, Empresa XYZ',
    },
    {
      id: 'testimonial_content',
      label: 'Testimonio',
      type: 'textarea',
      placeholder: 'Excelente servicio...',
    },
  ],
};

export const DESIGN_FIELDS: QuestionStep = {
  id: 'design',
  title: 'Referencias de Diseño',
  description: 'Sube un archivo MD o pega un enlace para inspirarte',
  fields: [
    {
      id: 'design_reference',
      label: 'Enlace de referencia (Pinterest, Dribbble, etc.)',
      type: 'url',
      placeholder: 'https://dribbble.com/...',
    },
  ],
};

export const DEFAULT_COLORS = {
  primary: '#3B82F6',
  secondary: '#1E40AF',
  accent: '#F59E0B',
};