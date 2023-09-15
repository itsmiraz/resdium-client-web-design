import { MAINBTN } from '@/Components/Modules/Buttons/Buttons';
import { servicePagePackage } from '@/Constants/ServicePage/ServicePage';
import React from 'react';

const ServicePricing = () => {



    const PackageCard = ({ data }) => {
        return (
            <div className='bg-[#284A62] py-10 px-3 space-y-10 rounded-ss-[40px] rounded-ee-[40px] text-white '>

                <div className=''>
                    <h2 className='text-[40px] font-semibold'>{data.title}</h2>
                    <p>
                        {data.desc}
                    </p>
                </div>
                <div className='text-start '>
                    <p className='text-xl font-semibold py-2 pl-10'>Package Details:</p>
                    <ul className=' list-disc space-y-2 text-sm pl-20'>
                        {
                            data.PackageDetails.map((details, i) => <li key={i}>{details}</li>)
                        }
                    </ul>
                </div>
                <div className='flex gap-8 pl-4 text-start grid-cols-2 '>
                    <div>
                        <h2>Starts With</h2>
                        <h1 className='text-[40px] font-semibold'>{data.startsWiht}</h1>
                    </div>
                    {data.additionalPage && <div >
                        <p>Additional Pages</p>
                        <div className='space-y-3'>
                        {data.additionalPage.map((pageData, i) =>
                            <div key={i}>
                                <h3 className='text-lg'>{pageData.title}</h3>
                                <p className='text-xs'>
                                    {pageData.desc}
                                </p>
                            </div>)}
                      </div>
                    </div>}
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



                <div className='flex justify-center gap-10 items-start my-10'>
                    <div className='grid grid-cols-2 gap-10'>
                        <PackageCard data={servicePagePackage.bronzePacakge} />
                          <PackageCard data={servicePagePackage.SilverPacakge} />
                  
                        <div className='bg-[#284A62] rounded-ss-[20px] rounded-ee-[20px] flex justify-between items-center p-6 w-full h-full col-span-2'>
                            <h1 className='text-white text-[32px] font-semibold'>
                            Dont know where to start?
                            </h1>
                            <div>
                                <button className='bg-white rounded-ss-[6px] rounded-ee-[6px] text-gray-800 font-semibold px-4 py-2'> Schedule A Call </button>
                            </div>
                            </div>
                    </div>
                    <PackageCard data={servicePagePackage.PREMIUMPacakge} />
                </div>


            </div>
        </section>
    );
};

export default ServicePricing;