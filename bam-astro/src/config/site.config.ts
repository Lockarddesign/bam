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
  googleBusinessUrl: 'https://maps.app.goo.gl/7QmbpMJe7XS9tdbK6',
  gbpReviewLink: '',

  googleRating: { value: '5.0', count: 3 },

  /** Verbatim Google reviews (do not paraphrase) */
  testimonials: [
    {
      name: 'Cheryl Bonilla',
      rating: 5,
      source: 'Google',
      quote: '5 stars all the way. Building and Air Maintenance exceeded my expectations. They were prompt, professional, and very knowledgeable. The quality of work was excellent, and they took the time to make sure everything was done right. Communication was great throughout the whole process, and it is clear they care about their customers and their reputation. I would not hesitate to use them again or recommend them to others.',
    },
    {
      name: 'Vincent Klemer',
      rating: 5,
      source: 'Google',
      quote: 'If you’re looking for top notch work look no further than BAM. Incredibly professional, thorough and on schedule from start to finish. Travis has been a blessing to work. I would recommend them to anyone. Will definitely have them do more work in the future',
    },
  ],

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
    { name: 'NADCA Certified', logo: '/accreditations/nadca.webp', width: 127 },
    { name: 'OSHA Compliant', logo: '/accreditations/osha.webp', width: 114 },
    { name: 'PA COSTARS Vendor', logo: '/accreditations/costars.webp', width: 173 },
    { name: 'EPA Certified', logo: '/accreditations/epa.webp', width: 121 },
    { name: 'Schuylkill County Chamber', logo: '/accreditations/schuylkill-chamber.webp', width: 104 },
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
    phone: '(570) 900-5827',
    phoneRaw: '5709005827',
    email: 'info@buildingandair.com',
    ctaLabel: 'Get a Free Estimate',
    /** Owner answers, 2026-06-04 questionnaire */
    responseTime: 'within a few days',
    hoursNote: 'Our hours follow the listing on our Google Business Profile.',
    warranty: 'One year workmanship guarantee plus a written statement of cleanliness on every job.',
    /** The one credential we lead with. No installs, no repairs. */
    credential: 'NADCA certified',
    positioning: {
      eyebrow: 'The only NADCA certified company in Schuylkill County',
      heroLine: 'From secure federal facilities to hospital surgical suites to your living room, the care never changes. Only the address.',
      promise: 'We are the only NADCA certified company in Schuylkill County. We bring commercial grade restoration and indoor air quality discipline to homes. Source removal, HEPA containment, encapsulation, and lab verified air sampling. Our focus is preventive maintenance that lowers your utility costs and extends the life of your equipment, not selling you a new system.',
    },
    serviceAreaCountyLabel: 'Schuylkill County',
    serviceAreaCities: [
      { name: 'Pottsville', slug: 'pottsville', state: 'PA', zip: '17901', lat: 40.6856, lng: -76.1955 },
      { name: 'Orwigsburg', slug: 'orwigsburg', state: 'PA', zip: '17961', lat: 40.6548, lng: -76.1019 },
      { name: 'Hegins', slug: 'hegins', state: 'PA', zip: '17938', lat: 40.6709, lng: -76.4858 },
    ],
    /** Shared NADCA preventive process. Same discipline on every job, no repairs. */
    process: [
      { num: '01', title: 'We assess.', body: 'A real person answers at (570) 900-5827 and gets the basics. On site, we inspect your system and air handler and show you what we find, with photos.' },
      { num: '02', title: 'We contain.', body: 'We set up negative pressure with true HEPA filtration at 99.97 percent at 0.3 micron so nothing we loosen ends up back in your living space.' },
      { num: '03', title: 'We clean.', body: 'Source removal to NADCA standard. Air rake and rotary brush through the duct runs, the air handler cleaned and sanitized, supply diffusers and return grilles HEPA cleaned.' },
      { num: '04', title: 'We verify.', body: 'A system performance check, a written closeout report, and on Total IAQ Care, third party lab analysis of air and surface samples. You get a statement of cleanliness in writing.' },
    ],
    services: [
      {
        id: 'duct-cleaning',
        title: 'Whole Home Duct Cleaning',
        slug: 'duct-cleaning',
        shortDescription: 'NADCA standard source removal under negative pressure with true HEPA filtration. Air rake and rotary brush through every run. The gold standard, and we are the only ones in the county certified to it.',
        heroSub: 'NADCA certified source removal under negative pressure. We are the only NADCA certified company in Schuylkill County. We clean your ductwork to the standard, not just the parts you can see.',
        included: [
          'A full inspection of your duct system and air handler before we start, with photos so you see what we see.',
          'Source removal under negative pressure with true HEPA filtration at 99.97 percent at 0.3 micron.',
          'Air rake and rotary brush agitation through the duct runs to dislodge what a vacuum alone leaves behind.',
          'A system performance check and a written closeout report when we finish.',
        ],
        faq: [
          { question: 'What does NADCA certified duct cleaning actually mean?', answer: 'NADCA is the National Air Duct Cleaners Association. Its standard means source removal, the contaminant is physically pulled out of the system under negative pressure with HEPA filtration, not just blown around. We are the only NADCA certified company in Schuylkill County, and we clean to that standard on every home.' },
          { question: 'How often should a home have its ducts cleaned?', answer: 'For most homes, every few years is reasonable, sooner if you have pets, allergies, recent renovation dust, or a damp basement. The honest answer for your home is something we tell you after we look, not before.' },
          { question: 'Will this lower my energy bills?', answer: 'Clean ductwork and a clean air handler move air with less resistance, which is part of why preventive maintenance can lower utility costs and extend equipment life over time. We focus on that, keeping what you own running well, not selling you a new system.' },
        ],
      },
      {
        id: 'iaq',
        title: 'Indoor Air Quality',
        slug: 'iaq',
        shortDescription: 'Filtration, purification, and humidity control for homes with allergies, asthma, or a damp basement. The same indoor air quality discipline we bring to hospitals and labs, scaled to your house.',
        heroSub: 'Filtration, purification, and humidity control, backed by the same indoor air quality standards we hold in surgical suites and federal facilities. We measure, we treat the source, and we can verify the result with lab analysis.',
        included: [
          'A walkthrough of how air actually moves through your home and where the problems start.',
          'Filtration and purification matched to your home, plus humidity control where damp or dry air is the issue.',
          'Sanitizing of the air handler and non porous surfaces with zBioscience products, not a fragrance cover up.',
          'The option to verify results with air and surface sampling sent to a third party lab.',
        ],
        faq: [
          { question: 'How do you know my indoor air quality is actually a problem?', answer: 'We can take air and surface samples and send them to a third party lab for analysis, so the answer is measured, not guessed. That is the same discipline we use in healthcare and federal facilities.' },
          { question: 'Do you sell air purifiers and humidifiers?', answer: 'Our focus is preventive maintenance and indoor air quality, not pushing equipment. We treat the source first, cleaning and sanitizing the system, and recommend filtration or humidity control only where it genuinely helps your home.' },
          { question: 'Can poor indoor air quality affect my family?', answer: 'Dust, mold, and humidity issues in a home HVAC system are a common driver of allergy and asthma symptoms. We focus on removing the source and verifying the result, which is why we hold the same standards in homes that we hold in hospitals.' },
        ],
      },
      {
        id: 'dryer-vent-cleaning',
        title: 'Dryer Vent Cleaning',
        slug: 'dryer-vent-cleaning',
        shortDescription: 'Lint buildup in a dryer vent is a fire risk and it makes your dryer work harder. We clear the full run, not just the opening, with the same containment discipline we bring to every job.',
        heroSub: 'A clogged dryer vent is a fire hazard and an energy drain. We clear the entire run, verify airflow, and leave you a clean, safe vent and a written record of the work.',
        included: [
          'Inspection of the full dryer vent run from the appliance to the exterior termination.',
          'Complete lint and debris removal through the entire duct, not just the visible opening.',
          'An airflow check at the termination so you know the vent is actually clear.',
          'A written note of what we found and cleared, part of your closeout record.',
        ],
        faq: [
          { question: 'Why does a dryer vent need cleaning?', answer: 'Lint builds up along the full run over time. It is a leading cause of home dryer fires, and a clogged vent forces the dryer to run longer and hotter, which costs you energy and shortens the appliance life.' },
          { question: 'How often should I have it done?', answer: 'For most homes, once a year is a sound rule, sooner if your dryer is taking longer to dry loads or running hot. It pairs naturally with an annual maintenance visit.' },
          { question: 'Is this an add on to a maintenance plan?', answer: 'It can be. Dryer vent cleaning is available on its own or as an add on to any of our annual maintenance plans.' },
        ],
      },
      {
        id: 'air-sampling',
        title: 'Air Sampling',
        slug: 'air-sampling',
        shortDescription: 'Air and surface sampling with third party lab analysis. When you want to know what is actually in your air, we measure it the same way we do for hospitals and labs, not by guessing.',
        heroSub: 'Air and surface sampling sent to an independent third party lab. This is how we verify results in surgical suites and federal facilities, and it is available to your home.',
        included: [
          'Collection of air and surface samples from the areas of your home that matter.',
          'Independent third party lab analysis, so the findings are objective, not our opinion.',
          'A plain English walkthrough of what the lab found and what, if anything, it means.',
          'A clear recommendation, with no pressure and nothing to sell you.',
        ],
        faq: [
          { question: 'Why would I want air sampling done?', answer: 'If anyone in the home has unexplained allergy or respiratory symptoms, or you want to confirm a duct cleaning or encapsulation worked, sampling gives you a measured answer instead of a guess. It is the verification step we include at our Total IAQ Care level.' },
          { question: 'Who analyzes the samples?', answer: 'An independent third party lab, not us. That keeps the result objective. We collect, they analyze, and we walk you through what it means.' },
          { question: 'Is air sampling an add on?', answer: 'Yes. It is available on its own and as an add on, and it is built into our Total IAQ Care maintenance level.' },
        ],
      },
      {
        id: 'maintenance-plans',
        title: 'Maintenance Plans',
        slug: 'maintenance-plans',
        shortDescription: 'Annual plans in three levels, Good, Better, and Best. Preventive care that keeps your air handler clean, your ductwork sound, and your utility costs down, on a schedule so you never have to think about it.',
        heroSub: 'Three annual levels, Good, Better, and Best. Preventive maintenance that lowers utility costs and extends the life of your equipment, on a schedule, with a closeout report every visit.',
        included: [
          'A clean and sanitized air handler, a fresh filter, and HEPA cleaned diffusers and grilles every year.',
          'A system performance check and a written closeout report on every visit.',
          'Higher levels add whole home duct cleaning and lined duct encapsulation.',
          'The top level adds third party lab air and surface sampling, our full IAQ verification.',
        ],
        faq: [
          { question: 'What is the difference between Good, Better, and Best?', answer: 'Good is air handler cleaning and a performance check. Better adds whole home duct source removal under HEPA negative pressure. Best adds IAQ 8000 encapsulation of lined ductwork plus third party lab air and surface sampling. Full details are on this page.' },
          { question: 'Why a maintenance plan instead of one off calls?', answer: 'Because the whole point is fewer surprises and longer equipment life. Preventive care on a schedule keeps your system clean and efficient, which lowers utility costs over time. We do not sell or replace equipment, so our incentive is keeping what you own running well.' },
          { question: 'Do you offer any discounts?', answer: 'We run a fall preventive maintenance opt in discount when you sign with the service agreement. Pricing is set per plan level, ask us for current numbers when we come out.' },
        ],
      },
    ],
    /** Good / Better / Best annual plans, verbatim from owner answers 2026-06-04. Pricing TBD per level. */
    plans: [
      {
        id: 'good',
        name: 'Good',
        tagline: 'Air Handler Cleaning',
        summary: 'The annual baseline. We clean and sanitize the heart of your system and confirm it is performing.',
        price: 'Pricing set per plan. Ask us.',
        includes: [
          'Clean and sanitize the air handler, zBioscience AC-C on the coils, Multitask on non porous surfaces.',
          'Replace the filter.',
          'HEPA clean the supply diffusers and return grilles.',
          'Run a full system performance check.',
          'Provide a written closeout report.',
        ],
      },
      {
        id: 'better',
        name: 'Better',
        tagline: 'Whole System Cleaning',
        summary: 'Everything in Good, plus whole home duct cleaning to the NADCA standard. No encapsulation.',
        price: 'Pricing set per plan. Ask us.',
        includes: [
          'Everything included in Good.',
          'Whole home duct source removal and cleaning under negative pressure.',
          'True HEPA filtration at 99.97 percent at 0.3 micron.',
          'Air rake and rotary brush through every duct run.',
        ],
      },
      {
        id: 'best',
        name: 'Best',
        tagline: 'Total IAQ Care',
        summary: 'Our complete level, the same service we delivered for the Muldowney residence. Everything in Better, plus encapsulation and lab verified sampling.',
        price: 'Pricing set per plan. Ask us.',
        featured: true,
        includes: [
          'Everything included in Better.',
          'IAQ 8000 encapsulation of internally lined ductwork.',
          'Air and surface sampling with third party lab analysis.',
          'Full indoor air quality verification, the same discipline we hold in healthcare and federal facilities.',
        ],
      },
    ],
    addOns: [
      { name: 'Dryer Vent Cleaning', slug: 'dryer-vent-cleaning' },
      { name: 'Air Sampling', slug: 'air-sampling' },
    ],
  },
};
