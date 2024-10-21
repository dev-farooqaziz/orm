import React from "react";
import Image from "next/image";
//========== Import Components
import { AutoPlaySlider } from "@/components";
//========== Import Icons
import { FaStar, FaPlay } from "react-icons/fa";
//========== Import Images
import client from "media/client.png"
import clientReview from "media/icons/clientReview.png"
//========== Slider Data
const clientsData = [
    {
        client: client,
        title: "Arthur M. Miller",
        clientReview: clientReview,
        description: "Top businesses are winning because they have a single source of truth for their reputation performance. They always know what consumers",
    },
    {
        client: client,
        title: "Arthur M. Miller",
        clientReview: clientReview,
        description: "Top businesses are winning because they have a single source of truth for their reputation performance. They always know what consumers",
    },
    {
        client: client,
        title: "Arthur M. Miller",
        clientReview: clientReview,
        description: "Top businesses are winning because they have a single source of truth for their reputation performance. They always know what consumers",
    },
];

const OurClients = ({ content }) => {
    const { title, para } = content;
    return (
        <>
            <section className="py-12 lg:py-20">
                <div className="container">
                    <div className="w-full lg:w-10/12 xl:w-8/12 mx-auto">
                        <h2 className="text-[35px] md:text-[40px] xl:text-[50px] tracking-wide leading-tight font-semibold font-poppins text-black text-center mb-4">{title}</h2>
                        <p className="text-[16px] tracking-wide leading-loose font-poppins text-black text-center">{para}</p>
                    </div>
                    <div className="mt-6 lg:mt-10">
                        <AutoPlaySlider arrowPosition="mt-5">
                            {clientsData.map((item, index) => (
                                <div key={index} className="grow-0 shrink-0 basis-[100%] md:basis-10/12 lg:basis-8/12 xl:basis-6/12 pl-5 py-5">
                                    <div className="grid grid-cols-12 items-center gap-6 rounded-[30px] overflow-hidden shadow-custom">
                                        <div className="col-span-12 md:col-span-5">
                                            <div className="relative group cursor-pointer overflow-hidden">
                                                <Image src={item.client} alt="ORM" className="rounded-[30px]" />
                                                <div className="absolute top-[40%] left-[40%] md:top-[35%] md:left-[35%] bg-[#7C7877]/50 backdrop-blur-lg rounded-full w-[75px] h-[75px] flex items-center justify-center group-hover:translate-y-[500%] duration-[1s] transition-all">
                                                    <FaPlay className="text-[#A39E9E] text-[25px]" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-span-12 md:col-span-7 flex flex-col gap-5 pb-8 pt-4 md:py-5 pl-3 pr-8">
                                            <div className="flex gap-1">
                                                <FaStar className="text-[#FFA909]" />
                                                <FaStar className="text-[#FFA909]" />
                                                <FaStar className="text-[#FFA909]" />
                                                <FaStar className="text-[#FFA909]" />
                                                <FaStar className="text-[#FFA909]" />
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <h3 className="text-[24px] italic font-semibold font-poppins text-black">
                                                    {item.title}
                                                </h3>
                                                <div className="w-[60px]">
                                                    <Image src={item.clientReview} alt="ORM" />
                                                </div>
                                            </div>
                                            <p className="text-[16px] italic font-medium leading-relaxed font-poppins text-black">
                                                {item.description}
                                            </p>
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
export default OurClients;