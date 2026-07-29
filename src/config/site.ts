export type SocialLink = {
  label: string;
  href: string;
};

export type NowItem = {
  label: string;
  value: string;
};

export const siteConfig = {
  name: "Your Name",
  shortName: "YN",
  title: "Your Name — Personal website",
  description:
    "My personal website, where I share what I am working on and a little about myself.",
  email: "hello@example.com",
  location: "Your city",
  intro:
    "This is a small corner of the internet where I keep track of my work, current interests, and the things I enjoy outside of them.",
  availability: "I am always open to learning and new opportunities.",
  navigation: [
    { label: "Home", href: "/" },
    { label: "Work", href: "/work/" },
    { label: "Me", href: "/me/" },
    { label: "Contact", href: "/contact/" },
  ],
  socials: [
    { label: "GitHub", href: "https://github.com/your-handle" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/your-handle" },
  ] satisfies SocialLink[],
  resume: {
    available: false,
    href: "/resume.pdf",
  },
  now: [
    { label: "Making", value: "A new home for my work and ideas." },
    { label: "Learning", value: "Something just beyond my current reach." },
    { label: "Reading", value: "A book worth talking about." },
    { label: "Based", value: "Your city, for now." },
  ] satisfies NowItem[],
} as const;
