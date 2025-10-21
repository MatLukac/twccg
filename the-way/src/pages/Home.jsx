import React from "react";
import Banner from "../components/Banner";
import InfoSection from "../components/InfoSection";
import ArticleList from "../components/ArticlleList";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

export default function Home() {
  console.log("PUBLIC_URL:", process.env.PUBLIC_URL);
  return (
    <div>
      <Banner />
      <InfoSection />
      <ArticleList />
      <Newsletter />
      
    </div>
  );
}