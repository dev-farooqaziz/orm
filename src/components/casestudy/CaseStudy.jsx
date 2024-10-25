"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";
//========== Import Components
import { CTA, AutoPlaySlider } from "@/components";

const CaseStudy = ({ content }) => {
    const { bg, title, para, color, isBlack, casestudyData, arrows } = content;
    const [isMobile, setIsMobile] = useState(false)

    const handleResize = () => {
        if (typeof window !== "undefined") {
            setIsMobile(window.innerWidth <= 768);
        }
    }


    useEffect(() => {
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return (
        <>
            <section className={`py-12 lg:py-20 ${bg}`}>
                <div className="container">
                    <div className="grid grid-cols-12 items-center">
                        <div className="col-span-12 lg:col-span-7">
                            <h2 className={`text-[30px] md:text-[40px] xl:text-[50px] tracking-wide xl:leading-tight font-semibold font-poppins ${color} text-center lg:text-left mb-4`}>{title}</h2>
                            <p className={`text-[16px] tracking-wide leading-loose font-poppins ${color} text-center lg:text-left mb-5 lg:mb-0`}>{para}</p>
                        </div>
                        <div className="col-span-12 lg:col-span-5 flex items-center justify-center lg:justify-end">
                            <div className="w-max">
                                {isBlack ? (
                                    <CTA
                                        text="Book a Consultation"
                                        black={true}
                                    />
                                ) : (
                                    <CTA
                                        text="Book a Consultation"
                                        href="tel:123456789"
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="mt-10 lg:mt-16">
                        <AutoPlaySlider arrowPosition={`${arrows}`} options={isMobile ? { align: "start" } : {}}>
                            {casestudyData.map((item, index) => (
                                <div key={index} className="grow-0 shrink-0 basis-[100%] md:basis-8/12 pl-5">
                                    <div className="grid grid-cols-12 items-center gap-y-8 md:gap-0 bg-[#202124] rounded-2xl p-8 xl:p-12">
                                        <div className="col-span-12 md:col-span-7 flex flex-col gap-5 lg:gap-8">
                                            <h3 className="text-[20px] md:text-[18px] lg:text-[25px] tracking-wide font-semibold font-poppins text-white">
                                                {item.title}
                                            </h3>
                                            <p className="text-[16px] tracking-wide font-poppins text-white line-clamp-2">
                                                {item.description}
                                            </p>
                                            <div className="flex flex-row md:flex-col lg:flex-row lg:items-center gap-10 md:gap-1 lg:gap-10">
                                                <h4 className="text-[16px] xl:text-[20px] tracking-wide font-poppins text-white">{item.tag}</h4>
                                                <span className="block md:hidden lg:block border border-primary w-[1px] h-[25px] md:h-[30px]"></span>
                                                <h4 className="text-[16px] xl:text-[20px] tracking-wide font-poppins text-white">{item.name}</h4>
                                            </div>
                                            <p className="text-[16px] tracking-wide font-poppins text-white">
                                                {item.date}
                                            </p>
                                            <div className="w-max">
                                                <CTA
                                                    text="Learn More"
                                                />
                                            </div>
                                        </div>
                                        <div className="hidden md:block col-span-1"></div>
                                        <div className="col-span-12 md:col-span-4">
                                            <Image src={item.slideImg} alt="ORM" className="w-[75%] mx-auto md:ml-auto" />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </AutoPlaySlider>
                    </div>
                </div>
            </section>
        </>
    );
}
export default CaseStudy;