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
      <span className="flex flex-col md:flex-row items-center gap-2">
        4.6/5.0
        <span className="flex gap-1 mb-1">
          <FaStar className="text-[15px] md:text-[13px] text-[#FFA909]" />
          <FaStar className="text-[15px] md:text-[13px] text-[#FFA909]" />
          <FaStar className="text-[15px] md:text-[13px] text-[#FFA909]" />
          <FaStar className="text-[15px] md:text-[13px] text-[#FFA909]" />
          <FaStar className="text-[15px] md:text-[13px] text-[#FFA909]" />
        </span>
        15+ Businesses, 35+ Happy clients.
      </span>
    </>),
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
    title: (<> Just By <span className="text-primary">Working With US.</span> </>),
    para: "Top businesses are winning because they have a single source of truth for their reputation performance. They always know what consumers are saying",
    workingImg: workingImg,
  };
  //=============== Expert ===============
  const expertContent = {
    title: "Boost Your Reputation – Contact Our Experts Today",
    para: "Top Businesses Are Winning Because They Have A Single Source Of Truth For Their Reputation Performance. They Always Know What Consumers Are Saying About Them And Can Always Act On Those Insights.",
    foldBg: foldBg,
  };
  //=============== OurClients ===============
  const ourClientsContent = {
    title: (<> <span className="text-primary">Our Client's</span> Review </>),
    para: "Top businesses are winning because they have a single source of truth for their reputation performance. They always know what consumers are saying",
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
