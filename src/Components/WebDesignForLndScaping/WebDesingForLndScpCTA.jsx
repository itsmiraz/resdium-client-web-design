import React from 'react';
import { MAINBTN } from '../Modules/Buttons/Buttons';
import Link from 'next/link';

const WebDesingForLndScpCTA = () => {
    return (
        <div className='px-6 md:px-20 py-20  flex justify-center items-center'>
            <div className='bg-[#284A62] rounded-ss-[20px] rounded-ee-[20px] flex lg:flex-row flex-col justify-between items-center   px-6 lg:px-20 py-10 w-full h-fit'>
                <div className='md:text-start text-center'>
                    <h2 className='h2-bold text-white'>Contact Us Today for a <br className='md:block hidden' /> Free Consultation</h2>
                    <p className='section-desc text-gray-300 pt-2'>Let`s discuss how we can create a website that sets you  <br className='md:block hidden' /> apart and drives real results for your landscaping  <br className='md:block hidden' /> business. </p>
                </div>
                <div className='pt-6 md:pt-0'>
                    <Link href={'/contactUs'}>
                        <button className='px-4 py-2  rounded-ss-[5px] rounded-ee-[5px] bg-white text-gray-800 font-medium'>Contact</button>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default WebDesingForLndScpCTA;