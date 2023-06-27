import MobileHome from './mobile/Home';
import DesktopHome from './desktop/Home';
import { useEffect, useState } from "react";


function Home() {
    const [menu, setMenu] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);
    const breakpoint = 620;


    useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    return width < breakpoint ? <MobileHome /> : <DesktopHome />;
}

export default Home;