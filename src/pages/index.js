import Head from "next/head";
import LandingHero from "@/Components/LandingPage/LandingHero/LandingHero";
import BuildYourOnlineEmpire from "@/Components/LandingPage/BuildYourOnlineEmpire/BuildYourOnlineEmpire";
import WhatRESDIUMPROVIDES from "@/Components/LandingPage/WhatRESDIUMPROVIDES/WhatRESDIUMPROVIDES";

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
          name="google-site-verification"
          content="01JMCDAiWgBjv7QWqWk2v2Tg-DbZo3SWxq3uYzIf9kc"
        />
      </Head>
      <LandingHero />
      <BuildYourOnlineEmpire />
      <WhatRESDIUMPROVIDES/>
    </main>
  );
}
