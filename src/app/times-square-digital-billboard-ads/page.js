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
