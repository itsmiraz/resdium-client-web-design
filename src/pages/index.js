import Image from "next/image";
import logo from "../Assets/Logos/resdium-logo.webp";
import Head from "next/head";
import LandingHero from "@/Components/LandingPage/LandingHero/LandingHero";

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
      </Head>
      <LandingHero />
    </main>
  );
}
