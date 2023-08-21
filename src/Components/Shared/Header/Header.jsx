import React, { useState } from 'react';
import logo from '../../../Assets/Logos/resdium-logo.webp'
import Image from 'next/image';
import { FiMenu } from 'react-icons/fi'
import { AiOutlineClose } from 'react-icons/ai'
import Link from 'next/link';

const Header = () => {
    const [open, setOpen] = useState(true);

    return (
        <header className='sticky top-0 flex top-50  justify-between items-center py-4 md:py-6 px-4 md:px-10 bg-[#F4F4F4]'>
            {/* Logo */}
            <div>
                <Link href={'/'}>
                    <Image src={logo} alt='resdium-logo' className=' w-32 lg:w-40 ' />
                </Link>
            </div>

            {/* Menus */}
            <div
                className={`lg:static absolute  ${open ? "left-0 scale-100" : "left-[-1000px] scale-0"} lg:scale-100 transition-all duration-300 ease-in-out top-16 lg:h-full h-screen flex justify-center items-center lg:w-fit w-full bg-[#F4F4F4] `}>
                <ul className='flex lg:flex-row flex-col items-center gap-6 lg:gap-10 font-medium bg-[#F4F4F4]'>
                    <li>
                        <p className='cursor-pointer'>HOME</p>
                    </li>
                    <li>
                        <p className='cursor-pointer'>SERVICES</p>
                    </li>
                    <li>
                        <p className='cursor-pointer'>ABOUT</p>
                    </li>
                    <li>
                        <p className='cursor-pointer'>CONTACT</p>
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