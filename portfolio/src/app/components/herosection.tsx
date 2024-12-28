"use client";

import Image from 'next/image';
import { ReactTyped } from 'react-typed';
import Link from 'next/link';

const HeroSection = () => {
    return (
        <section>
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
                <div className='col-span-4'>
                    <div className='m-10 rounded-full'>
                        <br />
                        <Image src='/images/Me.jpg' alt='My Image' width={500} height={500} className='rounded-full' />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default HeroSection;