import Head from "next/head";
import LandingHero from "@/Components/LandingPage/LandingHero/LandingHero";
import BuildYourOnlineEmpire from "@/Components/LandingPage/BuildYourOnlineEmpire/BuildYourOnlineEmpire";
import WhatRESDIUMPROVIDES from "@/Components/LandingPage/WhatRESDIUMPROVIDES/WhatRESDIUMPROVIDES";
import BookACall from "@/Components/LandingPage/BookACall/BookACall";
import FAQSection from "@/Components/LandingPage/FAQSections/FAQSection";
import OurBlogsSection from "@/Components/LandingPage/OurBlogsSection/OurBlogsSection";
import HomePageWhyChoosseUS from "@/Components/LandingPage/HomePageWhyChoosseUS/HomePageWhyChoosseUS";
import Testimonials from "@/Components/LandingPage/Testimonial/Testimonals";
// import WhyChoosseUS from "@/Components/AboutUsPage/WhyChoosseUS/WhyChoosseUS";

export default function Home() {
  return (
    <main>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <title>
          Resdium Digital | Transforming Ideas into Digital Realities
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
          property="og:site_name"
          content="Resdium Digital"
        />
        <meta
          property="og:title"
          key="og-title"
          content="Resdium Digital | Transforming Ideas into Digital Realities"
        />

        <meta
          property="og:description"
          content="Transform your digital presence with Resdium - a leading web design and development agency. We specialize in creating captivating websites that engage, convert, and inspire."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/djnlyzsmv/image/upload/v1696253867/resdium-assets/resdium-brand-iedentiy_euyiqi.webp"
        />
        <link rel="icon" type="image/x-icon" href="/favicon.ico"></link>
        <meta property="og:url" content="https://resdium.live/" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://resdium.live/" />

       
      </Head>
      <LandingHero />
      <BuildYourOnlineEmpire />
      <WhatRESDIUMPROVIDES />
      <HomePageWhyChoosseUS/>
      <OurBlogsSection />
      <Testimonials/>
      <BookACall />
      <FAQSection />
    </main>
  );
}
