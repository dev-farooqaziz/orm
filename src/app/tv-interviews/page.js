//=============== Import Components
import { Hero, Releases, TvInterview, Publication, Trends, Solutions, Working, Expert, OurClients } from "@/components";
//========== Import Icons
import { FaStar } from "react-icons/fa";
//========== Import Hero Images
import BannerImg from "media/interviews/heroBanner.png"
//========== Import Releases Images
import cardBg from "media/cardBg.png"
import cardBgHvr from "media/cardBgHvr.png"
//========== Import Fold-Bg
import foldBg from "media/foldBg.png"
//========== Import Publication Images
import news from "media/interviews/news.png"
//========== Import Solutions Images
import reviewCard from "media/reviewCard.png"
//========== Import Working Images
import workingImg from "media/icons/working.png"

export default function Home() {
  //=============== Hero ===============
  const heroContent = {
    title: (<> Amplify Your Brand <br className="hidden xl:block" /> with Strategic <span className="text-primary xl:block">TV Interviews</span> </>),
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
    title: (<> The Most-Advanced, <br className="hidden xl:block" /> All-In-One <span className="text-primary">Video Interview!</span> </>),
    para: "Top businesses are winning because they have a single source of truth for their reputation performance. They always know what consumers are saying",
    cardBg: cardBg,
    cardBgHvr: cardBgHvr,
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
    title: (<> What Can TV <span className="text-primary">Placement</span> Do For <br /> You? </>),
    paragraphs: [
      "We leverage our expertise to create compelling news articles and publications that capture your audience's attention. Our team conducts thorough research, ensuring that every piece is well-informed and relevant.",
    ],
        publicantPoints: publicantPoints,
    cta1Txt: "Get Started Today",
    cta2Txt: "Book a Consultation",
    foldBg: news,
  };
  //=============== Solutions ===============
  const cardData = [
    {
      title: "Reputation Analysis",
      para: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Nulla Sapien Nulla, Finibus Vel Malesuada Sed."
    },
    {
      title: "Content Creation",
      para: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Nulla Sapien Nulla, Finibus Vel Malesuada Sed."
    },
    {
      title: "Publishing",
      para: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Nulla Sapien Nulla, Finibus Vel Malesuada Sed."
    },
    {
      title: "Promotion",
      para: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Nulla Sapien Nulla, Finibus Vel Malesuada Sed."
    },
  ];
  // =====================
  const solutionContent = {
    foldBg: foldBg,
    title: (<> TV Interviews <span className="text-primary">Solutions!</span> </>),
    para: "Explore the latest trends in cross-podcasting, focusing on collaboration, innovative formats, and strategies to enhance audience engagement and expand reach.",
    cardData: cardData,
    cardBg: reviewCard,
    bgColor: "bg-white pb-0",
    textColor: "text-black",
    isBg: false
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
      <TvInterview />
      <Publication content={publicationContent} />
      <Trends />
      <Solutions content={solutionContent} />
      <Working content={workingContent} />
      <Expert content={expertContent} />
      <OurClients content={ourClientsContent} />
    </>
  );
}
