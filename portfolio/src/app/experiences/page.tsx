import timelineContents from "./timelineContents";
import Image from "next/image";
import workIcon from "/public/assets/work.svg";
import educationIcon from "/public/assets/education.svg";
import Link from "next/link";

const Experiences = () => {
    return (
        <div className="flex flex-col justify-center items-center  sm:text-lg font-base">
            {/* mapping every item from the timeline contents */}
            {timelineContents.map((content) => {

                // color of icons based on the content color specified in the timelineContents
                const color = content.color === "green" ? "bg-green-600" : content.color === "teal" ? "bg-teal-600" : "bg-emerald-600";

                return (
                    <div key={content.id} className="flex m-4 relative">
                        <div className={`bg-gradient-to-b from-green-400 via-teal-400 to-emerald-400 w-1 h-6 translate-x-20 -translate-y-7 sm:hidden opacity-60`}></div>
                        <div className={`bg-gradient-to-b from-green-400 via-teal-400 to-emerald-400 w-1 h-6 translate-x-[calc(100vw-7rem)] -translate-y-7 sm:hidden opacity-60`}></div>
                        <div className="hidden items-start w-44 pt-0.5 relative sm:flex">
                            <div className="w-4/5 ">{content.date}</div>
                            <div className={`bg-gradient-to-b from-green-400 via-teal-400 to-emerald-400 w-2 h-full translate-x-7 translate-y-8`}></div>
                            <Image src={content.icon === "work" ? workIcon : educationIcon} alt='School/Job Icon'
                                className={`${color} w-12 rounded-xl p-1 z-20`} />
                            <div className={`bg-gradient-to-b from-green-400 via-teal-500 to-emerald-500 w-8 h-1 translate-y-6`}></div>
                        </div>

                        {/* creating div for other contents */}
                        <div className="border border-white rounded-xl px-8 py-4 bg-slate-500 bg-opacity-25 w-full text-center sm:w-96 z-10">
                            <div className="text-xl font-semibold">{content.title}</div>
                            <div className="mb-6 m-1 sm:mb-4 sm:text-sm">{content.location}
                                <span className="sm:hidden"> <br />{content.date}</span>
                            </div>
                            <div className="mx-2 my-4 text-left">{content.description}</div>
                            <div className="flex flex-wrap justify-center mb-5">
                                {content.tech.map((tech, index) => {
                                return (
                                    <span key={index} className="bg-black text-white/70 rounded-full px-2 py-1 m-1 text-sm">{tech}</span>
                                )
                            })}
                            </div>

                            <Image src={content.icon === "work" ? workIcon : educationIcon} alt='School/Job Icon'
                                className={`${color} w-9 rounded-xl p-1 z-20 absolute left-4 top-4 sm:hidden`} />

                            <Link href={"/"} passHref>
                                <button className={`${color} hover:bg-slate-200 rounded-md hover:text-black px-4 py-1 mx-auto`}>
                                    {content.buttonText}
                                </button>
                            </Link>
                        </div>
                    </div>
                );
            })}
        </div>
    )
};

export default Experiences;