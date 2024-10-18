import React from "react";
import Link from "next/link";
import Image from "next/image";
//========== Import Images
import foldBg from "media/foldBg.png"
import cross1 from "media/podcasts/cross1.png"
import cross2 from "media/podcasts/cross2.png"
import cross3 from "media/podcasts/cross3.png"
import cross4 from "media/podcasts/cross4.png"
import cross5 from "media/podcasts/cross5.png"
import cross6 from "media/podcasts/cross6.png"
import microphone from "media/icons/microphone.png"
import clock from "media/icons/clock.png"
import folder from "media/icons/folder.png"

// ======= Podcast Data
const podcastData = [
    {
        slideImg: cross1,
        title: "Action and Ambition",
        description: "Analyze your online presence to identify strengths and weaknesses for improvement strategies.",
        tags: [
            { icon: microphone, label: "Andrew Medal" },
            { icon: clock, label: "6Hr 30M" },
            { icon: folder, label: "Business" }
        ],
    },
    {
        slideImg: cross2,
        title: "Grit Daily Startup Show",
        description: "Explore the depths of ancient civilizations and their mysteries for improvement strategies.",
        tags: [
            { icon: microphone, label: "James Gomez" },
            { icon: clock, label: "6Hr 30M" },
            { icon: folder, label: "History" }
        ],
    },
    {
        slideImg: cross3,
        title: "SharkPreneur",
        description: "Delve into the complexities of global economies and market trends for improvement strategies.",
        tags: [
            { icon: microphone, label: "Emily Haris" },
            { icon: clock, label: "6Hr 30M" },
            { icon: folder, label: "Health" }
        ],
    },
    {
        slideImg: cross4,
        title: "The Playbook With David Meltzer",
        description: "Discover techniques for living a more mindful and peaceful life for improvement strategies.",
        tags: [
            { icon: microphone, label: "David" },
            { icon: clock, label: "6Hr 30M" },
            { icon: folder, label: "Technology" }
        ],
    },
    {
        slideImg: cross5,
        title: "The Educator's Exchange",
        description: "Delve into the complexities of global economies and market trends for improvement strategies.",
        tags: [
            { icon: microphone, label: "James Gomez" },
            { icon: clock, label: "6Hr 30M" },
            { icon: folder, label: "Business" }
        ],
    },
    {
        slideImg: cross6,
        title: "The Entrepreneur's Edge",
        description: "Discover techniques for living a more mindful and peaceful life for improvement strategies.",
        tags: [
            { icon: microphone, label: "Emily Haris" },
            { icon: clock, label: "6Hr 30M" },
            { icon: folder, label: "History" }
        ],
    },
];

const Cross = () => {
    return (
        <>
            <section className="bg-[#000000] lg:bg-none py-12 lg:py-20 relative z-10 overflow-hidden">
                <Image src={foldBg} alt="ORM" fill={true} className="hidden lg:block -z-10 object-cover object-bottom" />
                <div className="container">
                    <div className="w-full lg:w-10/12 xl:w-7/12 mx-auto">
                        <h2 className="text-[35px] md:text-[40px] xl:text-[50px] tracking-wide leading-tight font-semibold font-poppins text-white text-center mb-4">Discover the Latest Trends in <span className="text-primary">Cross Podcast</span></h2>
                        <p className="text-[16px] tracking-wide leading-loose font-poppins text-white text-center">Explore the latest trends in cross-podcasting, focusing on collaboration, innovative formats, and strategies to enhance audience engagement and expand reach.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-10 gap-x-0 md:gap-10 mt-8 md:mt-14 xl:mt-20">
                        {podcastData.map((item, index) => (
                            <div key={index}>
                                <div className="rounded-lg overflow-hidden">
                                    <Image src={item.slideImg} priority="true" alt="ORM" />
                                </div>
                                <div className="flex flex-col mt-6">
                                    <h3 className="text-[20px] tracking-wide font-semibold font-poppins text-white">
                                        {item.title}
                                    </h3>
                                    <div className="w-max flex items-center gap-2 2xl:gap-10 mb-2 mt-4 pb-2 relative before:absolute before:left-0 before:bottom-0 before:w-[95%] before:h-[1px] before:bg-primary">
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
                    </div>
                </div>
            </section>
        </>
    );
}
export default Cross;