import { Outlet, Link } from "react-router-dom";
import menupic from './../../assets/list.png';
import cross from './../../assets/cross.png';
import facebook from './../../assets/facebook.png';
import instagram from './../../assets/instagram.png';
import linkedin from './../../assets/linkedin2.png';
import logo from './../../assets/logo2.png';
import { useState } from "react";
import { motion } from "framer-motion";

const menuVariants = {
    closed: {width: '92vw'},
    hover: {width: '87vw'}
}

function Layout() {
    const [menu, setMenu] = useState(false);
    const [hoverstate, setHoverstate] = useState("closed");
    
    const handleClick = () => {
        setMenu(!menu);
        setHoverstate("closed");
    }   



    return (
        !menu ? (
            <div className="flex items-center h-screen">
            <motion.div className="fixed right-[4vw] h-[86vh] w-[92vw] flex no-scrollbar overflow-y-auto no-scrollbar" 
                animate={hoverstate}
                variants={menuVariants}
            >
                <motion.div onHoverStart={() => setHoverstate('hover')} onHoverEnd={() => setHoverstate('closed')} className="z-10 flex items-center left-[3vw] fixed h-[8rem] w-[4rem] self-center cursor-pointer" onClick={handleClick}
                    animate={{scale: !(hoverstate=="hover") ? 1 : 1.4}}
                >
                    <img src={menupic} alt="Logo" className="h-[1.5rem] " />
                    <p className="-rotate-90 text-[0.4rem] pt-4  h-min">MENU</p>
                </motion.div>
                <div className="self-center flex-col flex h-[5rem] justify-between fixed right-[1.5vw]">
                <a href="https://www.facebook.com/people/Alphadtm/100093518154696/?mibextid=LQQJ4d" target="_blank" className="hover:scale-[1.5] duration-100"><img src={facebook} alt="Cross" width="15" /></a>
                        <a href="https://instagram.com/_alphadtm?igshid=Y2I2MzMwZWM3ZA==" target="_blank" className="hover:scale-[1.5] duration-100"><img src={instagram} alt="Cross" width="15" /></a>
                        <a href="https://www.linkedin.com/company/alphadtm/" target="_blank" className="hover:scale-[1.5] duration-100"><img src={linkedin} alt="Cross" width="15" /></a>
                </div>
                <Outlet />
            </motion.div>
            </div>
        ) : (
            <div className="flex items-center h-screen">
                <motion.div className="fixed right-[4vw] bg-[@] h-[86vh] bg-[#49c5b6]"
                initial={{width: "87vw", height: "86vh"}}
                animate={{width: "20vw", height: "74vh"}}
                >
                    
                </motion.div>
                <motion.div className="self center left-[8vw]  fixed rounded-full p-4 bg-gray-200 cursor-pointer" onClick={handleClick}
                    initial={{translateX: '-2.5rem', opacity: '0'}}
                    animate={{translateX: '0rem', opacity: '1'}}
                >
                    <img src={cross} alt="Cross" width="20" />
                </motion.div>
                <motion.div className="fixed top-[13vh] left-[20vw] " 
                    initial={{left:'6vw', opacity: '0'}}
                    animate={{left:'15vw', opacity: '1'}}
                >
                    <img src={logo} alt="Cross" width="80" />
                </motion.div>
                
                <div className="p-10 pl-[15vw] text-4xl font-black">
                    <Link to="/" onClick={handleClick}>
                        <motion.p className="my-9 bg-[#49c5b6]/60 w-0 h-[0.75rem] flex items-center"
                            initial={{translateY: '2.5rem', opacity: '0'}}
                            animate={{translateY: '0rem', opacity: '1'}}
                            whileHover={{width: 'min-content'}}
                            transition={{translateY:{delay: 0.25}, opacity:{delay:0.25}}}
                        >
                            Agency.
                        </motion.p>
                    </Link>
                    <Link to="/about" onClick={handleClick}>
                        <motion.p className="my-9 bg-[#49c5b6]/60 w-0 h-[0.75rem] flex items-center"
                            initial={{translateY: '2.5rem', opacity: '0'}}
                            animate={{translateY: '0rem', opacity: '1'}}
                            whileHover={{width: 'min-content'}}
                            transition={{translateY:{delay: 0.5}, opacity:{delay:0.5}}}
                        >
                            About.
                        </motion.p>
                    </Link>
                    <Link to="/why" onClick={handleClick}>
                        <motion.p className="my-9 bg-[#49c5b6]/60 w-0 whitespace-nowrap h-[0.75rem] flex items-center "
                            initial={{translateY: '2.5rem', opacity: '0'}}
                            animate={{translateY: '0rem', opacity: '1'}}
                            whileHover={{width: 'min-content'}}
                            transition={{translateY:{delay: 0.75}, opacity:{delay:0.75}}}
                        >
                            Why alphaDTM?
                        </motion.p>
                    </Link>
                    <Link to="/contact" onClick={handleClick}>
                        <motion.p className="my-9 bg-[#49c5b6]/60 w-0 h-[0.75rem] flex items-center"
                            initial={{translateY: '2.5rem', opacity: '0'}}
                            animate={{translateY: '0rem', opacity: '1'}}
                            whileHover={{width: 'min-content'}}
                            transition={{translateY:{delay: 1}, opacity:{delay:1}}}
                        >
                            Contact.
                        </motion.p>
                    </Link>
                </div>
                <div className="self-center flex-col flex h-[5rem] justify-between fixed right-[1.5vw]">
                        <a href="https://www.facebook.com/people/Alphadtm/100093518154696/?mibextid=LQQJ4d" target="_blank" className="hover:scale-[1.5] duration-100"><img src={facebook} alt="Cross" width="15" /></a>
                        <a href="https://instagram.com/_alphadtm?igshid=Y2I2MzMwZWM3ZA==" target="_blank" className="hover:scale-[1.5] duration-100"><img src={instagram} alt="Cross" width="15" /></a>
                        <a href="https://www.linkedin.com/company/alphadtm/" target="_blank" className="hover:scale-[1.5] duration-100"><img src={linkedin} alt="Cross" width="15" /></a>
                </div>
            </div>
        )
    );
}

export default Layout;