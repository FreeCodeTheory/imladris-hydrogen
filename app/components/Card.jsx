import { useState } from "react";

export function Card({
    bgClass,
    borderClass,
    borderHoverClass,
    image,
    number,
    title,
    titleClass,
    content,
    contentClass,
    text1,
    textColor,
    textColorClass,  
    text2,
    buttonClass,
    buttonHoverClass,
    buttonText,
    buttonTextClass,
    buttonTextHoverClass,
    buttonBorderClass,
    buttonBorderHoverClass,
    }) {

    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className={`flex flex-col justify-between items-start gap-4 rounded-[40px] p-[40px]
                            ${bgClass}
                            ${borderClass}
                            hover:${borderHoverClass}`}>
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
            <p className={`text-[16px] tracking-[0.01em] leading-[28px] ${contentClass}`}>
                {content}
            </p>
        )}
        {text1 && (
            <p className='font-bold text-[20px] tracking-[0.01em] leading-[32px]'>
                {text1}<span className={`${textColorClass}`}>{textColor}</span>{text2}
            </p>
        )}
        {buttonText && (
            <button className={`rounded-full px-[30px] py-[16px] my-[4%]
                                ${buttonClass} ${isHovered && buttonHoverClass}
                                border-[1px] ${buttonBorderClass} ${isHovered && buttonBorderHoverClass}
                                font-medium text-[16px] tracking-[0.02em] leading-[20px] ${buttonTextClass} ${isHovered && buttonTextHoverClass}`}
                    onClick={() => window.location.href="#"}                    
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}>
                    {buttonText}
            </button>
        )}
        </div>
    );
};
