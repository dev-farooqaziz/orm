import React from "react";
import Image from "next/image";
//========== Import Components
import { CTA } from "@/components";

const Wikipedia = ({ content }) => {
    const { foldBg, title, para, cardData, cardBg } = content;
    return (
        <>
            <section className="bg-[#000000] lg:bg-none py-12 lg:py-20 relative z-10 overflow-hidden">
                <Image src={foldBg} alt="ORM" fill={true} className="hidden lg:block -z-10 object-cover object-bottom" />
                <div className="container">
                    <div className="mb-12">
                        <h2 className="text-[30px] md:text-[40px] xl:text-[50px] tracking-wide xl:leading-tight font-semibold font-poppins text-white text-center mb-3 xl:mb-5">{title}</h2>
                        <p className="text-[16px] tracking-wide leading-loose font-poppins text-white text-center mb-5 w-full lg:w-10/12 xl:w-8/12 mx-auto">{para}</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {cardData.map((card, index) => (
                            <div key={index} className="relative z-10 overflow-hidden rounded-[10px]">
                                <Image src={cardBg} alt="ORM" fill={true} className="-z-10 object-cover object-bottom" />
                                <div className="p-5 md:px-8 md:py-10 cursor-default">
                                    <h3 className="text-[20px] lg:text-[30px] tracking-wide font-poppins text-white">
                                        {card.title}
                                    </h3>
                                    <p className="text-[16px] tracking-wide font-poppins text-white my-5">
                                        {card.para}
                                    </p>
                                    <div className="w-max">
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
export default Wikipedia;