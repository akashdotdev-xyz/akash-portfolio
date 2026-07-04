export interface Profile {
  name: string;
  title: string;
  tagline: string;
  description: string;

  links: {
    github?: string;
    linkedin?: string;
    email?: string;
    resume?: string;
  };
}

export interface ImpactMetric {
  value: string;
  label: string;
  description?: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;

  highlights: string[];

  technologies: string[];
}