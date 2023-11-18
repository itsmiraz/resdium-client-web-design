import Image from 'next/image';
import React from 'react';
import { MAINBTN } from '../Modules/Buttons/Buttons';
import Link from 'next/link';

const GrowYourLandscapingBusiness = () => {

    const Data = [
        {
            icon: 'https://res.cloudinary.com/djnlyzsmv/image/upload/v1700319112/serice-pages-for-different-buisness/stratigic-brand-storytelling_lynfr0.webp',
            title: "Strategic Brand Storytelling",
            desc: "Our web development services go beyond the technicalities – we craft a narrative that resonates with your audience",
            alt: "strategic-brand-storyTelling"
        },
        {
            icon: 'https://res.cloudinary.com/djnlyzsmv/image/upload/v1700319113/serice-pages-for-different-buisness/client-collaboration_rn1q63.webp',
            title: "Interactive Client Collaboration",
            desc: "At Resdium Digital,.Our web development services extend beyond mere online presence.",
            alt: "interactive-client-collaboration"
        },
    ]

    return (
        <div className='px-6 lg:px-20 py-20 grid grid-cols-1 lg:grid-cols-2 gap-6  lg:gap-14'>
            <div className='overflow-hidden md:h-[600px]'>
                <Image className='w-full' src={"https://res.cloudinary.com/djnlyzsmv/image/upload/v1700319068/serice-pages-for-different-buisness/Image_kwoxfx.webp"} alt='grow-landscape-buisness-onlne' width={500} height={600} />
            </div>
            <div className='flex flex-col space-y-4 justify-between'>
                <div>
                    <p className='font-medium py-2'>Resdium Digital</p>
                    <h2 className='h1-bold pb-6'>
                        Ready to Grow Your Landscaping Business Online?
                    </h2>
                    <p className='section-desc '>
                        Take the first step towards a thriving online presence. At Resdium Digital, we combine creativity, functionality, and industry expertise to deliver web development solutions that elevate your landscaping business.
                    </p>
                </div>
                <div className='grid grid-cols-2 gap-x-0 '>
                    {
                        Data.map((feature, i) => <div className='space-y-3' key={i}>
                            <Image src={feature.icon} alt={feature.alt} width={40} height={40} />
                            <h3 className='text-lg lg:text-xl font-semibold'>{feature.title}</h3>
                            <p className='text-xs lg:text-sm font-medium'>{feature.desc}</p>
                        </div>)
                    }

                </div>
                <div className='md:pt-0 pt-5'>
                    <Link href={'/contactUs'}>
                        <MAINBTN title={'Get Started'} />
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default GrowYourLandscapingBusiness;