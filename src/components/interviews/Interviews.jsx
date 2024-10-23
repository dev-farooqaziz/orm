import React from "react";
import Image from "next/image";
//========== Import Components
import { CTA } from "@/components";

const Interviews = ({ content }) => {
    const { foldBg, title, para, foldImg } = content;
    return (
        <>
            <section className="bg-[#000000] lg:bg-none pt-12 lg:py-0 relative z-10 overflow-hidden">
                <Image src={foldBg} alt="ORM" fill={true} className="hidden lg:block -z-10 object-cover object-bottom" />
                <div className="container">
                    <div className="grid grid-cols-12 items-center gap-y-10 md:gap-10">
                        <div className="col-span-12 lg:col-span-6">
                            <h2 className="text-[35px] md:text-[40px] xl:text-[50px] tracking-wide leading-tight font-semibold font-poppins text-white text-center md:text-left mb-3 xl:mb-5">{title}</h2>
                            <p className="text-[16px] tracking-wide leading-loose font-poppins text-white">{para}</p>
                            <div className="flex items-center gap-6 md:gap-10 mt-5 xl:mt-8">
                                <CTA
                                    text="Book a Consultation"
                                    href="tel:123456789"
                                />
                                <CTA
                                    text="Watch Demo"
                                />
                            </div>
                        </div>
                        <div className="col-span-12 lg:col-span-6">
                            <Image src={foldImg} alt="ORM" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default Interviews;