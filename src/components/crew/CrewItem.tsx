'use client'

import React from 'react';
import Image from 'next/image';
import { Bellefair } from 'next/font/google'; 
import { useSwiper } from 'swiper/react';
import { v4 as uuid } from 'uuid';
import { Crew } from '@/types/data';

const bellefair = Bellefair({ weight:['400'], subsets: ['latin']});

interface CrewCarouselItemProps {
    crew: Crew[],
    slideIndex: number,
    imageSrc: string,
    name: string,
    biography: string,
    charge: string
}

function CrewItem(props: CrewCarouselItemProps)
{
    const { imageSrc, name, biography, charge, crew, slideIndex } = props;
    const swiper = useSwiper();

    const handleClick = (index: number) => 
    {
        swiper.slideToLoop(index)
    }

    return (
        <div className='h-full flex justify-between px-28
                        max-dest-md:flex-col max-dest-md:items-center max-dest-md:px-0
                        max-sm:px-5 max-sm:flex-col-reverse max-sm:justify-end'>

            <div className='h-full flex flex-col justify-between shrink-0 pt-20
                            max-dest-md:h-[300px] max-dest-md:pt-2 max-dest-md:w-full
                            max-sm:flex-col-reverse max-sm:justify-end max-sm:border-t-[1px] max-sm:border-[rgba(255,255,255,0.3)]'>

                <div className='w-full'>
                    <h3 className={`text-[26px] text-[rgba(255,255,255,0.6)] ${bellefair.className}
                                     max-dest-md:text-[24px] max-dest-md:text-center
                                     max-sm:text-[19px]`}>
                        {charge.toUpperCase()}
                    </h3>
                    <h2 className={`text-[45px] ${bellefair.className}
                                    max-dest-md:text-[40px] max-dest-md:text-center
                                    max-sm:text-[25px]`}>
                        {name.toUpperCase()}
                    </h2>
                    <p className='leading-7 w-[350px] text-[#D0D6F9]
                                  max-dest-md:w-full max-dest-md:text-center max-dest-md:px-28
                                  max-sm:leading-[26px] max-sm:px-0'>
                        {biography}
                    </p>
                </div>

                <div className='flex gap-5 w-full pb-10
                                max-dest-md:justify-center
                                max-sm:pb-5 max-sm:pt-5'>

                    {crew.map((member, index) => 

                        <button key={uuid()} onClick={() => handleClick(index)}
                                className='flex items-center justify-center'>

                            { slideIndex === index ?  
                                <div className='w-[12px] h-[12px] bg-white rounded-full scale-125
                                                max-dest-md:h-[10px] max-dest-md:w-[10px]'/> :
                                <div className='w-[12px] h-[12px] bg-[rgba(255,255,255,0.2)] rounded-full transition-all
                                              hover:bg-[rgba(255,255,255,0.5)] hover:scale-125
                                                max-dest-md:h-[10px] max-dest-md:w-[10px]'/> 
                            }

                        </button>
                    )}

                </div>

            </div>

            
            <Image width={400} height={800} src={imageSrc} alt='crew.png'
                   className='h-full shrink-0 w-auto
                              max-dest-md:h-[20px] max-dest-md:basis-auto max-dest-md:grow
                              max-sm:h-[20px] max-sm:w-auto max-sm:max-h-[300px]'/>

        </div>
    )
}

export default CrewItem