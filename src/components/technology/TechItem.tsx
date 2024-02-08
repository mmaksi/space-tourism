import { Images3, Technology } from '@/types/data'
import Image from 'next/image';
import React, { useEffect } from 'react'
import { Bellefair, Barlow_Condensed } from 'next/font/google'; 
import { SwiperClass, useSwiper } from 'swiper/react';
import { useWindowWidthSize } from '@/utils/useWindowSize';
import TechInternalControllers from './TechInternalControllers';

const barlowCondensed = Barlow_Condensed({ 
    weight:['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    subsets: ['latin'] 
  });
  

const bellefair = Bellefair({ weight:['400'], subsets: ['latin']});

interface TechItemProps {
    techs: Technology[],
    tech: Technology,
    slideIndex: number,
    setSwiper: React.Dispatch<React.SetStateAction<SwiperClass | null>>,
}

function TechItem(props: TechItemProps)
{
    const { techs, tech, slideIndex, setSwiper } = props;

    const windowWidth = useWindowWidthSize();
    const swiper = useSwiper();

    useEffect(() => {
        setSwiper(swiper);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [swiper])

    return (
        <div className='flex gap-0
                        max-tech-md:flex-col-reverse'>

            <div className='h-[450px] flex flex-col justify-center
                            max-tech-md:h-fit max-tech-md:text-center'>

                <label className={`tracking-[2.7px] text-[#D0D6F9] ${barlowCondensed.className}`}>
                    THE TERMINOLOGY...
                </label>
                <h1 className={`text-[60px] ${bellefair.className}
                                max-tech-md:text-[45px]
                                max-sm:text-[30px]`}>
                    {tech.name.toUpperCase()
                }</h1>
                <div className='w-full flex justify-center'>
                    <p className='leading-7 text-[#D0D6F9] pr-[100px]
                                max-tech-md:pr-0 max-tech-md:w-[450px]
                                max-sm:w-full max-sm:px-3'>
                        {tech.description}
                    </p>
                </div>
            </div>

            <TechInternalControllers techs={techs} slideIndex={slideIndex}/>
            
            { windowWidth <= 0 ? <></> :
                <div className='shrink-0
                                max-tech-md:flex max-tech-md:items-center max-tech-md:justify-center'>
                    <Image src={windowWidth <= 1260 ? tech.images.landscape : tech.images.portrait} 
                        style={windowWidth <= 1260 ? { width: '100%', height: 'auto', maxWidth: '1100px' } : {} }
                        width={450} height={450} alt='tech.jpg'/>
                </div>
            }
        </div>
    )
}

export default TechItem