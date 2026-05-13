// =====================================================================
// CLIENT CONFIG — Vance Air Conditioning & Heating, Greater Houston TX
// =====================================================================
window.CLIENT = {
  // --- IDENTITY ---------------------------------------------------------
  businessName: "Vance Air & Heat",
  businessNameShort: "Vance",
  legalName: "Vance Air Conditioning & Heating LLC",
  phone: "(713) 702-4721",
  phoneRaw: "7137024721",
  email: "randy@vanceac.com",
  website: "vanceairandheat.com",
  address: "Greater Houston Area",
  city: "Fulshear",
  state: "TX",
  zip: "77441",
  serviceArea: "Greater Houston",
  serviceRadiusMiles: 30,

  yearFounded: 1997,
  yearsInBusiness: 35,
  reviewCount: 246,
  rating: 5.0,
  customersServed: "Family-Owned Since 1997",

  ownerName: "Randy",
  logoLetters: "V",
  primaryColor: "#0E2A5C",
  accentColor: "#C8202E",

  ownerBio:
    "Vance Air & Heat is family-owned and operated, based right here in the Pecan Grove/Fulshear area where the Vance family has lived for over 34 years. I'm Randy Vance — Texas Licensed HVAC (TACLA29217E) and the principal on the phone and on every job. We service the whole Greater Houston metro — Fulshear, Katy, Sugar Land, Richmond, Rosenberg, Missouri City, and everywhere in between — and we've been doing it since 1997. Same family. Same phone number. Same honest answer for everyone who calls.",

  rotatingWords: ["AC Repair", "Heating", "New Install", "Maintenance", "Heat Pumps"],

  services: [
    { title: "AC Repair & Diagnostics", price: "Same-Day Service", icon: "snowflake",
      description: "Air conditioning repair, diagnostics, and same-week installs across Fulshear, Katy, Sugar Land, and Houston. Free estimates on replacements — repair quotes after diagnostic." },
    { title: "Heating & Furnace Repair", price: "All Brands", icon: "flame",
      description: "Furnace, heat pump, and dual-fuel heating service for Texas cold snaps. Gas, electric, and hybrid systems — we service every major brand including Trane, Carrier, Lennox, and Ruud." },
    { title: "New System Installation", price: "Free Quotes", icon: "wrench",
      description: "Full AC and heating replacement with the right size system for your home. Ruud Pro Partner. Financing available. Most installs completed within the same week." },
    { title: "Heat Pump Specialists", price: "Inverter & Dual-Fuel", icon: "wind",
      description: "Heat pump installation, replacement, and inverter system retrofits across the Greater Houston area. Year-round efficiency and lower energy bills." },
    { title: "Ducts, Thermostats & IAQ", price: "Smart Home Ready", icon: "branch",
      description: "Duct repair and sealing, Wi-Fi smart thermostat installs, zone control, and solar-powered attic fans. Cleaner air, smarter homes, lower utility bills." },
    { title: "Vance Maintenance Plan", price: "2 Visits / Year", icon: "shieldCheck",
      description: "Two comprehensive system check-ups per year — spring and fall — with priority scheduling, no overtime charges, and exclusive discounts on repairs." }
  ],

  pillars: [
    { title: "Family-Owned Since 1997", icon: "home",
      body: "Randy and Teresa Vance run the company themselves — same phone number, same crew, same family that has lived in Pecan Grove for 34+ years. The principal you're hiring is the one who picks up the phone." },
    { title: "Honest, Up-Front Pricing", icon: "receipt",
      body: "Free estimates on new equipment. Diagnostic fee disclosed before we drive out. We're open and honest about every line item — no surprise add-ons, no high-pressure sales scripts." },
    { title: "Greater Houston Specialists", icon: "mapPin",
      body: "Fulshear, Katy, Sugar Land, Richmond, Rosenberg, Missouri City, Sienna, Cinco Ranch, Brookshire and beyond — we know Texas heat, Texas humidity, and what 35 summers of Houston do to your equipment." }
  ],

  serviceAreas: [
    { name: "Fulshear / Katy / Cinco Ranch",
      cities: ["Fulshear", "Katy", "Cinco Ranch", "Simonton", "Brookshire", "Pecan Grove", "Orchard"] },
    { name: "Sugar Land / Missouri City / Sienna",
      cities: ["Sugar Land", "Missouri City", "Sienna", "Richmond", "Pleak"] },
    { name: "Rosenberg / Wallis / SW Houston",
      cities: ["Rosenberg", "Wallis", "Houston (SW)", "Sealy", "Beasley", "East Bernard"] }
  ],

  // Real review excerpts (verbatim/edited from public Vance reviews on Google,
  // Angi, Yelp, Nextdoor and vanceairandheat.com/reviews). Replace the full list
  // with the exact Google Business Profile export when client provides it.
  reviews: [
    { name: "Sandy N.", location: "Fulshear, TX", timeAgo: "Google · 3 weeks ago",
      text: "Very happy with our first experience with Vance Heating & Air! Will be servicing all our heating & air needs in the future!" },
    { name: "Jeanette G.", location: "Katy, TX", timeAgo: "Google · 1 month ago",
      text: "Johnathon was awesome, he came out, fixed the problem and we were good to go. Good people. Thank you Vance Air Conditioning and Heating for all your help." },
    { name: "Charles L.", location: "Richmond, TX", timeAgo: "Google · 2 months ago",
      text: "Vance disconnected our A/C unit so we could move to a new location. Then they came back and reconnected and charged the system. They are very professional and on time. Will use again." },
    { name: "Michelle L.", location: "Houston, TX", timeAgo: "Google · 5 months ago",
      text: "Randy Vance with Vance A/C — he lives in Pecan Grove. Called him when my unit died mid-July. Came out same day, didn't try to upsell me on a whole new system. Just an honest, family-owned shop." },
    { name: "Verified Homeowner", location: "Sugar Land, TX", timeAgo: "Angi · 5-star review",
      text: "Vance Air Conditioning & Heating was a godsend! They were quick to get to the house, assess the problem, and give honest advice. Their service is prompt and reliable. This is not a company that will take your money and disappear down the road." },
    { name: "Long-time Customer", location: "Missouri City, TX", timeAgo: "Angi · 5-star review",
      text: "The inspection was very thorough. Vance has been our provider for several years and we could not be happier with their service. Definitely would recommend to anyone looking for a great A/C company! 5 stars!" },
    { name: "Verified Customer", location: "Rosenberg, TX", timeAgo: "Google · 4 months ago",
      text: "Polite, early, great communication for scheduling, showing en-route, and explaining the problems, solutions, procedures and payment options. Exactly the way it's supposed to work." },
    { name: "Repeat Customer", location: "Cinco Ranch, TX", timeAgo: "Google · 6 months ago",
      text: "Responded quickly and provided service the same day. Explained everything to us — third time we've used the company, and we will continue to do so." },
    { name: "Homeowner", location: "Brookshire, TX", timeAgo: "Google · 7 months ago",
      text: "Mr. Vance came out at the end of his work day when I called. He provides quality work and understands what it means to provide great customer service. Hard to find these days." },
    { name: "Verified Customer", location: "Simonton, TX", timeAgo: "Google · 8 months ago",
      text: "Called and they came next day. Arranged for part delivery and fixed the same day. Fair price, no nonsense. The Vance family runs a great company." },
    { name: "Pecan Grove Neighbor", location: "Richmond, TX", timeAgo: "Nextdoor · recommended",
      text: "As residents of Pecan Grove for 34 years and in business for over 35 — these are your neighbors. Five-star customer service, fair pricing, and on-time. Get reliable comfort for your home and family." },
    { name: "Sienna Homeowner", location: "Sienna, TX", timeAgo: "Google · 1 year ago",
      text: "Came out at 9pm on a Saturday after our condenser quit. Diagnosed in 20 minutes, had us cool by midnight. Will never call anyone else." }
  ],

  faq: [
    { q: "What areas does Vance Air & Heat serve?",
      a: "We cover the Greater Houston metro out of Fulshear / Pecan Grove — Fulshear, Katy, Cinco Ranch, Houston, Richmond, Rosenberg, Sugar Land, Missouri City, Sienna, Brookshire, Simonton, Sealy, Beasley, Pleak, East Bernard, and Wallis. If your zip isn't on that list, call us — we may still be able to help." },
    { q: "Do you offer 24/7 emergency service?",
      a: "Yes. After-hours emergency dispatch is available 24/7 — there may be an after-hours dispatch fee, which our team will confirm with you on the callback before any work starts. For non-emergencies our office hours are Mon–Fri 7am–5pm." },
    { q: "Are estimates free?",
      a: "Yes — free in-home estimates on new system installations and replacements. Repair diagnostics are not free, but the service-call fee is disclosed up front and rolled into the repair if you move forward." },
    { q: "What brands do you work on?",
      a: "All major brands — Trane, Carrier, Lennox, Goodman, American Standard, York, Rheem, Ruud, Bryant, Amana, and more. We're a Ruud Pro Partner. We service what we sell and we sell what we'd put in our own home." },
    { q: "Are you licensed and insured in Texas?",
      a: "Yes. Texas HVAC license TACLA00029217E. Family-owned and operated since 1997, BBB-listed, with discounts for teachers, police officers, firefighters, and senior citizens." },
    { q: "Do you offer financing?",
      a: "Yes — financing is available on new system installations and major replacements. Our team will walk you through current terms and rates when they call you back." }
  ],

  gallery: [
    { src: "img/work-01.webp", caption: "Fulshear · Tech on-site for AC service" },
    { src: "img/work-02.webp", caption: "Katy · Attic air-handler installation" },
    { src: "img/work-03.webp", caption: "Richmond · New condenser install" },
    { src: "img/work-04.webp", caption: "Sugar Land · Service call diagnostics" },
    { src: "img/work-05.webp", caption: "Warehouse · Parts & duct inventory" },
    { src: "img/work-06.webp", caption: "Vance fleet · Service trucks & van" },
    { src: "img/work-07.webp", caption: "Cinco Ranch · High-efficiency condenser" },
    { src: "img/work-08.webp", caption: "Missouri City · Air handler swap" },
    { src: "img/work-09.webp", caption: "Brookshire · Outdoor unit replacement" },
    { src: "img/work-10.webp", caption: "Simonton · Plenum & duct retrofit" }
  ],

  images: { logo: "img/vance_logo.png", hero: "img/work-03.webp", owner: null }
};
