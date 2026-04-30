import React, { useRef, useState, useEffect } from 'react';
import { CONTACT_PAGE_LINKS } from '../constants';

const Contact: React.FC = () => {
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
            id="contact"
            className={`min-h-[calc(100vh-10rem)] py-10 flex flex-col items-center text-center transition-opacity duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
            <div className="w-full max-w-3xl mx-auto mb-12">
                <h1 className="text-4xl lg:text-5xl font-bold text-text-primary dark:text-slate-50">Contact</h1>
                <p className="text-text-secondary dark:text-slate-400 mt-4">
                    Open to full-stack collaborations, scalable systems, and creative tech solutions <br/> let’s build what’s next.
                </p>
            </div>

            <div className="w-full max-w-4xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                    {CONTACT_PAGE_LINKS.map((link) => (
                        <a
                            key={link.name}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-surface dark:bg-slate-800 p-6 rounded-2xl flex flex-col items-center justify-center gap-4 border border-border-color dark:border-violet-800 group transition-all duration-300 hover:border-primary hover:-translate-y-2"
                        >
                            <div className="text-primary group-hover:text-primary transition-colors duration-300">
                                {React.cloneElement(link.icon as React.ReactElement<any>, { className: 'h-10 w-10' })}
                            </div>
                            <span className="font-semibold text-text-primary dark:text-slate-50">{link.name}</span>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Contact;