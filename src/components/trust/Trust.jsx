import React from "react";
import Image from "next/image";
//========== Import Components
import { CTA } from "@/components";

const Trust = ({ content }) => {
    const { foldBg, title, paragraphs, foldImg } = content;
    return (
        <>
            <section className="bg-[#000000] lg:bg-none py-12 lg:py-20 relative z-10 overflow-hidden">
                <Image src={foldBg} alt="ORM" fill={true} className="hidden lg:block -z-10 object-cover object-bottom" />
                <div className="container">
                    <div className="w-full lg:w-10/12 mx-auto">
                        <h2 className="text-[35px] md:text-[40px] xl:text-[50px] tracking-wide leading-tight font-semibold font-poppins text-white text-center mb-4">{title}</h2>
                        {paragraphs.map((para, index) => (
                            <p key={index} className="text-[16px] tracking-wide leading-loose font-poppins text-white text-center mb-5">{para}</p>
                        ))}
                        <div className="my-10">
                            <Image src={foldImg} alt="ORM" />
                        </div>
                        <div className="flex items-center justify-center gap-6 md:gap-10">
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
            </section>
        </>
    );
}
export default Trust;