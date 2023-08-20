import Image from "next/image";
import logo from "../Assets/Logos/resdium-logo.webp";

export default function Home() {
  return (
    <div className="h-screen flex justify-center items-center animate-pulse">
      <div>
        <Image src={logo} alt="resdium-logo" className="w-40 mx-auto my-4"  />
        <h1 className="text-center text-5xl font-semibold ">Hello World!</h1>
      </div>{" "}
    </div>
  );
}
