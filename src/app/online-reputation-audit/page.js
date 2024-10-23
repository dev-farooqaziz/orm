//=============== Import Components
import { Hero, Advertising, OurReview, Solutions, Working, Expert, OurClients } from "@/components";
//========== Import Icons
import { FaStar } from "react-icons/fa";
//========== Import Hero Images
import BannerImg from "media/audit/heroBanner.png"
//========== Import Fold-Bg
import foldBg from "media/foldBg.png"
//========== Import Advertising Images
import news from "media/audit/news.png"
//========== Import OurReview Images
import review from "media/audit/review.png"
//========== Import Advertising2 Images
import news2 from "media/audit/news2.png"
//========== Import Solutions Images
import reviewCard from "media/reviewCard.png"
//========== Import Working Images
import workingImg from "media/icons/working.png"

export default function Home() {
  //=============== Hero ===============
  const heroContent = {
    title: (<> Online Reputation Audit, <br className="hidden xl:block" /> Review Management, <br className="hidden xl:block" /> and Knowledge <span className="text-primary">Panel Solutions</span> </>),
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
  //=============== Advertising ===============
  const advertisContent = {
    title: (<> Online <br className="hidden xl:block" /> Reputation <span className="text-primary">Audit</span> </>),
    paragraphs: [
      "Podcasts are an innovative way to connect with your audience and share your message. Whether you're discussing industry trends, interviewing experts, or telling compelling stories, we create engaging podcast content that resonates. Our team handles everything from scripting to editing, ensuring a polished final product that captivates listeners.",
      "Elevate your brand with high-quality podcasts that foster engagement and build community. With our expertise, your voice will reach a wider audience, creating lasting connections and driving meaningful conversations.",
    ],
    foldBg: news,
  };
  //=============== OurReview ===============
  const ourReviewContent = {
    title: (<> Review <span className="text-primary block">Management</span> </>),
    paragraphs: [
      "Podcasts are an innovative way to connect with your audience and share your message. Whether you're discussing industry trends, interviewing experts, or telling compelling stories, we create engaging podcast content that resonates. Our team handles everything from scripting to editing, ensuring a polished final product that captivates listeners.",
      "Elevate your brand with high-quality podcasts that foster engagement and build community. With our expertise, your voice will reach a wider audience, creating lasting connections and driving meaningful conversations.",
    ],
    foldBg: review,
  };
  //=============== Advertising2 ===============
  const advertis2Content = {
   title: (<> Google <br className="hidden xl:block" /> Knowledge <span className="text-primary">Panel</span> </>),
    paragraphs: [
      "Podcasts are an innovative way to connect with your audience and share your message. Whether you're discussing industry trends, interviewing experts, or telling compelling stories, we create engaging podcast content that resonates. Our team handles everything from scripting to editing, ensuring a polished final product that captivates listeners.",
      "Elevate your brand with high-quality podcasts that foster engagement and build community. With our expertise, your voice will reach a wider audience, creating lasting connections and driving meaningful conversations.",
    ],
    foldBg: news2,
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
    title: (<> Online Reputation <br className="hidden xl:block" /> Management <span className="text-primary">Solutions</span> </>),
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
      <Advertising content={advertisContent} />
      <OurReview content={ourReviewContent} />
      <Advertising content={advertis2Content} />
      <Solutions content={solutionContent} />
      <Working content={workingContent} />
      <Expert content={expertContent} />
      <OurClients content={ourClientsContent} />
    </>
  );
}
