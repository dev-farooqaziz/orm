//=============== Import Components
import { Hero, Releases, Trust, Publication, Press, Working, Expert, OurClients } from "@/components";
//========== Import Icons
import { FaStar } from "react-icons/fa";
//========== Import Hero Images
import BannerImg from "media/news/heroBanner.png"
//========== Import Releases Images
import cardBg from "media/cardBg.png"
import cardBgHvr from "media/cardBgHvr.png"
//========== Import Trust Images
import trust from "media/news/trust.png"
//========== Import Fold-Bg
import foldBg from "media/foldBg.png"
//========== Import Publication Images
import news from "media/news/news.png"
//========== Import Press Images
import press from "media/news/press.png"
//========== Import Working Images
import workingImg from "media/icons/working.png"

export default function Home() {
  //=============== Hero ===============
  const heroContent = {
    title: (<> Reach Top-Tier Media <br className="hidden md:block" /> with Our Expert News <br className="hidden md:block" /> And <span className="text-primary">Publication Services</span> </>),
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
    cta1Txt: "Book a Consultation",
    cta2Txt: "Watch Demo",
    BannerImg: BannerImg,
  };
  //=============== Releases ===============
  const releasesContent = {
    title: (<> News and Article Publication <span className="text-primary">Services</span> </>),
    para: (<> Gain widespread visibility and establish your brand’s authority with our expert <span className="font-semibold">News and Article Publication services</span>. Let us help you reach new audiences and solidify your standing in the industry. </>),
    cardBg: cardBg,
    cardBgHvr: cardBgHvr,
  };
  //=============== Trust ===============
  const trustContent = {
    title: (<> Get Featured on 200+ News Sites with Our News and Article <span className="text-primary">Publication Services</span> </>),
    paragraphs: [
      (<> Boost your brand’s credibility by leveraging our <span className="font-semibold">News and Article Publication services</span>. We help you publish articles across major news outlets, enhancing your reputation and establishing trust with your audience. We understand that timely publication is critical to success, which is why we work with a vast network of <span className="font-semibold">News and Article publishers</span> to ensure your articles are placed in front of a wide audience. </>),

      "From writing to editing, we manage the entire process for you, ensuring your message is polished and impactful.",
    ],
    foldBg: foldBg,
    foldImg: trust,
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
    title: (<> Delivering Exceptional News and Article <span className="text-primary">Publication</span> </>),
    paragraphs: [
      (<> We excel at delivering impactful <span className="font-semibold">News and Article Publication services</span> that resonate with your target audience. Our team conducts thorough research and crafts compelling content that ensures your message is not only heard but remembered. </>),
    ],
    publicantPoints: publicantPoints,
    cta1Txt: "Book a Consultation",
    cta2Txt: "Watch Demo",
    foldBg: news,
  };
  //=============== Press ===============
  const pressContent = {
    title: (<> Stand Out with Professional <span className="text-primary">News and Article</span> Publication Designs </>),
    paragraphs: [
      (<> Our <span className="font-semibold">News and Article Publication services</span> create compelling, well-designed content that keeps your audience engaged. We partner with top news platforms, ensuring your articles reach the right eyes and build your brand's credibility. </>),
    ],
    foldBg: foldBg,
    foldImg: press,
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
      <Trust content={trustContent} />
      <Publication content={publicationContent} />
      <Press content={pressContent} />
      <Working content={workingContent} />
      <Expert content={expertContent} />
      <OurClients content={ourClientsContent} />
    </>
  );
}
