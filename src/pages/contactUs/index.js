import Head from "next/head";
import Link from "next/link";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineMail,
} from "react-icons/ai";
import { Balancer } from "react-wrap-balancer";

const ContactUs = () => {
  const [Service, setService] = useState("");
  const [Package, setPackage] = useState("");
const [loading, setloading] = useState(false);

  const handleForm = e => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const Email = form.email.value;
    const linkedin = form.linkedin.value;
    const companyName = form.company.value;
    const message = form.message.value;

    const formData = {
      name,
      Email,
      linkedin,
      companyName,
      Service,
      Package,
      message,
    };
    setloading(true)
    sendEmail(formData)
    console.log(formData);
    form.reset()
    setService('')
  };

  // Send the email
  const sendEmail = ( formData ) => {
    emailjs
      .send(
        "service_okq3dcd",
        "template_qxonc7n",
        formData,
        "KBUe2RdPLUH8fGq3V"
      )
      .then(response => {
        console.log("Email sent successfully!", response.text);
        // Perform any desired actions upon successful email sending
        toast.success("We got your Email we will get back to you as soon as possible")
        setloading(false);
      })
      .catch(error => {
        console.error("Error sending email:", error);

        // Handle the error case
        toast.error("Something went Wrong!");
        setloading(false);
      });
  };

  return (
    <section className="relative">
      <Head>
        <title>Contact Us | Resdium - Web Solutions Agency</title>
        <meta
          name="description"
          content="Get in touch with Resdium, a web solutions agency, for all your web-related needs. Contact us for web design, development, and other digital solutions."
        ></meta>
      </Head>

      <div className="absolute inner-shadow z-10 top-0 left-0 h-[591px] w-full bg-gradient-to-l from-[#1d2a42] to-[#3C6E71]  md:rounded-bl-[40px]"></div>
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
                  href={"https://www.instagram.com/resdiumdigital/"}
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
              <p>miraj@resdium.live</p>
            </div>
          </div>
        </div>
        <div className="">
          {/* Form */}
          <form
            onSubmit={handleForm}
            className="bg-white md:drop-shadow-xl md:p-8 lg:p-14 sticky top-32 rounded-ss-3xl rounded-ee-3xl space-y-6"
          >
            {/* Name */}

            <div>
              <label htmlFor="" className="block text-sm font-medium py-2 ">
                Name
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full focus:outline-[#2e688f] bg-slate-200 p-2 rounded-ss-md rounded-ee-md"
              />
            </div>

            {/* email */}
            <div>
              <label htmlFor="" className="block text-sm font-medium py-2 ">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full focus:outline-[#2e688f] bg-slate-200 p-2 rounded-ss-md rounded-ee-md"
              />
            </div>
            {/* Linkedin */}
            <div>
              <label htmlFor="" className="block text-sm font-medium py-2 ">
                Linkedin
              </label>
              <input
                required
                type="text"
                name="linkedin"
                className="w-full focus:outline-[#2e688f] bg-slate-200 p-2 rounded-ss-md rounded-ee-md"
              />
            </div>

            {/* Type */}
            <div>
              <label htmlFor="" className="block text-sm font-medium py-2 ">
                Select the type of website you want
              </label>
              <select
                value={Package}
                required
                onChange={e => setPackage(e.target.value)}
                className="w-full focus:outline-[#2e688f] bg-slate-200 p-2 rounded-ss-md rounded-ee-md"
                name=""
                id=""
              >
                <option disabled value="">
                  Choose an Option
                </option>
                <option value="Real Estate Company Website">
                  Real Estate Company Website
                </option>
                <option value="E-commerce Web Site">E-commerce Web Site</option>
                <option value="Blog Web Site">Blog Web Site</option>
                <option value="Portfolio Web Site">Portfolio Web Site</option>
                <option value="Landing Page Web Site">
                  Landing Page Web Site
                </option>
                <option value="News Portal">News Portal Web Site</option>
                <option value="Other">Other</option>
              </select>
            </div>
            {/* Type */}
            <div>
              <label htmlFor="" className="block text-sm font-medium py-2 ">
              Choose Your Package
              </label>
              <select
                value={Service}
                required
                onChange={e => setService(e.target.value)}
                className="w-full focus:outline-[#2e688f] bg-slate-200 p-2 rounded-ss-md rounded-ee-md"
                name=""
                id=""
              >
                <option disabled value="">
                  Choose an Option
                </option>
                <option value="Bronze">
                Bronze
                </option>
                <option value="Silver">Silver</option>
                <option value="Premium">Premium</option>
                <option value="Custom">Custom (Recommended)</option>
             
              </select>
            </div>

            {/* Company Name */}
            <div>
              <label htmlFor="" className="block text-sm font-medium py-2 ">
                Company Name
              </label>
              <input
                type="text"
                required
                name="company"
                className="w-full focus:outline-[#2e688f] bg-slate-200 p-2 rounded-ss-md rounded-ee-md"
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="" className="block text-sm font-medium py-2 ">
                Message
              </label>
              <textarea
                type=""
                required
                name="message"
                className="w-full focus:outline-[#2e688f] h-32 bg-slate-200 p-2 rounded-ss-md rounded-ee-md"
              />
            </div>
            <button className="teal-green-to-deep-blue-gradient w-full  text-white  px-4 py-3 font-medium  rounded-corners-sm">
           { loading?  "Loading":" SUBMIT"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
