import type {
  ImpactMetric,
  Profile,
} from "./types";

export const profile: Profile = {
  name: "Akash Kumar",

  title: "Senior Software Engineer",

  tagline: "Building reliable systems that scale.",

  description:
    "Backend engineer with 4+ years of experience building distributed systems, multi-tenant platforms, and cloud infrastructure.",

  links: {
    github: "https://github.com/akashdotdev-xyz",
    linkedin: "https://www.linkedin.com/in/akash-kumar-iiit/",
    email: "meakash0102@gmail.com",
    resume: "https://drive.google.com/file/d/1mIhhlpPBb6xUjc3USnPTpeDHGuUO_oRI/view?usp=sharing",
  },
};

export const impactMetrics: ImpactMetric[] = [
  {
    value: "500K+",
    label: "Orders processed daily",
    description: "Across India and Middle East markets",
  },

  {
    value: "15+",
    label: "Backend services",
    description: "Migrated across AWS regions",
  },

  {
    value: "80%",
    label: "Faster integration",
    description: "For multi-tenant loyalty programs",
  },

  {
    value: "35+",
    label: "Microservices",
    description: "Using shared observability tooling",
  },
];