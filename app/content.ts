import { ImageData, LinkData } from "./types";

interface Teaser {
  img: ImageData;
  title: string;
  text: string[];
  right: boolean | undefined;
  link: LinkData;
  box?: boolean;
}

export interface iExperience {
  businessName: string;
  start: string;
  end: string;
  description: string;
  tags: string[];
  links?: LinkData[];
  img?: ImageData;
}

export const experienceContent: iExperience[] = [
  {
    businessName: "Teal Health",
    start: "10/2024",
    end: "Present",
    description:
      "Frontend Engineer (contractor) building patient applications that provide people with wombs the tools, access, and resources needed to make their own, informed decisions regarding their health — starting with cervical cancer screenings.",
    tags: [
      "NextJS",
      "Tailwind",
      "TypeScript",
      "React Query",
      "Cypress",
      "Storybook",
    ],
    links: [
      { text: "Website", href: "https://www.getteal.com/" },
      {
        text: "Press",
        href: "https://www.prnewswire.com/news-releases/teal-health-unveils-landmark-study-results-showing-teal-wand-self-collected-samples-match-clinician-collected-samples-302404923.html",
      },
    ],
    img: {
      src: "https://cdn.prod.website-files.com/63d5330e6841081487be0bd6/63d5852c684108ca37c552f1_LogoPrimary.svg",
      alt: "Teal Health logo",
    },
  },
  {
    businessName: "Klaros Group",
    start: "9/2024",
    end: "12/2024",
    description:
      "Contracted to build Klarify, an app allowing financial researchers to view and query Federal Financial datasets, making federal regulatory data accessible.",
    tags: ["NextJS", "SQLite", "d3", "Sass", "TypeScript", "Material UI"],
    img: {
      src: "https://media.licdn.com/dms/image/v2/C560BAQEWQLMT2QNdeg/company-logo_200_200/company-logo_200_200/0/1636567043623/klaros_group_logo?e=1749686400&v=beta&t=-HMS8CNTBW2SznSlYmR63_InUQNCn_SD_qXDDzGSQps",
      alt: "Klaros logo",
    },
  },
  {
    businessName: "Career Pathway Institute",
    start: "05/2024",
    end: "10/2024",
    description:
      "Non-profit helping professionals on dependent visas with their careers in the U.S.",
    tags: [
      "JavaScript",
      "React",
      "CSS",
      "Docker",
      "Python",
      "FastAPI",
      "PostgreSQL",
    ],
    links: [
      { text: "Website", href: "https://www.careerpathway.info/" },
      {
        text: "Press Link",
        href: "https://www.prnewswire.com/news-releases/avail-medsystems-adds-new-capability-to-host-third-party-clinical-software-applications-in-the-operating-room-as-part-of-several-platform-enhancements-301959048.html",
      },
    ],
    img: {
      src: "https://static.wixstatic.com/media/77983c_75d9600633794fed8b2dc16243aa3842~mv2.png/v1/fill/w_151,h_52,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/CPI_logo_color_H.png",
      alt: "CPI logo",
    },
  },
  {
    businessName: "Avail Medsystems",
    start: "04/2022",
    end: "11/2023",
    description:
      "Telepresence platform for the operating room. Allows surgeons to collaborate with specialists in real time.",
    tags: [
      "TypeScript",
      "React",
      "Sass",
      "Canvas API",
      "Storybook",
      "TwilioVideo",
    ],
    links: [
      {
        text: "Press Link",
        href: "https://www.prnewswire.com/news-releases/avail-medsystems-adds-new-capability-to-host-third-party-clinical-software-applications-in-the-operating-room-as-part-of-several-platform-enhancements-301959048.html",
      },
    ],
    img: {
      src: "https://media.licdn.com/dms/image/v2/C560BAQFIO_ZYf1U5Ng/company-logo_200_200/company-logo_200_200/0/1656622121902/avail_medsystems_logo?e=1749686400&v=beta&t=Xv539g1N5tsZ8MHDqotRs8zO2Cb4BSCOrQCcfudhIjA",
      alt: "Avail logo",
    },
  },
  {
    businessName: "Seven.me, Inc",
    start: "04/2021",
    end: "04/2022",
    description:
      "Behavioral coaching and technology to help people lead healthier and happier lives. Lifestyle coaching made available via mobile app.",
    tags: [
      "JavaScript",
      "React",
      "CSS",
      "Redux",
      "Expo",
      "React Native",
      "React Query",
    ],
    links: [
      {
        text: "LinkedIn",
        href: "https://www.linkedin.com/company/seven.me/",
      },
    ],
    img: {
      src: "https://media.licdn.com/dms/image/v2/C560BAQG-CXwuDMmE0g/company-logo_200_200/company-logo_200_200/0/1630604877677/sevenme_logo?e=1749686400&v=beta&t=aPEeTtBFqhQCejZOecDjktX7XLlw5TOpLI8_L3hFOEA",
      alt: "Seven.me logo",
    },
  },
  {
    businessName: "Freelance",
    start: "11/2020",
    end: "04/2021",
    description:
      "SEO and responsive design elements for Shopify and custom static business websites",
    tags: ["Shopify", "JavaScript", "React", "CSS", "Lighthouse"],
  },
  // {
  //   businessName: "Livestack",
  //   start: "5/2020",
  //   end: "6/2020",
  //   description: "Internship with a live event streaming platform for creators and  educators.",
  //   tags: ["JavaScript", "React", "Redux", "CSS", "Jest", "Passport.js", "SendGrid"],
  // }
];

export interface Project {
  title: string;
  img: ImageData;
  desc: string;
  tech: string[];
  links: ProjectLink[];
}

export interface ProjectLink {
  type: string;
  url: string;
}

export const projects = [
  {
    title: "This site!",
    img: {
      src: "/you_are_here.jpg",
      alt: "you are here",
    },
    desc: "NextJS Project. React.useState() not used for a fully server-side rendered application.  Much of the UI is done using CSS with native nesting.",
    tech: ["NextJS", "Typescript", "React", "CSS(nesting, flexbox)"],
    links: [
      {
        type: "Github",
        url: "https://github.com/JayRVigilla/nextjs-portfolio",
      },
    ],
  },
  // {
  //   title: "Warbler",
  //   img: {
  //     src: "/warbler-logo.jpeg",
  //     alt: "warbler cartoon"
  //   },
  //   desc: "A Twitter clone written in Python utilizing Jinja server-side rendering. Full Stack project made at Rithm School.",
  //   tech: ["Python", "Flask", "Jinja", "SQLAlchemy", "PostgreSQL", "Heroku"],
  //   links:
  //     [
  //       {
  //         type: "GitHub",
  //         url: "https://github.com/JayRVigilla/warbler"
  //       },
  //       // TODO: redeploy backend
  //       // {
  //       //   type: "Link",
  //       //   url: "https://warbler-star.herokuapp.com/"
  //       // }
  //     ]
  // },
  {
    title: "NamePicker",

    img: {
      src: "/namepicker.gif",
      alt: "NamePicker demo gif",
    },
    desc: "I'm a proud parent that wants to make sure my own Hermione Granger doesn't feel stifled by teachers not calling on her when her hand is up first and has been up first for every question... all... month... long. Desktop Electron app using ReactJS.",
    tech: ["Electron", "ReactJS", "CSS Nesting"],
    links: [
      {
        type: "Github",
        url: "https://github.com/JayRVigilla/name_picker",
      },
    ],
  },
  {
    title: "MovieSearch",
    img: {
      src: "/movie-search-demo.gif",
      alt: "movie search gif",
    },
    desc: "A Node.js project making HTTP requests to an  IMDB API for movie data. A toy project for testing RapidAPIs",
    tech: [
      "JavaScript",
      "Node.js",
      "Express",
      "React",
      "PostgreSQL",
      "RapidAPI",
    ],
    links: [
      {
        type: "Github",
        url: "https://github.com/JayRVigilla/movie-search",
      },
    ],
  },

  // {
  //   title: "ZhangGa",
  //   img: {
  //     src: "/ZhangGa-demo.gif",
  //     alt: "Tell your story"
  //   },
  //   desc: "Full Stack Project. A blogging app with a React frontend and Node-Express server. Project at Rithm School introducing Redux",
  //   tech: ["JavaScript", "React.js", "Redux-thunk", "Node.js", "Express", "PostgreSQL"],
  //   links: [
  //     {
  //       type: "Github",
  //       url: "https://github.com/JayRVigilla/ZhangGa"
  //     },
  //     // TODO: redeploy backend
  //     // {
  //     //   type: "Link",
  //     //   url: "https://zhangga-demo.surge.sh/"
  //     // }
  //   ]
  // },
];

export const experiments = [
  {
    title: "Semantic HTML Buttons",
    img: {
      src: "/semanticButtons.jpeg",
      alt: "CodeSandbox screen shot",
    },
    desc: "A study in semantic HTML for a blog post",
    tech: ["React", "JavaScript", "HTML", "CSS"],
    links: [
      {
        type: "CodeSandbox",
        url: "https://codesandbox.io/s/jrv-semantic-buttons-xdi83",
      },
      {
        type: "Blog",
        url: "https://babbledotlog.jayvigilla.com/pushing-buttons",
      },
    ],
  },
  {
    title: "DateTimePicker",
    img: {
      src: "/day_time_slot_picker.jpeg",
      alt: "CodeSandbox screenshot",
    },
    desc: "Rough draft of a time picker before integrating API calls for a work project.",
    tech: ["React", "JavaScript"],
    links: [
      {
        type: "CodeSandbox",
        url: "https://codesandbox.io/s/daytimeslotselector-k80jn",
      },
      {
        type: "Blog",
        url: "https://babbledotlog.jayvigilla.com/there-i-go-messing-with-time-again",
      },
    ],
  },
  // {
  //   title: "",
  //   img: {
  //     src: null,
  //     alt: "test alt"
  //   },
  //   desc: "Description text",
  //   tech: [""],
  //   links:
  //     [
  //       {
  //         type: "type",
  //         url: "https://"
  //       },
  //       {
  //         type: "Link",
  //         url: "https://"
  //       }]
  // },
];

export const games = [
  {
    title: "Whack-a-Mole",
    img: {
      src: "/whackAMole.jpeg",
      alt: "test alt",
    },
    desc: "A ReactJS Whack-a-Mole game on CodeSandbox. Adjust amount of moles and time intervals for the moles.",
    tech: ["JavaScript", "React"],
    links: [
      {
        type: "CodeSandbox",
        url: "https://codesandbox.io/s/jayvigillawhackamole-50k1in",
      },
    ],
  },
  {
    title: "Crocodile Dentist",
    img: {
      src: "/crocodile_dentist.jpeg",
      alt: "CSS crocodile missing teeth",
    },
    desc: "vanillaJS Crocodile Dentist. Pick the wrong tooth and get chomped by the croc! Steve Irwin would approve.",
    tech: ["JavaScript", "HTML", "CSS"],
    links: [
      {
        type: "Github",
        url: "https://github.com/JayRVigilla/crocodileDentist",
      },
      {
        type: "CodeSandbox",
        url: "https://codesandbox.io/s/jayvigillacrocodiledentist-2o67ug?file=/script.js",
      },
    ],
  },
  {
    title: "Twister Spinner",
    img: {
      src: "https://upload.wikimedia.org/wikipedia/en/thumb/0/09/1966_Twister_Cover.jpg/220px-1966_Twister_Cover.jpg",
      alt: "Twister game box",
    },
    desc: "For that moment when you just got tired of spinning that little arrow, just pull it up on your phone.",
    tech: ["JavaScript", "React", "Typescript"],
    links: [
      {
        type: "CodeSandbox",
        url: "https://codesandbox.io/s/twister-spinner-vtwd6k",
      },
    ],
  },
  // {
  //   title: "Jeopardy!",
  //   img: {
  //     src: "/jeopardy-demo.gif",
  //     alt: "Jeopardy gameplay"
  //   },
  //   desc: "Frontend Project made at Rithm School using jQuery and the API jService",
  //   tech: ["JavaScript", "jQuery", "HTML"],
  //   links: [
  //     {
  //       type: "Github",
  //       url: "https://github.com/JayRVigilla/jeopardy"
  //     },
  //     // TODO: fix logic issue on submitting answer and redeploy
  //     // {
  //     //   type: "Link",
  //     //   url: "http://jih-parody-demo.surge.sh/"
  //     // }
  //   ]
  // },
];
