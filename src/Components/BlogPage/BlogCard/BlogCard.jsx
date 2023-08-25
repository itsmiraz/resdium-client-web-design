import { MAINBTN } from '@/Components/Modules/Buttons/Buttons';
import Image from 'next/image';
import React from 'react';

const BlogCard = ({ blog }) => {

    const {
        img,
        alt,
        title,
        outline

    } = blog


    return (
        <div className='rounded-ss-[20px] max-w-[395px] bg-[#EEE] rounded-ee-[20px] overflow-hidden'>
            <Image width={395} height={252} src={img} alt={alt} />

            <div className='p-4'>
                <h1 className='text-2xl font-semibold'>{title}</h1>
                <p className='text-xs py-4'>
                    {outline.slice(0, 10)}
                </p>
                <MAINBTN title={'Read More'}/>
            </div>

        </div>
    );
};

export default BlogCard;