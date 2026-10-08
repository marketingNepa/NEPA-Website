// =========================================================
// NEPA Engineering — central site data
// Single source of truth for company info, nav, and services.
// =========================================================

export const company = {
  name: "NEPA Engineering",
  legalName: "NEPA Engineering",
  tagline: "Building Services Engineering · Sydney",
  foundingYear: "2018",
  phonePrimary: "+61433465095",
  phonePrimaryDisplay: "0433 465 095",
  phoneSecondary: "+61434938035",
  phoneSecondaryDisplay: "0434 938 035",
  email: "info@nepaeng.com",
  address: {
    street: "Suite 1, Level 1, 310 Forest Road",
    locality: "Hurstville",
    region: "NSW",
    postcode: "2220",
    country: "AU",
  },
  addressSingleLine:
    "Suite 1, Level 1, 310 Forest Road, Hurstville NSW 2220",
  mapsUrl:
    "https://maps.google.com/?q=310+Forest+Road+Hurstville+NSW+2220",
  areaServed: "New South Wales, Australia",
  social: {
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
  },
} as const;

export type NavItem = { label: string; href: string };

export const primaryNav: NavItem[] = [
  { label: "Services", href: "/services" },
  { label: "CDC", href: "/services/cdc" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export type Service = {
  slug: string;
  num: string;
  name: string;
  shortName: string;
  image: string;
  excerpt: string;
  summary: string;
  /** Grouped scope of works shown on the service page. */
  scope: { title: string; items: string[] }[];
  /** Short outcome statements. */
  outcomes: { title: string; body: string }[];
  seoTitle: string;
  seoDescription: string;
};

export const services: Service[] = [
  {
    slug: "fire-protection",
    num: "01",
    name: "Fire Protection Services",
    shortName: "Fire Protection",
    image: "/assets/img/fire.jpg",
    excerpt:
      "Sprinkler and hydrant systems, detection & alarms, EWIS, aspirated smoke detection and extinguisher strategy — fully certifiable.",
    summary:
      "Life-safety systems designed to protect people and property while meeting every NSW compliance obligation. From concept strategy through to certifiable documentation, we engineer fire protection that performs on the day it matters.",
    scope: [
      {
        title: "Suppression",
        items: [
          "Automatic sprinkler systems",
          "Fire hydrant & hose reel systems",
          "Pump sets & tank sizing",
          "Gaseous & special-hazard suppression",
        ],
      },
      {
        title: "Detection & warning",
        items: [
          "Fire detection & alarm systems",
          "Emergency Warning & Intercom Systems (EWIS)",
          "Aspirated smoke detection",
          "Interface & cause-and-effect matrices",
        ],
      },
      {
        title: "Strategy & documentation",
        items: [
          "Portable extinguisher strategy",
          "Fire-engineering coordination",
          "Fire block plans",
          "Certifiable design documentation",
        ],
      },
    ],
    outcomes: [
      {
        title: "Compliant by design",
        body: "Every system is engineered against the NCC and relevant Australian Standards from the first sketch.",
      },
      {
        title: "Smarter infrastructure",
        body: "On one project a single smarter idea removed two tanks and pumps from the hydrant system — saving cost and space.",
      },
    ],
    seoTitle: "Fire Protection Engineering Sydney | NEPA Engineering",
    seoDescription:
      "Fire protection design in Sydney & NSW: sprinklers, hydrants, detection, EWIS and extinguisher strategy. Certifiable, NCC-compliant engineering.",
  },
  {
    slug: "hydraulic",
    num: "02",
    name: "Hydraulic Services",
    shortName: "Hydraulic Services",
    image: "/assets/img/hydraulic.jpg",
    excerpt:
      "Plumbing & drainage, stormwater, hot/cold water, gas and trade waste, rainwater reuse, irrigation and pump sizing.",
    summary:
      "Water in, water out, and everything between — engineered for efficiency and buildability. We design hydraulic services that reduce running costs and simplify construction while meeting authority requirements across NSW.",
    scope: [
      {
        title: "Water & gas",
        items: [
          "Hot & cold water reticulation",
          "Natural gas services",
          "Pump sizing & boosting",
          "Backflow prevention",
        ],
      },
      {
        title: "Drainage & stormwater",
        items: [
          "Sanitary plumbing & drainage",
          "Stormwater drainage & detention",
          "Trade waste systems",
          "On-site detention (OSD) design",
        ],
      },
      {
        title: "Sustainability",
        items: [
          "Rainwater harvesting & reuse",
          "Water-sensitive urban design",
          "Irrigation design",
          "Greywater strategy",
        ],
      },
    ],
    outcomes: [
      {
        title: "Pays back",
        body: "Smart tank sizing and reuse strategy cut both water bills and infrastructure cost on mid-rise developments.",
      },
      {
        title: "Authority-ready",
        body: "Documentation prepared to satisfy Sydney Water and local council requirements first time.",
      },
    ],
    seoTitle: "Hydraulic Engineering Sydney | NEPA Engineering",
    seoDescription:
      "Hydraulic design in Sydney & NSW: plumbing, drainage, stormwater, gas, trade waste and rainwater reuse. Efficient, buildable, authority-ready.",
  },
  {
    slug: "mechanical",
    num: "03",
    name: "Mechanical Services",
    shortName: "Mechanical Services",
    image: "/assets/img/mechanical.jpg",
    excerpt:
      "Air conditioning, car-park and kitchen ventilation, heat load, central plant, smoke management and air distribution.",
    summary:
      "Comfortable, healthy, energy-efficient buildings start with mechanical design that balances code compliance, running cost and buildability — from a single tenancy to central plant for a whole development.",
    scope: [
      {
        title: "HVAC",
        items: [
          "Air conditioning & VRF systems",
          "Heat-load calculations",
          "Central plant & chilled water",
          "Air distribution design",
        ],
      },
      {
        title: "Ventilation",
        items: [
          "Car-park ventilation",
          "Kitchen & exhaust ventilation",
          "Stair & lift pressurisation",
          "Mechanical smoke management",
        ],
      },
      {
        title: "Efficiency",
        items: [
          "Energy modelling & NABERS strategy",
          "BCA Section J compliance",
          "Controls & BMS strategy",
          "Plant selection & optimisation",
        ],
      },
    ],
    outcomes: [
      {
        title: "Energy aware",
        body: "Designs weighed against energy use and lifecycle cost, not just capital spend.",
      },
      {
        title: "Buildable",
        body: "Plant and distribution coordinated early so there are no surprises in the ceiling space on site.",
      },
    ],
    seoTitle: "Mechanical Engineering Sydney | NEPA Engineering",
    seoDescription:
      "Mechanical design in Sydney & NSW: air conditioning, ventilation, smoke management, central plant and energy-efficient HVAC for commercial buildings.",
  },
  {
    slug: "electrical",
    num: "04",
    name: "Electrical Services",
    shortName: "Electrical Services",
    image: "/assets/img/electrical.jpg",
    excerpt:
      "Building infrastructure and mains distribution, lighting and emergency lighting, communications, AV, security and controls.",
    summary:
      "Power, light and connectivity engineered to be safe, efficient and future-ready. We design electrical infrastructure that supports how a building is actually used — and how it will adapt over its life.",
    scope: [
      {
        title: "Power",
        items: [
          "Mains & sub-mains distribution",
          "Switchboard design",
          "Load calculations",
          "Standby & emergency power",
        ],
      },
      {
        title: "Lighting",
        items: [
          "Interior & exterior lighting design",
          "Emergency & exit lighting",
          "Lighting control systems",
          "Energy-efficient luminaire selection",
        ],
      },
      {
        title: "Communications & controls",
        items: [
          "Communications & data infrastructure",
          "Audio-visual systems",
          "Security, access & CCTV",
          "Building controls integration",
        ],
      },
    ],
    outcomes: [
      {
        title: "Future-ready",
        body: "Infrastructure sized and routed with headroom for the way buildings keep changing.",
      },
      {
        title: "Coordinated",
        body: "Electrical routes resolved against every other service before documentation is issued.",
      },
    ],
    seoTitle: "Electrical Engineering Sydney | NEPA Engineering",
    seoDescription:
      "Electrical design in Sydney & NSW: mains distribution, lighting, emergency lighting, communications, AV, security and controls for commercial buildings.",
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
