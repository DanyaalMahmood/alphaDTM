import Logo from './../../assets/logo2.png';
import working from './../../assets/working2.png';
import abstract from './../../assets/abstract.png';
import test1 from './../../assets/test1.svg';
import test2 from './../../assets/test2.svg';
import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';


function About() {

    const myElementRef = useRef(null);
    const [positionTop, setPositionTop] = useState(0);
    const [scrollPercentage, setScrollPercentage] = useState(0);


    const handleScroll = () => {
        const el = myElementRef.current;
        setPositionTop(el.scrollTop);
        setScrollPercentage(el.scrollTop / (el.scrollHeight - el.clientHeight));

    };
    return (
        <div ref={myElementRef} onScroll={handleScroll} className='example flex-col h-[86vh] overflow-x-hidden z-0 w-full bg-[#F8F8F8]'>
            <motion.div className='bg-[#49c5b6] w-[0rem] h-[0.4rem] fixed top-0 left-0'
                animate={{ width: `${scrollPercentage * 100}vw` }}
                transition={{ duration: 0.1, type: 'tween' }}
            />
            <div className='flex h-full relative'>
                <div className="h-full w-full flex justify-center items-center z-10 ">
                    <Link to="/">
                        <div className="fixed top-[16vh] left-[6vw] " >
                            <img src={Logo} alt="logo" width="80" />
                        </div>
                    </Link>
                    <motion.div className='pl-20 '
                        initial={{ translateX: '-100px', opacity: 0 }}
                        animate={{ translateX: '0px', opacity: 1 }}
                        transition={{ duration: 1, delay: 0.4 }}
                    >
                        <div className='font-black text-9xl'>
                            <div className='overflow-y-hidden'>
                                <motion.div className='font-black'
                                    initial={{ translateY: '110px' }}
                                    animate={{ translateY: '0px' }}
                                    transition={{ duration: 1, delay: 0.4 }}
                                >
                                    ABO
                                </motion.div>
                            </div>
                            <div className='overflow-y-hidden '>
                                <motion.div className='font-black'
                                    initial={{ translateY: '110px' }}
                                    animate={{ translateY: '0px' }}
                                    transition={{ duration: 1, delay: 0.4 }}
                                >
                                    UT.
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </div>
                <div className=' h-full w-full flex-col flex justify-center z-10'>
                    <div className='overflow-y-hidden text-sm font-medium pb-8 italic'>
                        <motion.div className=''
                            initial={{ translateY: '110px' }}
                            animate={{ translateY: '0px' }}
                            transition={{ duration: 1, delay: 0.4 }}
                        >
                            Digital Agency
                        </motion.div>
                    </div>
                    <div className=' text-3xl z-10 font-black'>
                        <div>
                            <div className='overflow-y-hidden text-white'>
                                <motion.div
                                    initial={{ translateY: '110px' }}
                                    animate={{ translateY: '0px' }}
                                    transition={{ duration: 1, delay: 1 }}
                                >
                                    We help set up and grow your business
                                </motion.div>
                            </div>

                            <div className='overflow-y-hidden '>
                                <motion.div
                                    initial={{ translateY: '110px' }}
                                    animate={{ translateY: '0px' }}
                                    transition={{ duration: 1, delay: 1.2 }}
                                >
                                    using organic and paid marketing
                                </motion.div>
                            </div>

                            <div className='overflow-y-hidden '>
                                <motion.div
                                    initial={{ translateY: '110px' }}
                                    animate={{ translateY: '0px' }}
                                    transition={{ duration: 1, delay: 1.4 }}
                                >
                                    strategies.
                                </motion.div>
                            </div>

                        </div>
                    </div>
                </div>
                <motion.div className='bg-[#49c5b6] h-[86vh] w-[66vw] z-0 absolute top-[0vh] right-[0vw]'
                    initial={{ right: '0vw' }}
                    animate={{ right: `${0 - scrollPercentage * 100}vw` }}
                    transition={{ duration: 0.1 }}
                >
                </motion.div>
            </div>


            <div className='h-min flex-col'>
                <div className='bg-[#F8F8F8] flex pl-40 h-[75vh]'>
                    <div className='w-full pt-20 w-full pr-20'>
                        <p className='text-4xl'><span className='font-black'>You won't fall,<br /></span> <span className='italic'>promise</span><span className='italic text-[#ffcb30] font-black'>!</span></p>
                        <p className='py-12 text-sm'>The digital world changes every day. You wake up to new algorithms and boom, your last night’s strategy is now outdated. Our team at Rad keeps a close eye on the changing digital trends and quickly adapts to keep the show running.</p>
                        <p className='text-sm pb-10'>We love learning new stuff and working on new platforms – which means we leave no avenue untapped when it comes to getting you the desired numbers. It’s all rad when you work with us!</p>
                    </div>
                    <div className=' w-full relative'>
                        <motion.img src={test1} alt="Logo" width="175rem" className='absolute top-[2vh] left-[18vw]'
                            initial={{ top: '2vw' }}
                            animate={{ top: `${2 + (((scrollPercentage < 0.20) ? scrollPercentage : 0.20) / 0.2) * 11}vw` }}
                            transition={{ duration: 0.1 }}
                        />
                        <img src={test2} alt="Logo" width="250rem" className='absolute top-[31vh] left-[6vw]' />
                    </div>
                </div>
                <div className='pb-0 flex px-40 justify-center'>
                    <div className=' mx-2 px-10 w-[22vw]'>
                        <p className='font-bold text-5xl pb-3'>.</p>
                        <p className='font-black text-3xl'>Let's Talk.</p>
                        <p className='text-3xl italic -mt-3'>Zoom Call</p>
                        <p className='text-xs py-10'>Forget the good talk. Let’s get to work. We will schedule a Zoom call with you and cut to the execution part when you say YES!</p>
                    </div>
                    <div className=' mx-2 px-10 w-[22vw]'>
                        <p className='font-bold text-5xl pb-3'>.</p>
                        <p className='font-black text-3xl'>Review.</p>
                        <p className='text-3xl italic -mt-3'>Designs & Strategies</p>
                        <p className='text-xs py-10'>Have a look at the first few concepts and tell us if the wavelength matches. Locking the mood board is the hardest part and we are prepared for some back and forth.</p>
                    </div>
                    <div className=' mx-2 px-10 w-[22vw]'>
                        <p className='font-bold text-5xl pb-3'>.</p>
                        <p className='font-black text-3xl'>Sit Back.</p>
                        <p className='text-3xl italic -mt-3'>And Grow</p>
                        <p className='text-xs py-10'>Working with Rad means you don’t have to worry about checking your socials every day or worrying about costs per click, or just anything. We’ve got you covered.</p>
                    </div>
                </div>

            </div>
            <div className='h-min  h-[75vh] flex justify-center pl-80'>
                <motion.div className='p-10 py-20 w-[40vw] '
                    initial={{ translateY: '180px' }}
                    animate={{ translateY: `${180 - (scrollPercentage * 500)}px` }}
                    transition={{ duration: 0.1 }}
                >
                    <p className='font-black text-5xl'>Only Results.</p>
                    <p className='text-5xl italic -mt-3'>That's it.</p>
                    <p className='text-xl py-10 italic'>We know that hitting the numbers is your first priority and so it is ours too.</p>
                    <p className='text-xs'>We have been a startup too and we know the struggles. From designing your logo to celebrating the first sales milestone, we’d have a fun time working together.</p>
                </motion.div>
                <div className=' flex justify-center items-center w-full relative'>
                    <img src={working} alt="Logo" width="450rem" />
                </div>


            </div>
            <div className='h-min flex-col'>
                <div className='flex  h-[80vh]'>
                    <div className="z-0 w-full h-full opacity-70 bg-cover pr-40 bg-[url('assets/abstract.png')]">
                    </div>
                    <div className='z-10 w-full pr-60 pt-20 pl-10'>
                        <p className='font-black text-5xl -ml-40'>User-Friendly Designs</p>
                        <p className='text-5xl italic -mt-3 -ml-40'>Good Looks. Good <br />Functionality.</p>
                        <p className='text-xl py-10 italic'>Our designs are innovative, beautiful, and user-centric. We are pretty rad with our designs!</p>
                        <p className='text-sm'>We don’t promise quick work because our team takes its sweet time perfecting every stroke. We create beautiful user experiences and never compromise on quality. That’s our sweet little secret.</p>
                    </div>
                </div>
                <div className=' h-[60vh]  flex items-center'>
                    <div className='w-[45vw] flex justify-center items-center'>
                        <p className='text-5xl italic'>Designs,<br /> Functionality,<br /> <span className='font-black'>and</span> More.</p>
                    </div>
                    <div className='w-[30vw] -ml-10'>
                        <p className='text-xl py-10 italic'>You’ll love working with us, especially when you’d see your dreams come true.</p>
                        <p className='text-sm'>Whether you run an e-commerce store or a consulting firm, we definitely have a relevant case study to share with you. We have helped a bunch of startups achieve their potential and we think it’s time to do it for you too.</p>
                    </div>
                </div>
            </div>
            <div className='bg-[#1C1B20] h-min py-10 flex items-center'>
                <p className='text-white px-40 pl-60 text-5xl font-black pb-10'>Just a <br />glimpse of <br />our services.</p>
                <div className='grid grid-cols-2'>
                    <div className='px-10 py-2 '>
                        <p className='text-white text-lg font-bold'>Design</p>
                        <div className='text-[#4C4A57] py-6'>
                            <p>Logo Design</p>
                            <p>Web Design</p>
                            <p>Mobile App Design</p>
                            <p>Social Media Designs</p>
                        </div>
                    </div>
                    <div className=' px-10 py-2'>
                        <p className='text-white text-lg font-bold'>Development</p>
                        <div className='text-[#4C4A57] py-6'>
                            <p>Web Development</p>
                            <p>App Development</p>
                            <p>E-commerce Development</p>
                            <p>Web Portal</p>
                        </div>
                    </div>
                    <div className='px-10 py-2'>
                        <p className='text-white text-lg font-bold'>Paid Digital Marketing</p>
                        <div className='text-[#4C4A57] py-6'>
                            <p>Pay-Per-Click ads</p>
                            <p>Social Media Advertisement</p>
                            <p>Remarketing</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-[#49c5b6] h-[40vh] py-10 pb-10 flex items-center'>
                <div>
                    <p className='text-white text-4xl font-black pl-60'>Let's talk the rest on a <span className='italic font-semibold'>Zoom</span> call.</p>
                </div>
                <div className='pl-16 '>
                    <p className='text-sm text-white pb-10 '>We put a lot of hard work and creativity into every <br /> project. You’ll see for yourself.</p>
                    <Link to='/contact'><p className='hover:scale-y-[1.25] duration-100 text-white text-xl italic font-semibold underline'>Get in Touch</p></Link>
                </div>
            </div>
        </div>
    )
}

export default About;