//=============== Import Components
import { Hero, Releases, AudioPress, OurAudios, Publication, Cross, Working, Expert, OurClients, } from "@/components";
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
    title: (<> Drive Audience <br className="hidden xl:block" /> Engagement with Professional <span className="text-primary">Podcast Services</span> </>),
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
  };
  //=============== Releases ===============
  const releasesContent = {
    title: (<> Explore Latest <span className="text-primary">Podcast</span> </>),
    para: "Enhance your brand’s storytelling with our podcast recording services. We offer a full suite of solutions to help you create engaging, high-quality podcasts. From sound engineering to post-production, our experts ensure every episode sounds professional.",
    cardBg: cardBg,
    cardBgHvr: cardBgHvr,
  };
  //=============== Press ===============
  const pressContent = {
    title: (<> Share Your Voice with High-Quality <span className="text-primary">Podcast Recording Services</span> </>),
    paragraphs: [
      (<> Ready to launch your podcast and connect with your audience on a deeper level? Our <span className="font-semibold">podcast recording services</span> provide everything you need to create polished, professional episodes that stand out. Whether you’re diving into industry insights or sharing personal stories, we handle the recording, editing, and distribution, ensuring your podcast shines. </>),
      "With expert audio production and tailored services, your voice will reach more listeners and foster genuine engagement.",
    ],
    foldBg: foldBg,
    foldImg: press,

  };
  //=============== Publication ===============
  const publicantPoints = [
    "Engaging Audio Content",
    "Expert Production Services",
    "Targeted Audience Reach",
    "Quick Turnaround"
  ];
  // =====================
  const publicationContent = {
    title: (<> Why Choose Our <span className="text-primary block">Podcast Services?</span> </>),
    paragraphs: [
      "Our podcasts are crafted with precision by industry experts, ensuring that your message is clear, engaging, and impactful. With access to an extensive distribution network, we guarantee that your podcast reaches the right audience for maximum exposure and connection.",
      "Additionally, we offer fast turnaround times, expert production services, and a personalized approach, ensuring your brand stands out in today’s dynamic audio landscape.",
    ],
    subtitle: "What We Offer:",
    publicantPoints: publicantPoints,
    cta1Txt: "Book a Consultation",
    cta2Txt: "Watch Demo",
    foldBg: news,
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
      <AudioPress content={pressContent} />
      <OurAudios />
      <Publication content={publicationContent} />
      <Cross />
      <Working content={workingContent} />
      <Expert content={expertContent} />
      <OurClients content={ourClientsContent} />
    </>
  );
}
