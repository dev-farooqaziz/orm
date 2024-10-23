import React from "react";
import Image from "next/image";
//========== Import Components
import { CTA } from "@/components";

const Solutions = ({ content }) => {
    const { foldBg, title, para, cardData, cardBg, bgColor, textColor, isBg } = content;
    return (
        <>
            <section className={`${bgColor} pt-12 lg:pt-20 relative z-10 overflow-hidden`}>
                {isBg && (
                    <Image src={foldBg} alt="ORM" fill={true} className="hidden lg:block -z-10 object-cover object-bottom" />
                )}
                <div className="container">
                    <div className="mb-12">
                        <h2 className={`text-[30px] md:text-[40px] xl:text-[50px] tracking-wide xl:leading-tight font-semibold font-poppins ${textColor} text-center mb-3 xl:mb-5`}>{title}</h2>
                        <p className={`text-[16px] tracking-wide leading-loose font-poppins ${textColor} text-center mb-5 w-full lg:w-10/12 xl:w-8/12 mx-auto`}>{para}</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
                        {cardData.map((card, index) => (
                            <div key={index} className="relative z-10 overflow-hidden rounded-[10px]">
                                <Image src={cardBg} alt="ORM" fill={true} className="-z-10 object-cover object-bottom" />
                                <div className="p-5 md:px-6 md:py-10 cursor-default">
                                    <h3 className="text-[18px] 2xl:text-[20px] font-medium font-poppins text-white text-center">
                                        {card.title}
                                    </h3>
                                    <p className="text-[16px] font-poppins text-white text-center mt-4 mb-6">
                                        {card.para}
                                    </p>
                                    <div className="w-max mx-auto">
                                        <CTA
                                            text="Book a Consultation"
                                            href="tel:123456789"
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
export default Solutions;