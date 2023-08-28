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
        <meta name="keywords" content={RealEstateServiceConstants.keywords} />
      </Head>
    </div>
  );
};

export default Realestatewebsitedevelopment;
