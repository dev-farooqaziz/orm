//=============== Import Components
import { Hero, Releases, Trust, Advertising, OurReview, Solutions, Working, Expert, OurClients } from "@/components";
//========== Import Icons
import { FaStar } from "react-icons/fa";
//========== Import Hero Images
import BannerImg from "media/billboard/heroBanner.png"
//========== Import Releases Images
import cardBg from "media/cardBg.png"
import cardBgHvr from "media/cardBgHvr.png"
//========== Import Trust Images
import trust from "media/billboard/trust.png"
//========== Import Fold-Bg
import foldBg from "media/foldBg.png"
//========== Import Advertising Images
import news from "media/billboard/news.png"
//========== Import OurReview Images
import review from "media/billboard/review.png"
//========== Import Solutions Images
import reviewCard from "media/reviewCard.png"
//========== Import Working Images
import workingImg from "media/icons/working.png"

export default function Home() {
  //=============== Hero ===============
  const heroContent = {
    title: (<> Make Waves with <br className="hidden md:block" /> Powerful Times Square <span className="text-primary inline md:block">Digital Billboard Ads</span> </>),
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
    title: (<> Times Square Digital <br className="hidden lg:block" /> Billboard Advertising <span className="text-primary">Formats</span> </>),
    para: (<> Explore how <i>Times Square digital billboard advertising</i> can elevate your brand and deliver unmatched exposure in one of the world’s busiest commercial hubs. </>),
    cardBg: cardBg,
    cardBgHvr: cardBgHvr,
  };
  //=============== Trust ===============
  const trustContent = {
    title: (<> Unmatched Visibility Through <br className="hidden lg:block" /> New York <span className="text-primary">Billboard Advertising</span> </>),
    paragraphs: [
      (<> Our team specializes in creating dynamic, attention-grabbing campaigns that resonate with viewers, <br className="hidden lg:block" /> making sure your brand stands out amidst the vibrant energy of Times Square. </>),
    ],
    foldBg: foldBg,
    foldImg: trust,
    counts: true,
  };
  //=============== Advertising ===============
  const publicationContent = {
    title: (<> Digital Billboards Transform <span className="text-primary inline lg:block">Advertising</span> </>),
    paragraphs: [
      (<> <span className="font-semibold">Times Square advertising and its digital billboards are accessible to companies of all sizes.</span> </>),
      "174 Million People enter the Times Square Bowtie annually.",
      "Approximately 330,000 pass through Times Square Daily (View Source)",
      "53% of Residents are considered high-income, educated young professionals who are mobile and progressively early adopters with cutting-edge retail preferences.",
    ],
    foldBg: news,
  };
  //=============== OurReview ===============
  const ourReviewContent = {
    bgColor: "bg-white",
    textColor: "text-black",
    title: (<> Why Times Square Digital <span className="text-primary">Billboards</span> Are Perfect for Interactive Campaigns </>),
    paragraphs: [
      (<> <span className="font-semibold">Times Square digital billboards</span> do more than just showcase your brand — they allow for highly interactive and engaging campaigns. </>),
      "These billboards let you display dynamic, real-time content, from live updates to interactive elements that encourage audience participation.",
      (<> The flexibility and impact of <span className="font-semibold">digital billboards in Times Square</span> make them the perfect tool for brands that want to be remembered. </>),
      "The result? A truly immersive experience that captivates the audience and creates a lasting impression.",
    ],
    foldBg: review,
  };
  //=============== Solutions ===============
  const cardData = [
    {
      title: "Billboard Advertising",
      para: (<> Reach millions of people daily with high-impact <span className="font-semibold">Times Square digital billboards</span>. Perfect for promoting new products, building brand awareness, and making a lasting impression. </>)
    },
    {
      title: "Interactive Installations",
      para: (<> Engage your audience with immersive <span className="font-semibold">interactive displays</span> that invite participation and create memorable experiences in the heart of Times Square. </>)
    },
    {
      title: "Event Sponsorships",
      para: "Align your brand with exciting events in Times Square to tap into live crowds and generate buzz for your business. A powerful way to connect with target audiences."
    },
    {
      title: "Brand Activations",
      para: "Bring your brand to life with experiential marketing in Times Square. Create direct, in-person interactions that leave a lasting impact on both locals and visitors."
    },
  ];
  // =====================
  const solutionContent = {
    foldBg: foldBg,
    title: (<> Times Square Advertising <span className="text-primary">Solutions</span> </>),
    para: (<> Explore the best ways to captivate your audience with innovative <span className="font-semibold">Times Square advertising</span> solutions. From creative displays to strategic event partnerships, we offer multiple formats to maximize your brand’s reach and engagement. </>),
    cardData: cardData,
    cardBg: reviewCard,
    bgColor: "bg-[#000000] lg:bg-none pb-12 lg:pb-20",
    textColor: "text-white",
    isBg: true
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
      <Advertising content={publicationContent} />
      <OurReview content={ourReviewContent} />
      <Solutions content={solutionContent} />
      <Working content={workingContent} />
      <Expert content={expertContent} />
      <OurClients content={ourClientsContent} />
    </>
  );
}
