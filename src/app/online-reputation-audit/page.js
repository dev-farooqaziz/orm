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
    title: (<> Powerful <span className="text-primary">Online <br className="hidden md:block" /> Reputation</span> Audits <br className="hidden md:block" /> Company to Boost Your Brand’s Trustworthiness </>),
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
  //=============== Advertising ===============
  const advertisContent = {
    title: (<> Comprehensive <span className="text-primary">Online Reputation</span> Audit Services to Elevate Your Brand </>),
    paragraphs: [
      (<> Our <i>online reputation audit</i> services provide an in-depth look into how your brand is perceived across digital channels. By thoroughly analyzing reviews, social media interactions, and search engine results, we uncover hidden issues that may be affecting your reputation. We offer <i>specialized reputation management audit services</i> that are tailored to identify potential threats and opportunities for improvement. </>),
      "Our audit process not only highlights current challenges but also provides actionable insights to build a stronger, more positive online presence.",
    ],
    foldBg: news,
  };
  //=============== OurReview ===============
  const ourReviewContent = {
    bgColor: "bg-black xl:bg-white",
    textColor: "text-white xl:text-black",
    title: (<> Expert <span className="text-primary">Review Management</span> to Safeguard Your Brand’s Online Reputation </>),
    paragraphs: [
      (<> Effective <i>review management</i> is essential for maintaining a positive online reputation. Our specialized services ensure that your brand is accurately represented by addressing customer feedback promptly and professionally. We monitor reviews across various platforms and provide strategies to enhance positive visibility while mitigating the impact of negative feedback. </>),
      "We help businesses stay ahead of potential reputation risks, fostering a positive brand image and building trust with your audience. Let us handle the complexities of managing online reviews while you focus on growing your business.",
    ],
    foldBg: review,
  };
  //=============== Advertising2 ===============
  const advertis2Content = {
    title: (<> Optimize Your <span className="text-primary">Google Knowledge Panel</span> for Enhanced Brand Authority </>),
    paragraphs: [
      (<> A well-managed <i>Google Knowledge Panel</i> is key to ensuring your business stands out in search results. Our <i>specialized reputation management audit services</i> help you optimize this vital digital asset, ensuring accurate, up-to-date information about your brand is displayed to potential customers. </>),
      "We analyze and improve the visibility of your Knowledge Panel, making sure it accurately reflects your business, services, and achievements. We help you build trust and credibility with your audience, driving more engagement and potential leads.",
    ],
    foldBg: news2,
  };
  //=============== Solutions ===============
  const cardData = [
    {
      title: "Billboard Advertising",
      para: "Leverage our expertise in targeted billboard advertising to create maximum visibility and strengthen your brand presence."
    },
    {
      title: "Interactive Installations",
      para: "Engage your audience with innovative interactive installations that not only capture attention but also improve brand perception."
    },
    {
      title: "Event Sponsorships",
      para: (<> We help your brand shine, using our <i>reputation management audit</i> and ensure the best results in enhancing your digital footprint. </>)
    },
    {
      title: "Brand Activations",
      para: "Our services help build stronger connections with your target audience while maintaining a positive online presence."
    },
  ];
  // =====================
  const solutionContent = {
    foldBg: foldBg,
    title: (<> Tailored Online Reputation Management <br className="hidden lg:block" /> <span className="text-primary">Solutions</span> for Every Business Need </>),
    para: "Identify opportunities to strengthen your brand across all touchpoints, ensuring long-term success with our online reputation management solutions. ",
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
