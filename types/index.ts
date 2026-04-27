import { LucideIcon } from "lucide-react";

export interface Client {
  name: string;
  logoUrl?: string;
}

export interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  slug: string;
}

export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    twitter: string;
    github: string;
  };
  contact: {
    email: string;
    phone: string;
    address: string;
  };
  tags: string[];
}
