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
    title: (<> Capture Attention with <br className="hidden xl:block" /> Times Square Digital <span className="text-primary">Billboard Ads</span> </>),
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
    title: (<> Times Square Advertising <span className="text-primary">Formats</span> </>),
    para: "Top businesses are winning because they have a single source of truth for their reputation performance. They always know what consumers are saying",
    cardBg: cardBg,
    cardBgHvr: cardBgHvr,
  };
  //=============== Trust ===============
  const trustContent = {
    title: (<> Advertise on Billboards <br className="hidden md:block" /> in <span className="text-primary">Times Square</span> </>),
    paragraphs: [
      "We leverage our expertise to create compelling news articles and publications that capture your audience's attention. Our team conducts thorough research, ensuring that every piece is well-informed and relevant.",
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
    title: (<> How Times SquareDigital <span className="text-primary">Billboards</span> Can Help </>),
    paragraphs: [
      (<> <span className="font-semibold">Times Square advertising and its digital billboards are accessible to companies of all sizes.</span> </>),
      "174 Million People enter the Times Square Bowtie annually.",
      "Approximately 330,000 pass through Times Square Daily (View Source)",
      "53% of Residents are considered high-income, educated young professionals who are mobile and progressively early adopters with cutting-edge retail preferences.",
    ],
    foldBg: review,
  };
  //=============== Solutions ===============
  const cardData = [
    {
      title: "Billboard Advertising",
      para: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Nulla Sapien Nulla, Finibus Vel Malesuada Sed."
    },
    {
      title: "Interactive Installations",
      para: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Nulla Sapien Nulla, Finibus Vel Malesuada Sed."
    },
    {
      title: "Event Sponsorships",
      para: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Nulla Sapien Nulla, Finibus Vel Malesuada Sed."
    },
    {
      title: "Brand Activations",
      para: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Nulla Sapien Nulla, Finibus Vel Malesuada Sed."
    },
  ];
  // =====================
  const solutionContent = {
    foldBg: foldBg,
    title: (<> Times Square Advertising <span className="text-primary">Solutions</span> </>),
    para: "Explore the latest trends in cross-podcasting, focusing on collaboration, innovative formats, and strategies to enhance audience engagement and expand reach.",
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
