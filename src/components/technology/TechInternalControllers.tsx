import React from 'react'
import { Bellefair } from 'next/font/google'; 

import { v4 as uuid } from 'uuid';

import { Technology } from '@/types/data'
import { useSwiper } from 'swiper/react';

const bellefair = Bellefair({ weight:['400'], subsets: ['latin']})

interface TechInternalControllersProps {
    techs: Technology[],
    slideIndex: number,
}

function TechInternalControllers(props: TechInternalControllersProps) 
{
    const { techs, slideIndex } = props;

    const swiper = useSwiper();

    const handleClick = (index: number) => 
    {
        swiper.slideTo(index);
    }

    return (
        <div className={`hidden ${bellefair.className} 
                        max-tech-md:w-full max-tech-md:flex max-tech-md:justify-center max-tech-md:items-center max-tech-md:gap-4
                        max-tech-md:py-8
                        max-sm:py-5`}>
            
            { techs.map((tech, index) =>
                <>
                    { slideIndex === index ?

                        <button key={uuid()} onClick={() => handleClick(index)}
                                            className='w-[58px] h-[58px] text-[24px] rounded-full border-[rgba(255,255,255,0.3)] border-[1px]
                                                        transition-all duration-300 bg-white text-black
                                                        max-sm:w-[40px] max-sm:h-[40px] max-sm:text-[20px]'>
                            {index + 1}
                        </button> :

                        <button key={uuid()} onClick={() => handleClick(index)}
                                            className='w-[58px] h-[58px] text-[24px] rounded-full border-[rgba(255,255,255,0.3)] border-[1px]
                                                        transition-all duration-300 hover:bg-white hover:text-black
                                                        max-sm:w-[40px] max-sm:h-[40px] max-sm:text-[20px]'>
                            {index + 1}
                        </button>
                    }
                </>
            )}

        </div>
    )
}

export default TechInternalControllers