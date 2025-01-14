"use client";

import Image from 'next/image';
import {ReactTyped} from 'react-typed';
import Link from 'next/link';
import { motion } from 'framer-motion';

const HeroSection = () => {
    return (
        <section >
            <div className='p-4 sm:p-0 grid grid-cols-1 md:grid-clos-8 lg:grid-cols-12 max-sm:text-center'>
                <div className='px-4 sm:m-10 sm:px-10 md:col-span-8'>
                    <div className='text-6xl font-extrabold sm:mt-10'>
                        {/* Main Text */}
                        Hi, I&apos;m {""}
                        <p className='mt-5 pb-2 text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-teal-500 to-emerald-500'>
                            Anish Thapa Magar
                        </p>
                    </div>
                    <p className='text-4xl font-semibold mt-4'>
                        {/* Typing Animation */}
                        <ReactTyped
                            strings={[
                                "A Web Developer",
                                "A Software Developer",
                                "A UI/UX Enthusiast"
                            ]}
                            loop={true}
                            typeSpeed={30}
                            backSpeed={30}
                            backDelay={1500}
                        />
                    </p>

                    {/* Buttons */}
                    <div className='mt-6 '>
                        <Link href={"/hire-me"} passHref>
                            <button className='sm:mr-6 p-1 w-full sm:w-fit sm:px-1 text-3xl sm:text-2xl rounded-full text-white bg-gradient-to-br from-teal-500 via-emerald-500 to-green-500'>
                                <span className='p-3 sm:px-5 block rounded-full bg-transparent hover:bg-slate-200 hover:text-black'>
                                    Hire Me
                                </span>
                            </button>
                        </Link>
                        
                        <a href="/assets/downloads/AnishThapaMagar-Resume.pdf" download="AnishThapaMagar-Resume.pdf">
                            <button className='p-1 w-full mt-2 sm:w-fit sm:px-1 text-3xl sm:text-2xl rounded-full text-white bg-gradient-to-br from-teal-500 via-emerald-500 to-green-500'>
                                <span className='p-3 block sm:px-5 rounded-full bg-black hover:bg-slate-200 hover:text-black'>
                                    Download CV
                                </span>
                            </button>
                        </a>

                    </div>
                </div>
                <div className='sm:mt-10 sm:mr-5 col-span-3 md:col-span-4 relative flex justify-center items-center z-[-1] max-sm:order-first'>
                    {/* Dotted Circle */}
                    <motion.svg
                        className='absolute sm:w-[500px] sm:h-[500px] lg:w-[520px] lg:h-[520px]  m-4'
                        fill="transparent"
                        viewBox="0 0 506 506"
                        xmlns="http://www.w3.org/2000/svg">
                        <motion.circle
                            cx="253"
                            cy="253"
                            r="250"
                            stroke="#059669"
                            strokeWidth="4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            initial={{ strokeDasharray: "24 10 0 0" }}
                            animate={{
                                strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
                                rotate: [120, 360]
                            }}
                            transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
                        />
                    </motion.svg>
                    <div className='m-6 rounded-full'>
                        <Image src='/images/Me.jpg' alt='My Image' width={500} height={500} className='rounded-full' />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;