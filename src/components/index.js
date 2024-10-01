import dynamic from "next/dynamic"

const AutoPlaySlider = dynamic(() => import('./slider/AutoPlaySlider'))
const AutoScrollSlider = dynamic(() => import('./slider/AutoScrollSlider'))
const Header = dynamic(() => import('./header/Header'))
const CTA = dynamic(() => import('./cta/CTA'))
const Hero = dynamic(() => import('./hero/Hero'))
const What = dynamic(() => import('./what/What'))
const Podcast = dynamic(() => import('./podcast/Podcast'))
const Publication = dynamic(() => import('./publication/Publication'))
const Live = dynamic(() => import('./live/Live'))
const Choose = dynamic(() => import('./choose/Choose'))
const Benefits = dynamic(() => import('./benefits/Benefits'))
const Interviews = dynamic(() => import('./interviews/Interviews'))
const BuyReviews = dynamic(() => import('./buyreviews/BuyReviews'))
const Billboard = dynamic(() => import('./billboard/Billboard'))


export {
    AutoPlaySlider,
    AutoScrollSlider,
    CTA,
    Header,
    Hero,
    What,
    Podcast,
    Publication,
    Live,
    Choose,
    Benefits,
    Interviews,
    BuyReviews,
    Billboard,
}