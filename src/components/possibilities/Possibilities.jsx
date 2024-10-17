import React from "react";
import Image from "next/image";

const Possibilities = ({ content }) => {
    const { foldBg, title, para, cardData } = content;
    return (
        <>
            <section className="bg-[#000000] lg:bg-none py-12 lg:py-20 relative z-10 overflow-hidden">
                <Image src={foldBg} alt="ORM" fill={true} className="hidden lg:block -z-10 object-cover object-bottom" />
                <div className="container">
                    <div className="mb-12">
                        <h2 className="text-[35px] md:text-[40px] xl:text-[50px] tracking-wide leading-tight font-semibold font-poppins text-white text-center mb-3 xl:mb-5">{title}</h2>
                        <p className="text-[16px] tracking-wide leading-loose font-poppins text-white text-center mb-5 w-full lg:w-10/12 xl:w-8/12 mx-auto">{para}</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-8">
                        {cardData.map((card, index) => (
                            <div key={index} className="flex flex-col items-center justify-center gap-3">
                                <Image src={card.img} alt="ORM" className="w-[40%] h-full mb-4" />
                                <h3 className="text-[20px] xl:text-[24px] font-semibold tracking-wide font-poppins text-white text-center">
                                    {card.title}
                                </h3>
                                <p className="text-[16px] font-poppins font-light text-white text-center">
                                    {card.para}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
export default Possibilities;