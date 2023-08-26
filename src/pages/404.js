import { MAINBTN } from "@/Components/Modules/Buttons/Buttons";
import MainContainer from "@/Components/Shared/MainContainer/MainContainer";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <MainContainer>
      <section className="text-center py-20">
        <h1 className="text-[96px]   bg-clip-text text-transparent bg-gradient-to-r from-[#3C6E71] to-[#01437C] font-bold ">404</h1>
        <h2 className="text-3xl font-semibold   bg-clip-text text-transparent bg-gradient-to-r from-[#3C6E71] to-[#01437C] mb-6">NOT FOUND</h2>
        <div>
          <Link href={"/"}>
            <MAINBTN title={"Back to HomePage"} />
          </Link>
        </div>
      </section>
    </MainContainer>
  );
};

export default NotFound;
