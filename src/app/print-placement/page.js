//=============== Import Components
import { Hero, Releases, Press, Publication, Possibilities, Working, Expert, OurClients } from "@/components";
//========== Import Icons
import { FaStar } from "react-icons/fa";
//========== Import Hero Images
import BannerImg from "media/magazine/heroBanner.png"
//========== Import Releases Images
import cardBg from "media/cardBg.png"
import cardBgHvr from "media/cardBgHvr.png"
//========== Import Fold-Bg
import foldBg from "media/foldBg.png"
//========== Import Press Images
import press from "media/magazine/press.png"
//========== Import Publication Images
import news from "media/magazine/news.png"
//========== Import Possibilities Images
import imagine1 from "media/magazine/imagine1.png"
import imagine2 from "media/magazine/imagine2.png"
import imagine3 from "media/magazine/imagine3.png"
//========== Import Working Images
import workingImg from "media/icons/working.png"

export default function Home() {
  //=============== Hero ===============
  const heroContent = {
    title: (<> Maximize Your Reach <br className="hidden xl:block" /> with Expert Print <br className="hidden xl:block" /> Placement in <span className="text-primary">Magazines</span> </>),
    para: (<>
      <span className="flex flex-wrap md:flex-nowrap justify-center md:justify-start items-center gap-2">
        Rated 4.6/5.0
        <span className="flex gap-1 mb-1">
          <FaStar className="text-[15px] md:text-[13px] text-[#FFA909]" />
          <FaStar className="text-[15px] md:text-[13px] text-[#FFA909]" />
          <FaStar className="text-[15px] md:text-[13px] text-[#FFA909]" />
          <FaStar className="text-[15px] md:text-[13px] text-[#FFA909]" />
          <FaStar className="text-[15px] md:text-[13px] text-[#FFA909]" />
        </span>
        <span className="hidden md:block">|</span> Trusted by 15+ Businesses <span className="hidden md:block">|</span> <br className="block md:hidden" /> 135+ happy clients
      </span>
    </>),
    cta1Txt: "Explore The Platform",
    cta2Txt: "Watch Demo",
    BannerImg: BannerImg,
  };
  //=============== Releases ===============
  const releasesContent = {
    title: (<> 6 Impressive Design Tools <br className="hidden lg:block" /> for <span className="text-primary">Magazines</span> </>),
    para: "Top businesses are winning because they have a single source of truth for their reputation performance. They always know what consumers are saying",
    cardBg: cardBg,
    cardBgHvr: cardBgHvr,
  };
  //=============== Press ===============
  const pressContent = {
    title: (<> Always- <span className="text-primary">On Print</span> Placement: All Social in One Place </>),
    paragraphs: [
      "Wikipedia pages are a powerful way to enhance your online presence and showcase your achievements. Whether you're building personal credibility, promoting your brand, or sharing important milestones, we create expertly crafted Wikipedia pages that capture attention.",
      "Elevate your brand with a high-quality Wikipedia page that boosts credibility and visibility.",
    ],
    foldBg: foldBg,
    foldImg: press,
  };
  //=============== Publication ===============
  const publicantPoints = [
    "Thorough Research Process",
    "Engaging Content Creation",
    "Targeted Audience Reach",
    "Timely Delivery Assurance"
  ];
  // =====================
  const publicationContent = {
    title: (<> Why Choose Our <br className="hidden lg:block" /> Print Placement <span className="text-primary">(Magazine)?</span> </>),
    paragraphs: [
      "We leverage our expertise to create compelling news articles and publications that capture your audience's attention. Our team conducts thorough research, ensuring that every piece is well-informed and relevant.",
    ],
        publicantPoints: publicantPoints,
    cta1Txt: "Get Started Today",
    cta2Txt: "Book a Consultation",
    foldBg: news,
  };
  //=============== Possibilities ===============
  const cardData = [
    {
      title: "Increased Online Visibility",
      para: "Top Businesses Are Winning Because They Have A Single Source Of Truth For Their Reputation Performance. They Always Know What Consumers Are Saying About Them And Can Always Act On Those Insights.",
      img: imagine1,
    },
    {
      title: "SEO Boost",
      para: "Top Businesses Are Winning Because They Have A Single Source Of Truth For Their Reputation Performance. They Always Know What Consumers Are Saying About Them And Can Always Act On Those Insights.",
      img: imagine2,
    },
    {
      title: "Detailed Storytelling",
      para: "Top Businesses Are Winning Because They Have A Single Source Of Truth For Their Reputation Performance. They Always Know What Consumers Are Saying About Them And Can Always Act On Those Insights.",
      img: imagine3,
    },
  ];
  // =====================
  const possibleContent = {
    foldBg: foldBg,
    title: (<> Imagine The <span className="text-primary">Possibilities</span> </>),
    para: "We leverage our expertise to create compelling news articles and publications that capture your audience's attention. Our team conducts thorough research, ensuring that every piece is well-informed and relevant.",
    cardData: cardData,
  };
  //=============== Working ===============
  const workingContent = {
    title: (<> Why Partner <span className="text-primary">With Us?</span> </>),
    para: "We help businesses like yours harness the power of positive reviews, customer insights, and market trends to enhance your reputation management and drive growth.",
    workingImg: workingImg,
  };
  //=============== Expert ===============
  const expertContent = {
    title: "Contact Our Experts Today and Build A Strong Online Brand Reputation",
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
      <Releases content={releasesContent} />
      <Press content={pressContent} />
      <Publication content={publicationContent} />
      <Possibilities content={possibleContent} />
      <Working content={workingContent} />
      <Expert content={expertContent} />
      <OurClients content={ourClientsContent} />
    </>
  );
}
