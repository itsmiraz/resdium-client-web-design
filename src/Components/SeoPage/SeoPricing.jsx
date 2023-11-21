import { SeoPricingConst } from '@/Constants/ServicePage/Seo';
import React, { useState } from 'react';
import Check from '../Shared/Icons/Check';

const SeoPricing = () => {
    const [MonthlyPricing, setMonthlyPricing] = useState(true);

    return (
        <div className='w-full px-20 py-20 '>
            <div className='text-center'>

                <span className='px-4 py-2 font-semibold  bg-[#DCFCE7] text-[#3C6E71]'>PRICING</span>
                <h2 className='text-center mt-4 h2-bold text-[#2A3342]'> SEO Packages to Propel Your Success</h2>
                <div className='mt-4'>
                    <label for="Toggle1" className="inline-flex font-semibold items-center space-x-4 cursor-pointer ">
                        <span>Billed Monthly</span>
                        <span className="relative">
                            <input id="Toggle1" onChange={() => setMonthlyPricing(!MonthlyPricing)} type="checkbox" className="hidden peer" />
                            <div className="w-10 h-6 rounded-full shadow-inner dark:bg-gray-400 peer-checked:dark:bg-[#3C6E71]"></div>
                            <div className="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto bg-white"></div>
                        </span>
                        <span>Billed Annually</span>
                    </label>
                </div>

                <div className='grid-cols-3 py-20 grid gap-14'>
                    {
                        SeoPricingConst.map((data, i) => <PricingCard MonthlyPricing={MonthlyPricing} data={data} key={i} i={i} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default SeoPricing;



const PricingCard = ({ data, i, MonthlyPricing }) => {

    return <div>
        <h3 className='h3-semibold text-head-text'>{data.title}</h3>
        {/* <p>{data.description}</p> */}
        <div className='flex mx-auto justify-center items-center my-6 w-fit relative'>
            <p className='font-bold text-gray-600 absolute left-0 text-3xl top-0'>$</p>
            <h2 className='text-[48px] text-[#2A3342] font-bold pl-6'> {MonthlyPricing ? data.monthlyPricing : data.annualPricing} </h2>
            <p className='text-xl text-gray-600 font-medium'>/ {MonthlyPricing ? "Per Month" : "Annually"} </p>
        </div>
        <button className='text-white w-full bg-primary-2 py-4 font-semibold text-lg rounded-ee-[8px] rounded-ss-[8px] '>
            Get Started Now
        </button>
        <ul className='py-6'>
            {
                data.highlights.map((feature, i) => <li className='flex gap-x-2 text-start font-medium text-lg py-2' key={i}>
                    <Check />
                    <p>{feature}</p>

                </li>)
            }

        </ul>
    </div>





}



