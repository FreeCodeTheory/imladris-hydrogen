export function ReferenceIntro({title, subtitle, category}) {
	return (
		<div className='flex flex-col items-start gap-5 w-[50%]'>
			<div className='border border-gray-700 rounded-full px-[8px] py-[4px] gap-10 drop-shadow-primary'>
				<h1 className="font-bold text-[11px] tracking-[0.04em] uppercase">{category}</h1>
			</div>
			<h2 className="font-bold text-[50px] tracking-[0.01em] leading-[61px]">{title}</h2>
			{subtitle && (
			<p className="text-[16px] tracking-[0.01em] leading-[28px] mt-4">{subtitle}</p>
			)}
		</div>
	);
}