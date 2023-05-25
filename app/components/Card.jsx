import React, { useState } from "react";

const Card = ({
    number,
    title,
    content,
    buttonText,
    backgroundColor,
    titleColor,
}) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="flex flex-col justify-between items-start gap-4 rounded-[50px] p-[40px]"
            style={{
                backgroundColor: backgroundColor,
            }}
        >
            <p className="font-bold text-[20px] tracking-[0.01em] leading-[32px]">
                {number}
            </p>
            <h3
                className="font-bold text-[20px] tracking-[0.01em] leading-[32px]"
                style={{ color: titleColor }}
            >
                {title}
            </h3>
            <p className="text-[16px] tracking-[0.01em] leading-[28px]">
                {content}
            </p>
            <button
                className="border rounded-full border-gray-700 px-[30px] py-[16px] my-[4%]"
                style={{
                    backgroundColor: isHovered ? titleColor : "transparent",
                    color: isHovered ? "black" : "inherit",
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <a href="#" className="font-medium text-[16px] tracking-[0.02em] leading-[20px]">{buttonText}</a>
            </button>
        </div>
    );
};

export default Card;
