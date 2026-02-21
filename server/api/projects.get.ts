import { defineEventHandler, getQuery } from 'h3';

const projects = [
    {
        "id": "p001",
        "title": "Realtime Fraud Detection for NeoBank",
        "industry": "Fintech",
        "outcome": "Chargebacks reduced 47%, saved ₹3.4 Cr/year",
        "summary": "Replaced rules-based system with ML inference pipeline and streaming scoring at 5,000 TPS.",
        "timeline_months": 6,
        "budget_band": "Enterprise",
        "team_size": 10,
        "tech_stack": ["Python", "Kafka", "Redis", "TensorFlow", "Kubernetes", "Postgres"],
        "security": ["PCI-DSS compliance playbook", "encryption-at-rest", "SOC2-ready"],
        "images": ["fraud-dashboard.png"],
        "testimonial": { "name": "A. Sharma", "title": "Head of Risk, NeoPay", "quote": "Fraud losses dropped and we regained merchant trust in 3 months." }
    },
    {
        "id": "p002",
        "title": "HIPAA-compliant Telehealth Platform",
        "industry": "Healthcare",
        "outcome": "Appointment throughput ×4; average wait time ↓ 63%",
        "summary": "Full product from discovery to multiregion deployment with FHIR-based EHR integrations.",
        "timeline_months": 8,
        "budget_band": "Enterprise",
        "team_size": 12,
        "tech_stack": ["React", "Node.js", "AWS", "FHIR", "Docker", "Postgres"],
        "security": ["HIPAA BAAs", "auditing & logging", "encrypted backups"],
        "images": ["telehealth-screenshot.png"],
        "testimonial": { "name": "Dr. Mehta", "title": "CMO, HealthPlus", "quote": "A secure, scalable platform launched on schedule and passed our compliance audit." }
    },
    {
        "id": "p003",
        "title": "AI-powered Personalization for E-Commerce",
        "industry": "Marketplaces",
        "outcome": "Conversion ↑ 18% and repeat purchase ↑ 24%",
        "summary": "Personalized recommendation engine with A/B tested models and real-time feature store.",
        "timeline_months": 5,
        "budget_band": "Scale",
        "team_size": 6,
        "tech_stack": ["Go", "Redis", "Python", "MLflow", "GCP"],
        "security": ["RBAC", "data-retention policy"],
        "images": ["personalization.png"],
        "testimonial": { "name": "R. Gupta", "title": "VP Product, ShopFast", "quote": "Personalization lifted revenue without degrading performance." }
    },
    {
        "id": "p004",
        "title": "Marketplace Modernization — Payments & Dispute Flow",
        "industry": "Marketplaces",
        "outcome": "Payment failures ↓ 70%; disputes automated → labor cost ↓ 40%",
        "summary": "Migrated monolith to microservices, introduced idempotent payment orchestration and webhook reliability layer.",
        "timeline_months": 9,
        "budget_band": "Enterprise",
        "team_size": 14,
        "tech_stack": ["Java", "Spring", "Kafka", "Kubernetes", "Postgres"],
        "security": ["PCI-DSS segmentation", "audit logs", "pen test"],
        "images": ["payments-arch.png"],
        "testimonial": { "name": "S. Rao", "title": "COO, MarketNow", "quote": "The migration was seamless; payments are now reliable at scale." }
    },
    {
        "id": "p005",
        "title": "MVP Mobile App for On-Demand Services",
        "industry": "SaaS",
        "outcome": "MVP launched in 8 weeks — user retention 35% at 30 days",
        "summary": "Lean mobile-first MVP with analytics, push-notifications, and basic ML for matching.",
        "timeline_months": 2,
        "budget_band": "MVP",
        "team_size": 4,
        "tech_stack": ["React Native", "Node.js", "Firebase"],
        "security": ["OAuth2", "secure storage"],
        "images": ["mvp-mobile.png"],
        "testimonial": { "name": "A. Kapoor", "title": "Founder, QuickServe", "quote": "They turned our idea into a working product fast and cleanly." }
    },
    {
        "id": "p006",
        "title": "Inventory Optimization for Retail Chain",
        "industry": "Retail/IoT",
        "outcome": "Stockouts ↓ 35% and inventory holding cost ↓ 12%",
        "summary": "Demand forecasting model combined with automated replenishment and edge sync for stores.",
        "timeline_months": 6,
        "budget_band": "Scale",
        "team_size": 8,
        "tech_stack": ["Python", "TensorFlow", "Postgres", "RabbitMQ"],
        "security": ["VPC peering", "role-based access", "encrypted sync"],
        "images": ["inventory-graph.png"],
        "testimonial": { "name": "L. Fernandes", "title": "Head Supply Chain, RetailCo", "quote": "Demand forecasts became actionable; stores rarely run out now." }
    }
];

export default defineEventHandler((event) => {
    const query = getQuery(event);
    let filteredProjects = projects;

    if (query.industry) {
        const filters = (query.industry as string).split(',');
        filteredProjects = filteredProjects.filter(p => filters.includes(p.industry));
    }

    if (query.tech) {
        const filters = (query.tech as string).split(',');
        filteredProjects = filteredProjects.filter(p =>
            p.tech_stack.some(t => filters.includes(t))
        );
    }

    return filteredProjects;
});
