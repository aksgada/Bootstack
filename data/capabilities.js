/** Section 03 — the six capability territories. */

export const capabilities = [
  {
    id: 'brand',
    index: '01',
    title: 'Brand',
    verb: 'We decide what you stand for.',
    blurb:
      'Positioning that holds up in a crowded market, and an identity built to carry it everywhere.',
    items: ['Brand strategy', 'Brand identity', 'Visual identity', 'Brand positioning'],
    tone: 'yellow',
  },
  {
    id: 'create',
    index: '02',
    title: 'Create',
    verb: 'We make the work people remember.',
    blurb:
      'Content and campaigns produced at the pace social moves, without losing the craft.',
    items: ['Content creation', 'Social media', 'Creative campaigns', 'Video', 'Graphic design'],
    tone: 'cyan',
  },
  {
    id: 'grow',
    index: '03',
    title: 'Grow',
    verb: 'We turn attention into pipeline.',
    blurb:
      'Media measured against revenue, not impressions. Spend goes where it comes back.',
    items: ['Performance marketing', 'Meta Ads', 'Google Ads', 'SEO', 'Lead generation'],
    tone: 'blue',
  },
  {
    id: 'build',
    index: '04',
    title: 'Build',
    verb: 'We ship the digital front door.',
    blurb:
      'Fast, considered websites and experiences engineered to convert and easy to keep alive.',
    items: ['Websites', 'Landing pages', 'Digital experiences', 'Custom development'],
    tone: 'cyan',
  },
  {
    id: 'automate',
    index: '05',
    title: 'Automate',
    verb: 'We remove the manual work.',
    blurb:
      'The follow-ups, the reminders, the hand-offs — running quietly in the background, every day.',
    items: ['WhatsApp marketing', 'Email marketing', 'Marketing automation', 'Business workflows'],
    tone: 'yellow',
  },
  {
    id: 'strategy',
    index: '06',
    title: 'Strategy',
    verb: 'We decide the order of moves.',
    blurb:
      'What to build first, what to spend on, what to leave for later. Clarity before volume.',
    items: ['Business consultation', 'Marketing strategy', 'Growth planning'],
    tone: 'blue',
  },
];

/** Section 04 — the chain that connects the capabilities. */
export const growthChain = [
  { id: 'consult', label: 'Consult', note: 'We start by understanding your business inside-out—your goals, challenges, and opportunities.' },
  { id: 'Strategy', label: 'Strategy', note: 'We design a custom growth blueprint aligned with your business objectives.' },
  { id: 'Build', label: 'Build', note: 'We bring the strategy to life by building assets, systems, and execution layers.' },
  { id: 'Launch', label: 'Launch', note: 'We deploy everything with precision and track performance from day one.' },
  { id: 'Scale', label: 'Scale', note: 'We double down on what works and turn it into consistent growth.' },
  // { id: 'automation', label: 'Automation', note: 'The follow-through that never gets forgotten.' },
  // { id: 'growth', label: 'Growth', note: 'A business that compounds instead of restarting.' },
];
