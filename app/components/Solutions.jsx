import { SolutionIntro } from './SolutionIntro.jsx';
import {Card} from './Card.jsx';

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
                            bgClass={content.bgClass}
                            borderClass={content.borderClass}
                            borderHoverClass={content.borderHoverClass}
                            image={content.image}
                            number={content.number}
                            title={content.title}
                            titleClass={content.titleClass}
                            titleHoverClass={content.titleHoverClass}
                            content={content.content}
                            contentClass={content.contentClass}
                            text1={content.text1}
                            textColor={content.textColor}
                            textColorClass={content.textColorClass}
                            text2={content.text2}
                            buttonClass={content.buttonClass}
                            buttonHoverClass={content.buttonHoverClass}
                            buttonBorderClass={content.buttonBorderClass}
                            buttonBorderHoverClass={content.buttonBorderHoverClass}
                            buttonText={content.buttonText}
                            buttonTextClass={content.buttonTextClass}
                            buttonTextHoverClass={content.buttonTextHoverClass}
                        />
                    ))}
                </div>
            </section>
        </div>
    );
}
