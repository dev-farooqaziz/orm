import React from "react";
import Image from "next/image";
//========== Import Components
import { CTA, AutoScrollSlider } from "@/components";
//========== Import Images
import slideImg1 from "media/companyIcons/icon1.png"
import slideImg2 from "media/companyIcons/icon2.png"
import slideImg3 from "media/companyIcons/icon3.png"
import slideImg4 from "media/companyIcons/icon4.png"
import slideImg5 from "media/companyIcons/icon5.png"
import slideImg6 from "media/companyIcons/icon6.png"
import slideImg7 from "media/companyIcons/icon7.png"
import slideImg8 from "media/companyIcons/icon8.png"
import slideImg9 from "media/companyIcons/icon9.png"
import slideImg10 from "media/companyIcons/icon10.png"
import slideImg11 from "media/companyIcons/icon11.png"
import slideImg12 from "media/companyIcons/icon12.png"
import slideImg13 from "media/companyIcons/icon13.png"
//========== Slider Data
const slider = [
    { slideImg: slideImg1 },
    { slideImg: slideImg2 },
    { slideImg: slideImg3 },
    { slideImg: slideImg4 },
    { slideImg: slideImg5 },
    { slideImg: slideImg6 },
    { slideImg: slideImg7 },
    { slideImg: slideImg8 },
    { slideImg: slideImg9 },
    { slideImg: slideImg10 },
    { slideImg: slideImg11 },
    { slideImg: slideImg12 },
    { slideImg: slideImg13 },
]

const Hero = ({ content }) => {
    const { BannerImg, title, para, desc, cta1Txt, cta2Txt, showDesc } = content;
    return (
        <>
            <section className="bg-[#202124] md:bg-none flex items-end h-auto 2xl:h-screen pt-[150px] md:pb-20 relative z-10 overflow-hidden">
                <Image src={BannerImg} alt="ORM" quality={100} loading="lazy" fill={true} className="hidden lg:block -z-10 object-cover object-bottom" />
                <div className="container">
                    <div className="grid grid-cols-12 gap-5">
                        <div className="col-span-12 lg:col-span-10 xl:col-span-7">
                            <h1 className="text-[30px] md:text-[50px] tracking-wide font-semibold font-poppins text-white leading-tight text-center md:text-left mb-5" priority="true">{title}</h1>
                            {showDesc && (
                                <p className="text-[20px] md:text-[16px] tracking-wide font-montserrat text-white text-center md:text-left mb-3 lg:mb-7">{desc}</p>
                            )}
                            <p className="text-[20px] md:text-[16px] tracking-wide font-poppins text-white text-center md:text-left">{para}</p>
                            <div className="flex items-center justify-center md:justify-start gap-6 md:gap-10 mt-8">
                                <CTA
                                    text={cta1Txt}
                                    href="tel:123456789"
                                />
                                <CTA
                                    text={cta2Txt}
                                />
                            </div>
                        </div>
                        <div className="col-span-12 mt-16 2xl:mt-24 mb-12 md:mb-0">
                            <AutoScrollSlider>
                                {slider.map((item, i) => (
                                    <div key={i} className="grow-0 shrink-0 basis-5/12 md:basis-4/12 lg:basis-2/12 pl-4">
                                        <Image src={item.slideImg} alt="ORM" className="aspect-[15/2] object-contain w-[200px] mx-auto" />
                                    </div>
                                ))}
                            </AutoScrollSlider>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default Hero;