'use client';

import React, { useEffect, useState } from 'react'
import { v4 as uuid } from 'uuid';
import { Swiper, SwiperClass, SwiperRef, SwiperSlide } from 'swiper/react';

import { Technology } from '@/types/data';
import TechItem from './TechItem';
import TechExternalControllers from './TechExternalControllers';
import { useWindowWidthSize } from '@/utils/useWindowSize';

interface TechCarouselProps {
    techs: Technology[],
}

function TechCarousel(props: TechCarouselProps) 
{
    //? There is a problem whit activeIndex state, it rerenders all carousel, making sometimes when on
    //? overflow, make user go to top page on slide change, this can be solved deleting the external buttons and making them internal
    //? as the mobile version

    const { techs } = props;
    
    const [carouselOrientation, setCarouselOrientation] = useState<"vertical" | "horizontal">("vertical");
    const [swiper, setSwiper] = useState<SwiperClass | null>(null)
    const [activeIndex, setActiveIndex] = useState(0);

    const windowWidth = useWindowWidthSize();

    const handleSlideChange = () =>
    {
        if(!swiper) { return; }

        setActiveIndex(swiper.activeIndex);
    }

    useEffect(() => {
        if(windowWidth <= 0) { return; }

        if(windowWidth <= 1260 && carouselOrientation === "vertical")
        {
            setCarouselOrientation("horizontal")
            return;
        }
        else if(windowWidth > 1260)
        {
            setCarouselOrientation("vertical")
        }     
    }, [windowWidth, carouselOrientation])

    return (
        <div className='flex h-[450px] overflow-hidden
                        max-tech-md:h-fit'>
            
            <TechExternalControllers tech={techs} swiper={swiper} activeIndex={activeIndex}/>

            <Swiper direction={carouselOrientation} autoplay={{delay: 3500, disableOnInteraction: true, pauseOnMouseEnter: false,}}
                    onSlideChange={handleSlideChange}
                    className=''>
                
                {techs.map((tech, index) => 
                    <SwiperSlide key={uuid()}>

                        <TechItem slideIndex={index} techs={techs} tech={tech}
                                  setSwiper={setSwiper}/>

                    </SwiperSlide>
                )}

            </Swiper>
        </div>
    )
}

export default TechCarousel