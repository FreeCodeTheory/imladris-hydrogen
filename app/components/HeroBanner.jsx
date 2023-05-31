export function HeroBanner({title, subtitle, category, button, image, width, mb, mr, backgroundColor}) {
  return (
    <section>
      <div className={`flex rounded-[50px] mx-6 ${backgroundColor}`}>
        <div className="flex flex-col items-start gap-5 h-full 2xl-only:mr-[15%] p-[4%]">
          <div className='border border-gray-700 rounded-full px-[8px] py-[4px] gap-10 drop-shadow-primary'>
            <h1 className="font-bold text-[11px] tracking-[0.04em] uppercase">{category}</h1>
          </div>
          <h2 className="font-bold text-[50px] tracking-[0.01em] leading-[61px]">{title}</h2>
          {subtitle && (
            <p className="text-[16px] tracking-[0.01em] leading-[28px] mt-4">{subtitle}</p>
          )}
          <button className='rounded-full bg-blue-100 px-[40px] py-[20px] gap-10 mt-[10%]'>
            <a href="#" className="font-medium text-[20px] tracking-[0.02em] leading-[24px] text-white">{button}</a>
          </button>
        </div>
        <img  style={{marginBottom: `${mb}%`, marginRight: `${mr}%`, width: `${width}%`}}
              src={image} 
              alt="Image" />
      </div>
    </section>
  );
}