import React from 'react'
//=============== Import Components
import { Hero, OurClients, Expert, Working, Aboutorm, Challanges, Advertising, OurReview, Platforms } from '@/components'
//========== Import Icons
import { FaStar } from "react-icons/fa";
//========== Import Hero Images
import BannerImg from "media/contact/heroBanner.png"
//========== Import Advertising2 Images
import news2 from "media/audit/news3.png"
//========== Import Working Images
import workingImg from "media/icons/working.png"
//========== Import What Images
import foldBg from "media/foldBg.png"
//========== Import OurReview Images
import review from "media/audit/review1.png"
const page = () => {
    //=============== Hero ===============
    const heroContent = {
        title: (<> NatWest</>),
        desc: "Natwest Online Makes Bank Accounts, Mortgages, Loans, And Savings Convenient For Its Users. To Further Elaborate On The Idea Of Revolutionizing Its Business Banking Users’ Lives, Natwest Launched A Secure Mobile App Named Backline Mobile That Gave Its Customers “The Power To Act From Anywhere.”",
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
        showDesc: true
    };
    //=============== About ORM ===============
    const aboutDesc = [
        {
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        },
        {
            text: " It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
        },
    ]
    const aboutOrm = {
        title: <><span className='text-primary'>About</span> Us</>,
        desc: aboutDesc
    }
    //=============== Challanges ===============
    const challangesList = [
        {
            list: "Low Organic Search Traffic, Which Limited Their Exposure To New Customers."
        },
        {
            list: "Difficulty Standing Out Among Large Due To Lack Of Search Engine Optimization For Their Website."
        },
        {
            list: "Limited Ability To Accurately Track The ROI Of Different Marketing Activities."
        },
        {
            list: "Competing Firms Outrank Them For Keywords Related To Their Target Services."
        },
        {
            list: "Over-Reliance On Word-Of-Mouth Referrals And Past Client Testimonials As Their Main Lead Generation Channels."
        },
    ]
    const challangesContent = {
        title: <>The <span className='text-primary'>Challenges</span></>,
        desc: "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500S, When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book.",
        challangesList: challangesList,
        cta1Txt: "Explore The Platform",
        cta2Txt: "Watch Demo",
    }
    //=============== Advertising2 ===============
    const advertis2Content = {
        subtitle: "Strategy #1",
        title: (<> Our  <span className="text-primary">Content <br className='lg:block hidden' /> Marketing</span> Plan </>),
        paragraphs: [
            (<>Firstly, we created a content plan with a fixed publishing timetable to regularly share new blogs, case studies, and social media posts linked to important keywords. Article ideas focused on being informative, image-heavy and designed for search and user sharing. Subjects included renovation-type guides like kitchen re-dos, bathroom overhauls, or home extension layouts.</>),
        ],
        foldBg: news2,
        showSubtitle: true,
    };
    //=============== OurReview ===============
    const ourReviewContent = {
        bgColor: "bg-black xl:bg-white",
        textColor: "text-white xl:text-black",
        subtitle: "Strategy #2",
        title: (<> On-Site <span className="text-primary">SEO Optimization</span> </>),
        paragraphs: [
            (<> Next, we performed a thorough audit of Maxwell Construction Ltd. This included analyzing their content, images, code, and page structure. We advised optimizing aspects like page titles, meta descriptions, and multimedia components to feature target construction-related keywords. </>),
        ],
        foldBg: review,
        showSubtitle: true,
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
            <Aboutorm content={aboutOrm} />
            <Challanges content={challangesContent} />
            <Advertising content={advertis2Content} />
            <OurReview content={ourReviewContent} />
            <Platforms />
            <Working content={workingContent} />
            <Expert content={expertContent} />
            <OurClients content={ourClientsContent} />
        </>
    )
}

export default page
