/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line react/no-unescaped-entities
import { WebDesignInUtahExpertise } from "@/Constants/WebDesignInUtah";
import Head from "next/head";
import Image from "next/image";
import Balancer from "react-wrap-balancer";
import expertiseIcon from "../../../../public/Assets/Icons/expertise.png";

const WebDesignInUtah = () => {
  return (
    <main className="px-4 md:px-20 ">
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

      {/* Hero */}
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
      {/* Expertise */}
      <div className="grid grid-cols-2 gap-10">
        <div>
          <p className="text-lg font-semibold">Expertise</p>
          <h2 className="text-[48px] font-bold">
            Why Choose Resdium Digital for Web Design in Utah?
          </h2>
        </div>
        <div className="space-y-6  py-20">
          {WebDesignInUtahExpertise.map((item, key) => (
            <div className="flex items-center" key={key}>
              <div className="flex flex-col justify-center items-center gap-2">
                <Image src={expertiseIcon} alt="expetise" />
                <div className="h-[70px] w-[3px] bg-gray-700"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold">{item.title}</h3>
                <p className="text-medium">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Unleash the Potential of Your Online Presence */}
      <div className="grid py-20 place-content-center place-items-center  grid-cols-2 gap-10">
        <div>
          <h2 className="text-[48px] leading-[110%] font-bold">
            Unleash the Potential of Your Online Presence
          </h2>
          <p className="text-lg mt-4">
            We offer a comprehensive suite of digital marketing services to help
            you reach your target audience, engage them effectively, and achieve
            your business goals. Here's how we can help:
          </p>
          <ul className="list-disc pl-10 space-y-4 mt-4 text-semibold text-2xl font-semibold">
            <li>Web Development and Design</li>
            <li>SEO Services</li>
            <li>Social Media Content Creation</li>
          </ul>
        </div>
        <div>
          <Image
            width={400}
            height={400}
            className="w-full h-full"
            src={
              "https://res.cloudinary.com/djnlyzsmv/image/upload/v1709373881/resdium-assets/location-based-pages/Unleash_the_Potential_of_Your_Online_Presence_ke6sh2.webp"
            }
            alt="unleash-the-potential-of-your-online-presence-cover"
          />
        </div>
      </div>
    </main>
  );
};

export default WebDesignInUtah;
