"use client"
//========== Imports
import React, { useState } from 'react';
import Link from "next/link";
import Image from "next/image";
//========== Import Components
import { CTA } from "@/components";
//========== Import Images
import icon1 from "media/pressIcons/icon1.png"
import icon2 from "media/pressIcons/icon2.png"
import icon3 from "media/pressIcons/icon3.png"
import icon4 from "media/pressIcons/icon4.png"
import icon5 from "media/pressIcons/icon5.png"
import icon6 from "media/pressIcons/icon6.png"
import icon7 from "media/pressIcons/icon7.png"
import icon8 from "media/pressIcons/icon8.png"
import icon9 from "media/pressIcons/icon9.png"

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
    // All Tab
    { tab: "All", cardIcons: icon1 },
    { tab: "All", cardIcons: icon2 },
    { tab: "All", cardIcons: icon3 },
    { tab: "All", cardIcons: icon4 },
    { tab: "All", cardIcons: icon5 },
    { tab: "All", cardIcons: icon6 },
    { tab: "All", cardIcons: icon7 },
    { tab: "All", cardIcons: icon8 },
    { tab: "All", cardIcons: icon9 },

    // Business Tab
    { tab: "Business", cardIcons: icon2 },
    { tab: "Business", cardIcons: icon1 },
    { tab: "Business", cardIcons: icon3 },
    { tab: "Business", cardIcons: icon4 },
    { tab: "Business", cardIcons: icon5 },
    { tab: "Business", cardIcons: icon6 },
    { tab: "Business", cardIcons: icon7 },
    { tab: "Business", cardIcons: icon8 },
    { tab: "Business", cardIcons: icon9 },

    // Fashion Tab
    { tab: "Fashion", cardIcons: icon3 },
    { tab: "Fashion", cardIcons: icon1 },
    { tab: "Fashion", cardIcons: icon2 },
    { tab: "Fashion", cardIcons: icon4 },
    { tab: "Fashion", cardIcons: icon5 },
    { tab: "Fashion", cardIcons: icon6 },
    { tab: "Fashion", cardIcons: icon7 },
    { tab: "Fashion", cardIcons: icon8 },
    { tab: "Fashion", cardIcons: icon9 },

    // Tech Tab
    { tab: "Tech", cardIcons: icon4 },
    { tab: "Tech", cardIcons: icon1 },
    { tab: "Tech", cardIcons: icon2 },
    { tab: "Tech", cardIcons: icon3 },
    { tab: "Tech", cardIcons: icon5 },
    { tab: "Tech", cardIcons: icon6 },
    { tab: "Tech", cardIcons: icon7 },
    { tab: "Tech", cardIcons: icon8 },
    { tab: "Tech", cardIcons: icon9 },

    // Web 3 Tab
    { tab: "Web 3", cardIcons: icon5 },
    { tab: "Web 3", cardIcons: icon1 },
    { tab: "Web 3", cardIcons: icon2 },
    { tab: "Web 3", cardIcons: icon3 },
    { tab: "Web 3", cardIcons: icon4 },
    { tab: "Web 3", cardIcons: icon6 },
    { tab: "Web 3", cardIcons: icon7 },
    { tab: "Web 3", cardIcons: icon8 },
    { tab: "Web 3", cardIcons: icon9 },

    // Health Tab
    { tab: "Health", cardIcons: icon6 },
    { tab: "Health", cardIcons: icon1 },
    { tab: "Health", cardIcons: icon2 },
    { tab: "Health", cardIcons: icon3 },
    { tab: "Health", cardIcons: icon4 },
    { tab: "Health", cardIcons: icon5 },
    { tab: "Health", cardIcons: icon7 },
    { tab: "Health", cardIcons: icon8 },
    { tab: "Health", cardIcons: icon9 },

    // Finance Tab
    { tab: "Finance", cardIcons: icon7 },
    { tab: "Finance", cardIcons: icon1 },
    { tab: "Finance", cardIcons: icon2 },
    { tab: "Finance", cardIcons: icon3 },
    { tab: "Finance", cardIcons: icon4 },
    { tab: "Finance", cardIcons: icon5 },
    { tab: "Finance", cardIcons: icon6 },
    { tab: "Finance", cardIcons: icon8 },
    { tab: "Finance", cardIcons: icon9 },

    // Liquor Tab
    { tab: "Liquor", cardIcons: icon8 },
    { tab: "Liquor", cardIcons: icon1 },
    { tab: "Liquor", cardIcons: icon2 },
    { tab: "Liquor", cardIcons: icon3 },
    { tab: "Liquor", cardIcons: icon4 },
    { tab: "Liquor", cardIcons: icon5 },
    { tab: "Liquor", cardIcons: icon6 },
    { tab: "Liquor", cardIcons: icon7 },
    { tab: "Liquor", cardIcons: icon9 },

    // Real Estate Tab
    { tab: "Real Estate", cardIcons: icon9 },
    { tab: "Real Estate", cardIcons: icon1 },
    { tab: "Real Estate", cardIcons: icon2 },
    { tab: "Real Estate", cardIcons: icon3 },
    { tab: "Real Estate", cardIcons: icon4 },
    { tab: "Real Estate", cardIcons: icon5 },
    { tab: "Real Estate", cardIcons: icon6 },
    { tab: "Real Estate", cardIcons: icon7 },
    { tab: "Real Estate", cardIcons: icon8 },

    // Lifestyle Tab
    { tab: "Lifestyle", cardIcons: icon1 },
    { tab: "Lifestyle", cardIcons: icon2 },
    { tab: "Lifestyle", cardIcons: icon3 },
    { tab: "Lifestyle", cardIcons: icon4 },
    { tab: "Lifestyle", cardIcons: icon5 },
    { tab: "Lifestyle", cardIcons: icon6 },
    { tab: "Lifestyle", cardIcons: icon7 },
    { tab: "Lifestyle", cardIcons: icon8 },
    { tab: "Lifestyle", cardIcons: icon9 },

    // Entertainment Tab
    { tab: "Entertainment", cardIcons: icon2 },
    { tab: "Entertainment", cardIcons: icon1 },
    { tab: "Entertainment", cardIcons: icon3 },
    { tab: "Entertainment", cardIcons: icon4 },
    { tab: "Entertainment", cardIcons: icon5 },
    { tab: "Entertainment", cardIcons: icon6 },
    { tab: "Entertainment", cardIcons: icon7 },
    { tab: "Entertainment", cardIcons: icon8 },
    { tab: "Entertainment", cardIcons: icon9 },

    // Adult Content Tab
    { tab: "Adult Content", cardIcons: icon3 },
    { tab: "Adult Content", cardIcons: icon1 },
    { tab: "Adult Content", cardIcons: icon2 },
    { tab: "Adult Content", cardIcons: icon4 },
    { tab: "Adult Content", cardIcons: icon5 },
    { tab: "Adult Content", cardIcons: icon6 },
    { tab: "Adult Content", cardIcons: icon7 },
    { tab: "Adult Content", cardIcons: icon8 },
    { tab: "Adult Content", cardIcons: icon9 },

    // Cannabis / CBD Tab
    { tab: "Cannabis / CBD", cardIcons: icon4 },
    { tab: "Cannabis / CBD", cardIcons: icon1 },
    { tab: "Cannabis / CBD", cardIcons: icon2 },
    { tab: "Cannabis / CBD", cardIcons: icon3 },
    { tab: "Cannabis / CBD", cardIcons: icon5 },
    { tab: "Cannabis / CBD", cardIcons: icon6 },
    { tab: "Cannabis / CBD", cardIcons: icon7 },
    { tab: "Cannabis / CBD", cardIcons: icon8 },
    { tab: "Cannabis / CBD", cardIcons: icon9 },

    // Casino / Gambling Tab
    { tab: "Casino / Gambling", cardIcons: icon5 },
    { tab: "Casino / Gambling", cardIcons: icon1 },
    { tab: "Casino / Gambling", cardIcons: icon2 },
    { tab: "Casino / Gambling", cardIcons: icon3 },
    { tab: "Casino / Gambling", cardIcons: icon4 },
    { tab: "Casino / Gambling", cardIcons: icon6 },
    { tab: "Casino / Gambling", cardIcons: icon7 },
    { tab: "Casino / Gambling", cardIcons: icon8 },
    { tab: "Casino / Gambling", cardIcons: icon9 },
];

const Releases = ({ content }) => {
    const { title, para, cardBg, cardBgHvr } = content

    //========== Tabs
    const [activeTab, setActiveTab] = useState("All");
    const filteredCards = cardsData.filter(item => item.tab === activeTab);

    return (
        <>
            <section className="py-12 lg:py-20">
                <div className="container">
                    <div className="w-full lg:w-10/12 xl:w-8/12 mb-12 mx-auto">
                        <h2 className="text-[40px] md:text-[50px] tracking-wide leading-tight font-semibold font-poppins text-black text-center mb-3">
                            {title}
                        </h2>
                        <p className="text-[16px] tracking-wide leading-loose font-poppins text-black text-center">
                            {para}
                        </p>
                    </div>
                    <div className="bg-[#202124] rounded-[10px] flex items-center justify-center flex-wrap gap-x-3 md:gap-x-10 gap-y-8 mb-3 py-5 px-5">
                        {tabsData.map((item, index) => (
                            <div
                                key={index}
                                onClick={() => setActiveTab(item.title)}
                                className={`border border-[#24BF5A] px-5 py-2 rounded-lg cursor-pointer ${activeTab === item.title ? 'bg-[#24BF5A]' : 'hover:bg-[#24BF5A]'}`}
                            >
                                <p className="text-[16px] font-poppins text-white text-center">{item.title}</p>
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
        </>
    );
}
export default Releases;