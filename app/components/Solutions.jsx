import { SolutionIntro } from './SolutionIntro.jsx';
import {Card } from './Card.jsx';

export default function Solutions({ solutionsIntroContent, solutionsCardContent }) {
    return (
        <div className='px-[120px]'>
            <section>
                {solutionsIntroContent?.map(content => (
                    <SolutionIntro
                        key={content.id}
                        category={content.category}
                        title={content.title}
                        subtitle={content.subtitle}
                    />
                ))}
            </section>
            <section className="flex flex-col items-center">
                <div className="grid grid-cols-3 grid-rows-2 gap-x-2 gap-y-2">
                    {solutionsCardContent?.map(content => (
                        <Card
                            key={content.id}
                            title={content.title}
                            content={`${content.text1} ${content.textColor} ${content.text2}`}
                            buttonText={content.button}
                            image={content.image}
                            border={content.border}
                        />
                    ))}
                </div>
            </section>
        </div>
    );
}
