import React from "react";
import Banner from "../components/Banner";
import InfoSection from "../components/InfoSection";
import NewsGrid from "../components/NewsGrid";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

export default function Home() {
  console.log("PUBLIC_URL:", process.env.PUBLIC_URL);
  return (
    <div>
      <Banner />
      <InfoSection />
      <NewsGrid />
      <Newsletter />
      <Footer />
    </div>
  );
}