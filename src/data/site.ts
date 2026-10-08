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
    facebook: "https://www.facebook.com/p/Nepa-Engineering-61587420660306/",
    linkedin: "https://www.linkedin.com/company/110203113/",
  },
} as const;

export type NavItem = { label: string; href: string };

export const primaryNav: NavItem[] = [
  { label: "Services", href: "/services" },
  { label: "CDC", href: "/services/cdc" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

// Project categories (keep in sync with the enum in src/content/config.ts).
export const projectCategories = [
  "Residential",
  "Commercial",
  "Industrial",
  "Boarding House",
] as const;

export type ArticleBlock = { h?: string; p?: string[] };

export type Service = {
  slug: string;
  num: string;
  name: string;
  shortName: string;
  image: string;
  imageAlt: string;
  excerpt: string;
  summary: string;
  /** Grouped scope of works shown on the service page. */
  scope: { title: string; items: string[] }[];
  /** Short outcome statements. */
  outcomes: { title: string; body: string }[];
  /** Long-form, SEO-oriented article body shown on the service page. */
  article: ArticleBlock[];
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
    imageAlt: "Fire pump room with pumps and red fire-protection pipework",
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
    article: [
      {
        p: [
          "Fire protection is the discipline that keeps people safe and buildings compliant when it matters most. At NEPA Engineering we design complete fire-services solutions for commercial, industrial and multi-residential buildings across Sydney and New South Wales — engineered from the first concept sketch to certifiable documentation, and coordinated with every other building service so there are no surprises on site.",
        ],
      },
      {
        h: "Fire safety design that satisfies the NCC and Australian Standards",
        p: [
          "Every fire system we design is developed against the National Construction Code (NCC) and the relevant Australian Standards — AS 2118 for automatic sprinklers, AS 2419 for fire hydrants, AS 1670 for detection and alarm systems, and AS 2293 for emergency and exit lighting. Designing to these standards from day one is what lets a certifier approve a project without rework.",
          "We prepare the fire services drawings, system layouts, hydraulic calculations and fire safety schedules that demonstrate compliance, whether your project follows the Deemed-to-Satisfy provisions or relies on a performance solution supported by a fire-engineering report.",
        ],
      },
      {
        h: "Sprinkler and hydrant systems",
        p: [
          "Automatic sprinkler systems control a fire by releasing water where heat activates the sprinkler heads. Correct design means hydraulic calculations, pipework layouts and water-flow analysis that prove the system performs during an emergency. Fire hydrant systems give firefighters reliable access to water, and depending on building size may include boosters, internal hydrant valves and dedicated fire pumps.",
          "Getting pump sizing, tank capacity and coverage right is where real value is created. On one project, a single smarter idea removed two tanks and pumps from a hydrant system — saving the client significant cost and floor space without compromising compliance.",
        ],
      },
      {
        h: "Detection, warning and emergency lighting",
        p: [
          "Fire detection and alarm systems alert occupants the moment smoke or heat is detected, using smoke and heat detectors, fire indicator panels and occupant warning systems. Buildings with sleeping occupants — such as boarding houses and residential developments — usually need more advanced detection. Emergency lighting and illuminated exit signage keep evacuation paths visible during a power failure, and are mandatory across most commercial and multi-residential buildings.",
        ],
      },
      {
        h: "Why coordinate fire with every other service",
        p: [
          "Fire protection never exists in isolation — it shares ceiling space, risers and plant rooms with hydraulic, mechanical and electrical services. Because NEPA designs all four disciplines in-house, clashes are resolved on the drawing board rather than discovered during construction. That coordination produces cleaner documentation, smoother certification and faster, more predictable project delivery.",
        ],
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
    imageAlt: "In-ground plumbing and drainage pipework installed at a construction site",
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
    article: [
      {
        p: [
          "Hydraulic services cover everything to do with water, gas and drainage in a building — getting clean water in, waste water and stormwater safely out, and gas and fire-water supply where they are needed. NEPA Engineering designs hydraulic systems for commercial, industrial and residential projects across Sydney and NSW that are efficient to run, straightforward to build, and ready for authority approval.",
        ],
      },
      {
        h: "Water, gas and drainage designed as one system",
        p: [
          "Our hydraulic design covers hot and cold water reticulation, natural gas services, sanitary plumbing and drainage, stormwater, and trade waste. We size pumps and boosting sets, design backflow prevention, and set out below-ground drainage so it coordinates cleanly with the structure and the civil works. Documentation is prepared to meet the Plumbing Code of Australia, AS/NZS 3500 and the requirements of Sydney Water and the relevant council.",
        ],
      },
      {
        h: "Stormwater and on-site detention",
        p: [
          "Managing stormwater is often where a hydraulic design either saves money or quietly adds cost. We design stormwater drainage and on-site detention (OSD) to control peak discharge in line with council requirements, and look for opportunities to combine functions — so a single well-planned tank can do more than one job and free up valuable floor space.",
        ],
      },
      {
        h: "Rainwater reuse that pays back",
        p: [
          "Rainwater harvesting and reuse is frequently added to tick a sustainability box, then value-engineered out. Designed properly — sized to a reuse demand you can actually consume year-round and coordinated with the stormwater strategy — it reduces mains water consumption and can cut the size of other infrastructure. Smart tank sizing turns reuse from a 'nice to have' into a system that pays for itself.",
        ],
      },
      {
        h: "Buildable, coordinated, approved first time",
        p: [
          "Because NEPA designs fire, hydraulic, mechanical and electrical services together, hydraulic routes are resolved against every other service before documentation is issued. The result is buildable design, fewer clashes on site, and authority submissions that are right the first time.",
        ],
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
    imageAlt: "Mechanical plant room showing HVAC ductwork, insulated pipework and pumps",
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
    article: [
      {
        p: [
          "Mechanical services make a building comfortable, healthy and energy-efficient to run. NEPA Engineering designs heating, ventilation and air-conditioning (HVAC) and smoke-management systems for commercial and industrial buildings across Sydney and NSW — balancing code compliance, running cost and buildability from a single tenancy to central plant serving a whole development.",
        ],
      },
      {
        h: "Air conditioning and central plant",
        p: [
          "We carry out heat-load calculations, select and size plant, and design air-distribution systems — from packaged and VRF systems through to chilled-water central plant. Every design is weighed against energy use and lifecycle cost, not just capital spend, and documented to meet the National Construction Code, including the Section J energy-efficiency provisions.",
        ],
      },
      {
        h: "Ventilation and smoke management",
        p: [
          "Ventilation keeps indoor air healthy and controls contaminants — covering car-park ventilation, kitchen and general exhaust, and stair and lift pressurisation. In a fire, mechanical systems take on a second role in smoke management, maintaining tenable conditions for safe egress and firefighter access. Car-park ventilation in particular has to serve both everyday air quality and smoke control at once; demand-based control with variable-speed fans cuts running hours dramatically, while jet-fan layouts can remove large runs of ductwork where the geometry and smoke strategy allow.",
        ],
      },
      {
        h: "Energy efficiency and controls",
        p: [
          "Efficient mechanical design is as much about controls as it is about plant. We develop building-management and controls strategies, energy modelling and NABERS strategy so systems run only as hard as they need to — reducing operating cost over the life of the building.",
        ],
      },
      {
        h: "Designed with fire, hydraulic and electrical together",
        p: [
          "Mechanical plant and ductwork compete with every other service for a shrinking ceiling and riser zone. Because NEPA coordinates all four disciplines in-house, plant and distribution are resolved early — so there are no surprises in the ceiling space on site, and commissioning is cleaner and faster.",
        ],
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
    imageAlt: "Main switchboard with circuit breakers and distribution board wiring",
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
    article: [
      {
        p: [
          "Electrical services deliver power, light and connectivity throughout a building — safely, efficiently and with enough headroom for how the building will change over its life. NEPA Engineering designs electrical infrastructure for commercial, industrial and multi-residential projects across Sydney and NSW, from the main switchboard to the last light fitting.",
        ],
      },
      {
        h: "Power distribution and switchboards",
        p: [
          "We design mains and sub-mains distribution, main switchboards (MSB) and distribution boards, carry out load calculations, and plan standby and emergency power. Designs follow the Wiring Rules (AS/NZS 3000) and relevant standards, and are coordinated with the supply authority so the incoming supply, metering and switchroom all work together.",
        ],
      },
      {
        h: "Lighting and emergency lighting",
        p: [
          "Our lighting design covers interior and exterior lighting, energy-efficient luminaire selection and lighting-control systems, alongside the emergency and exit lighting required for safe evacuation under AS 2293. Good lighting design balances the look and function of a space with the energy-efficiency obligations of the National Construction Code.",
        ],
      },
      {
        h: "Communications, security and controls",
        p: [
          "Modern buildings depend on more than power. We design communications and data infrastructure, audio-visual systems, security, access control and CCTV, and integrate building controls — sized and routed with the flexibility to adapt as technology and tenancies change.",
        ],
      },
      {
        h: "Coordinated with every other discipline",
        p: [
          "Cable routes, risers and switchrooms have to coexist with fire, hydraulic and mechanical services. Because NEPA designs all four disciplines under one roof, electrical routes are resolved against every other service before documentation is issued — producing coordinated, buildable, future-ready infrastructure.",
        ],
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

// ---------------------------------------------------------
// Trusted partners / client logos.
// To use a real logo, drop the file in public/assets/img/partners/
// and set `logo: "/assets/img/partners/<file>.svg"`.
// Until a logo image is supplied, the `name` renders as a text wordmark.
// ---------------------------------------------------------
export type Partner = { name: string; logo?: string; url?: string };

export const partners: Partner[] = [
  { name: "Client One" },
  { name: "Client Two" },
  { name: "Client Three" },
  { name: "Client Four" },
  { name: "Client Five" },
];
