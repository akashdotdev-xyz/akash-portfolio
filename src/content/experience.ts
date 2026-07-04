import type { Experience } from "./types";

export const experiences: Experience[] = [
  {
    company: "Nykaa",

    role: "Software Engineer – 2",

    period: "Jan. 2025 — Present",

    highlights: [
      "Designed and built a multi-tenant order orchestration platform processing 500K+ orders/day across India and Middle East markets, coordinating post-order workflows between OMS, warehouse management, and logistics systems through a hybrid synchronous and event-driven architecture.",

      "Designed and developed a scalable multi-tenant loyalty platform supporting omnichannel earn and redeem journeys across multiple business domains; leveraged domain-driven design and reusable microservice abstractions to reduce new business onboarding and integration time-to-market by 80%.",

      "Led the rollout of standardized observability across 20+ microservices and AWS infrastructure, implementing OpenTelemetry-based observability, Grafana dashboards, alerting, and custom telemetry to improve production visibility, incident detection, and operational reliability.",

      "Orchestrated the migration of 15+ backend microservices to a new AWS region and contributed to setting up parallel infrastructure for new business use cases. Reconfigured service-to-service dependencies, optimized CI/CD pipelines using Jenkins and GitHub Actions, and refactored codebases to align with updated business requirements.",
    ],

    technologies: [
      "Go",
      "Java",
      "Kafka",
      "AWS",
      "OpenTelemetry",
      "Grafana",
    ],
  },

  {
    company: "INDmoney",

    role: "Software Engineer",

    period: "Jun. 2024 — Dec. 2024",

    highlights: [
      "Revamped exchange onboarding workflows by automating account creation across multiple external systems through workflow orchestration and API integrations, reducing user onboarding time by 50%.",

      "Designed and developed Go-based microservices leveraging Kafka, gRPC, and PostgreSQL to support high-performance financial workflows and inter-service communication.",

      "Developed a dynamic Help Centre for INDstocks featuring contextual nudges, targeted broadcast banners, and guided issue-resolution workflows, improving user communication, transaction success rates, and overall customer experience.",
    ],

    technologies: [
      "Go",
      "Kafka",
      "gRPC",
      "PostgreSQL",
      "Microservices",
    ],
  },

  {
    company: "Hella Infra Market",

    role: "Software Engineer (SDE 1 → SDE 2)",

    period: "Jun. 2022 — May 2024",

    highlights: [
      "Designed and led the development of an event-driven Ticket Management System processing 1,000+ tickets/day, streamlining post-sales operations and issue resolution across business functions.",

      "Architected and developed a centralized ERP platform supporting procurement, inventory, supply chain, and finance workflows, enabling operational visibility and process standardization across business units.",

      "Developed a shared observability library adopted across 35+ microservices, standardizing metrics, traces, and logs integration with New Relic to improve monitoring, troubleshooting, and operational visibility.",

      "Enhanced the organization's Kafka platform library by introducing standardized retry and dead-letter queue (DLQ) mechanisms, improving reliability and resilience of asynchronous communication across 35+ microservices.",
    ],

    technologies: [
      "Go",
      "Java",
      "Kafka",
      "New Relic",
      "Microservices",
      "Event-Driven Architecture",
    ],
  },
];