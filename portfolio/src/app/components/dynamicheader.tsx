"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

//Define the type of the context provider
interface HeaderProviderType {
    header: string;
    setHeader: (headerText: string) => void;
};

//Create the context provider
export const HeaderContext = createContext<HeaderProviderType | undefined>(undefined);

//Define the props for the context provider
interface HeaderProviderProps {
    children: ReactNode;
};
//Create the context provider
export function HeaderProvider({ children }: HeaderProviderProps) {
    const [header, setHeader] = useState<string>('');

    // Checking the route path of the page to update the header when there is a change in the route
    const pathname = usePathname();

    useEffect(() => {
        const handleRouteChange = () => {
            if (pathname === '/') {
                setHeader('Home');
            };

            if (pathname === '/projects') {
                setHeader('Projects');
            };

            if (pathname === '/skills') {
                setHeader('Skills');
            };

            if (pathname === '/experiences') {
                setHeader('Experiences');
            };

            if (pathname === '/extras') {
                setHeader('Extras');
            };

            if (pathname === '/hire-me') {
                setHeader('Hire Me');
            };
        };

        //set the header based on the route path
        handleRouteChange();

    }, [pathname]);

    return (
        <HeaderContext.Provider value={{ header, setHeader }}>
            {children}
        </HeaderContext.Provider>
    );
};

//Header componenet that consumes the context
const Header = () => {
    const context = useContext(HeaderContext);

    if (!context) {
        throw new Error('Context Unavailable');
    };

    return (
        // Header for screens larger than sm
        <motion.div key={context.header} className="max-sm:hidden p-6 font-semibold text-4xl" initial={{x: -100}} animate={{x: 0}} transition={{duration:0.4}} >
            {context.header} 
        </motion.div>
    );
};

export default Header;