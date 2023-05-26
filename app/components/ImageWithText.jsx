import React from 'react';

const ImageWithText = ({content}) => {

    const { imageSide, tag, title, text, cta } = content;

    const contentLayout = {
        flexDirection: imageSide === 'right' ? 'row-reverse' : 'row',
    };

    return (
        <section className="flex gap-[80px] my-[5%] px-[120px]" style={contentLayout}>
            <div className='w-1/2'>
                <img src={content.image} alt={title} className='w-full'/>
            </div>
            <div className='w-1/2 flex flex-col items-start gap-[60px]'>
                <div className="border border-gray-700 rounded-full px-[8px] py-[4px] gap-10 drop-shadow-primary">
					<h1 className="font-bold text-[11px] tracking-[0.04em] uppercase">{tag}</h1>
				</div>
                <h2 className="font-bold text-[50px] tracking-[0.01em] leading-[61px]">{title}</h2>
                <p className="text-[16px] tracking-[0.01em] leading-[28px]">{text}</p>
                <button className='rounded-full bg-blue-100 px-[40px] py-[20px] gap-10'>
                    <a href="#" className="font-medium text-[20px] tracking-[0.02em] leading-[24px] text-white">{cta}</a>
                </button>
            </div>
        </section>
    );
}

export default ImageWithText;