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
    title: (<> Drive Results with <br className="hidden xl:block" /> Professional Press <span className="text-primary hidden xl:block">Release Services</span> </>),
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
    title: (<> Press Release <span className="text-primary">Services</span> </>),
    para: "Our specialized press release services are designed for various industries, ensuring that your brand's message reaches the right audience with maximum impact.",
    cardBg: cardBg,
    cardBgHvr: cardBgHvr,
  };
  //=============== Press ===============
  const pressContent = {
    title: (<> Amplify Your Brand Voice With <span className="text-primary">Press Releases</span> </>),
    paragraphs: [
      "Press releases are a powerful tool to share your news with the world. From product launches to company milestones, we craft tailored press releases that grab attention. Our distribution channels ensure your story reaches the right audience for maximum impact.",
      "Get your message out there with professionally written press releases. We create compelling content and distribute it to media outlets, driving brand visibility.",
    ],
    foldBg: foldBg,
    foldImg: press,
  };
  //=============== Publication ===============
  const publicantPoints = [
    "Professionally written content",
    "Targeted media outreach",
    "Maximum brand exposure",
    "Quick delivery"
  ];
  // =====================
  const publicationContent = {
    title: (<> Why Choose Our <span className="text-primary block">Press Releases?</span> </>),
    paragraphs: [
      "Our press releases help you stand out in today's competitive landscape. Crafted by experts, we ensure your message is engaging, impactful, and reaches the right audience through targeted media distribution.",
      "We provide a fast turnaround time and a personalized approach that maximizes your brand's visibility and credibility.",
    ],
    subtitle: "Key Benefits:",
    publicantPoints: publicantPoints,
    cta1Txt: "Get Started Today",
    cta2Txt: "Book a Consultation",
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
    title: (<> Our <span className="text-primary">Case Studies</span> </>),
    para: "Each case study highlights real-world examples of how our clients improved their visibility, customer trust, and brand perception, using our comprehensive reputation management strategies.",
    color: "text-white",
    casestudyData: casestudyData,
    arrows: "invert",
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
      <CaseStudy content={casestudyContent} />
      <Working content={workingContent} />
      <Expert content={expertContent} />
      <OurClients content={ourClientsContent} />
    </>
  );
}
