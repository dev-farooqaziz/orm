import React from "react";
import Image from "next/image";
//========== Import Components
import { CTA } from "@/components";

const Trust = ({ content }) => {
    const { foldBg, title, paragraphs, foldImg, counts } = content;
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
                        <div className="my-10 xl:my-16">
                            <Image src={foldImg} alt="ORM" />
                        </div>
                        {counts && (
                            <div className="flex flex-col md:flex-row items-center justify-between gap-5 my-10 xl:my-16">
                                <div className="flex flex-col items-center justify-center gap-1 relative">
                                    <h4 className="text-[35px] font-semibold font-poppins text-primary text-center">90%</h4>
                                    <p className="text-[14px] md:text-[12px] font-poppins text-white text-center">Public opinion of Times SQ - 90% consider <br className="hidden xl:block" /> TSQ as the most recognizable part of NYC.</p>
                                </div>
                                <div className="flex flex-col items-center justify-center gap-1">
                                    <h4 className="text-[35px] font-semibold font-poppins text-primary text-center">243K+</h4>
                                    <p className="text-[14px] md:text-[12px] font-poppins text-white text-center">Daily Social Mentions - Over 243K+ people post <br className="hidden xl:block" /> about Times Square on social media daily.</p>
                                </div>
                                <div className="flex flex-col items-center justify-center gap-1 relative">
                                    <h4 className="text-[35px] font-semibold font-poppins text-primary text-center">286K+</h4>
                                    <p className="text-[14px] md:text-[12px] font-poppins text-white text-center">Average Daily Pedestrian Count - Over 286K+ <br className="hidden xl:block" /> pedestrians passing through daily.</p>
                                </div>
                            </div>
                        )}
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