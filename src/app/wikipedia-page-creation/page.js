//=============== Import Components
import { Hero, Live, Publication, Wikipedia, Working, Expert, OurClients } from "@/components";
//========== Import Icons
import { FaStar } from "react-icons/fa";
//========== Import Hero Images
import BannerImg from "media/wikipedia/heroBanner.png"
//========== Import Live Images
import press from "media/wikipedia/press.png"
//========== Import Fold-Bg
import foldBg from "media/foldBg.png"
//========== Import Publication Images
import news from "media/wikipedia/news.png"
//========== Import Wikipedia Images
import WikipediacardBg from "media/wikipedia/cardBg.png"
//========== Import Working Images
import workingImg from "media/icons/working.png"

export default function Home() {
  //=============== Hero ===============
  const heroContent = {
    title: (<> Get Recognized with <br /> the Best <span className="text-primary">Wikipedia Page Creation</span> Services </>),
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
  //=============== Live ===============
  const livePoints = [
    "Expert Content Creation",
    "Targeted Audience Reach",
    "Fast Turnaround Time",
    "Ongoing Maintenance Services"
  ];
  // =====================
  const liveContent = {
    title: (<> Professional Wikipedia Page <span className="text-primary">Creation</span> </>),
    paragraphs: [
      (<> A well-crafted Wikipedia page is an essential asset for anyone looking to enhance their online reputation and authority. Our <span className="font-semibold">Wikipedia Page Creation</span> services help you build a credible presence by creating an accurate, detailed, and professionally written Wikipedia page.  </>),
      "Our process includes extensive research, expert writing, and compliance with Wikipedia’s standards.",
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
    title: (<> Why Choose Our Wikipedia Page <span className="text-primary inline lg:block">Creation Service?</span> </>),
    paragraphs: [
      (<> Our <span className="font-semibold">Wikipedia Page Creation</span> team ensures every page is thoroughly researched, expertly written, and fully compliant with Wikipedia’s strict guidelines. We take every step to make sure your page reflects your achievements and expertise. </>),
    ],
    publicantPoints: publicantPoints,
    cta1Txt: "Book a Consultation",
    cta2Txt: "Watch Demo",
    foldBg: news,
  };
  //=============== Wikipedia ===============
  const cardData = [
    {
      title: "Enhanced Authority",
      para: "A Wikipedia page boosts your credibility, positioning you as an expert or leader in your industry. Being featured on a globally trusted platform lends significant authority to your brand."
    },
    {
      title: "Increased Online Visibility",
      para: "A well-written and optimized Wikipedia page can improve your online visibility. With Wikipedia ranking high on search engines, your brand will be more easily discoverable, helping you reach a broader audience."
    },
    {
      title: "SEO Boost",
      para: "Wikipedia’s strong domain authority can help improve your search engine rankings. A Wikipedia page with relevant backlinks and keywords can drive organic traffic to your website, boosting your SEO efforts."
    },
    {
      title: "Detailed Storytelling",
      para: "Share your brand’s journey, achievements, and milestones in a structured, informative format. A Wikipedia page allows you to present your story in a detailed, engaging manner that resonates with readers."
    },
  ];
  // =====================
  const wikipediaContent = {
    foldBg: foldBg,
    title: (<> Benefits of Wikipedia Page <span className="text-primary">Creation</span> </>),
    para: (<> Our <span className="font-semibold">Wikipedia Page Creation Services</span> offer numerous advantages that enhance your brand’s online presence and reputation. By leveraging the power of a well-crafted Wikipedia page, your business or personal brand can experience the following benefits: </>),
    cardData: cardData,
    cardBg: WikipediacardBg,
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
      <Live content={liveContent} />
      <Publication content={publicationContent} />
      <Wikipedia content={wikipediaContent} />
      <Working content={workingContent} />
      <Expert content={expertContent} />
      <OurClients content={ourClientsContent} />
    </>
  );
}
