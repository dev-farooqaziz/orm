"use client";
//========== Imports
import React, { useState } from 'react';
import Link from "next/link";
import Image from "next/image";
//========== Import Components
import { CTA } from "@/components";
//========== Import Images
import icon1 from "media/pressIcons/icon1.png";
import icon2 from "media/pressIcons/icon2.png";
import icon3 from "media/pressIcons/icon3.png";
import icon4 from "media/pressIcons/icon4.png";
import icon5 from "media/pressIcons/icon5.png";
import icon6 from "media/pressIcons/icon6.png";
import icon7 from "media/pressIcons/icon7.png";
import icon8 from "media/pressIcons/icon8.png";
import icon9 from "media/pressIcons/icon9.png";

//========== Tabs Data
const tabsData = [
    { title: "All" },
    { title: "Business" },
    { title: "Fashion" },
    { title: "Tech" },
    { title: "Web 3" },
    { title: "Health" },
    { title: "Finance" },
    { title: "Liquor" },
    { title: "Real Estate" },
    { title: "Lifestyle" },
    { title: "Entertainment" },
    { title: "Adult Content" },
    { title: "Cannabis / CBD" },
    { title: "Casino / Gambling" },
];

//========== Cards Data
const cardsData = [
    // Unique cards across various tabs
    { tab: "Business", cardIcons: icon1 },
    //====
    { tab: "Fashion", cardIcons: icon2 },
    //====
    { tab: "Tech", cardIcons: icon3 },
    //====
    { tab: "Web 3", cardIcons: icon4 },
    //====
    { tab: "Health", cardIcons: icon5 },
    //====
    { tab: "Finance", cardIcons: icon6 },
    //====
    { tab: "Liquor", cardIcons: icon7 },
    //====
    { tab: "Real Estate", cardIcons: icon8 },
    //====
    { tab: "Lifestyle", cardIcons: icon9 },
    //====
    { tab: "Entertainment", cardIcons: icon1 },
    //====
    { tab: "Adult Content", cardIcons: icon2 },
    //====
    { tab: "Cannabis / CBD", cardIcons: icon3 },
    //====
    { tab: "Casino / Gambling", cardIcons: icon4 },
];

const Releases = ({ content }) => {
    const { title, para, cardBg, cardBgHvr } = content;

    //========== Tabs
    const [activeTab, setActiveTab] = useState("All");

    // Filter cards based on the active tab
    const filteredCards = activeTab === "All"
        ? cardsData // Show all cards if "All" is selected
        : cardsData.filter(item => item.tab === activeTab);

    return (
        <section className="py-12 lg:py-20">
            <div className="container">
                <div className="mb-12 mx-auto">
                    <h2 className="text-[30px] md:text-[40px] xl:text-[50px] tracking-wide xl:leading-tight font-semibold font-poppins text-black text-center mb-3">
                        {title}
                    </h2>
                    <p className="text-[16px] tracking-wide leading-loose font-poppins text-black text-center w-full lg:w-10/12 xl:w-8/12 mx-auto">
                        {para}
                    </p>
                </div>
                <div className="bg-[#202124] rounded-[10px] flex items-center justify-center flex-wrap gap-x-3 md:gap-x-10 gap-y-8 mb-3 py-5 px-5">
                    {tabsData.map((item, index) => (
                        <div
                            key={index}
                            onClick={() => setActiveTab(item.title)}
                            className={`border border-[#24BF5A] px-5 py-2 rounded-lg cursor-pointer ${activeTab === item.title ? 'bg-[#24BF5A]' : 'hover:bg-[#24BF5A] group'}`}
                        >
                            <p className={`text-[16px] font-poppins text-center ${activeTab === item.title ? 'text-white' : 'text-[#24BF5A] group-hover:text-white'}`}>{item.title}</p>
                        </div>
                    ))}
                </div>
                <div className="grid grid-cols-12 gap-y-6 md:gap-10">
                    {filteredCards.map((item, index) => (
                        <div key={index} className="col-span-12 md:col-span-6 lg:col-span-4 h-[200px] md:h-[180px] xl:h-[250px]">
                            <div className="h-full relative z-10 overflow-hidden rounded-[10px] shadow-custom group flex flex-col justify-center items-center">
                                <Image src={cardBg} alt="ORM" fill={true} className="-z-10 object-cover object-bottom opacity-100 group-hover:opacity-0 transition-all duration-700" />
                                <Image src={cardBgHvr} alt="ORM" fill={true} className="-z-10 object-cover object-bottom opacity-0 group-hover:opacity-100 transition-all duration-700" />
                                <div className="flex flex-col gap-6 justify-center items-center p-8 pt-12 cursor-default">
                                    <Image src={item.cardIcons} alt="ORM" className="w-[80px] mx-auto group-hover:invert" />
                                    <Link href="#" className="text-[16px] tracking-wide font-poppins font-medium text-black group-hover:text-white transition-all duration-700">
                                        Book A Consultation
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="w-max mx-auto mt-8 lg:mt-12">
                    <CTA
                        text="Book a Consultation"
                        href="tel:123456789"
                    />
                </div>
            </div>
        </section>
    );
};

export default Releases;
