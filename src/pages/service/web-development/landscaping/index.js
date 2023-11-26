import FAQSection from "@/Components/LandingPage/FAQSections/FAQSection";
import GrowYourLandscapingBusiness from "@/Components/WebDesignForLndScaping/GrowYourLandscapingBusiness";
import LandscapingHero from "@/Components/WebDesignForLndScaping/LandscapingHero";
import LansacpingWhyChooseUs from "@/Components/WebDesignForLndScaping/LansacpingWhyChooseUs";
import WebDesingForLndScpCTA from "@/Components/WebDesignForLndScaping/WebDesingForLndScpCTA";
import Head from "next/head";
import React from "react";

const WebDesignForLansacpingCompany = () => {
  return (
    <div>
      <Head>
        <title>
          Web Design Service for Landscaping Company | Resdium Digital
        </title>
        <meta
          name="description"
          content="   Welcome to Resdium Digital, your trusted partner for creating stunning and functional websites tailored to meet the unique needs of landscaping businesses. In todays digital age, a strong online presence is essential to stand out in a competitive market."
        />
        <meta
          property="og:title"
          content=" Web Design Service for Landscaping Company | Resdium Digital"
        />
        <meta
          property="og:description"
          content=" Welcome to Resdium Digital, your trusted partner for creating stunning and functional websites tailored to meet the unique needs of landscaping businesses. In todays digital age, a strong online presence is essential to stand out in a competitive market."
        />

        <meta
          property="og:url"
          content="https://resdium.live/service/web-design/lanscaping"
        />
        <link
          rel="canonical"
          href="https://resdium.live/service/web-design/lanscaping"
        />

        <meta property="og:type" content="website" />
      </Head>
      <LandscapingHero />
      <LansacpingWhyChooseUs />
      <GrowYourLandscapingBusiness />
      <WebDesingForLndScpCTA />
      <FAQSection />
    </div>
  );
};

export default WebDesignForLansacpingCompany;
