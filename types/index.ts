export interface Service {
  id: string;
  title: string;
  description: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  features: string[];
  highlighted?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar?: string;
}

export interface DesignReference {
  type: 'url' | 'markdown';
  url?: string;
  markdown?: string;
}

export interface CompanyData {
  name: string;
  area: string;
  description: string;
  email: string;
  phone?: string;
  website?: string;
  logo?: string;
}

export interface LandingData {
  company: CompanyData;
  services: Service[];
  pricing: PricingPlan[];
  testimonials: Testimonial[];
  design: DesignReference;
  colors?: {
    primary: string;
    secondary: string;
    accent: string;
  };
}

export interface QuestionStep {
  id: string;
  title: string;
  description: string;
  fields: QuestionField[];
}

export interface QuestionField {
  id: string;
  label: string;
  type: 'text' | 'textarea' | 'email' | 'tel' | 'url' | 'select' | 'color' | 'list' | 'file';
  placeholder?: string;
  required?: boolean;
  options?: { value: string; label: string }[];
  minItems?: number;
}

export type WizardStep = 'company' | 'services' | 'pricing' | 'testimonials' | 'design' | 'preview';

export interface FormState {
  currentStep: WizardStep;
  company: Partial<CompanyData>;
  services: Service[];
  pricing: PricingPlan[];
  testimonials: Testimonial[];
  design: DesignReference;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
  };
}