import { defineEventHandler, getQuery } from 'h3';

const projects = [
    {
        "id": "p001",
        "title": "Beach Terrace Inn",
        "industry": "Hospitality",
        "link": "https://www.beachterraceinn.com/",
        "outcome": "Enhanced guest booking experience",
        "summary": "A premium hotel website offering seamless online reservations and a beautiful showcase of the property.",
        "timeline_months": 3,
        "budget_band": "Scale",
        "team_size": 5,
        "tech_stack": ["Vue.js", "Node.js", "Postgres", "Tailwind CSS"],
        "security": ["SSL Encryption", "Secure Payment Gateway"],
        "images": ["/images/projects/beachterraceinn.png"],
        "testimonial": { "name": "Guest Relations", "title": "Beach Terrace Inn", "quote": "Our online bookings have significantly increased thanks to the new seamless interface." }
    },
    {
        "id": "p002",
        "title": "Kempinski Hotels",
        "industry": "Hospitality",
        "link": "https://www.kempinski.com/",
        "outcome": "Global luxury booking platform",
        "summary": "A luxurious and highly scalable hotel booking platform for Kempinski's global properties.",
        "timeline_months": 6,
        "budget_band": "Enterprise",
        "team_size": 12,
        "tech_stack": ["React", "Next.js", "Java", "AWS"],
        "security": ["PCI-DSS", "GDPR Compliant"],
        "images": ["/images/projects/kempinski.png"],
        "testimonial": { "name": "Operations Team", "title": "Kempinski", "quote": "The platform perfectly encapsulates our luxury brand while delivering robust performance." }
    },
    {
        "id": "p003",
        "title": "Steve Hightower Hair Salon",
        "industry": "Lifestyle",
        "link": "https://www.stevehightower.com/",
        "outcome": "Elevated online presence and booking",
        "summary": "A stylish salon website with integrated service menus and appointment booking features.",
        "timeline_months": 2,
        "budget_band": "MVP",
        "team_size": 3,
        "tech_stack": ["WordPress", "PHP", "MySQL"],
        "security": ["SSL", "Regular Backups"],
        "images": ["/images/projects/stevehightower.png"],
        "testimonial": { "name": "Steve Hightower", "title": "Owner", "quote": "Our clients love the new online booking experience." }
    },
    {
        "id": "p004",
        "title": "Michael Van Clarke",
        "industry": "E-Commerce",
        "link": "https://www.vanclarke.com/",
        "outcome": "High-performance e-commerce store",
        "summary": "Premium hair care e-commerce platform offering tailored product recommendations.",
        "timeline_months": 4,
        "budget_band": "Scale",
        "team_size": 6,
        "tech_stack": ["Shopify", "Liquid", "JavaScript"],
        "security": ["PCI-DSS", "Shopify Secure"],
        "images": ["/images/projects/vanclarke.png"],
        "testimonial": { "name": "E-Commerce Director", "title": "Van Clarke", "quote": "A beautifully designed store that converts brilliantly." }
    },
    {
        "id": "p005",
        "title": "Welcome Center Malta",
        "industry": "Tourism",
        "link": "https://www.welcome-center-malta.com/",
        "outcome": "Comprehensive relocation portal",
        "summary": "An all-in-one platform providing information, services, and guides for relocating to Malta.",
        "timeline_months": 5,
        "budget_band": "Scale",
        "team_size": 5,
        "tech_stack": ["Nuxt.js", "Vue.js", "Node.js"],
        "security": ["Data Privacy", "HTTPS"],
        "images": ["/images/projects/welcome-center-malta.png"],
        "testimonial": { "name": "Managing Director", "title": "Welcome Center Malta", "quote": "An invaluable resource for our clients, perfectly executed." }
    },
    {
        "id": "p006",
        "title": "Dentist CPH",
        "industry": "Healthcare",
        "link": "https://dentist-cph.dk/",
        "outcome": "Streamlined patient onboarding",
        "summary": "A modern dental clinic website featuring easy appointment scheduling and treatment information.",
        "timeline_months": 3,
        "budget_band": "Scale",
        "team_size": 4,
        "tech_stack": ["React", "Express.js", "MongoDB"],
        "security": ["Patient Data Protection", "HIPAA Aligned"],
        "images": ["/images/projects/dentist-cph.png"],
        "testimonial": { "name": "Clinic Manager", "title": "Dentist CPH", "quote": "Patient acquisition and appointment handling is smoother than ever." }
    },
    {
        "id": "p007",
        "title": "Scan Global Logistics",
        "industry": "Logistics",
        "link": "https://www.scangl.com/",
        "outcome": "Enterprise logistics portal",
        "summary": "A global transport and logistics website providing tracking and freight management information.",
        "timeline_months": 6,
        "budget_band": "Enterprise",
        "team_size": 10,
        "tech_stack": ["Angular", ".NET", "Azure"],
        "security": ["Enterprise Security", "ISO 27001 Aligned"],
        "images": ["/images/projects/scangl.png"],
        "testimonial": { "name": "Logistics Director", "title": "Scan Global", "quote": "A robust platform that handles our global tracking needs efficiently." }
    },
    {
        "id": "p008",
        "title": "Worldline",
        "industry": "FinTech",
        "link": "https://worldline.com/",
        "outcome": "Secure payment solutions showcase",
        "summary": "Corporate website for a global leader in secure payments and trusted transactions.",
        "timeline_months": 8,
        "budget_band": "Enterprise",
        "team_size": 15,
        "tech_stack": ["React", "Java", "Spring Boot", "AWS"],
        "security": ["PCI-DSS Level 1", "SOC2"],
        "images": ["/images/projects/worldline.png"],
        "testimonial": { "name": "Product Team", "title": "Worldline", "quote": "Our digital presence now truly reflects our leadership in secure payments." }
    },
    {
        "id": "p009",
        "title": "Valeo",
        "industry": "Automotive",
        "link": "https://www.valeo.com/",
        "outcome": "Global automotive supplier portal",
        "summary": "An expansive corporate platform detailing automotive innovations and sustainable mobility solutions.",
        "timeline_months": 7,
        "budget_band": "Enterprise",
        "team_size": 12,
        "tech_stack": ["Vue.js", "PHP", "MySQL", "Redis"],
        "security": ["Enterprise Grade", "GDPR"],
        "images": ["/images/projects/valeo.png"],
        "testimonial": { "name": "Communications", "title": "Valeo", "quote": "A massive leap forward for our corporate digital communications." }
    },
    {
        "id": "p010",
        "title": "Matter Motor Works",
        "industry": "Automotive",
        "link": "https://matter.in/",
        "outcome": "Innovative EV showcase",
        "summary": "A high-tech showcase platform for electric vehicles and sustainable energy solutions.",
        "timeline_months": 4,
        "budget_band": "Scale",
        "team_size": 8,
        "tech_stack": ["Next.js", "React", "Node.js", "GraphQL"],
        "security": ["VPC", "Encrypted Databases"],
        "images": ["/images/projects/matter.png"],
        "testimonial": { "name": "Marketing Head", "title": "Matter", "quote": "The platform perfectly embodies the futuristic vision of our brand." }
    },
    {
        "id": "p011",
        "title": "Amplo Global",
        "industry": "Enterprise",
        "link": "https://amploglobal.com/industry",
        "outcome": "Strategic AI business platform",
        "summary": "An AI-driven platform for enterprise strategy, operational readiness, and ESG compliance.",
        "timeline_months": 6,
        "budget_band": "Enterprise",
        "team_size": 10,
        "tech_stack": ["React", "Python", "Django", "PostgreSQL"],
        "security": ["SOC2 Type II", "Data Encryption"],
        "images": ["/images/projects/amploglobal.png"],
        "testimonial": { "name": "Strategy Team", "title": "Amplo Global", "quote": "The AI integration has revolutionized our product offering." }
    },
    {
        "id": "p012",
        "title": "PyThru",
        "industry": "FinTech",
        "link": "https://www.pythru.com/",
        "outcome": "Comprehensive accounting and billing",
        "summary": "A complete online accounting software for small businesses to manage invoicing, inventory, and banking.",
        "timeline_months": 5,
        "budget_band": "Scale",
        "team_size": 8,
        "tech_stack": ["Flutter", "Vue.js", "Node.js", "MongoDB"],
        "security": ["Bank-grade Security", "Encryption in transit and at rest"],
        "images": ["/images/projects/pythru.png"],
        "testimonial": { "name": "Founding Team", "title": "PyThru", "quote": "Our customers appreciate the intuitive interface and robust financial tools." }
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
