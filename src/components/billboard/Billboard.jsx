import React from "react";
import Image from "next/image";
//========== Import Components
import { CTA } from "@/components";

const Billboard = ({ content }) => {
    const { foldBg, title, para } = content;
    return (
        <>
            <section className="bg-[#000000] md:bg-none flex items-center py-12 lg:py-20 relative z-10 overflow-hidden">
                <Image src={foldBg} alt="ORM" quality={100} priority={true} placeholder="blur" fill={true} className="hidden md:block -z-10 object-cover object-bottom" />
                <div className="container">
                    <div className="grid grid-cols-12 gap-5">
                        <div className="col-span-12 md:col-span-8 lg:col-span-6 xl:col-span-5">
                            <div className="bg-white/20 md:bg-black/50 backdrop-blur-lg rounded-[25px] overflow-hidden px-6 py-8 md:px-8 md:py-12">
                                <h2 className="text-[40px] md:text-[50px] tracking-wide font-semibold font-poppins text-white leading-tight text-center md:text-left mb-3 xl:mb-5">{title}</h2>
                                <p className="text-[16px] tracking-wide font-poppins text-white">{para}</p>
                                <div className="flex flex-col md:flex-row gap-5 md:gap-10 mt-5 xl:mt-8">
                                    <div className="w-full">
                                        <h4 className="text-[20px] text-primary font-semibold font-poppins">90%</h4>
                                        <p className="text-[16px] font-poppins text-white">Public opinion of Times SQ - 90% consider TSQ as the most recognizable part of NYC.</p>
                                    </div>
                                    <div className="w-full">
                                        <h4 className="text-[20px] text-primary font-semibold font-poppins">243K+</h4>
                                        <p className="text-[16px] font-poppins text-white">Daily Social Mentions - Over 243K+ people post about Times Square on social media daily.</p>
                                    </div>
                                    <div className="w-full">
                                        <h4 className="text-[20px] text-primary font-semibold font-poppins">286K+</h4>
                                        <p className="text-[16px] font-poppins text-white">Average Daily Pedestrian Count -  Over 286K+ pedestrians passing through daily.</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-5 md:gap-10 mt-5 xl:mt-8">
                                    <CTA
                                        text="Explore The Platform"
                                        href="tel:123456789"
                                    />
                                    <CTA
                                        text="Watch Demo"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default Billboard;