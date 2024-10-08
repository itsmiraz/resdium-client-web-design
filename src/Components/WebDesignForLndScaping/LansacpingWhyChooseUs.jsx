import { WebDesignForLandscapingWhyChooseUs } from "@/Constants/WebDesignForLanscaping";
import Image from "next/image";
import Balancer from "react-wrap-balancer";

const LansacpingWhyChooseUs = () => {
    return (
        <div className='py-20 px-6 lg:px-20'>
            <h2 className="h2-bold text-center text-[#2A3342]">
                Why Choose Us
            </h2>
            <p className="text-center px-6 pt-2 section-desc text-[#556987]">
                <Balancer>
                    At Resdium Digital, we understand the landscaping industry inside and out. We combine <br className="md:block hidden" /> our extensive web design and development expertise with a deep appreciation for your  <br className="md:block hidden" /> business niche to provide you with a comprehensive package that includes:
                </Balancer>
            </p>
            <div className="grid md:grid-cols-2 place-items-center grid-cols-2 lg:grid-cols-3 pt-16 gap-6 md:gap-14">
                {
                    WebDesignForLandscapingWhyChooseUs.map((feature, i) => <FeatureCard key={i} data={feature} />)
                }

            </div>
        </div>
    );
};

export default LansacpingWhyChooseUs;


export const FeatureCard = ({ data }) => {

    const { icon, title, desc, alt } = data

    return <div className="flex  flex-col justify-start md:justify-center md:items-center">
        <Image src={icon} alt={alt} className="md:w-[64px] w-[40px] " width={64} height={64} />
        <h3 className="h3-semibold pt-2 pb-2 text-[#2A3342]">{title}</h3>
        <p className="font-medium leading-[110%] text-sm md:text-lg px-0 lg:px-2 text-[#3b3b3bec] text-start lg:text-center">
            <Balancer>
                {
                    desc
                }

            </Balancer>
        </p>
    </div>
}