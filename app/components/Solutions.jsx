import SolutionIntro from '../components/SolutionIntro.jsx';
import SolutionCard from '../components/SolutionCard.jsx';
import { Fragment } from 'react';

export default function Solutions({solutionIntroContent, solutionCardContent}) {
    return (
        <Fragment>
            <section className='px-[120px]'>
            {solutionIntroContent.map((card) => (
                <SolutionIntro
                    key={card.id}
                    category={card.category}
                    title={card.title}
                    subtitle={card.subtitle}
                />
                ))}
            </section>
            <section className="flex flex-col items-center px-[120px]">
            <div className="grid grid-cols-3 grid-rows-2 gap-x-2 gap-y-2">
                {solutionCardContent.map((card) => (
                <SolutionCard
                    key={card.id}
                    title={card.title}
                    text1={card.text1}
                    textColor={card.textColor}
                    text2={card.text2}
                    button={card.button}
                    image={card.image}
                />
                ))}
            </div>
            <button className="rounded-full bg-blue-100 px-[40px] py-[20px] gap-10 mt-4">
                <a href="#" className="font-medium text-[20px] tracking-[0.02em] leading-[24px] text-white">Un autre projet ? Contactez-Nous !</a>
            </button>
            </section>
        </Fragment>
    );
}
