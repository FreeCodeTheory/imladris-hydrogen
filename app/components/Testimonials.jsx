import { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

import Avatar from '../assets/avatar.png';
import Airbnb from '../assets/airbnb.svg';
import Era from '../assets/era.svg';

import TestimonialCard from './TestimonialCard';

export const Testimonials = () => {
    const slides = [
        {
            avatar: Avatar,
            text: 'Beau travail d’équipe ! 👌 Merci à tous pour votre investissement dans ce projet et votre flexibilité avec les délais de lancement imposés. ',
            logo: Airbnb,
        },
        {
            avatar: Avatar,
            text: 'Beau travail d’équipe ! 👌 Merci à tous pour votre investissement dans ce projet et votre flexibilité avec les délais de lancement imposés. ',
            logo: Airbnb,
        },
        {
            avatar: Avatar,
            text: 'Beau travail d’équipe ! 👌 Merci à tous pour votre investissement dans ce projet et votre flexibilité avec les délais de lancement imposés. ',
            logo: Airbnb,
        },
        {
            avatar: Avatar,
            text: 'Beau travail d’équipe ! 👌 Merci à tous pour votre investissement dans ce projet et votre flexibilité avec les délais de lancement imposés. ',
            logo: Airbnb,
        },
        {
            avatar: Avatar,
            text: 'Beau travail d’équipe ! 👌 Merci à tous pour votre investissement dans ce projet et votre flexibilité avec les délais de lancement imposés. ',
            logo: Airbnb,
        },
        {
            avatar: Avatar,
            text: 'Beau travail d’équipe ! 👌 Merci à tous pour votre investissement dans ce projet et votre flexibilité avec les délais de lancement imposés. ',
            logo: Airbnb,
        },
        {
            avatar: Avatar,
            text: 'Beau travail d’équipe ! 👌 Merci à tous pour votre investissement dans ce projet et votre flexibilité avec les délais de lancement imposés. ',
            logo: Airbnb,
        },
        {
            avatar: Avatar,
            text: 'Beau travail d’équipe ! 👌 Merci à tous pour votre investissement dans ce projet et votre flexibilité avec les délais de lancement imposés. ',
            logo: Airbnb,
        },
        {
            avatar: Avatar,
            text: 'Beau travail d’équipe ! 👌 Merci à tous pour votre investissement dans ce projet et votre flexibilité avec les délais de lancement imposés. ',
            logo: Airbnb,
        },
        {
            avatar: Avatar,
            text: 'Beau travail d’équipe ! 👌 Merci à tous pour votre investissement dans ce projet et votre flexibilité avec les délais de lancement imposés. ',
            logo: Airbnb,
        },
    ];

    const slideGroups = [];
    for (let i = 0; i < slides.length; i += 4) {
        slideGroups.push(slides.slice(i, i + 4));
    }

    const [currentGroupIndex, setCurrentGroupIndex] = useState(0);

    const prevSlideGroup = () => {
        const isFirstGroup = currentGroupIndex === 0;
        const newIndex = isFirstGroup ? slideGroups.length - 1 : currentGroupIndex - 1;
        setCurrentGroupIndex(newIndex);
    };

    const nextSlideGroup = () => {
        const isLastGroup = currentGroupIndex === slideGroups.length - 1;
        const newIndex = isLastGroup ? 0 : currentGroupIndex + 1;
        setCurrentGroupIndex(newIndex);
    };

    const goToSlideGroup = (groupIndex) => {
        setCurrentGroupIndex(groupIndex);
    };

    return (
        <section className='w-full m-auto py-16 px-[120px] py-[80px] relative group'>
            <div className='flex flex-col 3gap-5 text-center py-[80px]'>
                <h2 className="font-bold text-[50px] tracking-[0.01em] leading-[61px]">Plus de 20 clients nous ont fait confiance</h2>
                <p className="text-[16px] tracking-[0.01em] leading-[28px] mt-4">Notre agence web vous accompagne dans la création de votre expérience utilisateur.</p>
            </div>
            {slideGroups[currentGroupIndex].map((slide, index) => (
                <TestimonialCard key={index} slide={slide} />
            ))}
            {/* Left Arrow */}
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <BsChevronCompactLeft onClick={prevSlideGroup} size={30} />
            </div>
            {/* Right Arrow */}
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <BsChevronCompactRight onClick={nextSlideGroup} size={30} />
            </div>
            <div className='flex top-4 justify-center py-2'>
                {slideGroups.map((group, groupIndex) => (
                    <div
                        key={groupIndex}
                        onClick={() => goToSlideGroup(groupIndex)}
                        className='text-2xl cursor-pointer'
                    >
                        <RxDotFilled className='my-10'/>
                    </div>
                ))}
            </div>
            <img src={Era} alt="" />
        </section>
    );
}