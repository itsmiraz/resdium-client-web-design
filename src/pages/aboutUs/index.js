import AboutUsHero from "@/Components/AboutUsPage/AboutUsHero/AboutUsHero";
import AboutUsSection from "@/Components/AboutUsPage/AboutUsSection/AboutUsSection";
import WhyChoosseUS from "@/Components/AboutUsPage/WhyChoosseUS/WhyChoosseUS";
import Head from "next/head";
import React from "react";

const AboutUs = () => {
  return (
    <div>
      <Head>
        <title>Resdium | About Us</title>
        <meta
          name="description"
          content="Welcome to Resdium, where creativity and technology intertwine. Learn about our journey, services, commitment, and why we're the perfect choice for your digital needs."
        />
        <meta property="og:site_name" content="Resdim Digital"/>
        <meta
          name="keywords"
          content="Digital agency, web development, creative solutions, Resdium, about us, web solutions, technology, commitment"
        />
      </Head>
      <AboutUsHero />
      <AboutUsSection />
      <WhyChoosseUS/>
    </div>
  );
};

export default AboutUs;
