import React, { useRef, useState, useEffect } from 'react';
import { DETAILED_PROJECTS_DATA, ExternalLinkIcon } from '../constants';
import type { DetailedProject } from '../types';
import ImageModal from './ImageModal';

const CaseStudyContent: React.FC<{ project: DetailedProject }> = ({ project }) => (
    <div className="mt-6 rounded-2xl border border-border-color bg-background p-5 dark:border-violet-800 dark:bg-slate-900/60">
        <div className="mb-4 flex items-center justify-between gap-2">
            <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                Case Study
            </span>
        </div>

        <div className="max-h-[26rem] overflow-y-auto pr-2">
            {project.caseStudy ? (
                <div className="space-y-5 text-sm leading-7 text-text-secondary dark:text-slate-400">
                    <section>
                        <h4 className="text-base font-semibold text-text-primary dark:text-slate-50">Overview</h4>
                        <p className="mt-2">{project.caseStudy.overview}</p>
                    </section>

                    <section>
                        <h4 className="text-base font-semibold text-text-primary dark:text-slate-50">Problem</h4>
                        <p className="mt-2 whitespace-pre-line">{project.caseStudy.problem}</p>
                    </section>

                    <section>
                        <h4 className="text-base font-semibold text-text-primary dark:text-slate-50">Solution</h4>
                        <p className="mt-2">{project.caseStudy.solution}</p>
                    </section>

                    <section>
                        <h4 className="text-base font-semibold text-text-primary dark:text-slate-50">Visual Design</h4>
                        <div className="mt-2 space-y-3 rounded-2xl border border-border-color bg-surface p-4 dark:border-violet-800 dark:bg-slate-900">
                            <div>
                                <p className="font-semibold text-text-primary dark:text-slate-50">Color Direction</p>
                                <p className="mt-1">{project.caseStudy.visualDesign.colorDirection}</p>
                            </div>
                            <div>
                                <p className="font-semibold text-text-primary dark:text-slate-50">Typography</p>
                                <p className="mt-1">{project.caseStudy.visualDesign.typography}</p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h4 className="text-base font-semibold text-text-primary dark:text-slate-50">Design Decisions</h4>
                        <ul className="mt-2 list-disc space-y-1 pl-5">
                            {project.caseStudy.designDecisions.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </section>

                    <section>
                        <h4 className="text-base font-semibold text-text-primary dark:text-slate-50">Challenges</h4>
                        <ul className="mt-2 list-disc space-y-1 pl-5">
                            {project.caseStudy.challenges.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </section>

                    <section>
                        <h4 className="text-base font-semibold text-text-primary dark:text-slate-50">Outcome</h4>
                        <p className="mt-2">{project.caseStudy.outcome}</p>
                    </section>

                    {project.caseStudy.finalNote && (
                        <section>
                            <h4 className="text-base font-semibold text-text-primary dark:text-slate-50">Final Note</h4>
                            <p className="mt-2">{project.caseStudy.finalNote}</p>
                        </section>
                    )}
                </div>
            ) : (
                <p className="text-sm leading-7 text-text-secondary dark:text-slate-400">{project.description}</p>
            )}
        </div>
    </div>
);

const ProjectCard: React.FC<{ project: DetailedProject }> = ({ project }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isCaseStudyOpen, setIsCaseStudyOpen] = useState(false);

    return (
        <>
            <div className="bg-surface dark:bg-slate-800 rounded-2xl shadow-lg overflow-hidden flex flex-col lg:flex-row mb-12 last:mb-0 border border-border-color dark:border-violet-800">
                <div className="lg:w-2/5 cursor-pointer group relative overflow-hidden" onClick={() => setIsModalOpen(true)}>
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-64 lg:h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                        <svg className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                        </svg>
                    </div>
                </div>
                <div className="lg:w-3/5 p-8 flex flex-col justify-center">
                    <h3 className="text-2xl font-bold text-text-primary dark:text-slate-50 mb-3">{project.title}</h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map(tag => (
                            <span key={tag} className="text-xs font-semibold bg-border-color dark:bg-slate-700 text-text-secondary dark:text-slate-300 px-3 py-1 rounded-full">{tag}</span>
                        ))}
                    </div>
                    <p className="text-text-secondary dark:text-slate-400 mb-6 grow">{project.description}</p>
                    <div className="flex items-center gap-4 flex-wrap">
                        {project.demoUrl && (
                            <a
                                href={project.demoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white font-bold rounded-full transition-transform duration-200 hover:scale-105 shadow-lg"
                            >
                                View Demo
                                <ExternalLinkIcon />
                            </a>
                        )}
                        <button
                            type="button"
                            onClick={() => setIsCaseStudyOpen((current) => !current)}
                            className="inline-flex items-center justify-center px-6 py-3 border border-border-color dark:border-violet-800 text-text-primary dark:text-slate-50 font-bold rounded-full transition-transform duration-200 hover:scale-105 hover:bg-border-color dark:hover:bg-slate-700"
                        >
                            {isCaseStudyOpen ? 'Hide Case Study' : 'Case Study'}
                        </button>
                        {project.liveUrl && (
                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center px-6 py-3 bg-text-primary text-background font-semibold rounded-full transition-colors duration-200 hover:bg-gray-700 dark:bg-slate-200 dark:text-slate-900 dark:hover:bg-white"
                            >
                                Live Site
                                <ExternalLinkIcon />
                            </a>
                        )}
                    </div>
                </div>

                {isCaseStudyOpen && <CaseStudyContent project={project} />}
            </div>

            {isModalOpen && (
                <ImageModal
                    imageSrc={project.image}
                    imageAlt={project.title}
                    onClose={() => setIsModalOpen(false)}
                />
            )}

        </>
    );
};

const Projects: React.FC = () => {
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
            id="projects"
            className={`min-h-[calc(100vh-10rem)] py-10 transition-opacity duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
            <div className="text-left mb-12">
                <h1 className="text-4xl lg:text-5xl font-bold text-text-primary dark:text-slate-50">Projects</h1>
                <p className="text-text-secondary dark:text-slate-400 mt-2">A selection of my work.</p>
            </div>
            <div>
                {DETAILED_PROJECTS_DATA.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </section>
    );
};

export default Projects;