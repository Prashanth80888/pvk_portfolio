export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription?: string;
  features: string[];
  technologies: string[];
  image: string;
  accentColor: string;
  githubUrl?: string;
  liveUrl?: string;
  isComplete: boolean;
}

export interface SkillCard {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'cloud' | 'ai' | 'tools' | 'core';
  description: string;
  usageDetails: string;
  color: string;
  iconName: string;
}

export interface ExperienceItem {
  number: string;
  title: string;
  description: string;
  highlights: string[];
  category: string;
}

export interface Certification {
  title: string;
  issuer: string;
  period?: string;
  type: string;
  color: string;
}

export interface Hackathon {
  title: string;
  organizer: string;
  year: string;
  description: string;
}
