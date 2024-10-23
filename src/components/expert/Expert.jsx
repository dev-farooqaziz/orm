import React from "react";
import Image from "next/image";
//========== Import Components
import { CTA } from "@/components";
//========== Import Icons
import { FaArrowRight } from "react-icons/fa";
//========== Import Images
import wallet from "media/icons/wallet.png"
import expertIcon1 from "media/expertIcons/expertIcon1.png"
import expertIcon2 from "media/expertIcons/expertIcon2.png"
import expertIcon3 from "media/expertIcons/expertIcon3.png"
import expertIcon4 from "media/expertIcons/expertIcon4.png"
import expertIcon5 from "media/expertIcons/expertIcon5.png"
import expertIcon6 from "media/expertIcons/expertIcon6.png"

const Expert = ({ content }) => {
    const { title, para, foldBg } = content;
    return (
        <>
            <section className="bg-[#000000] lg:bg-none py-12 lg:py-20 relative z-10 overflow-hidden">
                <Image src={foldBg} alt="ORM" fill={true} className="hidden lg:block -z-10 object-cover object-bottom" />
                <div className="container">
                    <div className="mb-12 w-full lg:w-10/12 xl:w-8/12 mx-auto">
                        <h2 className="text-[36px] tracking-wide leading-tight font-semibold font-poppins text-white text-center mb-4">{title}</h2>
                        <p className="text-[16px] tracking-wide leading-loose font-poppins text-white text-center">{para}</p>
                    </div>
                    <div className="flex justify-around flex-col md:flex-row lg:flex-col">
                        <div className="pb-10 md:pb-0 lg:pb-10 xl:px-20 border-b md:border-b-0 lg:border-b border-[#707070]">
                            <h4 className="text-[20px] tracking-wide font-montserrat text-white mb-5 lg:mb-8">Buy Google Reviews</h4>
                            <div className="grid grid-cols-12 items-center gap-7 lg:gap-12 xl:gap-20">
                                <div className="col-span-11 md:col-span-12 lg:col-span-4">
                                    <div className="flex items-center gap-4 xl:gap-6 bg-[#323232] rounded-2xl p-2 relative">
                                        <Image src={expertIcon1} alt="ORM" className="w-[60px]" />
                                        <h4 className="text-[16px] tracking-wide font-montserrat font-medium text-white">Google Reviews</h4>
                                        <div className="absolute top-[25%] right-[-5%] md:right-[-4%] xl:right-[-5%] bg-primary p-2 rounded-full">
                                            <FaArrowRight className="text-[20px]" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-11 md:col-span-12 lg:col-span-4">
                                    <div className="flex items-center gap-4 xl:gap-6 bg-[#323232] rounded-2xl p-2 relative">
                                        <Image src={expertIcon2} alt="ORM" className="w-[60px]" />
                                        <h4 className="text-[16px] tracking-wide font-montserrat font-medium text-white">Clutch Reviews</h4>
                                        <div className="absolute top-[25%] right-[-5%] md:right-[-4%] xl:right-[-5%] bg-primary p-2 rounded-full">
                                            <FaArrowRight className="text-[20px]" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-11 md:col-span-12 lg:col-span-4">
                                    <div className="flex items-center gap-4 xl:gap-6 bg-[#323232] rounded-2xl p-2 relative">
                                        <Image src={expertIcon3} alt="ORM" className="w-[60px]" />
                                        <h4 className="text-[16px] tracking-wide font-montserrat font-medium text-white">Trust Pilot Reviews</h4>
                                        <div className="absolute top-[25%] right-[-5%] md:right-[-4%] xl:right-[-5%] bg-primary p-2 rounded-full">
                                            <FaArrowRight className="text-[20px]" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="pt-10 md:pt-0 lg:pt-10 xl:px-20">
                            <h4 className="text-[20px] tracking-wide font-montserrat text-white mb-5 lg:mb-8">Buy Social Media Reviews</h4>
                            <div className="grid grid-cols-12 items-center gap-7 lg:gap-12 xl:gap-20">
                                <div className="col-span-11 md:col-span-12 lg:col-span-4">
                                    <div className="flex items-center gap-4 xl:gap-6 bg-[#323232] rounded-2xl p-2 relative">
                                        <Image src={expertIcon4} alt="ORM" className="w-[60px]" />
                                        <h4 className="text-[16px] tracking-wide font-montserrat font-medium text-white">Sitejabber Reviews</h4>
                                        <div className="absolute top-[25%] right-[-5%] md:right-[-4%] xl:right-[-5%] bg-primary p-2 rounded-full">
                                            <FaArrowRight className="text-[20px]" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-11 md:col-span-12 lg:col-span-4">
                                    <div className="flex items-center gap-4 xl:gap-6 bg-[#323232] rounded-2xl p-2 relative">
                                        <Image src={expertIcon5} alt="ORM" className="w-[60px]" />
                                        <h4 className="text-[16px] tracking-wide font-montserrat font-medium text-white">Facebook Reviews</h4>
                                        <div className="absolute top-[25%] right-[-5%] md:right-[-4%] xl:right-[-5%] bg-primary p-2 rounded-full">
                                            <FaArrowRight className="text-[20px]" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-11 md:col-span-12 lg:col-span-4">
                                    <div className="flex items-center gap-4 xl:gap-6 bg-[#323232] rounded-2xl p-2 relative">
                                        <Image src={expertIcon6} alt="ORM" className="w-[60px]" />
                                        <h4 className="text-[16px] tracking-wide font-montserrat font-medium text-white">Googfirms Reviews</h4>
                                        <div className="absolute top-[25%] right-[-5%] md:right-[-4%] xl:right-[-5%] bg-primary p-2 rounded-full">
                                            <FaArrowRight className="text-[20px]" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="inline-block xl:flex items-center gap-4 bg-[#323232]/40 backdrop-blur-lg rounded-[25px] overflow-hidden px-4 lg:px-10 xl:px-4 py-2 w-full xl:w-max mx-auto mt-10 lg:mt-14 text-center">
                        <h5 className="inline xl:block text-[16px] md:text-[14px] lg:text-[18px] tracking-wide font-montserrat text-white text-center mb-0 mr-2 xl:mr-0">Experience the power of positive reviews. With our service, you only pay after you see the results!</h5>
                        <Image src={wallet} alt="ORM" className="inline xl:block w-[20px] lg:w-[30px] text-center" />
                    </div>
                    <div className="w-max mx-auto mt-8 lg:mt-10">
                        <CTA
                            text="Book a Consultation"
                            href="tel:123456789"
                        />
                    </div>
                </div>
            </section>
        </>
    );
}
export default Expert;