import React from "react";
import Banner from "../components/Banner";
import InfoSection from "../components/InfoSection";
import ArticleList from "../components/ArticlleList";
import Newsletter from "../components/Newsletter";
import PopupModal from '../components/PopupModal';
import Socials from "../components/Socials";
import SupportersList from "../components/SupportersList";
import CampaignSummary from "../components/CampaignSummary";
import DonioEndBanner from "../components/DonioEndBanner";
import Hero from "../components/Hero";
import SectionDivider from "../components/SectionDivider";
import Partners from "../components/Partners";

export default function Working() {
  console.log("PUBLIC_URL:", process.env.PUBLIC_URL);
  return (
    <div>

      {/* <PopupModal
        id="marketing_banner_v1"
        title="Donio je spustené!"
        description={<span></span>}
        ctaText="Pokračovať na Donio"
        ctaHref="https://donio.sk/pribeh/12863?utm_source=copylink&utm_medium=socialshare&utm_campaign=share_button&utm_content=bb0aaf01-1fc2-422e-9eff-0d89f7d13370"
        expireDays={0.2} // modal will reappear after 30 days
      /> */}
      

      <Hero />

      <DonioEndBanner />
      <Partners/>
      
     
      
      <SectionDivider/>
      
      <InfoSection />
      
      
      <SectionDivider/>
      <ArticleList />
      
      <Socials />
      <Newsletter />
      
    </div>
  );
}