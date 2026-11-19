import { siteConfig } from "@/data/site";

export type BusinessStatus = "live" | "coming-soon";

export type FaqItem = {
  question: string;
  answer: string;
};

export type Business = {
  id: "digital" | "fresh" | "wheels" | "store";
  slug: string;
  name: string;
  category: string;
  summary: string;
  description: string;
  href: string;
  status: BusinessStatus;
  image?: {
    src: string;
    alt: string;
  };
  seo?: {
    title: string;
    description: string;
    keywords: string[];
  };
  overview?: string[];
  services?: { title: string; description: string }[];
  audience?: string[];
  faqs?: FaqItem[];
};

export const businesses: Business[] = [
  {
    id: "digital",
    slug: "amren-digital",
    name: "AMREN Digital",
    category: "Digital Marketing & Web Development",
    summary: "Websites, SEO, performance marketing, social media and branding for UAE businesses.",
    description:
      "AMREN Digital is a UAE digital agency that plans, builds and runs the online presence of businesses across the UAE, from the website itself to the search, paid and social channels that bring customers to it.",
    href: siteConfig.links.digital,
    status: "live",
    image: {
      src: "/images/businesses/amren-digital.webp",
      alt: "AMREN Digital logo",
    },
    seo: {
      title: "AMREN Digital: Digital Marketing & Web Agency, Dubai & UAE",
      description:
        "AMREN Digital is a UAE agency for website development, SEO, performance marketing, social media management and branding for businesses across the UAE.",
      keywords: [
        "digital marketing agency Dubai",
        "digital marketing agency UAE",
        "web development UAE",
        "website design Dubai",
        "SEO services UAE",
        "social media management UAE",
        "Google Ads agency UAE",
        "branding agency UAE",
      ],
    },
    overview: [
      "AMREN Digital works with UAE businesses that need their website and marketing to produce enquiries and sales, not just traffic. Projects are scoped around a clear commercial goal and measured against it.",
      "The team covers the full chain: brand identity, website design and development, search engine optimisation, paid advertising on Google and Meta, and day-to-day social media management. Clients can engage one service or hand over the whole digital function.",
    ],
    services: [
      {
        title: "Website Design & Development",
        description:
          "Fast, mobile-first business websites and landing pages, built to rank and to convert visitors into enquiries.",
      },
      {
        title: "Search Engine Optimisation",
        description:
          "Technical SEO, on-page optimisation, local SEO and content that helps UAE businesses rank on Google for the searches their customers make.",
      },
      {
        title: "Performance Marketing",
        description:
          "Google Ads and Meta Ads campaigns managed against cost per lead and return on ad spend, with transparent reporting.",
      },
      {
        title: "Social Media Management",
        description:
          "Content planning, production and community management across Instagram, LinkedIn, Facebook and TikTok.",
      },
      {
        title: "Branding & Identity",
        description:
          "Logos, visual identity systems and brand guidelines for new and growing businesses.",
      },
    ],
    audience: [
      "SMEs and startups in Dubai and the wider UAE",
      "Retail, hospitality and food businesses",
      "Professional and B2B service firms",
      "Companies launching a new brand or website",
    ],
    faqs: [
      {
        question: "What services does AMREN Digital offer?",
        answer:
          "AMREN Digital offers website design and development, search engine optimisation (SEO), performance marketing on Google and Meta, social media management, and branding and visual identity.",
      },
      {
        question: "Does AMREN Digital work with businesses in Dubai?",
        answer:
          "Yes. AMREN Digital works with businesses in Dubai, Sharjah, Abu Dhabi and across all seven emirates of the UAE.",
      },
      {
        question: "Can I hire AMREN Digital for a single service?",
        answer:
          "Yes. Services can be engaged individually, for example a new website or an SEO programme, or combined into a complete digital marketing retainer.",
      },
      {
        question: "How do I request a proposal?",
        answer:
          "Send an enquiry through the AMREN contact page or visit digital.amren.ae. The team will review your requirements and reply with a recommended scope.",
      },
    ],
  },
  {
    id: "fresh",
    slug: "amren-fresh",
    name: "AMREN Fresh",
    category: "Fresh Produce Supply",
    summary: "Fresh and cut fruits, vegetables and ready-to-cook produce for UAE food businesses.",
    description:
      "AMREN Fresh supplies fresh fruits, vegetables, cut produce and ready-to-cook items to shops, supermarkets, restaurants and catering businesses across the UAE, on both wholesale and retail terms.",
    href: siteConfig.links.fresh,
    status: "live",
    image: {
      src: "/images/businesses/amren-fresh.webp",
      alt: "AMREN Fresh logo",
    },
    seo: {
      title: "AMREN Fresh: Fresh Fruit & Vegetable Supplier in the UAE",
      description:
        "AMREN Fresh supplies fresh fruit, vegetables and ready-to-cook produce to supermarkets, restaurants and food businesses across the UAE. Wholesale & retail.",
      keywords: [
        "fresh produce supplier UAE",
        "fruit and vegetable supplier Dubai",
        "wholesale vegetables UAE",
        "fresh fruits supplier UAE",
        "cut fruit supplier UAE",
        "ready-to-cook vegetables UAE",
        "restaurant produce supplier UAE",
      ],
    },
    overview: [
      "AMREN Fresh is a fresh produce supplier serving food businesses across the UAE. Its focus is dependable quality and consistent supply, so that kitchens and shelves are stocked with produce that meets the same standard on every delivery.",
      "Alongside whole fruits and vegetables, AMREN Fresh prepares cut fruit and ready-to-cook vegetables, helping restaurants and caterers reduce preparation time and waste.",
    ],
    services: [
      {
        title: "Fresh Fruits",
        description: "Seasonal and year-round fruit supplied whole, graded for retail display or kitchen use.",
      },
      {
        title: "Fresh Vegetables",
        description: "Everyday and specialty vegetables for supermarkets, groceries and professional kitchens.",
      },
      {
        title: "Cut & Prepared Produce",
        description: "Cut fruit and ready-to-cook vegetables, prepared to order to save kitchen time.",
      },
      {
        title: "Wholesale Supply",
        description: "Regular scheduled supply for supermarkets, groceries and food-service operators.",
      },
      {
        title: "Retail Orders",
        description: "Fresh produce available for smaller businesses and retail customers.",
      },
    ],
    audience: [
      "Supermarkets and grocery stores",
      "Restaurants, cafés and cloud kitchens",
      "Hotels and catering companies",
      "Retail customers",
    ],
    faqs: [
      {
        question: "What does AMREN Fresh supply?",
        answer:
          "AMREN Fresh supplies fresh fruits, fresh vegetables, cut fruit and ready-to-cook prepared vegetables.",
      },
      {
        question: "Which areas does AMREN Fresh deliver to?",
        answer:
          "AMREN Fresh serves businesses across the UAE. Contact the team to confirm delivery schedules for your location.",
      },
      {
        question: "Does AMREN Fresh supply wholesale?",
        answer:
          "Yes. AMREN Fresh supplies wholesale to supermarkets, groceries, restaurants and catering businesses, and also accepts retail orders.",
      },
      {
        question: "How do I open a supply account?",
        answer:
          "Send an enquiry through the AMREN contact page or visit fresh.amren.ae with your business details and expected volumes.",
      },
    ],
  },
  {
    id: "wheels",
    slug: "amr-wheels",
    name: "AMR Wheels",
    category: "Alloy Wheels",
    summary: "Premium cast, flow-formed and forged alloy wheels with verified fitment and UAE-wide delivery.",
    description:
      "AMR Wheels is an online alloy wheel store selling premium cast, flow-formed and forged wheels from leading brands, with fitment verified for each vehicle and insured delivery across all seven emirates.",
    href: siteConfig.links.wheels,
    status: "live",
    image: {
      src: "/images/businesses/amr-wheels.svg",
      alt: "AMR Wheels logo",
    },
    seo: {
      title: "AMR Wheels: Premium Alloy Wheels in Dubai & the UAE",
      description:
        "AMR Wheels sells premium cast, flow-formed and forged alloy wheels from Vossen, BBS, Method, Fuel and more, with verified vehicle fitment and delivery across the UAE.",
      keywords: [
        "alloy wheels UAE",
        "alloy wheels Dubai",
        "rims Dubai",
        "forged wheels UAE",
        "buy alloy wheels online UAE",
        "car rims Sharjah",
        "Vossen wheels UAE",
        "BBS wheels UAE",
      ],
    },
    overview: [
      "AMR Wheels helps UAE drivers choose and buy the right alloy wheels for their car. Customers select their make, model, year and trim, and see only the wheels the team has verified to fit, so there is no guessing on bolt pattern, offset or diameter.",
      "The range covers cast, flow-formed and forged wheels from brands including Vossen, BBS, Method Race Wheels, Fuel Off-Road, KMC, Konig and Forgestar, in sizes from 15 to 22 inches, for sport, luxury, performance and off-road builds.",
    ],
    services: [
      {
        title: "Premium Alloy Wheels",
        description: "Cast, flow-formed and forged wheels from brands AMR Wheels stands behind, in sizes from 15\" to 22\".",
      },
      {
        title: "Verified Fitment",
        description: "Every compatibility listing is checked by the team for the vehicle's bolt pattern, offset and size, never guessed.",
      },
      {
        title: "Shop by Vehicle or Style",
        description: "Browse by make and model, or by style: sport, luxury, performance, off-road and multi-spoke.",
      },
      {
        title: "Secure Online Payments",
        description: "Pay by card, Apple Pay or Google Pay through Ziina. Card details are never stored.",
      },
      {
        title: "UAE-Wide Delivery",
        description: "Fast, insured delivery across all seven emirates, free in Dubai, Sharjah and Ajman on orders over AED 2,000.",
      },
    ],
    audience: [
      "Car owners upgrading their wheels",
      "SUV and off-road enthusiasts",
      "Performance and luxury car drivers",
      "Garages and workshops across the UAE",
    ],
    faqs: [
      {
        question: "What does AMR Wheels sell?",
        answer:
          "AMR Wheels sells premium cast, flow-formed and forged alloy wheels from brands such as Vossen, BBS, Method Race Wheels, Fuel Off-Road, KMC and Konig.",
      },
      {
        question: "How do I know a wheel will fit my car?",
        answer:
          "Select your vehicle's make, model, year and trim on amr.amren.ae to see wheels the team has verified to fit. Wheel specialists are also available on WhatsApp, phone or email.",
      },
      {
        question: "Does AMR Wheels deliver across the UAE?",
        answer:
          "Yes. AMR Wheels delivers across all seven emirates, with free delivery in Dubai, Sharjah and Ajman on orders over AED 2,000.",
      },
      {
        question: "Where can I shop the full range?",
        answer:
          "Browse and order the full range at amr.amren.ae/shop, or send an enquiry through the AMREN contact page.",
      },
    ],
  },
  {
    id: "store",
    slug: "amren-store",
    name: "AMREN Store",
    category: "E-commerce",
    summary: "An online store for AMREN products, currently in development.",
    description:
      "AMREN Store is an e-commerce platform in development that will let customers across the UAE order AMREN products online.",
    href: siteConfig.links.store,
    status: "coming-soon",
    image: {
      src: "/images/businesses/amren-store.webp",
      alt: "AMREN Store logo",
    },
  },
];

export const getBusiness = (id: Business["id"]) =>
  businesses.find((business) => business.id === id)!;

export const getBusinessBySlug = (slug: string) =>
  businesses.find((business) => business.slug === slug && business.status === "live");

export const liveBusinesses = businesses.filter((business) => business.status === "live");
