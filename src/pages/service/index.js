import ServicePageHero from "@/Components/ServicePage/ServicePageHero/ServicePageHero";
import OtherSection from "@/Components/ServicePage/ServicePageOtherSection/OtherSection";
import ServicePricing from "@/Components/ServicePage/ServicePricing/ServicePricing";
import ServiceProcces from "@/Components/ServicePage/ServiceProcces/ServiceProcces";
import ServiceWhatWeOffer from "@/Components/ServicePage/ServiceWhatWeOffer/ServiceWhatWeOffer";
import Head from "next/head";
import React from "react";

const Service = () => {
  return (
    <section>
      <Head>
        <title>
          Professional Web Development Services by Resdium Digital- Transforming
          Your Digital Landscape
        </title>
        <meta
          name="description"
          content="Elevate your online presence with Resdium's professional web development services. Our custom solutions deliver seamless user experiences and innovative digital transformations for lasting impact."
        />
        <meta
          property="og:title"
          content="Professional Web Development Services by Resdium Digital- Transforming Your Digital
          Landscape"
        />
        <meta
          property="og:description"
          content="Transform your digital presence with Resdium - a leading web design and development agency. We specialize in creating captivating websites that engage, convert, and inspire."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/djnlyzsmv/image/upload/v1693558278/resdium-assets/Residum_p4cu5m.png"
        />
        <meta property="og:url" content="https://www.resdium.live/service" />
        <link rel="canonical" href="https://www.resdium.live/service" />

        <meta property="og:type" content="website" />
      </Head>

      <ServicePageHero />
      <OtherSection />
      <ServicePricing />
      <ServiceWhatWeOffer />
      <ServiceProcces />
    </section>
  );
};

export default Service;
