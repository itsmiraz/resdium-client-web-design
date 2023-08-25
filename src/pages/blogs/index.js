import BlogPageHero from '@/Components/BlogPage/BlogPageHero/BlogPageHero';
import BlogsSection from '@/Components/BlogPage/BlogsSection/BlogsSection';
import Head from 'next/head';
import React from 'react';

const Blogs = () => {
    return (
        <div>
              <Head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="Explore our Resdium blog for the latest insights, trends, and ideas in the digital world. Our articles cover web design, development, marketing, and more to help your business thrive online." />
                <meta name="keywords" content="digital agency, web design, web development, digital marketing, online business, technology trends" />
                <meta name="author" content="Resdium" />
                <title>Insights and Ideas for Digital Excellence | Resdium Blog</title>
            </Head>

           <BlogPageHero/>
<BlogsSection/>
        </div>
    );
};

export default Blogs;