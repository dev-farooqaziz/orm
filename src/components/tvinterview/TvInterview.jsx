"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
//========== Import Images
import foldBg from "media/foldBg.png"
//==========
import audioImg1 from "media/audio1.png";
import audioImg2 from "media/audio2.png";
import audioImg3 from "media/audio3.png";
import audioImg4 from "media/audio4.png";
import audioImg5 from "media/audio5.png";
import audioImg6 from "media/audio6.png";
import audioImg7 from "media/audio7.png";
import audioImg8 from "media/audio8.png";
import audioImg9 from "media/audio9.png";

//========== Tabs Data with Categories
const tabsData = [
    { title: "All" },
    { title: "Technology" },
    { title: "Business" },
    { title: "Music" },
];

//========== Audio Data with Categories
const audioEpisodes = [
    // Technology Episodes
    { img: audioImg1, title: "SoundWave Chronicles", season: "Location: Bric House", category: "Technology" },
    { img: audioImg4, title: "MindCast Weekly", season: "Location: Bric House", category: "Technology" },
    { img: audioImg7, title: "Vibe & Vision", season: "Location: Bric House", category: "Technology" },

    // Business Episodes
    { img: audioImg2, title: "Insightful Echoes", season: "Location: Bric House", category: "Business" },
    { img: audioImg5, title: "Echoes of Inspiration", season: "Location: Bric House", category: "Business" },
    { img: audioImg8, title: "SpeakEasy Sessions", season: "Location: Bric House", category: "Business" },

    // Music Episodes
    { img: audioImg3, title: "The Voice Vault", season: "Location: Bric House", category: "Music" },
    { img: audioImg6, title: "The Audio Pulse", season: "Location: Bric House", category: "Music" },
    { img: audioImg9, title: "Resonance Radio", season: "Location: Bric House", category: "Music" },
];

const TvInterview = () => {
    const [activeTab, setActiveTab] = useState("All");

    const filteredEpisodes = activeTab === "All"
        ? audioEpisodes
        : audioEpisodes.filter(item => item.category === activeTab);

    return (
        <section className="bg-[#000000] lg:bg-none py-12 lg:py-20 relative z-10 overflow-hidden">
            <Image src={foldBg} alt="ORM" fill={true} className="hidden lg:block -z-10 object-cover object-bottom" />
            <div className="container">
                <div className="mb-12">
                    <h2 className="text-[30px] md:text-[40px] xl:text-[50px] tracking-wide xl:leading-tight font-semibold font-poppins text-white text-center mb-3 xl:mb-5">Latest TV <span className="text-primary">Interviews</span></h2>
                    <p className="text-[16px] tracking-wide leading-loose font-poppins text-white text-center mb-5 w-full lg:w-10/12 xl:w-7/12 mx-auto">Our services connect you with leading TV shows and platforms, providing an opportunity to share your insights, showcase your brand, and engage with a broad audience.</p>
                </div>
                <div className="md:w-max mx-auto flex items-center justify-center flex-wrap gap-x-6 lg:gap-x-16 gap-y-6 px-10 mb-8 lg:mb-12 pb-8 border-b border-[#4e4e4e]">
                    {tabsData.map((item, index) => (
                        <div
                            key={index}
                            onClick={() => setActiveTab(item.title)}
                            className={`border px-10 py-2 rounded-lg cursor-pointer ${activeTab === item.title ? 'bg-[#24BF5A] border-[#24BF5A]' : 'hover:bg-[#24BF5A] border-[#E3E3E3] hover:border-[#24BF5A]'}`}
                        >
                            <p className="text-[16px] font-poppins text-[#E3E3E3] text-center">{item.title}</p>
                        </div>
                    ))}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                    {filteredEpisodes.map((episode, index) => (
                        <div key={index} className="flex items-start justify-between border border-[#4e4e4e] p-3 rounded-[10px] hover:bg-[#24BF5A]">
                            <div className="flex items-center gap-4 w-full">
                                <Image src={episode.img} alt={`Episode ${index + 1}`} className="w-[70px]" />
                                <div className="flex justify-between items-start gap-4 w-full">
                                    <div className="flex flex-col gap-2">
                                        <h3 className={`text-[16px] font-semibold font-poppins text-white`}>
                                            {episode.title}
                                        </h3>
                                        <span className={`text-[14px] tracking-wide font-poppins text-white`}>
                                            {episode.season}
                                        </span>
                                    </div>
                                    <div>
                                        <Link href="#" className="text-[14px] font-medium font-poppins text-white">Open To All</Link>
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

export default TvInterview;
