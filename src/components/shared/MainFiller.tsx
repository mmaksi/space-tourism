import React from 'react'

interface MainFillerProps {
    children: React.ReactNode;
}

function MainFiller(props: MainFillerProps) 
{
    const { children } = props;

    return (
        <main className='min-h-[calc(100dvh-100px)] max-home-md:min-h-[calc(100dvh-75px)]'>
            
            { children }

        </main>
    )
}

export default MainFiller