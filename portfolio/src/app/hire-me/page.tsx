'use client';
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const HireMe = () => {

    const [name, setName] = useState<string>('');
    const [number, setNumber] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [message, setMessage] = useState<string>('');

    const form = useRef<HTMLFormElement>(null);

    const handleSend = (event: React.FormEvent) => {
        event.preventDefault();

        if (form.current && form.current.checkValidity()) {
            //emailJS
            const serviceID = 'service_0x48ltk';
            const templateID = 'template_yzfiwuk';
            const publicKey = 'FwhvOtmX5cQ8YOJuN';

            const templateParams = {
                from_name: name,
                from_email: email,
                from_number: number,
                message: message,
                to_name: 'Anish Thapa Magar',
            };

            //send email to me and user
            emailjs.send(serviceID, templateID, templateParams, publicKey)
                .then(
                    () => {
                        alert('Message Sent!');
                        setName('');
                        setNumber('');
                        setEmail('');
                        setMessage('');

                    },
                    (error) => {
                        console.log('FAILED...', error.text);
                        alert('Failed!');
                    },
                );
        }
        else {
            if (form.current) {
                form.current.reportValidity();
            };
        };

    };

    return (
        <div className='container mx-auto grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-16'>
            <div className="mt-5 md:mt-20 flex flex-col lg:flex-row bg-slate-600 p-10 bg-opacity-25 rounded-xl self-start">
                <form ref={form} className="grid grid-cols-1 gap-5 mx-auto text-white">
                    <h1 className="text-4xl text-green-400">
                        Contact Me
                    </h1>
                    <p className="text-white text-lg">
                        Are you interested in hiring me or want to say hi? You can send me a message.
                    </p>
                    <input required
                        type="text"
                        placeholder="Your Full Name"
                        value={name} onChange={(event) => setName(event.target.value)}
                        className="text-lg h-11 text-black rounded-lg p-3 bg-white border-2 focus:bg-gray-800 focus:border-green-500 focus:text-current outline-none" />

                    <input type="tel"
                        placeholder="Your Phone Number (Optional)"
                        value={number} onChange={(event) => setNumber(event.target.value)}
                        className="text-lg h-11 rounded-lg p-3 text-black bg-white border-2 focus:bg-gray-800 focus:border-green-500 focus:text-current outline-none" />

                    <input required
                        type="email"
                        placeholder="Your E-mail Address"
                        value={email} onChange={(event) => setEmail(event.target.value)}
                        className="text-lg h-11 text-black rounded-lg p-3 bg-white border-2 focus:bg-gray-800 focus:border-green-500 focus:text-current outline-none" />

                    <textarea required
                        placeholder="Write your message here..."
                        value={message} onChange={(event) => setMessage(event.target.value)}
                        className="text-lg h-[175px] text-black rounded-lg p-3 bg-white border-2 focus:bg-gray-800 focus:border-green-500 focus:text-current outline-none" />

                    <button type="submit"
                        onClick={handleSend}
                        className="text-lg p-1 w-1/3 text-white rounded-full bg-gradient-to-br from-teal-500 via-emerald-500 to-green-500
                            ">
                        <span className="p-2 block rounded-full hover:text-black hover:bg-slate-200">
                            Send
                        </span>
                    </button>
                </form>
            </div>

            <div className="mt-5 md:mt-20 flex flex-col lg:flex-row  bg-slate-500 p-10 bg-opacity-25 rounded-xl self-start">
                <div className="grid grid-cols-1 gap-5 mx-auto">
                    <h1 className="text-4xl text-emerald-400">
                        Let&apos;s Connect
                    </h1>
                    <p className="text-white text-lg">
                        I am active on following social platforms. Send me a request.
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-5">

                        {/* LinkedIn logo */}
                        <a href="https://www.linkedin.com/in/anish-thapa-magar/" target="_blank" rel="noreferrer noopener">
                            <svg className="fill-current w-20 h-20 hover:text-emerald-400 hover:scale-110 active:scale-95" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                            </svg>
                        </a>

                        {/* Facebook logo */}
                        <a href="https://www.facebook.com/Cleorte.Fang8" target="_blank" rel="noreferrer noopener">
                            <svg className="fill-current w-20 h-20 hover:text-emerald-400 hover:scale-110 active:scale-95" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64h98.2V334.2H109.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H255V480H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z" />
                            </svg>
                        </a>

                        {/* Instagram logo */}
                        <a href="https://www.instagram.com/cleorte8/" target="_blank" rel="noreferrer noopener">
                            <svg className="fill-current w-20 h-20 hover:text-emerald-400 hover:scale-110 active:scale-95" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                            </svg>
                        </a>

                        {/* X logo */}
                        <a href="https://x.com/AnishTM8" target="_blank" rel="noreferrer noopener">
                            <svg className="fill-current w-20 h-20 hover:text-emerald-400 hover:scale-110 active:scale-95" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                            </svg>
                        </a>

                        {/* GitHub logo */}
                        <a href="https://github.com/Cleorte" target="_blank" rel="noreferrer noopener">
                            <svg className="fill-current w-20 h-20 hover:text-emerald-400 hover:scale-110 active:scale-95" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                            </svg>
                        </a>

                        {/* Email logo */}
                        <a href="mailto:Anish_thapamagar@outlook.com" className="col-span-3 flex items-center hover:text-emerald-400 hover:scale-105 active:scale-95">
                            <svg className="flex-shrink-0 fill-current w-20 h-20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
                            </svg>
                            <p className="ml-5 text-xl break-all">
                                Email Me:
                                <br />
                                Anish_thapamagar@outlook.com
                            </p>
                        </a>

                        {/* Phone logo */}
                        <a href="tel:+19732818821" className="col-span-3 flex items-center hover:text-emerald-400 hover:scale-105 active:scale-95">
                            <svg className="col-span-3 fill-current w-20 h-20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                <path d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zm90.7 96.7c9.7-2.6 19.9 2.3 23.7 11.6l20 48c3.4 8.2 1 17.6-5.8 23.2L168 231.7c16.6 35.2 45.1 63.7 80.3 80.3l20.2-24.7c5.6-6.8 15-9.2 23.2-5.8l48 20c9.3 3.9 14.2 14 11.6 23.7l-12 44C336.9 378 329 384 320 384C196.3 384 96 283.7 96 160c0-9 6-16.9 14.7-19.3l44-12z" />
                            </svg>
                            <p className="ml-5 text-xl ">
                                Call Me:
                                <br />
                                +1 973-281-8821
                            </p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default HireMe;