"use client";

import { ReactTyped } from "react-typed";

const Extras = () => {
    return (
        <div className="text-center">
            <div className='text-6xl font-extrabold sm:mt-10'>
                {/* Main Text */}
                Extra Componenet is
                <div className='mt-5 pb-2 text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-teal-500 to-emerald-500'>
                    Coming Soon
                    <div>
                        <ReactTyped
                            strings={[
                                "...",
                            ]}
                            loop={true}
                            typeSpeed={90}
                            backSpeed={30}
                            showCursor={false}
                        />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Extras;