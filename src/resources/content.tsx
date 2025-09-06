import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Logo, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Taha",
  lastName: "",
  name: `evilsal`,
  role: "Engineering Student",
  avatar: "/images/avatar.jpg",
  email: "taha.marouani@etudiant-enit.utm.tn",
  location: "Africa/Tunis", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["Arabic", "English", "French", "Brainrot"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My may-happen newsletter about cybersecurity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/7ankalis",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/taha-marouani",
  },
  /*
  {
    name: "Threads",
    icon: "threads",
    link: "https://www.threads.com/@once_ui",
  },
  */
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
    title: `${person.name}'s Portfolio`,
  // title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Evilsal<br /> Lil Nejmet Ighibou.</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Once UI</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      An engineering student at<br /> <b>National School of Engineering of Tunis</b><br />
      where I'm using my free will to s/home/salamnkikip classes and be active within Securinets ENIT.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
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
        Taha Marouani or 7ankalis or evilsal or evilsamirloussif or whatever name I'll go by in 
        CTFs, is an engineering student at the National School of Engineering of
        Tunis (ENIT). Loves literature, technology, and cybersecurity. A proud co-founder of Securinets ENIT trying 
        to make the most out of his day. 

      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Internship at BIAT IT",
        timeframe: "Juin - Aout 2025",
        role: "Network Security Intern",
        achievements: [
          <>
            Built a full on-premise and cloud SOC system using Wazuh, TheHive, Cortex, MISP enriched with 
            custom rules for certain types of local password attacks along with basic and default borind configuration. 
          </>,
          <>
            Implemented a network monitoring system that detected basic to medium incidents and fine-tuned to detect 
            pivoting and lateral movement attempts.
            </>,
          <>
            Did threat hunts on provided APTs on specific scenarios to build a case on a critical alert.
          </>,
          <>
            Performed some forensics to find the traces and arsenal of a recent pentest.
          </>,
          <>
            Collaborated with the IT team to enhance the overall security posture of the organization's network infrastructure.
          </>,
          
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },

      {
        company: "CTF Author - Organizer",
        timeframe: "CAT the Flag CTF 1st/2nd edition.",
        role: "Maintained/Setup the CTF infrastrucutre ",
        achievements: [
          <>
            Developed a design system that unified the brand across multiple platforms, improving
            design consistency by 40%.
          </>,
          <>
            Led a cross-functional team to launch a new product line, contributing to a 15% increase
            in overall company revenue.
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
        name: "National Engineering School of Tunis (ENIT)",
        description: <>Studied Telecommunications engineering.</>,
      },
      {
        name: "Preparatory Classes for Engineering Schools (IPEIEM)",
        description: <>Studied Maths, Physics, Python, SQL, Chemistry, Mechanics, Electronics. You name it. 
        But Mostly, I studied people.
            Ranked 80/7xx at the final National Exams. </>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Networking",
        description: (
          <>Built a full virtual SOC home lab.</>
        ),
        tags: [
          {
            name: "Ubuntu",
            icon: "ubuntu",
          },

            {
                name: "Active Directory",
                icon: "windows",
            },
            {
                name: "Opnsense Firewall",
                icon: "shield",
            },

            {
                name: "ZenArmor NextGen FW",
                icon: "shield",
            },
          {
            name: "Suricata",
            icon: "shield",
          },
          {
            name: "IDS",
            icon: "shield",
          },
          {
            name: "IPS",
            icon: "shield",
          },
          {
            name: "Wazuh",
            icon: "",
          },
          {
            name: "TheHive",
            icon: "",
          },
          {
            name: "MISP",
            icon: "",
          },
          {
            name: "Cortex",
            icon: "",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Pentesting",
        description: (
          <>HackTheBox/CTF Player.</>
        ),
        tags: [
          {
            name: "Kali",
            icon: "kali",
          },
          {
            name: "AD Pentesting",
            icon: "windows",
          },
          {
            name: "Pivoting, Tunneling, Lateral Movement",
            icon: "route",
          },
            {
            name: "Privilege Escalation",
            icon: "arrowUp",
            },
            {
                name: "Enumeration",
                icon: "lens",
            },

],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },  
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
