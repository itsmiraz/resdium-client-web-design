import { BlogsConstants } from '@/Constants/BlogPage/BlogPageConstants';
import React from 'react';
import BlogCard from '../BlogCard/BlogCard';

const BlogsSection = () => {
    return (
        <div className='py-10 lg:py-20 px-6 lg:px-20'>
            <h1 className='py-10 text-gray-700 text-4xl font-bold uppercase text-center'>
                Blogs
            </h1>
            <div className='grid-cols-1 md:grid-cols-2  lg:grid-cols-3 grid gap-10'>
                {
                    BlogsConstants.map((data, i) => <BlogCard key={i} blog={data} />)
                }
            </div>

        </div>
    );
};

export default BlogsSection;