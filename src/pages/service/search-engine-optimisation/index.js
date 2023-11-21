import HowitWorksSeo from "@/Components/SeoPage/HowitWorksSeo";
import SeoHero from "@/Components/SeoPage/SeoHero";
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
    </main>
  );
};

export default Seo;
