import { ImageData, LinkData } from "./types"
import socialPhone from "@/public/social-phone.jpg"
import notebook from "@/public/notebook.jpeg"
import jayDesk from "@/public/jay_desk.jpeg"

interface Teaser {
  img: ImageData;
  title: string;
  text: string[];
  right: boolean | undefined;
  link: LinkData;
  box?: boolean
}

const blogTease: Teaser = {
  img: {
    src: jayDesk,
    alt: 'Jay at computer desk',
    picWidth: '45%',
    fit: "cover",
  },
  title: 'Blog',
  text: ["Thoughts, anecdotes, and code samples..."],
  right: true,
  link: {
    href: "https://babbledotlog.jayvigilla.com/",
    text: "init babble.log()"
  }
}

const projTease: Teaser = {
  img: {
    src: notebook,
    alt: 'project notebook',
    picWidth: '45%',
    fit: "contain",
  },
  title: 'Projects',
  text: ["Want to see what I can do? Full stack projects and some classic boardgames in vanillaJS."],
  right: undefined,
  link: {
    href: "/projects",
    text: "Come see my Portfolio"
  },
  box: true
}

const contactTease: Teaser = {
  img: {
    src: socialPhone,
    // src: "/social-phone.jpeg",
    alt: 'smart phone ready to send a message',
    picWidth: '25%',
    fit: "cover",
  },
  title: 'Connect',
  text: ["If you'd like to reach me about projects, both fun and professional, I'd be happy to hear from you. I also love to talk about tech, food, pop culture, and rescue dogs!"],
  right: true,
  link: {
    href: 'mailto: jayrvigilla@gmail.com',
    text: "Hit me up"
  }
}

const experienceContent = [
{
  businessName: "Avail Medsystems",
  start: "04/2022",
  end: "11/2023",
  description: "Providing simple cost-effective solutions that connect procedural healthcare professionals regardless of location.",
  tags: ["JavaScript", "TypeScript", "React", "CSS", "Redux", "Storybook", "Electron", "Splunk"],
  press: "https://www.prnewswire.com/news-releases/avail-medsystems-adds-new-capability-to-host-third-party-clinical-software-applications-in-the-operating-room-as-part-of-several-platform-enhancements-301959048.html"
  },
  {
  businessName: "Seven.me, Inc",
  start: "04/2021",
  end: "04/2022",
  description: "Using behavioral coaching and technology to help people lead healthier and happier lives. Lifestyle coaching made available via mobile app.",
  tags: ["JavaScript", "TypeScript", "React", "CSS", "React Redux", "React Native"],
  press:"https://www.linkedin.com/company/seven.me/"
}
]

export const teasers = [ projTease ]
// export const teasers = [ projTease, contactTease]
// export const teasers = [blogTease, projTease, contactTease]