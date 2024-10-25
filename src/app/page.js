//=============== Import Components
import { Hero, What, Podcast, Publication, Live, Choose, Benefits, Interviews, BuyReviews, Billboard, CaseStudy, Working, Expert, OurClients } from "@/components";
//========== Import Icons
import { FaStar } from "react-icons/fa";
//========== Import Hero Images
import BannerImg from "media/home/heroBanner.png"
//========== Import What Images
import cardBg from "media/cardBg.png"
import cardBgHvr from "media/cardBgHvr.png"
import ctaCardBg from "media/ctaCardBg.png"
//========== Import What Images
import foldBg from "media/foldBg.png"
//========== Import Podcast Images
import slide1 from "media/home/slide1.png"
import slide2 from "media/home/slide2.png"
import slide3 from "media/home/slide3.png"
import slide4 from "media/home/slide4.png"
import microphone from "media/icons/microphone.png"
import clock from "media/icons/clock.png"
import folder from "media/icons/folder.png"
//========== Import Publication Images
import news from "media/home/news.png"
//========== Import Live Images
import live from "media/home/live.png"
//========== Import Benifits Images
import benifits from "media/home/benefits.png"
//========== Import Interviews Images
import interviews from "media/home/interviews.png"
//========== Import Buy Reviews Images
import reviewCard from "media/reviewCard.png"
import reviewIcon1 from "media/reviewIcons/reviewIcon1.png"
import reviewIcon2 from "media/reviewIcons/reviewIcon2.png"
import reviewIcon3 from "media/reviewIcons/reviewIcon3.png"
import reviewIcon4 from "media/reviewIcons/reviewIcon4.png"
import reviewIcon5 from "media/reviewIcons/reviewIcon5.png"
import reviewIcon6 from "media/reviewIcons/reviewIcon6.png"
//========== Import Billboard Images
import billBoardBg from "media/home/billBoardBg.png"
//========== Import CaseStudy Images
import caseStudy from "media/icons/caseStudy.png"
//========== Import Working Images
import workingImg from "media/icons/working.png"

export default function Home() {
  //=============== Hero ===============
  const heroContent = {
    title: (<> Power Up Your Brand Presence with Expert <span className="text-primary"><br className="hidden md:block" />Online Reputation Management</span> Services </>),
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
    showDesc: false
  };
  //=============== What ===============
  const cardsData = [
    {
      title: "Online Reputation Audit",
      description: "Analyze your brand to identify strengths, weaknesses, and areas for improvement.",
    },
    {
      title: "Positive Search Results",
      description: "Improve your online visibility by optimizing search engine results for your brand.",
    },
    {
      title: "Press Releases",
      description: "Craft professional press releases that boost your brand’s visibility and engage your target audience.",
    },
    {
      title: "Review Management",
      description: "Build credibility by generating positive reviews and addressing negative feedback swiftly.",
    },
    {
      title: "Podcasts",
      description: "Create engaging podcasts that showcase your expertise and expand your brand’s reach.",
    },
    {
      title: "News / Article Publications",
      description: "Get featured in top publications to improve your brand’s authority and credibility.",
    },
    {
      title: "Wikipedia Page Creation",
      description: "Establish online credibility with a well-crafted Wikipedia page for your business.",
    },
    {
      title: "Print Placement (Magazine)",
      description: "Gain offline exposure with strategic magazine placements to enhance brand visibility.",
    },
    {
      title: "Google Knowledge Panel",
      description: "Optimize your business for Google Knowledge Panel for increased search visibility.",
    },
    {
      title: "TV Interviews",
      description: "Showcase your brand on television through curated interviews that reach a broad audience.",
    },
  ];
  // =====================
  const whatContent = {
    title: (<> <span className="text-primary">What We</span> Do </>),
    para: "Top businesses succeed by leveraging expert online reputation management. Here’s how we elevate your digital presence and safeguard your brand:",
    cardBg: cardBg,
    cardBgHvr: cardBgHvr,
    cardsData: cardsData,
    ctaTitle: "Take Charge of Your Reputation Today!",
    ctaPara: "Discover how our tailored solutions can enhance your online presence and drive success. Get a free estimate for your project now!",
    ctaCardBg: ctaCardBg,
  };
  //=============== Podcast ===============
  const podcastData = [
    {
      slideImg: slide1,
      title: "Talk: Future of Marketing",
      description: "Analyze your online presence to identify strengths and weaknesses for improvement strategies.",
      tags: [
        { icon: microphone, label: "Sarah" },
        { icon: clock, label: "6Hr 30M" },
        { icon: folder, label: "Technology" }
      ],
    },
    {
      slideImg: slide2,
      title: "Uncovering Ancient Mysteries",
      description: "Explore the depths of ancient civilizations and their mysteries for improvement strategies.",
      tags: [
        { icon: microphone, label: "James" },
        { icon: clock, label: "6Hr 30M" },
        { icon: folder, label: "History" }
      ],
    },
    {
      slideImg: slide3,
      title: "Economic Insights: Global Markets",
      description: "Delve into the complexities of global economies and market trends for improvement strategies.",
      tags: [
        { icon: microphone, label: "David" },
        { icon: clock, label: "6Hr 30M" },
        { icon: folder, label: "Business" }
      ],
    },
    {
      slideImg: slide4,
      title: "Mindful Living: Finding Inner Peace",
      description: "Discover techniques for living a more mindful and peaceful life for improvement strategies.",
      tags: [
        { icon: microphone, label: "Emily" },
        { icon: clock, label: "6Hr 30M" },
        { icon: folder, label: "Health" }
      ],
    },
  ];
  // =====================
  const podcastContent = {
    title: (<> Top Trending <span className="text-primary">Podcast!</span> </>),
    para: "Insightful conversations, expert interviews, and engaging stories that delve into [topic/industry/interest]. Whether you’re looking for inspiration, the latest trends, or just a fresh perspective, our episodes offer something for everyone. Join us each week for a new episode that will keep you informed and entertained.",
    foldBg: foldBg,
    podcastData: podcastData,
  };
  //=============== Publication ===============
  const publicantPoints = [
    "Inspection and Assessment",
    "Continued Execution",
    "Coherence Verified",
    "Delivery"
  ];
  // =====================
  const publicationContent = {
    title: (<> News / Article <span className="text-primary inline lg:block">Publication</span> </>),
    paragraphs: [
      "Get your brand featured in leading news outlets and industry-specific publications to build credibility and authority. Our expert team creates compelling, high-quality content that is strategically placed in trusted media sources that enhance your online reputation.",
    ],
    publicantPoints: publicantPoints,
    cta1Txt: "Book a Consultation",
    cta2Txt: "Watch Demo",
    foldBg: news,
  };
  //=============== Live ===============
  const livePoints = [
    "On-Demand Expertise",
    "Collaborative Problem-Solving",
    "Audience-Driven Content",
    "Tailored Advice"
  ];
  // =====================
  const liveContent = {
    title: "Live Session",
    paragraphs: [
      "Step into a world of dynamic, live discussions tailored to the needs of modern businesses. Our live sessions connect you with top industry experts, offering interactive experiences where you can ask questions, share ideas, and gain fresh perspectives.",
    ],
    livePoints: livePoints,
    foldBg: foldBg,
    foldImg: live,
  };
  //=============== Benefits ===============
  const benefitsContent = {
    title: (<> How it <span className="text-primary">Benefits</span> You </>),
    para: "Leading businesses succeed because they track their reputation in real time. With actionable insights at your fingertips, you can stay ahead of public sentiment and make smarter decisions. Boost your brand’s credibility with verified, trustworthy reviews that customers can depend on.",
    foldImg: benifits
  };
  //=============== Interviews ===============
  const interviewsContent = {
    title: (<> Exclusive Insights from <span className="text-primary">Industry Leaders</span> </>),
    para: (<> Gain access to exclusive TV interviews where top industry experts share their knowledge, best practices, and strategies for success. Whether you're seeking cutting-edge trends in <span className="font-semibold">online reputation management</span> or actionable advice from <span className="font-semibold">business leaders</span>, our TV interviews deliver invaluable insights to help you grow. </>),
    foldBg: foldBg,
    foldImg: interviews,
  };
  //=============== Buy Reviews ===============
  const reviewData = [
    {
      title: "Google Reviews",
      description: "Boost your business presence by increasing positive feedback on Google. Identify key areas for improvement and elevate your brand image.",
      icon: reviewIcon1
    },
    {
      title: "Sitejabber",
      description: "Increase trust and online visibility with genuine reviews on Sitejabber, driving traffic and conversions.",
      icon: reviewIcon2
    },
    {
      title: "Goodfirms",
      description: "Craft targeted reviews on GoodFirms to improve your search rankings and enhance business credibility.",
      icon: reviewIcon3
    },
    {
      title: "Trustpilot",
      description: "Strengthen your online presence with verified, reliable reviews on Trustpilot that build long-lasting customer trust.",
      icon: reviewIcon4
    },
    {
      title: "Clutch",
      description: "Position your business as a leader with positive reviews on Clutch, tailored for the B2B market.",
      icon: reviewIcon5
    },
    {
      title: "Facebook",
      description: "Enhance your brand’s visibility on the world’s largest social platform with authentic customer reviews.",
      icon: reviewIcon6
    }
  ];
  // =====================
  const buyReviewsContent = {
    title: (<> Buy Positive <span className="text-primary">Reviews</span> </>),
    para: "Our review solutions help you enhance credibility and visibility across major platforms.",
    cardBg: reviewCard,
    cardsData: reviewData,
  };
  //=============== Billboard ===============
  const billboardContent = {
    title: (<> Billboard In Times Square, <span className="text-primary">New York</span> </>),
    para: "Times Square, a major tourist attraction known for  its iconic outdoor advertising, giant billboards, and digital displays,  makes it one of the world's most photographed landmarks",
    foldBg: billBoardBg,
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
    bg: "bg-white",
    title: (<> Our <span className="text-primary">Case Studies</span> </>),
    para: "Each case study highlights real-world examples of how our clients improved their visibility, customer trust, and brand perception, using our comprehensive reputation management strategies.",
    color: "text-black",
    isBlack: true,
    casestudyData: casestudyData,
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
      <What content={whatContent} />
      <Podcast content={podcastContent} />
      <Publication content={publicationContent} />
      <Live content={liveContent} />
      <Choose />
      <Benefits content={benefitsContent} />
      <Interviews content={interviewsContent} />
      <BuyReviews content={buyReviewsContent} />
      <Billboard content={billboardContent} />
      <CaseStudy content={casestudyContent} />
      <Working content={workingContent} />
      <Expert content={expertContent} />
      <OurClients content={ourClientsContent} />
    </>
  );
}
