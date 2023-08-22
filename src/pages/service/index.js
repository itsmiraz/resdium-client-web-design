import ServicePageHero from "@/Components/ServicePage/ServicePageHero/ServicePageHero";
import ServiceWhatWeOffer from "@/Components/ServicePage/ServiceWhatWeOffer/ServiceWhatWeOffer";
import Head from "next/head";
import React from "react";

const Service = () => {
  return (
    <section>
      <Head>
        <title>
          Expert Web Development Services by Resdium - Transforming Your Digital
          Landscape
        </title>
        <meta
          name="description"
          content="Elevate your online presence with Resdium's professional web development services. Our custom solutions deliver seamless user experiences and innovative digital transformations for lasting impact."
        />
      </Head>

      <ServicePageHero />
      <ServiceWhatWeOffer />
    </section>
  );
};

export default Service;
