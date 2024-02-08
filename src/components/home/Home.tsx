import React from 'react'

import { Bellefair, Barlow_Condensed } from 'next/font/google';
import ExploreButton from './ExploreButton';

const bellefair = Bellefair({ weight:['400'], subsets: ['latin']});

const barlowCondensed = Barlow_Condensed({ 
  weight:['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'] 
});

function Home() 
{
    return (
        <main className='h-[calc(100dvh-100px)] max-h-[1100px] flex items-center justify-center overflow-hidden
                              max-home-md:min-h-[900px] max-home-md:h-[calc(100dvh-75px)]
                              max-sm:min-h-[500px]'>

          <div className='w-full flex items-end justify-around 
                          max-home-md:h-full max-home-md:flex-col max-home-md:items-center'>
                            
                            <div className='w-[490px] text-pretty
                            max-home-md:text-center max-home-md:w-[420px]
                            max-sm:w-[300px]'>
              <h1>
                <div className={`text-[23px] text-[#D0D6F9] tracking-[4.72px] ${barlowCondensed.className}
                                 max-sm:text-[15px]`}>
                  SO, YOU WANT TO TRAVEL TO 
                </div>
                <div className={`text-[130px] ${bellefair.className}
                                 max-sm:text-[95px]`}>
                  SPACE
                </div>
              </h1>
              <p className='text-[17px] text-[#D0D6F9] leading-9
                            max-home-md:leading-7
                            max-sm:text-[14px] max-sm:leading-6'>

                {"Let's face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we'll give you a truly out of this world experience!"}
              </p>
            </div>

            <ExploreButton/>
          </div>

        </main>
    )
}

export default Home