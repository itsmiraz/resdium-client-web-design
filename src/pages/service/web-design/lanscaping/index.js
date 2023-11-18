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
