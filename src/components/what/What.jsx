import React from "react";
import Link from "next/link";
import Image from "next/image";
//========== Import Components
import { CTA } from "@/components";

const What = ({ content }) => {
    const { title, para, cardBg, cardBgHvr, cardsData, ctaTitle, ctaPara, ctaCardBg } = content
    return (
        <>
            <section className="py-12 lg:py-20 relative before:hidden md:before:block before:absolute before:top-0 before:left-[50%] before:bg-secondary before:w-[3px] before:h-[40px] md:before:h-[50px]">
                <div className="container">
                    <div className="w-full lg:w-10/12 xl:w-8/12 mb-12 mx-auto">
                        <h2 className="text-[35px] md:text-[40px] xl:text-[50px] tracking-wide leading-tight font-semibold font-poppins text-black text-center mb-3">
                            {title}
                        </h2>
                        <p className="text-[16px] tracking-wide leading-loose font-poppins text-black text-center">
                            {para}
                        </p>
                    </div>
                    <div className="grid grid-cols-12 gap-y-6 md:gap-10">
                        {cardsData.map((item, index) => (
                            <div key={index} className="col-span-12 md:col-span-6 lg:col-span-4 h-full">
                                <div className="h-full relative z-10 overflow-hidden rounded-[10px] shadow-custom group">
                                    <Image src={cardBg} alt="ORM" fill={true} className="-z-10 object-cover object-bottom opacity-100 group-hover:opacity-0 transition-all duration-700" />
                                    <Image src={cardBgHvr} alt="ORM" fill={true} className="-z-10 object-cover object-bottom opacity-0 group-hover:opacity-100 transition-all duration-700" />
                                    <div className="p-8 pt-12 cursor-default">
                                        <h3 className="text-[20px] tracking-wide font-semibold font-poppins text-black group-hover:text-white transition-all duration-700">
                                            {item.title}
                                        </h3>
                                        <p className="text-[16px] tracking-wide font-montserrat font-medium line-clamp-3 text-black group-hover:text-white transition-all duration-700 my-6">
                                            {item.description}
                                        </p>
                                        <Link href="#" className="text-[16px] tracking-wide font-montserrat font-medium text-black group-hover:text-white transition-all duration-700">
                                            Read More
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div className="col-span-12 lg:col-span-8">
                            <div className="relative z-10 overflow-hidden rounded-[10px]">
                                <Image src={ctaCardBg} alt="ORM" fill={true} className="-z-10 object-cover object-bottom" />
                                <div className="px-8 py-10 cursor-default">
                                    <h3 className="text-[25px] md:text-[30px] tracking-wide font-semibold font-poppins text-white">
                                        {ctaTitle}
                                    </h3>
                                    <p className="text-[16px] tracking-wide font-montserrat font-medium text-white my-5 w-full md:w-10/12 ">
                                        {ctaPara}
                                    </p>
                                    <div className="w-max">
                                        <CTA
                                            text="Explore The Platform"
                                            href="tel:123456789"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default What;