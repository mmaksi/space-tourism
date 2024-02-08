'use client';

import { Destination } from '@/types/data';
import React from 'react'
import { useSwiper } from 'swiper/react';

interface PlanetCarouselControllerButtonProps {
    name: string,
    slideIndex: number,
    index: number
}

function PlanetCarouselControllerButton(props: PlanetCarouselControllerButtonProps) 
{
    const { name, slideIndex, index } = props;

    const swiper = useSwiper()

    const handleClick = () =>
    {
        
        swiper.slideToLoop(index);
    }

    return (
        <li className='h-full text-lg'>
            
            {slideIndex === index ?

                <button onClick={handleClick} className='h-full w-full flex items-center justify-center relative tracking-[2.7px]
                                                         max-sm:text-base'>

                    <div className='absolute w-full h-[3px] bottom-0 bg-white'/>
                    {name.toUpperCase()}
                </button> :

                <button onClick={handleClick} className='h-full w-full flex items-center justify-center relative text-[#D0D6F9] 
                                                         tracking-[2.7px] group
                                                         max-sm:text-base'>

                    <div className='absolute w-full h-[3px] bottom-0 transition-all group-hover:bg-[rgba(255,255,255,0.5)]'/>
                    {name.toUpperCase()}
                </button>
            }

            
        </li>
    )
}

export default PlanetCarouselControllerButton