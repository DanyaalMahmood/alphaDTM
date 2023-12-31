import MobileAbout from './mobile/About';
import DesktopAbout from './desktop/About';
import { useState, useEffect } from 'react';

function About() {
    const [width, setWidth] = useState(window.innerWidth);
    const breakpoint = 620;


    useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    return width < breakpoint ? <MobileAbout /> : <DesktopAbout />;
}

export default About;