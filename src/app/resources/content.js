import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Raja ",
  lastName: "",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "AI & ML Engineer",
  avatar: "/images/raja.jpeg",
  location: "Asia/Kolkata", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Hindi" , "Telugu"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Let's Connect</>,
  description: (
    <>
      Feel free to reach out with opportunities, questions, or just to say hello.
      I'm always open to connecting with fellow developers and potential collaborators.
    </>
  ),

};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/Rajasimhareddybolla",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/raja-simha-reddy-bolla/",
  },
  {
    name: "X",
    icon: "x",
    link: "https://x.com/Raja230505",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:rajasimhabolla@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>AI & ML Engineer</>,
  subline: (
    <>
      I'm Raja, a AI engineer at <InlineCode>Pinoxio</InlineCode>, where I craft Ai Agents 
      <br /> Finetune LLM'S . After hours, I build my own projects.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
    Raja is a Computer Science and Engineering student based in Bengaluru with a passion for leveraging AI to solve complex problems. His work spans AI-powered applications, full-stack development, and optimizing for performance and scalability.    


      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Pinoxio",
        timeframe: "2024 - Present",
        role: "AI & ML Engineer",
        

        achievements: [
          <>
            Designed and implemented AI-powered agents for complex tasks like tutoring, enabling personalized learning experiences.
          </>,
          <>
          Applied Reinforcement Learning (RL) to enhance interactivity, making gents achieve human-like Tutoring which increases
          avg students engagement by 7% .
          </>,
          <>
           Collaborated with senior dev’s to design and implement an end-to-end audio processing pipeline using open-source models.
            </>,
          <>
           Achieved an impressive average latency of 0.3 seconds on small edge devices, optimizing for performance and eﬃciency
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images

        ],
      },
      {
        company: "Code Alpha",
        timeframe: "2024-03",
        role: "ML and Backend developer",
        achievements: [
          <>
          Integrated ML-based product recommendation system, increasing user engagement
          </>,
          <>
            Collaborated with a team of 4 to develop and deploy an e-commerce website, optimizing the back-end .
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "BMS Collage of Engineering",
        description: <>Pursuing Computer Science and Engineering with current <bold>9.1</bold> CGPA.</>,
      },
      {
        name: "Narayana jr collage of Engineering",
        description: <>Studied online Mathemetics , Physics , Chemistry with a grade of 97.5 .</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Gen AI",
        description: <>Able to develop agentic AI-driven workforce solutions, integrating generative AI for automation, decision-making, and task execution in various domains.</>,
        // optional: leave the array empty if you don't want to display images
        images: [

        ],
      },
      {
        title: "Mechine Learning and Deep Learning ",
        description: <>Abel to develop ML and Deep Learning models from basic neural networks to advanced systems like GAN'S ,Transformers.</>,
        // optional: leave the array empty if you don't want to display images
        images: [

        ],
      },
      {
        title: "SwiftUI",
        description: <>Proficient in building modern, declarative UIs for iOS, macOS, watchOS, and tvOS using SwiftUI, leveraging its reactive programming model and seamless integration with Swift.</>,
        images: [
          {
            src: "/images/projects/project-01/Sophia.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/sophia2.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
