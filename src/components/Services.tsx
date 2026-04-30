import React, { useRef, useState, useEffect } from 'react';
import { ARTICLES_DATA } from '../constants';
import type { Article } from '../types';

const CertificationCard: React.FC<{ article: Article }> = ({ article }) => (
    <a
        href={article.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block bg-surface dark:bg-slate-800 rounded-2xl shadow-lg overflow-hidden group transition-transform duration-300 hover:-translate-y-2 border border-border-color dark:border-violet-800"
    >
        <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3 lg:w-1/4 shrink-0 overflow-hidden">
                <img src={article.image} alt={article.title} className="w-full h-48 md:h-full object-cover transition-transform duration-300 group-hover:scale-110" />
            </div>
            <div className="p-6 flex flex-col justify-center">
                <h3 className="text-xl font-semibold text-text-primary dark:text-slate-50 mb-2 group-hover:text-primary transition-colors">{article.title}</h3>
                <p className="text-text-secondary dark:text-slate-400 text-sm">{article.description}</p>
                <div className="flex flex-wrap gap-2 mt-3">
                    {article.tags.map(tag => (
                        <span key={tag} className="text-xs font-semibold bg-border-color dark:bg-slate-700 text-text-secondary dark:text-slate-300 px-2 py-1 rounded-full">{tag}</span>
                    ))}
                </div>
            </div>
        </div>
    </a>
);

const Certifications: React.FC = () => {
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
            id="certifications"
            className={`min-h-[calc(100vh-10rem)] py-10 transition-opacity duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
            <div className="text-left mb-12">
                <h1 className="text-4xl lg:text-3xl font-bold text-text-primary dark:text-slate-50">Certifications & Learning Journey</h1>
                <p className="text-text-secondary dark:text-slate-400 mt-2">A collection of my completed certifications and learning milestones showcasing continuous growth in AI, Machine Learning, and Web Development.</p>
            </div>
            <div className="space-y-8">
                {ARTICLES_DATA.map((article, index) => (
                    <CertificationCard key={index} article={article} />
                ))}
            </div>
        </section>
    );
};

export default Certifications;