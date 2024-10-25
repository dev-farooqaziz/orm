import React from 'react'
//=============== Import Components
import { Hero, ContactForm, OurClients, Expert, Working } from '@/components'
//========== Import Icons
import { FaStar } from "react-icons/fa";
//========== Import Hero Images
import BannerImg from "media/contact/heroBanner.png"
//========== Import Working Images
import workingImg from "media/icons/working.png"
//========== Import What Images
import foldBg from "media/foldBg.png"
const page = () => {
    //=============== Hero ===============
    const heroContent = {
        title: (<> Get a Quote For <br className='hidden md:block' /> Selected Service</>),
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
        cta1Txt: "Book a Consultation",
        cta2Txt: "Watch Demo",
        BannerImg: BannerImg,
    showDesc: false
    };
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
            <ContactForm />
            <Working content={workingContent} />
            <Expert content={expertContent} />
            <OurClients content={ourClientsContent} />
        </>
    )
}

export default page
