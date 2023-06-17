import Logo from './../assets/logo.png';

function About() {
    return (
        <div>
            <div className="bg-white h-min flex-col">
                <div className='p-10'>
                    <img src={Logo} alt="Logo" width="100" />
                </div>
                <div className='p-10 pb-0'>
                    <p className='font-[1000] text-8xl'>
                        ABO<br/>UT.
                    </p>
                </div>
            </div>
            <div className='bg-[#49c5b6] h-[22rem] flex-col px-10 py-20'>
                <div className='text-lg italic'>
                    <p>Digital Agency</p>
                </div>
                <div className='pt-5 text-xl font-bold'>
                    <p> <span className='text-white'>We help set up and grow your business </span><br/> using organic and paid marketing.</p>
                </div>
            </div>

        </div>
    )
}

export default About;