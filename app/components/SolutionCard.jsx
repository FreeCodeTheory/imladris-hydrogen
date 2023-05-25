export default function SolutionCard({title, text1, textColor, text2, image, button}) {
return (
<div className="card flex flex-col justify-between items-start gap-10 rounded-[50px] bg-gray-200 border border-transparent p-[40px] hover:border-black cursor-pointer">
    {image && <img className="mb-[30px]" src={image} alt={title} />}
    <h3 className="text-[20px] font-bold max-w-prose">
        {text1} 
        <span className={
            textColor === "Ux Design " 
            ? "text-blue-100" 
            : textColor === "Design System " 
            ? "text-pink-300" 
            : textColor === "MvP / Prototype "
            ? "text-yellow-400"
            : textColor === "Site Web "
            ? "text-pink-200"
            : textColor === "e-Commerce Shopify "
            ? "text-green-400"
            : textColor === "Progressive Web App "
            ? "text-red-300"
            : "text-black"}>
        {textColor}
        </span> 
        {text2}
    </h3>
    <button className="border rounded-full border-gray-700 px-[40px] py-[20px] font-medium text-[20px] tracking-[0.02em] leading-[24px]">{button}</button>
</div>
);
}