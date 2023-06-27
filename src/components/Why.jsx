import { useEffect, useState } from "react";
import MobileWhy from './mobile/Why';
import DesktopWhy from './desktop/Why';

function Why() {
    const [width, setWidth] = useState(window.innerWidth);
    const breakpoint = 620;


    useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);


    return width < breakpoint ? <MobileWhy /> : <DesktopWhy/>;
}

export default Why;