import React from 'react'
import Container from './Container'
import { LgHeading } from './Headings'
import { ButtonPrimary, ButtonSecondary } from './Buttons'

export default function Hero() {
    return (
        <Container>
            <main className='md:flex'>
                <FirstHeader />
                <ImageHeader />
            </main>
        </Container>
    )
}

const FirstHeader = () => {
    return <div className="md:w-1/2 ml-2 py-20">
        <div className='gradient-text-1 '>
            <LgHeading>SpaceX is future</LgHeading>
        </div>
        {/* <div className='mt-4 font-bold text-green-400 p-2 border-1 border-gray-300'>Connect With us</div> */}
        <h3 className='text-slate-300 mt-4 text-xl'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </h3>
        <div className='flex mt-8'>
            <ButtonSecondary>Know More</ButtonSecondary>
            <ButtonPrimary className="ml-4">Get Started</ButtonPrimary>
        </div>
    </div>
}

const ImageHeader = () => {
    return <img src="/images/rc.png"
        alt='spaceship'
    />
}