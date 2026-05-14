export const siteConfig = {
  businessName: 'Building & Air Maintenance',
  businessType: 'HVAC Contractor',
  tagline: 'Commercial HVAC Restoration & IAQ for Mission-Critical Facilities',
  phone: '(570) 900-5827',
  phoneRaw: '5709005827',
  email: 'info@buildingandair.com',
  owner: 'BAM Leadership',
  yearFounded: 2020,
  yearsExperience: 25,
  logo: '/logo.png',

  title: 'BAM | Building & Air Maintenance — Commercial HVAC Restoration',
  description:
    'Commercial HVAC restoration, IAQ, and compliance-focused mechanical services for institutional facilities in PA, NJ, MD, DE, and Southern NY.',
  ogImage: '/bam-logo.webp',

  mainAddress: {
    street: '196 Dadburnhams Road',
    city: 'Pine Grove',
    state: 'PA',
    zip: '17963',
    country: 'US',
  },

  geo: {
    lat: 40.5484,
    lng: -76.3853,
  },

  socialLinks: [
    'https://www.facebook.com/p/Building-and-Air-Maintenance-LLC-61568190331014/',
  ],
  googleBusinessUrl: '',
  gbpReviewLink: '',

  serviceAreas: [
    'Pennsylvania',
    'New Jersey',
    'Maryland',
    'Delaware',
    'Southern New York',
    'Philadelphia Metro',
    'Baltimore Metro',
    'Wilmington Metro',
    'South Jersey',
    'Harrisburg / York',
  ],

  gtmId: '',

  ctaLabel: 'Request a Site Visit',

  /** The BAM Method: 4 process steps */
  processSteps: [
    { id: 'diagnose', title: 'Diagnose', description: 'Assessment and identification of system condition, performance loss, and compliance exposure.' },
    { id: 'restore', title: 'Restore', description: 'Standards-aligned restoration work with protection and containment appropriate for the environment.' },
    { id: 'verify', title: 'Verify', description: 'Testing and validation to confirm performance recovery and compliance readiness.' },
    { id: 'document', title: 'Document', description: 'Audit-ready documentation suitable for internal review and external inspections.' },
  ],

  /** 12 HVAC services — core (7) + specialty (5) */
  services: [
    { id: 'cooling-tower', title: 'Cooling Tower Restoration', slug: 'cooling-tower', category: 'core' as const, shortDescription: 'Comprehensive structural and surface restoration, including specialized epoxy coating, lining, and cooling tower basin restoration to address leaks, stop corrosion, and prevent catastrophic downtime.' },
    { id: 'chiller', title: 'Chiller Restoration', slug: 'chiller', category: 'core' as const, shortDescription: 'Institutional-grade chiller refurbishment, featuring precision tube brushing and descaling to extend your high-value equipment\'s life and drastically reduce your HVAC energy spend.' },
    { id: 'ahu', title: 'AHU & Coil Restoration', slug: 'ahu', category: 'core' as const, shortDescription: 'Deep cleaning and structural refurbishment of air handling units and coils to restore maximum airflow, optimize mechanical performance, and reclaim wasted energy.' },
    { id: 'ducts', title: 'NADCA-Aligned Duct Cleaning', slug: 'duct-cleaning', category: 'core' as const, shortDescription: 'Rigorous, compliance-driven commercial duct cleaning for K-12, healthcare, and federal facilities to remove contaminants and support strict indoor environmental standards.' },
    { id: 'iaq', title: 'Commercial Indoor Air Quality', slug: 'iaq', category: 'core' as const, shortDescription: 'Advanced IAQ diagnostics and strategic HEPA & filter management designed to support ASHRAE compliance, improve facility LEED ratings, and ensure safe air for occupants.' },
    { id: 'mold', title: 'Mold Remediation (Commercial)', slug: 'mold-remediation', category: 'core' as const, shortDescription: 'Discreet, expert identification and remediation of microbial growth within commercial mechanical systems. Our "do no harm" approach safeguards your people and your facility.' },
    { id: 'pm', title: 'Preventive Maintenance Programs', slug: 'preventive-maintenance', category: 'core' as const, shortDescription: 'Data-driven, long-term maintenance partnerships that replace costly emergency repairs with predictable forecasting, protecting your assets and your budget.' },
    { id: 'epoxy', title: 'Epoxy Coating & Lining', slug: 'epoxy-coating', category: 'specialty' as const, shortDescription: 'Protective coating systems for cooling towers, basins, and mechanical surfaces exposed to corrosion.' },
    { id: 'tubes', title: 'Tube Brushing & Descaling', slug: 'tube-brushing', category: 'specialty' as const, shortDescription: 'Mechanical tube cleaning and descaling to remove buildup that restricts heat transfer.' },
    { id: 'basin', title: 'Cooling Tower Basin Restoration', slug: 'basin-restoration', category: 'specialty' as const, shortDescription: 'Structural and surface restoration to address leaks, corrosion, and material degradation.' },
    { id: 'hepa', title: 'HEPA & Filter Management', slug: 'hepa-filter-management', category: 'specialty' as const, shortDescription: 'Turnkey replacement and DOP testing for high-efficiency filtration in critical care zones.' },
    { id: 'dampers', title: 'Fire Damper Compliance', slug: 'fire-damper-compliance', category: 'specialty' as const, shortDescription: 'Critical inspection and maintenance of fire dampers to ensure life safety systems function perfectly and consistently pass stringent Joint Commission and local fire code surveys.' },
  ],

  /** 11 industries served */
  industries: [
    { id: 'healthcare', title: 'Healthcare & Hospitals', slug: 'healthcare', shortDescription: 'Infection control support, IAQ compliance, and sterile environment maintenance to meet Joint Commission and ASHRAE standards.' },
    { id: 'education', title: 'Education (K–12 & Higher Ed)', slug: 'education', shortDescription: 'Indoor environmental quality programs and preventive maintenance that keep students, faculty, and staff breathing clean air year-round.' },
    { id: 'industrial', title: 'Industrial Manufacturing', slug: 'industrial', shortDescription: 'Cooling tower restoration and process-critical HVAC maintenance to prevent unplanned production shutdowns and reduce energy waste.' },
    { id: 'food-processing', title: 'Food Processing', slug: 'food-processing', shortDescription: 'Sanitation-grade duct cleaning and coil restoration to maintain safe air handling in temperature-sensitive production environments.' },
    { id: 'government', title: 'Government & Secure Facilities', slug: 'government', shortDescription: 'Discreet, compliance-driven HVAC services for high-security environments where documentation and zero disruption are mandatory.' },
    { id: 'commercial', title: 'Commercial Real Estate', slug: 'commercial', shortDescription: 'HVAC life-extension and energy spend reduction for office and mixed-use properties targeting improved LEED ratings and tenant retention.' },
    { id: 'retail', title: 'Retail & Multi-Site Chains', slug: 'retail', shortDescription: 'Consistent, scalable maintenance programs across dozens of locations with predictable budgeting and minimal store disruption.' },
    { id: 'senior-care', title: 'Senior Living & Assisted Living', slug: 'senior-care', shortDescription: 'IAQ-focused HVAC restoration for vulnerable populations where infection control and air quality are directly tied to resident health.' },
    { id: 'cold-storage', title: 'Cold Storage & Refrigeration', slug: 'cold-storage', shortDescription: 'Coil and evaporator restoration for refrigerated warehouses where even minor equipment degradation risks product loss and compliance failure.' },
    { id: 'data-centers', title: 'Data Centers & Mission Critical', slug: 'data-centers', shortDescription: 'Precision cooling system maintenance for facilities where thermal uptime is non-negotiable and downtime costs thousands per minute.' },
    { id: 'labs', title: 'Labs & Life Sciences', slug: 'labs', shortDescription: 'HEPA filtration management and AHU restoration for pharmaceutical, biotech, and research facilities with strict cleanroom and IAQ standards.' },
  ],

  /** Accreditations & trust signals */
  accreditations: [
    { name: 'NADCA Certified', logo: '/accreditations/nadca.webp' },
    { name: 'OSHA Compliant', logo: '/accreditations/osha.webp' },
    { name: 'PA COSTARS Vendor', logo: '/accreditations/costars.webp' },
    { name: 'EPA Certified', logo: '/accreditations/epa.webp' },
    { name: 'Schuylkill County Chamber', logo: '/accreditations/schuylkill-chamber.webp' },
  ],

  /** Super pixel / lead-gen tools */
  tools: [
    { id: 'iaq-risk-score', title: 'IAQ Risk Score Tool', slug: 'iaq-risk-score', shortDescription: 'Interactive assessment that scores indoor air quality risk for your facility.' },
    { id: 'restoration-value', title: 'Restoration Value Estimator', slug: 'restoration-value-estimator', shortDescription: 'ROI calculator for equipment restoration versus replacement.' },
  ],

  /** Location page structure: states + metros */
  locationStates: [
    { id: 'pennsylvania', title: 'Pennsylvania', slug: 'pennsylvania' },
    { id: 'new-jersey', title: 'New Jersey', slug: 'new-jersey' },
    { id: 'maryland', title: 'Maryland', slug: 'maryland' },
    { id: 'delaware', title: 'Delaware', slug: 'delaware' },
    { id: 'new-york', title: 'Southern New York', slug: 'southern-new-york' },
  ],
  locationMetros: [
    { id: 'philadelphia', title: 'Philadelphia', slug: 'philadelphia' },
    { id: 'baltimore', title: 'Baltimore', slug: 'baltimore' },
    { id: 'wilmington', title: 'Wilmington', slug: 'wilmington' },
    { id: 'south-jersey', title: 'South Jersey', slug: 'south-jersey' },
    { id: 'harrisburg-york', title: 'Harrisburg / York', slug: 'harrisburg-york' },
  ],

  /** Residential silo — mockup scaffold. Copy is placeholder pending owner answers. */
  residential: {
    enabled: true,
    /** Placeholder: pending owner confirmation of a dedicated residential line */
    phone: '(570) 900-5827',
    phoneRaw: '5709005827',
    ctaLabel: 'Get a Free Estimate',
    emergencyCtaLabel: '24/7 Emergency Service',
    serviceAreaCounties: ['Schuylkill', 'Berks', 'Lebanon', 'Dauphin'],
    serviceAreaCities: [
      { name: 'Pine Grove', slug: 'pine-grove', state: 'PA', zip: '17963', lat: 40.5484, lng: -76.3853 },
      { name: 'Pottsville', slug: 'pottsville', state: 'PA', zip: '17901', lat: 40.6856, lng: -76.1955 },
      { name: 'Schuylkill Haven', slug: 'schuylkill-haven', state: 'PA', zip: '17972', lat: 40.6298, lng: -76.1716 },
      { name: 'Reading', slug: 'reading', state: 'PA', zip: '19601', lat: 40.3356, lng: -75.9269 },
      { name: 'Lebanon', slug: 'lebanon', state: 'PA', zip: '17042', lat: 40.3409, lng: -76.4113 },
    ],
    services: [
      { id: 'ac-repair', title: 'AC Repair', slug: 'ac-repair', shortDescription: 'When your AC quits in July, we answer the phone. Diagnostics, repairs, and refrigerant work on every brand of central air across Schuylkill, Berks, Lebanon, and Dauphin counties.' },
      { id: 'ac-install', title: 'AC Installation', slug: 'ac-install', shortDescription: 'New central air sized right for your home, not the truck inventory. You get the price in writing before we cut a single line, plus a written summary of what we installed.' },
      { id: 'furnace-repair', title: 'Furnace Repair', slug: 'furnace-repair', shortDescription: 'No heat on a 12 degree night is an emergency. We work on gas, oil, and electric furnaces, diagnose the actual problem, and tell you what it costs before we start.' },
      { id: 'furnace-install', title: 'Furnace Installation', slug: 'furnace-install', shortDescription: 'High efficiency gas, oil, or electric furnaces installed by licensed local techs. Permits pulled, old unit hauled, written warranty on the work.' },
      { id: 'heat-pump', title: 'Heat Pump Services', slug: 'heat-pump', shortDescription: 'Cold climate heat pumps that actually heat through a Pennsylvania winter. Repair, replace, and new installs, with current 25C federal tax credit guidance applied to your quote.' },
      { id: 'mini-split', title: 'Ductless Mini Split', slug: 'mini-split', shortDescription: 'Heat and cool the rooms your old ductwork forgot. Single zone and multi zone ductless installs for additions, finished basements, sunrooms, and older Pine Grove homes with no central system.' },
      { id: 'duct-cleaning', title: 'NADCA Certified Home Duct Cleaning', slug: 'duct-cleaning', shortDescription: 'We are the only NADCA certified duct cleaners in this part of Pennsylvania. Gold standard process, with before and after photos of every run.' },
      { id: 'iaq', title: 'Indoor Air Quality', slug: 'iaq', shortDescription: 'Whole home air purifiers, dehumidifiers, humidifiers, and UV systems for households with allergies, asthma, or a damp basement. NADCA certified team, full home IAQ assessments.' },
      { id: 'maintenance', title: 'Maintenance Plans', slug: 'maintenance', shortDescription: 'Spring AC tune up, fall furnace tune up, priority scheduling, and discounts on repairs. A flat membership fee that pays for itself the first time you avoid an emergency callout.' },
      { id: 'emergency', title: 'Emergency HVAC Service', slug: 'emergency', shortDescription: 'After hours dispatch for active maintenance customers when the heat or AC goes out. A real person on the line, a tech in a marked truck, and a price before we open the panel.' },
    ],
  },
};
