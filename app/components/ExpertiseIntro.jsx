export function ExpertiseIntro({category, title, subtitle}) {
	return (
		<div className="flex flex-col items-center gap-5 w-[600px] mx-auto">
		{category && (
			<h1 className="border-2 rounded-full border-white text-white py-[8px] px-[10px]">{category}</h1>
		)}
		<h2 className="text-2xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-[50px] text-white font-semibold">{title}</h2>
		{subtitle && (
			<p className="text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-lead text-white text-center mt-4">{subtitle}</p>
		)}
		</div>
	);
}