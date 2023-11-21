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
        <title>Search Engine Optimization - Resdium Digital</title>
        <meta
          name="description"
          content="Resdium Digital offers top-notch Search Engine Optimization (SEO) services to elevate your online presence. Partner with us for tailored strategies that boost your landscaping business in today's competitive digital market."
        />
        <meta
          property="og:title"
          content="Search Engine Optimization - Resdium Digital"
        />
        <meta
          property="og:description"
          content="Resdium Digital offers top-notch Search Engine Optimization (SEO) services to elevate your online presence. Partner with us for tailored strategies that boost your landscaping business in today's competitive digital market."
        />

        <meta
          property="og:url"
          content="https://resdium.live/service/search-engine-optimisation"
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/djnlyzsmv/image/upload/v1700547478/resdium-assets/Service%20Page/seo-hero-resdium-digital-min_vkvy8z.webp"
        />
        <link
          rel="canonical"
          href="https://resdium.live/service/search-engine-optimisation"
        />

        <meta property="og:type" content="website" />
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
