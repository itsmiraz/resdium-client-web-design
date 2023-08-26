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
        <div className='rounded-ss-[20px] max-w-[395px] bg-[#EEE] rounded-ee-[20px] overflow-hidden'>
            <Image width={395} height={252} src={img} alt={alt} />

            <div className='p-4'>
                <h1 className='text-2xl font-semibold'>{title}</h1>
                <p className='text-xs py-4'>
                    {outline.slice(0, 200)}..
                </p>
                <div>
                    <Link href={`/blog/${siteUrl}/${id}`}>
                    
                <MAINBTN title={'Read More'} />
                    </Link>
               </div>
            </div>

        </div>
    );
};

export default BlogCard;