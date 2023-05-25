export default function SolutionIntro({title, subtitle, category}) {
return (
	<div className="mt-[4%]">
		<div className="flex flex-col items-start gap-10 rounded-[50px] w-[60%] mb-[2%]">
			{category && (
				<div className="border border-gray-700 rounded-full px-[8px] py-[4px] gap-10 drop-shadow-primary">
					<h1 className="font-bold text-[11px] tracking-[0.04em] uppercase">{category}</h1>
				</div>
			)}
			<h2 className="font-bold text-[50px] tracking-[0.01em] leading-[61px]">{title}</h2>
			{subtitle && (
				<p className="text-[16px] tracking-[0.01em] leading-[28px]">{subtitle}</p>
			)}
		</div>
	</div>
);
}