import React from "react";
import Banner from "../components/Banner";
import InfoSection from "../components/InfoSection";
import ArticleList from "../components/ArticlleList";
import Newsletter from "../components/Newsletter";
import PopupModal from '../components/PopupModal';
import Socials from "../components/Socials";
import SupportersList from "../components/SupportersList";

export default function Home() {
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
      

      <Banner />
      <InfoSection />
      <div className="mx-10 my-10 border-t border-gray-600 border-dashed" />
      {/* <SupportersList/> */}

      <section className="flex items-center justify-center mx-2 md:mx-10">
        <iframe
        className="w-full shadow-md max-w-7xl rounded-2xl"
        src="https://donio.sk/widget2/12863"
        width="100%"
        height="420"
        frameBorder="0"
      ></iframe>
      </section>

      <div className="mx-10 my-10 border-t border-gray-600 border-dashed" />
      <ArticleList />
      <div className="mx-10 my-10 border-t border-gray-600 border-dashed" />
      <Socials />
      <Newsletter />
      
    </div>
  );
}