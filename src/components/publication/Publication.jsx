import React from "react";
import Image from "next/image";
//========== Import Icons
import { FaCheck } from "react-icons/fa";
//========== Import Components
import { CTA } from "@/components";

const Publication = ({ content }) => {
    const { foldBg, title, paragraphs, publicantPoints, cta1Txt, cta2Txt } = content;
    return (
        <>
            <section className="h-full flex items-center py-12 lg:py-20 relative z-10 overflow-hidden">
                <Image src={foldBg} alt="ORM" fill={true} className="hidden xl:block -z-10 object-fill object-left" />
                <div className="container">
                    <div className="grid grid-cols-12 items-center xl:gap-10">
                        <div className="col-span-12 lg:col-span-6 hidden xl:block"></div>
                        <div className="col-span-12 xl:col-span-6 xl:ml-10">
                            <h2 className="text-[30px] md:text-[40px] xl:text-[50px] tracking-wide xl:leading-tight font-semibold font-poppins text-black text-center md:text-left mb-3 xl:mb-5">{title}</h2>
                            {paragraphs.map((para) => (
                                <p className="text-[16px] tracking-wide leading-loose font-poppins text-black mb-5">{para}</p>
                            ))}
                            <div className="grid grid-cols-12 lg:grid-cols-8 xl:grid-cols-12 items-center gap-y-2 mb-5 xl:mb-8">
                                {publicantPoints.map((item, index) => (
                                    <div className="col-span-12 lg:col-span-6" key={index}>
                                        <div className="flex items-center gap-2">
                                            <FaCheck className="text-[20px] text-white bg-primary rounded-full p-1" />
                                            <span className="text-[14px] tracking-wide leading-loose font-montserrat font-medium text-black">
                                                {item}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="flex items-center gap-6 md:gap-10">
                                <CTA
                                    text={cta1Txt}
                                    href="tel:123456789"
                                />
                                <CTA
                                    text={cta2Txt}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default Publication;