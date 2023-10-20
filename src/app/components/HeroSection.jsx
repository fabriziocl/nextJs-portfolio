"use client";
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
    return (
        <section className="lg:py-16">
            <div className='grid grid-cols-1 sm:grid-cols-12'>
                <div className='col-span-8 place-self-center text-center sm:text-left justify-self-start'>
                    <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl font-extrabold">
                        <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-400'>
                            Hello, I&apos;m{" "}
                        </span>
                        <br/>
                        <TypeAnimation
                            sequence={[
                                'Fabrizio',
                                1000, 
                                'Fullstack developer',
                                1000,
                                'Mobile developer',
                                1000,
                                'PERN stack, TS, NextJS',
                                1000
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                    </h1>
                    <p className='text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6 '>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Inventore assumenda vel suscipit earum hic mollitia libero expedita, laborum magni, explicabo a ipsum, placeat repudiandae nobis?
                        Adipisci recusandae possimus assumenda sequi.</p>
                    <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-[#ff7096] hover:bg-slate-200 text-white">
                        Hire me
                    </button>
                    <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-[#ff7096] hover:bg-slate-800 text-white mt-3">
                        <div className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                            <a href="/FCL-resume.pdf" download="FCL-resume.pdf">
                                Download CV
                            </a>
                        </div>
                    </button>
                </div>
                <div className='col-span-4 place-self-center mt-4 mb-6 lg:mt-0'>
                    <div className='rounded-full bg-[#181818] w-[430px] h-[430px] lg:w-[430px] lg:h-[430px] relative '>
                        <Image
                            src='/images/me.png'
                            alt="hero image"
                            className="absolute rounded-3xl transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                            width={280}
                            height={300}
                        />
                    </div>
                </div>
            </div>

        </section>
    )
}

export default HeroSection