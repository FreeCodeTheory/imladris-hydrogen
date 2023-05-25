export function HeroAction({title, subtitle, actions}) {
return (
    <section className="rounded-[40px] bg-gradient-to-t from-blue-200 to-blue-100 flex flex-col items-center gap-5 pt-[50px] pb-[10px]">
        <div className="flex flex-col gap-5 text-center text-gray-100">
            <h2 className="font-bold text-[50px] tracking-[0.01em] leading-[61px] px-[340px]">{title}</h2>
            <p className="text-[16px] tracking-[0.01em] leading-[28px] mt-4 px-[440px]">{subtitle}</p>
            <div className="flex justify-between mt-[60px]">
                {actions.map((action, index) => (
                    <a href={action.link} className="rounded-full bg-white text-black mx-2 px-[40px] py-[20px] w-full" key={index}>
                        {action.text}
                    </a>
                ))}
            </div>
        </div>
    </section>
);
}