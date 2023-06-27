    import { Outlet, Link } from "react-router-dom";
    import logo from './../assets/list.png';
    import cross from './../assets/cross.png';
    import facebook from './../assets/facebook.png';
    import instagram from './../assets/instagram.png';
    import linkedin from './../assets/linkedin2.png';
    import { useEffect, useState } from "react";
    import MobileLayout from './mobile/Layout';
    import DesktopLayout from './desktop/Layout';

    function Layout() {
        const [width, setWidth] = useState(window.innerWidth);
        const breakpoint = 620;


        useEffect(() => {
            const handleWindowResize = () => setWidth(window.innerWidth);
            window.addEventListener("resize", handleWindowResize);
            return () => window.removeEventListener("resize", handleWindowResize);
        }, []);


        return width < breakpoint ? <MobileLayout /> : <DesktopLayout/>;
    }

    export default Layout;