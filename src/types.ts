import type { ReactElement } from 'react';

export interface NavLink {
  name: string;
}

export interface SocialLink {
  name: string;
  icon: ReactElement;
  url: string;
}

export interface Article {
  image: string;
  title: string;
  description: string;
  url: string;
  tags: string[];
}

export interface ArticleListItem {
  date: string;
  title: string;
  description: string;
  url: string;
}

export interface DetailedProject {
  image: string;
  title: string;
  description: string;
  tags: string[];
  demoUrl: string;
  liveUrl?: string;
  featured?: boolean;
}

export interface ContactInfo {
  icon: ReactElement;
  label: string;
  value: string;
  href: string;
}

export interface Education {
  icon: ReactElement;
  institution: string;
  degree: string;
  period: string;
}
