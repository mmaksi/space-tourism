'use client';

import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import { Autoplay } from 'swiper/modules';

import { v4 as uuid } from 'uuid';

import { Crew } from '@/types/data';

import CrewItem from './CrewItem';


SwiperCore.use([Autoplay]);

interface CrewCarouselProps {
    crew: Crew[],
}

function CrewCarousel(props: CrewCarouselProps) 
{
    const { crew } = props;

    return (
        <Swiper loop={true} autoplay={{delay: 3500, disableOnInteraction: true, pauseOnMouseEnter: false,}}
                className='h-full w-full'>
            
        { crew.map((member, index) =>
            <SwiperSlide className=''  key={uuid()}>
                
                <CrewItem 
                    crew={crew}
                    slideIndex={index}
                    name={member.name}
                    biography={member.bio}
                    charge={member.role}
                    imageSrc={member.images.png}/>

            </SwiperSlide>  
        )}
            
        </Swiper>
    )
}

export default CrewCarousel