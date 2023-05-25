const TestimonialCard = ({slide}) => (
    <div className='w-[25%] h-full rounded-2xl border-2 border-white bg-gray-100 duration-500 inline-block p-4 my-10'>
        <div className='flex flex-col items-start'>
            <img src={slide.avatar} alt='avatar' className='w-16 h-16 rounded-full' />
            <p className='mt-4 mb-2'>{slide.text}</p>
            <img src={slide.logo} alt='logo' className='' />
        </div>
    </div>
);

export default TestimonialCard;