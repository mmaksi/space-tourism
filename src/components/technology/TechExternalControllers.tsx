
'use client';

import React from 'react'

import { v4 as uuid } from 'uuid';
import { Bellefair } from 'next/font/google'; 

import { Technology } from '@/types/data'
import { SwiperClass, useSwiper } from 'swiper/react';

const bellefair = Bellefair({ weight:['400'], subsets: ['latin']})

interface TechControllersProps {
    tech: Technology[]
    swiper: SwiperClass | null,
    activeIndex: number;
}

function TechExternalControllers(props: TechControllersProps) 
{
    const { tech, swiper, activeIndex } = props;

    const handleClick = (index: number) => 
    {
        if(!swiper) { return; }

        swiper.slideTo(index);
    }

    return (
        <div className='h-full w-[300px] shrink-0 pl-28
                        max-tech-md:hidden max-tech-md:h-fit'>
                            
            <div className={`flex flex-col gap-5 h-full justify-center ${bellefair.className}`}>

                { tech.map((tech, index) =>
                    <>
                        {activeIndex === index ? 
                            <button key={uuid()} onClick={() => handleClick(index)}
                                    className='w-[70px] h-[70px] text-[25px] rounded-full border-[rgba(255,255,255,0.3)] border-[1px]
                                                transition-all duration-300 bg-white text-black'>
                                    {index + 1}      
                            </button> :

                            <button key={uuid()} onClick={() => handleClick(index)}
                                    className='w-[70px] h-[70px] text-[25px] rounded-full border-[rgba(255,255,255,0.3)] border-[1px]
                                                transition-all duration-300 hover:bg-white hover:text-black'>
                                {index + 1}
                            </button>
                        }
                    </>
                )}
                
            </div>

        </div>
    )
}

export default TechExternalControllers