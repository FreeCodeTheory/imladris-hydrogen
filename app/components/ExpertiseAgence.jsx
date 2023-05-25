import React, { useEffect, useRef } from "react";
import Card from './Card';

const ExpertiseAgence = () => {
    const sectionRef = useRef();  // Ref pour la section
    const ulRef = useRef();  // Ref pour la liste ul
    useEffect(() => {
        const handleScroll = () => {
            const sectionRect = sectionRef.current.getBoundingClientRect();
            const offset = 120;  // décalage en pixels
    
            if (sectionRect.top < -offset && sectionRect.bottom > ulRef.current.scrollHeight) {
                ulRef.current.style.position = 'fixed';
                ulRef.current.style.top = `${offset}px`; // appliquer le décalage ici
                ulRef.current.style.bottom = 'auto';
            } else if (sectionRect.bottom < ulRef.current.scrollHeight) {
                ulRef.current.style.position = 'absolute';
                ulRef.current.style.top = 'auto';
                ulRef.current.style.bottom = '0';
            } else {
                ulRef.current.style.position = 'static';
            }
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    const data = {
    mainTitle: 'Nous sommes experts en UX design & en développement web',
    links: ['Études & conseil UX', 'UX design & conception', 'Développement web & app', 'Audit technique & TMA'],
    subsections: [
        {
        subTitle: 'Études & Conseil UX',
        cards: [
                { title: 'Audit UX', titleColor: '#D0EA59', content: 'Quels sont les problèmes ergonomiques de votre site et application ?', buttonText: 'En savoir plus' },
                { title: 'Benchmark UX', titleColor: '#D959AF', content: 'Quels sont les problèmes ergonomiques de votre site et application ?', buttonText: 'En savoir plus' },
                { title: 'Études utilisateurs', titleColor: '#EBAC00', content: 'Quels sont les problèmes ergonomiques de votre site et application ?', buttonText: 'En savoir plus' },
                { title: 'Audit UX', titleColor: '#D0EA59', content: 'Quels sont les problèmes ergonomiques de votre site et application ?', buttonText: 'En savoir plus' },
                { title: 'Benchmark UX', titleColor: '#D959AF', content: 'Quels sont les problèmes ergonomiques de votre site et application ?', buttonText: 'En savoir plus' },
                { title: 'Études utilisateurs', titleColor: '#EBAC00', content: 'Quels sont les problèmes ergonomiques de votre site et application ?', buttonText: 'En savoir plus' },
            ],
        },
        {
        subTitle: 'UX Design & Conception',
        cards: [
                { title: 'Audit UX', titleColor: '#D0EA59', content: 'Quels sont les problèmes ergonomiques de votre site et application ?', buttonText: 'En savoir plus' },
                { title: 'Benchmark UX', titleColor: '#D959AF', content: 'Quels sont les problèmes ergonomiques de votre site et application ?', buttonText: 'En savoir plus' },
                { title: 'Études utilisateurs', titleColor: '#EBAC00', content: 'Quels sont les problèmes ergonomiques de votre site et application ?', buttonText: 'En savoir plus' },
                { title: 'Audit UX', titleColor: '#D0EA59', content: 'Quels sont les problèmes ergonomiques de votre site et application ?', buttonText: 'En savoir plus' },
                { title: 'Benchmark UX', titleColor: '#D959AF', content: 'Quels sont les problèmes ergonomiques de votre site et application ?', buttonText: 'En savoir plus' },
                { title: 'Études utilisateurs', titleColor: '#EBAC00', content: 'Quels sont les problèmes ergonomiques de votre site et application ?', buttonText: 'En savoir plus' },
            ],
        },
        {
        subTitle: 'Développement web & app',
        cards: [
                { title: 'Audit UX', titleColor: '#D0EA59', content: 'Quels sont les problèmes ergonomiques de votre site et application ?', buttonText: 'En savoir plus' },
                { title: 'Benchmark UX', titleColor: '#D959AF', content: 'Quels sont les problèmes ergonomiques de votre site et application ?', buttonText: 'En savoir plus' },
                { title: 'Études utilisateurs', titleColor: '#EBAC00', content: 'Quels sont les problèmes ergonomiques de votre site et application ?', buttonText: 'En savoir plus' },
                { title: 'Audit UX', titleColor: '#D0EA59', content: 'Quels sont les problèmes ergonomiques de votre site et application ?', buttonText: 'En savoir plus' },
                { title: 'Benchmark UX', titleColor: '#D959AF', content: 'Quels sont les problèmes ergonomiques de votre site et application ?', buttonText: 'En savoir plus' },
                { title: 'Études utilisateurs', titleColor: '#EBAC00', content: 'Quels sont les problèmes ergonomiques de votre site et application ?', buttonText: 'En savoir plus' },
            ],
        },
        {
        subTitle: 'Audit technique & TMA',
        cards: [
                { title: 'Audit UX', titleColor: '#D0EA59', content: 'Quels sont les problèmes ergonomiques de votre site et application ?', buttonText: 'En savoir plus' },
                { title: 'Benchmark UX', titleColor: '#D959AF', content: 'Quels sont les problèmes ergonomiques de votre site et application ?', buttonText: 'En savoir plus' },
                { title: 'Études utilisateurs', titleColor: '#EBAC00', content: 'Quels sont les problèmes ergonomiques de votre site et application ?', buttonText: 'En savoir plus' },
                { title: 'Audit UX', titleColor: '#D0EA59', content: 'Quels sont les problèmes ergonomiques de votre site et application ?', buttonText: 'En savoir plus' },
                { title: 'Benchmark UX', titleColor: '#D959AF', content: 'Quels sont les problèmes ergonomiques de votre site et application ?', buttonText: 'En savoir plus' },
                { title: 'Études utilisateurs', titleColor: '#EBAC00', content: 'Quels sont les problèmes ergonomiques de votre site et application ?', buttonText: 'En savoir plus' },
            ],
        },
        // Add more subsections as needed.
    ],
    };

    return (
        <section className="bg-gray-900 text-gray-50 rounded-[50px] py-[60px] px-[80px] relative" ref={sectionRef}>
            <h1 className="font-bold text-[50px] tracking-[0.01em] leading-[61px] 
                            w-[40%] mb-[80px]">{data.mainTitle}</h1>
        
            <div className="flex justify-between">
                <div className="w-1/3" style={{ height: 'fit-content' }}>
                    <ul className="sticky-top-0" ref={ulRef}>
                        {data.links.map((link, i) => (
                            <li key={i} className="py-[20px] font-medium text-[16px] tracking-[0.02em] leading-[20px] w-fit cursor-pointer hover:text-green-50">
                                <a href={`#${link.replace(/ /g, '-').toLowerCase()}`}>{link}</a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex flex-col justify-between w-2/3">
                    {data.subsections.map((subsection, i) => (
                    <div key={i} className="flex flex-col mb-6">
                        <div className='flex justify-between pb-[20px]'>
                            <div className='border border-gray-700 rounded-full px-[8px] py-[4px] gap-10 drop-shadow-primary'>
                            <h2 id={subsection.subTitle.replace(/ /g, '-').toLowerCase()} className="font-bold text-[11px] tracking-[0.04em] uppercase">
                                {subsection.subTitle}
                            </h2>
                            </div>
                            <a href="#" className='text-[16px] tracking-[0.02em] leading-[25px] underline'>En savoir plus</a>
                        </div>

                        <div className="grid grid-cols-3 gap-2 mb-[20px]">
                        {subsection.cards.map((card, j) => (
                            <div key={j} className="bg-gray-800 text-gray-50 rounded-[40px] w-full h-fit">
                            <Card 
                                title={card.title} 
                                titleColor={card.titleColor} 
                                content={card.content} 
                                buttonText={card.buttonText} />
                            </div>
                        ))}
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export {ExpertiseAgence};
