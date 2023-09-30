import React from 'react';
import { Balancer } from 'react-wrap-balancer';

const ServiceProcces = () => {
    return (
        <div className='px-6 lg:px-20 py-32'>
            <h1 className='uppercase text-center text-[24px] lg:text-[32px] font-bold text-[#212121]'>Our Development Process</h1>
            <p className='text-center text-xs lg:text-xl leading-[16px] text-[#353535]'>
                <Balancer>
                    At RESDIUM, our web development process is engineered to elevate your <br className='md:block hidden' /> online brand.
                    We achieve this through a series of impactful features
                </Balancer>
            </p>

         
            <div className='grid grid-cols-1 md:grid-cols-2 max-w-[900px] mx-auto gap-10 pt-20 '>
                <div className='space-y-10'>
                    <div className='bg-[#284B63] p-8 lg:p-10 space-y-3 rounded-ss-[40px] rounded-ee-[40px] h-fit'>
                        <h1 className='text-[22px] leading-[24px] lg:text-[28px] lg:leading-[30px] font-semibold text-white  '>Discovery and Planning</h1>
                        <p className='text-[10px] lg:text-xs text-[#D9D9D9]'>
                            We begin by delving deep into your goals and ideas. Our team
                            collaborates closely with you to understand your vision, target
                            audience, and  desired functionality. This phase lays the
                            foundation for a tailored development strategy.
                        </p>
                        <p className='text-xs lg:text-xl text-[#D9D9D9] font-medium'>Duration: 1-2 Days</p>
                    </div>

                    <div className='bg-[#212121] p-8 lg:p-10 space-y-3 rounded-ss-[40px] '>
                        <h1 className='text-[22px] leading-[24px] lg:text-[28px] lg:leading-[30px] font-semibold text-white  '>Development and Coding</h1>
                        <p className='text-[10px] lg:text-xs text-[#D9D9D9]'>
                            With the blueprint in place, our skilled developers get to work.
                            We write clean, efficient code and implement the design to
                            create a functional website that`s responsive and optimized
                            for various devices.
                        </p>
                        <p className='text-xs lg:text-xl text-[#D9D9D9] font-medium'>Duration: 2-3 Weeks <span className='text-[10px]'>(Depends on your Projects)</span></p>
                    </div>

                    <div className='bg-[#D9D9D9] p-8 lg:p-10 space-y-3 rounded-ss-[40px] rounded-ee-[40px]'>
                        <h1 className='text-[22px] leading-[24px] lg:text-[28px] lg:leading-[30px] font-semibold text-zinc-800  '>Client Collaboration</h1>
                        <p className='text-[10px] lg:text-xs text-[#222222]'>
                            Throughout the process, we maintain transparent
                            communication. We provide regular updates and seek your
                            feedback to ensure the project is on track and aligns with
                            your expectations.
                        </p>
                        <p className='text-xs lg:text-xl text-[#3d3d3d] font-medium'>Duration: 1 Week</p>
                    </div>

                </div>

                <div className='space-y-10'>
                    <div className='bg-[#3C6E71] lg:mt-32 p-8 lg:p-10 space-y-3 rounded-ss-[40px] rounded-ee-[40px]'>
                        <h1 className='text-[22px] leading-[24px] lg:text-[28px] lg:leading-[30px] font-semibold text-white  '>Design and Prototype</h1>
                        <p className='text-[10px] lg:text-xs text-[#D9D9D9]'>
                            Our expert designers craft wireframes and prototypes
                            that visualize the user experience. We  ensure the design
                            aligns with your brand identity and provides an intuitive
                            interface for your audience to interact with.
                        </p>
                        <p className='text-xs lg:text-xl text-[#D9D9D9] font-medium'>Duration: 1-2 Weeks</p>
                    </div>
                    <div className='bg-[#4B4F55] mt-20 p-8 lg:p-10 space-y-3 rounded-ee-[40px]'>
                        <h1 className='text-[22px] leading-[24px] lg:text-[28px] lg:leading-[30px] font-semibold text-white  '>Testing and Quality</h1>
                        <p className='text-[10px] lg:text-xs text-[#D9D9D9]'>
                            Assurance: Before launch, we rigorously test your website
                            across browsers, devices, and scenarios. This meticulous
                            quality assurance ensures a seamless user experience and
                            identifies and fixes any bugs or issues.
                        </p>
                        <p className='text-xs lg:text-xl text-[#D9D9D9] font-medium'>Duration: 1 Week</p>
                    </div>
                    <div className='bg-[#0B657D] mt-20 p-8 lg:p-10 space-y-3 rounded-ss-[40px] rounded-ee-[40px]'>
                        <h1 className='text-[22px] leading-[24px] lg:text-[28px] lg:leading-[30px] font-semibold text-white  '>Launch and Deployment</h1>
                        <p className='text-[10px] lg:text-xs text-[#D9D9D9]'>
                            Once everything is perfected, we`re ready for launch. Our
                            team handles the technical aspects of deployment to ensure
                            a smooth transition from development to a live, functioning
                            website.
                        </p>
                        <p className='text-xs lg:text-xl text-[#D9D9D9] font-medium'>Duration: 1-2 Days</p>
                    </div>
                </div>
              
            </div>

        </div>
    );
};

export default ServiceProcces;