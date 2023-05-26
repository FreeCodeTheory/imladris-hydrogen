import { useState } from "react";

export function Card({
    number,
    title,
    content,
    buttonText,
    image,
    bgClass,
    titleClass,
    textClass,
    btnClass,
    btnHoverClass,
    border,
    }) {

    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
        className={`flex flex-col justify-between items-start gap-4 rounded-[50px] p-[40px] ${bgClass} border-[1px] border-transparent
                    ${border ? 'hover:border-[1px] hover:border-[#00A8E8]' : 'border-none'} `}
        >
        {image && <img className="mb-[30px]" src={image} alt={title} />}
        {number && (
            <p className="font-bold text-[20px] tracking-[0.01em] leading-[32px]">
            {number}
            </p>
        )}
        {title && (
            <h3 className={`font-bold text-[20px] tracking-[0.01em] leading-[32px] ${titleClass}`}>
            {title}
            </h3>
        )}
        {content && (
            <p className={`text-[16px] tracking-[0.01em] leading-[28px] ${textClass}`}>
            {content}
            </p>
        )}
        {buttonText && (
            <button
            className={`border rounded-full px-[30px] py-[16px] my-[4%] ${btnClass} ${isHovered && btnHoverClass}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            >
            <a href="#" className="font-medium text-[16px] tracking-[0.02em] leading-[20px]">{buttonText}</a>
            </button>
        )}
        </div>
    );
};
