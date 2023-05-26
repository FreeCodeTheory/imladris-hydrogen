import { Card } from './Card';

export function Expertises() {
	const expertisesCardContent = [
		{
		title: 'UX Design',
		content: [
			{
			number: '01',  
			title: 'Etudes et conseil UX',
			text: 'Questionnez vos utilisateurs pour comprendre ce qu’ils souhaitent afin d’augmenter votre rétention.',
			buttonText: 'En savoir plus',
			bgClass: 'bg-green-300',
			titleClass: 'text-black',
			textClass: 'text-black',
			btnClass: 'border-gray-700 text-gray-700',
			btnHoverClass: 'bg-gray-700 text-white',
			},
			{
			number: '02',
			title: 'UX design et conception',
			text: 'Concevez des interfaces intuitives, percutantes et adaptées pour vos utilisateurs.',
			buttonText: 'En savoir plus',
			bgClass: 'bg-pink-300',
			titleClass: 'text-black',
			textClass: 'text-black',
			btnClass: 'border-gray-700 text-gray-700',
			btnHoverClass: 'bg-gray-700 text-white',
			},
		],
		},
		{
		title: 'Développement',
		content: [
			{
			number: '03',
			title: 'Développement web & app',
			text: 'Optez pour les bonnes technologies et réalisez un site sécurisé et performant qui séduira vos clients.',
			buttonText: 'En savoir plus',
			bgClass: 'bg-gray-200',
			titleClass: 'text-black',
			textClass: 'text-black',
			btnClass: 'border-gray-700 text-gray-700',
			btnHoverClass: 'bg-gray-700 text-white',
			},
			{
			number: '04',
			title: 'Audit technique & TMA',
			text: 'Analysez votre site et améliorez ses performances afin d’accroître la satisfaction client.',
			buttonText: 'En savoir plus',
			bgClass: 'bg-yellow-300',
			titleClass: 'text-black',
			textClass: 'text-black',
			btnClass: 'border-gray-700 text-gray-700',
			btnHoverClass: 'bg-gray-700 text-white',
			},
		],
		},
	];

	return (
		<section className="flex flex-col justify-center items-center px-[120px] py-[60px] bg-gray-900 rounded-[50px]">
			<div className='flex flex-col justify-center items-center gap-6 py-[30px] w-[50%] m-auto text-gray-200 text-center'>
				<div className='border border-gray-200 rounded-full px-[8px] py-[4px] gap-10 drop-shadow-primary'>
					<h3 className="font-bold text-[11px] tracking-[0.04em] uppercase">Expertises</h3>
				</div>
				<h2 className="font-bold text-[50px] tracking-[0.01em] leading-[61px]">Une démarche éprouvée</h2>
				<p className="text-[16px] tracking-[0.01em] leading-[28px]">
					Avec votre connaissance métier, notre expertise web/mobile et une démarche centrée utilisateur (UX design),
					votre site web vous différenciera de la concurrence. Notre agence web construit votre projet autour de 2
					piliers fondamentaux : le design et le développement.
				</p>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
			{expertisesCardContent.map((card, index) => (
				<div key={index} className="rounded-lg p-6 mb-4 bg-gray-700 flex flex-col gap-10"> 
					<div className='border border-gray-200 rounded-full px-[8px] py-[4px] gap-10 drop-shadow-primary w-fit m-auto mb-[4%]'>
						<h3 className="font-bold text-[11px] tracking-[0.04em] text-center text-gray-200 uppercase">{card.title}</h3>
					</div>
					{card.content.map((subCard, subIndex) => (
						<Card
						key={subIndex}
						number={subCard.number}
						title={subCard.title}
						content={subCard.text}
						buttonText={subCard.buttonText}
						bgClass={subCard.bgClass}
						titleClass={subCard.titleClass}
						textClass={subCard.textClass}
						btnClass={subCard.btnClass}
						btnHoverClass={subCard.btnHoverClass}
						/>
					))}
					</div>
				))}
			</div>
			<button className='rounded-full bg-blue-100 px-[40px] py-[20px] gap-10 mt-[4%]'>
				<a href="#" className="font-medium text-[20px] tracking-[0.02em] leading-[24px] text-white">Un projet ? Contactez-Nous !</a>
			</button>
		</section>
	);
};