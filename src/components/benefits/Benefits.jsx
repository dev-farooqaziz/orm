import React from "react";
import Image from "next/image";
//========== Import Components
import { CTA } from "@/components";

const Benefits = ({ content }) => {
    const { foldImg, title, para } = content;
    return (
        <>
            <section className="h-full flex items-center py-12 lg:py-20">
                <div className="container">
                    <div className="grid grid-cols-12 items-center">
                        <div className="hidden xl:block col-span-5">
                            <Image src={foldImg} alt="ORM" />
                        </div>
                        <div className="col-span-12 xl:col-span-7  mt-10 2xl:mt-0">
                            <h2 className="text-[30px] md:text-[40px] xl:text-[50px] tracking-wide xl:leading-tight font-semibold font-poppins text-black text-center md:text-left mb-3 xl:mb-5">{title}</h2>
                            <p className="text-[16px] tracking-wide leading-loose font-poppins text-black">{para}</p>
                            <div className="w-max mt-6">
                                <CTA
                                    text="Book a Consultation"
                                    href="tel:123456789"
                                />
                            </div>
                            <div className="grid grid-cols-2  md:grid-cols-4 gap-x-20 gap-y-10 md:gap-10 mt-10 md:mt-16 xl:mb-20 2xl:mb-0">
                                <div className="flex flex-col items-center justify-center md:justify-start md:items-start gap-1">
                                    <h4 className="text-[35px] font-semibold font-poppins text-black">40k</h4>
                                    <p className="text-[15px] md:text-[14px] font-poppins text-black text-center md:text-start">Global Happy <br /> Clients</p>
                                </div>
                                <div className="flex flex-col items-center justify-center md:justify-start md:items-start gap-1 relative">
                                    <h4 className="text-[35px] font-semibold font-poppins text-black">550</h4>
                                    <p className="text-[15px] md:text-[14px] font-poppins text-black text-center md:text-start">Digital Products <br /> Supported</p>
                                    <span className="hidden md:block w-[2px] h-full absolute top-0 md:left-[-25%] xl:left-[-27%] bg-[#dfdfdf]"></span>
                                </div>
                                <div className="flex flex-col items-center justify-center md:justify-start md:items-start gap-1 relative">
                                    <h4 className="text-[35px] font-semibold font-poppins text-black">245</h4>
                                    <p className="text-[15px] md:text-[14px] font-poppins text-black text-center md:text-start">Expert Team <br /> Members</p>
                                    <span className="hidden md:block w-[2px] h-full absolute top-0 md:left-[-25%] xl:left-[-27%] bg-[#dfdfdf]"></span>
                                </div>
                                <div className="flex flex-col items-center justify-center md:justify-start md:items-start gap-1 relative">
                                    <h4 className="text-[35px] font-semibold font-poppins text-black">50k</h4>
                                    <p className="text-[15px] md:text-[14px] font-poppins text-black text-center md:text-start">Successful Projects <br /> Completed</p>
                                    <span className="hidden md:block w-[2px] h-full absolute top-0 md:left-[-25%] xl:left-[-27%] bg-[#dfdfdf]"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default Benefits;