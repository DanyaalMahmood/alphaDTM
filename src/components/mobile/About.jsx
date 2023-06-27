import Logo from './../../assets/logo6.png';
import working from './../../assets/working.jpg';
import abstract from './../../assets/abstract.png';
import { Link } from 'react-router-dom';
import logo from './../../assets/logo2.png';
import { useEffect } from 'react';


function About() {

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
                        ABO<br />UT.
                    </p>
                </div>
            </div>
            <div className='bg-[#49c5b6] h-[22rem] flex-col px-10 py-20'>
                <div className='text-lg italic'>
                    <p>Digital Agency</p>
                </div>
                <div className='pt-5 text-xl font-bold'>
                    <p> <span className='text-white'>We help set up and grow your business </span><br /> using organic and paid marketing.</p>
                </div>
            </div>
            <div className='h-min flex-col'>
                <div className='p-10'>
                    <p className='text-4xl'><span className='font-black'>You won't fall,</span> <span className='italic'>promise</span><span className='italic text-[#ffcb30] font-black'>!</span></p>
                    <p className='py-12 text-xs'>The digital world changes every day. You wake up to new algorithms and boom, your last night’s strategy is now outdated. Our team at alphaDTM keeps a close eye on the changing digital trends and quickly adapts to keep the show running.</p>
                    <p className='text-xs pb-10'>We love learning new stuff and working on new platforms – which means we leave no avenue untapped when it comes to getting you the desired numbers. It’s all smooth sailing when you work with us!</p>
                </div>
                <div className='pb-0 p-10'>
                    <div>
                        <p className='font-bold text-5xl pb-3'>.</p>
                        <p className='font-black text-2xl'>Let's Talk.</p>
                        <p className='text-3xl italic -mt-3'>Zoom Call</p>
                        <p className='text-xs py-10'>Forget the good talk. Let’s get to work. We will schedule a Zoom call with you and cut to the execution part when you say YES!</p>
                    </div>
                    <div>
                        <p className='font-bold text-5xl pb-3'>.</p>
                        <p className='font-black text-2xl'>Review.</p>
                        <p className='text-3xl italic -mt-3'>Designs & Strategies</p>
                        <p className='text-xs py-10'>Have a look at the first few concepts and tell us if the wavelength matches. Locking the mood board is the hardest part and we are prepared for some back and forth.</p>
                    </div>
                    <div>
                        <p className='font-bold text-5xl pb-3'>.</p>
                        <p className='font-black text-2xl'>Sit Back.</p>
                        <p className='text-3xl italic -mt-3'>And Grow</p>
                        <p className='text-xs py-10'>Working with alphaDTM means you don’t have to worry about checking your socials every day or worrying about costs per click, or just anything. We’ve got you covered.</p>
                    </div>
                </div>
                <div className='flex items-center justify-center '>
                    <img src={working} alt="Logo" width="400" />
                </div>
            </div>
            <div className='h-min flex-col'>
                <div className='p-10 pb-20'>
                    <p className='font-black text-4xl'>Only Results.</p>
                    <p className='text-5xl italic -mt-3'>That's it.</p>
                    <p className='text-xl py-10 italic'>We know that hitting the numbers is your first priority and so it is ours too.</p>
                    <p className='text-xs'>We have been a startup too and we know the struggles. From designing your logo to celebrating the first sales milestone, we’d have a fun time working together.</p>
                </div>
                <div>
                    <img src={abstract} alt="Logo" width="400" />
                </div>
            </div>
            <div className='h-min flex-col'>
                <div className='p-10 pb-20 -mt-14'>
                    <p className='font-black text-4xl'>User-Friendly Designs</p>
                    <p className='text-5xl italic -mt-3'>Good Looks. Good Functionality.</p>
                    <p className='text-xl py-10 italic'>Our designs are innovative, beautiful, and user-centric. We are pretty amazing with our designs!</p>
                    <p className='text-xs'>We don’t promise quick work because our team takes its sweet time perfecting every stroke. We create beautiful user experiences and never compromise on quality. That’s our sweet little secret.</p>
                </div>
                <div className='p-10 pb-20 '>
                    <p className='text-5xl italic -mt-3'>Designs, Functionality, <span className='font-black'>and</span> More.</p>
                    <p className='text-xl py-10 italic'>You’ll love working with us, especially when you’d see your dreams come true.</p>
                    <p className='text-xs'>Whether you run an e-commerce store or a consulting firm, we definitely have a relevant case study to share with you. We have helped a bunch of startups achieve their potential and we think it’s time to do it for you too.</p>
                </div>
            </div>
            <div className='bg-[#1C1B20] h-min py-10'>
                <p className='text-white px-10 text-4xl font-black pb-10'>Just a glimpse of our services.</p>
                <div className='px-10 py-2'>
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
            <div className='bg-[#49c5b6] h-min p-10 pb-10'>
                <p className='text-white text-4xl font-black pb-10'>Let's talk the rest on a <span className='italic font-semibold'>Zoom</span> call.</p>
                <p className='text-xs text-white pb-10'>We put a lot of hard work and creativity into every project. You’ll see for yourself.</p>
                <Link to='/contact'><p className='text-white text-xl italic font-semibold underline'>Get in Touch</p></Link>
            </div>
        </div>
    )
}

export default About;