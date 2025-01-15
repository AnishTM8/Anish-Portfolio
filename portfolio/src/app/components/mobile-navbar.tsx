"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const MobileNavbar = () => {

    // use state to keep track of the opended and closed state of the nav bar
    const [isOpen, setIsOpen] = useState<boolean>(false);

    //function to toggle the state of the nav bar
    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className="fixed sm:hidden text-2xl font-semibold flex flex-col-2 z-50 ">
            <div className="fixed flex flex-col-2 m-4 bottom-0 right-0 ">
                {/* menu icon */}
                <button onClick={toggleMenu} className={`${isOpen ? 'hidden' : 'block'} bg-emerald-600 rounded-xl p-1`}>
                    <svg className="w-12 h-11 " stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
                {/* closing icon */}
                <button onClick={toggleMenu} className={`${isOpen ? 'block' : 'hidden'} bg-rose-600 rounded-xl p-1`}>
                    <svg className="w-12 h-11" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
            </div>

            {/* Ternary operator to check if the nav bar is open or closed */}
            <AnimatePresence>

                {isOpen && (
                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        transition={{ duration: 0.5, type: 'spring' }}
                        className="border-2 border-emerald-600 bg-black/30 backdrop-blur-3xl w-fit h-fit px-8 py-6 rounded-2xl fixed bottom-[3.5rem] right-0 m-4 origin-bottom-right"
                    >
                        <ul className="hover:text-emerald-500">
                            <Link href="/" onClick={toggleMenu} className="flex items-center">
                                <svg className="w-9 h-9 fill-current mr-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                    <path d="M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" />
                                </svg>
                                Home
                            </Link>
                        </ul>
                        <ul className="mt-8 hover:text-emerald-500">
                            <Link href="/projects" onClick={toggleMenu} className="flex items-center">
                                <svg className="w-9 h-9 fill-current mr-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                    <path d="M384 480l48 0c11.4 0 21.9-6 27.6-15.9l112-192c5.8-9.9 5.8-22.1 .1-32.1S555.5 224 544 224l-400 0c-11.4 0-21.9 6-27.6 15.9L48 357.1 48 96c0-8.8 7.2-16 16-16l117.5 0c4.2 0 8.3 1.7 11.3 4.7l26.5 26.5c21 21 49.5 32.8 79.2 32.8L416 144c8.8 0 16 7.2 16 16l0 32 48 0 0-32c0-35.3-28.7-64-64-64L298.5 96c-17 0-33.3-6.7-45.3-18.7L226.7 50.7c-12-12-28.3-18.7-45.3-18.7L64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l23.7 0L384 480z" />
                                </svg>
                                Projects
                            </Link>
                        </ul>
                        <ul className="mt-8 hover:text-emerald-500">
                            <Link href="/skills" onClick={toggleMenu} className="flex items-center">
                                <svg className="w-9 h-9 fill-current mr-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path d="M78.6 5C69.1-2.4 55.6-1.5 47 7L7 47c-8.5 8.5-9.4 22-2.1 31.6l80 104c4.5 5.9 11.6 9.4 19 9.4l54.1 0 109 109c-14.7 29-10 65.4 14.3 89.6l112 112c12.5 12.5 32.8 12.5 45.3 0l64-64c12.5-12.5 12.5-32.8 0-45.3l-112-112c-24.2-24.2-60.6-29-89.6-14.3l-109-109 0-54.1c0-7.5-3.5-14.5-9.4-19L78.6 5zM19.9 396.1C7.2 408.8 0 426.1 0 444.1C0 481.6 30.4 512 67.9 512c18 0 35.3-7.2 48-19.9L233.7 374.3c-7.8-20.9-9-43.6-3.6-65.1l-61.7-61.7L19.9 396.1zM512 144c0-10.5-1.1-20.7-3.2-30.5c-2.4-11.2-16.1-14.1-24.2-6l-63.9 63.9c-3 3-7.1 4.7-11.3 4.7L352 176c-8.8 0-16-7.2-16-16l0-57.4c0-4.2 1.7-8.3 4.7-11.3l63.9-63.9c8.1-8.1 5.2-21.8-6-24.2C388.7 1.1 378.5 0 368 0C288.5 0 224 64.5 224 144l0 .8 85.3 85.3c36-9.1 75.8 .5 104 28.7L429 274.5c49-23 83-72.8 83-130.5zM56 432a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" />
                                </svg>
                                Skills
                            </Link>
                        </ul>
                        <ul className="mt-8 hover:text-emerald-500">
                            <Link href="/experiences" onClick={toggleMenu} className="flex items-center">
                                <svg className="w-9 h-9 fill-current mr-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path d="M184 48l144 0c4.4 0 8 3.6 8 8l0 40L176 96l0-40c0-4.4 3.6-8 8-8zm-56 8l0 40L64 96C28.7 96 0 124.7 0 160l0 96 192 0 128 0 192 0 0-96c0-35.3-28.7-64-64-64l-64 0 0-40c0-30.9-25.1-56-56-56L184 0c-30.9 0-56 25.1-56 56zM512 288l-192 0 0 32c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-32L0 288 0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-128z" />
                                </svg>
                                Experiences
                            </Link>
                        </ul>
                        <ul className="mt-8 hover:text-emerald-500">
                            <Link href="/extras" onClick={toggleMenu} className="flex items-center">
                                <svg className="w-10 h-10 fill-current mr-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
                                    <rect x="10" y="10" width="35" height="35" rx="5" className="fill-current" />
                                    <rect x="55" y="10" width="35" height="35" rx="5" className="fill-current" />
                                    <rect x="10" y="55" width="35" height="35" rx="5" className="fill-current" />
                                    <rect x="55" y="55" width="35" height="35" rx="5" className="fill-current" />
                                </svg>
                                Extras
                            </Link>
                        </ul>
                        <ul className="mt-8 hover:text-emerald-500">
                            <Link href="/hire-me" onClick={toggleMenu} className="flex items-center">
                                <svg className="w-8 h-8 fill-current mr-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
                                </svg>
                                Hire Me
                            </Link>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>

        </div>
    );
};

export default MobileNavbar;