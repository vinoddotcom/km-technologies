import { defineEventHandler, getQuery } from 'h3';

const projects = [
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
        "testimonial": { "name": "Strategy Team", "title": "Amplo Global", "quote": "The AI integration has revolutionized our product offering." },
        "showOnHome": true,
        "showOnPortfolio": true
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
        "testimonial": { "name": "Founding Team", "title": "PyThru", "quote": "Our customers appreciate the intuitive interface and robust financial tools." },
        "showOnHome": true,
        "showOnPortfolio": true
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
        "testimonial": { "name": "Marketing Head", "title": "Matter", "quote": "The platform perfectly embodies the futuristic vision of our brand." },
        "showOnHome": true,
        "showOnPortfolio": true
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
        "testimonial": { "name": "Clinic Manager", "title": "Dentist CPH", "quote": "Patient acquisition and appointment handling is smoother than ever." },
        "showOnHome": false,
        "showOnPortfolio": true
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
        "testimonial": { "name": "Steve Hightower", "title": "Owner", "quote": "Our clients love the new online booking experience." },
        "showOnHome": false,
        "showOnPortfolio": true
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
        "testimonial": { "name": "E-Commerce Director", "title": "Van Clarke", "quote": "A beautifully designed store that converts brilliantly." },
        "showOnHome": false,
        "showOnPortfolio": true
    },
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
        "testimonial": { "name": "Guest Relations", "title": "Beach Terrace Inn", "quote": "Our online bookings have significantly increased thanks to the new seamless interface." },
        "showOnHome": false,
        "showOnPortfolio": true
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
        "testimonial": { "name": "Managing Director", "title": "Welcome Center Malta", "quote": "An invaluable resource for our clients, perfectly executed." },
        "showOnHome": false,
        "showOnPortfolio": true
    }
];

export default defineEventHandler((event) => {
    const query = getQuery(event);
    let filteredProjects = projects;

    if (query.home === 'true') {
        filteredProjects = filteredProjects.filter(p => p.showOnHome);
    } else if (query.portfolio === 'true') {
        filteredProjects = filteredProjects.filter(p => p.showOnPortfolio);
    }

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
