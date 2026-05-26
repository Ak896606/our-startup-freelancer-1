export interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export interface ChallengeTrack {
  id: string;
  title: string;
  description: string;
  iconName: string; // Used to select Lucide icons dynamically
  prizePool: string;
  color: string; // Theme color for border/text glow
}

export interface StatItem {
  label: string;
  value: string;
  iconName: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface TimelineStep {
  date: string;
  title: string;
  description: string;
  status: 'past' | 'current' | 'upcoming';
}
