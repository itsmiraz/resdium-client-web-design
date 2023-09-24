import React from "react";
import logo from "../../../Assets/Logos/resdium-logo-white.webp";
import Image from "next/image";
import Link from "next/link";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="py-10 px-6 md:px-20 bg-[#284B63]">
      <div className="grid grid-cols-6 gap-10">
        <div className="col-span-5 lg:col-span-2">
          <Image src={logo} alt="resdium-logo" className="md:w-40 w-32" />
          <h1 className="text-white pt-6 pb-2 font-medium text-sm">
            Resdium Digital Ltd.
          </h1>
          <h1 className="text-white  font-medium text-xs">
            Email: miraj@resdium.live
          </h1>
        </div>
        <div className=" col-span-2 lg:col-span-1">
          <h1 className="text-white lg:pt-0 pt-6 pb-2 font-medium text-xl">
            Explore
          </h1>
          <ul className="text-[#E2E2E2] text-sm space-y-2">
            <li>
              <Link href={"/"}>
                <p>Home</p>
              </Link>
            </li>
            <li>
              <Link href={"/service"}>
                <p>Services</p>
              </Link>
            </li>
            <li>
              <Link href={"/aboutUs"}>
                <p>About</p>
              </Link>
            </li>
            <li>
              <Link href={"/contactUs"}>
                <p>Contact</p>
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-span-2 lg:col-span-1">
          <h1 className="text-white lg:pt-0 pt-6 pb-2 font-medium text-xl">
            Company
          </h1>
          <ul className="text-[#E2E2E2] text-sm space-y-2">
            <li>
              <Link href={"/blogs"}>
                {" "}
                <p>Blogs</p>
              </Link>
            </li>
            <li>
              <Link href={"/company/termsAndconditions"}>
                <p>Terms & Conditions</p>
              </Link>
            </li>
            <li>
              <Link href={"/company/privacyPolicy"}>
                <p>Privacy Policy</p>
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-span-4 lg:col-span-1">
          <h1 className="text-white lg:pt-0 pt-6 pb-2 font-medium text-xl">
            Other
          </h1>
          <ul className="text-[#E2E2E2] text-sm space-y-2">
            <li>
              <Link href={"/real-estate-website-development"}>
                {" "}
                <p>Real Estate Web Development</p>
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-span-5 lg:col-span-1">
          <h1 className="text-white lg:pt-0 pt-6 pb-2 font-medium text-xl">
            Connect with Us
          </h1>
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
                href={"https://www.instagram.com/resdium_/"}
              >
                <AiFillInstagram />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
