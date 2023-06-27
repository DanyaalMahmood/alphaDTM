import Logo from './../../assets/logo2.png';
import arrow from './../../assets/arrow.png';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
function Why() {

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
            
            <Link to="/" className='cursor-pointer bg-red-400 z-20'>
                <div className="fixed top-[16vh] left-[6vw] z-20 " >
                    <img src={Logo} alt="logo" width="80" />
                </div>
            </Link>
            <div className="h-[86vh] flex">
                <div className='w-1/4 flex justify-center items-center z-10'>
                    <p className='font-black text-9xl -mr-80'>
                        Why<br />us?
                    </p>
                </div>
                <div className='bg-[#49c5b6] w-3/4 flex flex-col justify-center z-0 pr-40 pl-80'>
                    <p className='text-white py-10 pb-0 text-5xl font-bold'>What's Really amazing About Us?</p>
                    <p className='text-white pb-4 pt-0 text-5xl italic font-normal '>Our Result-Oriented Ideas.</p>
                    <p className='text-white py-4 text-sm'>Anything can look good on paper. Just the thought of making thousands in sales sounds intimidating and winning clients with overpromising stats isn’t really difficult.</p>
                    <p className='text-white py-4 text-sm'>But that's not the alphaDTM way of doing business. We only pitch ideas and strategies that are executable, guarantee results, and get the job done. We stay grounded and only create noise with the results.</p>
                    <p className='text-white py-4 text-sm'>In short, alphaDTM is all about getting things done. No gibberish. Just results.</p>
                    <p className='text-white italic text-xl pb-16'>#TheAlphaWay</p>
                </div>
            </div>

            <div className='bg-[#1C1B20] h-[70vh] justify-center flex flex-col px-20 pl-[40vw] text-white py-20'>
                <p className='text-5xl text-center font-black'>Catering to the</p>
                <p className='text-5xl text-center italic pb-10'>Gen Z Madness.</p>
                <p className='text-sm text-center px-20'>You need to quickly adapt and evolve if you want Gen Z interested in your business. Without a techy edge and creativity boost, you probs have no chance – and that sounds like keeping a close check on what’s trending every freakin’ hour. We have a Gen Z team for that, so you never miss an opportunity to tease and please your audience. It’s all about staying one step ahead without really jumping on the social media bandwagon in a separate attempt.</p>
            </div>
            <div className='h-min px-10 py-10 pb-20 bg-[#F8F8F8] flex flex-col'>
                <div className=' h-[60vh] flex items-center pl-[50vw] px-10'>
                    <p className='text-5xl font-black'>Developing growth<br /> solutions for <span className='font-semibold italic'><br />businesses.</span></p>
                </div>
                <div className=' flex justify-center items-center px-40'>
                    <div className='px-20'>
                        <p className='border-[1px] border-black w-[3rem] h-[3rem] p-3 rounded-full flex justify-center items-center'>1</p>
                        <p className='py-5 text-xl font-black'>Staying connected <br />with the world.</p>
                        <p className='text-xs pb-8'>We truly widen our horizons, stay connected with the best in the business, and learn from other agencies and startups. alphaDTM always knows what’s happening and trending.</p>
                    </div>
                    <div className='px-20'>
                        <p className='border-[1px] border-black w-[3rem] h-[3rem] p-3 rounded-full flex justify-center items-center'>2</p>
                        <p className='py-5 text-xl font-black'>Startup-friendly <br />strategies.</p>
                        <p className='text-xs pb-8'>Taking inspiration is one thing. Dreaming about unrealistic overnight success is another. Our strategies aren’t for Silicon giants but customized for startups only.</p>
                    </div>
                    <div className='px-20'>
                        <p className='border-[1px] border-black w-[3rem] h-[3rem] p-3 rounded-full flex justify-center items-center'>3</p>
                        <p className='py-5 text-xl font-black'>Continous <br />learning.</p>
                        <p className='text-xs pb-8'>The fun part about the digital world is that it is always changing, so we have to be on our toes to learn new skills and catch up on modern technologies.</p>
                    </div>
                </div>
            </div>
            <div className='bg-[#49c5b6] h-[60vh] justify-center flex flex-col pl-40 pr-[50vw]'>
                <p className='pb-10 text-3xl font-semibold text-white italic'>Let’s talk about taking <br /> your business forward.</p>
                <p className='text-sm text-white pb-10'>Let’s hear how it all began. Walk us through your journey, so we can walk along. Knowing your vision and goals will help us create strategies for you. Our team would love to get on a Zoom call with you and discuss how to take things forward.</p>
                <Link to='/contact'>
                <div className='hover:scale-[1.25] duration-200 bg-black p-4 flex items justify-between w-[10rem] items-center '>
                    <p className='text-white text-xs'>Schedule a Call</p>
                    <img src={arrow} alt="Logo" width="20" />
                </div>
                </Link>
            </div>
        </div>
    )
}

export default Why;