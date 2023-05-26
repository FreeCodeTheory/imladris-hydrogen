import ExpertiseCard from "./ExpertiseCard";
import expertiseCardContent from '../content/expertiseCardContent.js';

export function ExpertiseGroup({title}) {
	return (
		<div className="flex flex-col items-start gap-5 rounded-[50px] bg-gray-600 border border-transparent p-[20px]">
			<div className='border border-gray-200 rounded-full px-[8px] py-[4px] gap-10 drop-shadow-primary'>
				<h4 className="font-bold text-[11px] tracking-[0.04em] uppercase">{title}</h4>
			</div>
			{expertiseCardContent.map((card) => (
			<ExpertiseCard
					key={card.id}
					number={card.number}
					title={card.title}
					subtitle={card.subtitle}
					button={card.button}
					background={card.background}
			/>
			))}
			{expertiseCardContent.map((card) => (
			<ExpertiseCard
					key={card.id}
					number={card.number}
					title={card.title}
					subtitle={card.subtitle}
					button={card.button}
					background={card.background}
			/>
			))}
		</div>
	);
}

export default ExpertiseGroup;