import React, { useState } from 'react';


const Accordion = ({ title, content, i, length ,}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };



    return (
        <div
          
            className="mb-6 md:mb-10  select-none">
            <button
                className="w-full gap-x-6 text-left flex  justify-between items-center font-medium text-lg leading-[22px] text-[#3E3F46] md:text-[20px] lg:text-[22px]"
                onClick={toggleAccordion}
            >
                {title}
                <div>
                    <svg width="16" className='transition-all duration-300' height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        {

                            !isOpen && <path d="M8 1V15" stroke="#3E3F46" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        }
                        <path d="M1 8H15" stroke="#3E3F46" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>

                </div>
            </button>

            <div
                className={`overflow-hidden duration-300 transition-all transition-max-height ${isOpen ? 'max-h-96' : 'max-h-0'
                    }`}
            >
                <div className="py-2 text-[16px] md:text-[18px] font-open-sans text-[#7E7E88] bg-white">{content}</div>
            </div>

            <div className={` ${length - 1 === i ? "" : '"border-[#D9DBE9]  border-opacity-50 border-b-[1px]'} scale-105 pt-6 lg:pt-10`}>

            </div>


        </div>
    );
};

export default Accordion;