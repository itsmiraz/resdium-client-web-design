import HowitWorksSeo from "@/Components/SeoPage/HowitWorksSeo";
import SeoCTA from "@/Components/SeoPage/SeoCTA";
import SeoHero from "@/Components/SeoPage/SeoHero";
import SeoPricing from "@/Components/SeoPage/SeoPricing";
import WhyChooseUsSeo from "@/Components/SeoPage/WhyChooseUsSeo";
import Head from "next/head";
import React from "react";

const Seo = () => {
  return (
    <main>
      <Head>
        <title>Search Engine Optimisation - Resdium Digital</title>
      </Head>

      <SeoHero />
      <WhyChooseUsSeo />
      <HowitWorksSeo />
      <SeoPricing />
      <SeoCTA />
    </main>
  );
};

export default Seo;
