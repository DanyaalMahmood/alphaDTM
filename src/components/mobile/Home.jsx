import astronaut from './../../assets/astronaut.png';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <div className="bg-[#49c5b6] h-[74rem] flex-col">
                <div className="p-10 pt-20">
                    <h1 className="text-2xl font-semibold text-white">
                        alphaDTM<span className="text-black">.</span>
                    </h1>
                </div>
                <div className="self-center flex justify-center h-[30rem] items-center" >
                    <p className="text-6xl font-bold text-start w-min">
                        We are <span className="text-white">alphaDTM</span>.
                    </p>
                </div>
                <div className='p-10 w-[20rem]'>
                    <p className='text-black text-xs'>
                        Fueling Businesses
                    </p>
                    <p className='text-xl font-bold'>
                        Design, Development and Digital Marketing
                    </p>
                    <p className='text-xl font-bold text-white'>
                        We take your website and marketing to the next level.
                    </p>
                </div>
                <div className=' justify-center flex'>
                    <img src={astronaut} alt="astronaut" width="300" />
                </div>
            </div>
            <div className='bg-white h-min py-10'>
                <div className='px-10'>
                    <p className='text-5xl font-black py-6'>
                        Go<br /> 
                        alpha.
                    </p>
                    <p className='text-2xl'>
                        <span className='italic'>Coolest</span> <span className='font-bold'>Digital<br/> Agency</span><span className='text-[#49c5b6] font-bold'>.</span>
                    </p>
                    <p className='py-6 text-xs'>
                        At alphaDTM, we infuse every task with a touch of creativity and excitement. We strive to defy clichés and constantly showcase our innovative approach through remarkable projects. Our team never relies on conventional methods; instead, we deliver consistently cool and extraordinary outcomes.
                    </p>
                    <Link to='/about'>
                    <p className='italic underline underline-offset-4'>
                        About alpaDTM.
                    </p>
                    </Link>
                </div>
            </div>
            <div className='bg-[#1C1B20] h-min py-10'>
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

        </div>
    )
}

export default Home;