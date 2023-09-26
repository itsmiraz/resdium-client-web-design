import Head from "next/head";
import LandingHero from "@/Components/LandingPage/LandingHero/LandingHero";
import BuildYourOnlineEmpire from "@/Components/LandingPage/BuildYourOnlineEmpire/BuildYourOnlineEmpire";
import WhatRESDIUMPROVIDES from "@/Components/LandingPage/WhatRESDIUMPROVIDES/WhatRESDIUMPROVIDES";
import BookACall from "@/Components/LandingPage/BookACall/BookACall";
import FAQSection from "@/Components/LandingPage/FAQSections/FAQSection";

export default function Home() {


  

  return (
    <main>
      <Head>
        <title>
          Resdium Digital: Crafting Digital Experiences | Web Design & Development
          Agency
        </title>
        <meta
          name="description"
          content="Transform your digital presence with Resdium - a leading web design and development agency. We specialize in creating captivating websites that engage, convert, and inspire."
        />
        <meta
          name="keywords"
          content="web design agency, web development services, digital experiences, creative web solutions, captivating websites, engaging user interfaces, website optimization, responsive design, conversion-focused websites, inspirational digital solutions, professional web designers, expert developers, user experience (UX) design, UI/UX optimization, online branding, digital transformation, innovative web solutions, custom web applications, modern website design, mobile-friendly websites, Resdium Digital"
        />
     
        <meta
          property="og:title"
          content="Resdium: Crafting Digital Experiences | Web Design & Development Agency"
        />
        <meta
          property="og:description"
          content="Transform your digital presence with Resdium - a leading web design and development agency. We specialize in creating captivating websites that engage, convert, and inspire."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/djnlyzsmv/image/upload/v1693558278/resdium-assets/Residum_p4cu5m.png"
        />
        <meta property="og:url" content="https://resdium.netlify.app/" />
        <meta property="og:type" content="website" />
      </Head>
      <LandingHero />
      <BuildYourOnlineEmpire />
      <WhatRESDIUMPROVIDES />
      <BookACall />
      <FAQSection />
    </main>
  );
}
