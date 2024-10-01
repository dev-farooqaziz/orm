import React from "react";
import Image from "next/image";
//========== Import Images
import ormCard1 from "media/ormCard1.png"
import ormCard2 from "media/ormCard2.png"
import ormCard3 from "media/ormCard3.png"
import support from "media/icons/support.png"
import verified from "media/icons/verified.png"
import befImg from "media/icons/txtBefore.png"

const Choose = () => {
    return (
        <>
            <section className="py-12 lg:py-20">
                <div className="container">
                    <div className="grid grid-cols-12 items-center gap-5">
                        <div className="col-span-12 mb-6">
                            <div className="relative w-full md:w-max mx-auto">
                                <h2 className="text-[40px] md:text-[50px] tracking-wide leading-tight font-semibold font-poppins text-black text-center mb-3 xl:mb-4">Why Choose ORM Reviews?</h2>
                                <Image src={befImg} alt="ORM" className="hidden md:block absolute -bottom-2 left-[45%] w-[30%]" />
                            </div>
                            <p className="w-[80%] mx-auto text-[16px] tracking-wide leading-loose font-medium font-montserrat text-black text-center">At Gorilla Reviews, We Understand The Importance Of A Stellar Online Reputation.</p>
                        </div>
                        <div className="col-span-12 lg:col-span-6 xl:col-span-4">
                            <div className="relative">
                                <Image src={ormCard1} alt="ORM" />
                                <div className="flex flex-col items-center justify-center gap-3 pb-[40px] absolute top-0 left-[-5%] md:left-[8%] lg:left-[-5%] h-full">
                                    <h3 className="text-[60px] leading-tight tracking-wide font-semibold font-poppins text-white">
                                        75%
                                    </h3>
                                    <p className="w-[80%] mx-auto text-[16px] tracking-wide leading-normal lg:leading-tight font-montserrat font-medium text-center text-white">
                                        Our Reviews Are Genuine, Reliable, And Written By Real Customers.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-12 lg:col-span-6 xl:col-span-4">
                            <div className="relative">
                                <Image src={ormCard2} alt="ORM" />
                                <div className="flex flex-col items-center justify-center gap-3 pt-5 pb-[40px] absolute top-0 left-[-5%] h-full">
                                    <Image src={support} alt="ORM" className="w-[25%] mb-4" />
                                    <h3 className="text-[40px] leading-tight tracking-wide font-semibold font-poppins text-black">
                                        24/7
                                        <span className="block text-[20px] tracking-wide font-montserrat font-medium text-center text-black">
                                            Support
                                        </span>
                                    </h3>
                                    <p className="w-[80%] mx-auto text-[16px] tracking-wide leading-normal lg:leading-tight font-montserrat font-medium text-center text-black">
                                        Our Dedicated Support Team Is Available Around The Clock To Assist You, Ensuring You Get The Most Out Of Our Services.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="hidden lg:block xl:hidden col-span-3"></div>
                        <div className="col-span-12 lg:col-span-6 xl:col-span-4">
                            <div className="relative">
                                <Image src={ormCard3} alt="ORM" />
                                <div className="flex flex-col items-center justify-center gap-3 pt-5 pb-[40px] absolute top-0 left-[-5%] h-full">
                                    <h3 className="text-[40px] leading-tight tracking-wide font-semibold font-poppins text-white">
                                        Verified
                                        <span className="block text-[20px] tracking-wide font-montserrat font-medium text-center text-white">
                                            Reviews
                                        </span>
                                    </h3>
                                    <p className="w-[80%] mx-auto text-[16px] tracking-wide leading-normal lg:leading-tight font-montserrat text-center text-white">
                                        Authenticity Matters. With Gorilla Reviews, You Can Be Confident That All Our Reviews Come From Verified Customers, Ensuring Credibility And Trust.
                                    </p>
                                    <Image src={verified} alt="ORM" className="w-[25%] mt-4" />
                                </div>
                            </div>
                        </div>
                        <div className="hidden lg:block xl:hidden col-span-3"></div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Choose