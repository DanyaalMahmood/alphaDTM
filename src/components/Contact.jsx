import { useEffect, useState } from "react";
import MobileContact from './mobile/Contact';
import DesktopContact from './desktop/Contact';

function Why() {
    const [width, setWidth] = useState(window.innerWidth);
    const breakpoint = 620;


    useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);


    return width < breakpoint ? <MobileContact /> : <DesktopContact/>;
}

export default Why;