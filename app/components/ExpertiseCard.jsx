export function ExpertiseCard({number, title, text, button, background }) {
	return (
		<div className={`card flex flex-col items-start gap-10 rounded-[50px] ${background} border border-transparent p-[40px]`}>
			<span>{number}</span>
			<h3 className="text-[20px] font-bold max-w-prose">{title}</h3>
			<p>{text}</p>
			<button className="rounded-full border-2 border-black px-[30px] py-[16px]">{button}</button>
		</div>
	);
}

export default ExpertiseCard;