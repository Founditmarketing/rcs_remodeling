import { BlogPost, Service, Review, GalleryItem } from './types';

export const SERVICES: Service[] = [
  {
    id: 'remodeling',
    title: 'Remodeling',
    slug: 'remodeling',
    description: 'Transforming DFW homes into modern masterpieces with precision craftsmanship and high-end finishes.',
    icon: 'Hammer',
    features: ['Kitchen & Bath Overhauls', 'Full Home Renovations', 'Structural Modifications', 'Custom Cabinetry'],
    process: [
      { step: 'Consultation', description: 'We meet at your property to discuss your vision, budget, and timeline.' },
      { step: 'Design & Planning', description: 'Our team creates detailed blueprints and material selections.' },
      { step: 'Execution', description: 'Skilled craftsmen bring the design to life with daily site management.' },
      { step: 'Final Walkthrough', description: 'We ensure every detail meets our elite standards before handover.' }
    ],
    faqs: [
      { question: 'How long does a typical kitchen remodel take?', answer: 'Most full kitchen remodels take between 4 to 8 weeks depending on complexity.' },
      { question: 'Do you handle permits?', answer: 'Yes, we manage all necessary city permits and inspections in DFW.' }
    ]
  },
  {
    id: 'debris-removal',
    title: 'Debris Removal',
    slug: 'debris-removal',
    description: 'Professional, efficient removal of construction waste, storm damage, and unwanted clutter.',
    icon: 'Truck',
    features: ['Construction Waste', 'Storm Cleanup', 'Estate Clear-outs', 'Appliance Disposal'],
    process: [
      { step: 'Assessment', description: 'We estimate the volume and type of debris to be removed.' },
      { step: 'Loading', description: 'Our crew handles all the heavy lifting and loading.' },
      { step: 'Responsible Disposal', description: 'We sort materials for recycling and proper landfill disposal.' }
    ],
    faqs: [
      { question: 'Do you take hazardous materials?', answer: 'We do not handle toxic chemicals or asbestos, but can refer you to specialists.' }
    ]
  },
  {
    id: 'demolition',
    title: 'Demolition',
    slug: 'demolition',
    description: 'Safe, controlled demolition services for residential and commercial structures.',
    icon: 'Bomb',
    features: ['Interior Gutting', 'Shed & Garage Removal', 'Pool In-fills', 'Partial Demolition'],
    process: [
      { step: 'Safety Prep', description: 'Utility shut-offs and site securing.' },
      { step: 'Controlled Demo', description: 'Precision removal using specialized equipment.' },
      { step: 'Site Clearing', description: 'Complete removal of all demo materials.' }
    ],
    faqs: [
      { question: 'Is demolition loud and messy?', answer: 'It is, but we use dust suppression and noise-reduction techniques where possible.' }
    ]
  },
  {
    id: 'cleanup',
    title: 'Cleanup',
    slug: 'cleanup',
    description: 'Deep cleaning and restoration services for post-construction or neglected properties.',
    icon: 'Sparkles',
    features: ['Post-Construction Clean', 'Hoarder House Restoration', 'Deep Sanitization', 'Exterior Power Washing'],
    process: [
      { step: 'Initial Scrape', description: 'Removal of large debris and dust.' },
      { step: 'Detail Clean', description: 'Sanitizing every surface from floor to ceiling.' },
      { step: 'Odor Removal', description: 'Advanced treatments for persistent smells.' }
    ],
    faqs: [
      { question: 'Do you handle hoarder situations?', answer: 'Yes, we specialize in compassionate and thorough hoarder house cleanups.' }
    ]
  },
  {
    id: 'squatter-removal',
    title: 'Squatter Removal',
    slug: 'squatter-removal',
    description: 'Comprehensive property recovery services including cleanup, securing, and restoration after unauthorized occupancy.',
    icon: 'ShieldAlert',
    features: ['Hazardous Waste Removal', 'Lock Replacement', 'Property Board-up', 'Damage Assessment'],
    process: [
      { step: 'Secure Site', description: 'Ensuring the property is legally vacant and secured.' },
      { step: 'Biohazard Removal', description: 'Safe disposal of needles, waste, and hazards.' },
      { step: 'Restoration', description: 'Repairing damage to make the property rentable again.' }
    ],
    faqs: [
      { question: 'Do you handle the legal eviction?', answer: 'No, we handle the physical cleanup and securing after the legal process is complete.' }
    ]
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'Surviving a Full Kitchen Gut in DFW',
    excerpt: 'A survival guide for homeowners living through a major renovation in the Dallas heat.',
    content: 'Living without a kitchen is tough. In DFW, where we love our home-cooked meals and hosting, it\'s even tougher. This post covers setting up a temporary kitchen, managing dust, and why the "messy middle" is worth the final result...',
    date: 'March 1, 2026',
    author: 'RCS Team',
    category: 'Remodeling',
    image: '/Blog Images/Blog Page pictures/Surviving a Full Kitchen Gut in DFW.png'
  },
  {
    id: '2',
    title: 'The Hidden Costs of DIY Demolition',
    excerpt: 'Why swinging a sledgehammer yourself might cost you more in the long run.',
    content: 'It looks easy on TV, but hitting a load-bearing wall or a live gas line isn\'t "entertainment." We break down the permits, safety gear, and structural risks that make professional demolition a smarter investment...',
    date: 'Feb 25, 2026',
    author: 'RCS Team',
    category: 'Demolition',
    image: '/Blog Images/Blog Page pictures/DIY Demolition costs.png'
  },
  {
    id: '3',
    title: 'What to Do When You Inherit a Hoarder House',
    excerpt: 'A compassionate guide to clearing out a lifetime of belongings.',
    content: 'Inheriting a property filled with clutter is overwhelming. We discuss the emotional toll, the step-by-step sorting process, and how professional cleanup services can take the burden off your shoulders...',
    date: 'Feb 18, 2026',
    author: 'RCS Team',
    category: 'Cleanup',
    image: '/Blog Images/Blog Page pictures/Hoarders.png'
  },
  {
    id: '4',
    title: 'Top 5 Remodeling Trends in Dallas for 2026',
    excerpt: 'From smart kitchens to "Texas Modern" aesthetics.',
    content: 'Dallas style is evolving. We\'re seeing a shift towards dark obsidian accents, integrated smart technology, and outdoor living spaces that handle the Texas sun with grace...',
    date: 'Feb 10, 2026',
    author: 'RCS Team',
    category: 'Design',
    image: '/Blog Images/Blog Page pictures/Top 5 Remodeling Trends in Dallas for 2026.png'
  },
  {
    id: '5',
    title: 'Securing Your Property After Squatters',
    excerpt: 'The essential checklist for DFW property owners.',
    content: 'Once a squatter is removed, the work begins. You need to assess structural damage, handle biohazards, and most importantly, ensure it never happens again with high-end security and physical barriers...',
    date: 'Feb 2, 2026',
    author: 'RCS Team',
    category: 'Security',
    image: '/Blog Images/Blog Page pictures/Destroyed squatters home.png'
  },
  {
    id: '6',
    title: 'Storm Damage: When to Call the Pros',
    excerpt: 'DFW storms can be brutal. Here is how to handle the aftermath.',
    content: 'After a North Texas supercell, your yard and roof might be a disaster. We explain the difference between what you can rake up and what needs professional debris removal for insurance purposes...',
    date: 'Jan 25, 2026',
    author: 'RCS Team',
    category: 'Debris Removal',
    image: '/Blog Images/Blog Page pictures/Storm damage.png'
  },
  {
    id: '7',
    title: 'The ROI of a Master Suite Renovation',
    excerpt: 'Is it worth the investment in today\'s DFW market?',
    content: 'A master suite isn\'t just a bedroom; it\'s a sanctuary. We look at the data for Terrell, Forney, and Dallas to see how much value a high-end bathroom and closet remodel adds to your home...',
    date: 'Jan 15, 2026',
    author: 'RCS Team',
    category: 'Real Estate',
    image: '/Blog Images/Blog Page pictures/The ROI of a Master Suite Renovation.png'
  },
  {
    id: '8',
    title: 'Eco-Friendly Disposal: Where Your Debris Goes',
    excerpt: 'How RCS Remodeling prioritizes recycling in North Texas.',
    content: 'We don\'t just dump everything in a landfill. We discuss our partnerships with DFW recycling centers for concrete, wood, and metal, and why sustainable demolition matters...',
    date: 'Jan 5, 2026',
    author: 'RCS Team',
    category: 'Sustainability',
    image: '/Blog Images/Blog Page pictures/ECO fliendly.png'
  },
  {
    id: '9',
    title: 'Preparing Your Home for a Winter Remodel',
    excerpt: 'Why winter is actually a great time for interior projects in Texas.',
    content: 'While the ground is hard and the bugs are gone, interior remodeling can move faster. We share tips for keeping your home warm and clean during a January renovation...',
    date: 'Dec 20, 2025',
    author: 'RCS Team',
    category: 'Remodeling',
    image: '/Blog Images/Blog Page pictures/RCS Team Preparing Your Home for a Winter Remodel.png'
  },
  {
    id: '10',
    title: 'The Importance of Transparency in Contracting',
    excerpt: 'Why our H.I.T. values are the foundation of every project.',
    content: 'The "shady contractor" trope is real. We explain how our Honesty, Integrity, and Transparency approach changes the dynamic, from fixed-price bidding to daily photo updates...',
    date: 'Dec 10, 2025',
    author: 'RCS Team',
    category: 'Company',
    image: '/Blog Images/Blog Page pictures/The Importance of Transparency in Contracting.png'
  }
];

export const REVIEWS: Review[] = [
  {
    id: '1',
    name: 'Sarah Jenkins',
    location: 'Dallas, TX',
    rating: 5,
    text: 'RCS transformed our 1970s kitchen into a modern dream. Their attention to detail is unmatched in DFW.',
    date: 'March 2026'
  },
  {
    id: '2',
    name: 'Michael Rodriguez',
    location: 'Terrell, TX',
    rating: 5,
    text: 'Fast, professional demolition of our old barn. They left the site cleaner than they found it. Highly recommend!',
    date: 'February 2026'
  },
  {
    id: '3',
    name: 'Amanda Lee',
    location: 'Forney, TX',
    rating: 5,
    text: 'The cleanup crew was a lifesaver after our renovation. Not a speck of dust left behind. Worth every penny.',
    date: 'January 2026'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: '1',
    title: 'Modern Kitchen Overhaul',
    category: 'Remodeling',
    imageBefore: 'https://picsum.photos/seed/k-before/800/600',
    imageAfter: 'https://picsum.photos/seed/k-after/800/600'
  },
  {
    id: '2',
    title: 'Full House Gut',
    category: 'Demolition',
    imageBefore: 'https://picsum.photos/seed/d-before/800/600',
    imageAfter: 'https://picsum.photos/seed/d-after/800/600'
  },
  {
    id: '3',
    title: 'Hoarder House Recovery',
    category: 'Cleanup',
    imageBefore: 'https://picsum.photos/seed/c-before/800/600',
    imageAfter: 'https://picsum.photos/seed/c-after/800/600'
  },
  {
    id: '4',
    title: 'Luxury Master Bath',
    category: 'Remodeling',
    imageBefore: 'https://picsum.photos/seed/b-before/800/600',
    imageAfter: 'https://picsum.photos/seed/b-after/800/600'
  },
  {
    id: '5',
    title: 'Commercial Debris Clear',
    category: 'Debris Removal',
    imageBefore: 'https://picsum.photos/seed/dr-before/800/600',
    imageAfter: 'https://picsum.photos/seed/dr-after/800/600'
  },
  {
    id: '6',
    title: 'Structural Demolition',
    category: 'Demolition',
    imageBefore: 'https://picsum.photos/seed/sd-before/800/600',
    imageAfter: 'https://picsum.photos/seed/sd-after/800/600'
  },
  {
    id: '7',
    title: 'Post-Storm Cleanup',
    category: 'Cleanup',
    imageBefore: 'https://picsum.photos/seed/ps-before/800/600',
    imageAfter: 'https://picsum.photos/seed/ps-after/800/600'
  },
  {
    id: '8',
    title: 'Squatter Site Recovery',
    category: 'Squatter Removal',
    imageBefore: 'https://picsum.photos/seed/sq-before/800/600',
    imageAfter: 'https://picsum.photos/seed/sq-after/800/600'
  },
  {
    id: '9',
    title: 'Open Concept Living',
    category: 'Remodeling',
    imageBefore: 'https://picsum.photos/seed/oc-before/800/600',
    imageAfter: 'https://picsum.photos/seed/oc-after/800/600'
  },
  {
    id: '10',
    title: 'Garage Demolition',
    category: 'Demolition',
    imageBefore: 'https://picsum.photos/seed/gd-before/800/600',
    imageAfter: 'https://picsum.photos/seed/gd-after/800/600'
  },
  {
    id: '11',
    title: 'Estate Debris Removal',
    category: 'Debris Removal',
    imageBefore: 'https://picsum.photos/seed/ed-before/800/600',
    imageAfter: 'https://picsum.photos/seed/ed-after/800/600'
  },
  {
    id: '12',
    title: 'Basement Restoration',
    category: 'Remodeling',
    imageBefore: 'https://picsum.photos/seed/br-before/800/600',
    imageAfter: 'https://picsum.photos/seed/br-after/800/600'
  },
  {
    id: '13',
    title: 'Industrial Cleanup',
    category: 'Cleanup',
    imageBefore: 'https://picsum.photos/seed/ic-before/800/600',
    imageAfter: 'https://picsum.photos/seed/ic-after/800/600'
  },
  {
    id: '14',
    title: 'Pool House Remodel',
    category: 'Remodeling',
    imageBefore: 'https://picsum.photos/seed/ph-before/800/600',
    imageAfter: 'https://picsum.photos/seed/ph-after/800/600'
  },
  {
    id: '15',
    title: 'Interior Strip-out',
    category: 'Demolition',
    imageBefore: 'https://picsum.photos/seed/is-before/800/600',
    imageAfter: 'https://picsum.photos/seed/is-after/800/600'
  },
  {
    id: '16',
    title: 'Site Preparation',
    category: 'Debris Removal',
    imageBefore: 'https://picsum.photos/seed/sp-before/800/600',
    imageAfter: 'https://picsum.photos/seed/sp-after/800/600'
  },
  {
    id: '17',
    title: 'Attic Conversion',
    category: 'Remodeling',
    imageBefore: 'https://picsum.photos/seed/ac-before/800/600',
    imageAfter: 'https://picsum.photos/seed/ac-after/800/600'
  },
  {
    id: '18',
    title: 'Hazardous Waste Clear',
    category: 'Cleanup',
    imageBefore: 'https://picsum.photos/seed/hw-before/800/600',
    imageAfter: 'https://picsum.photos/seed/hw-after/800/600'
  },
  {
    id: '19',
    title: 'Deck Reconstruction',
    category: 'Remodeling',
    imageBefore: 'https://picsum.photos/seed/dr-before/800/600',
    imageAfter: 'https://picsum.photos/seed/dr-after/800/600'
  },
  {
    id: '20',
    title: 'Property Board-up',
    category: 'Squatter Removal',
    imageBefore: 'https://picsum.photos/seed/pb-before/800/600',
    imageAfter: 'https://picsum.photos/seed/pb-after/800/600'
  }
];
