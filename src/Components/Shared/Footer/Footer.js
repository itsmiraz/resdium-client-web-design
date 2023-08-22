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
      <div className="grid grid-cols-5 gap-10">
        <div className="col-span-5 lg:col-span-2">
          <Image src={logo} alt="resdium-logo" className="md:w-40 w-32" />
          <h1 className="text-white pt-6 pb-2 font-medium text-sm">
            Resdium Digital Ltd.
          </h1>
          <h1 className="text-white  font-medium text-xs">
            Email: miraj.resdium@gmail.com
          </h1>
        </div>
        <div className=" col-span-2 lg:col-span-1">
          <h1 className="text-white pt-6 pb-2 font-medium text-xl">Explore</h1>
          <ul className="text-[#E2E2E2] text-sm space-y-2">
            <li>
              <p>Home</p>
            </li>
            <li>
              <p>Services</p>
            </li>
            <li>
              <p>About</p>
            </li>
            <li>
              <Link href={"/contactUs"}>
                <p>Contact</p>
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-span-2 lg:col-span-1">
          <h1 className="text-white pt-6 pb-2 font-medium text-xl">Company</h1>
          <ul className="text-[#E2E2E2] text-sm space-y-2">
            <li>
              <p>Blogs</p>
            </li>
            <li>
              <p>Terms & Conditions</p>
            </li>
            <li>
              <p>Privacy Policy</p>
            </li>
          </ul>
        </div>
        <div className="col-span-5 lg:col-span-1">
          <h1 className="text-white pt-6 pb-2 font-medium text-xl">
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
                href={"https://www.instagram.com/rezdium/"}
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
