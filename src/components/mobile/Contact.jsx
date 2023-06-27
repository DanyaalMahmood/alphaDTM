import Logo from './../../assets/logo6.png';

import blackarrow from './../../assets/blackarrow.png';
import { useRef } from 'react';

function Contact() {

    const formRef = useRef(null);
    const handleSubmit = () => {
        const form = formRef.current;
        form.submit();
    }
    return (
        <div>
            <div className="bg-white h-min flex-col">
                <div className='p-10 pt-4'>
                    <img src={Logo} alt="Logo" width="80" />
                </div>
                <div className='p-10 pb-0'>
                    <p className='font-[1000] text-8xl'>
                        Lets<br />talk.
                    </p>
                </div>
            </div>
            <div className='bg-[#49c5b6] h-min flex-col px-10 -mt-6 py-16'>
               <p className='text-white py-4 text-xs'>Anyone can do the creative talk, get you on a call, and almost make you pay for services you don’t really need. We don’t do the sweet talk. We can’t promise exponential growth. But Rad will take you closer to your business goals every freakin day – and that’s a promise.</p>
            </div>
            <div className='bg-[#1C1B20] h-min flex-col px-10 text-white py-10 pb-20'>
                <p className='text-3xl font-black'>It's time <br/>to do things</p>
                <p className='text-3xl  italic pb-10'>differently...</p>
                <p className='text-xs text-[#757575] pb-10'>You have a business idea and we have the team to help execute it. We have shared this loved story with a bunch of amazing startups and we’d like to add you to the circle too. Let’s get to work.</p>
                <form ref={formRef} action="https://formsubmit.co/alphadtm10@gmail.com" method="POST">
                    <div className='py-5'>
                        <input type="text"  name="First Name" placeholder='First Name' className='mb-10 bg-[#1C1B20] placeholder:text-[#757575] placeholder:text-xl placeholder:italic border-b-[1px]  w-full' />
                        <input type="text"  name="Last Name" placeholder='Last Name' className='mb-10 bg-[#1C1B20] placeholder:text-[#757575] placeholder:text-xl placeholder:italic border-b-[1px]  w-full' />
                        <input type="text" name="Phone Number" placeholder='Your Phone' className='mb-10 bg-[#1C1B20] placeholder:text-[#757575] placeholder:text-xl placeholder:italic border-b-[1px]  w-full' />
                        <input type="text"  name="Email" placeholder='Your Email' className='mb-10 bg-[#1C1B20] placeholder:text-[#757575] placeholder:text-xl placeholder:italic border-b-[1px]  w-full' />
                        <textarea type="text" name="Details" placeholder='Tell us about your project' className='mb-10 bg-[#1C1B20] placeholder:text-[#757575] placeholder:text-xl placeholder:italic border-b-[1px]  w-full' />
                    </div>
                </form>
                <div onClick={handleSubmit} className='bg-white p-3 flex items justify-between w-[10rem] items-center '>
                    <p className='text-black text-xs'>Schedule a Call</p>
                    <img src={blackarrow} alt="Logo" width="20" />
                </div>
            </div>
               
        </div>
    )
}

export default Contact;