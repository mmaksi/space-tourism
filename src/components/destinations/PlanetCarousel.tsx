'use client'

import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import { Autoplay } from 'swiper/modules';

import { v4 as uuid } from 'uuid';

import PLanetItem from './PlanetItem';
import { Destination } from '@/types/data';

import 'swiper/css'


interface PlanetCarouselProps {
    destinations: Destination[],
}

SwiperCore.use([Autoplay]);

function PlanetCarousel(props: PlanetCarouselProps) 
{
    const { destinations } = props;

    return (
        <Swiper loop autoplay={{
            delay: 3500,
            disableOnInteraction: true,
            pauseOnMouseEnter: false,
        }}>
            
            { destinations.map((destination, index) =>
                <SwiperSlide key={uuid()}>
                    <PLanetItem destinations={destinations} currentDestination={destination} slideIndex={index}/>
                </SwiperSlide>  
            )}
            
            
        </Swiper>
    )
}

export default PlanetCarousel