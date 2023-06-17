import { Outlet, Link } from "react-router-dom";
import logo from './../assets/list.png';
import cross from './../assets/cross.png';
import facebook from './../assets/facebook.png';
import instagram from './../assets/instagram.png';
import linkedin from './../assets/linkedin2.png';
import { createFactory, useState } from "react";

function Layout() {
    const [menu, setMenu] = useState(false);

    const handleClick = () => {
        setMenu(!menu)
    }

    return (
        !menu ? (
            <div>
                <div className="fixed top-6 right-5 bg-white rounded-full p-4" onClick={handleClick}>
                    <img src={logo} alt="Logo" width="20" />
                </div>
                <Outlet />
            </div>
        ) : (
            <div>
                <div className="fixed right-3 top-4 bg-[#49c5b6] w-[4.3rem] h-[50.5rem]">
                    <div className="fixed top-6 right-5 bg-white rounded-full p-4" onClick={handleClick}>
                        <img src={cross} alt="Cross" width="20" />
                    </div>
                </div>
                <div className="p-10 pt-[15rem] text-2xl font-black ">
                    <Link to="/" onClick={handleClick}><p className="py-1">Agency.</p></Link>
                    <Link to="/about" onClick={handleClick}><p className="py-1">About.</p></Link>
                    <p className="py-1">Why alphaDTM?</p>
                    <p className="py-1">Contact.</p>
                    <div className="flex py-2 w-[4rem] justify-between">
                        <img src={facebook} alt="Cross" width="15" />
                        <img src={instagram} alt="Cross" width="15" />
                        <img src={linkedin} alt="Cross" width="15" />
                    </div>
                </div>
            </div>
        )
    );
}

export default Layout;