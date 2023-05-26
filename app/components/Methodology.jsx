import { useEffect, useRef } from "react";
import { useState } from 'react';
import Card from './Card';

const Methodology = () => {
    const sectionRef = useRef();  // Ref pour la section
    const ulRef = useRef();  // Ref pour la liste ul
    const [activeLink, setActiveLink] = useState(null);
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
        category: 'Méthodologies Agence Ux Design',
        mainTitle: 'Une méthodologie sur-mesure et éprouvée pour vos besoins et objectifs',
        subtitle: 'Concevoir avec ses utilisateurs consiste à impliquer activement les personnes qui utilisent votre site web et site e-commerce. Notre agence UX research met en place une méthodologie collaborative qui garantit que les besoins et les attentes des utilisateurs sont pris en compte, ce qui conduit à améliorer la satisfaction client et donc augmente votre chiffre d’affaires.',
        links: ['01 - Analyser', '2 - Co-concevoir', '3 - Réaliser', '4 - Maintenir'],
        subsections: [
            {
            subTitle: '01 - Analyser',
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
            subTitle: '2 - Co-concevoir',
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
            subTitle: '3 - Réaliser',
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
            subTitle: '4 - Maintenir',
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
        <section className="flex flex-col gap-20 bg-gray-900 text-gray-50 rounded-[50px] py-[60px] px-[80px] relative" ref={sectionRef}>
            <div className="flex flex-col items-center w-[40%] mx-auto text-center gap-[40px]">
                {data.category && (
                <div className="border border-gray-700 rounded-full px-[8px] py-[4px] gap-10 drop-shadow-primary w-fit">
                    <h1 className="font-bold text-[11px] tracking-[0.04em] uppercase">{data.category}</h1>
                </div>
                )}
                {data.mainTitle && (
                    <h1 className="font-bold text-[50px] tracking-[0.01em] leading-[61px] ">{data.mainTitle}</h1>
                )}
                {data.subtitle && (
				    <p className="text-[16px] tracking-[0.01em] leading-[28px]">{data.subtitle}</p>
			    )}
            </div>
            <div className="flex justify-between">
            <div className="w-1/3" style={{ height: 'fit-content' }}>
                <ul className="sticky-top-0 w-fit" ref={ulRef}>
                    {data.links.map((link, i) => (
                    <li
                        key={i}
                        onClick={() => setActiveLink(link)}
                        className={`border rounded-full border-gray-700 px-[30px] py-[16px] my-[4%] cursor-pointer hover:bg-gray-50 hover:text-gray-900 ${activeLink === link ? 'bg-gray-50 text-gray-900' : ''}`}
                    >
                        <a
                        href={`#${link.replace(/ /g, '-').toLowerCase()}`}
                        className="font-medium text-[16px] tracking-[0.02em] leading-[20px]"
                        >
                        {link}
                        </a>
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
            <button className="rounded-full bg-blue-100 mx-auto px-[40px] py-[20px] gap-10 w-fit">
                <a href="#" className="font-medium text-[20px] tracking-[0.02em] leading-[24px] text-white">Créer son expérience digitale</a>
            </button>
        </section>
    );
};

export {Methodology};
