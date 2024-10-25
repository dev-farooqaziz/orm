import React from 'react'
//=============== Import Components
import { Hero, OurClients, Expert, Working, NewcaseStudy, } from '@/components'
//========== Import Icons
import { FaStar } from "react-icons/fa";
//========== Import Hero Images
import BannerImg from "media/about/heroBanner.png"
//========== Import Working Images
import workingImg from "media/icons/working.png"
//========== Import What Images
import foldBg from "media/foldBg.png"
// ============ Import Case Image
import Case1 from "media/caseStudies/caseStudies1.png";
import Case2 from "media/caseStudies/caseStudies2.png";
import Case3 from "media/caseStudies/caseStudies3.png";
import Case4 from "media/caseStudies/caseStudies4.png";
import Case5 from "media/caseStudies/caseStudies5.png";
import Case6 from "media/caseStudies/caseStudies6.png";
import Case7 from "media/caseStudies/caseStudies7.png";
import Case8 from "media/caseStudies/caseStudies8.png";
import Case9 from "media/caseStudies/caseStudies9.png";
import Case10 from "media/caseStudies/caseStudies10.png";
import Case11 from "media/caseStudies/caseStudies11.png";
import Case12 from "media/caseStudies/caseStudies12.png";
const page = () => {
    //=============== Hero ===============
    const heroContent = {
        title: (<> <span className="text-primary">Tell Your Story<br className="hidden md:block" /></span>Case Study</>),
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
    //=============== Hero ===============
    const caseStudies = [
        {
            title: "NatWest",
            desc: "Natwest Online Makes Bank Accounts, Mortgages, Loans, And Savings Convenient For Its Users. To Further Elaborate On The Idea Of Revolutionizing Its Business Banking Users’ Lives, Natwest Launched A Secure Mobile App Named Backline Mobile That Gave Its Customers “The Power To Act From Anywhere.”",
            image: Case1
        },
        {
            title: "Honeywell",
            desc: "Unlike Other Animation Companies That Focus Solely On Creating Product Or Service Videos That Grabs Customers' Attention For A Tiny Bit, Online Reputation Management Emphasizes Product Retention And Branding In A Broader Sense.",
            image: Case2
        },
        {
            title: "123 Valid",
            desc: "Insufficiency In Testing A Company’s Web Servers For Vulnerabilities Can Expose The Business To Cyber Criminals. We Took The Opportunity Of Working With 123Valid As A Challenge For Society's Greater Good, Especially Those Featuring A Presence On The Web.",
            image: Case3
        },
        {
            title: "Relavox",
            desc: "Texas Blue Action, An Organization That Aims To Empower The People With The Techniques And Guidelines To Win Elections, Launched A Campaign Called 2 Million Texans.",
            image: Case4
        },
        {
            title: "Ford",
            desc: "Since Its Establishment, Ford Motor Company Has Actively Contributed To Road Safety. The Company's Primary Objective Remains To Contribute To A World Where People Have The Liberty To Move Freely And Reach Their Destinations Safely.",
            image: Case5
        },
        {
            title: "Drop & Hook",
            desc: "Drop & Hook Content Wanted To Create A Video For Their Client That Would Help Educate People About The Importance Of Cargo Insurance And Why It's Needed. They Wanted Something That Could Attract Attention And Convey Their Message Well.",
            image: Case6
        },
        {
            title: "Bank of America",
            desc: "Online Reputation Management, A Whiteboard Animation Company, Offers Services To Humanize Your Brand Through Simple Yet Effective Whiteboard Explainer Videos. These Videos Increase Chances Of Grasping Attention And Retaining It Too.",
            image: Case7
        },
        {
            title: "Lasik Of Nevada",
            desc: "When It Comes To Marketing And Advertising, The First Thing Many Businesses Think Of Is To Create An Advertisement That Tells A Compelling Story. But In Reality, It’s Not Just About Telling A Story: It’s Also About Telling The Right Story And Ensuring That Your Audience Hears It And Understands It.",
            image: Case8
        },
        {
            title: "McDonald’s",
            desc: "Mcdonald’s Is A Global Food Service Retailer Whose Happy Meals Have Remained A Massive Hit Since The Beginning Of Time. Online Reputation Management Was Approached By Mcdonald’s To Create A Cel-Animated Video For Their Latest Collaboration With Angry Birds.",
            image: Case9
        },
        {
            title: "Mediaone Digital",
            desc: "Online Reputation Management Is A Whiteboard Animation Video Company That Helps Startup Companies And Small Businesses By Creating Explainer Videos For Them. Our Staff Gets Into The Thick Of Things As Far As Your Business, Strategy, And Vision To Create A Video That Calls Attention To Your Products Or Services Are Concerned.",
            image: Case10
        },
        {
            title: "RIO",
            desc: "In Advertising, The Motive Isn’t Just Telling Any Story; Instead, You’re Expected To Tell The Right Story. However, In Reality, No One Story Works For Everyone, So Your Best Shot Is To Ensure You Connect With Your Intended Audience At All Times.",
            image: Case11
        },
        {
            title: "MyClients",
            desc: "My Clients CRM Simplifies The Process Of Converting Leads Into Clients And Maintaining Relationships With Them. Specifically Designed For Small To Medium-Sized Businesses, It Compresses Multiple Programs Into One Easy-To-Use Platform, Saving You Time And Money.",
            image: Case12
        }
    ];


    const caseStudy = {
        title: "Case Study",
        cta1Txt: "View Case Study",
        cta2Txt: "Get Started",
        caseStudies: caseStudies

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
            <NewcaseStudy content={caseStudy} />
            <Working content={workingContent} />
            <Expert content={expertContent} />
            <OurClients content={ourClientsContent} />
        </>
    )
}

export default page
