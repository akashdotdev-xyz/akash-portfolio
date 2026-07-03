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

export interface ExperienceHighlight {
  title: string;
  description: string;
  impact?: string;

  /**
   * Controls whether this highlight appears
   * on the homepage.
   */
  featured: boolean;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  summary: string;

  technologies: string[];

  highlights: ExperienceHighlight[];
}