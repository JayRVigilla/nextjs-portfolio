import { ImageData, LinkData } from "./types"

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
    src: "/images/jay-desk2.avif",
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
    src: "/images/notebook.avif",
    alt: 'project notebook',
    picWidth: '45%',
    fit: "contain",
  },
  title: 'Projects',
  text: ["Want to see what I can do?. Full stack projects and some classic boardgames in vanillaJS."],
  right: undefined,
  link: {
    href: "/projects",
    text: "Come see my Portfolio"
  },
  box: true
}

const contactTease: Teaser = {
  img: {
    src: "/images/social-phone.avif",
    alt: 'smart phone ready to send a message',
    picWidth: '25%',
    fit: "cover",
  },
  title: 'Connect',
  text: ["If you'd like to reach me about projects, both fun and professional, I'd be happy to hear from you. I also love to talk about tech, food, pop culture, and rescue dogs!"],
  right: true,
  link: {
    href: "/contact",
    text: "Hit me up"
  }
}

export const teasers = [blogTease, projTease, contactTease]