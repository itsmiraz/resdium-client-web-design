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
          Resdium: Crafting Digital Experiences | Web Design & Development
          Agency
        </title>
        <meta
          name="description"
          content="Transform your digital presence with Resdium - a leading web design and development agency. We specialize in creating captivating websites that engage, convert, and inspire."
        />
        <meta
          name="keywords"
          content="web design agency, web development services, digital experiences, creative web solutions, captivating websites, engaging user interfaces, website optimization, responsive design, conversion-focused websites, inspirational digital solutions, professional web designers, expert developers, user experience (UX) design, UI/UX optimization, online branding, digital transformation, innovative web solutions, custom web applications, modern website design, mobile-friendly websites, redium"
        />
        <meta
          name="google-site-verification"
          content="01JMCDAiWgBjv7QWqWk2v2Tg-DbZo3SWxq3uYzIf9kc"
        />
      </Head>
      <LandingHero />
      <BuildYourOnlineEmpire />
      <WhatRESDIUMPROVIDES />
      <BookACall />
      <FAQSection />
    </main>
  );
}
