export interface Product {
  id: string;
  name: string;
  category: 'Pharmaceutical' | 'Cosmetic';
  description: string;
  image?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
