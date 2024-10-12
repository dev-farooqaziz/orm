//=============== Import Components
import { Hero, Releases, Press, Publication, CaseStudy, Working, Expert, OurClients } from "@/components";
//========== Import Icons
import { FaStar } from "react-icons/fa";
//========== Import Hero Images
import BannerImg from "media/press/heroBanner.png"
//========== Import Releases Images
import cardBg from "media/cardBg.png"
import cardBgHvr from "media/cardBgHvr.png"
//========== Import Press Images
import press from "media/press/press.png"
//========== Import Fold-Bg
import foldBg from "media/foldBg.png"
//========== Import Publication Images
import news from "media/press/news.png"
//========== Import CaseStudy Images
import caseStudy from "media/icons/caseStudy.png"
//========== Import Working Images
import workingImg from "media/icons/working.png"

export default function Home() {
  //=============== Hero ===============
  const heroContent = {
    title: (<> Maximize Visibility with Powerful Press <span className="text-primary">Releases</span> </>),
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
    title: (<> Press Releases <span className="text-primary">Services</span> </>),
    para: "Top businesses are winning because they have a single source of truth for their reputation performance. They always know what consumers are saying",
    cardBg: cardBg,
    cardBgHvr: cardBgHvr,
  };
  //=============== Press ===============
  const pressContent = {
    title: (<> Press <span className="text-primary">Releases</span> </>),
    paragraphs: [
      "Press releases are a powerful tool to share your news with the world. From product launches to company milestones, we craft tailored press releases that grab attention. Our distribution channels ensure your story reaches the right audience for maximum impact.",
      "Get your message out there with professionally written press releases. We create compelling content and distribute it to media outlets, driving brand visibility.",
    ],
    foldBg: foldBg,
    foldImg: press,
  };
  //=============== Publication ===============
  const publicantPoints = [
    "Expertly Crafted Content",
    "Targeted Media Distribution",
    "Maximum Brand Visibility",
    "Fast Turnaround Time"
  ];
  // =====================
  const publicationContent = {
    title: (<> Why Choose Our <span className="text-primary block">Press Releases?</span> </>),
    paragraphs: [
      "Our press releases are crafted by industry experts, ensuring your message is clear, impactful, and newsworthy. With targeted distribution to top media outlets, we help you reach the right audience for maximum visibility.",
      "Plus, our fast turnaround and personalized approach guarantee your brand stands out in today’s competitive media landscape.",
    ],
    publicantPoints: publicantPoints,
    foldBg: news,
  };
  //=============== CaseStudy ===============
  const casestudyData = [
    {
      title: (<> Tamarack RV Park and <br className="hidden lg:block" /> Vacation Cabins </>),
      description: "Top businesses are winning because they have a single source of truth for their reputation performance.",
      tag: "Recreation",
      name: "Coeur d'Alene, ID",
      date: "Customer Since 2018",
      slideImg: caseStudy,
    },
    {
      title: (<> Tamarack RV Park and <br className="hidden lg:block" /> Vacation Cabins </>),
      description: "Top businesses are winning because they have a single source of truth for their reputation performance.",
      tag: "Recreation",
      name: "Coeur d'Alene, ID",
      date: "Customer Since 2018",
      slideImg: caseStudy,
    },
    {
      title: (<> Tamarack RV Park and <br className="hidden lg:block" /> Vacation Cabins </>),
      description: "Top businesses are winning because they have a single source of truth for their reputation performance.",
      tag: "Recreation",
      name: "Coeur d'Alene, ID",
      date: "Customer Since 2018",
      slideImg: caseStudy,
    },
  ];
  // =====================
  const casestudyContent = {
    bg: "bg-black",
    title: (<> Our <span className="text-primary">Casestudy</span> </>),
    para: "Top businesses are winning because they have a single source of truth for their reputation performance. They always know what consumers are saying about them and can",
    color: "text-white",
    casestudyData: casestudyData,
    arrows: "invert",
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
      <Press content={pressContent} />
      <Publication content={publicationContent} />
      <CaseStudy content={casestudyContent} />
      <Working content={workingContent} />
      <Expert content={expertContent} />
      <OurClients content={ourClientsContent} />
    </>
  );
}
