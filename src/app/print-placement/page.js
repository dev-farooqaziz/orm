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
    title: (<> Dominate Print Media <br className="hidden md:block" /> with Custom <span className="text-primary">Print <br className="hidden md:block" /> Placement</span> Solutions </>),
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
    title: (<> Transform Your Print Ads with <br className="hidden lg:block" /> Innovative <span className="text-primary">Magazine</span> Design Services </>),
    para: "Discover how top-tier print placement company revolutionize your magazine print ads, ensuring they capture attention and engage your target audience.",
    cardBg: cardBg,
    cardBgHvr: cardBgHvr,
  };
  //=============== Press ===============
  const pressContent = {
    title: (<> Integrated  <span className="text-primary">Print Campaigns</span> that Drive Results Across Every Platform </>),
    paragraphs: [
      "Unlock the full potential of print placement with a strategy and maximize your brand’s exposure with seamless print placement services designed to deliver impactful results. Our tailored print solutions ensure consistent, strategic visibility across all relevant platforms.",
      "From magazines to targeted publications, we handle it all to ensure your print ads leave a lasting impression.",
    ],
    foldBg: foldBg,
    foldImg: press,
  };
  //=============== Publication ===============
  const publicantPoints = [
    "Thorough Research Process",
    "Targeted Audience Reach",
    "Engaging Content Creation",
    "Timely Delivery Assurance"
  ];
  // =====================
  const publicationContent = {
    title: (<> Why Our <span className="text-primary">Print Placement</span> Solutions Stand Out </>),
    paragraphs: [
      "Our print placement services are designed to amplify your brand’s presence in leading magazines. With our expert team, you’ll gain access to thoroughly researched ad placements, targeted audience engagement, and visually captivating content creation that ensures maximum visibility.",
    ],
    publicantPoints: publicantPoints,
    cta1Txt: "Book a Consultation",
    cta2Txt: "Watch Demo",
    foldBg: news,
  };
  //=============== Possibilities ===============
  const cardData = [
    {
      title: "Increased Online Visibility",
      para: "With strategic print placements, your brand can bridge the gap between offline and online audiences, driving more traffic and engagement.",
      img: imagine1,
    },
    {
      title: "SEO Boost",
      para: "Print media placements work hand in hand with digital efforts to elevate your search rankings by creating backlinks from trusted sources.",
      img: imagine2,
    },
    {
      title: "Detailed Storytelling",
      para: "Our expertly crafted print content ensures your brand's story is communicated clearly, engaging readers and leaving a lasting impression.",
      img: imagine3,
    },
  ];
  // =====================
  const possibleContent = {
    foldBg: foldBg,
    title: (<> Achieve Maximum Exposure with <br className="hidden lg:block" /> Tailored <span className="text-primary">Print Solutions</span> </>),
    para: "Our print placement services offer a unique opportunity to enhance your brand’s presence in the most trusted print media. We ensure your message reaches the right audience, increasing visibility and boosting credibility.",
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
