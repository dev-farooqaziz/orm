import React from 'react'
//=============== Import Components
import { Hero, OurClients, Expert, Working, Aboutus, Whatbelieve } from '@/components'
//========== Import Icons
import { FaStar } from "react-icons/fa";
//========== Import Hero Images
import BannerImg from "media/about/heroBanner.png"
//========== Import Working Images
import workingImg from "media/icons/working.png"
//========== Import What Images
import foldBg from "media/foldBg.png"
const page = () => {
    //=============== Hero ===============
    const heroContent = {
        title: (<> <span className="text-primary">About Us<br className="hidden md:block" /></span>Award Winning Online Reputation Management</>),
        para: (<>
            <span className="flex flex-wrap md:flex-nowrap justify-center md:justify-start items-center gap-2">
                4.6/5.0
                <span className="flex gap-1 mb-1">
                    <FaStar className="text-[15px] md:text-[13px] text-[#FFA909]" />
                    <FaStar className="text-[15px] md:text-[13px] text-[#FFA909]" />
                    <FaStar className="text-[15px] md:text-[13px] text-[#FFA909]" />
                    <FaStar className="text-[15px] md:text-[13px] text-[#FFA909]" />
                    <FaStar className="text-[15px] md:text-[13px] text-[#FFA909]" />
                </span>
                15+ Businesses, <br className="block md:hidden" /> 35+ happy clients
            </span>
        </>),
        cta1Txt: "Explore The Platform",
        cta2Txt: "Watch Demo",
        BannerImg: BannerImg,
        showDesc: false
    };
    //=============== About ===============
    const cardContent = [
        {
            cardTitle: "Mission",
            cardDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.",
            css: "",
        },
        {
            cardTitle: "Vision",
            cardDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.",
            css: "xl:mt-[40px]",
        },
        {
            cardTitle: "Values",
            cardDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.",
            css: "",
        },
        {
            cardTitle: "Our Story",
            cardDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.",
            css: "xl:mt-[40px]",
        },
    ]
    const aboutDesc = [
        {
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        },
        {
            text: " It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }
    ];
    const aboutContent = {
        title: <><span className='text-primary'>About</span> Us</>,
        desc: aboutDesc,
        cardsContent: cardContent,
        cta1Txt: "Book a Consultation",
        cta2Txt: "Watch Demo",
    }
    //=============== What Believe ===============
    const believeCards = [
        {
            title: "Customer Focus",
            desc: "We put our clients at the center to build trust and build innovative software that exceeds expectations."
        },
        {
            title: "Integrity",
            desc: "Our teams embody integrity at all levels, serving as role models and ambassadors of our valued principles."
        },
        {
            title: "Innovation",
            desc: "We utilize the latest technologies to build what’s next and ensure rapid delivery to help you always be first to market."
        },
        {
            title: "Quality",
            desc: "From custom book marketing, we are committed to delivering excellence in everything we build for you."
        },
        {
            title: "Transparency",
            desc: "While we move your project forward, we ensure you never lose control of its outcomes by keeping you updated."
        },
        {
            title: "Collaboration",
            desc: "Our teams work, learn, succeed, grow, and develop exceptional solutions for your business – together."
        },
        {
            title: "Client Value",
            desc: "Prioritizing customer experience and accessibility, our approach is rooted in understanding our clients’ needs."
        },
        {
            title: "Responsibility",
            desc: "Committed to the well-being of our planet and future generations, we actively launch initiatives that promote responsible and sustainable growth."
        },
    ]
    const whatbelieve = {
        title: <><span className='text-primary'>What We</span> Believe In.</>,
        cardContent: believeCards,
        cta1Txt: "Book a Consultation",
        cta2Txt: "Watch Demo",
    }
    //=============== Working ===============
    const workingContent = {
        title: (<> Why Partner <span className="text-primary">With Us?</span> </>),
        para: "We help businesses like yours harness the power of positive reviews, customer insights, and market trends to enhance your reputation management and drive growth.",
        workingImg: workingImg,
    };
    //=============== Expert ===============
    const expertContent = {
        title: "Boost Your Reputation – Contact Our Experts Today",
        para: "Our expert team can help you leverage positive reviews across the most influential platforms, building credibility and driving growth.",
        foldBg: foldBg,
    };
    //=============== OurClients ===============
    const ourClientsContent = {
        title: (<> <span className="text-primary">Our Client's</span> Success Stories </>),
        para: "At the heart of every great business are satisfied customers. See how our reputation management services have transformed businesses and built trust in their markets.",
    };
    return (
        <>
            <Hero content={heroContent} />
            <Aboutus content={aboutContent} />
            <Whatbelieve content={whatbelieve} />
            <Working content={workingContent} />
            <Expert content={expertContent} />
            <OurClients content={ourClientsContent} />
        </>
    )
}

export default page
