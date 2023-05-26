export function ReferenceCard({title, image, client, subtitle}) {
    return (
        <>
            <div className="flex flex-col gap-2">
                <div className="card flex flex-col items-center rounded-[50px] bg-gray-300 p-[40px] h-full">
                    <img className="ml-[7%]" src={image} alt={title} />
                </div>
                <div className="card flex flex-col items-start gap-2 rounded-[50px] bg-gray-200 p-[40px]">
                    <p className="font-medium text-[12px] tracking-[0.02em] leading-[15px] uppercase">{client}</p>
                    <h4 className="text-[20px] font-bold max-w-prose">{subtitle}</h4>
                </div>
            </div>
        </>
    );
    }
    
    export default ReferenceCard;