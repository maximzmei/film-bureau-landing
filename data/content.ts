export const HERO = {
  brand: "film bureau",
  tagline:
    "Full-cycle video production. We develop concepts and scripts, shoot, edit, animate, and adapt content for any platform.",
} as const;

export const NAV_LINKS = ["WORK", "ABOUT", "SERVICES", "CONTACT"] as const;

export type TeamMember = {
  name: string;
  role: string;
  photo: string | null;
};

export const TEAM: TeamMember[] = [
  { name: "Oleksii", role: "Creative Director, Producer, Sound Designer", photo: "/images/team/oleksii.jpg" },
{ name: "Luka", role: "SMM Specialist", photo: "/images/team/luka.jpg" },
  { name: "Alyona", role: "DoP, Editor", photo: "/images/team/alyona.jpg" },
  { name: "Sofia", role: "1st AD, Project Manager", photo: "/images/team/sofia.jpg" },
  { name: "Evgen", role: "DoP, Editor, Colorist", photo: "/images/team/evgen.jpg" },
  { name: "Veronika", role: "Director, Actress", photo: "/images/team/veronika.jpg" },
];

export type Service = {
  number: string;
  title: string;
  description: string;
};

export const SERVICES: Service[] = [
  {
    number: "01/",
    title: "SOCIAL MEDIA",
    description:
      "Vertical content (Reels, TikTok) as the core of modern communication. We know the algorithms and trends that drive reach.",
  },
  {
    number: "02/",
    title: "BUSINESS & BRAND",
    description:
      "Brand videos, corporate content, and commercial shooting. We convey your business values through high-quality visuals.",
  },
  {
    number: "03/",
    title: "YOUTUBE",
    description:
      "Full-cycle production: interviews, blogs, podcasts, and consistent channel management.",
  },
  {
    number: "04/",
    title: "DOCUMENTARY",
    description:
      "Cinema-grade quality. Video stories about people, businesses, and brands; social projects and military themes.",
  },
];

export type Video = {
  id: string;
  title: string;
  description: string;
  url: string;
};

export const VIDEOS: Video[] = [
  {
    id: "zoNT32LrgC0",
    title: "The Silent Forest",
    description: "Documentary",
    url: "https://www.youtube.com/watch?v=zoNT32LrgC0",
  },
  {
    id: "QifvkBSMAbs",
    title: "Echoes of a City",
    description: "Commercial",
    url: "https://www.youtube.com/watch?v=QifvkBSMAbs",
  },
  {
    id: "s1YrD0Clnx8",
    title: "Abstract Motion",
    description: "Brand Film",
    url: "https://www.youtube.com/watch?v=s1YrD0Clnx8",
  },
];

export type ClientGroup = {
  category: string;
  clients: string[];
};

export const CLIENTS: ClientGroup[] = [
  {
    category: "Retail & FMCG",
    clients: ["Silpo", "Metro", "Vodafone Techno", "Aroma Kava", "Otak Store"],
  },
  {
    category: "Beauty & Lifestyle",
    clients: ["Poetry Home", "No Other Name", "Exaltouch", "No Limits"],
  },
  {
    category: "Medicine & Social",
    clients: ["Ab3 Medical", "Hospitallers", "Kateryna Tolstikova", "Omega"],
  },
  {
    category: "Art & Show Business",
    clients: ["Sasha Chemerov", "Mykhailo Krupin", "Lera Mandziuk"],
  },
];

export const CONTACT = {
  email: "filmbureau.kyiv@gmail.com",
  instagram: "https://www.instagram.com/film.bureau/",
  instagramHandle: "@film.bureau",
  telegram: "https://t.me/papulau",
  telegramHandle: "@papulau",
  phone: "+380982107212",
} as const;
