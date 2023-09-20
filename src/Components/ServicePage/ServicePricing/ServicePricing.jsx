import { MAINBTN } from '@/Components/Modules/Buttons/Buttons';
import { servicePagePackage } from '@/Constants/ServicePage/ServicePage';
import Link from 'next/link';
import React from 'react';
import Balancer from 'react-wrap-balancer';

const ServicePricing = () => {



    const PackageCard = ({ data }) => {
        return (
            <div className='bg-[#284A62] h-full flex-col justify-between flex py-10 lg:px-3  px-4 space-y-10 rounded-ss-[40px] rounded-ee-[40px] text-white '>

                <div className=''>
                    <h2 className='text-[40px] font-semibold'>{data.title}</h2>
                    <p className='md:text-sm text-xs'>
                        <Balancer>
                            {data.desc}
                        </Balancer>
                    </p>
                </div>
                <div className='text-start '>
                    <p className='text-xl font-semibold pb-6 pl-6'>Package Details:</p>
                    <ul className=' list-disc space-y-2 text-sm pl-10 lg:pl-20'>
                        {
                            data.PackageDetails.map((details, i) => <li key={i}>{details}</li>)
                        }
                    </ul>
                </div>
                <div className='flex flex-wrap items-center  pl-4 text-start justify-between lg:justify-around'>
                    <div className=' flex md:flex-col  flex-wrap items-center gap-4 w-full md:w-fit justify-between '>
                        <div>
                        <h2 className='font-semibold text-sm'>Starts With</h2>
                        <h1 className='text-[32px] lg:text-[40px] font-semibold'>{data.startsWiht}</h1>
                 
                      </div>
                        
                {
                    data.additionalPage && 
                    <div className='text-start pt-4'>
                    <Link href={'/contactUs'}> <button className='bg-white rounded-ss-[6px]  text-sm  rounded-ee-[6px] text-gray-800 font-semibold px-4 py-2'>Get Started </button></Link>

                    </div>
}

                 
                    </div>
                    {data.additionalPage ?
                        <div className='mt-4 lg:mt-0 '>
                            <p className='font-semibold pb-2'>Additional Pages</p>
                            <div className='space-y-3'>
                                {data.additionalPage.map((pageData, i) =>
                                    <div key={i}>
                                        <h3 className='text-lg lg:text-sm'>{pageData.title}</h3>
                                        <p className='text-xs lg:text-[10px]'>
                                            {pageData.desc}
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>

                        :
                        <>
                            <div className='text-start '>
                            <Link href={'/contactUs'}> <button className='bg-white text-sm  rounded-ss-[6px] rounded-ee-[6px] text-gray-800 font-semibold px-4 py-2'>Get Started </button></Link>

                            </div>
                        </>
                    }
                </div>


            </div>
        )
    }

    return (
        <section className='px-6 lg:px-20 py-20'>
            <div className='text-center'>
                <h1 className='text-[#22323F] text-[26px] lg:text-[48px] leading-[28px] lg:leading-[52px]  font-bold'>

                    Our Web Development
                    <br /> Service Pricing
                </h1>



                <div className='flex lg:flex-row flex-col justify-center gap-10 items-start pt-20'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-10'>
                        <div className='md:col-span-1 h-full col-span-2'>
                            <PackageCard data={servicePagePackage.bronzePacakge} />
                        </div>
                        <div className='md:col-span-1 h-full col-span-2'>
                            <PackageCard data={servicePagePackage.SilverPacakge} />
                        </div>

                        <div className='bg-[#284A62] hidden rounded-ss-[20px] rounded-ee-[20px] lg:flex justify-between items-center px-6 py-10 w-full h-full col-span-2'>
                            <h1 className='text-white text-[32px] font-semibold'>
                                Dont know where to start?
                            </h1>
                            <div>
                                <Link href={'/contactUs'}> <button className='bg-white rounded-ss-[6px] rounded-ee-[6px] text-gray-800 font-semibold px-4 py-2'> Schedule A Call </button></Link>
                            </div>
                        </div>
                    </div>
                    <PackageCard data={servicePagePackage.PREMIUMPacakge} />
                </div>
                <div className='bg-[#284A62] lg:hidden rounded-ss-[20px] rounded-ee-[20px] mt-10 flex-col justify-between items-center px-6 py-8 space-y-6 w-full h-full col-span-2'>
                    <h1 className='text-white text-[28px] leading-[32px] font-semibold'>
                        Dont know where to start?
                    </h1>
                    <div>
                        <Link href={'/contactUs'}> <button className='bg-white rounded-ss-[6px] rounded-ee-[6px] text-gray-800 font-semibold px-4 py-2'> Schedule A Call </button></Link>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ServicePricing;