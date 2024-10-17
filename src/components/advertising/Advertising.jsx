import React from "react";
import Image from "next/image";
//========== Import Components
import { CTA } from "@/components";

const Advertising = ({ content }) => {
    const { foldBg, title, paragraphs } = content;
    return (
        <>
            <section className="h-full flex items-center py-12 lg:py-20 relative z-10 overflow-hidden">
                <Image src={foldBg} alt="ORM" fill={true} className="hidden md:block -z-10 object-fill object-left" />
                <div className="container">
                    <div className="grid grid-cols-12 items-center xl:gap-10">
                        <div className="col-span-12 md:col-span-6"></div>
                        <div className="col-span-12 md:col-span-6 md:ml-10">
                            <h2 className="text-[30px] lg:text-[40px] xl:text-[50px] tracking-wide lg:leading-tight font-semibold font-poppins text-black text-center md:text-left mb-3 xl:mb-5">{title}</h2>
                            {paragraphs.map((para) => (
                                <p className="text-[16px] tracking-wide leading-loose font-poppins text-black mb-5">{para}</p>
                            ))}
                            <div className="flex items-center gap-6 lg:gap-10">
                                <CTA
                                    text="Book a Consultation"
                                    href="tel:123456789"
                                />
                                <CTA
                                    text="Watch Demo"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default Advertising;