import Head from "next/head";
import Link from "next/link";
import React from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineMail,
} from "react-icons/ai";
import { Balancer } from "react-wrap-balancer";

const ContactUs = () => {
  return (
    <section className="relative">
      <Head>
        <title>Contact Us | Resdium - Web Solutions Agency</title>
        <meta
          name="description"
          content="Get in touch with Resdium, a web solutions agency, for all your web-related needs. Contact us for web design, development, and other digital solutions."
        ></meta>
      </Head>

      <div className="absolute z-10 top-0 left-0 h-[591px] w-full bg-[#284B63] md:rounded-bl-[80px]"></div>

      <div className="relative px-6 md:px-10 lg:px-20 py-20 lg:py-32 z-20 grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-20">
        <div className="space-y-4">
          <h2 className="text-xl font-medium text-white">CONTACT US</h2>
          <h1 className="text-[36px] leading-[42px] font-semibold text-white">
            Get in Touch with Resdium: Your Web Solution Partner
          </h1>
          <p className="text-[#E6E6E6] text-[15px]">
            <Balancer>
              At Resdium, we specialize in delivering top-notch web solutions
              tailored to your needs. Whether you`re looking for web design,
              development, or digital marketing services, our skilled team is
              here to help. Reach out to us now to discuss your project and take
              the first step towards a dynamic online presence.
            </Balancer>
          </p>

          <div className="flex gap-6 items-center py-10  md:py-10 lg:py-20">
            <p className="font-medium text-white text-sm">FOLLOW US</p>
            <ul className="text-[#E2E2E2]  text-2xl flex gap-x-4">
              <li>
                <Link
                  target="_blank"
                  aria-label="Facebook Link"
                  href={"https://facebook.com/resdium"}
                >
                  <AiFillFacebook />
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  aria-label="Linkdin Link"
                  href={"https://www.linkedin.com/company/resdium/"}
                >
                  <AiFillLinkedin />
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  aria-label="Instagram Link"
                  href={"https://www.instagram.com/rezdium/"}
                >
                  <AiFillInstagram />
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:pt-10 pt-20 lg:pt-20 space-y-6">
            <h1 className="text-2xl font-semibold text-[#3B3B3B]">
              Have Questions? Reach Out to Us via Email
            </h1>
            <p className="text-[#414141] text-[15px]">
              <Balancer>
                We`re here to assist you! If you have any queries or need
                information about our web services, feel free to drop us an
                email. Our team at Resdium is always ready to provide the
                answers you`re looking for.
              </Balancer>
            </p>
            <div className="flex font-semibold text-[#414141] items-center gap-2">
              <AiOutlineMail />
              <p>contact.resdium@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="">
          {/* Form */}
          <div className="bg-white md:drop-shadow-md md:p-8 lg:p-14 sticky top-32 rounded-ss-3xl rounded-ee-3xl space-y-6">
            {/* Name */}

            <div>
              <label htmlFor="" className="block text-sm font-medium py-2 ">
                Name
              </label>
              <input
                type="text"
                className="w-full bg-slate-200 p-2 rounded-ss-md rounded-ee-md"
              />
            </div>

            {/* email */}
            <div>
              <label htmlFor="" className="block text-sm font-medium py-2 ">
                Email
              </label>
              <input
                type="email"
                className="w-full bg-slate-200 p-2 rounded-ss-md rounded-ee-md"
              />
            </div>
            {/* Linkedin */}
            <div>
              <label htmlFor="" className="block text-sm font-medium py-2 ">
                Linkedin
              </label>
              <input
                type="text"
                className="w-full bg-slate-200 p-2 rounded-ss-md rounded-ee-md"
              />
            </div>

            {/* Type */}
            <div>
              <label htmlFor="" className="block text-sm font-medium py-2 ">
                Select the type of website you want
              </label>
              <select
                className="w-full bg-slate-200 p-2 rounded-ss-md rounded-ee-md"
                name=""
                id=""
              >
                <option value="">Choose an Option</option>
                <option value="">Real Estate Company Website</option>
                <option value="">E-commerce Web Site</option>
                <option value="">Blog Web Site</option>
                <option value="">Portfolio Web Site</option>
                <option value="">Landing Page Web Site</option>
                <option value="">Other</option>
              </select>
            </div>

            {/* Company Name */}
            <div>
              <label htmlFor="" className="block text-sm font-medium py-2 ">
                Company Name
              </label>
              <input
                type="text"
                className="w-full bg-slate-200 p-2 rounded-ss-md rounded-ee-md"
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="" className="block text-sm font-medium py-2 ">
                Message
              </label>
              <textarea
                type=""
                className="w-full h-32 bg-slate-200 p-2 rounded-ss-md rounded-ee-md"
              />
            </div>
            <button className="teal-green-to-deep-blue-gradient w-full  text-white  px-4 py-3 font-medium  rounded-corners-sm">
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
