//=============== Import Components
import { Hero, Releases, AudioPress, Publication, Working, Expert, OurClients } from "@/components";
//========== Import Icons
import { FaStar } from "react-icons/fa";
//========== Import Hero Images
import BannerImg from "media/podcasts/heroBanner.png"
//========== Import Releases Images
import cardBg from "media/cardBg.png"
import cardBgHvr from "media/cardBgHvr.png"
//========== Import Press Images
import press from "media/podcasts/press.png"
//========== Import Fold-Bg
import foldBg from "media/foldBg.png"
//========== Import Publication Images
import news from "media/podcasts/news.png"
//========== Import Working Images
import workingImg from "media/icons/working.png"

export default function Home() {
  //=============== Hero ===============
  const heroContent = {
    title: (<> Engage Your Audience with Compelling, Professional <span className="text-primary">Podcasts</span> </>),
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
    title: (<> Explore Latest <span className="text-primary">Podcast</span> </>),
    para: "Top businesses are winning because they have a single source of truth for their reputation performance. They always know what consumers are saying",
    cardBg: cardBg,
    cardBgHvr: cardBgHvr,
  };
  //=============== Press ===============
  const pressContent = {
    title: (<> Craft Your Story with <span className="text-primary">Impactful Podcasts</span> </>),
    paragraphs: [
      "Podcasts are an innovative way to connect with your audience and share your message. Whether you're discussing industry trends, interviewing experts, or telling compelling stories, we create engaging podcast content that resonates. Our team handles everything from scripting to editing, ensuring a polished final product that captivates listeners.",
      "Elevate your brand with high-quality podcasts that foster engagement and build community. With our expertise, your voice will reach a wider audience, creating lasting connections and driving meaningful conversations.",
    ],
    foldBg: foldBg,
    foldImg: press,

  };
  //=============== Publication ===============
  const publicantPoints = [
    "Engaging Audio Content",
    "Targeted Audience Reach",
    "Expert Production Services",
    "Quick Turnaround Time"
  ];
  // =====================
  const publicationContent = {
    title: (<> Why Choose Our <span className="text-primary block">Podcasts?</span> </>),
    paragraphs: [
      "Our podcasts are crafted by industry experts, ensuring your message is engaging, impactful, and relevant. With our extensive network, we help you reach the right audience for maximum visibility and connection.",
      "Additionally, our quick turnaround and personalized approach guarantee that your brand stands out in today’s competitive audio landscape.",
    ],
    publicantPoints: publicantPoints,
    foldBg: news,
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
      <AudioPress content={pressContent} />

      <Publication content={publicationContent} />

      <Working content={workingContent} />
      <Expert content={expertContent} />
      <OurClients content={ourClientsContent} />
    </>
  );
}
