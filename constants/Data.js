import { images } from '.';
import css from '../assets/css.png';

export const techStack = [
    { img: images.react, tech: "ReactJS", level: "90" },
    { img: images.Nextjs, tech: "NextJS", level: "85" },
    { img: images.node, tech: "NodeJS", level: "80" },
    { img: images.ExpressJS, tech: "ExpressJS", level: "90" },
    { img: images.javascript, tech: "JavaScript", level: "85" },
    { img: images.mongodb, tech: "MongoDB", level: "80" },
];

export const certificates = [
    { name: "AWS Cloud Foundations", platform: "AWS", verify: "https://www.credly.com/badges/8d8e9cf8-8d4e-4d2d-a6f6-df0d7a1d8154" },
    { name: "React Basics by META", platform: "Coursera", verify: "https://www.coursera.org/account/accomplishments/certificate/9XWGM5PAZ7R8" },
];

export const featuredPortfolio = [
    {
        id: 1,
        title: "MLOps CI/CD Pipeline",
        img: "https://media.licdn.com/dms/image/C4E12AQH3TT5Xmf5oVQ/article-cover_image-shrink_600_2000/0/1597344139074?e=2147483647&v=beta&t=dySWSHGqgacwE1q3XsDml-OwXwprCLnShrtOx8hegAM",
        description: 'Designed and implemented a CI/CD pipeline for a project with a model and unique dataset',
        tags: ['MERN'],
        codeLink: 'https://github.com/ItsFaizan/MLops_Assignment01'
    },
    {
        id: 2,
        title: "RizqRaahi",
        img: "https://miro.medium.com/v2/resize:fit:300/1*QWSAJPDajfmAm5JjRRhTjg.png",
        description: 'Android andWeb application aimed at connecting restaurants with NGOs for realtime food donations, prediction of future donations, crisis relief coordination, and restaurant recommendations along with dual language support',
        tags: ['PERN'],
        projectLink: 'https://rizqraahi.netlify.app/',
        codeLink: 'https://github.com/ItsFaizan/FYP-RizqRaahi'
    },
    {
        id: 3,
        title: "SkillServe",
        img: "https://media.licdn.com/dms/image/C5612AQGYviu1BugVvw/article-cover_image-shrink_720_1280/0/1635439433794?e=2147483647&v=beta&t=Scjw5i1eiq4JRyOnKKRBeMIopn5AiFOjpdwomq5jhnI",
        description: 'Freelance Management System having three different modules i.e admin, service (gigs) and customers.',
        tags: ['MERN'],
        codeLink: 'https://github.com/ItsFaizan/SkillServe_Mern_Project'
    }
];

export const webPortfolio = [
    {
        id: 1,
        title: "Food Delivery App",
        img: "https://media.licdn.com/dms/image/C5612AQGYviu1BugVvw/article-cover_image-shrink_720_1280/0/1635439433794?e=2147483647&v=beta&t=Scjw5i1eiq4JRyOnKKRBeMIopn5AiFOjpdwomq5jhnI",
        description: 'Developed food delivery system in a team of 4 having modules, Admin, Rider, Restaurant and Customer',
        tags: ['MERN'],
        codeLink: 'https://github.com/ItsFaizan/Mern_Project-Online-Food-Delivery-System'
    },
    {
        id: 2,
        title: "RizqRaahi",
        img: "https://miro.medium.com/v2/resize:fit:300/1*QWSAJPDajfmAm5JjRRhTjg.png",
        description: 'Android andWeb application aimed at connecting restaurants with NGOs for realtime food donations, prediction of future donations, crisis relief coordination, and restaurant recommendations along with dual language support',
        tags: ['PERN'],
        projectLink: 'https://rizqraahi.netlify.app/',
        codeLink: 'https://github.com/ItsFaizan/FYP-RizqRaahi'
    },
    {
        id: 3,
        title: "SkillServe",
        img: "https://media.licdn.com/dms/image/C5612AQGYviu1BugVvw/article-cover_image-shrink_720_1280/0/1635439433794?e=2147483647&v=beta&t=Scjw5i1eiq4JRyOnKKRBeMIopn5AiFOjpdwomq5jhnI",
        description: 'Freelance Management System having three different modules i.e admin, service (gigs) and customers.',
        tags: ['MERN'],
        codeLink: 'https://github.com/ItsFaizan/SkillServe_Mern_Project'
    },
    {
        id: 4,
        title: "Blogging App",
        img: "https://media.licdn.com/dms/image/C5612AQGYviu1BugVvw/article-cover_image-shrink_720_1280/0/1635439433794?e=2147483647&v=beta&t=Scjw5i1eiq4JRyOnKKRBeMIopn5AiFOjpdwomq5jhnI",
        description: 'MERN-based blogging site with 6 key features, including secure cookies, blog creation with rich media content, and engage with other authors by liking, commenting, and clapping for their articles',
        tags: ['MERN'],
        codeLink: 'https://github.com/ItsFaizan/BlogApp_MERN'
    },
    
];

export const mobilePortfolio = [
    {
        id: 1,
        title: "News App",
        img: "https://download.logo.wine/logo/React_(web_framework)/React_(web_framework)-Logo.wine.png",
        description: 'Crafted News app using React and Redux incorporating five distinct features, including real-time news updatesand category-based filtering.',
        tags: ['React'],
        codeLink: 'https://github.com/ItsFaizan/React_NewsApp'
    },
    {
        id: 2,
        title: "Metaverse Madness",
        img: "https://global.discourse-cdn.com/auth0/optimized/2X/a/ae35edce19e64c53e5d455b22e8a2c82d093d4c9_2_1024x919.png",
        description: 'Explore different Metaverses and their unique features in this NextJS app with a simple UI and smooth transitions.',
        tags: ['NextJs'],
        codeLink: 'https://github.com/ItsFaizan/Metaverse_Madness_NextJS'
    },
    {
        id: 3,
        title: "FolioNomics",
        img: "https://global.discourse-cdn.com/auth0/optimized/2X/a/ae35edce19e64c53e5d455b22e8a2c82d093d4c9_2_1024x919.png",
        description: 'project aimed at transforming how people manage their financial portfolios, using Next.js framework.',
        tags: ['NextJs'],
        codeLink: 'https://github.com/0xbase-Corp/portfolio_ui'
    },
    {
        id: 4,
        title: "Pokedex",
        img: "https://download.logo.wine/logo/React_(web_framework)/React_(web_framework)-Logo.wine.png",
        description: 'React app to see your favorite Pokemon and their details, including their abilities, types, and stats.',
        tags: ['React'],
        codeLink: 'https://github.com/ItsFaizan/Pokedex_React'
    }
];

export const designPortfolio = [
    {
        id: 1,
        img: "https://firebasestorage.googleapis.com/v0/b/sharjeel-portfolio.appspot.com/o/Graphics%2FJohn%20Wick.png?alt=media&token=395e7b66-0428-460e-b089-ab917c351c7d"
    },
    {
        id: 2,
        img: "https://firebasestorage.googleapis.com/v0/b/sharjeel-portfolio.appspot.com/o/Graphics%2FMinal.png?alt=media&token=65426863-4f5c-44ac-9232-8ff2e6a25f8e"
    },
    {
        id: 3,
        img: "https://firebasestorage.googleapis.com/v0/b/sharjeel-portfolio.appspot.com/o/Graphics%2FOsman.png?alt=media&token=5c56f915-0fc3-4cf5-ac2f-441e1770193c"
    }
];

export const web_3 = [
    {
        id: 1,
        title: "Krypt",
        img: "https://camo.githubusercontent.com/b61e5e14fa54284302665905b7548c96dc36a81c500fbda2172f0ce95ce8302a/68747470733a2f2f692e6962622e636f2f44564634744e572f696d6167652e706e67",
        description: 'Web 3.0 React Solidity Blockchain Application',
        tags: ['WEB 3.0'],
        codeLink: 'https://github.com/sharjeelyunus/Krypt'
    }
];

export const webinars = [
    {
        id: 1,
        title: "HacktoberFest",
        date: "Oct 26, 2022",
        platform: 'GDSC IUB'
    },
    {
        id: 2,
        title: "HacktoberFest 2022",
        date: "Oct 16, 2022",
        platform: 'GDSC UET'
    },
    {
        id: 3,
        title: "The Web Ecosystem",
        date: "Sep 23, 2022",
        platform: 'MetaBlocks'
    },
    {
        id: 3,
        title: "UNDP: Sustainable Development Goals",
        link: 'https://youtu.be/H1zTELXc7og',
        date: "Feb 25, 2022",
        platform: 'SolutionFest'
    },
    {
        id: 4,
        title: "Introduction to Flutter",
        link: 'https://youtu.be/iv2eVi8AqOs',
        date: "Jan 19, 2022",
        platform: 'GDSC IUB'
    },
    {
        id: 5,
        title: "Git and GitHub",
        date: "Dec 26, 2021",
        platform: 'Hack Club IUB'
    },
    {
        id: 6,
        title: "Build simple a game with JS",
        date: "Nov 19, 2021",
        platform: 'GDSC IUB'
    },
    {
        id: 7,
        title: "Getting Started with HTML and CSS",
        date: "Oct 31, 2021",
        platform: 'GDSC IUB'
    },
    {
        id: 8,
        title: "#AndoidSeekho Informantion Session",
        date: "Oct 23, 2021",
        platform: 'GDSC IUB'
    },
    {
        id: 9,
        title: "Hack The Hacktoberfest",
        date: "Oct 9, 2021",
        platform: 'Hack Club IUB'
    }
];

export const testimonials = [
    {
        id: 1,
        name: "Rashid Wassan",
        jobTitle: 'Founder & CEO KaamSay',
        img: "https://github.com/rashidwassan.png",
        recomendation: 'The smart & multitalented guy and a genuine person. Sharjeel is the person to reach out for the technical help or tasks. I was really inspired to see the work of this person on GitHub and got very inspired. Highly recommended person to work with!'
    },
    {
        id: 2,
        name: "Ehmad Saeed",
        jobTitle: 'β MLSA || Full Stack Developer',
        img: "https://github.com/justEhmadSaeed.png",
        recomendation: "Sharjeel has been working with different tech communities, on a mission to spread the knowledge and hands-on experience with students. His leadership skills are quite exceptional and he's a guy to look on to if you're planning on conducting a successful event."
    },
    {
        id: 3,
        name: "Meer Hamza",
        jobTitle: 'Google DSC Lead || β MLSA',
        img: "https://github.com/meerhamzadev.png",
        recomendation: "Being Sharjeel's fellow Lead in the Google Developer Student Clubs program was really a pleasure, he always went beyond the recommendations. He was always very open to discussion and feedback and had a very clear way to communicate his ideas. Sharjeel is very organized with his work, which helped him on developing solutions to the problems and made him excellent in executing his strategies. He is also technically sound which makes him an admirable professional."
    }
];
