import { Carousel } from 'react-responsive-carousel'; 
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useState } from 'react';

import ReferenceIntro from '../components/ReferenceIntro.jsx';
import ReferenceCard from '../components/ReferenceCard.jsx';
import referenceIntroContent from '../content/referenceIntroContent.js';
import referenceCardContent from '../content/referenceCardContent.js';

function chunkArray(myArray, chunk_size){
    var index = 0;
    var arrayLength = myArray.length;
    var tempArray = [];
    
    for (index = 0; index < arrayLength; index += chunk_size) {
        let myChunk = myArray.slice(index, index+chunk_size);
        tempArray.push(myChunk);
    }

    return tempArray;
}

function createPages(array, chunkSize, itemsPerPage){
    let chunks = chunkArray(array, chunkSize);
    let pages = chunkArray(chunks, itemsPerPage);

    return pages;
}

export function References() {
    const chunkSize = 2; // number of items you want per chunk
    const itemsPerPage = 2; // number of chunks you want per page
    const pages = createPages(referenceCardContent, chunkSize, itemsPerPage);
    const [currentGroupIndex, setCurrentGroupIndex] = useState(0);

    return (
        <div className="rounded-[50px] bg-gray-100 mt-[5%] mb-[2%] px-[120px] py-[60px]">
            <section>
            {referenceIntroContent.map((card) => (
                <ReferenceIntro
                    key={card.id}
                    category={card.category}
                    title={card.title}
                    subtitle={card.subtitle}
                />
                ))}
            </section>
            <section className="flex flex-col py-[20px]">
                <div className='relative group'>
                <Carousel selectedItem={currentGroupIndex} showThumbs={false} showStatus={false} showIndicators={false}>
                {pages.map((page, pageIndex) => (
                    <div key={`page-${pageIndex}`} className="mb-[5%]">
                        {page.map((chunk, chunkIndex) => (
                            <div key={`page-${pageIndex}-chunk-${chunkIndex}`} className="grid grid-cols-2 gap-2">
                                {chunk.map((card) => (
                                    <ReferenceCard
                                        key={`page-${pageIndex}-chunk-${chunkIndex}-card-${card.id}`}
                                        title={card.title}
                                        button={card.button}
                                        image={card.image}
                                        client={card.client}
                                        subtitle={card.subtitle}
                                    />
                                ))}
                            </div>
                        ))}
                    </div>
                ))}
                </Carousel>
                    <div className='flex justify-center gap-4'>
                        {pages.map((_, index) => (
                            <span
                                key={index}
                                onClick={() => setCurrentGroupIndex(index)}
                                className={`cursor-pointer py-1 px-2 rounded-full ${currentGroupIndex === index ? 'bg-blue-500 text-white' : 'text-blue-500'}`}
                            >
                                {index + 1}
                            </span>
                        ))}
                    </div>
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

export default References;
