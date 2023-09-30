import React, { useState } from 'react';
import logo from '../../../Assets/Logos/resdium-logo.webp'
import Image from 'next/image';
import { FiMenu } from 'react-icons/fi'
import { AiOutlineClose } from 'react-icons/ai'
import Link from 'next/link';
import { MAINBTN } from '@/Components/Modules/Buttons/Buttons';

const Header = () => {
    const [open, setOpen] = useState(false);
    return (
        <header className='shadow-lg top-0 sticky flex top-50 z-50 justify-between items-center py-4 md:py-6 px-4 md:px-10 lg:px-20 bg-[#F4F4F4]'>
            {/* Logo */}
            <div>
                <Link href={'/'}>
                    <Image src={logo} alt='resdium-logo' className=' w-32 lg:w-40 ' />
                </Link>
            </div>

            {/* Menus */}
            <div
                className={`lg:static fixed  ${open ? "left-0 scale-100" : "left-[-1000px] scale-0"} lg:scale-100 transition-all duration-300 ease-in-out top-14 lg:h-full h-screen flex justify-center items-center lg:w-fit w-full bg-[#F4F4F4] `}>
                <ul className='flex lg:flex-row flex-col items-center gap-6 lg:gap-10 font-medium bg-[#F4F4F4]'>
                    <li>
                        <Link onClick={() => setOpen(!open)} href={'/'}>
                            <p className='cursor-pointer'>HOME</p>
                        </Link>
                    </li>
                    <li>
                        <Link onClick={() => setOpen(!open)} href={'/service'}>

                            <p className='cursor-pointer'>SERVICES</p>
                        </Link>
                    </li>
                    <li>
                        <Link onClick={() => setOpen(!open)} href={'/aboutUs'}>
                            <p className='cursor-pointer'>ABOUT</p>
                        </Link>
                    </li>
                    <li>
                        <Link onClick={() => setOpen(!open)} href={'/blogs'}>
                            <p className='cursor-pointer'>BLOGS</p>
                        </Link>
                    </li>
                    <li>
                        <Link onClick={() => setOpen(!open)} href={'/contactUs'}>
                         <MAINBTN title={"CONTACT"}></MAINBTN>
                        </Link>
                    </li>
                </ul>
            </div>

            {/* Toogle Button */}
            <div className='lg:hidden block'>
                <button onClick={() => setOpen(!open)} className='text-2xl'>
                    {
                        open ?
                            <AiOutlineClose />
                            :
                            <FiMenu />
                    }
                </button>
            </div>

        </header>
    );
};

export default Header;