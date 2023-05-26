import { ReferenceIntro } from './ReferenceIntro.jsx';
import { ReferenceContent } from './ReferenceContent.jsx';

export function References({referencesIntroContent = [], referencesCardContent = []}) {
    return (
    <div className="rounded-[50px] bg-gray-100 mt-[5%] mb-[2%] px-[120px] py-[60px]">
        <section>
        {referencesIntroContent && referencesIntroContent.map((card) => (
            <ReferenceIntro
                key={card.id}
                category={card.category}
                title={card.title}
                subtitle={card.subtitle}
            />
            ))}
        </section>
        <section className="flex flex-col py-[20px]">
            <div className="mb-[5%] grid grid-cols-2 grid-rows-2 gap-2">
                {referencesCardContent && referencesCardContent.map((card) => (
                <ReferenceContent
                    key={card.id}
                    title={card.title}
                    button={card.button}
                    image={card.image}
                    client={card.client}
                    subtitle={card.subtitle}
                />
                ))}
            </div>
            <div className='flex justify-center gap-10'>
                <button className='border rounded-full border-gray-700 px-[40px] py-[20px] mt-4'>
                    <a href="#" className="font-medium text-[20px] tracking-[0.02em] leading-[24px]">Tout Voir</a>
                </button>
                <button className='rounded-full bg-blue-100 px-[40px] py-[20px] gap-10 mt-4'>
                    <a href="#" className="font-medium text-[20px] tracking-[0.02em] leading-[24px] text-white">Créer son site Web</a>
                </button>
            </div>
        </section>
    </div>
    );
}