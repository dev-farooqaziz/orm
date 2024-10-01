//=============== Import Components
import { Hero, What, Podcast, Publication, Live, Choose, Benefits, Interviews, BuyReviews, Billboard, } from "@/components";
//========== Import Icons
import { FaStar } from "react-icons/fa";
//========== Import Hero Images
import BannerImg from "media/heroBanner.png"
//========== Import What Images
import cardBg from "media/cardBg.png"
import cardBgHvr from "media/cardBgHvr.png"
import ctaCardBg from "media/ctaCardBg.png"
//========== Import What Images
import foldBg from "media/foldBg.png"
//========== Import Podcast Images
import slide1 from "media/slide1.png"
import slide2 from "media/slide2.png"
import slide3 from "media/slide3.png"
import slide4 from "media/slide4.png"
import microphone from "media/icons/microphone.png"
import clock from "media/icons/clock.png"
import folder from "media/icons/folder.png"
//========== Import Publication Images
import news from "media/news.png"
//========== Import Live Images
import live from "media/live.png"
//========== Import Benifits Images
import benifits from "media/benefits.png"
//========== Import Interviews Images
import interviews from "media/interviews.png"
//========== Import Buy Reviews Images
import reviewCard from "media/reviewCard.png"
import reviewIcon1 from "media/reviewIcons/reviewIcon1.png"
import reviewIcon2 from "media/reviewIcons/reviewIcon2.png"
import reviewIcon3 from "media/reviewIcons/reviewIcon3.png"
import reviewIcon4 from "media/reviewIcons/reviewIcon4.png"
import reviewIcon5 from "media/reviewIcons/reviewIcon5.png"
import reviewIcon6 from "media/reviewIcons/reviewIcon6.png"
//========== Import Billboard Images
import billBoardBg from "media/billBoardBg.png"


export default function Home() {
  //=============== Hero ===============
  const heroContent = {
    title: (<> Award Winning Online Reputation Management <span className="text-primary">Services!</span> </>),
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
  //=============== What ===============
  const cardsData = [
    {
      title: "Online Reputation Audit",
      description: "Analyze your online presence to identify strengths and weaknesses for improvement strategies.",
    },
    {
      title: "Positive Search Results",
      description: "Enhance your online visibility and improve search outcomes with effective strategies and practices.",
    },
    {
      title: "Press Releases",
      description: "Craft engaging press releases that communicate key messages and capture the audience’s attention effectively.",
    },
    {
      title: "Review Management",
      description: "Build trust and maintain a positive online image through effective review management strategies and techniques.",
    },
    {
      title: "Podcasts",
      description: "Create compelling podcast content that resonates with audiences and showcases your expertise and insights.",
    },
    {
      title: "News / Article Publication",
      description: "Secure placements in articles that highlight your brand and promote your key messages effectively.",
    },
    {
      title: "Wikitia Page Creation",
      description: "Establish your authority and enhance your online credibility with a well-crafted Wikitia page.",
    },
    {
      title: "Print Placement (Magazine)",
      description: "Achieve print placements in magazines to reach specific audiences and amplify your brand awareness.",
    },
    {
      title: "Google Knowledge Panel",
      description: "Optimize your online profile to feature prominently in Google’s Knowledge Panel for increased visibility.",
    },
    {
      title: "TV Interviews",
      description: "Participate in TV interviews to share your insights and elevate your brand’s public profile effectively.",
    },
  ];
  // =====================
  const whatContent = {
    title: (<> <span className="text-primary">What We</span> Do </>),
    para: "Top businesses are winning because they have a single source of truth for their reputation performance. They always know what consumers are saying",
    cardBg: cardBg,
    cardBgHvr: cardBgHvr,
    cardsData: cardsData,
    ctaTitle: "Estimate Your Project’s Cost Now!",
    ctaPara: "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has...",
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
    "Continued Execution!",
    "Coherence Verified!",
    "Delivery"
  ];
  // =====================
  const publicationContent = {
    title: (<> News / Article <span className="text-primary block">Publication</span> </>),
    para: "Promote your book through a team of dedicated experts who understand  your physical, emotional, and monetary investment into the project and  are ready, willing, and able to take your book marketing worldwide.",
    publicantPoints: publicantPoints,
    foldBg: news,
  };
  //=============== Live ===============
  const livePoints = [
    "Segments Chat",
    "Breakout Rooms",
    "Screen Sharing",
    "Opinion Polls"
  ];
  // =====================
  const liveContent = {
    title: "Live Session",
    para: "Insightful conversations, expert interviews, and engaging stories that delve into [topic/industry/interest]. Whether you’re looking for inspiration, the latest trends, or just a fresh perspective, our episodes offer something for everyone. Join us each week for a new episode that will keep you informed and entertained.",
    livePoints: livePoints,
    foldBg: foldBg,
    foldImg: live,
  };
  //=============== Benefits ===============
  const benefitsContent = {
    title: (<> How it <span className="text-primary">Benefits</span> You </>),
    para: "Top businesses are winning because they have a single source of truth for their reputation performance. They always know what consumers are saying about them and can always act on those insights.",
    foldImg: benifits
  };
  //=============== Interviews ===============
  const interviewsContent = {
    title: (<> Our Best <span className="text-primary block">TV Interviews</span> </>),
    para: "Insightful conversations, expert interviews, and engaging stories that delve into [topic/industry/interest]. Whether you’re looking for inspiration, the latest trends, or just a fresh perspective, our episodes offer something for everyone. Join us each week for a new episode that will keep you informed and entertained.",
    foldBg: foldBg,
    foldImg: interviews,
  };
  //=============== Buy Reviews ===============
  const reviewData = [
    {
      title: "Google Reviews",
      description: "Analyze your online presence to identify strengths and weaknesses for improvement strategies.",
      icon: reviewIcon1
    },
    {
      title: "Sitejabber",
      description: "Enhance your online visibility and improve search outcomes with effective strategies and practices.",
      icon: reviewIcon2
    },
    {
      title: "Googfirms",
      description: "Craft engaging press releases that communicate key messages and capture the audience’s attention effectively.",
      icon: reviewIcon3
    },
    {
      title: "Trust Pilot",
      description: "Build trust and maintain a positive online image through effective review management strategies and techniques.",
      icon: reviewIcon4
    },
    {
      title: "Clutch",
      description: "Create compelling podcast content that resonates with audiences and showcases your expertise and insights.",
      icon: reviewIcon5
    },
    {
      title: "Facebook",
      description: "Secure placements in articles that highlight your brand and promote your key messages effectively.",
      icon: reviewIcon6
    }
  ];
  // =====================
  const buyReviewsContent = {
    title: (<> Buy Positive <span className="text-primary">Reviews</span> </>),
    para: "At Gorilla Reviews, We Understand The Importance Of A Stellar Online Reputation. ",
    cardBg: reviewCard,
    cardsData: reviewData,
  };
  //=============== Billboard ===============
  const billboardContent = {
    title: (<> Billboard In Times Square, <span className="text-primary">New York</span> </>),
    para: "Times Square, a major tourist attraction known for  its iconic outdoor advertising, giant billboards, and digital displays,  makes it one of the world's most photographed landmarks",
    foldBg: billBoardBg,
  };
  //=============== What ===============

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
    </>
  );
}
