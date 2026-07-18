export type ServiceHelp = { h: string; p: string };

export type ServiceDetail = {
  slug: string;
  image: string;
  title: string;
  featured?: boolean;
  tagline: string;
  intro: string;
  offerings: string[];
  helps: ServiceHelp[];
  steps?: string[];
};

export const SERVICES: ServiceDetail[] = [
  {
    slug: "finance-facilitation",
    image: "/img/finance-facilitation.jpg",
    title: "Finance Facilitation",
    featured: true,
    tagline:
      "We connect your business to the right lenders and structure the deal — from application to disbursement.",
    intro:
      "Good businesses rarely stall for lack of ideas — they stall for lack of timely funding. Rengana Capital bridges that gap, connecting you to the right banks and NBFCs and managing the process end to end so financing actually gets approved.",
    offerings: ["Equipment finance", "Trade finance", "Vehicle finance", "Project & working-capital finance"],
    helps: [
      { h: "Equipment finance", p: "Fund the machinery and equipment your operations need, structured to your cash flow." },
      { h: "Trade finance", p: "LCs, guarantees and trade lines that keep your imports, exports and supply chain moving." },
      { h: "Vehicle finance", p: "Commercial and fleet vehicle funding arranged through the most suitable lender." },
      { h: "Project & working capital", p: "Working-capital lines and project funding to expand capacity and win bigger contracts." },
    ],
    steps: [
      "A short, no-obligation call to understand your need",
      "We prepare a clear, lender-ready proposal",
      "We match you to the right banks and NBFCs",
      "We manage the process through to disbursement",
    ],
  },
  {
    slug: "financial-business-advisory",
    image: "/img/financial-business-advisory.jpg",
    title: "Financial & Business Advisory",
    tagline: "Practical, implementation-driven advice grounded in commercial realities — not just reports.",
    intro:
      "Two decades of hands-on experience across banks, NBFCs and enterprises means our advice is built to be acted on. We help you understand where the business really stands and what to do next.",
    offerings: ["Business consultancy", "Financial restructuring & audit review", "Bankable project reports & feasibility", "Gap analysis & business health check"],
    helps: [
      { h: "Business consultancy", p: "A trusted sounding board for the decisions that shape your growth and profitability." },
      { h: "Restructuring & audit review", p: "Assess financial health, optimise the balance sheet and improve performance." },
      { h: "Bankable project reports", p: "Feasibility studies and business plans that lenders and investors take seriously." },
      { h: "Gap analysis & health check", p: "Identify the operational, financial and strategic gaps holding the business back." },
    ],
  },
  {
    slug: "enterprise-growth",
    image: "/img/enterprise-growth.jpg",
    title: "Enterprise Growth & Performance",
    tagline: "Improve how the business runs and build a platform for sustainable, profitable growth.",
    intro:
      "Growth that lasts comes from stronger operations, not just more revenue. We help you tighten how the business runs and prepare it to scale.",
    offerings: ["Operational excellence & cost control", "Expansion & market development", "Business planning & budgeting", "Company restructuring"],
    helps: [
      { h: "Operational excellence", p: "Streamline workflows, cut inefficiency and strengthen financial discipline." },
      { h: "Expansion & market development", p: "Enter new markets and scale with a plan built for Oman's business landscape." },
      { h: "Planning & budgeting", p: "Turn ambition into realistic budgets, targets and a path to hit them." },
      { h: "Company restructuring", p: "Reshape the organisation for resilience, clarity and better decision-making." },
    ],
  },
  {
    slug: "trading",
    image: "/img/trading.jpg",
    title: "Trading",
    tagline: "Sourcing and supply support across general trade and essential industrial categories.",
    intro:
      "Alongside advisory and finance, Rengana supports businesses with sourcing and trade across essential categories — a practical extension of how we help clients grow.",
    offerings: ["General trading", "Building materials", "Industrial supplies", "Import & export"],
    helps: [
      { h: "General trading", p: "Reliable sourcing across a broad range of commercial goods." },
      { h: "Building materials", p: "Supply support for construction and development projects." },
      { h: "Industrial supplies", p: "Essential inputs for manufacturing and industrial operations." },
      { h: "Import & export", p: "Coordination and documentation to move goods across borders smoothly." },
    ],
  },
];

export function getService(slug: string) {
  return SERVICES.find((s) => s.slug === slug);
}
