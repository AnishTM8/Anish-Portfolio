"use client";

import Image from 'next/image';
import { ReactTyped } from 'react-typed';
import Link from 'next/link';
import { motion } from 'framer-motion';

const HeroSection = () => {
    return (
        <section className='z-[-1]'>
            <div className='grid grid-cols-12'>
                <div className='m-10 px-10 col-span-8'>
                    <div className='text-6xl font-extrabold mt-10'>
                        Hi, I&apos;m {""}
                        <p className='mt-5 pb-2 text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-teal-500 to-emerald-500'>
                            Anish Thapa Magar
                        </p>
                    </div>
                    <p className='text-4xl font-semibold mt-4'>
                        <ReactTyped
                            strings={[
                                "A Web Developer",
                                "A Software Developer",
                                "A UI/UX Enthusiast"
                            ]}
                            loop={true}
                            backDelay={1500}
                        />
                    </p>
                    <div className='mt-6'>
                        <Link href={"/hire-me"} passHref>
                            <button className='mr-6 p-1 w-1/3 text-2xl rounded-full text-white bg-gradient-to-br from-teal-500 via-emerald-500 to-green-500'>
                                <span className='p-3 block rounded-full bg-transparent hover:bg-slate-200 hover:text-black'>
                                    Hire Me
                                </span>
                            </button>
                        </Link>

                        <a href="/assets/downloads/AnishThapaMagar-Resume.pdf" download="AnishThapaMagar-Resume.pdf">
                            <button className='p-1 w-1/3 text-2xl rounded-full text-white bg-gradient-to-br from-teal-500 via-emerald-500 to-green-500'>
                                <span className='p-3 block rounded-full bg-black hover:bg-slate-200 hover:text-black'>
                                    Download CV
                                </span>
                            </button>
                        </a>

                    </div>
                </div>
                <div className='col-span-4 relative flex justify-center items-center'>
                    <motion.svg
                        className='absolute w-[500px] h-[500px] m-4'
                        fill="transparent"
                        viewBox="0 0 506 506"
                        xmlns="http://www.w3.org/2000/svg">
                        <motion.circle
                            cx="253"
                            cy="253"
                            r="250"
                            stroke="#0D9488"
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