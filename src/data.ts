import { ChallengeTrack, StatItem, FaqItem, TimelineStep } from './types';

export const TARGET_DATE = '2026-06-20T09:00:00Z'; // June 20, 2026

export const STATS: StatItem[] = [
  { label: 'Participants Registered', value: '2000+', iconName: 'Users' },
  { label: 'Teams Competing', value: '500+', iconName: 'ShieldAlert' },
  { label: 'Coding Duration', value: '48 Hours', iconName: 'Clock' },
  { label: 'Specialized Tracks', value: '6+ Tracks', iconName: 'Cpu' }
];

export const TRACKS: ChallengeTrack[] = [
  {
    id: 'ai-gen',
    title: 'AI & Generative Agents',
    description: 'Build smart assistants, autonomous agents, LLM-powered tools, or next-generation generative media utilities that redefine user engagement.',
    iconName: 'Sparkles',
    prizePool: '₹50,000',
    color: '#9d4edd' // Purple
  },
  {
    id: 'web3',
    title: 'Web3 & dApps',
    description: 'Develop secure, decentralized services, DAO infrastructure, smart contract utilities, or immersive identity protocols for a permissionless future.',
    iconName: 'Coins',
    prizePool: '₹50,000',
    color: '#00b4d8' // Blue
  },
  {
    id: 'fintech',
    title: 'Fintech & DeFi Solutions',
    description: 'Design robust transaction pipelines, micro-investment tools, decentralized lending, smart budgeting plans, or localized payment nodes.',
    iconName: 'Wallet',
    prizePool: '₹50,000',
    color: '#ff007f' // Pink
  },
  {
    id: 'cyber',
    title: 'Cybersecurity & Privacy',
    description: 'Tackle identity fraud, create secure peer-to-peer tunnels, optimize storage encryption, or craft real-time anomaly telemetry checkers.',
    iconName: 'Shield',
    prizePool: '₹50,000',
    color: '#10b981' // Green
  },
  {
    id: 'edu',
    title: 'EdTech & Future of Work',
    description: 'Reimagine interactive classrooms, personalized workspace mentors, collaborative code environments, or automated skills assessments.',
    iconName: 'GraduationCap',
    prizePool: '₹50,000',
    color: '#f59e0b' // Amber
  },
  {
    id: 'open',
    title: 'Open Innovation',
    description: 'Have a disruptive idea outside of our prompt tracks? Build highly functional full-stack solution addressing active social challenges.',
    iconName: 'Codexml',
    prizePool: '₹50,000',
    color: '#ec4899' // Light pink
  }
];

export const TIMELINE: TimelineStep[] = [
  {
    date: '10 May – 15 June 2026',
    title: 'Registrations Open',
    description: 'Draft your dream team of 1-4 hackers and lock in your seats for India\'s ultimate student hacking battleground.',
    status: 'current'
  },
  {
    date: '20 June 2026 (09:00 AM)',
    title: 'Hackathon Kickoff',
    description: 'Opening Ceremony, mentor briefings, prompt rollouts and immediate ticking clock. Code begins!',
    status: 'upcoming'
  },
  {
    date: '21 June 2026 (12:00 PM)',
    title: 'Midway Mentoring',
    description: 'One-on-one reviews with startup founders, tech architects, and active industry professionals to patch your blueprints.',
    status: 'upcoming'
  },
  {
    date: '22 June 2026 (09:00 AM)',
    title: 'Submission Deadline',
    description: 'Deploy code repositories, record a 3-minute video pitch, and push final commits for rigorous tech evaluations.',
    status: 'upcoming'
  },
  {
    date: '23 June 2026 (04:00 PM)',
    title: 'Demo Day & Winners',
    description: 'Top teams pitch live inside our virtual stadium before veteran venture partners, followed by prize announcements.',
    status: 'upcoming'
  }
];

export const FAQS: FaqItem[] = [
  {
    question: 'Who can participate in OSF HackOne 2K26?',
    answer: 'Any student currently enrolled in an undergraduate, postgraduate, or diploma course from any educational institution across India is welcome to join! No registration fee required.'
  },
  {
    question: 'What is the permitted team size?',
    answer: 'You can participate individually or as a team with up to 4 members. We encourage form-fitting multi-disciplinary teams (designers, backenders, and ideators).'
  },
  {
    question: 'Is the hackathon fully online?',
    answer: 'Yes! The entire event is conducted virtually. Mentoring, code reviews, evaluations, discord hangouts, and final project demo pitches are handled on our dashboard and streaming platforms.'
  },
  {
    question: 'Can I build my project before the hackathon starts?',
    answer: 'Absolutely not. All design wireframes, code repos, and logic plans must be initiated strictly after the official countdown strikes zero on 20 June 2026. Pre-existing concepts are disqualified.'
  },
  {
    question: 'How are projects evaluated?',
    answer: 'Projects are graded on novelty of technical solution (30%), code completeness (25%), design polish & user experience (25%), and clarity of demo/business impact (20%).'
  },
  {
    question: 'What is the registration link?',
    answer: 'Click any "Register Now" or "Explore Challenges" button on this page. All buttons redirect securely to: https://osfhackathon.in/login'
  }
];
