import GetStartedSection from "@/Components/RealEstatePage/GetStartedSection/GetStartedSection";
import RealEstatePageHero from "@/Components/RealEstatePage/RealEstatePageHero/RealEstatePageHero";
import RealEstateService from "@/Components/RealEstatePage/RealEstateService/RealEstateService";
import { RealEstateServiceConstants } from "@/Constants/RealEstateServicePage/RealEstatePageService";
import Head from "next/head";
import React from "react";

const Realestatewebsitedevelopment = () => {
  return (
    <div>
      <Head>
        <title>{RealEstateServiceConstants.page_title}</title>
        <meta
          name="description"
          content={RealEstateServiceConstants.meta_description}
        />
        <link rel="canonical" href="https://www.resdium.live/real-estate-website-development" />

        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="keywords" content={RealEstateServiceConstants.keywords} />
      </Head>
      <RealEstatePageHero />
      <RealEstateService />
      <GetStartedSection/>
    </div>
  );
};

export default Realestatewebsitedevelopment;
