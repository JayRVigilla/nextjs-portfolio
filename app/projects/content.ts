import { ImageData } from "../types";

export interface Project{
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
    title: "NamePicker",

    img: {
      src: "/namepicker.gif",
      alt: "NamePicker demo gif"
    },
    desc: "I'm a proud parent that wants to make sure my own Hermione Granger doesn't feel stifled by teachers not calling on her when her hand is up first and has been up first for every question... all... month... long. Desktop Electron app using ReactJS.",
    tech: ["Electron", "ReactJS", "CSS Nesting"],
    links: [
      {
        type: "Github",
        url: "https://github.com/JayRVigilla/name_picker"
      },
    ]
  },
  {
    title: "Warbler",
    img: {
      src: "/warbler-logo.jpeg",
      alt: "warbler cartoon"
    },
    desc: "A Twitter clone written in Python utilizing Jinja server-side rendering. Full Stack project made at Rithm School.",
    tech: ["Python", "Flask", "Jinja", "SQLAlchemy", "PostgreSQL", "Heroku"],
    links:
      [
        {
          type: "GitHub",
          url: "https://github.com/JayRVigilla/warbler"
        },
        // TODO: redeploy backend
        // {
        //   type: "Link",
        //   url: "https://warbler-star.herokuapp.com/"
        // }
      ]
  },

  {
    title: "MovieSearch",
    img: {
      src: "/movie-search-demo.gif",
      alt: "movie search gif"
    },
    desc: "A Node.js project making HTTP requests to an  IMDB API for movie data. A toy project for testing RapidAPIs",
    tech: ["JavaScript", "Node.js", "Express", "React", "PostgreSQL", "RapidAPI"],
    links: [
      {
        type: "Github",
        url: "https://github.com/JayRVigilla/movie-search"
      }
    ]
  },

  {
    title: "ZhangGa",
    img: {
      src: "/ZhangGa-demo.gif",
      alt: "Tell your story"
    },
    desc: "Full Stack Project. A blogging app with a React frontend and Node-Express server. Project at Rithm School introducing Redux",
    tech: ["JavaScript", "React.js", "Redux-thunk", "Node.js", "Express", "PostgreSQL"],
    links: [
      {
        type: "Github",
        url: "https://github.com/JayRVigilla/ZhangGa"
      },
      // TODO: redeploy backend
      // {
      //   type: "Link",
      //   url: "https://zhangga-demo.surge.sh/"
      // }
    ]
  }
]

export const experiments = [
  {
    title: "Semantic HTML Buttons",
    img: {
      src: "/semanticButtons.jpeg",
      alt: "CodeSandbox screen shot"
    },
    desc: "A study in semantic HTML for a blog post",
    tech: ["React", "JavaScript", "HTML", "CSS"],
    links:
      [
        {
          type: "CodeSandbox",
          url: "https://codesandbox.io/s/jrv-semantic-buttons-xdi83"
        },
        {
          type: "Blog Post",
          url: "https://babbledotlog.jayvigilla.com/pushing-buttons"
        }]
  },
  {
    title: "DateTimePicker",
    img: {
      src: "/day_time_slot_picker.jpeg",
      alt: "CodeSandbox screenshot"
    },
    desc: "Rough draft of a time picker before integrating API calls for a work project.",
    tech: ["React", "JavaScript" ],
    links:
      [
        {
          type: "CodeSandbox",
          url: "https://codesandbox.io/s/daytimeslotselector-k80jn"
        },
        {
          type: "Blog Post",
          url: "https://babbledotlog.jayvigilla.com/there-i-go-messing-with-time-again"
        }]
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

]

export const games = [
  {
    title: "Whack-a-Mole",
    img: {
      src: "/whackAMole.jpeg",
      alt: "test alt"
    },
    desc: "A Whack-a-Mole game made in React on CodeSandbox",
    tech: ["JavaScript", "React"],
    links:
      [
        {
          type: "CodeSandbox",
          url: "https://codesandbox.io/s/jayvigillawhackamole-50k1in"
        },
        {
          type: "Link",
          url: "https://50k1in.csb.app/"
        }]
  },
  {
    title: "Crocodile Dentist",
    img: {
      src: "/crocodile_dentist.jpeg",
      alt: "CSS crocodile missing teeth"
    },
    desc: "vanillaJS Crocodile Dentist",
    tech: ["JavaScript", "HTML", "CSS"],
    links:
      [
        {
          type: "Github",
          url: "https://github.com/JayRVigilla/crocodileDentist"
        },
        {
          type: "CodeSandbox",
          url: "https://codesandbox.io/s/jayvigillacrocodiledentist-2o67ug?file=/script.js"
        }]
  },
  {
    title: "Twister Spinner!",
    img: {
      src: "https://upload.wikimedia.org/wikipedia/en/thumb/0/09/1966_Twister_Cover.jpg/220px-1966_Twister_Cover.jpg",
      alt: "Twister game box"
    },
    desc: "CodeSandbox",
    tech: ["JavaScript", "React", "Typescript"],
    links: [
      {
        type: "CodeSandbox",
        url: "https://codesandbox.io/s/twister-spinner-vtwd6k"
      },
    ]
  },
  {
    title: "Jeopadry!",
    img: {
      src: "/jeopardy-demo.gif",
      alt: "Jeopardy gameplay"
    },
    desc: "Frontend Project made at Rithm School using jQuery and the API jService",
    tech: ["JavaScript", "jQuery", "HTML"],
    links: [
      {
        type: "Github",
        url: "https://github.com/JayRVigilla/jeopardy"
      },
      // TODO: fix logic issue on submitting answer and redeploy
      // {
      //   type: "Link",
      //   url: "http://jih-parody-demo.surge.sh/"
      // }
    ]
  },
]
