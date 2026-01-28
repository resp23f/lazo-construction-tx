export interface Service {
  title: string;
  description: string;
  href: string;
  icon?: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  location: string;
}

export interface PortfolioItem {
  id: string;
  src: string;
  alt: string;
  category: "residential" | "commercial" | "kitchens" | "bathrooms";
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  serviceType?: string;
  message: string;
}

export interface ValueProp {
  icon: React.ReactNode;
  title: string;
  description: string;
}
