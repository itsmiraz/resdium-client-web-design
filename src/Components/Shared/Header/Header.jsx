import React from 'react';
import logo from '../../../Assets/Logos/resdium-logo.webp'
import Image from 'next/image';


const Header = () => {
    return (
        <header className='flex justify-between items-center py-8 px-10 bg-[#F4F4F4]'>
            <div>
                <Image src={logo} alt='resdium-logo' className='w-40 ' />
            </div>
            <div>
                <ul className='flex items-center gap-10 font-medium'>
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
        </header>
    );
};

export default Header;