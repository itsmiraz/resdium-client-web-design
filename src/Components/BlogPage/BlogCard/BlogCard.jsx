import { MAINBTN } from '@/Components/Modules/Buttons/Buttons';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const BlogCard = ({ blog }) => {

    const {
        img,
        alt,
        title,
        outline,
        id,
        siteUrl
    } = blog


    return (
        <div className='rounded-ss-[20px] relative  max-w-[395px] bg-[#EEE] rounded-ee-[20px] h-full overflow-hidden'>
            <div className='w-full  lg:h-[220px] overflow-hidden'>
                <Image width={395} height={252} className='w-full scale-100 hover:scale-110 transition-all duration-300' src={img} alt={alt} />
            </div>

            <div className='p-4 relative ' >
                <h1 className='text-2xl font-semibold'>{title.length > 55 ? `${title.slice(0, 45)}...` : title}</h1>
                <p className='text-xs py-4'>
                    {outline.slice(0, 200)}..
                </p>
                <div className=''>
                    <Link href={`/blog/${siteUrl}/${id}`}>
                        <MAINBTN title={'Read More'} />
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default BlogCard;