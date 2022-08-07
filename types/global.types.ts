export type Interview = {
  id: string;
  company?: {
    name: string;
    logo?: string;
  };
  system: {
    name: string;
    logo?: string;
  };
  interviewee: {
    name: string;
    photoUrl: string;
    bio: string;
    links?: Array<{ label: string; href: string }>;
  };
  interview: {
    description: string;
    date: string;
    items: Array<{ question: string; answer: string | string[] }>;
    highlights: Array<string>;
  };
};
