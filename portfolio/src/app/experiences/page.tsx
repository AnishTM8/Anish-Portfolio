import timelineContents from "./timelineContents";
import Image from "next/image";
import workIcon from "/public/assets/work.svg";
import educationIcon from "/public/assets/education.svg";

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
                        <div className="hidden items-start w-50 pt-0.5 relative sm:flex">
                            <div className="w-16 text-center">
                                {content.startDate}
                            </div>
                            <div className={`bg-gradient-to-b from-green-400 via-teal-400 to-emerald-400 w-2 h-full translate-x-7 translate-y-8`}></div>
                            <Image src={content.icon === "work" ? workIcon : educationIcon} alt='School/Job Icon'
                                className={`${color} w-12 rounded-xl p-1 z-20`} />
                            <div className={`bg-gradient-to-b from-green-400 via-teal-500 to-emerald-500 w-8 h-1 translate-y-6`}></div>
                        </div>

                        {/* creating div for other contents */}
                        <div className="border-2 border-green-600 rounded-xl px-8 py-4 bg-slate-500 bg-opacity-25 w-full text-center sm:w-[520px] z-10">
                            <div className="text-2xl mb-3 font-semibold">{content.title}</div>
                            <div className="text-xl m-1 flex items-center justify-center">
                            <svg className="w-5 h-5 fill-current mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                            <path d="M48 0C21.5 0 0 21.5 0 48L0 464c0 26.5 21.5 48 48 48l96 0 0-80c0-26.5 21.5-48 48-48s48 21.5 48 48l0 80 96 0c26.5 0 48-21.5 48-48l0-416c0-26.5-21.5-48-48-48L48 0zM64 240c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zm112-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zM80 96l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zM272 96l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16z"/>
                            </svg>
                                {content.company}
                            </div>
                            <div className="mb-6 m-1 sm:mb-4 flex items-center justify-center italic">
                                <svg className="w-5 h-5 fill-current mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                                </svg>
                                {content.location}
                                <span className="sm:hidden"> <br />{content.startDate}</span>
                            </div>
                            <div className="mx-2 my-4 text-left">{content.description}</div>
                            <div className="flex flex-wrap justify-center mb-5">
                                {content.tech.map((tech, index) => {
                                    return (
                                        <span key={index} className="bg-black text-white/70 rounded-full px-2 py-1 m-1 text-sm">{tech}</span>
                                    )
                                })}
                            </div>
                            {content.endDate && (
                                <div className="m-1 flex items-center justify-center underline text-rose-600 font-semibold">
                                    End: {content.endDate}
                                </div>
                            )}

                            <Image src={content.icon === "work" ? workIcon : educationIcon} alt='School/Job Icon'
                                className={`${color} w-9 rounded-xl p-1 z-20 absolute left-4 top-4 sm:hidden`} />
                        </div>
                    </div>
                );
            })}
        </div>
    )
};

export default Experiences;