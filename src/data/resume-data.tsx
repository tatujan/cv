import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
  BeartoothLogo,
  MontanaLogo,
  IeeeLogo,
  BatuhanInfoLogo
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Batuhan Mekiker, PhD",
  initials: "BM",
  location: "Bozeman, MT",
  locationLink: "https://www.google.com/maps/place/Bozeman",
  about:
    "Lead Product Engineer, Avid Researcher, and Strong Problem Solver.",
  summary:
    "As a Lead Product Engineer I research, develop and build prototypes in Resource-Constrained Networks for Mission-Critical Applications. I build production instructions, maintain active projects and overall provide insight and consultation about resource-constrained networks. Recently, I started to take more responsibility in business strategy and marketing.",
  avatarUrl: "  https://avatars.githubusercontent.com/u/7893713?s=400&u=32c35406ad5ea1d8175731de486fb9178e16dea9&v=4",
  personalWebsiteUrl: "https://bmekiker.me",
  contact: {
    email: "batuhanmekiker@gmail.com",
    tel: "",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/tatujan",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/bmekiker/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/BMekiker",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Montana State University",
      degree: "Ph.D. in Computer Science Focussing on Resource-Constrained Networks",
      start: "2018",
      end: "2023",
    },
     {
      school: "Montana State University",
      degree: "M.Eng. in Electrical Engineering Focussing on Optical Communication",
      start: "2016",
      end: "2018",
    },
     {
      school: "Kadir Has University",
      degree: "B.Sc. in Electronics Engineering Focussing on Telecommunication and Wireless Networks",
      start: "2011",
      end: "2015",
    },
  ],
  work: [
    {
      company: "Beartooth",
      link: "https://beartooth.com",
      badges: ["Remote"],
      title: "Lead Product Engineer",
      logo: BeartoothLogo,
      start: "2021",
      end: "Present",
      description:
        "Designed hardware and software modules for Beartooth Gateways. Built and documented prototypes. Created instructions for Beartooth Gateways to be built en masse. Actively overseeing and maintaining the project.",
    },
    {
      company: "Beartooth",
      link: "https://beartooth.com",
      badges: ["Remote"],
      title: "Network Protocol Engeering Intern",
      logo: BeartoothLogo,
      start: "2019",
      end: "2021",
      description:
        "Designed and built a link layer relaying network protocol for bandwidth-constrained networks for Beartooth LoRa radios.",
    },
    {
      company: "Montana State University",
      link: "https://montana.edu/",
      badges: [],
      title: "Graduate Research Assistant",
      logo: MontanaLogo,
      start: "2018",
      end: "2023",
      description:
        "Research on cross-layer optimization of bandwidth-constrained networks. See PhD dissertation for details.",
    }
  ],
  skills: [
    "JavaScript",
    "Python",
    "SQL",
    "Node.js",
    "Express.js",
    "Git",
    "LaTEX",
    "Research",
  ],
  projects: [
    {
      title: "TTS vs. Audio Codecs in Bandwidth-Constrained Networks",
      techStack: [
        "Python",
        "TensorFLOW",
      ],
      description: "A comprehensive comparative analysis on Text-to-Speech model generated audio and audio codec processed voice recordings in bandwidth-constrained networks.",
      logo: MontanaLogo,
      link: {
        label: "",
        href: "",
      },
    },
    {
      title: "Beartooth Gateways",
      techStack: ["JavaScript", "Node.js", "Express.js"],
      description:
        "Designing, implementing and integrating Beartooth Radios and Gateways with existing Team Awareness Kit (TAK) infrastructure and IP network",
      logo: BeartoothLogo,
      link: {
        label: "beartooth.com",
        href: "https://beartooth.com/",
      },
    },
    {
      title: "Opportunistic Concurreny Control (OCC) in Separation of Consensus and Compute (SoCC) Blockchains,",
      techStack: ["Side Project", "Go", "Python", "gRPC"],
      description:
        "Designed and implemented a proof-of-concept simulation for parallel execution on SoCC Blockhains with OCC [3].",
      logo: IeeeLogo,
      link: {
        label: "ieeexplore.ieee.org",
        href: "https://ieeexplore.ieee.org/abstract/document/9682147",
      },
    },
    {
      title: "Beartooth Relay Protocol",
      techStack: ["C++", "CMake"],
      description:
        "Designed a flexible novel link layer protocol on LoRa physical layer to scale bandwidth-constrained networks and to be used in situational awareness and mission-critical applications.",
      logo: IeeeLogo,
      link: {
        label: "ieeexplore.ieee.org",
        href: "https://ieeexplore.ieee.org/abstract/document/9522224",
      },
    },
  ],
} as const;
