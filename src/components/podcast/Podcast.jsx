import React from "react";
import Link from "next/link";
import Image from "next/image";
//========== Import Components
import { CTA, AutoPlaySlider } from "@/components";

const Podcast = ({ content }) => {
    const { foldBg, title, para, podcastData } = content;
    return (
        <>
            <section className="flex items-center py-12 lg:py-20 xl:py-24 relative z-10 overflow-hidden">
                <Image src={foldBg} alt="ORM" fill={true} className="block -z-10 object-cover object-bottom" />
                <div className="container">
                    <div className="grid grid-cols-12 items-center gap-y-10 md:gap-10">
                        <div className="col-span-12 xl:col-span-5">
                            <h2 className="text-[40px] md:text-[50px] tracking-wide leading-tight font-semibold font-poppins text-white text-center md:text-left mb-3 xl:mb-5">{title}</h2>
                            <p className="text-[16px] tracking-wide leading-loose font-poppins text-white">{para}</p>
                            <div className="flex items-center gap-10 mt-5 xl:mt-8">
                                <CTA
                                    text="Book a Consultation"
                                    href="tel:123456789"
                                />
                                <CTA
                                    text="Watch Demo"
                                />
                            </div>
                        </div>
                        <div className="col-span-12 xl:col-span-7">
                            <AutoPlaySlider arrowPosition="hidden">
                                {podcastData.map((item, index) => (
                                    <div key={index} className="grow-0 shrink-0 basis-7/12 pl-4">
                                        <div className="rounded-lg overflow-hidden">
                                            <Image src={item.slideImg} alt="ORM" />
                                        </div>
                                        <div className="flex flex-col mt-6">
                                            <h3 className="text-[20px] tracking-wide font-semibold font-poppins text-white">
                                                {item.title}
                                            </h3>
                                            <div className="w-max flex items-center gap-10 mb-2 mt-4 pb-2 relative before:absolute before:left-0 before:bottom-0 before:w-[95%] before:h-[1px] before:bg-primary">
                                                {item.tags.map((tag, tagIndex) => (
                                                    <div key={tagIndex} className="flex items-center gap-2">
                                                        <Image src={tag.icon} alt={tag.label} className="w-[20px]" />
                                                        <span className="text-[16px] font-medium tracking-wide font-montserrat text-white">{tag.label}</span>
                                                    </div>
                                                ))}
                                            </div>
                                            <p className="text-[16px] tracking-wide font-montserrat text-white line-clamp-3">
                                                {item.description}
                                            </p>
                                            <div className="w-max mt-4">
                                                <Link href="#" className="text-[16px] tracking-wide font-montserrat text-white relative before:absolute before:left-0 before:bottom-0 before:w-[90%] before:h-[1px] before:bg-primary">
                                                    Share This Episode
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </AutoPlaySlider>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default Podcast;