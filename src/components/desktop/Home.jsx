import astronaut from './../../assets/astronaut.png';
import logo from './../../assets/logo2.png';
import arrow from './../../assets/arrowa.png';
import { motion, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const titleVariants = {
    shown: { translateX: '55vw' },
    hidden: { translateX: '0vw' }
}

const descriptionVariants = {
    shown: { translateY: '0px' },
    hidden: { translateY: '100px' }
}

const semiVariants = {
    shown: { translateX: '0px' },
    hidden: { translateX: '-120px' }
}

const scrollVariants = {
    shown:{ translateY: '0px', opacity: 1},
    hidden: { translateY: '40px', opacity: 0}
}

const imageVariants = {
    shown: { opacity: 1 },
    hidden: { opacity: 0 }
}


function Home() {

    const myElementRef = useRef(null);
    const [positionTop, setPositionTop] = useState(0);
    const [scrollPercentage, setScrollPercentage] = useState(0);


    const handleScroll = () => {
        const el = myElementRef.current;
        setPositionTop(el.scrollTop);
        setScrollPercentage(el.scrollTop / (el.scrollHeight-el.clientHeight)) ;

    };

    return (
        <div ref={myElementRef} onScroll={handleScroll} className='example flex-col h-[86vh] overflow-x-hidden z-0 w-full bg-[#F8F8F8]'>
            <motion.div className='bg-[#49c5b6] w-[0rem] h-[0.4rem] fixed top-0 left-0'
             animate={{width: `${scrollPercentage*100}vw`}}
             transition={{duration: 0.1, type: 'tween'}}
             />
             <motion.div className="fixed bottom-[12vh] right-[50vw] flex flex-col items-center justify-center" 
                variants={scrollVariants}
                animate={(positionTop == 0) ? 'shown' : 'hidden'}
                transition={{duration: 0.6}}
             >
                <p className='text-xs text-white font-semibold -rotate-90 '>
                    Scroll
                </ p>
                <motion.img src={arrow} alt="logo" className='pt-6' width="20" 
                    initial={{translateY: '0px'}}
                    animate={{ translateY: [null, '20px', '0px'] }}
                    transition={{repeat: Infinity, duration: 1}}
                />
            </motion.div>
            <div className="bg-[#49c5b6] h-min flex-col">
                <Link to="/">
                    <div className="fixed top-[16vh] left-[6vw] " >
                        <img src={logo} alt="logo" width="80" />
                    </div>
                </Link>
                <div className=" flex h-[180vh] flex-col " >

                    <motion.p className="z-20 self-center text-8xl font-bold text-start w-min sticky top-[25vh]"
                        initial={'hidden'}
                        animate={(positionTop > 0) ? 'shown' : 'hidden'}
                        variants={titleVariants}
                        transition={{ duration: 1 }}
                    >
                        We are <span className="text-white">alphaDTM</span>.

                    </motion.p>
                    <div className='z-10 pl-40 flex sticky top-[20vh]'>
                        <div className='text-3xl flex flex-col justify-center font-black'>
                            <div className='overflow-hidden'>
                                <motion.p className='text-black text-sm italic font-medium'
                                    initial={'hidden'}
                                    animate={((positionTop > 220)) ? 'shown' : 'hidden'}
                                    variants={semiVariants}
                                    transition={{ duration: 1 }}
                                >
                                    Fueling Businesses
                                </motion.p>
                            </div>

                            <div className=' overflow-hidden pt-6'>
                                <motion.p className=''
                                    initial={'hidden'}
                                    animate={((positionTop > 220)) ? 'shown' : 'hidden'}
                                    variants={descriptionVariants}
                                    transition={{ duration: 1 }}
                                >
                                    Design, Development and <br /> Digital Marketing
                                </motion.p>

                            </div>
                            <div className='overflow-hidden'>
                                <motion.p className='text-white'
                                    initial={'hidden'}
                                    animate={((positionTop > 220)) ? 'shown' : 'hidden'}
                                    variants={descriptionVariants}
                                    transition={{ delay: 0.2, duration: 1 }}
                                >
                                    We take your website <br /> and marketing to the <br />next level.
                                </motion.p>
                            </div>
                        </div>
                        <motion.div className='flex pl-[20vw] '
                            initial={'hidden'}
                            animate={((positionTop > 220)) ? 'shown' : 'hidden'}
                            variants={imageVariants}
                            transition={{ delay: 0.2, duration: 1 }}
                        >
                            <img src={astronaut} alt="astronaut" width="340" />
                        </motion.div>
                    </div>
                </div>

            </div>
            <div className=' py-10 flex w-full items-center'>
                <div className='px-10 pl-40 w-[40vw]'>
                    <div className='text-8xl text-[#49c5b6] font-black py-6'>
                        <div className='overflow-y-hidden'><motion.div
                            initial={{translateY: '4.5rem', opacity: 1}}
                            whileInView={{translateY: '0rem', opacity: 1}}
                            viewport={{amount: 'some', once: true, margin: "-50px 0px -50px 0px"}}
                            transition={{duration: 0.5}}
                        >Go</motion.div></div>
                        <div className='overflow-y-hidden'><motion.div
                            initial={{translateY: '4.5rem', opacity: 1}}
                            whileInView={{translateY: '0rem', opacity: 1}}
                            viewport={{amount: 'some', once: true, margin: "-50px 0px -50px 0px"}}
                            transition={{duration: 0.5 }}
                        >
                        alpha.</motion.div></div>
                    </div>
                    <div className='overflow-y-hidden'><motion.div
                            initial={{translateY: '4.5rem', opacity: 1}}
                            whileInView={{translateY: '0rem', opacity: 1}}
                            viewport={{amount: 'some', once: true, margin: "-50px 0px -50px 0px"}}
                            transition={{duration: 0.5, delay: 0.5}}
                        >
                    <p className='text-3xl font-black'>
                        <span className='italic font-semibold'>Coolest</span> <span className=''>Digital<br /> Agency</span><span className='text-[#49c5b6]'>.</span>
                    </p>
                    </motion.div></div>
                    <div className='overflow-y-hidden'><motion.div
                            initial={{translateY: '4.5rem', opacity: 1}}
                            whileInView={{translateY: '0rem', opacity: 1}}
                            viewport={{amount: 'some', once: true, margin: "-50px 0px -50px 0px"}}
                            transition={{duration: 0.5}}
                        >
                    <p className='py-6 text-xs'>
                        At alphaDTM, we infuse every task with a touch of creativity and excitement. We strive to defy clichés and constantly showcase our innovative approach through remarkable projects. Our team never relies on conventional methods; instead, we deliver consistently cool and extraordinary outcomes.
                    </p></motion.div></div>
                    <div className='hover:scale-y-[1.25] duration-100 overflow-y-hidden'><motion.div
                            initial={{translateY: '0.5rem', opacity: 1}}
                            whileInView={{translateY: '0rem', opacity: 1}}
                            viewport={{amount: 'some', once: true, margin: "-50px 0px -50px 0px"}}
                            transition={{duration: 1, delay: 0.4}}
                        >
                    <Link to='/about'>
                    <p className=' italic underline underline-offset-4'>
                        About alphaDTM.
                    </p></Link></motion.div></div>
                </div>
                <motion.div
                            initial={{translateX: '500px'}}
                            animate={{translateX: `${0 + ((1-scrollPercentage)*500)}px`}}
                            transition={{duration: 0}}
                        >
                <div className='bg-[#1C1B20] pr-20 h-min w-[50vw] px-20 py-20 gap-4 grid grid-cols-2'>
                    <div className=''>
                        <p className='text-white text-base font-bold'>Design</p>
                        <div className='text-[#4C4A57] text-sm py-6'>
                            <p>Logo Design</p>
                            <p>Web Design</p>
                            <p>Mobile App Design</p>
                            <p>Social Media Designs</p>
                        </div>
                    </div>
                    <div className=''>
                        <p className='text-white text-base font-bold'>Development</p>
                        <div className='text-[#4C4A57] text-sm py-6'>
                            <p>Web Development</p>
                            <p>App Development</p>
                            <p>E-commerce Development</p>
                            <p>Web Portal</p>
                        </div>
                    </div>
                    <div className=''>
                        <p className='text-white text-base font-bold'>Paid Digital Marketing</p>
                        <div className='text-[#4C4A57] text-sm py-6'>
                            <p>Pay-Per-Click ads</p>
                            <p>Social Media Advertisement</p>
                            <p>Remarketing</p>
                        </div>
                    </div>
                </div></motion.div>

            </div>

        </div>
    )
}

export default Home;