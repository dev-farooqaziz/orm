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
    title: (<> Get Your Message <br className="hidden lg:block" /> on Screen with Custom <span className="text-primary lg:block">TV Interview Services</span> </>),
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
    cta1Txt: "Book Consultation",
    cta2Txt: "Watch Demo",
    BannerImg: BannerImg,
    showDesc: false
  };
  //=============== Releases ===============
  const releasesContent = {
    title: (<> The Most Advanced, All-In-One <br className="hidden lg:block" />  <span className="text-primary">TV Interview</span> Recording Services </>),
    para: (<> Our <span className="font-semibold">TV Interview Recording Services</span> are designed to provide you with professional-grade recordings that capture the essence of your message and elevate your brand. </>),
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
    title: (<> What Can TV <span className="text-primary">Placement</span> Do <br className="hidden lg:block" /> For You? </>),
    paragraphs: [
      (<> Our <span className="font-semibold">TV Placement</span> services are designed to position you as a thought leader in your industry. We ensure that your message reaches your target audience through strategic placement on popular TV programs. </>),
    ],
    publicantPoints: publicantPoints,
    cta1Txt: "Book a Consultation",
    cta2Txt: "Watch Demo",
    foldBg: news,
  };
  //=============== Solutions ===============
  const cardData = [
    {
      title: "Reputation Analysis",
      para: "We help you analyze your brand's reputation to identify strengths and areas for improvement, ensuring better TV interview success."
    },
    {
      title: "Content Creation",
      para: "Our team crafts compelling content that captivates your audience, tailored to meet your brand’s goals and messaging needs effectively."
    },
    {
      title: "Publishing",
      para: "Get your TV interviews published on popular platforms with our expert services, expanding your visibility and audience reach effortlessly."
    },
    {
      title: "Promotion",
      para: "Promote your TV interviews to the right audience, using targeted strategies that maximize engagement, views, and brand exposure rapidly."
    },
  ];
  // =====================
  const solutionContent = {
    foldBg: foldBg,
    title: (<> TV Interview <span className="text-primary">Solutions</span> for <br className="hidden lg:block" /> Enhanced Brand Exposure </>),
    para: "Our expert-led solutions focus on tailored reputation analysis, compelling content creation, seamless publishing, and impactful promotions, ensuring your TV interviews achieve measurable results. ",
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
