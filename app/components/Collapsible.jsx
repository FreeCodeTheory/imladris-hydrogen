import React, { useState } from 'react';

const accordionsData = [
    { title: "Qu'est-ce qu’une agence UX design à Paris et à Biarritz ?", content: "Paragraph 1, lorem ipsum dolor set. Paragraph 1, lorem ipsum dolor set. Paragraph 1, lorem ipsum dolor set. Paragraph 1, lorem ipsum dolor set." },
    { title: "Qu'est-ce qu’une agence UX design à Paris et à Biarritz ?", content: "Paragraph 1, lorem ipsum dolor set. Paragraph 1, lorem ipsum dolor set. Paragraph 1, lorem ipsum dolor set. Paragraph 1, lorem ipsum dolor set." },
    { title: "Qu'est-ce qu’une agence UX design à Paris et à Biarritz ?", content: "Paragraph 1, lorem ipsum dolor set. Paragraph 1, lorem ipsum dolor set. Paragraph 1, lorem ipsum dolor set. Paragraph 1, lorem ipsum dolor set." },
    { title: "Qu'est-ce qu’une agence UX design à Paris et à Biarritz ?", content: "Paragraph 1, lorem ipsum dolor set. Paragraph 1, lorem ipsum dolor set. Paragraph 1, lorem ipsum dolor set. Paragraph 1, lorem ipsum dolor set." },
];

export const Collapsible = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleClick = (index) => {
        if (activeIndex === index) {
            setActiveIndex(null);
        } else {
            setActiveIndex(index);
        }
    };

    return (
        <section className='mx-[320px] my-[80px]'>
            <h2 className='font-bold text-[40px] tracking-[0.01em] leading-[49px] mb-[60px]'>Questions fréquentes</h2>
            {accordionsData.map((accordion, index) => (
                <div key={index}>
                    <div
                        onClick={() => handleClick(index)}
                        className="rounded-[20px] flex justify-between items-center bg-gray-100 my-[10px] p-[20px] cursor-pointer"
                    >
                        <h2 className='font-medium text-[18px] tracking-[0.01em] leading-[32px]'>{accordion.title}</h2>
                        <span className={`border-1 rounded-full transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`}>
                            {activeIndex === index ? (
                                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.3516 11.4609H13.1016H18.3516C18.7658 11.4609 19.1016 11.7967 19.1016 12.2109C19.1016 12.6252 18.7658 12.9609 18.3516 12.9609H13.1016L12.3516 12.9609L11.6016 12.9609H6.35156C5.93735 12.9609 5.60156 12.6252 5.60156 12.2109C5.60156 11.7967 5.93735 11.4609 6.35156 11.4609H11.6016H12.3516Z" fill="#2C2C2D"/>
                                </svg>
                            ) : (
                                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M12.3516 5.46094C12.7658 5.46094 13.1016 5.79672 13.1016 6.21094V11.4609H18.3516C18.7658 11.4609 19.1016 11.7967 19.1016 12.2109C19.1016 12.6252 18.7658 12.9609 18.3516 12.9609H13.1016V18.2109C13.1016 18.6252 12.7658 18.9609 12.3516 18.9609C11.9373 18.9609 11.6016 18.6252 11.6016 18.2109V12.9609H6.35156C5.93735 12.9609 5.60156 12.6252 5.60156 12.2109C5.60156 11.7967 5.93735 11.4609 6.35156 11.4609H11.6016V6.21094C11.6016 5.79672 11.9373 5.46094 12.3516 5.46094Z" fill="#100F10"/>
                                </svg>
                            )}
                        </span>
                    </div>
                    {activeIndex === index && (
                        <p className="rounded-[20px] bg-gray-200 p-6 mt-[-10px] transition-height duration-800 ease-in-out overflow-hidden" style={{ height: activeIndex === index ? 'auto' : '0' }}>
                            {accordion.content}
                        </p>
                    )}
                </div>
            ))}
        </section>
    );
};

export default Collapsible;


