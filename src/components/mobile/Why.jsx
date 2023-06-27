import logo from './../../assets/logo2.png';
import arrow from './../../assets/arrow.png';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';


function Why() {

    useEffect(() => {
        window.scroll(0,0);
    }, [])
    return (
        <div>
            <div className="bg-white h-min flex-col">
                <Link to="/">
                    <div className="fixed top-[3vh] left-[6vw] " >
                        <img src={logo} alt="logo" width="80" />
                    </div>
                </Link>
                <div className='p-10 pb-0 pt-40'>
                    <p className='font-[1000] text-8xl'>
                        Why<br />us?
                    </p>
                </div>
            </div>
            <div className='bg-[#49c5b6] h-min flex-col px-10 -mt-6'>
               <p className='text-white py-10 pb-0 text-lg font-bold'>What's Really amazing About Us?</p>
               <p className='text-white pb-4 pt-0 text-lg italic font-semibold -mt-2'>Our Result-Oriented Ideas.</p>
               <p className='text-white py-4 text-xs'>Anything can look good on paper. Just the thought of making thousands in sales sounds intimidating and winning clients with overpromising stats isn’t really difficult.</p>
               <p className='text-white py-4 text-xs'>But that's not the alphaDTM way of doing business. We only pitch ideas and strategies that are executable, guarantee results, and get the job done. We stay grounded and only create noise with the results.</p>
               <p className='text-white py-4 text-xs'>In short, alphaDTM is all about getting things done. No gibberish. Just results.</p>
               <p className='text-white italic text-lg pb-16'>#TheAlphaWay</p>
            </div>
            <div className='bg-[#1C1B20] h-min flex-col px-10 text-white py-20'>
                <p className='text-2xl text-center font-black'>Catering to the</p>
                <p className='text-2xl text-center italic pb-10'>Gen Z Madness.</p>
                <p className='text-xs text-center'>You need to quickly adapt and evolve if you want Gen Z interested in your business. Without a techy edge and creativity boost, you probs have no chance – and that sounds like keeping a close check on what’s trending every freakin’ hour. We have a Gen Z team for that, so you never miss an opportunity to tease and please your audience. It’s all about staying one step ahead without really jumping on the social media bandwagon in a separate attempt.</p>
            </div>
            <div className='bg-white h-min flex-col px-10 py-10'>
                <div className='py-10'>
                    <p className='text-3xl font-black'>Developing growth solutions for <span className='font-semibold italic'>businesses.</span></p>
                </div>
                <div>
                    <p className='border-[1px] border-black w-[3rem] h-[3rem] p-3 rounded-full flex justify-center items-center'>1</p>
                    <p className='py-5 text-xl font-black'>Staying connected <br/>with the world.</p>
                    <p className='text-xs pb-8'>We truly widen our horizons, stay connected with the best in the business, and learn from other agencies and startups. alphaDTM always knows what’s happening and trending.</p>
                </div>
                <div>
                    <p className='border-[1px] border-black w-[3rem] h-[3rem] p-3 rounded-full flex justify-center items-center'>2</p>
                    <p className='py-5 text-xl font-black'>Startup-friendly <br/>strategies.</p>
                    <p className='text-xs pb-8'>Taking inspiration is one thing. Dreaming about unrealistic overnight success is another. Our strategies aren’t for Silicon giants but customized for startups only.</p>
                </div>
                <div>
                    <p className='border-[1px] border-black w-[3rem] h-[3rem] p-3 rounded-full flex justify-center items-center'>3</p>
                    <p className='py-5 text-xl font-black'>Continous <br/>learning.</p>
                    <p className='text-xs pb-8'>The fun part about the digital world is that it is always changing, so we have to be on our toes to learn new skills and catch up on modern technologies.</p>
                </div>
            </div>
            <div className='bg-[#49c5b6] h-min py-20 px-10 pb-30'>
                <p className='pb-10 text-lg font-semibold text-white italic'>Let’s talk about taking <br/> your business forward.</p>
                <p className='text-xs text-white pb-10'>Let’s hear how it all began. Walk us through your journey, so we can walk along. Knowing your vision and goals will help us create strategies for you. Our team would love to get on a Zoom call with you and discuss how to take things forward.</p>
                <div className='bg-black p-3 flex items justify-between w-[10rem] items-center '>
                    <Link to='/contact'><p className='text-white text-xs'>Schedule a Call</p></Link>
                    <img src={arrow} alt="Logo" width="20" />
                </div>
            </div>
        </div>
    )
}

export default Why;