import { MAINBTN } from '@/Components/Modules/Buttons/Buttons';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const BlogCard = ({ blog }) => {

    const {
        _id,
        img,
        alt,
        title,
        outline,
        siteUrl
    } = blog


    return (
        <div className='rounded-ss-[20px] relative shadow-lg  max-w-[395px] bg-[#EEE] rounded-ee-[20px] h-full overflow-hidden'>
            <div className='w-full  lg:h-[220px] overflow-hidden'>
                <Image width={395} height={252} className='w-full scale-100 hover:scale-110 transition-all duration-300' src={img} alt={alt} />
            </div>

            <div className='p-4 relative shadow-inner ' >
                <p className='text-sm'>Blog by <Link className='hover:underline' href={'/'}>Resdium Digital</Link></p>
                <h1 className='text-2xl font-semibold'>{title.length > 42 ? `${title.slice(0, 42)}..` : title}</h1>
                <p className='text-[#666] text-[16px]  lg:leading-[20px] leading-[18px] md:leading-[20px] font-medium py-4'>
                    {outline.slice(0, 200)}..
                </p>
                <div className=''>
                    <Link href={'/blog/[url]'} as={`/blog/${siteUrl}`}>
                        <MAINBTN title={'Read More'} />
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default BlogCard;