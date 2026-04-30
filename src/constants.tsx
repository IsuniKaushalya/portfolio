import React from 'react';
import type { NavLink, SocialLink, Article, ArticleListItem, Education, DetailedProject, ContactInfo } from './types';
import sclLogo from './images/scl.png';
import uwuLogo from './images/uwu.jpg';
import at1 from './images/at1.png';
import at2 from './images/at2.png';
import at3 from './images/at3.png';
import at4 from './images/at4.png';
import at5 from './images/at5.png';
import project1 from './images/project1.png';
import project3 from './images/project3.png';
import project4 from './images/project4.png';
import img1 from './images/img1.jpg';
import img2 from './images/img2.jpg';
import img3 from './images/img3.jpg';
import img4 from './images/img4.jpg';
import img6 from './images/img6.jpg';
import img7 from './images/img7.jpg';
// Generic Icon component props
interface IconProps {
    className?: string;
}

// SVG Icons
export const GithubIcon: React.FC<IconProps> = ({ className = "h-6 w-6" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
);

export const LinkedinIcon: React.FC<IconProps> = ({ className = "h-6 w-6" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
    </svg>
);

export const FacebookIcon: React.FC<IconProps> = ({ className = "h-6 w-6" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.675 0h-21.35C.59 0 0 .59 0 1.325v21.351C0 23.41.59 24 1.325 24H12.82V14.706h-3.34V11.01h3.34V8.41c0-3.309 1.984-5.158 5.022-5.158 1.42 0 2.934.264 2.934.264v3.106h-1.583c-1.636 0-2.144.996-2.144 2.068v2.453h3.59l-.587 3.696h-3.003V24h5.633c.734 0 1.325-.59 1.325-1.325V1.325C24 .59 23.409 0 22.675 0z" />
    </svg>
);

export const InstagramIcon: React.FC<IconProps> = ({ className = "h-6 w-6" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919 1.266-.058 1.644-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z" />
    </svg>
);

export const TwitterIcon: React.FC<IconProps> = ({ className = "h-6 w-6" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
);

export const YoutubeIcon: React.FC<IconProps> = ({ className = "h-6 w-6" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
);

export const BriefcaseIcon: React.FC<IconProps> = ({ className = "h-6 w-6" }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
);

export const DownloadIcon: React.FC<IconProps> = ({ className = "h-5 w-5 ml-2" }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
    </svg>
);


export const ExternalLinkIcon: React.FC<IconProps> = ({ className = "h-5 w-5 ml-2" }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
);

export const MailIcon: React.FC<IconProps> = ({ className = "h-6 w-6" }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
);

export const BehanceIcon: React.FC<IconProps> = ({ className = "h-6 w-6" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M6.938 4.503c.846-.677 1.897-1.003 3.161-1.003.469 0 .928.055 1.378.164.45.109.866.289 1.25.538.382.249.696.569.94.96.245.391.408.874.488 1.45h2.913c-.043-.868-.269-1.673-.678-2.415-.408-.742-1.01-1.377-1.806-1.905-.796-.528-1.755-.925-2.878-1.19C10.049.088 8.858 0 7.513 0c-1.523 0-2.894.276-4.114.829-1.22.553-2.252 1.336-3.096 2.348-.844 1.012-1.481 2.234-1.913 3.666C-.04 8.394-.127 9.818-.127 11.38c0 1.562.087 2.986.262 4.271.175 1.286.559 2.506 1.152 3.661.593 1.155 1.449 2.084 2.567 2.787 1.119.703 2.569 1.054 4.349 1.054 1.271 0 2.418-.156 3.44-.469 1.022-.313 1.883-.794 2.583-1.444.7-.65 1.236-1.461 1.608-2.433.372-.972.534-2.1.484-3.384h-2.935c.053.633.173 1.196.36 1.688.187.492.47.906.849 1.242.379.336.852.594 1.419.775.567.181 1.223.271 1.97.271 1.086 0 1.997-.184 2.735-.553.738-.369 1.312-.885 1.723-1.548.411-.663.67-1.443.775-2.341.105-.898.157-1.899.157-3.003 0-1.104-.052-2.105-.157-3.003-.105-.898-.364-1.678-.775-2.341-.411-.663-.985-1.179-1.723-1.548-.738-.369-1.649-.553-2.735-.553-.747 0-1.403.09-1.97.271-.567.181-1.04.439-1.419.775-.379.336-.662.75-.849 1.242-.187.492-.307 1.055-.36 1.688h2.935c.05-1.284-.112-2.412-.484-3.384-.372-.972-.908-1.783-1.608-2.433-.7-.65-1.561-1.131-2.583-1.444-1.022-.313-2.169-.469-3.44-.469-1.78 0-3.23.351-4.349 1.054-1.118.703-1.974 1.632-2.567 2.787-.593 1.155-.977 2.375-1.152 3.661-.175 1.285-.262 2.709-.262 4.271 0 1.562.087 2.986.262 4.271.175 1.286.559 2.506 1.152 3.661.593 1.155 1.449 2.084 2.567 2.787 1.119.703 2.569 1.054 4.349 1.054 1.271 0 2.418-.156 3.44-.469 1.022-.313 1.883-.794 2.583-1.444.7-.65 1.236-1.461 1.608-2.433.372-.972.534-2.1.484-3.384h2.935c.05 1.284-.112 2.412-.484 3.384-.372.972-.908 1.783-1.608 2.433-.7.65-1.561 1.131-2.583 1.444-1.022.313-2.169.469-3.44.469-1.78 0-3.23-.351-4.349-1.054-1.118-.703-1.974-1.632-2.567-2.787-.593-1.155-.977-2.375-1.152-3.661-.175-1.285-.262-2.709-.262-4.271 0-1.562.087-2.986.262-4.271.175-1.286.559-2.506 1.152-3.661.593-1.155 1.449-2.084 2.567-2.787 1.119-.703 2.569-1.054 4.349-1.054zm0 0" />
    </svg>
);


export const MoonIcon: React.FC<IconProps> = ({ className = "h-6 w-6" }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
    </svg>
);

export const SunIcon: React.FC<IconProps> = ({ className = "h-6 w-6" }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
);

// Data
export const NAV_LINKS: NavLink[] = [
    { name: 'About' },
    { name: 'Certifications' },
    { name: 'Projects' },
    { name: 'Contact' },
];

export const SOCIAL_LINKS: SocialLink[] = [
    { name: 'LinkedIn', icon: <LinkedinIcon />, url: 'https://www.linkedin.com/in/isuni-kaushalya-70944537b' },
    { name: 'GitHub', icon: <GithubIcon />, url: 'https://github.com/IsuniKaushalya' },
    { name: 'Behance', icon: <BehanceIcon />, url: 'https://www.behance.net/isuni-kaushalya' },
];

export const CONTACT_PAGE_LINKS: SocialLink[] = [
    { name: 'Email', icon: <MailIcon />, url: 'https://mail.google.com/mail/?view=cm&fs=1&to=tharindudevinda629@gmail.com' },
    { name: 'LinkedIn', icon: <LinkedinIcon />, url: 'https://www.linkedin.com/in/isuni-kaushalya-70944537b' },
    { name: 'GitHub', icon: <GithubIcon />, url: 'https://github.com/IsuniKaushalya' },
    { name: 'Behance', icon: <BehanceIcon />, url: 'https://www.behance.net/isuni-kaushalya' },
];

export const GALLERY_IMAGES: string[] = [
    img7,
    img1,
    img2,
    img3,
    img4,
    img6,
];

export const EDUCATION_DATA: Education[] = [
    {
        icon: <img src={uwuLogo} alt="Uva Wellassa University logo" className="h-12 w-12 object-contain" />,
        institution: 'Uva Wellassa University of Sri Lanka',
        degree: 'BSc.(Hons) in Computer Science and Technology',
        period: '2022 - Present',
    },
    {
        icon: <img src={sclLogo} alt="Asoka Vidyalaya Colombo 10 logo" className="h-12 w-12 object-contain bg-white rounded p-1" />,
        institution: 'Asoka Vidyalaya, Colombo 10',
        degree: 'Advanced Level in Physical Science stream',
        period: '2017 - 2020',
    },
];

export const ARTICLES_DATA: Article[] = [
    {
        image: at1,
        title: 'AI/ML Engineer - Stage 1',
        description: 'A beginner-friendly guide to understanding the Kubernetes Control Plane, explaining its components, functions, and how it manages cluster operations effectively.',
        url: 'https://code.sliit.org/certificates/po4uw1rzih',
        tags: ['Artificial Intelligence', 'Machine Learning', 'PyTorch'],
    },
    {
        image: at2,
        title: 'Intro to Machine Learning',
        description: 'Learn the core ideas in machine learning, and build your first models.',
        url: 'https://www.kaggle.com/learn/certification/htddezoysa/intro-to-machine-learning',
        tags: ['Machine Learning', 'Supervised Learning', 'Python'],
    },
    {
        image: at3,
        title: 'Getting Started with Machine Learning Algorithms',
        description: 'An introductory course covering the fundamentals of machine learning algorithms. It provides hands-on exposure to key supervised learning techniques such as Linear Regression, Logistic Regression, Decision Trees, Random Forests, SVM, and KNN, offering a solid foundation for beginners in ML.',
        url: 'https://simpli-web.app.link/e/Ovh12adpdSb',
        tags: ['Machine Learning', 'Random forest', 'Linear regression'],
    },
    {
        image: at4,
        title: 'Prompt Engineering with ChatGPT',
        description: 'This course introduces the art of crafting effective prompts to enhance ChatGPT’s performance and generate high quality, context aware responses. It covers techniques for handling complex queries, optimizing AI outputs, and applying prompt engineering across content creation, marketing, and professional communication.',
        url: 'https://simpli-web.app.link/e/lu2sQyw5lUb',
        tags: ['Prompt Engineering', 'Generative AI', 'LLMs'],
    },
    {
        image: at5,
        title: 'HTML, CSS, JavaScript, React - Online Certification Course',
        description: 'TA comprehensive course covering the foundations of web development, from building structured and responsive web pages with HTML and CSS to adding interactivity using JavaScript. It also introduces React for developing dynamic web applications, focusing on key concepts like state management, props, and events, along with practical hands-on projects.',
        url: 'https://www.udemy.com/certificate/UC-f07e8b19-4896-45b9-8adf-4a8376843ef3/',
        tags: ['React', 'Web Development', 'JavaScript'],
    }
];

export const DETAILED_PROJECTS_DATA: DetailedProject[] = [
    {
        image: project1,
        title: 'HomePoint - Enterprise Resource & Construction Project Management System',
        description: `A full stack web solution developed by a 4 member team to streamline construction project workflows from planning to execution. It features multi project dashboards, inventory and budget tracking, real time collaboration, and an innovative face recognition attendance system powered by AWS Rekognition. Built with Next.js, Node.js, MongoDB, and AWS, this project showcases enterprise level functionality, cloud integration, and responsive design optimized for construction site use.`,
        tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Material-UI', 'Redux Toolkit', 'Node.js', 'Express.js', 'MongoDB', 'Socket.IO', 'AWS Rekognition', 'JWT Authentication'],
        demoUrl: 'https://www.linkedin.com/posts/tharindu-devinda-978905278_constructiontech-projectmanagement-fullstackdevelopment-activity-7392471884761640960-USNT?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEPEEywBnzEtYWPOfzbx8hBL8Iex1zMsqYs',
        featured: true,
    },
    {
        image: project4,
        title: 'TaskOra - where tasks find their flow',
        description: 'A 2 member group project developed to simplify task tracking and improve team productivity. The system enables users to create, assign, and manage tasks with real time status updates, secure role based access, and personalized dashboards. Built with a clean glass morphism UI and JWT aware caching, it supports efficient workflows and seamless collaboration between team members.',
        tags: ['Nextjs ', 'NestJS ', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Prisma ORM', 'JWT'],
        demoUrl: '',
        featured: true,  // ← Add this to feature it on the home page
    },
    {
        image: project3,
        title: 'poultryPro',
        description: 'A 4 member group project developed to streamline farm management and support online product sales for poultry farmers. The platform allows farmers to manage their poultry operations, track farm activities, and sell products through an integrated marketplace, connecting multiple farmers with customers online.',
        tags: ['JavaScript', 'bootstrap', 'HTML', 'php'],
        demoUrl: 'https://www.linkedin.com/posts/haamidhansak_projectcompletion-teamwork-poultrymanagement-activity-7256167199504007168-Mndm?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEPEEywBnzEtYWPOfzbx8hBL8Iex1zMsqYs',
        featured: true,  // ← Add this to feature it on the home page
    },
];
