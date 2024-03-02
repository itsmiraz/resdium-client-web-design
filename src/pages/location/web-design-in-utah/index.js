/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line react/no-unescaped-entities
import Head from "next/head";
import Image from "next/image";
import Balancer from "react-wrap-balancer";

const WebDesignInUtah = () => {
  return (
    <main>
      <Head>
        <title>
          Web Design in Utah | Grow Your Business Online - Resdium Digital
        </title>
        <meta
          name="description"
          content="Elevate your brand and attract more clients with captivating & results-driven web design in Utah. Free consultation & quote!"
        />
        <link
          rel="canonical"
          href="https://resdium.live/location/web-design-in-utah"
        />

        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <meta
          name="keywords"
          content="web design in utah, web designer utah, utah web designer, website design utah, utah web design agency, seo utah, utah seo services, social media marketing utah"
        />
      </Head>

      <div className="py-20">
        <h1 className="text-[56px] text-center leading-[100%] text-[#22323F] font-bold">
          Utah's Trusted Web <br /> Design Partner: Grow Your <br /> Business
          Online
        </h1>
        <p className="text-center text-[18px] mt-6">
          <Balancer>
            Resdium Digital crafts captivating, results-driven websites that
            elevate brands in Utah and <br /> beyond. With a focus on excellence
            and innovation, we deliver tailor-made solutions that exceed <br />
            expectations and leave a lasting impression.
          </Balancer>
        </p>
        <Image
          width={1200}
          height={700}
          className="mx-auto w-full h-fit my-7"
          src={
            "https://res.cloudinary.com/djnlyzsmv/image/upload/v1709373882/resdium-assets/location-based-pages/utah-image_tfl3i4.webp"
          }
          alt="utah-image"
        />
      </div>
    </main>
  );
};

export default WebDesignInUtah;
