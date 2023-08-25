import { BlogsConstants } from '@/Constants/BlogPage/BlogPageConstants';
import React from 'react';
import BlogCard from '../BlogCard/BlogCard';

const BlogsSection = () => {
    return (
        <div className='py-20 px-20'>
            <h1 className='text-center py-10 text-2xl font-semibold text-center'>
                Blogs
            </h1>
            <div className='grid-cols-3 grid gap-10'>
                {
                    BlogsConstants.map((data, i) => <BlogCard key={i} blog={data} />)
                }
            </div>

        </div>
    );
};

export default BlogsSection;