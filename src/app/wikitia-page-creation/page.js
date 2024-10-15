//=============== Import Components
import { Hero, Releases, Live, Publication, Wikitia, Working, Expert, OurClients } from "@/components";
//========== Import Icons
import { FaStar } from "react-icons/fa";
//========== Import Hero Images
import BannerImg from "media/wikitia/heroBanner.png"
//========== Import Releases Images
import cardBg from "media/cardBg.png"
import cardBgHvr from "media/cardBgHvr.png"
//========== Import Live Images
import press from "media/wikitia/press.png"
//========== Import Fold-Bg
import foldBg from "media/foldBg.png"
//========== Import Publication Images
import news from "media/wikitia/news.png"
//========== Import Wikitia Images
import WikitiacardBg from "media/wikitia/cardBg.png"
//========== Import Working Images
import workingImg from "media/icons/working.png"

export default function Home() {
  //=============== Hero ===============
  const heroContent = {
    title: (<> Establish Your Online Presence with Expert <span className="text-primary">Wikitia Page Creation</span> </>),
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
    title: (<> Wikitia Page Creation <span className="text-primary">Services</span> </>),
    para: "Top businesses are winning because they have a single source of truth for their reputation performance. They always know what consumers are saying",
    cardBg: cardBg,
    cardBgHvr: cardBgHvr,
  };
  //=============== Live ===============
  const livePoints = [
    "Engaging Audio Content",
    "Targeted Audience Reach",
    "Expert Production Services",
    "Quick Turnaround Time"
  ];
  // =====================
  const liveContent = {
    title: (<> Professional Wikitia Page <span className="text-primary">Creation</span> </>),
    paragraphs: [
      "Wikitia pages are a powerful way to enhance your online presence and showcase your achievements. Whether you're building personal credibility, promoting your brand, or sharing important milestones, we create expertly crafted Wikitia pages that capture attention.",
      "Elevate your brand with a high-quality Wikitia page that boosts credibility and visibility.",
    ],
    livePoints: livePoints,
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
    title: (<> Why Choose Our Wikitia Page <span className="text-primary block">Creation Service?</span> </>),
    paragraphs: [
      "We leverage our expertise to create compelling news articles and publications that capture your audience's attention. Our team conducts thorough research, ensuring that every piece is well-informed and relevant.",
    ],
    publicantPoints: publicantPoints,
    foldBg: news,
  };
  //=============== Wikitia ===============
  const cardData = [
    {
      title: "Enhanced Authority",
      para: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Nulla Sapien Nulla, Finibus Vel Malesuada Sed. Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Nulla Sapien Nulla, Finibus Vel Malesuada Sed."
    },
    {
      title: "Increased Online Visibility",
      para: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Nulla Sapien Nulla, Finibus Vel Malesuada Sed. Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Nulla Sapien Nulla, Finibus Vel Malesuada Sed."
    },
    {
      title: "SEO Boost",
      para: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Nulla Sapien Nulla, Finibus Vel Malesuada Sed. Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Nulla Sapien Nulla, Finibus Vel Malesuada Sed."
    },
    {
      title: "Detailed Storytelling",
      para: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Nulla Sapien Nulla, Finibus Vel Malesuada Sed. Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Nulla Sapien Nulla, Finibus Vel Malesuada Sed."
    },
  ];
  // =====================
  const wikitiaContent = {
    foldBg: foldBg,
    title: (<> Benefits of Wikitia Page <span className="text-primary">Creation</span> </>),
    para: "We leverage our expertise to create compelling news articles and publications that capture your audience's attention. Our team conducts thorough research, ensuring that every piece is well-informed and relevant.",
    cardData: cardData,
    cardBg: WikitiacardBg,
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
      <Live content={liveContent} />
      <Publication content={publicationContent} />
      <Wikitia content={wikitiaContent} />
      <Working content={workingContent} />
      <Expert content={expertContent} />
      <OurClients content={ourClientsContent} />
    </>
  );
}
