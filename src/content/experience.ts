import type { Experience } from "./types";

export const experiences: Experience[] = [
  {
    company: "Nykaa",

    role: "Senior Software Engineer",

    period: "Present",

    summary:
      "Building scalable backend platforms for multi-tenant commerce systems across India and Middle East markets.",

    technologies: [
      "Go",
      "Java",
      "AWS",
      "Kafka",
      "PostgreSQL",
      "Microservices",
    ],

    highlights: [
      {
        title: "Post Order Platform",

        description:
          "Built and scaled a multi-tenant post-order platform integrating order management, warehouse, and logistics systems.",

        impact: "Processes 500K+ orders daily",

        featured: true,
      },

      {
        title: "Multi-tenant Loyalty Platform",

        description:
          "Designed reusable domain abstractions for omnichannel earn and redeem workflows.",

        impact: "Reduced integration time by 80%",

        featured: true,
      },

      {
        title: "Central Tenant Management",

        description:
          "Built a centralized source of truth for tenant metadata, configuration, mappings, and feature flags.",

        featured: false,
      },

      {
        title: "AWS Region Migration",

        description:
          "Migrated backend services and dependencies across AWS regions while improving deployment pipelines.",

        impact: "15+ services migrated",

        featured: false,
      },
    ],
  },

  {
    company: "INDmoney",

    role: "Software Engineer",

    period: "Previous",

    summary:
      "Worked on investment platform workflows including exchange onboarding, financial reports, and customer assistance systems.",

    technologies: [
      "Go",
      "Java",
      "PostgreSQL",
      "Redis",
      "Docker",
    ],

    highlights: [
      {
        title: "Exchange Onboarding",

        description:
          "Revamped onboarding workflows coordinating account creation across multiple downstream systems.",

        impact: "Reduced onboarding time by 50%",

        featured: true,
      },

      {
        title: "Reports Platform",

        description:
          "Built dividend and CMR reporting capabilities for investment users.",

        featured: true,
      },

      {
        title: "Help Centre",

        description:
          "Developed dynamic nudges and broadcast communication capabilities.",

        featured: false,
      },
    ],
  },

  {
    company: "Infra.Market",

    role: "Software Engineer",

    period: "Previous",

    summary:
      "Built backend systems for enterprise operations, ticket management, ERP workflows, and shared observability infrastructure.",

    technologies: [
      "Go",
      "Java",
      "Kafka",
      "PostgreSQL",
      "Microservices",
      "OpenTelemetry",
    ],

    highlights: [
      {
        title: "Ticket Management Platform",

        description:
          "Built an event-driven ticket management system for handling operational workflows across teams.",

        impact: "Handles 1,000+ tickets daily",

        featured: true,
      },

      {
        title: "Observability Platform",

        description:
          "Built reusable observability capabilities for standardized telemetry and monitoring across backend services.",

        impact: "Adopted by 35+ microservices",

        featured: true,
      },

      {
        title: "ERP Platform",

        description:
          "Worked on backend workflows spanning procurement, inventory, supply chain, and finance operations.",

        featured: false,
      },
    ],
  },
];