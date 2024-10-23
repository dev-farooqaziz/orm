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
        description: "We struggled for months with managing our online reputation, but after working with this team, everything changed. Our positive reviews increased, and they handled the negative ones professionally. Now, new customers trust us immediately!",
    },
    {
        client: client,
        title: "Emily R. Anderson",
        clientReview: clientReview,
        description: "These guys know what they're doing! They helped us turn our negative online image into one that reflects our values. The difference in client inquiries has been night and day—can’t recommend them enough!",
    },
    {
        client: client,
        title: "Jonathan K. Davis",
        clientReview: clientReview,
        description: "Excellent service! We were losing business due to poor online reviews, but this team stepped in and helped turn things around. Now, we regularly see new clients coming in based on our improved reviews.",
    },
    {
        client: client,
        title: "Michael A. Lee",
        clientReview: clientReview,
        description: "Professional, reliable, and incredibly effective! In just a few months, our Google and Facebook ratings improved, and the influx of positive reviews has given us a lot more credibility. Highly recommended.",
    },
    {
        client: client,
        title: "Rebecca L. Wright",
        clientReview: clientReview,
        description: "They took the time to understand our business and created a plan that actually worked. Not only did we receive more positive feedback, but our customer engagement also went through the roof. Couldn’t be happier.",
    },
    {
        client: client,
        title: "James P. Turner",
        clientReview: clientReview,
        description: "I was hesitant about using a reputation management service, but these guys changed my mind. Our online presence is much stronger, and we’re attracting new clients who mention our great reviews. Well worth the investment!",
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
                                    <div className="grid grid-cols-12 items-center gap-6 rounded-[30px] overflow-hidden shadow-custom h-full">
                                        <div className="col-span-12 md:col-span-5 h-full">
                                            <div className="relative group cursor-pointer overflow-hidden h-full">
                                                <Image src={item.client} alt="ORM" className="rounded-[30px] h-full" />
                                                <div className="absolute top-[40%] left-[40%] md:top-[35%] md:left-[35%] bg-[#7C7877]/50 backdrop-blur-lg rounded-full w-[75px] h-[75px] flex items-center justify-center group-hover:translate-y-[500%] duration-[1s] transition-all">
                                                    <FaPlay className="text-[#A39E9E] text-[25px]" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-span-12 md:col-span-7 flex flex-col gap-4 pb-8 pt-4 md:py-5 pl-3 pr-8">
                                            <div className="flex gap-1">
                                                <FaStar className="text-[#FFA909]" />
                                                <FaStar className="text-[#FFA909]" />
                                                <FaStar className="text-[#FFA909]" />
                                                <FaStar className="text-[#FFA909]" />
                                                <FaStar className="text-[#FFA909]" />
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <h3 className="text-[20px] italic font-semibold font-poppins text-black">
                                                    {item.title}
                                                </h3>
                                                <div className="w-[60px]">
                                                    <Image src={item.clientReview} alt="ORM" />
                                                </div>
                                            </div>
                                            <p className="text-[15px] italic font-medium leading-relaxed font-poppins text-black">
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