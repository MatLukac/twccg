import React from "react";
import Banner from "../components/Banner";
import InfoSection from "../components/InfoSection";
import ArticleList from "../components/ArticlleList";
import Newsletter from "../components/Newsletter";
import PopupModal from '../components/PopupModal';

export default function Home() {
  console.log("PUBLIC_URL:", process.env.PUBLIC_URL);
  return (
    <div>

      <PopupModal
        id="marketing_banner_v1"
        title="Donio je spustené!"
        description={<span></span>}
        ctaText="Pokračovať na Donio"
        ctaHref=""
        expireDays={0.2} // modal will reappear after 30 days
      />
      

      <Banner />
      <InfoSection />
      <div className="mx-10 my-10 border-t border-gray-600 border-dashed" />
      <ArticleList />
      <Newsletter />
      
    </div>
  );
}