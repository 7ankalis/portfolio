import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";
import ProfileCard from "@/components/ProfileCard";

const person: Person = {
    firstName: "Taha",
    lastName: "",
    name: `evilsal`,
    role: "Engineering Student",
    avatar: "/images/avatar.jpg",
    email: "taha.marouani@etudiant-enit.utm.tn",
    location: "Africa/Tunis",
    languages: ["Arabic", "English", "French", "Brainrot"],
};

const newsletter: Newsletter = {
    display: true,
    title: <>Subscribe to {person.firstName}'s Newsletter</>,
    description: <>My may-happen newsletter about cybersecurity and engineering</>,
};

const social: Social = [
    { name: "GitHub", icon: "github", link: "https://github.com/7ankalis" },
    { name: "LinkedIn", icon: "linkedin", link: "https://www.linkedin.com/in/taha-marouani" },
    { name: "Email", icon: "email", link: `mailto:${person.email}` },
];

const home: Home = {
    path: "/",
    image: "/images/og/home.jpg",
    label: "Home",
    title: `${person.name}'s Portfolio`,
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
            where I'm using my free time to attend classes and be active within Securinets ENIT.
        </>
    ),
};

const about: About = {
    path: "/about",
    label: "About",
    title: `About – ${person.name}`,
    description: `Meet ${person.name}, ${person.role} from ${person.location}`,
    tableOfContent: { display: true, subItems: false },
    avatar: { display: true },
    calendar: { display: true, link: "https://cal.com" },
    intro: {
        display: true,
        title: "Introduction",
        description: (
            <>
                <p>
                    Taha Marouani, also known as 7ankalis or evilsal, is an engineering student at the National School of Engineering of Tunis (ENIT).
                    Loves literature, technology, and cybersecurity. Co-founder of Securinets ENIT.
                </p>
            </>

        ),
    },
    work: {
        display: true,
        title: "Work Experience",
        experiences: [
            {
                company: "Internship at BIAT IT",
                timeframe: "Juin - Aout 2025",
                role: "Network Security Intern",
                achievements: [
                    <>Built a full on-premise and cloud SOC system using Wazuh, TheHive, Cortex, MISP enriched with custom rules for local password attacks.</>,
                    <>Implemented a network monitoring system for incident detection and lateral movement tracking.</>,
                    <>Did threat hunts on provided APT scenarios to build critical alert cases.</>,
                    <>Performed forensics to find traces and arsenal of a recent pentest.</>,
                    <>Collaborated with IT to enhance the organization's overall network security posture.</>,
                ],
                images: [
                    { src: "/images/projects/project-01/cover-01.jpg", alt: "Once UI Project", width: 16, height: 9 },
                ],
            },
            {
                company: "CTF Author - Organizer",
                timeframe: "CAT the Flag CTF 1st/2nd edition.",
                role: "Maintained/Setup the CTF infrastructure",
                achievements: [
                    <>Developed a design system unifying the brand across platforms, improving design consistency by 40%.</>,
                    <>Led a cross-functional team to launch a new product line, boosting overall revenue by 15%.</>,
                ],
                images: [],
            },
        ],
    },
    studies: {
        display: true,
        title: "Studies",
        institutions: [
            { name: "National Engineering School of Tunis (ENIT)", description: <>Studied Telecommunications engineering.</> },
            { name: "Preparatory Classes for Engineering Schools (IPEIEM)", description: <>Studied Maths, Physics, Python, SQL, Chemistry, Mechanics, Electronics. Ranked 80/7xx at the final National Exams.</> },
        ],
    },
    technical: {
        display: true,
        title: "Technical skills",
        skills: [
            {
                title: "Networking",
                description: <>Built a full virtual SOC home lab.</>,
                tags: [
                    { name: "Ubuntu", icon: "ubuntu" },
                    { name: "Active Directory", icon: "windows" },
                    { name: "Opnsense Firewall", icon: "shield" },
                    { name: "ZenArmor NextGen FW", icon: "shield" },
                    { name: "Suricata", icon: "shield" },
                    { name: "IDS", icon: "shield" },
                    { name: "IPS", icon: "shield" },
                    { name: "Wazuh", icon: "" },
                    { name: "TheHive", icon: "" },
                    { name: "MISP", icon: "" },
                    { name: "Cortex", icon: "" },
                ],
                images: [
                    { src: "/images/projects/project-01/cover-02.jpg", alt: "Project image", width: 16, height: 9 },
                    { src: "/images/projects/project-01/cover-03.jpg", alt: "Project image", width: 16, height: 9 },
                ],
            },
            {
                title: "Pentesting",
                description: <>HackTheBox/CTF Player.</>,
                tags: [
                    { name: "Kali", icon: "kali" },
                    { name: "AD Pentesting", icon: "windows" },
                    { name: "Pivoting, Tunneling, Lateral Movement", icon: "route" },
                    { name: "Privilege Escalation", icon: "arrowUp" },
                    { name: "Enumeration", icon: "lens" },
                ],
                images: [
                    { src: "/images/projects/project-01/cover-04.jpg", alt: "Project image", width: 16, height: 9 },
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
};

const work: Work = {
    path: "/work",
    label: "Work",
    title: `Projects – ${person.name}`,
    description: `Design and dev projects by ${person.name}`,
};

const gallery: Gallery = {
    path: "/gallery",
    label: "Gallery",
    title: `Photo gallery – ${person.name}`,
    description: `A photo collection by ${person.name}`,
    images: [
        { src: "/images/gallery/horizontal-1.jpg", alt: "image", orientation: "horizontal" },
        { src: "/images/gallery/vertical-4.jpg", alt: "image", orientation: "vertical" },
        { src: "/images/gallery/horizontal-3.jpg", alt: "image", orientation: "horizontal" },
        { src: "/images/gallery/vertical-1.jpg", alt: "image", orientation: "vertical" },
        { src: "/images/gallery/vertical-2.jpg", alt: "image", orientation: "vertical" },
        { src: "/images/gallery/horizontal-2.jpg", alt: "image", orientation: "horizontal" },
        { src: "/images/gallery/horizontal-4.jpg", alt: "image", orientation: "horizontal" },
        { src: "/images/gallery/vertical-3.jpg", alt: "image", orientation: "vertical" },
    ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
