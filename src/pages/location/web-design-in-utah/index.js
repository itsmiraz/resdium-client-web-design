/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line react/no-unescaped-entities
import {
  WebDesignInUtahExpertise,
  WebDesignInUtahWhyChooseUS,
} from "@/Constants/WebDesignInUtah";
import Head from "next/head";
import Image from "next/image";
import Balancer from "react-wrap-balancer";
import expertiseIcon from "../../../../public/Assets/Icons/expertise.png";
import { MAINBTN } from "@/Components/Modules/Buttons/Buttons";
import Link from "next/link";
//
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
      <div className="pb-20 pt-14 md:py-20">
        <Image
          width={1200}
          height={700}
          className="mx-auto md:hidden block w-full h-fit my-7"
          src={
            "https://res.cloudinary.com/djnlyzsmv/image/upload/v1709373882/resdium-assets/location-based-pages/utah-image_tfl3i4.webp"
          }
          alt="utah-image"
        />
        <h1 className="text-[32px] md:text-[56px] text-center leading-[100%] text-[#22323F] font-bold">
          Utah's Trusted Web <br className="md:block hidden" /> Design Partner:
          Grow Your <br className="md:block hidden" /> Business Online
        </h1>
        <p className="text-center text-[14px] md:text-[18px] mt-6">
          <Balancer>
            Resdium Digital crafts captivating, results-driven websites that
            elevate brands in Utah and <br className="md:block hidden" />{" "}
            beyond. With a focus on excellence and innovation, we deliver
            tailor-made solutions that exceed <br className="md:block hidden" />
            expectations and leave a lasting impression.
          </Balancer>
        </p>{" "}
        <Image
          width={1200}
          height={700}
          className="mx-auto hidden md:block w-full h-fit my-7"
          src={
            "https://res.cloudinary.com/djnlyzsmv/image/upload/v1709373882/resdium-assets/location-based-pages/utah-image_tfl3i4.webp"
          }
          alt="utah-image"
        />
      </div>
      {/* Expertise */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10">
        <div>
          <p className="text-lg font-semibold">Expertise</p>
          <h2 className="text-[32px] leading-[110%] md:text-[48px] font-bold">
            Why Choose Resdium Digital for Web Design in Utah?
          </h2>
        </div>
        <div className="space-y-2 md:space-y-6  py-6 md:py-20">
          {WebDesignInUtahExpertise.map((item, key) => (
            <div className="flex items-center" key={key}>
              <div className="flex flex-col justify-center items-center gap-2">
                <Image src={expertiseIcon} alt="expetise" />
                <div className="h-[70px] w-[3px] bg-gray-700"></div>
              </div>
              <div className="p-4 md:p-6">
                <h3 className="text-2xl font-semibold">{item.title}</h3>
                <p className="text-medium">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Unleash the Potential of Your Online Presence */}
      <div className="grid py-20 place-content-center place-items-center  grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-[32px] md:text-[48px] leading-[110%] font-bold">
            Unleash the Potential of Your Online Presence
          </h2>
          <p className="text-sm md:text-lg mt-4">
            We offer a comprehensive suite of digital marketing services to help
            you reach your target audience, engage them effectively, and achieve
            your business goals. Here's how we can help:
          </p>
          <ul className="list-disc pl-6 md:pl-10 space-y-4 mt-4 text-semibold text-xl md:text-2xl font-semibold">
            <li>Web Development and Design</li>
            <li>SEO Services</li>
            <li>Social Media Content Creation</li>
          </ul>
        </div>
        <div className="md:order-last order-first">
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
      {/* Why Choose Resdium Digital for Web Design in Utah? */}
      <div className="grid py-20 place-content-center place-items-center grid-cols-1  md:grid-cols-2 gap-10">
        <div>
          <Image
            width={400}
            height={400}
            className="w-full h-full"
            src={
              "https://res.cloudinary.com/djnlyzsmv/image/upload/v1709373881/resdium-assets/location-based-pages/why-chosse-resdium-section_rw8ylt.webp"
            }
            alt="unleash-the-potential-of-your-online-presence-cover"
          />
        </div>
        <div>
          <h2 className="text-[32px] md:text-[48px] leading-[110%] font-bold">
            Why Choose Resdium Digital for Web Design in Utah?
          </h2>

          <ul className="space-y-4 mt-8 text-semibold text-2xl font-semibold">
            {WebDesignInUtahWhyChooseUS.map((item, i) => (
              <div key={i}>
                <h3 className="text-[24px] md:text-[32px] font-semibold">
                  {item.title}
                </h3>
                <p className="text-sm leading-[130%] pt-2 md:text-[16px] font-medium">
                  {item.desc}
                </p>
              </div>
            ))}
          </ul>
        </div>
      </div>

      {/* cta */}
      <div className="py-20 text-center">
        <h3 className="text-center mb-8 font-bold text-3xl md:text-4xl">
          Ready to take your Utah business to <br className="md:block hidden" />{" "}
          the next level online?
        </h3>
        <Link href={"/contactUs"}>
          <MAINBTN title={"Get a Free Quote Today!"} />
        </Link>
      </div>
    </main>
  );
};

export default WebDesignInUtah;
