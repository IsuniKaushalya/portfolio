import React, { useRef, useState, useEffect } from 'react';
import { SOCIAL_LINKS, GALLERY_IMAGES, EDUCATION_DATA, DownloadIcon, BriefcaseIcon, DETAILED_PROJECTS_DATA } from '../constants';
import type { SocialLink, Education } from '../types';
import mainImage from '../images/main.png';
import cv from '../images/Cv.pdf';

const EducationItem: React.FC<{ item: Education }> = ({ item }) => (
    <div className="flex items-start gap-4 py-4 first:pt-0 last:pb-0">
        <div className="w-15 h-15 bg-background dark:bg-slate-800 rounded-lg flex items-center justify-center text-text-secondary dark:text-slate-400 shrink-0 border border-border-color dark:border-violet-800">
            {item.icon}
        </div>
        <div>
            <h4 className="font-semibold text-text-primary dark:text-slate-50">{item.institution}</h4>
            <p className="text-text-secondary dark:text-slate-400 text-sm">{item.degree}</p>
            <p className="text-text-secondary dark:text-slate-400 text-xs mt-1">{item.period}</p>
        </div>
    </div>
);

const Home: React.FC = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.1 }
        );

        const currentRef = sectionRef.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    return (
        <section
            ref={sectionRef}
            id="about"
            className={`py-10 transition-opacity duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
            {/* Top Intro Section */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-12 mb-16">
                <img
                    src={mainImage}
                    alt="Tharindu Devinda"
                    className="rounded-2xl w-40 h-45 md:w-40 md:h-45 object-cover shadow-lg border-2 border-border-color dark:border-violet-800 shrink-0"
                />
                <div className="text-center md:text-left">
                    <h1 className="text-4xl md:text-5xl font-bold text-text-primary dark:text-slate-50">
                        Tharindu Devinda
                    </h1>
                    <p className="text-text-secondary dark:text-slate-400 mt-2 text-lg">
                        Software Engineering & AI Enthusiast | Passionate Photographer
                    </p>
                    <p className="text-text-secondary dark:text-slate-400 mt-4 max-w-2xl">
                        Hi, I’m Tharindu devinda, I am currently pursuing a BSc. (Hons) in Computer Science and Technology at Uva Wellassa University of Sri Lanka. I am passionate about exploring modern technologies, especially in areas such as software development, artificial intelligence, and web technologies. Alongside my academic interests, I am also passionate about photography, which helps me stay creative and detail oriented. I am eager to apply my knowledge and skills in a practical environment and looking forward to gaining valuable industry experience through an internship opportunity.
                    </p>
                    <div className="flex items-center justify-center md:justify-start gap-4 mt-6">
                        {SOCIAL_LINKS.map((link: SocialLink) => (
                            <a
                                key={link.name}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={link.name}
                                className="text-text-secondary dark:text-slate-400 hover:text-primary transition-colors"
                            >
                                {React.cloneElement(link.icon, { className: 'h-6 w-6' })}
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Gallery Section - Infinite Scroller */}
            <div className="group w-full overflow-x-hidden mb-16"
                style={{ maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)' }}>
                <div className="flex w-max animate-infinite-scroll group-hover:[animation-play-state:paused]">
                    {/* Render images twice for seamless loop */}
                    {[...GALLERY_IMAGES, ...GALLERY_IMAGES].map((src, index) => (
                        <div key={index} className="shrink-0 px-2">
                            <img
                                src={src}
                                alt={`Gallery image ${index + 1}`}
                                className="rounded-2xl w-48 h-64 object-cover shadow-md border border-border-color dark:border-violet-800"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Main Content Grid */}
            <div className="mt-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    {/* Left Column: Articles */}
                    <div>
                        <h2 className="text-3xl font-bold text-text-primary dark:text-slate-50 mb-8">Featured Projects</h2>

                        {/* Small preview cards (2-3) */}
                        <div className="grid grid-cols-1 gap-4">
                            {DETAILED_PROJECTS_DATA.filter(project => project.featured).slice(0, 3).map((project, idx) => (
                                <div key={idx} className="bg-surface dark:bg-slate-800 border border-border-color dark:border-violet-800 rounded-xl p-4 flex items-start gap-6">
                                    <img src={project.image} alt={project.title} className="w-32 h-24 lg:w-36 lg:h-28 object-cover rounded-md shrink-0" />
                                    <div className="flex-1">
                                        <h3 className="text-lg font-semibold text-text-primary dark:text-slate-50">{project.title}</h3>
                                        <p className="text-text-secondary dark:text-slate-400 text-sm mt-1 line-clamp-2">{project.description}</p>
                                        <div className="mt-3">
                                            <button
                                                onClick={() => window.dispatchEvent(new CustomEvent('navigateToSection', { detail: 'Projects' }))}
                                                className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-full bg-primary text-white hover:opacity-90 transition"
                                            >
                                                View More
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Education & Resume */}
                    <div>
                        <h2 className="text-3xl font-bold text-text-primary dark:text-slate-50 mb-8">Work & Education</h2>
                        <div className="space-y-6">
                            <div className="bg-surface dark:bg-slate-800 border border-border-color dark:border-violet-800 rounded-2xl p-6">
                                <h3 className="text-lg font-semibold text-text-primary dark:text-slate-50 flex items-center gap-2 mb-2">
                                    <BriefcaseIcon className="h-5 w-5 text-text-secondary dark:text-slate-400" /> Education
                                </h3>
                                <div className="divide-y divide-border-color dark:divide-violet-800">
                                    {EDUCATION_DATA.map((edu, index) => (
                                        <EducationItem key={index} item={edu} />
                                    ))}
                                </div>
                            </div>
                            <a
                                href={cv}
                                className="w-full inline-flex items-center justify-center px-6 py-4 bg-surface dark:bg-slate-800 border border-border-color dark:border-violet-800 text-text-primary dark:text-slate-50 font-semibold rounded-lg transition-colors duration-200 hover:bg-border-color dark:hover:bg-slate-700"
                            >
                                Download Resume
                                <DownloadIcon />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home;