import Logo from './../../assets/logo2.png';
import blackarrow from './../../assets/blackarrow.png';
import { Link } from 'react-router-dom';
import { useState, useRef } from 'react';
import { motion } from 'framer-motion';

function Contact() {

    const myElementRef = useRef(null);
    const formRef = useRef(null);
    const [positionTop, setPositionTop] = useState(0);
    const [scrollPercentage, setScrollPercentage] = useState(0);


    const handleScroll = () => {
        const el = myElementRef.current;
        setPositionTop(el.scrollTop);
        setScrollPercentage(el.scrollTop / (el.scrollHeight - el.clientHeight));

    };

    const handleSubmit = () => {
        const form = formRef.current;
        form.submit();
    }
    return (
        <div ref={myElementRef} onScroll={handleScroll} className='example flex-col h-[86vh] overflow-x-hidden z-0 w-full bg-[#F8F8F8]'>
            <motion.div className='bg-[#49c5b6] w-[0rem] h-[0.4rem] fixed top-0 left-0'
                animate={{ width: `${scrollPercentage * 100}vw` }}
                transition={{ duration: 0.1, type: 'tween' }}
            />
            <Link to="/">
                <div className="z-30 fixed top-[16vh] left-[6vw] " >
                    <img src={Logo} alt="logo" width="80" />
                </div>
            </Link>

            <div className=" h-[86vh] flex flex-col">
                <div className='z-10 p-10 h-[50vh] pb-0 flex items-center pl-60'>
                    <p className='font-black text-9xl -mb-40'>
                        Lets<br />talk.
                    </p>
                </div>
                <div className='z-0 px-20 pl-[50vw] bg-[#49c5b6] h-[36vh] flex items-center px-10 py-16'>
                    <p className='text-white py-4 text-lg'>Anyone can do the creative talk, get you on a call, and almost make you pay for services you don’t really need. We don’t do the sweet talk. We can’t promise exponential growth. But alphaDTM will take you closer to your business goals every freakin day – and that’s a promise.</p>
                </div>
            </div>

            <div className='bg-[#1C1B20] h-min flex text-white py-10 pb-20'>
                <div className='px-20 pt-10 pl-40 w-full'>
                    <p className='text-5xl font-black'>It's time <br />to do things</p>
                    <p className='text-5xl  italic pb-10'>differently...</p>
                </div>
                <div className='w-full px-20 pt-60'>
                    <form ref={formRef} action="https://formsubmit.co/alphadtm10@gmail.com" method="POST">
                        <div className='py-5'>
                            <p className='text-sm text-[#757575] pb-10'>You have a business idea and we have the team to help execute it. We have shared this loved story with a bunch of amazing startups and we’d like to add you to the circle too. Let’s get to work.</p>
                            <input type="text" name="First Name" placeholder='First Name' className='mb-10 bg-[#1C1B20] placeholder:text-[#757575] placeholder:text-xl placeholder:italic border-b-[1px]  w-full' />
                            <input type="text" name="Last Name" placeholder='Last Name' className='mb-10 bg-[#1C1B20] placeholder:text-[#757575] placeholder:text-xl placeholder:italic border-b-[1px]  w-full' />
                            <input type="text" name='Phone Number' placeholder='Your Phone' className='mb-10 bg-[#1C1B20] placeholder:text-[#757575] placeholder:text-xl placeholder:italic border-b-[1px]  w-full' />
                            <input type="text" name="Email" placeholder='Your Email' className='mb-10 bg-[#1C1B20] placeholder:text-[#757575] placeholder:text-xl placeholder:italic border-b-[1px]  w-full' />
                            <textarea type="text" name="Details" placeholder='Tell us about your project' className='mb-10 bg-[#1C1B20] placeholder:text-[#757575] placeholder:text-xl placeholder:italic border-b-[1px]  w-full' />
                        </div>
                    </form>
                    <div onClick={handleSubmit}>
                    <div className='hover:scale-[1.25] duration-200 bg-white p-3 flex items justify-between w-[10rem] items-center '>
                        <p className='text-black text-xs'>Schedule a Call</p>
                        <img src={blackarrow} alt="Logo" width="20" />
                    </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Contact;