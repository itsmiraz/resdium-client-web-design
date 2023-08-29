import { BlogsConstants } from "@/Constants/BlogPage/BlogPageConstants";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Balancer } from "react-wrap-balancer";

const SingleBlog = () => {
  const router = useRouter();

  const { id } = router.query;
  const [blogDetails, setBlogDetails] = useState({});

  useEffect(() => {
    const blog = BlogsConstants.find(blog => parseInt(id) === blog?.id);
    setBlogDetails(blog);
  }, [id]);

  if (!blogDetails?.title) {
    return <p className="text-center p-10">Loading</p>;
  }

  const {
    title,
    keywords,
    meta_description,
    img,
    alt,
    content,
    outline,
    date,
    postedBy,
    siteUrl,
  } = blogDetails;

  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:image" content={img}></meta>
        <meta property="og:title" content={title} />
        <meta name="description" content={meta_description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content="Resdium" />
        <title>{title}| Resdium Blogs</title>
      </Head>

      <section className="max-w-[900px] mx-auto py-4 lg:py-10 px-6">
        {/* BredCumb */}
        <div className="text-xs lg:text-sm  my-4 gap-x-2 flex items-center">
          <p>
            <Link href="/"> Home</Link>
          </p>
          <span>/</span>
          <p>
            <Link href="/blogs"> Blogs</Link>
          </p>
          <span>/</span>
          <p className="md:block hidden">{title}</p>
        </div>

        {/* Top Imagee */}
        <div className="max-w-[900px] max-h-[400px] overflow-hidden mx-auto rounded-ee-[40px] rounded-ss-[40px]  flex justify-center items-center">
          <Image
            width={800}
            height={600}
            className="w-full scale-100 hover:scale-110 duration-300 transition-all"
            src={img}
            alt={alt}
          />
        </div>
        {/* Outline and Title */}

        <section className="">
          <h1 className="text-[28px] lg:text-[40px] leading-[30px] lg:leading-[45px] text-[#212121] my-8 font-bold">
            {title}
          </h1>
          <p className="text-[16px] lg:text-xl text-zinc-700 font-medium">
            <Balancer>{outline}</Balancer>
          </p>
          <div className="my-8">
            <hr />
            <div className="lg:text-lg text-xs flex font-medium justify-between py-2 lg:py-6 ">
              <p>Date: {date}</p>
              <p>Posted by : {postedBy}</p>
            </div>
            <hr />
          </div>
        </section>

        {/* Content */}
        <section>
          {content?.map((data, i) => (
            <div key={i} className="space-y-2 mb-10">
              <h1 className="text-xl font-semibold ">{data.section}</h1>
              <p className="lg:text-lg text-sm text-medium">
                <Balancer>{data.content}</Balancer>
              </p>
              {data?.ul && (
                <>
                  <ul className="list-disc pl-10">
                    {data.ul.map((lis, i) => (
                      <li key={i}>{lis}</li>
                    ))}
                  </ul>
                </>
              )}
              {data?.other && (
                <p className="lg:text-lg text-sm text-medium">
                  <Balancer>{data.other}</Balancer>
                </p>
              )}
            </div>
          ))}
        </section>
      </section>
    </div>
  );
};

export default SingleBlog;
