export type SocialLink = {
  label: string;
  href: string;
};

export type NowItem = {
  label: string;
  value: string;
  projects?: string[];
  link?: {
    label: string;
    href: string;
  };
};

export const siteConfig = {
  name: "Kien Le",
  shortName: "Kien",
  title: "Kien Le",
  description:
    "My personal website, where I share what I am working on and a little about myself.",
  email: "kientrle@unc.edu",
  secondaryEmail: "kien.le@duke.edu",
  location: "Chapel Hill & Durham, NC",
  intro:
    "Thanks for dropping by! Welcome to this small Internet corner where I keep track my work, interests and hobbies.",
  availability: "I am always open to learning and new opportunities.",
  navigation: [
    { label: "Home", href: "/" },
    { label: "Work", href: "/work/" },
    { label: "Me", href: "/me/" },
    { label: "Contact", href: "/contact/" },
  ],
  socials: [
    { label: "GitHub", href: "https://github.com/kien-le-trung" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/kien-ltok/" },
  ] satisfies SocialLink[],
  resume: {
    available: false,
    href: "/resume.pdf",
  },
  now: [
    {
      label: "Research",
      value:
        "Research makes up a huge part of my work. I’m currently working on two projects at Visualab, UNC Chapel Hill:",
      projects: [
        "Designing LLM systems that produce audience-aware and rhetorically meaningful visualizations.",
        "Building an AR platform for Parkinson’s disease rehabilitation, with both patient-facing and clinician-facing features.",
      ],
    },
    {
      label: "Engineering",
      value:
        "I’m also building llmposter to work on my engineering gaps. llmposter is a platform where users can play the social deduction game Imposter with four other LLMs. I’m learning to deploy ML models, track experiments, and design production data pipelines to bridge the gap between research models and deployed services.",
      link: {
        label: "Check out llmposter",
        href: "https://llmposter.vercel.app/",
      },
    },
  ] satisfies NowItem[],
} as const;
