import React from "react";
import Image from "next/image";
//========== Import Components
import { CTA } from "@/components";

const BuyReviews = ({ content }) => {
    const { title, para, cardsData, cardBg } = content;
    return (
        <>
            <section className="py-12 lg:py-20">
                <div className="container">
                    <div className="w-full lg:w-10/12 xl:w-8/12 mb-12 mx-auto">
                        <h2 className="text-[35px] md:text-[40px] xl:text-[50px] tracking-wide leading-tight font-semibold font-poppins text-black text-center mb-4">{title}</h2>
                        <p className="text-[16px] tracking-wide leading-loose font-poppins text-black text-center">{para}</p>
                    </div>
                    <div className="grid grid-cols-12 gap-6">
                        {cardsData.map((item, index) => (
                            <div key={index} className="col-span-12 md:col-span-6 lg:col-span-4 h-full">
                                <div className="h-full relative z-10 overflow-hidden rounded-[10px] group">
                                    <Image src={cardBg} alt="ORM" fill={true} className="-z-10 object-cover object-bottom opacity-100" />
                                    <div className="flex flex-col gap-5 px-4 xl:px-8 py-10 cursor-default">
                                        <div className="w-[25%]">
                                            <Image src={item.icon} alt="ORM" />
                                        </div>
                                        <h3 className="text-[24px] tracking-wide font-semibold font-poppins text-white">
                                            {item.title}
                                        </h3>
                                        <p className="text-[16px] tracking-wide font-montserrat text-white">
                                            {item.description}
                                        </p>
                                        <div className="w-max">
                                            <CTA
                                                text="Book a Consultation"
                                                href="tel:123456789"
                                            />
                                        </div>
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
export default BuyReviews;