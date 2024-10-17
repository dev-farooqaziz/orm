"use client";
import Image from "next/image";
//========== Import Images
import foldBg from "media/foldBg.png"
//==========
import trend1 from "media/interviews/trend1.png";
import trend2 from "media/interviews/trend2.png";
import trend3 from "media/interviews/trend3.png";
import trend4 from "media/interviews/trend4.png";
import trend5 from "media/interviews/trend5.png";
import trend6 from "media/interviews/trend6.png";

// ======= Trends Data
const trendsData = [
    {
        image: trend1,
        title: "SoundWave Chronicles",
        tag1: "Prerequisite:",
        tag2: "Television Studio Production",
        tag3: "Location:",
        tag4: "BRIC House",
    },
    {
        image: trend2,
        title: "SoundWave Chronicles",
        tag1: "Prerequisite:",
        tag2: "Television Studio Production",
        tag3: "Location:",
        tag4: "BRIC House",
    },
    {
        image: trend3,
        title: "The Voice Vault",
        tag1: "Prerequisite:",
        tag2: "Television Studio Production",
        tag3: "Location:",
        tag4: "BRIC House",
    },
    {
        image: trend4,
        title: "MindCast Weekly",
        tag1: "Prerequisite:",
        tag2: "Television Studio Production",
        tag3: "Location:",
        tag4: "BRIC House",
    },
    {
        image: trend5,
        title: "Echoes of Inspiration",
        tag1: "Prerequisite:",
        tag2: "Television Studio Production",
        tag3: "Location:",
        tag4: "BRIC House",
    },
    {
        image: trend6,
        title: "The Audio Pulse",
        tag1: "Prerequisite:",
        tag2: "Television Studio Production",
        tag3: "Location:",
        tag4: "BRIC House",
    },
];

const Trends = () => {
    return (
        <section className="bg-[#000000] lg:bg-none py-12 lg:py-20 relative z-10 overflow-hidden">
            <Image src={foldBg} alt="ORM" fill={true} className="hidden lg:block -z-10 object-cover object-bottom" />
            <div className="container">
                <div className="mb-12">
                    <h2 className="text-[35px] md:text-[40px] xl:text-[50px] tracking-wide leading-tight font-semibold font-poppins text-white text-center mb-3 xl:mb-5">Discover the Latest Trends <br className="hidden lg:block" /> <span className="text-primary">Interviewing</span> for TV </h2>
                    <p className="text-[16px] tracking-wide leading-loose font-poppins text-white text-center mb-5 w-full lg:w-10/12 xl:w-7/12 mx-auto">Top businesses are winning because they have a single source of truth for their reputation performance. They always know what consumers are saying</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-10 gap-x-0 md:gap-10 mt-8 md:mt-16">
                    {trendsData.map((item, index) => (
                        <div key={index}>
                            <div className="rounded-lg overflow-hidden">
                                <Image src={item.image} priority={true} alt="ORM" />
                            </div>
                            <div className="flex flex-col gap-5 mt-6">
                                <h3 className="text-[20px] tracking-wide font-semibold font-poppins text-white">
                                    {item.title}
                                </h3>
                                <div className="flex justify-between items-center">
                                    <div className="flex flex-col gap-1">
                                        <p className="text-[16px] font-montserrat font-medium text-[#8D8D8D] text-left">{item.tag1}</p>
                                        <p className="text-[16px] font-montserrat font-medium text-[#8D8D8D] text-left">{item.tag2}</p>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <p className="text-[16px] font-montserrat font-medium text-[#8D8D8D] text-right">{item.tag3}</p>
                                        <p className="text-[16px] font-montserrat font-medium text-[#8D8D8D] text-right">{item.tag4}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Trends;
