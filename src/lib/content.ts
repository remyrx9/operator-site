export const site = {
  name: "rxexperience",
  tagline: "A home for everything I build.",
  subtag:
    "Podcast. Music. Philosophy. Experiments. Systems. Stories. One place that holds it all.",
  ctaPrimary: { label: "Enter", href: "#everything" },
  ctaSecondary: { label: "Contact", href: "#contact" },

  nav: [
    { label: "Everything", href: "#everything" },
    { label: "Podcast", href: "#podcast" },
    { label: "Music", href: "#music" },
    { label: "Philosophy", href: "#philosophy" },
    { label: "Contact", href: "#contact" },
  ],

  ventures: [
    {
      title: "Podcast",
      desc: "Long-form conversations, raw frameworks, and real-time thinking.",
      badge: "Audio",
      href: "#podcast",
    },
    {
      title: "Music",
      desc: "Sound as design. Mood engineering. Sessions and releases.",
      badge: "Sound",
      href: "#music",
    },
    {
      title: "Philosophy",
      desc: "Notes, principles, and personal operating systems.",
      badge: "Mind",
      href: "#philosophy",
    },
    {
      title: "Experiments",
      desc: "Prototypes, labs, and weird proof-of-concepts.",
      badge: "Lab",
      href: "#everything",
    },
    {
      title: "Systems",
      desc: "Rules, structure, and architecture that survives chaos.",
      badge: "Ops",
      href: "#everything",
    },
    {
      title: "Archive",
      desc: "Everything old becomes signal later. Nothing wasted.",
      badge: "Index",
      href: "#everything",
    },
  ],

  sections: {
    podcast: {
      title: "Podcast",
      lead:
        "Not content. Not clips. Full signal. The conversations that shape the whole machine.",
      bullets: [
        "Episodes and drops live here",
        "Short notes attached to each episode",
        "Guest requests and collabs handled cleanly",
      ],
      action: { label: "Coming soon", href: "#contact" },
    },
    music: {
      title: "Music",
      lead:
        "Minimal, intentional, and engineered. This is where sound becomes atmosphere.",
      bullets: [
        "Releases, demos, and sessions",
        "Playlists and audio experiments",
        "Soundtracks for builds and phases",
      ],
      action: { label: "Coming soon", href: "#contact" },
    },
    philosophy: {
      title: "Philosophy",
      lead:
        "A calm place for sharp truths. Principles, frameworks, and the rules I actually live by.",
      bullets: [
        "Operating principles",
        "Field notes and mental models",
        "Decision rules and personal doctrine",
      ],
      action: { label: "Read the notes soon", href: "#contact" },
    },
  },

  contact: {
    title: "Contact",
    lead:
      "If it matters, send it straight. No noise. No loops. One message that makes sense.",
    email: "hello@rxexperience.com",
    socials: [
      { label: "YouTube", href: "#" },
      { label: "Spotify", href: "#" },
      { label: "Apple Music", href: "#" },
      { label: "X", href: "#" },
    ],
  },

  footer: {
    note: "Built calm. Built sharp.",
  },
} as const;
