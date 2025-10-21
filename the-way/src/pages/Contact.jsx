import React from "react";
import Banner from "../components/Banner";
import InfoSection from "../components/InfoSection";
import ArticleList from "../components/ArticlleList";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import ContactHeroSection from "../components/ContactHeroSection";
import ContactForm from "../components/ContactForm";

export default function Home() {
  console.log("PUBLIC_URL:", process.env.PUBLIC_URL);
  return (
    <div>
      <Banner/>
        <ContactForm/>
      <ContactHeroSection/>
     
    </div>
  );
}